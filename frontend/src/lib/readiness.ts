import {
  CyberTrustAnswer,
  CyberTrustQuestion,
} from "@/data/cyberTrustQuestions";

export interface DomainResult {
  id: string;
  domain: string;
  question: string;
  answer: CyberTrustAnswer;
  status: "Implemented" | "Gap Identified" | "Not Applicable";
}

export interface GapRecommendation {
  id: string;
  domain: string;
  issue: string;
  recommendation: string;
  bitdefenderCapability?: string;
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

interface RecommendationMapping {
  recommendation: string;
  bitdefenderCapability?: string;
}

const recommendationMappings: Record<string, RecommendationMapping> = {
  "risk-management-1": {
    recommendation:
      "Establish a documented cybersecurity risk management process to identify, assess, prioritise, and review cybersecurity risks regularly.",
    bitdefenderCapability:
      "GravityZone risk and security posture visibility may support the identification of endpoint-related risks.",
  },

  "compliance-1": {
    recommendation:
      "Identify the legal, regulatory, contractual, and cybersecurity requirements relevant to the organisation and maintain a record of applicable obligations.",
  },

  "training-awareness-1": {
    recommendation:
      "Introduce regular cybersecurity awareness training covering phishing, password security, social engineering, malware, and incident reporting.",
  },

  "asset-management-1": {
    recommendation:
      "Maintain an up-to-date inventory of hardware, software, endpoints, and other important IT assets.",
    bitdefenderCapability:
      "GravityZone endpoint visibility can support the organisation in understanding protected endpoint assets.",
  },

  "data-protection-1": {
    recommendation:
      "Identify sensitive and business-critical information, define appropriate handling requirements, and implement controls to protect it from unauthorised access or loss.",
    bitdefenderCapability:
      "GravityZone security controls may complement data protection measures through endpoint, device, and threat protection capabilities.",
  },

  "backups-1": {
    recommendation:
      "Establish regular backups for critical information and systems, protect backup copies, and perform restoration testing to verify that recovery is possible.",
  },

  "system-security-1": {
    recommendation:
      "Define secure configuration standards and establish a process for identifying, prioritising, and applying operating system and application security updates.",
    bitdefenderCapability:
      "GravityZone Patch Management may assist with identifying and deploying supported software and operating system updates.",
  },

  "anti-malware-1": {
    recommendation:
      "Deploy centrally managed endpoint security across company endpoints and servers and regularly review their protection status.",
    bitdefenderCapability:
      "Bitdefender GravityZone endpoint protection can provide malware prevention and endpoint threat protection.",
  },

  "access-control-1": {
    recommendation:
      "Implement formal access control procedures, apply least privilege, remove unnecessary accounts, and periodically review user access rights.",
  },

  "incident-response-1": {
    recommendation:
      "Create and document an incident response process covering reporting, escalation, containment, investigation, recovery, and post-incident review.",
    bitdefenderCapability:
      "GravityZone EDR/XDR capabilities may support security teams with endpoint detection, investigation, and response activities.",
  },
};

export function analyseReadiness(
  questions: CyberTrustQuestion[],
  answers: Record<string, CyberTrustAnswer>
): ReadinessAnalysis {
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

  const implementedCount = domainResults.filter(
    (result) => result.answer === "yes"
  ).length;

  const gapCount = domainResults.filter(
    (result) => result.answer === "no"
  ).length;

  const notApplicableCount = domainResults.filter(
    (result) => result.answer === "na"
  ).length;

  const applicableQuestions = implementedCount + gapCount;

  const score =
    applicableQuestions > 0
      ? Math.round((implementedCount / applicableQuestions) * 100)
      : 0;

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

  const gaps: GapRecommendation[] = domainResults
    .filter((result) => result.answer === "no")
    .map((result) => {
      const mapping = recommendationMappings[result.id];

      return {
        id: result.id,
        domain: result.domain,
        issue: result.question,
        recommendation:
          mapping?.recommendation ??
          "Review the identified cybersecurity gap and establish an appropriate security control.",
        bitdefenderCapability: mapping?.bitdefenderCapability,
      };
    });

  return {
    score,
    level,
    summary,

    totalQuestions: questions.length,
    applicableQuestions,

    implementedCount,
    gapCount,
    notApplicableCount,

    domainResults,
    gaps,
  };
}