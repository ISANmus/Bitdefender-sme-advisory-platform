
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";


import {
  preparednessStatements,
  type CyberTrustScope,
} from "@/data/cyberTrustAssessmentData";

import {
  buildActivePreparednessItems,
  clearLaterDomainAnswers,
  getQuestionKey,
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

const VALID_SCOPES: CyberTrustScope[] = [
  "classical",
  "cloud",
  "ot",
  "ai",
];

export default function QuestionsPage() {
  const router = useRouter();

  const [ready, setReady] = useState(false);

  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(0);

  const [organisationProfile, setOrganisationProfile] =
    useState<OrganisationProfile | null>(null);

  const [selectedScopes, setSelectedScopes] =
    useState<CyberTrustScope[]>(["classical"]);

  const [answers, setAnswers] = useState<
    Record<string, ProgressiveAnswer>
  >({});

  /*
   * Load saved organisation information,
   * selected scopes and previous answers.
   */
  useEffect(() => {
    try {
      const savedProfile =
        localStorage.getItem("organisationProfile");

      if (savedProfile) {
        setOrganisationProfile(JSON.parse(savedProfile));
      }

      const savedScopes =
        localStorage.getItem("cyberTrustScopes");

      if (savedScopes) {
        const parsedScopes: unknown = JSON.parse(savedScopes);

        if (Array.isArray(parsedScopes)) {
          const validScopes = parsedScopes.filter(
            (scope): scope is CyberTrustScope =>
              VALID_SCOPES.includes(scope as CyberTrustScope)
          );

          setSelectedScopes(
            Array.from(
              new Set<CyberTrustScope>([
                "classical",
                ...validScopes,
              ])
            )
          );
        }
      }

      const savedAnswers =
        localStorage.getItem(
          "cyberTrustProgressiveAnswers"
        );

      if (savedAnswers) {
        setAnswers(JSON.parse(savedAnswers));
      }
    } catch (error) {
      console.error(
        "Unable to load saved assessment data:",
        error
      );
    } finally {
      setReady(true);
    }
  }, []);

  /*
   * Build the active questionnaire dynamically.
   *
   * A No answer stops subsequent statements
   * within the same domain and selected pillar.
   */
  const activeItems = useMemo(
    () =>
      buildActivePreparednessItems(
        selectedScopes,
        answers
      ),
    [selectedScopes, answers]
  );

  const currentItem =
    activeItems[currentQuestionIndex];

  const currentAnswer =
    currentItem
      ? answers[currentItem.id]
      : undefined;

  const answeredCount = activeItems.filter(
    (item) => Boolean(answers[item.id])
  ).length;

  const allQuestionsComplete =
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

  const canContinue =
    Boolean(currentAnswer) &&
    (
      currentAnswer?.answer !== "na" ||
      Boolean(currentAnswer.justification?.trim())
    );

  const progress =
    activeItems.length > 0
      ? (answeredCount / activeItems.length) * 100
      : 0;

  /*
   * Save answers whenever they change.
   */
  function saveAnswers(
    updatedAnswers: Record<string, ProgressiveAnswer>
  ) {
    setAnswers(updatedAnswers);

    localStorage.setItem(
      "cyberTrustProgressiveAnswers",
      JSON.stringify(updatedAnswers)
    );
  }

  /*
   * Select Yes, No or Not Applicable.
   */
  function selectAnswer(
    answer: ProgressiveAnswer["answer"]
  ) {
    if (!currentItem) {
      return;
    }

    let updatedAnswers = {
      ...answers,
      [currentItem.id]: {
        answer,
        justification:
          answer === "na"
            ? answers[currentItem.id]?.justification ?? ""
            : "",
      },
    };

    /*
     * A No clears later answers in the same
     * domain and assessment pillar.
     */
    if (answer === "no") {
      updatedAnswers = clearLaterDomainAnswers(
        updatedAnswers,
        currentItem
      );

      const currentPosition =
        preparednessStatements.findIndex(
          (item) =>
            item.clause === currentItem.statement.clause
        );

      const currentDomain =
        currentItem.statement.domain;

      const currentScope =
        currentItem.scope;

      const updatedAnswersForCleanup = {
        ...updatedAnswers,
      };

      /*
       * Also clear justifications stored inside
       * later answers for that same domain.
       */
      preparednessStatements.forEach(
        (statement, index) => {
          if (
            statement.domain === currentDomain &&
            index > currentPosition
          ) {
            const key = getQuestionKey(
              statement.clause,
              currentScope
            );

            delete updatedAnswersForCleanup[key];
          }
        }
      );

      updatedAnswers = updatedAnswersForCleanup;
    }

    saveAnswers(updatedAnswers);
  }

  /*
   * Update N/A justification.
   */
  function updateJustification(value: string) {
    if (!currentItem) {
      return;
    }

    const updatedAnswers = {
      ...answers,
      [currentItem.id]: {
        answer: "na" as const,
        justification: value,
      },
    };

    saveAnswers(updatedAnswers);
  }

  /*
   * Navigate to the next active statement.
   */
  function goNext() {
    if (!canContinue) {
      return;
    }

    if (
      currentQuestionIndex <
      activeItems.length - 1
    ) {
      setCurrentQuestionIndex(
        (previous) => previous + 1
      );

      return;
    }

    handleAnalyse();
  }

  /*
   * Navigate backwards without losing answers.
   */
  function goPrevious() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(
        (previous) => previous - 1
      );
    }
  }

  /*
   * Complete the preparedness assessment.
   */
  function handleAnalyse() {
    if (!allQuestionsComplete) {
      return;
    }

    localStorage.setItem(
      "cyberTrustProgressiveAnswers",
      JSON.stringify(answers)
    );

    localStorage.setItem(
      "cyberTrustAssessmentCompleted",
      "true"
    );

    router.push("/assessment/results");
  }

  /*
   * Prevent rendering before localStorage loads.
   */
  if (!ready) {
    return (
      <main className="assessmentPage">
        <div className="assessmentContainer">
          Loading assessment...
        </div>
      </main>
    );
  }

  if (!currentItem) {
    return (
      <main className="assessmentPage">
        <div className="assessmentContainer">
          <h2>No assessable statements found.</h2>

          <p>
            Please return to the organisation profile
            and check the selected assessment scopes.
          </p>

          <Link
            href="/assessment"
            className="primaryButton"
          >
            Return to Organisation Profile
          </Link>
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
            href="/assessment"
            className="backHome"
          >
            ← Organisation Profile
          </Link>

        </div>
      </nav>


      {/* Assessment Header */}
      <section className="assessmentHeader">

        <div className="assessmentContainer">

          <div className="assessmentProgressHeader">

            <div>

              <p className="eyebrow">
                CYBER TRUST PREPAREDNESS ASSESSMENT
              </p>

              <h1>
                Cybersecurity Assessment
              </h1>

              <p>
                Evaluate your organisation against
                the CSA Cyber Trust preparedness
                statements.
              </p>

            </div>

            <div className="stepIndicator">

              <span>
                Step 2 of 4
              </span>

              <strong>
                Preparedness Assessment
              </strong>

            </div>

          </div>

          <div className="assessmentProgress">

            <div
              className="questionOverallProgress"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

      </section>


      {/* Assessment Content */}
      <section className="assessmentContent">

        <div className="assessmentContainer questionLayout">

          <div className="questionMain">

            {/* Question Information */}
            <div className="questionTopBar">

              <div>

                <span className="questionNumber">
                  Statement {currentQuestionIndex + 1} of{" "}
                  {activeItems.length}
                </span>

                <span className="domainBadge">
                  {currentItem.statement.domain}
                </span>

              </div>

              <span className="answeredCount">
                {answeredCount} answered
              </span>

            </div>


            {/* Question Card */}
            <div className="questionCard">

              <p className="questionDomain">
                {currentItem.statement.domain}
              </p>

              <h2>
                {currentItem.statement.clause}
              </h2>

              <div className="questionMetadata">

                <span>
                  {currentItem.statement.tier}
                </span>

                <span>
                  {getScopeLabel(currentItem.scope)}
                </span>

              </div>


              {/* CSA Requirement Statements */}
              <div className="csaRequirementList">

                <h3>
                  Assessment Requirements
                </h3>

                {currentItem.scopeContent.map(
                  (content, index) => (

                    <div
                      className="csaRequirement"
                      key={`${content.scope}-${index}`}
                    >

                      <p className="csaRequirementLabel">
                        {content.scope === "classical"
                          ? "Classical Cybersecurity Baseline"
                          : `${getScopeLabel(content.scope)} Requirement`}
                      </p>

                      <p className="csaRequirementText">
                        {content.text}
                      </p>

                    </div>

                  )
                )}

              </div>


              {currentItem.statement.focusArea && (

                <p className="questionDescription">
                  Focus area:{" "}
                  {currentItem.statement.focusArea}
                </p>

              )}


              {/* Answer Options */}
              <div className="answerOptions">

                <button
                  type="button"
                  className={`answerOption ${
                    currentAnswer?.answer === "yes"
                      ? "selectedAnswer"
                      : ""
                  }`}
                  onClick={() => selectAnswer("yes")}
                >

                  <span className="answerCircle">
                    ✓
                  </span>

                  <div>

                    <strong>
                      Yes
                    </strong>

                    <p>
                      The organisation has implemented
                      and meets the stated requirement.
                    </p>

                  </div>

                </button>


                <button
                  type="button"
                  className={`answerOption ${
                    currentAnswer?.answer === "no"
                      ? "selectedAnswer"
                      : ""
                  }`}
                  onClick={() => selectAnswer("no")}
                >

                  <span className="answerCircle">
                    ×
                  </span>

                  <div>

                    <strong>
                      No
                    </strong>

                    <p>
                      The organisation has not
                      implemented or does not meet
                      the stated requirement.
                    </p>

                  </div>

                </button>


                <button
                  type="button"
                  className={`answerOption ${
                    currentAnswer?.answer === "na"
                      ? "selectedAnswer"
                      : ""
                  }`}
                  onClick={() => selectAnswer("na")}
                >

                  <span className="answerCircle">
                    —
                  </span>

                  <div>

                    <strong>
                      Not Applicable
                    </strong>

                    <p>
                      The requirement does not apply
                      to the organisation's environment.
                    </p>

                  </div>

                </button>

              </div>


              {/* N/A Justification */}
              {currentAnswer?.answer === "na" && (

                <div className="naJustification">

                  <label htmlFor="naJustification">
                    Why is this requirement not applicable?
                  </label>

                  <textarea
                    id="naJustification"
                    value={
                      currentAnswer.justification ?? ""
                    }
                    onChange={(event) =>
                      updateJustification(
                        event.target.value
                      )
                    }
                    placeholder="Provide a justification..."
                  />

                  <span>
                    A justification is required before continuing.
                  </span>

                </div>

              )}


              {/* Progression Notice */}
              {currentAnswer?.answer === "no" && (

                <div className="progressionNotice">

                  <strong>
                    Domain progression stopped
                  </strong>

                  <p>
                    Further statements in this domain
                    will be skipped for{" "}
                    {getScopeLabel(currentItem.scope)}.
                    Other domains and selected pillars
                    will continue to be assessed.
                  </p>

                </div>

              )}


              {/* Question Navigation */}
              <div className="questionNavigation">

                <button
                  type="button"
                  className="questionBackButton"
                  onClick={goPrevious}
                  disabled={currentQuestionIndex === 0}
                >
                  ← Previous
                </button>


                <button
                  type="button"
                  className="primaryButton"
                  onClick={goNext}
                  disabled={!canContinue}
                >
                  {currentQuestionIndex ===
                  activeItems.length - 1
                    ? "Complete Assessment →"
                    : "Next Statement →"}
                </button>

              </div>

            </div>

          </div>


          {/* Sidebar */}
          <aside className="questionSidebar">

            <div className="sidebarCard">

              <p className="sidebarLabel">
                ORGANISATION
              </p>

              <strong className="sidebarOrganisation">
                {organisationProfile?.organisationName ||
                  "Current Organisation"}
              </strong>

              {organisationProfile && (

                <div className="organisationSummary">

                  <div>
                    <span>
                      Employees
                    </span>

                    <strong>
                      {organisationProfile.employeeCount}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Endpoints
                    </span>

                    <strong>
                      {organisationProfile.endpointCount}
                    </strong>
                  </div>

                </div>

              )}

            </div>


            <div className="sidebarCard">

              <p className="sidebarLabel">
                SELECTED ASSESSMENT PILLARS
              </p>

              {selectedScopes.map((scope) => (

                <div
                  className="selectedScopeItem"
                  key={scope}
                >
                  ✓ {getScopeLabel(scope)}
                </div>

              ))}

            </div>


            <div className="sidebarNotice">

              <strong>
                About this assessment
              </strong>

              <p>
                This platform provides a preliminary
                Cyber Trust preparedness assessment.
                It does not constitute official CSA
                certification or replace assessment
                by an appointed certification body.
              </p>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}
