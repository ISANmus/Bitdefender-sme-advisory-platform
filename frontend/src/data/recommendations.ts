export interface Recommendation {
  domain: string;
  gap: string;
  securityCapability: string;
  recommendation: string;
  bitdefenderSolutions: string[];
  priority:
    "High" |
    "Medium" |
    "Low";

}


export const recommendations: Recommendation[] = [
  {
    domain: "Anti-virus / Anti-malware",
    priority: "High",
    gap:
      "Endpoints are not currently protected by a managed endpoint security solution.",

    securityCapability:
      "Endpoint Protection and Threat Prevention",

    recommendation:
      "Deploy centrally managed endpoint protection across organisational devices to prevent, detect, and respond to malware threats.",

    bitdefenderSolutions: [
      "GravityZone Business Security",
      "GravityZone Business Security Enterprise",
    ],
  },


  {
    domain: "Incident Response",
    priority: "High",
    gap:
      "The organisation does not have a documented incident response process.",

    securityCapability:
      "Detection, Investigation and Response",

    recommendation:
      "Establish an incident response process covering identification, containment, investigation, recovery, and lessons learned.",

    bitdefenderSolutions: [
      "GravityZone EDR",
      "GravityZone XDR",
    ],
  },


  {
    domain: "System Security",
    priority: "High",
    gap:
      "Systems may not be regularly updated or patched.",

    securityCapability:
      "Vulnerability and Patch Management",

    recommendation:
      "Implement processes to identify vulnerable systems and apply security updates regularly.",

    bitdefenderSolutions: [
      "GravityZone Patch Management",
    ],
  },


  {
    domain: "Asset Management",
    priority: "Medium",
    gap:
      "The organisation does not maintain a complete inventory of IT assets.",

    securityCapability:
      "Asset Visibility",

    recommendation:
      "Maintain visibility of endpoints, applications, and devices within the organisation.",

    bitdefenderSolutions: [
      "GravityZone Security Management Console",
    ],
  },


  {
    domain: "Access Control",
    priority: "High",
    gap:
      "User access controls require improvement.",

    securityCapability:
      "Identity and Access Protection",

    recommendation:
      "Review user permissions regularly and ensure access follows least privilege principles.",

    bitdefenderSolutions: [
      "GravityZone Security Capabilities",
    ],
  },


  {
    domain: "Backups",
    priority: "Medium",
    gap:
      "Backup processes may not sufficiently support recovery from cyber incidents.",

    securityCapability:
      "Recovery and Resilience",

    recommendation:
      "Implement reliable backup procedures and regularly test recovery processes.",

    bitdefenderSolutions: [],
  },


  {
    domain: "Training & Awareness",
    priority: "Low",
    gap:
      "Employees may not receive regular cybersecurity awareness training.",

    securityCapability:
      "Security Awareness",

    recommendation:
      "Conduct regular security awareness activities covering phishing, social engineering, and safe cybersecurity practices.",

    bitdefenderSolutions: [],
  },


  {
    domain: "Data Protection & Privacy",
    priority: "Medium",
    gap:
      "Sensitive data protection practices require improvement.",

    securityCapability:
      "Data Protection",

    recommendation:
      "Identify sensitive information and implement appropriate protection measures.",

    bitdefenderSolutions: [
      "GravityZone Security Capabilities",
    ],
  },
];