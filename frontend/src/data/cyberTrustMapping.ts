export interface CyberTrustDomain {

  domain: string;

  description: string;

  requirement: string;

}


export const cyberTrustDomains: CyberTrustDomain[] = [

  {
    domain: "Risk Management",

    description:
      "Ability to identify, assess and manage cybersecurity risks.",

    requirement:
      "Organisation should establish cybersecurity risk management practices."
  },


  {
    domain: "Compliance",

    description:
      "Understanding cybersecurity obligations and requirements.",

    requirement:
      "Organisation should identify applicable regulatory and contractual requirements."
  },


  {
    domain: "Training & Awareness",

    description:
      "Employees understand cybersecurity risks and responsibilities.",

    requirement:
      "Organisation should conduct cybersecurity awareness activities."
  },


  {
    domain: "Asset Management",

    description:
      "Organisation maintains visibility of IT assets.",

    requirement:
      "Organisation should maintain an inventory of important IT assets."
  },


  {
    domain: "Data Protection & Privacy",

    description:
      "Protection of important organisational data.",

    requirement:
      "Organisation should implement measures to protect sensitive information."
  },


  {
    domain: "Backups",

    description:
      "Ability to recover important information after incidents.",

    requirement:
      "Organisation should perform regular backups and recovery testing."
  },


  {
    domain: "System Security",

    description:
      "Systems are securely configured and maintained.",

    requirement:
      "Organisation should apply security updates and secure configurations."
  },


  {
    domain: "Anti-virus / Anti-malware",

    description:
      "Protection against malicious software threats.",

    requirement:
      "Organisation should deploy malware protection mechanisms."
  },


  {
    domain: "Access Control",

    description:
      "Control over user access to systems and information.",

    requirement:
      "Organisation should implement appropriate access management controls."
  },


  {
    domain: "Incident Response",

    description:
      "Ability to respond to cybersecurity incidents.",

    requirement:
      "Organisation should establish incident response procedures."
  }

];