export type CyberTrustAnswer = "yes" | "no" | "na";

export interface CyberTrustQuestion {
  id: string;
  domain: string;
  question: string;
  description: string;
}

export const cyberTrustQuestions: CyberTrustQuestion[] = [
  {
    id: "risk-management-1",
    domain: "Risk Management",
    question:
      "Has your organisation identified and documented cybersecurity risks that may affect its systems, data, or business operations?",
    description:
      "Cybersecurity risks should be identified so that appropriate safeguards and treatment measures can be planned.",
  },
  {
    id: "compliance-1",
    domain: "Compliance",
    question:
      "Has your organisation identified the cybersecurity, data protection, and regulatory requirements that apply to its operations?",
    description:
      "The organisation should understand the laws, regulations, contractual requirements, and other obligations relevant to its cybersecurity environment.",
  },
  {
    id: "training-awareness-1",
    domain: "Training & Awareness",
    question:
      "Does your organisation provide employees with cybersecurity awareness or security training?",
    description:
      "Employees should understand common cybersecurity threats and their responsibilities when handling organisational systems and information.",
  },
  {
    id: "asset-management-1",
    domain: "Asset Management",
    question:
      "Does your organisation maintain an up-to-date inventory of its hardware, software, and other important IT assets?",
    description:
      "Knowing what assets exist helps the organisation ensure that systems and software can be properly managed and protected.",
  },
  {
    id: "data-protection-1",
    domain: "Data Protection & Privacy",
    question:
      "Has your organisation identified its sensitive or business-critical data and implemented measures to protect it?",
    description:
      "Important information should be appropriately protected during storage, access, processing, and transmission.",
  },
  {
    id: "backups-1",
    domain: "Backups",
    question:
      "Does your organisation regularly back up important business data and verify that the backups can be restored?",
    description:
      "Reliable backups help organisations recover important information following incidents such as ransomware, system failure, or accidental data loss.",
  },
  {
    id: "system-security-1",
    domain: "System Security",
    question:
      "Are your organisation's systems securely configured and regularly updated or patched?",
    description:
      "Systems should be maintained using appropriate security configurations, updates, and patches to reduce exposure to vulnerabilities.",
  },
  {
    id: "anti-malware-1",
    domain: "Anti-virus / Anti-malware",
    question:
      "Are company endpoints and servers protected using anti-malware or endpoint security solutions?",
    description:
      "Endpoint security measures help prevent, detect, and respond to malicious software and other endpoint threats.",
  },
  {
    id: "access-control-1",
    domain: "Access Control",
    question:
      "Does your organisation control user access to systems and information based on business requirements?",
    description:
      "Access should be restricted to authorised users and reviewed so that users only retain the permissions they require.",
  },
  {
    id: "incident-response-1",
    domain: "Incident Response",
    question:
      "Does your organisation have a documented process for reporting and responding to cybersecurity incidents?",
    description:
      "A defined incident response process helps the organisation identify, contain, respond to, and recover from cybersecurity incidents.",
  },
];