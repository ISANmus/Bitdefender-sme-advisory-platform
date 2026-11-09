
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  preparednessStatements,
  type CyberTrustScope,
} from "@/data/cyberTrustAssessmentData";

import {
  buildActivePreparednessItems,
  getScopeContent,
  getScopeLabel,
  type ProgressiveAnswer,
  type ActivePreparednessItem,
} from "@/lib/cyberTrustProgression";

interface OrganisationProfile {
  organisationName: string;
  industry: string;
  employeeCount: string;
  endpointCount: string;
  itManagement: string;
  currentSecurity: string;
}

interface ResultRow {
  item: ActivePreparednessItem;
  response: ProgressiveAnswer;
}

interface SkippedRow {
  clause: string;
  tier: string;
  domain: string;
  scope: CyberTrustScope;
  stoppingClause: string;
}

interface DomainResult {
  id: string;
  domain: string;
  scope: CyberTrustScope;
  assessed: number;
  implemented: number;
  gaps: number;
  notApplicable: number;
}

interface PillarResult {
  scope: CyberTrustScope;
  assessed: number;
  implemented: number;
  gaps: number;
  notApplicable: number;
}

interface ResultsData {
  profile: OrganisationProfile | null;
  scopes: CyberTrustScope[];
  rows: ResultRow[];
  skippedRows: SkippedRow[];
  domainResults: DomainResult[];
  pillarResults: PillarResult[];
  implementedCount: number;
  gapCount: number;
  notApplicableCount: number;
  assessedCount: number;
  skippedCount: number;
  score: number | null;
}

const VALID_SCOPES: CyberTrustScope[] = [
  "classical",
  "cloud",
  "ot",
  "ai",
];

function isCyberTrustScope(
  value: unknown
): value is CyberTrustScope {
  return (
    typeof value === "string" &&
    VALID_SCOPES.includes(value as CyberTrustScope)
  );
}

function calculateResults(
  profile: OrganisationProfile | null,
  scopes: CyberTrustScope[],
  answers: Record<string, ProgressiveAnswer>
): ResultsData {
  const activeItems = buildActivePreparednessItems(
    scopes,
    answers
  );

  const activeIds = new Set(
    activeItems.map((item) => item.id)
  );

  const rows: ResultRow[] = activeItems.flatMap(
    (item) => {
      const response = answers[item.id];

      if (!response) {
        return [];
      }

      return [{ item, response }];
    }
  );

  /*
   * Identify statements omitted by progressive
   * assessment. These are not automatically gaps.
   */
  const skippedRows: SkippedRow[] = [];

  const orderedDomains = Array.from(
    new Set(
      preparednessStatements.map(
        (statement) => statement.domain
      )
    )
  );

  for (const domain of orderedDomains) {
    const domainStatements =
      preparednessStatements.filter(
        (statement) => statement.domain === domain
      );

    for (const scope of scopes) {
      let stoppedAt: string | null = null;

      for (const statement of domainStatements) {
        const scopeContent = getScopeContent(
          statement,
          scope
        );

        if (scopeContent.length === 0) {
          continue;
        }

        const id = `${statement.clause}::${scope}`;

        if (stoppedAt) {
          skippedRows.push({
            clause: statement.clause,
            tier: statement.tier,
            domain: statement.domain,
            scope,
            stoppingClause: stoppedAt,
          });

          continue;
        }

        if (!activeIds.has(id)) {
          continue;
        }

        if (answers[id]?.answer === "no") {
          stoppedAt = statement.clause;
        }
      }
    }
  }

  const implementedCount = rows.filter(
    (row) => row.response.answer === "yes"
  ).length;

  const gapCount = rows.filter(
    (row) => row.response.answer === "no"
  ).length;

  const notApplicableCount = rows.filter(
    (row) => row.response.answer === "na"
  ).length;

  const assessedCount = rows.length;

  const scoredCount =
    implementedCount + gapCount;

  const score =
    scoredCount > 0
      ? Math.round(
          (implementedCount / scoredCount) * 100
        )
      : null;

  /*
   * Build results for each domain and pillar.
   */
  const domainMap = new Map<
    string,
    DomainResult
  >();

  for (const row of rows) {
    const domain = row.item.statement.domain;
    const scope = row.item.scope;
    const id = `${domain}::${scope}`;

    if (!domainMap.has(id)) {
      domainMap.set(id, {
        id,
        domain,
        scope,
        assessed: 0,
        implemented: 0,
        gaps: 0,
        notApplicable: 0,
      });
    }

    const result = domainMap.get(id)!;

    result.assessed += 1;

    if (row.response.answer === "yes") {
      result.implemented += 1;
    }

    if (row.response.answer === "no") {
      result.gaps += 1;
    }

    if (row.response.answer === "na") {
      result.notApplicable += 1;
    }
  }

  const pillarResults: PillarResult[] =
    scopes.map((scope) => {
      const scopeRows = rows.filter(
        (row) => row.item.scope === scope
      );

      return {
        scope,
        assessed: scopeRows.length,
        implemented: scopeRows.filter(
          (row) => row.response.answer === "yes"
        ).length,
        gaps: scopeRows.filter(
          (row) => row.response.answer === "no"
        ).length,
        notApplicable: scopeRows.filter(
          (row) => row.response.answer === "na"
        ).length,
      };
    });

  return {
    profile,
    scopes,
    rows,
    skippedRows,
    domainResults: Array.from(domainMap.values()),
    pillarResults,
    implementedCount,
    gapCount,
    notApplicableCount,
    assessedCount,
    skippedCount: skippedRows.length,
    score,
  };
}

export default function ResultsPage() {
  const router = useRouter();

  const [results, setResults] =
    useState<ResultsData | null>(null);

  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const completed = localStorage.getItem(
        "cyberTrustAssessmentCompleted"
      );

      if (completed !== "true") {
        router.replace("/assessment/questions");
        return;
      }

      const savedAnswers = localStorage.getItem(
        "cyberTrustProgressiveAnswers"
      );

      if (!savedAnswers) {
        router.replace("/assessment/questions");
        return;
      }

      const answers = JSON.parse(
        savedAnswers
      ) as Record<string, ProgressiveAnswer>;

      const savedScopes = localStorage.getItem(
        "cyberTrustScopes"
      );

      let scopes: CyberTrustScope[] = [
        "classical",
      ];

      if (savedScopes) {
        const parsedScopes: unknown =
          JSON.parse(savedScopes);

        if (Array.isArray(parsedScopes)) {
          scopes = Array.from(
            new Set<CyberTrustScope>([
              "classical",
              ...parsedScopes.filter(
                isCyberTrustScope
              ),
            ])
          );
        }
      }

      const activeItems =
        buildActivePreparednessItems(
          scopes,
          answers
        );

      const assessmentComplete =
        activeItems.length > 0 &&
        activeItems.every((item) => {
          const response = answers[item.id];

          if (!response) {
            return false;
          }

          if (
            response.answer === "na" &&
            !response.justification?.trim()
          ) {
            return false;
          }

          return true;
        });

      if (!assessmentComplete) {
        router.replace("/assessment/questions");
        return;
      }

      const savedProfile = localStorage.getItem(
        "organisationProfile"
      );

      const profile = savedProfile
        ? (JSON.parse(
            savedProfile
          ) as OrganisationProfile)
        : null;

      const calculatedResults = calculateResults(
        profile,
        scopes,
        answers
      );

      setResults(calculatedResults);
    } catch (error) {
      console.error(
        "Unable to calculate Cyber Trust results:",
        error
      );

      router.replace("/assessment/questions");
    } finally {
      setReady(true);
    }
  }, [router]);

  function startNewAssessment() {
    localStorage.removeItem(
      "organisationProfile"
    );

    localStorage.removeItem(
      "cyberTrustScopes"
    );

    localStorage.removeItem(
      "cyberTrustProgressiveAnswers"
    );

    localStorage.removeItem(
      "cyberTrustAssessmentCompleted"
    );

    // Clear legacy assessment data as well.
    localStorage.removeItem(
      "cyberTrustAnswers"
    );

    localStorage.removeItem(
      "cyberTrustJustifications"
    );

    router.push("/assessment");
  }

  if (!ready || !results) {
    return (
      <main className="assessmentPage">
        <div className="resultsLoading">
          Analysing Cyber Trust assessment...
        </div>
      </main>
    );
  }

  return (
    <main className="assessmentPage">

      {/* Navigation */}
      <nav className="navbar">
        <div className="container navbarContent">

          <Link href="/" className="brand">
            <Image
              src="/logo.png"
              alt="SME Security Advisor Logo"
              width={120}
              height={45}
              className="brandLogo"
              priority
            />

            <div>
              <p className="brandName">
                SME Security Advisor
              </p>

              <p className="brandSubtext">
                Cyber Trust Readiness & Bitdefender Advisory
              </p>
            </div>
          </Link>

          <Link
            href="/assessment/questions"
            className="backHome"
          >
            ← Review Assessment
          </Link>

        </div>
      </nav>

      {/* Assessment Header */}
      <section className="assessmentHeader">
        <div className="assessmentContainer">

          <div className="assessmentProgressHeader">
            <div>
              <p className="eyebrow">
                CYBER TRUST READINESS ANALYSIS
              </p>

              <h1>
                Cyber Trust Assessment Results
              </h1>

              <p>
                Preliminary comparison of{" "}
                <strong>
                  {results.profile?.organisationName ??
                    "the organisation"}
                </strong>{" "}
                against the CSA Cyber Trust
                preparedness requirements.
              </p>
            </div>

            <div className="stepIndicator">
              <span>Step 3 of 4</span>
              <strong>Readiness Analysis</strong>
            </div>
          </div>

          <div className="assessmentProgress">
            <div className="resultsProgressFill" />
          </div>

        </div>
      </section>

      <section className="resultsSection">
        <div className="assessmentContainer">

          {/* Readiness Summary */}
          <div className="resultsHero">

            <div className="resultsScore">

              <div className="largeScoreCircle">
                <span>
                  {results.score ?? "—"}
                </span>

                {results.score !== null && (
                  <small>%</small>
                )}
              </div>

              <div>
                <p className="resultsLabel">
                  RESPONSE-BASED READINESS INDICATOR
                </p>

                <h2>
                  Cyber Trust Requirement Alignment
                </h2>

                <p className="resultsSummary">
                  {results.score === null
                    ? "There are no Yes/No responses available for calculating an indicator."
                    : `${results.implementedCount} of ${
                        results.implementedCount +
                        results.gapCount
                      } assessed Yes/No requirements were marked as implemented.`}
                </p>
              </div>

            </div>

            <div className="resultsNotice">
              <strong>
                Preliminary assessment only
              </strong>

              <p>
                This indicator is calculated from
                the organisation's self-assessment
                responses. Not Applicable and
                progressively skipped statements are
                excluded from the calculation. It is
                not an official CSA Cyber Trust score,
                certification result or certification
                tier.
              </p>
            </div>

          </div>

          {/* Assessment Statistics */}
          <div className="resultStatsGrid">

            <div className="resultStatCard">
              <span>Assessed Statements</span>
              <strong>
                {results.assessedCount}
              </strong>
            </div>

            <div className="resultStatCard positiveStat">
              <span>Implemented</span>
              <strong>
                {results.implementedCount}
              </strong>
            </div>

            <div className="resultStatCard gapStat">
              <span>Gaps Identified</span>
              <strong>
                {results.gapCount}
              </strong>
            </div>

            <div className="resultStatCard">
              <span>Not Applicable</span>
              <strong>
                {results.notApplicableCount}
              </strong>
            </div>

            <div className="resultStatCard">
              <span>Progressively Skipped</span>
              <strong>
                {results.skippedCount}
              </strong>
            </div>

          </div>

          {/* Pillar Breakdown */}
          <section className="resultsCard pillarBreakdown">
            <div className="resultsCardHeader">
              <div>
                <p className="resultsLabel">
                  ASSESSMENT SCOPE
                </p>

                <h2>
                  Assessment Pillar Breakdown
                </h2>

                <p>
                  Results for each selected
                  cybersecurity assessment pillar.
                </p>
              </div>
            </div>

            <div className="pillarResultsGrid">

              {results.pillarResults.map(
                (pillar) => (
                  <article
                    className="pillarResultCard"
                    key={pillar.scope}
                  >
                    <h3>
                      {getScopeLabel(pillar.scope)}
                    </h3>

                    <div className="pillarResultStats">
                      <div>
                        <span>Assessed</span>
                        <strong>
                          {pillar.assessed}
                        </strong>
                      </div>

                      <div>
                        <span>Implemented</span>
                        <strong>
                          {pillar.implemented}
                        </strong>
                      </div>

                      <div>
                        <span>Gaps</span>
                        <strong>
                          {pillar.gaps}
                        </strong>
                      </div>

                      <div>
                        <span>N/A</span>
                        <strong>
                          {pillar.notApplicable}
                        </strong>
                      </div>
                    </div>
                  </article>
                )
              )}

            </div>
          </section>

          {/* Domain Breakdown */}
          <section className="resultsCard domainBreakdown">
            <div className="resultsCardHeader">
              <div>
                <p className="resultsLabel">
                  CYBER TRUST DOMAINS
                </p>

                <h2>
                  Domain Performance
                </h2>

                <p>
                  Breakdown of assessed requirements
                  across the CSA cybersecurity domains
                  and selected pillars.
                </p>
              </div>
            </div>

            <div className="domainResultsList">

              {results.domainResults.map(
                (domain) => (
                  <article
                    className="domainResultRow"
                    key={domain.id}
                  >
                    <div>
                      <strong>
                        {domain.domain}
                      </strong>

                      <p>
                        {getScopeLabel(domain.scope)}
                      </p>
                    </div>

                    <div className="domainResultCounts">
                      <span>
                        {domain.implemented} Met
                      </span>

                      <span>
                        {domain.gaps} Gaps
                      </span>

                      <span>
                        {domain.notApplicable} N/A
                      </span>
                    </div>
                  </article>
                )
              )}

            </div>
          </section>

          {/* CSA Requirement Comparison */}
          <section className="resultsCard">
            <div className="resultsCardHeader">
              <div>
                <p className="resultsLabel">
                  CSA REQUIREMENT COMPARISON
                </p>

                <h2>
                  Assessment Against Cyber Trust Requirements
                </h2>

                <p>
                  Each assessed response is compared
                  against the original requirement
                  wording from the CSA preparedness
                  questionnaire.
                </p>
              </div>
            </div>

            <div className="assessmentComparisonList">

              {results.rows.map((row) => (
                <article
                  className="assessmentResultRow"
                  key={row.item.id}
                >

                  <div className="assessmentResultHeader">

                    <div>
                      <p className="gapDomain">
                        {row.item.statement.domain}
                      </p>

                      <h3>
                        {row.item.statement.clause}
                      </h3>

                      <p className="assessmentResultMeta">
                        {row.item.statement.tier}
                        {" · "}
                        {getScopeLabel(row.item.scope)}
                      </p>
                    </div>

                    <span
                      className={`domainStatus ${
                        row.response.answer === "yes"
                          ? "statusImplemented"
                          : row.response.answer === "no"
                            ? "statusGap"
                            : "statusNA"
                      }`}
                    >
                      {row.response.answer === "yes"
                        ? "Requirement Met"
                        : row.response.answer === "no"
                          ? "Gap Identified"
                          : "Not Applicable"}
                    </span>

                  </div>

                  <div className="assessmentRequirementDetails">

                    {row.item.scopeContent.map(
                      (content, index) => (
                        <div
                          className="assessmentRequirementText"
                          key={`${row.item.id}-${index}`}
                        >
                          <strong>
                            {content.scope === "classical"
                              ? "Classical Cybersecurity Baseline"
                              : `${getScopeLabel(content.scope)} Requirement`}
                          </strong>

                          <p>
                            {content.text}
                          </p>
                        </div>
                      )
                    )}

                  </div>

                  {row.item.statement.focusArea && (
                    <p className="assessmentResultFocus">
                      Focus area:{" "}
                      {row.item.statement.focusArea}
                    </p>
                  )}

                  {row.response.answer === "na" &&
                    row.response.justification && (
                      <div className="assessmentJustification">
                        <strong>
                          Not Applicable Justification
                        </strong>

                        <p>
                          {row.response.justification}
                        </p>
                      </div>
                    )}

                </article>
              ))}

            </div>
          </section>

          {/* Identified Gaps */}
          <section className="gapsSection">

            <div className="resultsSectionHeading">
              <p className="resultsLabel">
                SECURITY GAP ANALYSIS
              </p>

              <h2>
                Requirements Requiring Attention
              </h2>

              <p>
                These are the CSA requirements that
                were explicitly marked as not
                implemented.
              </p>
            </div>

            {results.gapCount === 0 ? (
              <div className="noGapsCard">
                <span>✓</span>

                <div>
                  <h3>
                    No gaps identified in assessed statements
                  </h3>

                  <p>
                    All assessed requirements were
                    marked as implemented or Not
                    Applicable. Progressively skipped
                    requirements were not evaluated
                    and are not included in this
                    conclusion.
                  </p>
                </div>
              </div>
            ) : (
              <div className="gapCards">

                {results.rows
                  .filter(
                    (row) =>
                      row.response.answer === "no"
                  )
                  .map((row, index) => (
                    <article
                      className="gapRecommendationCard"
                      key={row.item.id}
                    >

                      <div className="gapNumber">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </div>

                      <div className="gapContent">

                        <p className="gapDomain">
                          {row.item.statement.domain}
                          {" · "}
                          {getScopeLabel(row.item.scope)}
                        </p>

                        <h3>
                          {row.item.statement.clause}
                        </h3>

                        <p className="gapIssue">
                          The organisation indicated
                          that it has not implemented
                          or does not meet this CSA
                          requirement.
                        </p>

                        {row.item.scopeContent.map(
                          (content, contentIndex) => (
                            <div
                              className="assessmentRequirementText"
                              key={contentIndex}
                            >
                              <strong>
                                {content.scope === "classical"
                                  ? "Classical Baseline"
                                  : `${getScopeLabel(content.scope)} Requirement`}
                              </strong>

                              <p>
                                {content.text}
                              </p>
                            </div>
                          )
                        )}

                      </div>

                    </article>
                  ))}

              </div>
            )}

          </section>

          {/* Progressively Skipped Requirements */}
          <section className="resultsCard skippedRequirementsSection">

            <div className="resultsCardHeader">
              <div>
                <p className="resultsLabel">
                  PROGRESSIVE ASSESSMENT
                </p>

                <h2>
                  Skipped Requirements
                </h2>

                <p>
                  These statements were not assessed
                  because a preceding requirement
                  within the same domain and pillar
                  received a No response.
                </p>
              </div>
            </div>

            {results.skippedRows.length === 0 ? (
              <p>
                No requirements were skipped by
                progressive assessment.
              </p>
            ) : (
              <div className="skippedRequirementsList">

                {results.skippedRows.map(
                  (item) => (
                    <article
                      className="skippedRequirementRow"
                      key={`${item.clause}::${item.scope}`}
                    >
                      <div>
                        <strong>
                          {item.clause}
                        </strong>

                        <p>
                          {item.domain}
                          {" · "}
                          {getScopeLabel(item.scope)}
                          {" · "}
                          {item.tier}
                        </p>
                      </div>

                      <span>
                        Skipped after {item.stoppingClause}
                      </span>

                    </article>
                  )
                )}

              </div>
            )}

            <p className="skippedDisclaimer">
              Skipped requirements are excluded
              from the readiness indicator and are
              not classified as implemented or as
              identified gaps.
            </p>

          </section>

          {/* Organisation Profile */}
          <aside className="resultsCard">

            <div className="resultsCardHeader">
              <div>
                <p className="resultsLabel">
                  ORGANISATION
                </p>

                <h2>
                  Assessment Profile
                </h2>
              </div>
            </div>

            {results.profile ? (
              <div className="profileResultList">

                <div>
                  <span>Organisation</span>
                  <strong>
                    {results.profile.organisationName}
                  </strong>
                </div>

                <div>
                  <span>Industry</span>
                  <strong>
                    {results.profile.industry}
                  </strong>
                </div>

                <div>
                  <span>Employees</span>
                  <strong>
                    {results.profile.employeeCount}
                  </strong>
                </div>

                <div>
                  <span>Endpoints</span>
                  <strong>
                    {results.profile.endpointCount}
                  </strong>
                </div>

                <div>
                  <span>IT Management</span>
                  <strong>
                    {results.profile.itManagement}
                  </strong>
                </div>

                <div>
                  <span>Existing Endpoint Security</span>
                  <strong>
                    {results.profile.currentSecurity ||
                      "Not specified"}
                  </strong>
                </div>

              </div>
            ) : (
              <p>
                Organisation profile unavailable.
              </p>
            )}

          </aside>

          {/* Next Step */}
          <section className="nextStepCard">

            <div>
              <p className="resultsLabel">
                NEXT STEP
              </p>

              <h2>
                Bitdefender Security Recommendations
              </h2>

              <p>
                Review the identified cybersecurity
                gaps and explore relevant Bitdefender
                security solutions based on the
                organisation's assessment results
                and IT environment.
              </p>
            </div>

            <Link
              href="/assessment/recommendations"
              className="primaryButton"
            >
              View Recommendations →
            </Link>

          </section>

          {/* Page Actions */}
          <div className="resultsActions">

            <Link
              href="/assessment/questions"
              className="secondaryButton"
            >
              Review Answers
            </Link>

            <button
              type="button"
              className="secondaryButton resultButton"
              onClick={startNewAssessment}
            >
              Start New Assessment
            </button>

          </div>

        </div>
      </section>

    </main>
  );
}
