import {
  CyberTrustAnswer,
  CyberTrustQuestion,
} from "@/data/cyberTrustQuestions";

import { recommendations } from "@/data/recommendations";

import {
  evaluateEndpointRisk,
  OrganisationContext,
  RiskModifier,
} from "@/lib/riskContext";


export interface DomainResult {
  id: string;
  domain: string;
  question: string;
  answer: CyberTrustAnswer;
  status:
    | "Implemented"
    | "Gap Identified"
    | "Not Applicable";
}


export interface GapRecommendation {
  id: string;
  domain: string;
  issue: string;
  recommendation: string;
  bitdefenderCapability?: string;
  priority?: "High" | "Medium" | "Low";
  riskLevel?: "Low" | "Medium" | "High";
  riskExplanation?: string;
}


export interface ReadinessAnalysis {
  score: number;
  level: string;
  summary: string;

  totalQuestions: number;
  applicableQuestions: number;

  implementedCount: number;
  gapCount: number;
  notApplicableCount: number;

  domainResults: DomainResult[];
  gaps: GapRecommendation[];
}


export function analyseReadiness(
  questions: CyberTrustQuestion[],
  answers: Record<string, CyberTrustAnswer>,
  organisation?: OrganisationContext
): ReadinessAnalysis {

  /*
   * ----------------------------------------------------
   * 1. Process assessment answers
   * ----------------------------------------------------
   */

  const domainResults: DomainResult[] = questions
    .filter((question) => answers[question.id])
    .map((question) => {

      const answer = answers[question.id];

      let status: DomainResult["status"];

      if (answer === "yes") {
        status = "Implemented";
      } else if (answer === "no") {
        status = "Gap Identified";
      } else {
        status = "Not Applicable";
      }

      return {
        id: question.id,
        domain: question.domain,
        question: question.question,
        answer,
        status,
      };
    });


  /*
   * ----------------------------------------------------
   * 2. Calculate baseline counts
   * ----------------------------------------------------
   */

  const implementedCount =
    domainResults.filter(
      (result) => result.answer === "yes"
    ).length;


  const gapCount =
    domainResults.filter(
      (result) => result.answer === "no"
    ).length;


  const notApplicableCount =
    domainResults.filter(
      (result) => result.answer === "na"
    ).length;


  const applicableQuestions =
    implementedCount + gapCount;


  /*
   * ----------------------------------------------------
   * 3. Calculate preliminary readiness score
   * ----------------------------------------------------
   */

  const score =
    applicableQuestions > 0
      ? Math.round(
          (implementedCount /
            applicableQuestions) *
            100
        )
      : 0;


  /*
   * ----------------------------------------------------
   * 4. Determine readiness level
   * ----------------------------------------------------
   */

  let level: string;
  let summary: string;


  if (applicableQuestions === 0) {

    level = "Insufficient Data";

    summary =
      "There is not enough applicable information to determine a preliminary cybersecurity readiness result.";

  } else if (score >= 80) {

    level = "Strong Baseline";

    summary =
      "The organisation demonstrates a strong cybersecurity baseline across the areas assessed. Remaining gaps should still be addressed before considering formal Cyber Trust certification readiness.";

  } else if (score >= 60) {

    level = "Developing Baseline";

    summary =
      "The organisation has implemented several important cybersecurity practices, but identified gaps should be addressed to strengthen its overall Cyber Trust preparedness.";

  } else {

    level = "Needs Improvement";

    summary =
      "The assessment identified several cybersecurity gaps. The organisation should prioritise these areas before considering itself prepared for a formal Cyber Trust assessment.";

  }


  /*
   * ----------------------------------------------------
   * 5. Evaluate organisation-level endpoint risk
   * ----------------------------------------------------
   */

  let endpointRisk:
    | RiskModifier
    | undefined;


  if (organisation) {

    endpointRisk =
      evaluateEndpointRisk(
        organisation
      );

  }


  /*
   * ----------------------------------------------------
   * 6. Convert identified gaps into recommendations
   * ----------------------------------------------------
   */

  const gaps: GapRecommendation[] =
    domainResults

      .filter(
        (result) =>
          result.answer === "no"
      )

      .map((result) => {

        const matchedRecommendation =
          recommendations.find(
            (item) =>
              item.domain ===
              result.domain
          );


        /*
         * Default values if a domain does not
         * yet have a recommendation mapping.
         */

        const recommendation =
          matchedRecommendation
            ?.recommendation ??
          "Review the identified cybersecurity gap and implement appropriate security controls.";


        let riskLevel:
          | "Low"
          | "Medium"
          | "High"
          | undefined =
          endpointRisk?.riskLevel;


        /*
         * Endpoint-related gaps should inherit
         * the organisation's endpoint risk level.
         */

        if (
          result.domain ===
            "Anti-virus / Anti-malware" &&
          endpointRisk
        ) {

          riskLevel =
            endpointRisk.riskLevel;

        }


        return {

          id: result.id,

          domain: result.domain,

          issue: result.question,

          recommendation,

          bitdefenderCapability:
            matchedRecommendation &&
            matchedRecommendation
              .bitdefenderSolutions
              .length > 0

              ? `${matchedRecommendation.securityCapability} → ${matchedRecommendation.bitdefenderSolutions.join(", ")}`

              : matchedRecommendation
                ? matchedRecommendation.securityCapability
                : undefined,

          priority:
            matchedRecommendation?.priority,

          riskLevel,

          riskExplanation:
            result.domain ===
              "Anti-virus / Anti-malware"
              ? endpointRisk?.explanation
              : undefined,
        };

      });


  /*
   * ----------------------------------------------------
   * 7. Return complete analysis
   * ----------------------------------------------------
   */

  return {

    score,

    level,

    summary,

    totalQuestions:
      questions.length,

    applicableQuestions,

    implementedCount,

    gapCount,

    notApplicableCount,

    domainResults,

    gaps,

  };

}