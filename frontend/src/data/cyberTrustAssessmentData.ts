/**
 * CSA Cyber Trust self-assessment data
 * Source: cyber-trust-self-assessment-v20260929.xlsx
 *
 * Generated from:
 * - CS Preparedness Questionnaire
 * - CS Risk Assessment
 *
 * Keep source wording and clause references unchanged.
 * A null scope statement means the workbook marks that scope as not applicable
 * for that clause (blank or '#').
 */

export type CyberTrustScope = "classical" | "cloud" | "ot" | "ai";

export type CyberTrustTier =
  | "Supporter"
  | "Practitioner"
  | "Promoter"
  | "Performer"
  | "Advocate";

export interface PreparednessStatement {
  clause: string;
  tier: CyberTrustTier;
  domain: string;
  statements: Record<CyberTrustScope, string | null>;
  focusArea: string | null;
  sourceSheet: string;
  sourceRow: number;
}

export interface CyberTrustRiskScenario {
  id: string;
  scope: CyberTrustScope;
  reference: number;
  riskType: string;
  scenario: string;
  informationSecurityProperties: string;
  linkedPreparednessDomains: string | null;
  sourceSheet: string;
  sourceRow: number;
}

export const CYBER_TRUST_SOURCE = {
  workbook: "cyber-trust-self-assessment-v20260929.xlsx",
  versionDate: "2026-09-29",
  preparednessStatementCount: 214,
  domainCount: 22,
  riskScenarioCount: 54,
  scopes: ["classical", "cloud", "ot", "ai"] as CyberTrustScope[],
  tiers: [
    "Supporter",
    "Practitioner",
    "Promoter",
    "Performer",
    "Advocate",
  ] as CyberTrustTier[],
} as const;

export const preparednessStatements: PreparednessStatement[] = [
  {
    "clause": "B.1.1",
    "tier": "Supporter",
    "domain": "Governance",
    "statements": {
      "classical": "Domain is not assessable for this tier. However, the organisation should consider using online resources to promote good cybersecurity practices internally.\n\nNOTE – In Singapore, CSA’s cybersecurity toolkits for organisation leaders, employees and IT/cybersecurity personnel include content on cultivating cybersecurity leadership and setting cybersecurity direction for the organisation.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 5
  },
  {
    "clause": "B.1.2",
    "tier": "Practitioner",
    "domain": "Governance",
    "statements": {
      "classical": "Domain is not assessable for this tier. However, the organisation should consider using online resources to promote good cybersecurity practices internally.\n\nNOTE – In Singapore, CSA’s cybersecurity toolkits for organisation leaders, employees and IT/cybersecurity personnel include content on cultivating cybersecurity leadership and setting cybersecurity direction for the organisation.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 6
  },
  {
    "clause": "B.1.3",
    "tier": "Promoter",
    "domain": "Governance",
    "statements": {
      "classical": "The organisation has established and implemented practices to develop the importance of cybersecurity  within its business context and communicate this to all relevant stakeholders, such as employees, customers and partners.",
      "cloud": "As part of these practices, the organisation has established and implemented the cloud shared responsibility model with the CSP, e.g., through its commercial agreement with the CSP to establish clear roles and responsibilities between the organisation and the CSP.",
      "ot": null,
      "ai": "Such practices include establishing mechanisms for:\n\n–\tThe organisation to provide necessary security information about its AI systems to users and other relevant stakeholders, e.g., acceptable use policy of the AI systems in the organisation; and\n–\tEmployees and external parties to report AI security concerns of the AI systems in the organisation."
    },
    "focusArea": "Understanding the importance of cybersecurity",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 7
  },
  {
    "clause": "B.1.4",
    "tier": "Performer",
    "domain": "Governance",
    "statements": {
      "classical": "The organisation has defined and allocated the roles and responsibilities to ensure that it is clear who is responsible (e.g. Chief Information Security Officer (CISO)) to oversee the cybersecurity program implementation and manage cybersecurity risks within the organisation.",
      "cloud": null,
      "ot": "To ensure OT security has the attention of senior leadership, the organisation has identified member(s) of senior management to oversee and be overall responsible for both IT and OT security.",
      "ai": "The organisation has defined and allocated roles and responsibilities for AI security due to the multidisciplinary nature of AI, which can cut across various organisational functions, e.g., functions overseeing ethics, legal matters, and risk areas."
    },
    "focusArea": "Defining roles and responsibilities",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 8
  },
  {
    "clause": "B.1.5",
    "tier": "Performer",
    "domain": "Governance",
    "statements": {
      "classical": "The Board and/or senior management have sufficient expertise in cybersecurity and are involved in approving and overseeing the implementation of cybersecurity strategy, policies and procedures, and risk management actions.",
      "cloud": "The Board and/or senior management should have sufficient expertise in cloud security to make appropriate business decisions that take into consideration the implications associated with the specific risks of cloud computing, e.g., cloud concentration risk.",
      "ot": "The Board and/or senior management should have sufficient expertise in OT security to make appropriate business decisions that take into consideration the implications associated with the specific risks associated with OT, e.g., continued deployment of legacy OT systems that may not adequately support cybersecurity.",
      "ai": "The Board and/or senior management should have sufficient expertise in AI security to make appropriate business decisions that take into consideration the implications associated with the specific risks of AI, e.g., over-reliance on AI."
    },
    "focusArea": "Board and/or senior management involvement",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 9
  },
  {
    "clause": "B.1.6",
    "tier": "Performer",
    "domain": "Governance",
    "statements": {
      "classical": "The organisation has established cybersecurity goals/objectives that are reviewed and approved by the Board and/or senior management at least annually and implemented through policies and procedures.",
      "cloud": null,
      "ot": null,
      "ai": "This includes identifying and documenting the objectives to guide the secure use of AI system(s) and ensuring these system(s) are used according to the intended purposes."
    },
    "focusArea": "Meeting cybersecurity objectives",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 10
  },
  {
    "clause": "B.1.7",
    "tier": "Advocate",
    "domain": "Governance",
    "statements": {
      "classical": "The Board and/or senior management has established a dedicated cybersecurity committee/forum to discuss cybersecurity initiatives and activities regularly, oversee and monitor cybersecurity risks to ensure compliance with organisational cybersecurity policies, procedures and regulatory requirements.",
      "cloud": "The cybersecurity committee/forum has implemented measures to stay updated on cloud security practices, e.g., participating in cloud special interest groups.",
      "ot": "The cybersecurity committee/forum has implemented measures to stay updated on OT security practices, e.g., participating in OT special interest groups.",
      "ai": "The cybersecurity committee/forum has implemented measures to stay updated on fast-evolving AI security practices and governance landscapes, e.g., participating in AI special interest groups."
    },
    "focusArea": "Forming cybersecurity committee/forum",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 11
  },
  {
    "clause": "B.1.8",
    "tier": "Advocate",
    "domain": "Governance",
    "statements": {
      "classical": "The organisation has established and implemented practices to ensure the Board and/or senior management are regularly updated on cybersecurity matters and key topics and decisions with regard to implementation of programmes and initiatives based on the organisation’s cybersecurity risks are discussed and made promptly.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Reporting to board and/or senior management",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 12
  },
  {
    "clause": "B.2.1",
    "tier": "Supporter",
    "domain": "Policies and procedures",
    "statements": {
      "classical": "Domain is not assessable for this tier. However, the organisation should consider using online resources to promote good cybersecurity practices internally.\n\nNOTE – In Singapore, CSA’s cybersecurity toolkits for organisation leaders, employees and IT/cybersecurity personnel include content on cultivating cybersecurity leadership in the organisation, educating employees on cybersecurity, protecting its information assets, securing its access and environment, and ensuring that its business is cyber resilient.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 14
  },
  {
    "clause": "B.2.2",
    "tier": "Practitioner",
    "domain": "Policies and procedures",
    "statements": {
      "classical": "Domain is not assessable for this tier. However, the organisation should consider using online resources to promote good cybersecurity practices internally.\n\nNOTE – In Singapore, CSA’s cybersecurity toolkits for organisation leaders, employees and IT/cybersecurity personnel include content on cultivating cybersecurity leadership in the organisation, educating employees on cybersecurity, protecting its information assets, securing its access and environment, and ensuring that its business is cyber resilient.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 15
  },
  {
    "clause": "B.2.3",
    "tier": "Promoter",
    "domain": "Policies and procedures",
    "statements": {
      "classical": "The organisation has implemented practices to regularly communicate and update its employees on the cybersecurity processes, industry best practices and standards adopted to manage cybersecurity risks and measures to be taken to protect its information assets.",
      "cloud": null,
      "ot": "The organisation has implemented cross-functional or cross-team communications in areas where OT and IT security operations converge, to bridge the gaps, as OT and IT teams in the organisation may be distinct and operate independently.",
      "ai": "The organisation has implemented cross-functional or cross-team communications in areas where AI security intersects with other functional areas in the organisation, due to the multidisciplinary nature of AI."
    },
    "focusArea": "Communicating  cybersecurity guidance and/or requirements to employees regularly",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 16
  },
  {
    "clause": "B.2.4",
    "tier": "Performer",
    "domain": "Policies and procedures",
    "statements": {
      "classical": "The organisation has established and implemented policies and procedures that incorporate the relevant requirements, guidance and directions to manage cybersecurity risk and protect information assets in its environment to ensure that employees have clear direction and guidance.",
      "cloud": null,
      "ot": "The organisation has established and implemented policies and procedures for the secure use of its OT environment and integrated these policies and procedures with its IT policies and procedures, whilst taking into consideration the differences between the OT and IT environment.",
      "ai": "The organisation has established and implemented policies and procedures for the secure use of its AI system(s) in the organisation and integrated these policies and procedures with other organisational policies and procedures, e.g., enterprise and/or cybersecurity risk management."
    },
    "focusArea": "Esstablishing policies and procedures",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 17
  },
  {
    "clause": "B.2.5",
    "tier": "Performer",
    "domain": "Policies and procedures",
    "statements": {
      "classical": "The cybersecurity policies and procedures are approved and formalised by the Board and/or senior management to ensure top-down support.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Board and/or senior management approval",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 18
  },
  {
    "clause": "B.2.6",
    "tier": "Performer",
    "domain": "Policies and procedures",
    "statements": {
      "classical": "The cybersecurity policies and procedures are published, communicated and made accessible for employees to ensure that the employees have clear direction and guidance to perform their work securely.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Communicating and making policies and procedures accessible to employees",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 19
  },
  {
    "clause": "B.2.7",
    "tier": "Advocate",
    "domain": "Policies and procedures",
    "statements": {
      "classical": "The organisation performs regular review and reporting on the effectiveness and deviations of its cybersecurity policies and procedures to the Board and/or senior management at least annually to ensure that they are kept informed.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Performing management review and reporting",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 20
  },
  {
    "clause": "B.2.8",
    "tier": "Advocate",
    "domain": "Policies and procedures",
    "statements": {
      "classical": "The organisation has established and implemented the necessary measures to ensure compliance with its cybersecurity policies and procedures.",
      "cloud": null,
      "ot": null,
      "ai": "This includes policies and processes to ensure the secure use of AI system(s) and in accordance to organisational policies, including defining and documenting the processes for the secure use of AI system(s)."
    },
    "focusArea": "Establishing measures for compliance to policies and procedures",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 21
  },
  {
    "clause": "B.2.9",
    "tier": "Advocate",
    "domain": "Policies and procedures",
    "statements": {
      "classical": "The organisation has established and implemented the necessary measures to track and monitor non-compliance with policies, processes and procedures, and to address associated cybersecurity risks.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Tracking non-compliance",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 22
  },
  {
    "clause": "B.3.1",
    "tier": "Supporter",
    "domain": "Risk management",
    "statements": {
      "classical": "The organisation has identified the cybersecurity risks in the environment, including risks on-premises, and where applicable, remote risks, to ensure that all the identified cybersecurity risks can be addressed.",
      "cloud": "The organisation has included cloud-specific risks, including:\n\n–\thow storing data in the cloud (which may span multiple jurisdictions) can impact data sovereignty and privacy requirements on the organisation; and\n–\tsupply chain risks, as cloud services are often built on a series of CSPs.",
      "ot": "The organisation has included OT-specific risks, including sector-specific risks based on incidents that have impacted its industry.",
      "ai": "The organisation has included AI-specific risks, including:\n\n–\trisk of data leakage arising from both malicious attacks and unintended data disclosure by employees; and\n–\trisk of compromise to the integrity of data and/or the AI model, resulting in unintended output from its AI system(s) and has included mechanisms to provide adequate human oversight over the organisation’s AI system(s)."
    },
    "focusArea": "Risk identification and remediation",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 24
  },
  {
    "clause": "B.3.2",
    "tier": "Supporter",
    "domain": "Risk management",
    "statements": {
      "classical": "The organisation performs steps to analyse and prioritise the critical cybersecurity risks in its business environment to ensure that the more critical cybersecurity risks are addressed first.",
      "cloud": null,
      "ot": "In an OT environment, such critical cybersecurity risks can include impact on human safety and potential physical impact on OT system(s). The organisation has put the priority on safety, systems reliability and physical assets.",
      "ai": null
    },
    "focusArea": "Risk analysis",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 25
  },
  {
    "clause": "B.3.3",
    "tier": "Practitioner",
    "domain": "Risk management",
    "statements": {
      "classical": "The organisation has established and implemented a risk treatment plan with the guidelines and/or requirements to accept, remediate or mitigate the identified cybersecurity risks to ensure that cybersecurity risks are treated.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Risk response",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 26
  },
  {
    "clause": "B.3.4",
    "tier": "Practitioner",
    "domain": "Risk management",
    "statements": {
      "classical": "The organisation performs regular cybersecurity risk identification at least on an annual basis or whenever there are changes to the environment and tracks them to maintain a record of the cybersecurity risks in the environment.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Regular risk identification and tracking",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 27
  },
  {
    "clause": "B.3.5",
    "tier": "Promoter",
    "domain": "Risk management",
    "statements": {
      "classical": "The organisation has defined and applied a cybersecurity risk assessment process to identify risks, assess the dependencies and evaluate the current measures in place to ensure that the organisation is clear on how to assess the cybersecurity risks.",
      "cloud": null,
      "ot": null,
      "ai": "The organisation’s cybersecurity risk assessment for its AI systems has factored in and documented the resources utilised, e.g.:\n\n–\tdata assets;\n–\tsoftware assets;\n–\tsystems and computing resources; and\n–\temployee use of AI to fully understand the risks and impact."
    },
    "focusArea": "Defining risk assessment process",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 28
  },
  {
    "clause": "B.3.6",
    "tier": "Promoter",
    "domain": "Risk management",
    "statements": {
      "classical": "The organisation has established, implemented and maintained a cybersecurity risk register containing the risks identified with their priority, the treatment plan, timeline, the employee(s) assigned the task of tracking and monitoring.",
      "cloud": "The organisation may use a standard risk register to track cloud services and deployments.",
      "ot": "The risk register shall capture OT security risks that may not be mitigated due to the nature of the OT environment, e.g., insecure and/or outdated protocols, systems that are no longer supported, delays in updates due to maintenance schedules.",
      "ai": null
    },
    "focusArea": "Establishing cybersecurity risk register",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 29
  },
  {
    "clause": "B.3.7",
    "tier": "Performer",
    "domain": "Risk management",
    "statements": {
      "classical": "The organisation has established and implemented risk management policies and procedures with the requirements, guidelines and detailed steps to identify, analyse, evaluate, monitor and treat cybersecurity risks.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Establishing risk management policies and procedures",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 30
  },
  {
    "clause": "B.3.8",
    "tier": "Performer",
    "domain": "Risk management",
    "statements": {
      "classical": "The organisation has defined and allocated roles and responsibilities for conducting and overseeing cybersecurity risk assessment to ensure that employees are clear on the tasks assigned to them.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Designating roles and responsibilities for risk assessment",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 31
  },
  {
    "clause": "B.3.9",
    "tier": "Performer",
    "domain": "Risk management",
    "statements": {
      "classical": "The organisation has established the cybersecurity risk appetite and cybersecurity risk tolerance statement approved by the Board and/or senior management to ensure that there is organisational consensus on the type and acceptable level of cybersecurity risk.",
      "cloud": "Where there are major or significant cloud security risks that may not be mitigated, e.g., cloud concentration risks, the trade-offs and appropriate cyber resilience measures shall be reported to and approved by the Board and/or senior management.",
      "ot": "Where there are major or significant OT security risks that may not be mitigated, e.g., continued deployment of legacy OT systems that may not adequately support cybersecurity, the trade-offs and appropriate use of compensation controls shall be reported and approved by the Board and/or senior management.",
      "ai": "Where there are major or significant AI security risks that may not be mitigated, e.g., AI concentration risks, AI over-reliance, the trade-offs and appropriate mitigation measures shall be reported to and approved by the Board and/or senior management."
    },
    "focusArea": "Establishing cybersecurity risk appetite and tolerance",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 32
  },
  {
    "clause": "B.3.10",
    "tier": "Advocate",
    "domain": "Risk management",
    "statements": {
      "classical": "The organisation has established and implemented a cybersecurity risk management framework that is integrated as part of the organisation's overall risk management to ensure alignment with business goals.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Integrating cybersecurity risk assessment to  Enterprise Risk Management (ERM)",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 33
  },
  {
    "clause": "B.3.11",
    "tier": "Advocate",
    "domain": "Risk management",
    "statements": {
      "classical": "The organisation has established and implemented policy and process to report identified cybersecurity risks to the Board and/or senior management at least on a monthly basis to ensure that they are kept informed.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Risk reporting",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 34
  },
  {
    "clause": "B.3.12",
    "tier": "Advocate",
    "domain": "Risk management",
    "statements": {
      "classical": "The organisation has established and implemented policy and process to review deviations to ensure that the residual cybersecurity risk stays within its cybersecurity risk appetite and risk tolerance level.",
      "cloud": null,
      "ot": null,
      "ai": "For the organisation implementing AI systems, its policies and processes to review deviations have included ways to monitor for data and model drift that may impact the ability of the model to meet intended outcomes, resulting in changes in AI risk exposure."
    },
    "focusArea": "Risk review",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 35
  },
  {
    "clause": "B.4.1",
    "tier": "Supporter",
    "domain": "Cyber strategy",
    "statements": {
      "classical": "Domain is not assessable for this tier. However, the organisation should consider using online resources to promote good cybersecurity practices internally.\n\nNOTE – In Singapore, CSA’s cybersecurity toolkits for organisation leaders, employees and IT/cybersecurity personnel include content on cultivating cybersecurity leadership and setting cybersecurity direction for the organisation.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 37
  },
  {
    "clause": "B.4.2",
    "tier": "Practitioner",
    "domain": "Cyber strategy",
    "statements": {
      "classical": "Domain is not assessable for this tier. However, the organisation should consider using online resources to promote good cybersecurity practices internally.\n\nNOTE – In Singapore, CSA’s cybersecurity toolkits for organisation leaders, employees and IT/cybersecurity personnel include content on cultivating cybersecurity leadership and setting cybersecurity direction for the organisation.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 38
  },
  {
    "clause": "B.4.3",
    "tier": "Promoter",
    "domain": "Cyber strategy",
    "statements": {
      "classical": "Domain is not assessable for this tier. However, the organisation should consider using online resources to promote good cybersecurity practices internally.\n\nNOTE – In Singapore, CSA’s cybersecurity toolkits for organisation leaders, employees and IT/cybersecurity personnel include content on cultivating cybersecurity leadership and setting cybersecurity direction for the organisation.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 39
  },
  {
    "clause": "B.4.4",
    "tier": "Performer",
    "domain": "Cyber strategy",
    "statements": {
      "classical": "Domain is not assessable for this tier. However, the organisation should consider using online resources to promote good cybersecurity practices internally.\n\nNOTE – In Singapore, CSA’s cybersecurity toolkits for organisation leaders, employees and IT/cybersecurity personnel include content on cultivating cybersecurity leadership and setting cybersecurity direction for the organisation.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 40
  },
  {
    "clause": "B.4.5",
    "tier": "Advocate",
    "domain": "Cyber strategy",
    "statements": {
      "classical": "The organisation has established a cybersecurity strategy to achieve cyber resiliency and protect the organisation against cybersecurity threats in terms of people, process and technology. The cybersecurity strategy has been translated into a roadmap to achieve planned targets over a time period.",
      "cloud": "The cybersecurity strategy has included: \n\n–\tbusiness continuity and cyber resilience strategies which are developed based on the cloud service model(s) between the organisation and its CSPs; and \n–\tinfrastructure design and decisions.",
      "ot": "The cybersecurity strategy and roadmap has taken into account:\n\n–\tcybersecurity goals for its OT systems, such as focusing on safety, reliability and the physical systems and processes;\n–\tthe long lifecycle of OT assets; and\n–\tthe organisation's operational model for OT, e.g., insource, outsource, and/or use of managed security services.",
      "ai": "The cybersecurity strategy and roadmap has identified and documented the organisation’s objectives to guide the secure use of its AI system(s)."
    },
    "focusArea": "Cybersecurity strategy and roadmap",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 41
  },
  {
    "clause": "B.4.6",
    "tier": "Advocate",
    "domain": "Cyber strategy",
    "statements": {
      "classical": "The organisation has established and implemented a cybersecurity workplan based on its cybersecurity strategy and roadmap, incorporating the necessary actions, timelines and allocated resources to achieve the planned targets.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Cybersecurity workplan",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 42
  },
  {
    "clause": "B.4.7",
    "tier": "Advocate",
    "domain": "Cyber strategy",
    "statements": {
      "classical": "The organisation has allocated sufficient budget and funds to achieve the planned cybersecurity targets. The budgets and funds are monitored by the Board/senior management and revised on a regular basis based on updates received.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Allocating gudget and funds for cybersecurity",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 43
  },
  {
    "clause": "B.4.8",
    "tier": "Advocate",
    "domain": "Cyber strategy",
    "statements": {
      "classical": "The organisation has tracked and evaluated its progress on cybersecurity strategy, the roadmap and workplans regularly at least on an annual basis with its Board/senior management to ensure that they are updated on the progress and status.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Tracking of cybersecurity strategy, roadmap and workplan",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 44
  },
  {
    "clause": "B.4.9",
    "tier": "Advocate",
    "domain": "Cyber strategy",
    "statements": {
      "classical": "The organisation has reviewed and updated its cybersecurity strategy, roadmap and workplan at least annually to ensure alignment with business goals and objectives and to factor in the evolving cyber threat landscape.",
      "cloud": "The organisation has also factored in the cloud threat landscape, where adversaries are targeting cloud services as more organisations implement cloud-based solutions.",
      "ot": "The organisation has also factored in the OT threat landscape, which is seeing increased adversarial interest in OT.",
      "ai": "The organisation has also factored in the AI threat landscape, as organisations increasingly adopt AI."
    },
    "focusArea": "Updaring cybersecurity strategy, roadmap and workplan",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 45
  },
  {
    "clause": "B.5.1",
    "tier": "Supporter",
    "domain": "Compliance",
    "statements": {
      "classical": "The organisation has identified the cybersecurity-related laws, regulations and/or guidelines (e.g., sector-specific) applicable in its area of business in order to comply with them.",
      "cloud": "In identifying the relevant laws, regulations and/or guidelines, the organisation has considered how its cloud deployment, including the storage of data in the cloud, may span different legal and regulatory jurisdictions, and these may have their respective data privacy frameworks, or sector-specific frameworks, e.g., healthcare, financial sector.",
      "ot": "In identifying the relevant laws, regulations and/or guidelines, the organisation has also considered the applicable safety laws, regulations and/or guidelines.",
      "ai": "In identifying the relevant laws, regulations and/or guidelines, the organisation has factored in the emerging landscape of AI regulations in the countries it operates in."
    },
    "focusArea": "Identifying areas of cybersecurity-related law and regulation",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 47
  },
  {
    "clause": "B.5.2",
    "tier": "Practitioner",
    "domain": "Compliance",
    "statements": {
      "classical": "The organisation has established and implemented measures to ensure compliance with the applicable cybersecurity-related laws, regulations and/or guidelines, e.g., sector-specific.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Establishing measures to ensure compliance",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 48
  },
  {
    "clause": "B.5.3",
    "tier": "Promoter",
    "domain": "Compliance",
    "statements": {
      "classical": "The organisation has communicated cybersecurity-related laws, regulations and/or guidelines, (e.g., sector-specific) to employees to ensure that they are aware of them when performing their tasks.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Communicating cybersecurity laws, regulations and guidelines to employees for compliance",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 49
  },
  {
    "clause": "B.5.4",
    "tier": "Promoter",
    "domain": "Compliance",
    "statements": {
      "classical": "The organisation has defined and applied a process to ensure that they stay compliant and up to date with the latest cybersecurity-related laws, regulations and/or guidelines (e.g., sector-specific) applicable to the organisation.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Defining process for compliance",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 50
  },
  {
    "clause": "B.5.5",
    "tier": "Performer",
    "domain": "Compliance",
    "statements": {
      "classical": "The organisation has established and implemented policy and procedures with the necessary measures, requirements and steps to address cybersecurity-related laws, regulations and/or guidelines, (e.g., sector-specific).",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Cybersecurity laws and regulatory policy",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 51
  },
  {
    "clause": "B.5.6",
    "tier": "Performer",
    "domain": "Compliance",
    "statements": {
      "classical": "The organisation has defined and allocated roles and responsibilities to address the requirements in cybersecurity-related laws, regulatory compliance and/or guidelines (e.g., sector-specific) in the organisation to ensure that employees are clear  on their tasks for compliance.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Defining roles and responsibilities for compliance",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 52
  },
  {
    "clause": "B.5.7",
    "tier": "Advocate",
    "domain": "Compliance",
    "statements": {
      "classical": "The organisation has established and implemented a policy and process to ensure that the organisation’s processes and systems comply with applicable cybersecurity-related laws, regulatory compliance and/or guidelines (e.g., sector-specific) and to identify any non-compliance.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Ensuring cybersecurity laws and regulatory compliance",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 53
  },
  {
    "clause": "B.5.8",
    "tier": "Advocate",
    "domain": "Compliance",
    "statements": {
      "classical": "The organisation has established and implemented the policy and procedure to take action against non-compliance with cybersecurity-related laws, regulations and/or guidelines (e.g., sector-specific) to ensure that the organisation is able to stay compliant.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Taking actions against non-compliance",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 54
  },
  {
    "clause": "B.5.9",
    "tier": "Advocate",
    "domain": "Compliance",
    "statements": {
      "classical": "Cybersecurity-related laws, regulatory compliance and/or guidelines (e.g., sector-specific) and non-compliance are reported to the Board and/or senior management on a timely basis to ensure that they are kept informed of the associated risks and potential areas of non-compliance.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Cybersecurity laws and regulatory reporting",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 55
  },
  {
    "clause": "B.6.1",
    "tier": "Supporter",
    "domain": "Audit",
    "statements": {
      "classical": "Domain is not assessable for this tier.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 57
  },
  {
    "clause": "B.6.2",
    "tier": "Practitioner",
    "domain": "Audit",
    "statements": {
      "classical": "Domain is not assessable for this tier.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 58
  },
  {
    "clause": "B.6.3",
    "tier": "Promoter",
    "domain": "Audit",
    "statements": {
      "classical": "Domain is not assessable for this tier.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 59
  },
  {
    "clause": "B.6.4",
    "tier": "Performer",
    "domain": "Audit",
    "statements": {
      "classical": "The organisation has established, implemented and maintained a cybersecurity audit plan, including at a minimum, the objective, scope, roles and responsibilities, guidelines, and frequency for auditing to assess the effectiveness of the organisation's policies, processes, procedures and controls against cybersecurity risks.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Cybersecurity audit plan",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 60
  },
  {
    "clause": "B.6.5",
    "tier": "Performer",
    "domain": "Audit",
    "statements": {
      "classical": "The organisation has established an internal audit function and/or team to assess the policies, processes, procedures and controls against cybersecurity risks.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Internal audit function and/or team",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 61
  },
  {
    "clause": "B.6.6",
    "tier": "Performer",
    "domain": "Audit",
    "statements": {
      "classical": "The organisation has established and implemented policies, processes, procedures and controls to mitigate and address the audit findings based on priority and timelines to ensure that the audit findings are remediated promptly.",
      "cloud": null,
      "ot": "The organisation has established and implemented appropriate compensating controls to mitigate and address the audit findings that arise as a result of limitations in the OT environment, which prevent it from implementing adequate cybersecurity, e.g., constraints in using encryption due to potential time-sensitivity challenges, constraints in updating software to patch vulnerabilities promptly due to potential disruption to OT operations.",
      "ai": null
    },
    "focusArea": "Addressing audit findings",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 62
  },
  {
    "clause": "B.6.7",
    "tier": "Advocate",
    "domain": "Audit",
    "statements": {
      "classical": "The organisation has implemented monitoring and review of the audit findings at least quarterly to ensure that they are remediated within the stipulated timeline.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Audit monitoring and review",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 63
  },
  {
    "clause": "B.6.8",
    "tier": "Advocate",
    "domain": "Audit",
    "statements": {
      "classical": "The organisation has established and implemented processes to report and follow up on the findings with the Board and/or senior management to ensure that they are informed of the audit findings and critical risks.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Audit follow ups",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 64
  },
  {
    "clause": "B.7.1",
    "tier": "Supporter",
    "domain": "Training and awareness",
    "statements": {
      "classical": "The organisation has implemented all the cybersecurity requirements in the mark of cyber hygiene, under “A.1 Assets: People”, to ensure that employees are equipped with the security knowledge and awareness to identify and mitigate against cyber threats.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Cybersecurity measures in Cyber Essentials",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 66
  },
  {
    "clause": "B.7.2",
    "tier": "Practitioner",
    "domain": "Training and awareness",
    "statements": {
      "classical": "The organisation has implemented all the cybersecurity recommendations in the mark of cyber hygiene under “A.1 Assets: People” to ensure that employees are equipped with the security knowledge and awareness to identify and mitigate against cyber threats.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Cybersecurity measures in Cyber Essentials",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 67
  },
  {
    "clause": "B.7.3",
    "tier": "Practitioner",
    "domain": "Training and awareness",
    "statements": {
      "classical": "The organisation takes measures to track the relevant metrics (e.g., attendance) to ensure that employees have completed the cybersecurity awareness and training programmes.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Tracking  metrics of employee cybersecurity awareness",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 68
  },
  {
    "clause": "B.7.4",
    "tier": "Promoter",
    "domain": "Training and awareness",
    "statements": {
      "classical": "The organisation takes measures to ensure that employees are assessed at the end of the awareness and training programmes, and are required to pass the programmes so that they demonstrate what they have learnt.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Performing cybersecurity awareness assessments",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 69
  },
  {
    "clause": "B.7.5",
    "tier": "Promoter",
    "domain": "Training and awareness",
    "statements": {
      "classical": "The organisation has appointed a cybersecurity champion to promote cybersecurity awareness and launch cybersecurity initiatives.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Appointing cybersecurity champion",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 70
  },
  {
    "clause": "B.7.6",
    "tier": "Performer",
    "domain": "Training and awareness",
    "statements": {
      "classical": "The organisation has established and implemented policies and procedures on the training types, frequency and attendees’ requirements as well as the steps to conduct and participate in the training to ensure that they can be adhered to.",
      "cloud": null,
      "ot": "The organisation has included cross-domain training of IT and OT teams to equip them with the skillsets to prepare for a converged IT/OT environment.",
      "ai": null
    },
    "focusArea": "Establishing policies and procedures on cybersecurity awareness and training",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 71
  },
  {
    "clause": "B.7.7",
    "tier": "Performer",
    "domain": "Training and awareness",
    "statements": {
      "classical": "The organisation has its cybersecurity awareness and training programmes endorsed by the Board and/or senior management to ensure that they are in place and up to date.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Reviewing  cybersecurity awareness and training programme",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 72
  },
  {
    "clause": "B.7.8",
    "tier": "Performer",
    "domain": "Training and awareness",
    "statements": {
      "classical": "The organisation has defined and established policies and processes to identify the cybersecurity skillsets necessary for its employees, including the Board and/or senior management, to manage cybersecurity risks and incidents, and to ensure that they receive the relevant training.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Developing cybersecurity skills and competency",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 73
  },
  {
    "clause": "B.7.9",
    "tier": "Advocate",
    "domain": "Training and awareness",
    "statements": {
      "classical": "The organisation has established and implemented a process to evaluate the effectiveness of the cybersecurity awareness and training programmes, e.g., by monitoring the results of trainings, the number of related cybersecurity incidents before and after the training programmes.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Evaluating effectiveness of cybersecurity awareness and training programme ",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 74
  },
  {
    "clause": "B.7.10",
    "tier": "Advocate",
    "domain": "Training and awareness",
    "statements": {
      "classical": "The organisation has established and implemented a process to conduct regular skill gap analysis to identify lacking cybersecurity skillsets.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Cybersecurity skill gap analysis",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 75
  },
  {
    "clause": "B.7.11",
    "tier": "Advocate",
    "domain": "Training and awareness",
    "statements": {
      "classical": "The organisation has a department (e.g., team within Human Resource (HR), business units) to be responsible for conducting, reviewing and ensuring the compliance of employees’ awareness and compliance with the training programmes.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Function for management of cybersecurity awareness and training",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 76
  },
  {
    "clause": "B.8.1",
    "tier": "Supporter",
    "domain": "Asset management",
    "statements": {
      "classical": "The organisation has implemented all the cybersecurity requirements in the mark of cyber hygiene under A.2 Assets: Hardware and software to ensure that hardware and software present in the environment are identified and protected against common cyber threats.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Cybersecurity measures in Cyber Essentials",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 78
  },
  {
    "clause": "B.8.2",
    "tier": "Practitioner",
    "domain": "Asset management",
    "statements": {
      "classical": "The organisation has implemented all the cybersecurity recommendations in the mark of cyber hygiene under A.2 Assets: Hardware and software to ensure that hardware and software present in the environment are identified and protected against common cyber threats.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Cybersecurity measures in Cyber Essentials",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 79
  },
  {
    "clause": "B.8.3",
    "tier": "Promoter",
    "domain": "Asset management",
    "statements": {
      "classical": "The organisation has established and implemented policies and procedures on the security requirements, guidelines and detailed steps to classify, handle and dispose of hardware and software assets in the environment securely to ensure that employees have clear direction and guidance.",
      "cloud": "For secure deletion and/or destruction of the organisation’s data that has been stored in the cloud, as cloud services may replicate data across multiple servers and locations, the organisation has reviewed the data deletion/destruction practices practised by its CSPs, (e.g., deletion of customer data through cryptographic erasure) to ensure such practices are in alignment with its organisational policies.",
      "ot": null,
      "ai": "For classification and secure handling and deletion of the organisation’s data used for/in AI, the organisation has included its AI models and any training data used to train the AI models in its policies and procedures."
    },
    "focusArea": "Assets handling policy and procedure",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 80
  },
  {
    "clause": "B.8.4",
    "tier": "Promoter",
    "domain": "Asset management",
    "statements": {
      "classical": "The organisation has established and implemented a process to classify and handle hardware and software according to their confidentiality and/or sensitivity levels to ensure that they receive adequate security and protection.",
      "cloud": null,
      "ot": "For OT, as the priority is on safety and availability, the organisation has established and implemented such classification and handling processes to factor in safety and availability, e.g., security levels.",
      "ai": null
    },
    "focusArea": "Measures handling highly classified assets",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 81
  },
  {
    "clause": "B.8.5",
    "tier": "Promoter",
    "domain": "Asset management",
    "statements": {
      "classical": "The organisation has defined and allocated roles and responsibilities to ensure that it is clear who is responsible to maintain, support and manage the hardware and software assets in the inventory list.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Defining roles and responsibilities for managing assets in inventory",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 82
  },
  {
    "clause": "B.8.6",
    "tier": "Performer",
    "domain": "Asset management",
    "statements": {
      "classical": "The organisation has established and implemented asset discovery tools that are appropriate and recognised in the industry to scan and discover assets that are connected to its network to ensure that all the assets can be managed securely.",
      "cloud": "The asset discovery tool implemented by the organisation has the capability to track and manage the organisation's cloud-based assets, e.g., virtual machines, containers, storage buckets, databases.",
      "ot": "The organisation has implemented asset discovery tools that are purpose-built or tailored for OT. \n\n–\tWhere automated scanning tools are used, the organisation has considered using passive scanning tools that are not intrusive, as active scanning might have negative impact on OT operations or safety;\n–\tWhere the OT environment contains isolated systems, components, or systems connected on non-Internet Protocol (IP) networks, to complement asset discovery tools, the organisation has established and implemented manual processes to support asset discovery.",
      "ai": null
    },
    "focusArea": "Use of asset discovery tools",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 83
  },
  {
    "clause": "B.8.7",
    "tier": "Performer",
    "domain": "Asset management",
    "statements": {
      "classical": "The organisation has established and implemented an acceptable use policy on the rules and restrictions for hardware and software assets to ensure that the assets are being managed appropriately and securely.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Acceptable use policy",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 84
  },
  {
    "clause": "B.8.8",
    "tier": "Advocate",
    "domain": "Asset management",
    "statements": {
      "classical": "The organisation has established and implemented policies and processes to ensure that the hardware and software asset inventory is consistent and updated organisation-wide.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Enterprise asset alignment",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 85
  },
  {
    "clause": "B.8.9",
    "tier": "Advocate",
    "domain": "Asset management",
    "statements": {
      "classical": "The organisation has established and implemented the use of an asset inventory management system that is appropriate and recognised in the industry to track and manage hardware and software assets to ensure accuracy and avoid oversight.",
      "cloud": "The organisation’s asset inventory management system has the capability to track and manage cloud assets.",
      "ot": "The organisation’s asset inventory management system has the capability to track and manage OT assets.",
      "ai": "The organisation’s asset inventory management system has the capability to track and manage AI tools, services and/or systems."
    },
    "focusArea": "Asset inventory management system",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 86
  },
  {
    "clause": "B.8.10",
    "tier": "Advocate",
    "domain": "Asset management",
    "statements": {
      "classical": "Asset risks are being addressed as part of the risk assessment framework and reported to the Board and/or senior management to ensure that they are not neglected.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Asset risk management",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 87
  },
  {
    "clause": "B.9.1",
    "tier": "Supporter",
    "domain": "Data protection and privacy",
    "statements": {
      "classical": "The organisation has implemented all the cybersecurity requirements in the mark of cyber hygiene under “A.3 Assets: Data” to ensure that business-critical data (including personal data, company secrets, intellectual property) can be identified, located and secured.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Cybersecurity measures in Cyber Essentials",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 89
  },
  {
    "clause": "B.9.2",
    "tier": "Supporter",
    "domain": "Data protection and privacy",
    "statements": {
      "classical": "The organisation has defined and applied a process to report any business-critical data (including personal data, company secrets, intellectual property) breach and to ensure that stakeholders such as the management, relevant authorities and relevant individuals are kept informed.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Reporting of data breach",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 90
  },
  {
    "clause": "B.9.3",
    "tier": "Supporter",
    "domain": "Data protection and privacy",
    "statements": {
      "classical": "The organisation using encryption has defined and applied a process on the use of recommended protocol and algorithm and minimum key length to ensure that it is secure and in alignment to industry best practices.",
      "cloud": null,
      "ot": "In situations where encryption has been implemented and this results in latency that has negative impact on OT operations or safety, the organisation has established and implemented reasonable compensating controls.",
      "ai": null
    },
    "focusArea": "Aligning encryption algorithm and key length to industry best practices",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 91
  },
  {
    "clause": "B.9.4",
    "tier": "Practitioner",
    "domain": "Data protection and privacy",
    "statements": {
      "classical": "The organisation has implemented all the cybersecurity recommendations in the mark of cyber hygiene under “A.3 Assets: Data” to ensure that business-critical data (including personal data, company secrets, intellectual property, etc.) can be identified, located and secured.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Cybersecurity measures in Cyber Essentials",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 92
  },
  {
    "clause": "B.9.5",
    "tier": "Promoter",
    "domain": "Data protection and privacy",
    "statements": {
      "classical": "The organisation has established and implemented policies and procedures to carry out risk classification and handle business-critical data (including personal data, company secrets, intellectual property, etc.) according to their confidentiality and/or sensitivity levels to ensure that they receive adequate security and protection.",
      "cloud": null,
      "ot": "For OT, as the priority is on safety and availability, the organisation has established and implemented such classification and handling policies and procedures to also factor in safety and availability.\n\nExamples of OT data could include controller configuration files, Programmable Logic Controller (PLC) program codes and computer-aided drafting/computer-aided manufacturing files.",
      "ai": "The organisation has established and implemented classification and handling policies and procedures for employees to identify the data sets in the organisation that could be used in both internal and external AI tools and/or services, e.g. generative AI."
    },
    "focusArea": "Measures for handling highly classified assets",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 93
  },
  {
    "clause": "B.9.6",
    "tier": "Promoter",
    "domain": "Data protection and privacy",
    "statements": {
      "classical": "The organisation has established and implemented policies and procedures to document the data flow diagram of business-critical data (including personal data, company secrets, intellectual property) through information systems and programs in the organisation and implement relevant enforcement measures to ensure that they stay within the environment.",
      "cloud": "The organisation’s data flow diagram has included data that is processed and stored in the cloud, and the geographic location(s) of data in the cloud.",
      "ot": "The organisation's data flow diagram for OT has included the expected operational flow of data in the OT environment, including:\n\n–\tdata flow crossing network boundaries, indicating communication channels between logical and/or physical segments; and\n–\tinstances of data flow through insecure protocols.",
      "ai": "The organisation’s data flow diagram for AI has included documentation of data associated with its AI system(s), e.g.:\n\n–\tdata used for training AI system(s) (where relevant);\n–\tdata input to AI system(s); including prompts, and\n–\tdata output from AI system(s)."
    },
    "focusArea": "Establishing data flow diagram",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 94
  },
  {
    "clause": "B.9.7",
    "tier": "Promoter",
    "domain": "Data protection and privacy",
    "statements": {
      "classical": "The organisation has established and implemented policies and procedures to handle business-critical data (including personal data, company secrets, intellectual property, etc.) securely and to protect business-critical data according to their classifications and requirements (e.g., collect, use, protect, dispose).",
      "cloud": null,
      "ot": null,
      "ai": "The organisation has implemented secure handling of:\n\n–\tdata input to AI systems;\n–\tdata models (where relevant); and\n–\tdata output from AI systems.\n\nExamples of secure handling of data input to AI systems include measures for:\n–\tdata integrity;\n–\tdata provenance; \n–\tdata validation and/or sanitisation; and\n–\tprotection on the query interface to detect and mitigate attempts to access, modify and exfiltrate data, e.g. guardrails, rate limiting of queries.\n\nExamples of secure handling of AI models include measures for:\n–\tverification of models with hashes/ signatures; and\n–\tsecurity evaluation of the AI systems before deployment, e.g. benchmarking, security testing, red teaming.\n\nExamples of secure handling of data output from AI systems include measures for:\n–\tverification of integrity of data output; and\n–\tgenerating output that is usable to users whilst not revealing unnecessary information to potential attackers."
    },
    "focusArea": "Secure data handling policy and procedure",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 95
  },
  {
    "clause": "B.9.8",
    "tier": "Performer",
    "domain": "Data protection and privacy",
    "statements": {
      "classical": "The organisation has established and implemented data management policies and procedures through the guidelines, requirements and steps to handle business-critical data (including personal data, company secrets, intellectual property) at rest, in transit and in use, securely.",
      "cloud": "The organisation’s data management policies and procedures has taken into consideration:\n\n–\tthe ability to maintain oversight of where data in the cloud is stored, processed, and backed up to ensure it is in line with organisation’s obligations; and\n–\tThe ability to manage migration of data securely between cloud environments for interoperability and portability.",
      "ot": null,
      "ai": null
    },
    "focusArea": "Data management policy and procedure",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 96
  },
  {
    "clause": "B.9.9",
    "tier": "Performer",
    "domain": "Data protection and privacy",
    "statements": {
      "classical": "The organisation has defined and allocated roles and responsibilities to ensure that it is clear who is responsible to maintain, support and manage the data assets in the inventory list.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Defining roles and responsibilities for managing data in inventory",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 97
  },
  {
    "clause": "B.9.10",
    "tier": "Advocate",
    "domain": "Data protection and privacy",
    "statements": {
      "classical": "The organisation uses encryption to protect its data and has established and implemented cryptographic policies and processes to ensure that the keys are being handled securely throughout the cryptography key management lifecycle.",
      "cloud": "The organisation has incorporated best practices for cryptography into its policies and processes.\n\nExamples include:\n\n–\tsecure storage and use of API keys, secrets, passwords, secure shell (SSH) keys, or certificates, e.g., secure procedure for key lifecycle from generation to revocation; and\n–\tregular scanning to search for static credentials and keys/secrets stored in cleartexts.\n\nThe organisation has also considered different approaches for management of encryption keys to balance between maintaining control over the keys and leveraging a fully managed cloud service:\n\n–\tencryption keys managed by the CSP;\n–\tcustomer-managed encryption keys; and\n–\tcustomer-supplied encryption keys (or \"bring your own key\").",
      "ot": null,
      "ai": "For sensitive data, the organisation has considered the use of privacy-preserving techniques, e.g., anonymisation, differential privacy (where applicable) for data protection."
    },
    "focusArea": "Establishing cryptography policy",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 98
  },
  {
    "clause": "B.9.11",
    "tier": "Advocate",
    "domain": "Data protection and privacy",
    "statements": {
      "classical": "The organisation has established and implemented policies and procedures allowing only authorised devices with secure protocols to communicate, store and transfer business-critical data (including personal data, company secrets, intellectual property) within the organisation.",
      "cloud": "Examples could include Data Security Posture Management (DSPM) solutions or equivalents to protect sensitive data and support compliance with data protection regulations within cloud environments.",
      "ot": "In situations where the OT environment uses authorised devices that support insecure protocol(s), the organisation has established and implemented reasonable compensating controls.",
      "ai": null
    },
    "focusArea": "Managing cryptography key lifecycle",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 99
  },
  {
    "clause": "B.9.12",
    "tier": "Advocate",
    "domain": "Data protection and privacy",
    "statements": {
      "classical": "The organisation has established and implemented policies and procedures to report on data protection and privacy risks and initiatives to the Board and/or senior management to ensure that they are kept informed.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Reporting of data protection and privacy to board/senior management",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 100
  },
  {
    "clause": "B.10.1",
    "tier": "Supporter",
    "domain": "Backups",
    "statements": {
      "classical": "The organisation has implemented all the cybersecurity requirements in the mark of cyber hygiene under “A.8 Backup: Back up essential data” to ensure that the organisation’s essential data is backed up and stored securely.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Cybersecurity measures in Cyber Essentials",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 102
  },
  {
    "clause": "B.10.2",
    "tier": "Practitioner",
    "domain": "Backups",
    "statements": {
      "classical": "The organisation has implemented all the cybersecurity recommendations in the mark of cyber hygiene under “A.8 Backup: Back up essential data” to ensure that the organisation’s essential data is backed up and stored securely.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Cybersecurity measures in Cyber Essentials",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 103
  },
  {
    "clause": "B.10.3",
    "tier": "Practitioner",
    "domain": "Backups",
    "statements": {
      "classical": "The organisation has established and implemented automated backup processes to ensure that the backup tasks are carried out without fail and without the need for human intervention.",
      "cloud": "In its automated backup process, the organisation has included backups of its cloud services.",
      "ot": "In situations where automated backup is not appropriate or recommended, e.g., has a negative impact on OT operations or safety, the organisation has established and implemented regular scheduled backups to be performed manually.",
      "ai": null
    },
    "focusArea": "Using automated backup",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 104
  },
  {
    "clause": "B.10.4",
    "tier": "Promoter",
    "domain": "Backups",
    "statements": {
      "classical": "The organisation has established and implemented backup plan(s) on the types, frequency and storage of backups to ensure that there is clarity of the steps to be taken to backup business-critical data in the organisation.",
      "cloud": null,
      "ot": "For OT, as the priority is on safety and availability, the organisation has considered the use of immutable storage for critical OT data, which may include programs or device configurations, as such storage provides:\n\n–\tadditional data integrity through data storage in a read-only format; and\n–\tadded protection against the installation of new software when used as a read-only drive in a maintenance workstation.",
      "ai": null
    },
    "focusArea": "Establishing backup plans",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 105
  },
  {
    "clause": "B.10.5",
    "tier": "Promoter",
    "domain": "Backups",
    "statements": {
      "classical": "The organisation has established and implemented the use of technology solutions for data backup and recovery, and the solutions implemented are appropriate and recognised in the industry to ensure that it can carry out reliable data backup and restoration.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Use of technologh solutions for data backup and recovery",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 106
  },
  {
    "clause": "B.10.6",
    "tier": "Performer",
    "domain": "Backups",
    "statements": {
      "classical": "The organisation has established and implemented backup and recovery policies and procedures on the requirements, guidelines and detailed steps to ensure that there is consistent guidance and direction for performing backup and recovery in the organisation.",
      "cloud": "The organisation has implemented the appropriate backup and recovery policies and procedures based on the cloud shared responsibility model with its CSP. \n\nIn situations where the CSP is responsible, the organisation has reviewed the backup and recovery practices of its CSPs to ensure the implementation is in alignment with its organisational policies.",
      "ot": null,
      "ai": null
    },
    "focusArea": "Establishing backup policy and procedure",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 107
  },
  {
    "clause": "B.10.7",
    "tier": "Performer",
    "domain": "Backups",
    "statements": {
      "classical": "The organisation has defined and allocated roles and responsibilities to ensure that it is clear who is responsible and accountable to perform and manage backups from creation to destruction.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Defining roles and responsibilities for backup end-to-end",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 108
  },
  {
    "clause": "B.10.8",
    "tier": "Advocate",
    "domain": "Backups",
    "statements": {
      "classical": "The organisation has established and implemented a backup control sheet for the backup data storage media with the purpose of including backup, time of backup, data encryption, retention date and the employee(s) assigned the task of backup to ensure that all the key information is documented.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Backup control sheet",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 109
  },
  {
    "clause": "B.10.9",
    "tier": "Advocate",
    "domain": "Backups",
    "statements": {
      "classical": "The organisation has established and implemented policies and procedures to report backup-related matters to the cybersecurity committees/forums to ensure that senior management is kept informed.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Reporting of backup-related matters to cybersecurity committee/forums",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 110
  },
  {
    "clause": "B.10.10",
    "tier": "Advocate",
    "domain": "Backups",
    "statements": {
      "classical": "The organisation has established and implemented policies and procedures to perform reviews on the backup status regularly to ensure that failed backup jobs are addressed and remediated.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Backup review",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 111
  },
  {
    "clause": "B.11.1",
    "tier": "Supporter",
    "domain": "Bring Your Own Device (BYOD)",
    "statements": {
      "classical": "Domain is not assessable for this tier. However, the organisation should consider the cybersecurity requirements in the mark of cyber hygiene under:\n– A.2 Assets: Hardware and software;\n– A.4 Secure/Protect: Virus and malware protection;\n– A.6 Secure/Protect: Secure configuration;\n– A.7 Update: Software updates; and\n– A.8 Backup: Back up essential data covering mobile devices.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 113
  },
  {
    "clause": "B.11.2",
    "tier": "Practitioner",
    "domain": "Bring Your Own Device (BYOD)",
    "statements": {
      "classical": "Domain is not assessable for this tier. However, the organisation should consider the cybersecurity requirements in the mark of cyber hygiene under:\n– A.2 Assets: Hardware and software;\n– A.4 Secure/Protect: Virus and malware protection;\n– A.6 Secure/Protect: Secure configuration;\n– A.7 Update: Software updates; and\n– A.8 Backup: Back up essential data covering mobile devices.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 114
  },
  {
    "clause": "B.11.3",
    "tier": "Promoter",
    "domain": "Bring Your Own Device (BYOD)",
    "statements": {
      "classical": "The organisation has established and implemented policies and procedures to segregate personal and work-related data in the organisation within BYOD to prevent disclosure and loss of confidential and/or sensitive data.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 115
  },
  {
    "clause": "B.11.4",
    "tier": "Performer",
    "domain": "Bring Your Own Device (BYOD)",
    "statements": {
      "classical": "The organisation has established and implemented policies and procedures on the guidelines, requirements and steps on the use of BYOD connecting to the organisation’s network and accessing the organisation’s data to ensure that they conform to the set of security standards, e.g., passcode enabled.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Policies and procedures on BYOD",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 116
  },
  {
    "clause": "B.11.5",
    "tier": "Performer",
    "domain": "Bring Your Own Device (BYOD)",
    "statements": {
      "classical": "The organisation has implemented regular review on the use of BYOD accessing business-critical data at least annually to ensure that the devices are compliant and safe.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "BYOD security controls",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 117
  },
  {
    "clause": "B.11.6",
    "tier": "Advocate",
    "domain": "Bring Your Own Device (BYOD)",
    "statements": {
      "classical": "The organisation has established and implemented cybersecurity measures within BYOD to manage and enforce organisational security protection, such as through the use of mobile device management (MDM).",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "BYOD regular review",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 118
  },
  {
    "clause": "B.12.1",
    "tier": "Supporter",
    "domain": "System security",
    "statements": {
      "classical": "The organisation has implemented all the cybersecurity requirements in the mark of cyber hygiene under “A.6 Secure/Protect: Secure configuration” and “A.7 Update: Software updates” to ensure that the hardware and software use secure and updated settings.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Cybersecurity measures in Cyber Essentials",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 120
  },
  {
    "clause": "B.12.2",
    "tier": "Practitioner",
    "domain": "System security",
    "statements": {
      "classical": "The organisation has implemented all the cybersecurity recommendations in the mark of cyber hygiene under “A.6 Secure/Protect: Secure configuration” and “A.7 Update: Software updates” to ensure that the hardware and software use secure and updated settings.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Cybersecurity measures in Cyber Essentials",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 121
  },
  {
    "clause": "B.12.3",
    "tier": "Practitioner",
    "domain": "System security",
    "statements": {
      "classical": "The organisation has performed monitoring on updates and patches installed to ensure that any impact or adverse effects can be identified and rectified promptly.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Performing monitoring on updates and patches",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 122
  },
  {
    "clause": "B.12.4",
    "tier": "Promoter",
    "domain": "System security",
    "statements": {
      "classical": "The organisation has defined and applied a process to ensure secure configurations are applied across all systems, servers, operating systems and network devices.",
      "cloud": null,
      "ot": null,
      "ai": "As part of secure configuration, the organisation has considered AI model complexity and the appropriateness of the model for the intended use case, as complex models may involve additional software packages or libraries, which expand the attack surface."
    },
    "focusArea": "Implementing process for the application of secure configuration",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 123
  },
  {
    "clause": "B.12.5",
    "tier": "Promoter",
    "domain": "System security",
    "statements": {
      "classical": "The organisation has defined and applied a log management process to store and classify the different types of logs securely to ensure that they can be used to troubleshoot effectively.",
      "cloud": null,
      "ot": "As OT devices may have limited disk space and memory, the organisation has implemented:\n\n–\tadequate local or remote storage to reduce the likelihood of exceeding device capacity and loss of logging capability; or\n–\tmechanisms to securely transfer and store logs from the OT devices to alternate storage.",
      "ai": null
    },
    "focusArea": "Implementing log management process",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 124
  },
  {
    "clause": "B.12.6",
    "tier": "Promoter",
    "domain": "System security",
    "statements": {
      "classical": "The organisation has defined and applied a patch management process to test and install the updates and patches securely to ensure that there are no adverse effects.",
      "cloud": null,
      "ot": "The patch management process has taken into consideration the different availability requirements that OT sub-systems and/or network segments may have, and their corresponding differences in abilities to support patching, and the organisation has tracked the key vulnerabilities that need to be addressed.",
      "ai": null
    },
    "focusArea": "Implementing patch management process",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 125
  },
  {
    "clause": "B.12.7",
    "tier": "Performer",
    "domain": "System security",
    "statements": {
      "classical": "The organisation has defined and allocated the roles and responsibilities to oversee, manage and monitor the organisation's system security (i.e., secure configuration, logging, update and patching) to ensure that employees are clear on the tasks assigned to them.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Defining roles and responsibilities for system security",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 126
  },
  {
    "clause": "B.12.8",
    "tier": "Performer",
    "domain": "System security",
    "statements": {
      "classical": "The organisation has established and implemented policies and procedures on the security configuration requirements, guidelines and detailed steps to ensure that they are aligned with the security standards.",
      "cloud": "The organisation’s policies and procedures on secure configuration for cloud workloads have incorporated best practices.\n\nExamples for IaaS or PaaS users include:\n\n–\timages for containers or virtual machines:\n\tuse of images from trusted sources only;\n\tuse of automated, centrally managed, versioned and immutable base images for deployment;\n\tverification of image integrity to detect unauthorised modifications, keeping images up-to-date with the most recent security patches;\n–\tvirtual machine security:\n\tuse of configuration management or Infrastructure as Code (IaC) to mitigate configuration drift;\n\thardening of configuration on virtual machine instances; and\n–\tcontainer orchestration security: hardening of orchestration services.",
      "ot": null,
      "ai": "The organisation’s policies and procedures on secure configuration for AI have incorporated best practices.\n\nExamples include:\n\n–\tmodel hardening, e.g., through adversarial training;\n–\tprompt engineering best practices including use of guardrails; \n–\tmonitoring and limiting the rate of queries to AI systems; or\n–\tuse of ensembles of models for better resilience against attacks."
    },
    "focusArea": "Aligning secure configuration policy and procedure with security standards",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 127
  },
  {
    "clause": "B.12.9",
    "tier": "Performer",
    "domain": "System security",
    "statements": {
      "classical": "The organisation has established and implemented a secure logging policy and procedure with the requirements, guidelines and detailed steps to store, retain and delete the logs from unauthorised access.",
      "cloud": "This includes a secure logging policy and procedure for the organisation’s cloud workloads.\n\nExamples for IaaS and PaaS users include logging of:\n\n–\tcontainers or virtual machines for unusual behaviour; and\n–\tuser interactions.",
      "ot": null,
      "ai": null
    },
    "focusArea": "Implementing secure logging policy and procedure",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 128
  },
  {
    "clause": "B.12.10",
    "tier": "Performer",
    "domain": "System security",
    "statements": {
      "classical": "The organisation has established and implemented policies and procedures with the requirements, guidelines and detailed steps to perform and install patches/updates to ensure that the system(s) is/are patched or updated within the defined timeframes according to their priority.",
      "cloud": "The organisation has implemented the appropriate patch management policies and procedures based on the cloud shared responsibility model with its CSP. \n\nIn situations where the CSP is responsible, the organisation has reviewed the patch management practices of its CSPs, to ensure the implementation is in alignment with its organisational policies.",
      "ot": null,
      "ai": null
    },
    "focusArea": "Implementing secure update and patching policy and procedure",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 129
  },
  {
    "clause": "B.12.11",
    "tier": "Advocate",
    "domain": "System security",
    "statements": {
      "classical": "The organisation has implemented a configuration management tool/solution that is appropriate and recognised in the industry to ensure that the system's configurations are maintained in a desired and consistent state.",
      "cloud": "The organisation has implemented solutions such as cloud-native tools for cloud configuration management, e.g. cloud security posture management (CSPM) solution, cloud-native application protection platform (CNAPP) or equivalent, to support configuration management of cloud workloads.",
      "ot": "The organisation has implemented configuration management tool/solutions that can manage OT configuration information, where feasible.",
      "ai": null
    },
    "focusArea": "Implementing configuration management tool/solution",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 130
  },
  {
    "clause": "B.12.12",
    "tier": "Advocate",
    "domain": "System security",
    "statements": {
      "classical": "The organisation has established and implemented policies and procedures to ensure that the system's configuration requirements are aligned with the industry benchmarks and standards.\n\nNOTE – An organisation that offers system configuration benchmarks is the Center for Internet Security (CIS).",
      "cloud": null,
      "ot": "For specialised OT systems, the organisation has obtained these configuration requirements from its OT vendors and/or service providers.",
      "ai": null
    },
    "focusArea": "Establishing system configuration benchmark",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 131
  },
  {
    "clause": "B.12.13",
    "tier": "Advocate",
    "domain": "System security",
    "statements": {
      "classical": "The organisation has established and implemented policies and procedures to ensure that the systems’ configurations are being complied and the risks as a result of non-compliance are being addressed.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Esatblishing compliance process for system configuration",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 132
  },
  {
    "clause": "B.13.1",
    "tier": "Supporter",
    "domain": "Anti-virus/Anti-malware",
    "statements": {
      "classical": "The organisation has implemented all the cybersecurity requirements in the mark of cyber hygiene under “A.4 Secure/Protect: Virus and malware protection” to ensure that there is security protection against malicious software such as virus.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Cybersecurity measures in Cyber Essentials",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 134
  },
  {
    "clause": "B.13.2",
    "tier": "Practitioner",
    "domain": "Anti-virus/Anti-malware",
    "statements": {
      "classical": "The organisation has implemented all the cybersecurity recommendations in the mark of cyber hygiene under “A.4 Secure/Protect: Virus and malware protection” to ensure that there is security protection against malicious software such as virus.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Cybersecurity measures in Cyber Essentials",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 135
  },
  {
    "clause": "B.13.3",
    "tier": "Practitioner",
    "domain": "Anti-virus/Anti-malware",
    "statements": {
      "classical": "The organisation has established and implemented the use of virus and malware protection solution(s) that is/are appropriate and recognised in the industry with features such as real-time malware detection and email protection e.g., DMARC, to ensure that it/they can protect the organisation adequately.",
      "cloud": "The organisation has implemented the appropriate virus and malware protection based on the cloud shared responsibility model with its CSP.\n\nIn situations where the CSP is responsible, the organisation has reviewed the virus and malware protection practices of its CSPs, to ensure the implementation is in alignment with its organisational policies.",
      "ot": null,
      "ai": null
    },
    "focusArea": "Selection of anti-virus and/or anti-malware solution",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 136
  },
  {
    "clause": "B.13.4",
    "tier": "Practitioner",
    "domain": "Anti-virus/Anti-malware",
    "statements": {
      "classical": "The organisation has established and implemented web filtering to protect the organisation from malicious websites.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Implementing web filtering",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 137
  },
  {
    "clause": "B.13.5",
    "tier": "Practitioner",
    "domain": "Anti-virus/Anti-malware",
    "statements": {
      "classical": "The organisation has defined and applied the process to isolate and contain the virus and/or malware upon confirmation of attack to ensure minimal spread and damage caused.",
      "cloud": "The organisation has developed a process for the removal of malware that has been detected in the organisation’s cloud environment, in accordance with applicable contractual agreements with its CSPs and its own organisational policies.",
      "ot": null,
      "ai": null
    },
    "focusArea": "Virus and/or malware isolation",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 138
  },
  {
    "clause": "B.13.6",
    "tier": "Promoter",
    "domain": "Anti-virus/Anti-malware",
    "statements": {
      "classical": "The organisation has defined and applied the process to run codes or applications of unknown origin within an isolated testing environment to test for the presence of virus and/or malware prior to their use in the working environment.",
      "cloud": null,
      "ot": "The organisation has implemented processes such that codes or applications of unknown origin are not implemented in the OT environment.\n\nIn situations where new updates are released by authorised vendors, and the organisation does not have redundant or spare equipment or systems to support such testing, the organisation has made arrangements to conduct such testing within the vendor's test environment, or performed testing on its own setup during scheduled maintenance windows or downtime.",
      "ai": null
    },
    "focusArea": "Isolation of codes or applications",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 139
  },
  {
    "clause": "B.13.7",
    "tier": "Performer",
    "domain": "Anti-virus/Anti-malware",
    "statements": {
      "classical": "The organisation has defined and allocated the roles and responsibilities for employees to oversee, manage and maintain the virus and malware protection solution(s) to ensure clarity for the relevant employees of their required tasks.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Defining roles and responsibilities to manage virus and malware proteiction",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 140
  },
  {
    "clause": "B.13.8",
    "tier": "Advocate",
    "domain": "Anti-virus/Anti-malware",
    "statements": {
      "classical": "The organisation has established and implemented policies and processes to subscribe to threat intelligence from external parties and to share and verify information relating to cyberattacks, which includes virus and/or malware attacks.",
      "cloud": "The organisation has established and implemented policies and processes to maintain visibility of cloud-specific threats, including adversaries targeting the cloud-based environment, e.g., subscribing to threat intelligence which includes cloud-based threats, participation in cloud-related special interest groups or equivalent, to receive early warnings and advice regarding new threats and vulnerabilities.",
      "ot": "The organisation has established and implemented policies and processes to maintain visibility of OT-specific threats, e.g., subscribing to OT-specific threat intelligence, including that tailored for its own or adjacent sectors, participating in OT-specific special interest groups or equivalent, to receive early warnings and advice regarding new threats and vulnerabilities.",
      "ai": "The organisation has established and implemented policies and processes to maintain visibility of AI-specific threats, including adversaries targeting AI, e.g., subscribing to threat intelligence which includes AI-specific threats, participation in AI-related special interest groups or equivalent, to receive early warnings and advice regarding new threats and vulnerabilities."
    },
    "focusArea": "Use of threat intelligence",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 141
  },
  {
    "clause": "B.13.9",
    "tier": "Advocate",
    "domain": "Anti-virus/Anti-malware",
    "statements": {
      "classical": "The organisation has established and implemented policies and processes to review and report findings on virus and/or malware to the Board and/or senior management to ensure that they are kept informed.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Reporting on virus and/or malware",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 142
  },
  {
    "clause": "B.13.10",
    "tier": "Advocate",
    "domain": "Anti-virus/Anti-malware",
    "statements": {
      "classical": "The organisation has established and implemented scanning and detection of indicators of compromise to ensure early identification of anomalies and suspicious activities.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Early detection of virus and/or malware",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 143
  },
  {
    "clause": "B.14.1",
    "tier": "Supporter",
    "domain": "Secure Software Development Life Cycle (SDLC)",
    "statements": {
      "classical": "Domain is not assessable for this tier.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 145
  },
  {
    "clause": "B.14.2",
    "tier": "Practitioner",
    "domain": "Secure Software Development Life Cycle (SDLC)",
    "statements": {
      "classical": "Domain is not assessable for this tier.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 146
  },
  {
    "clause": "B.14.3",
    "tier": "Promoter",
    "domain": "Secure Software Development Life Cycle (SDLC)",
    "statements": {
      "classical": "The organisation has established and implemented security guidelines and requirements in its system and/or application development.\n\nExamples include:\n\n–\tsecure coding;\n–\tsecure management of API keys;\n–\treviewing the security posture of third-party software, including open source; and\n–\tadhering to best practices and/or standards \n\nto ensure that it adheres to the security principles.\n\nNOTE – In Singapore, the Safe App Standard provides guidance on implementing essential security controls and best practices for mobile app development.",
      "cloud": "Examples include:\n\n–\tsecuring APIs used for accessing and configuring cloud resources and data (e.g., implementing authentication and authorisation), as APIs exposed on public-facing assets in the cloud increase the attack surface and are priority targets for malicious actors;\n–\tsecuring the information being transferred between the API and the applications that interface with it using encryption and/or security protocols;\n–\tperforming input verification of data being relayed to an API as a safeguard against attacks such as structured query language (SQL) injection, cross-site scripting (XSS), potential execution of remote code;\n–\tdeploying a web application firewall to block malicious API requests;\n–\timplementing rate limiting to restrict the number of API requests within a specified period to prevent brute-force attacks and other malicious behaviour;\n–\tenabling logging and monitoring on API traffic to identify anomalies or possible security threats; and\n–\tusing DevSecOps to automate core security tasks by embedding security checks, scans, and tests into the continuous integration and continuous delivery (CI/CD) workflow to facilitate rapid and secure delivery of code changes.",
      "ot": null,
      "ai": "These security guidelines and requirements have been established and implemented across the life cycle of the organisation’s AI systems, i.e.:\n\n–\tdesign;\n–\tdevelopment;\n–\tdeployment; and\n–\toperations and maintenance."
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 147
  },
  {
    "clause": "B.14.4",
    "tier": "Performer",
    "domain": "Secure Software Development Life Cycle (SDLC)",
    "statements": {
      "classical": "The organisation has established and implemented an SDLC framework with cybersecurity measures and requirements to manage the software development life cycle ensuring that areas such as data integrity, authentication, authorisation, accountability and exception handling can be addressed.",
      "cloud": "The organisation has implemented relevant SDLC frameworks for cloud, e.g.:\n\n–\tsecure design and architecture;\n–\tsecure coding;\n–\tcontinuous build, integration, and testing;\n–\tcontinuous delivery and deployment; and\n–\truntime defence and monitoring.",
      "ot": "The organisation has implemented relevant SDLC frameworks for OT, e.g.:\n–\tsecurity management;\n–\tspecification of security requirements;\n–\tsecurity by design; \n–\tsecure implementation;\n–\tsecure requirements testing;\n–\tsecurity update management; and\n–\tsecurity guidelines.",
      "ai": "The organisation has implemented relevant SDLC frameworks for AI, e.g.:\n–\tsecure design;\n–\tsecure development;\n–\tsecure deployment; and\n–\tsecure operations and maintenance."
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 148
  },
  {
    "clause": "B.14.5",
    "tier": "Advocate",
    "domain": "Secure Software Development Life Cycle (SDLC)",
    "statements": {
      "classical": "The organisation has established and implemented the change management policy and process to ensure that changes or deployments to the production environment are reviewed and tested securely, with a rollback plan in place to ensure that the change is controlled.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Establishing secure SDLC framework",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 149
  },
  {
    "clause": "B.14.6",
    "tier": "Advocate",
    "domain": "Secure Software Development Life Cycle (SDLC)",
    "statements": {
      "classical": "The organisation has established and implemented a policy and process to perform security testing on the system and/or application before deployment to identify security weaknesses and vulnerabilities.",
      "cloud": null,
      "ot": null,
      "ai": "This has included security testing on the organisation's AI system(s), e.g., adversarial testing."
    },
    "focusArea": "Secure system and/or application development",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 150
  },
  {
    "clause": "B.15.1",
    "tier": "Supporter",
    "domain": "Access control",
    "statements": {
      "classical": "The organisation has implemented all the cybersecurity requirements in the mark of cyber hygiene under “A.5 Secure/Protect: Access control” to ensure that there are cybersecurity measures in place over who has access to the data and assets.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Cybersecurity measures in Cyber Essentials",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 152
  },
  {
    "clause": "B.15.2",
    "tier": "Practitioner",
    "domain": "Access control",
    "statements": {
      "classical": "The organisation has implemented all the cybersecurity recommendations in the mark of cyber hygiene under “A.5 Secure/Protect: Access control” to ensure that there are cybersecurity measures in place over who has access to the data and assets.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Cybersecurity measures in Cyber Essentials",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 153
  },
  {
    "clause": "B.15.3",
    "tier": "Practitioner",
    "domain": "Access control",
    "statements": {
      "classical": "The organisation performs regular role matrix review at least on an annual basis on the systems to ensure that the roles commensurate with the activities the employee, contractor and/or third party is allowed to perform.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Role matrix review",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 154
  },
  {
    "clause": "B.15.4",
    "tier": "Promoter",
    "domain": "Access control",
    "statements": {
      "classical": "The organisation has defined and implemented a process to approve and follow up on account access and role matrix reviews to ensure that unauthorised entry is rectified and signed off.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Account access and role matrix review follow-up process",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 155
  },
  {
    "clause": "B.15.5",
    "tier": "Promoter",
    "domain": "Access control",
    "statements": {
      "classical": "The organisation has defined and applied a process to ensure that employees are assigned roles based on the principle of least privilege and segregation of duties.",
      "cloud": "In addition to roles for employees, for organisations using IaaS or PaaS, the organisation has also implemented the principle of least privilege for cloud workloads by granting them the minimum permissions necessary to perform their assigned tasks and reviewing the permissions of the workloads to ensure that they do not have excessive permissions.",
      "ot": null,
      "ai": null
    },
    "focusArea": "Principles of least privilege and segregation of duties",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 156
  },
  {
    "clause": "B.15.6",
    "tier": "Promoter",
    "domain": "Access control",
    "statements": {
      "classical": "The organisation has established and implemented a secure log-on policy and procedure outlining the requirements, guidelines and detailed steps for gaining access to sensitive and/or business-critical data, as well as privileged access to ensure that the access is controlled and restricted.",
      "cloud": "Examples of a secure log-on policy and procedure include:\n\n–\timplementing protection of its cloud management plane (e.g., CSP console) access and activity;\n–\timplementing measures to enable the organisation to scale the management of users and identities for cloud computing, e.g., identity federation;\n–\timplementing authorisation measures that allow more granular control, e.g., use of attribute-based access control (ABAC) or policy-based access control (PBAC) to complement role-based access control (RBAC), where access is granted to all users with a given role, where available and feasible;\n–\teliminating the use of static cloud credentials such as hard-coded API keys where feasible; and\n–\tusing temporary access tokens instead of permanent/static credentials/permissions for data sharing with external parties.",
      "ot": "The organisation has implemented separate authentication mechanisms and/or credentials for employees that have access to both OT and IT (or corporate) networks to mitigate against lateral movement between corporate IT networks and the OT environment in the event that employee credentials are compromised.\n\nFor OT, as the priority is on safety and availability,\nthe organisation has taken into consideration how any potential delay associated with the secure logon policy and procedures has not impeded access of OT personnel in emergency situations.",
      "ai": null
    },
    "focusArea": "Secure logon policy and procedure",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 157
  },
  {
    "clause": "B.15.7",
    "tier": "Performer",
    "domain": "Access control",
    "statements": {
      "classical": "The organisation has established and implemented a passphrase policy and procedure outlining the requirements, guidelines and detailed steps on setting and updating passphrases to provide guidance and direction on what constitutes strong passphrases.",
      "cloud": null,
      "ot": "The policy and procedure have outlined the respective limitations and the corresponding compensating controls for OT assets where:\n\n–\tdefault passwords cannot be changed;\n–\tsecure passwords or passphrases are not supported;\n–\tpasswords or passphrases are transmitted in cleartext due to legacy protocols;\n–\tpasswords are not recommended; or\n–\tother limitations or constraints exist.",
      "ai": null
    },
    "focusArea": "Passphrase policy and procedure",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 158
  },
  {
    "clause": "B.15.8",
    "tier": "Performer",
    "domain": "Access control",
    "statements": {
      "classical": "The organisation has established and implemented a user access control policy and procedure outlining the requirements, guidelines and detailed steps to restrict and authorise users’ access to its assets.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "User access control policy and procedure",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 159
  },
  {
    "clause": "B.15.9",
    "tier": "Performer",
    "domain": "Access control",
    "statements": {
      "classical": "The organisation has established and implemented secure remote access policies and procedures outlining the requirements, guidelines and detailed steps to protect information accessed remotely.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Remote access policy, process and procedure",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 160
  },
  {
    "clause": "B.15.10",
    "tier": "Advocate",
    "domain": "Access control",
    "statements": {
      "classical": "The organisation has established and implemented policies and processes to review any signs of access compromise and to report the results to the Board and/or senior management to ensure that they are kept informed.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Review and reporting of suspected access compromise",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 161
  },
  {
    "clause": "B.15.11",
    "tier": "Advocate",
    "domain": "Access control",
    "statements": {
      "classical": "The organisation has established and implemented a privileged access solution that is appropriate and recognised in the industry to authenticate users and authorise access based on their roles to ensure that there is a more efficient and effective way of managing access.",
      "cloud": "To implement privileged access for the cloud environment, the organisation has implemented measures to scale the management of cloud identities and their entitlements to mitigate the risk of unauthorised access and data breaches, e.g., using identity providers to authenticate users through SSO, use of cloud identity and entitlement management (CIEM) solutions, cloud-based identity and access management (IAM), CNAPP, or equivalent.",
      "ot": "The organisation has implemented separate deployments of privileged access solutions to manage privileged access for the OT and IT environment respectively, to mitigate against lateral movement between corporate IT networks and the OT environment, should privileged access credentials be compromised.",
      "ai": null
    },
    "focusArea": "Privileged access solution",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 162
  },
  {
    "clause": "B.16.1",
    "tier": "Supporter",
    "domain": "Cyber threat management",
    "statements": {
      "classical": "Domain is not assessable for this tier.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 164
  },
  {
    "clause": "B.16.2",
    "tier": "Practitioner",
    "domain": "Cyber threat management",
    "statements": {
      "classical": "Domain is not assessable for this tier. However, the organisation should ensure that logging is enabled for software and hardware assets, e.g., systems, events, security and debugging logs.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 165
  },
  {
    "clause": "B.16.3",
    "tier": "Promoter",
    "domain": "Cyber threat management",
    "statements": {
      "classical": "Domain is not assessable for this tier. However, the organisation shall ensure that logging is enabled for software and hardware assets, e.g., systems, events, security and debugging logs.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 166
  },
  {
    "clause": "B.16.4",
    "tier": "Performer",
    "domain": "Cyber threat management",
    "statements": {
      "classical": "The organisation has established and implemented a log monitoring policy, process and procedure on the requirements, guidelines and detailed steps to perform monitoring of security logs for threats and abnormalities.",
      "cloud": "The organisation has incorporated cloud best practices for its log monitoring policy, process and procedure.\n\nExamples include: \n\n–\tverifying that CSPs provide adequate logging capabilities, e.g., access to logs, retention period of logs, to ensure alignment with organisational policies;\n–\tprioritising logs for cloud workloads that may be most indicative of security issues, such as logs from the management plane, identity and access management activity, or changes in public-facing resources;\n–\tautomating log retrieval from CSPs;\n–\tnormalising cloud logs to a common format across cloud applications to facilitate log analysis; and\n–\tnormalising event, audit, activity, and other log entries that include user information (such as usernames) to a corporate identity so that events that refer to the same person in different usernames/user accounts in different cloud applications can be correlated.",
      "ot": null,
      "ai": "The log monitoring policy, process and procedure have included:\n\n–\tmonitoring inputs to the AI models or AI systems for possible attacks and suspicious activity; and\n–\tmonitoring AI model or system outputs and performance."
    },
    "focusArea": "Logs monitoring policy, process and procedures",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 167
  },
  {
    "clause": "B.16.5",
    "tier": "Performer",
    "domain": "Cyber threat management",
    "statements": {
      "classical": "The organisation has defined and assigned roles and responsibilities to carry out log monitoring and reviews of its systems, investigate incidents and report to relevant stakeholders.",
      "cloud": null,
      "ot": "The organisation has assigned roles and responsibilities to monitor and review logs, and investigate and report incidents for both OT and IT as OT and IT security operations converge, and OT and IT teams may be distinct and operate independently.",
      "ai": null
    },
    "focusArea": "Log monitoring roles and responsibilities",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 168
  },
  {
    "clause": "B.16.6",
    "tier": "Performer",
    "domain": "Cyber threat management",
    "statements": {
      "classical": "The organisation has implemented security information and event management (SIEM) to store logs centrally for correlation and to ensure more effective log monitoring.",
      "cloud": "The organisation's SIEM implementation has the capability to manage logs for the organisation's cloud workloads.",
      "ot": "In situations where active scanning by the SIEM solution is not appropriate or recommended in the OT environment, the organisation has:\n–\timplemented passive scanning; or\n–\tperformed active scans during scheduled maintenance windows or downtime.",
      "ai": null
    },
    "focusArea": "Implementing Security Information and Event Management (SIEM)",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 169
  },
  {
    "clause": "B.16.7",
    "tier": "Performer",
    "domain": "Cyber threat management",
    "statements": {
      "classical": "The organisation has established and implemented a security baseline profile on its systems to analyse and perform monitoring to ensure that anomalies are identified.",
      "cloud": null,
      "ot": "Recognising that the OT environment has a deterministic nature and OT activities and traffic tend to be more predictable and repeatable, the organisation has established a baseline of normal network traffic and data flows that factors in normal human and OT process behaviour, to differentiate between normal or transient conditions and anomalies and minimise false positive alerts.",
      "ai": null
    },
    "focusArea": "Establishing security baseline profile",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 170
  },
  {
    "clause": "B.16.8",
    "tier": "Performer",
    "domain": "Cyber threat management",
    "statements": {
      "classical": "The organisation has established and implemented policies and procedures on the requirements, guidelines and detailed steps to be carried out when it detects abnormal or suspicious logs, to ensure that they are investigated, reported and remediated promptly.",
      "cloud": null,
      "ot": "For OT, because the priority is safety and availability, the organisation's policies and procedures have indicated its response priority, e.g., restoring OT operations to normal versus performing investigation and preserving forensic data.",
      "ai": null
    },
    "focusArea": "Policies and procedure upon detection of abnormal/suspicious logs",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 171
  },
  {
    "clause": "B.16.9",
    "tier": "Advocate",
    "domain": "Cyber threat management",
    "statements": {
      "classical": "The organisation has established and implemented advanced analytics processes and solutions that are appropriate and recognised in the industry to detect abnormal system and user behaviour, e.g., user behaviour analytics.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Use of advanced analytics",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 172
  },
  {
    "clause": "B.16.10",
    "tier": "Advocate",
    "domain": "Cyber threat management",
    "statements": {
      "classical": "The organisation has established and implemented reporting requirements and dashboards to report detected cybersecurity incidents or anomalies based on their severity to the Board and/or senior management.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Incident reporting to board and/or senior management",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 173
  },
  {
    "clause": "B.16.11",
    "tier": "Advocate",
    "domain": "Cyber threat management",
    "statements": {
      "classical": "The organisation has established and implemented measures and processes to proactively search for threats that are hidden in its IT environment.",
      "cloud": "This includes threat hunting in the organisation's cloud environment.",
      "ot": "This includes threat hunting for hidden threats targeting the OT environment, the organisation’s own sector or adjacent sectors.",
      "ai": "This includes measures such as performing red teaming on the organisation’s AI systems."
    },
    "focusArea": "Proactive threat hunting",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 174
  },
  {
    "clause": "B.17.1",
    "tier": "Supporter",
    "domain": "Third-party risk and oversight",
    "statements": {
      "classical": "Domain is not assessable for this tier. However, the organisation should ensure that requirements on third parties in the mark of cyber hygiene under \n\n–\t“A.2 Assets: Hardware and Software”\n–\t“A.3. Assets: Data”\n–\t“A.5 Secure/Protect: Access control”; and\n–\t“A.6 Secure/Protect: Secure configuration”\n\nhave been implemented.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 176
  },
  {
    "clause": "B.17.2",
    "tier": "Practitioner",
    "domain": "Third-party risk and oversight",
    "statements": {
      "classical": "Domain is not assessable for this tier. However, the organisation should ensure that requirements on third parties in the mark of cyber hygiene under\n\n–\t“A.2 Assets: Hardware and Software”\n–\t“A.3 Assets: Data”\n–\t“A.5 Secure/Protect: Access control”; and\n–\t“A.6 Secure/Protect: Secure configuration”\n\nhave been implemented.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 177
  },
  {
    "clause": "B.17.3",
    "tier": "Promoter",
    "domain": "Third-party risk and oversight",
    "statements": {
      "classical": "The organisation has established and implemented service-level agreements with its third parties to ensure that the third party meets the commitments and expectations on cybersecurity while providing services.",
      "cloud": "The service level agreement with the organisation’s CSPs has incorporated key areas related to cloud security.\n\nExamples include:\n\n–\tperformance metrics of cloud services and resources, e.g., availability;\n–\tinformation security requirements (including shared cloud responsibility model);\n–\tchange management process, e.g.;, software updates;\n–\tlogging and monitoring practices, e.g., log and data retention period;\n–\tincident management and communications procedures, e.g., support hours, maximum first support response time;\n–\tattainment of cloud security standards; and\n–\tdata privacy.",
      "ot": null,
      "ai": "The service level agreement with the organisation’s AI suppliers has incorporated key areas related to AI security.\n\nExamples include: \n\n–\tperformance metrics of AI services, e.g. availability;\n–\tinformation security requirements, including responsibility of supplier for security;\n–\tguardrails and other measures implemented for security;\n–\tchange management process, e.g., software updates;\n–\tlogging and monitoring practices;\n–\tincident management practices; and\n–\tuse of the organisation’s data for training of the supplier’s AI models."
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 178
  },
  {
    "clause": "B.17.4",
    "tier": "Performer",
    "domain": "Third-party risk and oversight",
    "statements": {
      "classical": "The organisation has established and implemented measures to ensure that minimum cybersecurity requirements are defined for third parties, and that third parties are informed of their security obligations and to ensure that security is established for systems and data.",
      "cloud": "This has included establishing a shared responsibility model with the organisation’s CSPs (and data centre service providers, where relevant), including a review of the following practices:\n\n–\tNotification to the organisation within a specific timeframe if the CSP identifies a vulnerability for which the organisation can apply compensating controls to reduce its severity or likelihood of exploitation; and\n–\tSupport from the CSP for resolving or mitigating vulnerabilities in the CSP’s services.",
      "ot": "This has included reviewing the practices of the organisation’s third parties for OT in situations where there is heavy reliance on the OT supply chain, e.g., OT vendors: \n\n–\tcybersecurity posture of third parties' products, services and/or systems; and\n–\tcybersecurity practices of third parties when supporting the organisation in providing software upgrades and patches, performing integration services, or supporting the operations and maintenance of OT systems.",
      "ai": "This has included establishing a security shared responsibility model for AI with the organisation’s AI providers, where feasible, to cover:\n\n–\tthe security areas for which the organisation is responsible, including its responsibility to meet its customers' expectations and needs; and\n–\tthe security areas for which its suppliers and/or third-party partners are responsible."
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 179
  },
  {
    "clause": "B.17.5",
    "tier": "Performer",
    "domain": "Third-party risk and oversight",
    "statements": {
      "classical": "The organisation has established and implemented measures to assess its third parties before engaging them or onboarding them to ensure that they meet all required security obligations based on the risks for the type of services provided.",
      "cloud": "This has included an assessment of the minimum cybersecurity requirements to be met by:\n\n–\tits CSPs; and\n–\tthird-party software and images used by the organisation in the cloud, including open source,\n\nbased on the risk level of the project.",
      "ot": "This has included an assessment of the minimum cybersecurity requirements to be met by its third parties, based on the risk level of the project.",
      "ai": "This has included an assessment of the minimum cybersecurity requirements to be met by its third parties based on the risk level of the project \n\n–\tFor external model providers: Due diligence evaluation of the provider's own security posture.\n–\tFor external software libraries, including open source: Due diligence evaluation of the libraries, e.g., AI code checking, vulnerability scanning, or checking against a database with vulnerability information. \n–\tFor external APIs: Implementation of controls on data that is sent to services outside of the organisation, e.g., requiring users to log in to confirm before sending potentially sensitive information.\n\nWhere there is use of models or code that is not from trusted sources, the organisation has implemented appropriate controls, e.g. sandboxing."
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 180
  },
  {
    "clause": "B.17.6",
    "tier": "Advocate",
    "domain": "Third-party risk and oversight",
    "statements": {
      "classical": "The organisation has established and implemented measures to assess their third parties regularly based on agreed-upon security obligations for systems security and data protection.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Regular assessment of third-party security",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 181
  },
  {
    "clause": "B.17.7",
    "tier": "Advocate",
    "domain": "Third-party risk and oversight",
    "statements": {
      "classical": "The organisation has established and implemented measures to ensure that third-party cybersecurity risk management practices, such as assessments performed and open risks from third parties engaged, are reported to the Board and/or senior management to keep them informed.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Reporting of third-party risk to board and/or senior management",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 182
  },
  {
    "clause": "B.18.1",
    "tier": "Supporter",
    "domain": "Vulnerability assessment",
    "statements": {
      "classical": "Domain is not assessable for this tier.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 184
  },
  {
    "clause": "B.18.2",
    "tier": "Practitioner",
    "domain": "Vulnerability assessment",
    "statements": {
      "classical": "Domain is not assessable for this tier.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 185
  },
  {
    "clause": "B.18.3",
    "tier": "Promoter",
    "domain": "Vulnerability assessment",
    "statements": {
      "classical": "The organisation has established a vulnerability assessment plan with objectives, scope and requirements to review and perform vulnerability assessments on its systems.",
      "cloud": "The vulnerability assessment plan has included the organisation's cloud environment.",
      "ot": "The vulnerability assessment plan has included identification and evaluation of the threats and vulnerabilities within each OT sub-system and/or network segment and/or zone.",
      "ai": null
    },
    "focusArea": "Establishing vulnerability assessment plan",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 186
  },
  {
    "clause": "B.18.4",
    "tier": "Promoter",
    "domain": "Vulnerability assessment",
    "statements": {
      "classical": "The organisation performs regular vulnerability assessments, at least annually, to conduct non-intrusive scans on its systems to ensure that vulnerabilities are discovered.",
      "cloud": "The vulnerability assessment has included the organisation's cloud environment.\n\nExamples include the following:\n\n–\tImages: Building vulnerability assessment agents into images.\n–\tVirtual machines: Performing runtime vulnerability assessment/scans by taking snapshots of virtual machines and assessing them offline, without affecting the running workload.",
      "ot": "When conducting vulnerability assessments, where active scanning could interfere with real-time OT operation, the organisation has considered passive scanning and monitoring tools that are not intrusive to OT systems. \n\nIf active scanning is performed, the organisation has included, in its vulnerability assessment plan, a process for testing to be conducted first, and to perform such scans during scheduled maintenance windows or downtime.",
      "ai": "The vulnerability assessment has included the organisation's AI systems."
    },
    "focusArea": "Implementing regular vulnerability assessment",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 187
  },
  {
    "clause": "B.18.5",
    "tier": "Performer",
    "domain": "Vulnerability assessment",
    "statements": {
      "classical": "The organisation has defined and allocated roles and responsibilities for its employees on carrying out cybersecurity vulnerability assessment and management.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Defining roles and responsibilities for vulnerability assessment",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 188
  },
  {
    "clause": "B.18.6",
    "tier": "Performer",
    "domain": "Vulnerability assessment",
    "statements": {
      "classical": "The organisation has established and implemented policies and procedures outlining the requirements, guidelines and detailed steps for conducting cybersecurity vulnerability assessments across its systems to ensure that steps are taken to address the associated risk vulnerabilities identified promptly.",
      "cloud": "The vulnerability assessment policy and procedure have included the organisation's cloud environment. The organisation has verified that the vulnerability assessment policy and procedure is in alignment to the CSP’s support policy for vulnerability assessment.",
      "ot": null,
      "ai": null
    },
    "focusArea": "Vulnerability assessment policy and procedure",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 189
  },
  {
    "clause": "B.18.7",
    "tier": "Performer",
    "domain": "Vulnerability assessment",
    "statements": {
      "classical": "The organisation has established and implemented measures and processes to track, review, evaluate and address the vulnerabilities uncovered as part of the assessments to ensure that the vulnerabilities are remediated according to their severity.",
      "cloud": null,
      "ot": "In situations where vulnerabilities cannot be mitigated promptly (e.g., legacy OT devices or systems where software patches are not available, the organisation has implemented compensating controls to address these vulnerabilities.",
      "ai": null
    },
    "focusArea": "Tracking and remediating identified vulnerabilities",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 190
  },
  {
    "clause": "B.18.8",
    "tier": "Advocate",
    "domain": "Vulnerability assessment",
    "statements": {
      "classical": "The organisation has established and implemented a penetration test plan with the objectives, scope and rules of engagement to ensure that the penetration test can be performed safely.",
      "cloud": "The penetration test plan has included the organisation's cloud environment. The organisation has verified that the penetration test plan is in alignment to the CSP’s support policy for penetration testing.",
      "ot": "The organisation's test plan for penetration testing for the OT environment has:\n\n–\timplemented measures to ensure that OT functions are not adversely impacted by the testing process as OT systems can be highly sensitive to timing constraints or operate with limited resources;\n–\tfactored in the use of compensating controls, such as employing a replicated, virtualised, or simulated system to conduct penetration testing where relevant; and\n–\tfactored in the need to take production OT offline, during scheduled maintenance windows or downtime, before testing can be conducted where relevant.",
      "ai": null
    },
    "focusArea": "Establishing penetration test plan",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 191
  },
  {
    "clause": "B.18.9",
    "tier": "Advocate",
    "domain": "Vulnerability assessment",
    "statements": {
      "classical": "The organisation performs regular penetration tests, at least annually, to discover and exploit security weaknesses in its systems to ensure that its system's security can be evaluated.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Performing regular penetration testing",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 192
  },
  {
    "clause": "B.18.10",
    "tier": "Advocate",
    "domain": "Vulnerability assessment",
    "statements": {
      "classical": "The organisation has established and implemented metrics and thresholds, including dashboards, to provide reporting and tracking of open, overdue and severe vulnerabilities noted within its systems to provide visibility on tracking and remediations within established timelines.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Following up on vulnerability assessment findings",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 193
  },
  {
    "clause": "B.18.11",
    "tier": "Advocate",
    "domain": "Vulnerability assessment",
    "statements": {
      "classical": "The organisation has established and implemented practices and measures to regularly report on the vulnerability assessment results and findings to the Board and/or senior management.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Reporting of vulnerability assessment results to board and/or senior management",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 194
  },
  {
    "clause": "B.19.1",
    "tier": "Supporter",
    "domain": "Physical/environmental security",
    "statements": {
      "classical": "Domain is not assessable for this tier. However, the organisation should consider using online resources to promote good cybersecurity practices internally.\n\nNOTE – In Singapore, CSA’s cybersecurity toolkits for organisation leaders, employees and IT/cybersecurity personnel include content on cultivating cybersecurity leadership in the organisation, educating employees on cybersecurity, securing access and environment and protecting your information assets.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 196
  },
  {
    "clause": "B.19.2",
    "tier": "Practitioner",
    "domain": "Physical/environmental security",
    "statements": {
      "classical": "The organisation has identified the physical/environmental risks in its environment and implemented detective measures to be alerted to threats to ensure that they are addressed promptly.",
      "cloud": null,
      "ot": "Examples include:\n\n–\tphysical access of unauthorised personnel to the OT environment; and\n–\tnatural disasters or power outages that disrupt the organisation’s cybersecurity practices, rendering its OT environment vulnerable to cybersecurity incidents.",
      "ai": null
    },
    "focusArea": "Establishing detective control",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 197
  },
  {
    "clause": "B.19.3",
    "tier": "Practitioner",
    "domain": "Physical/environmental security",
    "statements": {
      "classical": "The organisation has taken measures to protect its physical assets against internal and external threats, e.g., using cable locks to prevent theft or tampering.",
      "cloud": null,
      "ot": "As logical and/or physical segmentation is used to characterise or isolate OT assets based on their risk or criticality levels or security requirements, the organisation has implemented physical controls for isolating OT sub-systems and/or network segments, e.g., use of locked cabinets or rooms to house OT assets.",
      "ai": null
    },
    "focusArea": "Protection against internal and external threats",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 198
  },
  {
    "clause": "B.19.4",
    "tier": "Practitioner",
    "domain": "Physical/environmental security",
    "statements": {
      "classical": "The organisation has implemented physical security measures on its perimeters, e.g., fences and gates, to deter unauthorised access to the premises.",
      "cloud": "The organisation has verified that the physical security measures implemented by its CSPs, e.g., providers' statements on physical security controls, including their data centres, certification(s) of recognised and appropriate standards that cover physical security, are in alignment with its requirements.",
      "ot": null,
      "ai": null
    },
    "focusArea": "Implementing perimeter security",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 199
  },
  {
    "clause": "B.19.5",
    "tier": "Promoter",
    "domain": "Physical/environmental security",
    "statements": {
      "classical": "The organisation has defined and implemented a process to ensure that visitors are registered and authorised before accessing the premises.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Implementing visitor authorisation",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 200
  },
  {
    "clause": "B.19.6",
    "tier": "Promoter",
    "domain": "Physical/environmental security",
    "statements": {
      "classical": "The organisation has defined and implemented a process to monitor its premises 24/7, e.g., using CCTV, to deter and investigate physical/ environmental threats.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Monitoring physical premise",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 201
  },
  {
    "clause": "B.19.7",
    "tier": "Promoter",
    "domain": "Physical/environmental security",
    "statements": {
      "classical": "The organisation has defined and applied a process to store and transport physical media containing business-critical data securely within and outside its premises to ensure that confidential and/or sensitive data are protected.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Establishing physical media handling process",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 202
  },
  {
    "clause": "B.19.8",
    "tier": "Performer",
    "domain": "Physical/environmental security",
    "statements": {
      "classical": "The organisation has established and implemented policies and procedures outlining the requirements, guidelines and detailed steps for escalation and security access controls to minimise the impact and interference to its physical environment.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Implementing physical/environmental security policy and procedure",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 203
  },
  {
    "clause": "B.19.9",
    "tier": "Performer",
    "domain": "Physical/environmental security",
    "statements": {
      "classical": "The organisation has defined and assigned roles and responsibilities for detecting, mitigating and responding against physical/environmental risks to ensure that employees understand their assigned tasks.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Defining roles and responsibilities for managing physical/environmental risk",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 204
  },
  {
    "clause": "B.19.10",
    "tier": "Performer",
    "domain": "Physical/environmental security",
    "statements": {
      "classical": "The organisation has established and implemented policies and procedures outlining the requirements, guidelines and detailed steps to review physical security measures and assets to ensure that they remain secure.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Establishing physical/environment review",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 205
  },
  {
    "clause": "B.19.11",
    "tier": "Advocate",
    "domain": "Physical/environmental security",
    "statements": {
      "classical": "The organisation has established and implemented policies or processes to report physical/environmental risks and controls to the Board and/or senior management to ensure that they are kept informed of the risks.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Reporting of physical/environmental risks",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 206
  },
  {
    "clause": "B.19.12",
    "tier": "Advocate",
    "domain": "Physical/environmental security",
    "statements": {
      "classical": "The organisation has established and implemented a process to review and improve the physical/environmental security measures to ensure that they are effective.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Establishing process Improvement on physical/environmental controls",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 207
  },
  {
    "clause": "B.20.1",
    "tier": "Supporter",
    "domain": "Network security",
    "statements": {
      "classical": "Domain is not assessable for this tier. However, the organisation should ensure requirements on network security in the mark of cyber hygiene under\n\n–\t“A.2 Assets: Hardware and Software”;\n–\t“A.4 Secure/Protect: Virus and malware protection”; and\n–\t“A.6 Secure/Protect: Secure configuration”\n\nhave been implemented.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 209
  },
  {
    "clause": "B.20.2",
    "tier": "Practitioner",
    "domain": "Network security",
    "statements": {
      "classical": "The organisation has configured and implemented access controls, e.g., whitelisting, blacklisting, on its network to enforce network security policy and ensure that unauthorised users and/or devices are kept out.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Implementing access control",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 210
  },
  {
    "clause": "B.20.3",
    "tier": "Practitioner",
    "domain": "Network security",
    "statements": {
      "classical": "The organisation has established and implemented the use of stateful firewall over a basic packet-filtering firewall to ensure that packets are filtered with more context for greater effectiveness.",
      "cloud": "Examples include measures such as:\n\n–\timplementing runtime protection for containers or virtual machines, e.g., network segmentation for containers or virtual machines; and\n–\tusing container firewalls or virtual firewalls to manage network traffic flow.",
      "ot": "The organisation has implemented a firewall that is purpose-built for OT or tailored for the OT environment and supports common OT protocols to provide protection of the OT network between logical and/or physical segments, as well as OT networks that face the IT or internet environment.",
      "ai": null
    },
    "focusArea": "Implementing stateful firewall",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 211
  },
  {
    "clause": "B.20.4",
    "tier": "Practitioner",
    "domain": "Network security",
    "statements": {
      "classical": "The network architecture and devices have been reviewed regularly, at least annually, to ensure they are up-to-date, without obsolete rules and protocols.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Network security review",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 212
  },
  {
    "clause": "B.20.5",
    "tier": "Promoter",
    "domain": "Network security",
    "statements": {
      "classical": "The organisation has defined and implemented a process to configure both wired and wireless networks securely, minimally using secure network authentication and encryption protocols and disabling Wi-Fi Protected Setup (WPS) to ensure that the network is secured and data is not lost or breached through the network.",
      "cloud": "For securing the organisation's connection to the cloud or communications between cloud environments, the organisation has implemented secure communication channels with up-to-date and approved protocols, e.g., use of encryption, cloud VPNs.",
      "ot": "In situations where securing OT communications and networks is not appropriate or recommended, e.g., has a negative impact on OT operations or safety, the organisation has implemented compensating controls.\n\nExamples include:\n\n–\twhere secure network authentication and encryption protocol cannot be implemented, using media access control (MAC) address filtering or other measures; and\n–\twhere legacy OT devices only support insecure wireless connections, using physical controls such as limiting wireless network coverage range within a secured physical area.",
      "ai": null
    },
    "focusArea": "Implementing network security ",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 213
  },
  {
    "clause": "B.20.6",
    "tier": "Promoter",
    "domain": "Network security",
    "statements": {
      "classical": "The organisation has defined and implemented a process to carry out network segmentation to segregate networks into private and public networks, with the private network holding business-critical data and having no connection to the internet to ensure that it is isolated from external threats.",
      "cloud": null,
      "ot": "The organisation has implemented segmentation (which can also include physical segmentation) to:\n\n–\trestrict and control communication and information flow between segments, based on the security requirements, risk and/or criticality; and\n–\tprotect OT legacy systems that are insecure to provide isolation from threats propagating from other segments and/or the Internet.",
      "ai": "As part of network segmentation, the organisation has implemented measures to manage the connectivity between its AI systems and other corporate systems, e.g., based on data sensitivity."
    },
    "focusArea": "Implementing network segmentation",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 214
  },
  {
    "clause": "B.20.7",
    "tier": "Performer",
    "domain": "Network security",
    "statements": {
      "classical": "The organisation has established and implemented security policies and procedures outlining the requirements, guidelines and detailed steps to harden the network architecture, device and access security.",
      "cloud": "To harden its cloud environment, the organisation has incorporated cloud security best practices.\n\nExamples include:\n\n–\tusing cloud network security groups for granular security policies at the resource level;\n–\tusing container application-aware network monitoring tools for:\n\tautomated determination of container networking surfaces, including both inbound ports and process-port bindings;\n\tdetection of traffic flows between containers and other network entities;\n\tdetection of network anomalies, e.g., unexpected traffic flows within the organisation’s network, port scanning, or outbound access to potentially dangerous destinations; and\n\tdetection of invalid or unexpected malicious processes and data introduced into the environment; and\n–\tusing solutions such as cloud access security brokers (CASBs), or equivalent, leveraging frameworks such as secure access service edge (SASE) for network security in the cloud.",
      "ot": null,
      "ai": null
    },
    "focusArea": "Establishing network security policies and procedures",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 215
  },
  {
    "clause": "B.20.8",
    "tier": "Performer",
    "domain": "Network security",
    "statements": {
      "classical": "The organisation has defined and assigned roles and responsibilities to oversee, manage and monitor network security to ensure that employees understand their assigned tasks.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Defining roles and responsibilities for network security",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 216
  },
  {
    "clause": "B.20.9",
    "tier": "Performer",
    "domain": "Network security",
    "statements": {
      "classical": "The organisation has established and implemented network intrusion detection to monitor and detect malicious network traffic to ensure that it can be identified and addressed in a timely manner.",
      "cloud": null,
      "ot": "For network intrusion detection on OT networks, the organisation has established and implemented network intrusion detection solutions that are purpose-built or tailored for OT, i.e., network intrusion detection that has incorporated attack signatures for common various OT protocols, such as Modbus TCP, Distributed Network Protocol 3 (DNP3), and Inter-Control Center Communications Protocol (ICCP).\n\nWhen network intrusion detection solutions are not available for non-IP based protocols or controller-based operating systems in the OT environment, the organisation has considered compensating controls (e.g., anomaly detection systems).",
      "ai": null
    },
    "focusArea": "Implementing network intrusion detection",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 217
  },
  {
    "clause": "B.20.10",
    "tier": "Advocate",
    "domain": "Network security",
    "statements": {
      "classical": "The organisation has established and implemented the policies and processes to evaluate the performance of network security devices in terms of their effectiveness in blocking malicious traffic and implementing improvements.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Evaluating performance of network security devices",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 218
  },
  {
    "clause": "B.20.11",
    "tier": "Advocate",
    "domain": "Network security",
    "statements": {
      "classical": "The organisation has established and implemented network intrusion prevention to block malicious network traffic and ensure that it is protected from threats.",
      "cloud": null,
      "ot": "For network intrusion prevention on OT networks, the organisation has established and implemented network intrusion prevention solutions that are purpose-built or tailored for OT:\n\nIn situations where automated responses associated with network intrusion prevention systems may impact the OT environment, e.g., false positives, the organisation has implemented appropriate mitigation measures such as placing the network intrusion prevention systems at higher levels, e.g., the demilitarised zone (DMZ) interfaces in the OT network.",
      "ai": null
    },
    "focusArea": "Implementing network intrusion prevention",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 219
  },
  {
    "clause": "B.21.1",
    "tier": "Supporter",
    "domain": "Incident response",
    "statements": {
      "classical": "The organisation has implemented all the cybersecurity requirements in the mark of cyber hygiene under “A.9 Respond: Incident response” to ensure it is ready to detect, respond to and recover from cybersecurity incidents.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Cybersecurity measures in Cyber Essentials",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 221
  },
  {
    "clause": "B.21.2",
    "tier": "Practitioner",
    "domain": "Incident response",
    "statements": {
      "classical": "The organisation has implemented all the cybersecurity recommendations in the mark of cyber hygiene under “A.9 Respond: Incident response” to ensure it is ready to detect, respond to and recover from cyber incidents.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Cybersecurity measures in Cyber Essentials",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 222
  },
  {
    "clause": "B.21.3",
    "tier": "Promoter",
    "domain": "Incident response",
    "statements": {
      "classical": "The organisation has defined and applied measures to verify contact details and ensure that employees involved in the cybersecurity incident response plan are contactable to ensure a prompt response.\n\nFunctional groups that are typically involved include:\n–\tsenior management;\n–\tincident response and/or cybersecurity team;\n–\tlegal team; and\n–\tcommunications team.",
      "cloud": "For cloud incident management, other functional groups, such as the cloud development team, may also be involved.",
      "ot": "For OT incident management, other functional groups may also be involved:\n\n–\tIT personnel that are involved in OT operations;\n–\tOT personnel; and\n–\tsecurity personnel and safety personnel.",
      "ai": "For AI incident management, other functional groups, such as the AI development team, may also be involved."
    },
    "focusArea": "Verifying contactability of personnel involved in incident response",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 223
  },
  {
    "clause": "B.21.4",
    "tier": "Promoter",
    "domain": "Incident response",
    "statements": {
      "classical": "The organisation has defined and applied the process to perform cyber exercises to ensure that stakeholders are involved and know what to do when an incident occurs to ensure that they are well prepared.",
      "cloud": "The organisation has included cloud-specific scenarios in these cyber exercises.",
      "ot": "The organisation has included OT-specific scenarios in these cyber exercises.\n\nIn situations where there is heavy reliance or intersections between the OT customer and the OT supply chain, e.g. OT vendors, these exercises have included key external stakeholders in the OT supply chain.",
      "ai": "The organisation has included AI-specific scenarios in these cyber exercises."
    },
    "focusArea": "Performing cyber exercises",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 224
  },
  {
    "clause": "B.21.5",
    "tier": "Performer",
    "domain": "Incident response",
    "statements": {
      "classical": "The organisation has defined and applied a process to carry out post-incident reviews of cyber exercises or cybersecurity incidents to identify areas for improvement and ensure that the incident response plan and process can be strengthened.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Conducting post-exercise or post-incident review",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 225
  },
  {
    "clause": "B.21.6",
    "tier": "Performer",
    "domain": "Incident response",
    "statements": {
      "classical": "The organisation has defined and established policies and procedures outlining the requirements, guidelines and detailed steps to investigate incidents to gather evidence to ensure that the root cause can be identified.",
      "cloud": "Examples include:\n\n–\tusing alerts from CSPM, SIEM, workload protection and network security monitoring; and\n–\tusing cloud forensics to analyse the management plane, service and other logs and system forensics for containers and virtual machines.",
      "ot": "The organisation has integrated its OT-specific incident response with the organisational incident response plan.\n\nThe policies and procedures established have included an evaluation of the response actions required and their impact on OT operations, e.g., physical isolation of the compromised system may negatively impact OT operations and may result in disruption of operational performance or safety.",
      "ai": "The organisation has integrated its AI-specific incident response with the organisational incident response plan."
    },
    "focusArea": "Establishing policy and procedure for incident investigation",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 226
  },
  {
    "clause": "B.21.7",
    "tier": "Advocate",
    "domain": "Incident response",
    "statements": {
      "classical": "The organisation has established and incorporated cybersecurity-related incidents into its crisis management plan to respond to incidents of higher magnitude and impact to ensure that they are treated with the appropriate urgency.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Establishing crisis management plan",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 227
  },
  {
    "clause": "B.21.8",
    "tier": "Advocate",
    "domain": "Incident response",
    "statements": {
      "classical": "The organisation has established and implemented a policy and process to report cybersecurity incidents and conclude the findings to the Board and/or senior management to ensure that they are kept informed.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Establishing incident reporting to board and/or senior management",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 228
  },
  {
    "clause": "B.22.1",
    "tier": "Supporter",
    "domain": "Business continuity/Disaster recovery",
    "statements": {
      "classical": "Domain is not assessable for this tier. However, the organisation should consider using online resources to promote good cybersecurity practices internally.\n\nNOTE – In Singapore, CSA’s cybersecurity toolkits for organisation leaders, employees and IT/cybersecurity personnel include content on cyber resilience",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": null,
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 230
  },
  {
    "clause": "B.22.2",
    "tier": "Practitioner",
    "domain": "Business continuity/Disaster recovery",
    "statements": {
      "classical": "The organisation has identified the critical assets requiring high availability and implemented measures to ensure redundancies for them.",
      "cloud": null,
      "ot": "The organisation has identified critical connectivity and assets required for reduced or constrained operations in the event of a cybersecurity incident.\n\nFor OT components that are not readily available, the organisation has taken steps to ensure redundancies/replacements are available.",
      "ai": null
    },
    "focusArea": "Identifying critical assets requiring high availability",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 231
  },
  {
    "clause": "B.22.3",
    "tier": "Promoter",
    "domain": "Business continuity/Disaster recovery",
    "statements": {
      "classical": "The organisation has defined and implemented a business impact analysis to identify critical processes and expected recovery time objectives (RTOs) and recovery point objectives (RPOs) for business resumption.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Performing business impact analysis",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 232
  },
  {
    "clause": "B.22.4",
    "tier": "Promoter",
    "domain": "Business continuity/Disaster recovery",
    "statements": {
      "classical": "The organisation has defined and implemented a process to perform redundancy on systems to ensure the cyber resilience of its systems.",
      "cloud": "In the context of the cloud, this can include using cloud services that span multiple data centres and geographical regions for a single service to increase redundancy and resilience.",
      "ot": null,
      "ai": null
    },
    "focusArea": "Implemenring process for redundancy",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 233
  },
  {
    "clause": "B.22.5",
    "tier": "Performer",
    "domain": "Business continuity/Disaster recovery",
    "statements": {
      "classical": "The organisation has established and implemented business continuity/disaster recovery policies outlining the requirements, roles and responsibilities and guidelines, including the RTO and RPO, to ensure that business resumption can be carried out according to the system’s criticality.",
      "cloud": null,
      "ot": "When prioritising recovery activities, the organisation has factored in its risk assessment and developed an appropriate sequence for start-up activities of OT equipment that have operational dependencies.",
      "ai": null
    },
    "focusArea": "Establishing business continuity/disaster recovery policy",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 234
  },
  {
    "clause": "B.22.6",
    "tier": "Performer",
    "domain": "Business continuity/Disaster recovery",
    "statements": {
      "classical": "The organisation has established and implemented a business continuity/disaster recovery plan to respond and recover from common business disruption scenarios, including those caused by cybersecurity incidents, to ensure cyber resilience.",
      "cloud": "The organisation has reviewed its CSPs’ disaster recovery plan for restoring cloud services, including the recovery of the organisation's applications and data in the cloud, to ensure alignment with its own disaster recovery plan.",
      "ot": "The organisation has determined the priority of recovery activities, e.g., recovering systems that support critical utilities before the OT systems.\n\nThe organisation's business continuity/disaster recovery plan shall be documented in both electronic and paper form, and readily accessible.",
      "ai": null
    },
    "focusArea": "Establishing business continuity/disaster recovery plan",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 235
  },
  {
    "clause": "B.22.7",
    "tier": "Performer",
    "domain": "Business continuity/Disaster recovery",
    "statements": {
      "classical": "The organisation performs regular reviews, at least annually, of the business continuity/disaster recovery plan to ensure it is kept up-to-date.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Business continuity/disaster recovery plan review",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 236
  },
  {
    "clause": "B.22.8",
    "tier": "Performer",
    "domain": "Business continuity/Disaster recovery",
    "statements": {
      "classical": "The organisation has established and implemented a policy and process to test its business continuity/disaster recovery plan regularly, at least annually, to ensure the effectiveness of the plan in achieving its objectives.",
      "cloud": null,
      "ot": "In situations where the testing the recovery plan is not feasible due to operational or safety considerations, the organisation has implemented alternative equivalents, such as laboratory testing or offline testing, to confirm the recovery procedures for OT equipment.",
      "ai": null
    },
    "focusArea": "Business continuity/disaster recovery plan test",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 237
  },
  {
    "clause": "B.22.9",
    "tier": "Advocate",
    "domain": "Business continuity/Disaster recovery",
    "statements": {
      "classical": "The organisation monitors the RTO and RPO during business continuity/disaster recovery to ensure that they fall within targets and reports the findings to the Board and/or senior management.",
      "cloud": null,
      "ot": null,
      "ai": null
    },
    "focusArea": "Monitoring against RTO/RPO",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 238
  },
  {
    "clause": "B.22.10",
    "tier": "Advocate",
    "domain": "Business continuity/Disaster recovery",
    "statements": {
      "classical": "The organisation performs coordinated business continuity/disaster recovery exercises with its third parties for an extended period to evaluate the effectiveness of the processes and procedures.",
      "cloud": null,
      "ot": "In situations where there is heavy reliance or intersections between the OT customer and the OT supply chain, e.g. OT vendors, these exercises have included key external stakeholders in the OT supply chain.",
      "ai": null
    },
    "focusArea": "Performing business continuity/disaster recovery exercise",
    "sourceSheet": "CS Preparedness Questionnaire",
    "sourceRow": 239
  }
];

export const cyberTrustRiskScenarios: CyberTrustRiskScenario[] = [
  {
    "id": "classical-1",
    "scope": "classical",
    "reference": 1,
    "riskType": "Infrastructure",
    "scenario": "Attacker exploits an unpatched vulnerability in an obsolete operating system (OS) or a key application used by the organisation, and gains unauthorised access into a key corporate system to manipulate the system or application.",
    "informationSecurityProperties": "Confidentiality\nIntegrity\nAvailability",
    "linkedPreparednessDomains": "B.3: Risk management\nB.12: System security\nB.18: Vulnerability assessment",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 7
  },
  {
    "id": "classical-2",
    "scope": "classical",
    "reference": 2,
    "riskType": "Infrastructure",
    "scenario": "Attacker floods the network with traffic and overwhelms its resources, resulting in the disruption or inaccessibility of critical services in the organisation.",
    "informationSecurityProperties": "Availability",
    "linkedPreparednessDomains": "B.3: Risk management\nB.12: System security\nB.20: Network security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 8
  },
  {
    "id": "classical-3",
    "scope": "classical",
    "reference": 3,
    "riskType": "Infrastructure",
    "scenario": "Attacker exploits a network or system with weak configuration (e.g., configuration left as default settings) and gains unauthorised access into the organisation’s network or system.",
    "informationSecurityProperties": "Confidentiality\nIntegrity\nAvailability",
    "linkedPreparednessDomains": "B.10: Backups\nB.12: System security\nB.16: Cyber threat management\nB.20: Network security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 9
  },
  {
    "id": "classical-4",
    "scope": "classical",
    "reference": 4,
    "riskType": "Infrastructure",
    "scenario": "Employees misconfigure a critical system in the organisation, resulting in an attacker exploiting this to cause disruption to key services or operations.",
    "informationSecurityProperties": "Availability",
    "linkedPreparednessDomains": "B.6: Audit\nB.7: Training and awareness\nB.10: Backups\nB.12: System security\nB.22: Business continuity /disaster recovery",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 10
  },
  {
    "id": "classical-5",
    "scope": "classical",
    "reference": 5,
    "riskType": "Infrastructure",
    "scenario": "Attacker uses malware to attack the organisation’s IT systems and penetrates its IT infrastructure, including servers and endpoints, and destroys sensitive and personal information.",
    "informationSecurityProperties": "Availability",
    "linkedPreparednessDomains": "B.10: Backups \nB.12: System security\nB.13: Virus and malware protection\nB.16: Cyber threat management\nB.18: Vulnerability assessment",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 11
  },
  {
    "id": "classical-6",
    "scope": "classical",
    "reference": 6,
    "riskType": "Data breach",
    "scenario": "Attacker compromises an employee's credentials to gain access into the organisation's systems, performs lateral movement to systems storing critical or sensitive data to exfiltrate and encrypt the data, before issuing a ransom note to the organisation.",
    "informationSecurityProperties": "Confidentiality\nIntegrity\nAvailability",
    "linkedPreparednessDomains": "B.15: Access control \nB.10: Backups \nB.12: System security\nB.20: Network security\nB.21: Incident response",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 12
  },
  {
    "id": "classical-7",
    "scope": "classical",
    "reference": 7,
    "riskType": "Data breach",
    "scenario": "Employee loses a corporate device or has it stolen, resulting in unauthorised users being able to access the organisation’s confidential and/or sensitive data, leading to data leakage or disclosure of confidential and/or sensitive data.",
    "informationSecurityProperties": "Confidentiality",
    "linkedPreparednessDomains": "B.3: Risk management\nB.7: Training and awareness\nB.8: Asset management \nB.9: Data protection and privacy\nB.15: Access control\nB.20: Network security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 13
  },
  {
    "id": "classical-8",
    "scope": "classical",
    "reference": 8,
    "riskType": "Data breach",
    "scenario": "Attacker exploits a vulnerability in the organisation’s application and gains access to extract confidential and/or sensitive data, including personal data.",
    "informationSecurityProperties": "Confidentiality",
    "linkedPreparednessDomains": "B.3: Risk management\nB.9: Data protection and privacy\nB.12: System security\nB.14: Secure SDLC\nB.15: Access control\nB.18: Vulnerability assessment\nB.20: Network security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 14
  },
  {
    "id": "classical-9",
    "scope": "classical",
    "reference": 9,
    "riskType": "Data breach",
    "scenario": "Attacker takes advantage of compromised or unauthorised devices to access the organisation’s confidential and/or sensitive data, which leads to the leakage of confidential and/or sensitive data.\t",
    "informationSecurityProperties": "Confidentiality",
    "linkedPreparednessDomains": "B.3: Risk management\nB.9: Data protection and privacy\nB.11: BYOD\nB.12: System security\nB.13: Virus and malware protection\nB.16: Cyber threat management\nB.20: Network security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 15
  },
  {
    "id": "classical-10",
    "scope": "classical",
    "reference": 10,
    "riskType": "Data breach",
    "scenario": "Employee fails to properly manage or handle portable storage devices (e.g., Universal Serial Bus (USB) drives, external hard disks) to transfer confidential and/or sensitive data, resulting in unauthorised access to sensitive data.",
    "informationSecurityProperties": "Confidentiality",
    "linkedPreparednessDomains": "B.7: Training and awareness\nB.8: Asset management \nB.9: Data protection and privacy",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 16
  },
  {
    "id": "classical-11",
    "scope": "classical",
    "reference": 11,
    "riskType": "Data breach",
    "scenario": "Unauthorised user is able to access data from IT assets that are not disposed of properly, resulting in disclosure of confidential and/or sensitive data.",
    "informationSecurityProperties": "Confidentiality",
    "linkedPreparednessDomains": "B.6: Audit\nB.8: Asset management\nB.9: Data protection and privacy ",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 17
  },
  {
    "id": "classical-12",
    "scope": "classical",
    "reference": 12,
    "riskType": "Human factor",
    "scenario": "Disgruntled employee performs unauthorised modification to sensitive information, resulting in disruption to business operations.",
    "informationSecurityProperties": "Integrity\nAvailability",
    "linkedPreparednessDomains": "B.3: Risk management\nB.7: Training and awareness \nB.15: Access control",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 18
  },
  {
    "id": "classical-13",
    "scope": "classical",
    "reference": 13,
    "riskType": "Human factor",
    "scenario": "Employee falls prey to phishing emails containing malicious payload (e.g., attachments, Uniform Resource Locator (URL)), resulting in either compromise of employees’ credentials, or introduction of malware.",
    "informationSecurityProperties": "Confidentiality\nIntegrity\nAvailability",
    "linkedPreparednessDomains": "B.3: Risk management\nB.7: Training and awareness\nB.15: Access control\nB.13: Virus and malware protection\nB.20: Network security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 19
  },
  {
    "id": "classical-14",
    "scope": "classical",
    "reference": 14,
    "riskType": "Human factor",
    "scenario": "Employee with access to confidential and/or sensitive data inadvertently uploads the data to an external service (e.g., public data analytics service, generative AI service), leading to disclosure of such data.",
    "informationSecurityProperties": "Confidentiality",
    "linkedPreparednessDomains": "B.7: Training and awareness\nB.9: Data protection and privacy",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 20
  },
  {
    "id": "classical-15",
    "scope": "classical",
    "reference": 15,
    "riskType": "Human factor",
    "scenario": "Employee involved in managing financial transactions is taken in by deepfake impersonation of senior management to execute high-value transactions, resulting in financial losses for the organisation.",
    "informationSecurityProperties": "Integrity",
    "linkedPreparednessDomains": "B.1: Governance\nB.7: Training and awareness\nB.21: Incident response",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 21
  },
  {
    "id": "classical-16",
    "scope": "classical",
    "reference": 16,
    "riskType": "Human factor",
    "scenario": "High turnover rate of or inadequate cybersecurity staff, resulting in a lack of resources to manage cybersecurity.",
    "informationSecurityProperties": "Confidentiality\nIntegrity\nAvailability",
    "linkedPreparednessDomains": "B.1: Governance\nB.4: Cyber strategy",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 22
  },
  {
    "id": "classical-17",
    "scope": "classical",
    "reference": 17,
    "riskType": "Physical security",
    "scenario": "Unauthorised user gains access to data processing/sensitive information storage facility due to inadequate physical access control, resulting in damage or destruction of critical systems and data.",
    "informationSecurityProperties": "Confidentiality\nIntegrity\nAvailability",
    "linkedPreparednessDomains": "B.3: Risk management\nB.10: Backups\nB.19: Physical/environmental security\nB.20: Network security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 23
  },
  {
    "id": "classical-18",
    "scope": "classical",
    "reference": 18,
    "riskType": "Physical security",
    "scenario": "Unauthorised user gains access to the organisation’s system via an inadequately secured wireless network access point, resulting in extraction of personal and sensitive information.",
    "informationSecurityProperties": "Confidentiality",
    "linkedPreparednessDomains": "B.3: Risk management\nB.11: BYOD\nB.15: Access control\nB.20: Network security\nB.19: Physical/environmental security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 24
  },
  {
    "id": "classical-19",
    "scope": "classical",
    "reference": 19,
    "riskType": "Physical security",
    "scenario": "Unauthorised visitors are allowed physical entry into the organisation’s restricted premises due to inadequate physical security, resulting in unauthorised access and operations disruption as systems are powered off maliciously or accidentally.",
    "informationSecurityProperties": "Confidentiality\nIntegrity\nAvailability",
    "linkedPreparednessDomains": "B.7: Training and awareness\nB.19: Physical/environmental security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 25
  },
  {
    "id": "classical-20",
    "scope": "classical",
    "reference": 20,
    "riskType": "Physical security",
    "scenario": "Physical environment of critical systems (e.g., temperature, moisture) is not adequately managed, resulting in disruption of operations.",
    "informationSecurityProperties": "Availability",
    "linkedPreparednessDomains": "B.10: Backups\nB.19: Physical/environmental security\nB.22: Business continuity /disaster recovery",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 26
  },
  {
    "id": "classical-21",
    "scope": "classical",
    "reference": 21,
    "riskType": "Regulatory and Compliance",
    "scenario": "Organisation fails to comply with personal data protection legal or regulatory requirements, resulting in financial penalties, leakage of personal data and reputational losses to the organisation.",
    "informationSecurityProperties": "Confidentiality",
    "linkedPreparednessDomains": "B.3 Risk management\nB.5 Compliance\nB.6 Audit\nB.9 Data protection and privacy",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 27
  },
  {
    "id": "classical-22",
    "scope": "classical",
    "reference": 22,
    "riskType": "Regulatory and Compliance",
    "scenario": "Organisation fails to comply with cybersecurity legal or regulatory requirements, resulting in financial penalties, operational disruption and reputational losses to the organisation.",
    "informationSecurityProperties": "Confidentiality\nIntegrity\nAvailability",
    "linkedPreparednessDomains": "B.3 Risk management\nB.5 Compliance\nB.6 Audit",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 28
  },
  {
    "id": "classical-23",
    "scope": "classical",
    "reference": 23,
    "riskType": "Regulatory and Compliance",
    "scenario": "Staff and vendors fail to comply with the organisation’s security policies and processes, leading to non-compliance.",
    "informationSecurityProperties": "Confidentiality\nIntegrity\nAvailability",
    "linkedPreparednessDomains": "B.2 Policies and procedures\nB.3 Risk management\nB.5 Compliance\nB.6 Audit\nB.7 Training and awareness",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 29
  },
  {
    "id": "classical-24",
    "scope": "classical",
    "reference": 24,
    "riskType": "Supply chain",
    "scenario": "Erroneous transactions, arising from the vendor’s negligence, occur in the organisation’s system, resulting in compromise of integrity of the transactions processed by the system and financial losses for the organisation.",
    "informationSecurityProperties": "Integrity",
    "linkedPreparednessDomains": "B.3: Risk management\nB.17: Third-party risk and oversight",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 30
  },
  {
    "id": "classical-25",
    "scope": "classical",
    "reference": 25,
    "riskType": "Supply chain",
    "scenario": "IT vendor engaged by the organisation has not implemented good cybersecurity practices (e.g., improper handling of the organisation’s sensitive data, vendor software contains unpatched vulnerabilities and/or uses open source software or libraries with malicious code), resulting in attackers gaining unauthorised access to the organisation’s system and/or data.",
    "informationSecurityProperties": "Confidentiality\nIntegrity\nAvailability",
    "linkedPreparednessDomains": "B.3: Risk management\nB.15: Access control\nB.16: Cyber threat management\nB.17: Third-party risk and oversight\nB.12: System security\nB.18: Vulnerability assessment\nB.20: Network security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 31
  },
  {
    "id": "classical-26",
    "scope": "classical",
    "reference": 26,
    "riskType": "Supply chain",
    "scenario": "Attackers launch attacks on key third-party service providers used by the organisation, resulting in disruption to key services and operations.",
    "informationSecurityProperties": "Availability",
    "linkedPreparednessDomains": "B.3: Risk management\nB.4: Cyber strategy\nB.22: Business continuity /disaster recovery",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 32
  },
  {
    "id": "cloud-1",
    "scope": "cloud",
    "reference": 1,
    "riskType": "Infrastructure",
    "scenario": "Attacker exploits an insecure interface or application programming interface API in the organisation's cloud service and gains unauthorised access to sensitive data or manipulates the organisation's cloud workloads.",
    "informationSecurityProperties": "Confidentiality\nIntegrity\nAvailability",
    "linkedPreparednessDomains": "B.15: Access control\nB.12: System security\nB.14: Secure SDLC\nB.18: Vulnerability assessment",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 34
  },
  {
    "id": "cloud-2",
    "scope": "cloud",
    "reference": 2,
    "riskType": "Infrastructure",
    "scenario": "Organisation has not enabled adequate logging of cloud security events, which limits its ability to detect potentially malicious activities if attackers gain unauthorised access and attempt to disrupt the organisation's cloud workloads.",
    "informationSecurityProperties": "Availability",
    "linkedPreparednessDomains": "B.12: System security\nB.16: Cyber threat management",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 35
  },
  {
    "id": "cloud-3",
    "scope": "cloud",
    "reference": 3,
    "riskType": "Infrastructure",
    "scenario": "Attacker exploits insecure configuration settings in the organisation's SaaS service and gains unauthorised access to manipulate the organisation's data or disrupt the delivery of the organisation’s cloud services.",
    "informationSecurityProperties": "Integrity\nAvailability",
    "linkedPreparednessDomains": "B.9: Data protection and privacy\nB.12: System security\n",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 36
  },
  {
    "id": "cloud-4",
    "scope": "cloud",
    "reference": 4,
    "riskType": "Data breach",
    "scenario": "Attacker exploits a database, cache or storage bucket that has weak configuration settings configured by developers in the organisation during the development stage that had not been tightened when the setup transitioned to the deployment stage, resulting in exposure of the entire database to data theft, destruction or tampering.",
    "informationSecurityProperties": "Confidentiality\nIntegrity\nAvailability",
    "linkedPreparednessDomains": "B.6: Audit\nB.9: Data protection and privacy\nB.12: System security\nB.14: Secure SDLC\nB.15: Access control",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 37
  },
  {
    "id": "cloud-5",
    "scope": "cloud",
    "reference": 5,
    "riskType": "Human factor",
    "scenario": "Organisation has subscriptions with multiple cloud service models (e.g., a mix of SaaS, PaaS and IaaS) each managed by respective business units, with varying levels of employee awareness regarding their roles and responsibilities as cloud users versus those of their respective cloud services providers, resulting in insecure cloud practices among employees, such as expecting cloud service providers to be responsible for data backup.",
    "informationSecurityProperties": "Confidentiality\nIntegrity\nAvailability",
    "linkedPreparednessDomains": "B.7: Training and awareness\nB.9: Data protection and privacy\nB.12: System security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 38
  },
  {
    "id": "cloud-6",
    "scope": "cloud",
    "reference": 6,
    "riskType": "Human factor",
    "scenario": "Attacker compromises weak credentials used by an employee when accessing the organisation's cloud service (e.g., weak passphrases, compromised credentials that had been used for multiple accounts, or excessive access privileges granted to an employee) to gain unauthorised access to sensitive data that is stored in the organisation's cloud service.",
    "informationSecurityProperties": "Confidentiality\nIntegrity\nAvailability",
    "linkedPreparednessDomains": "B.7: Training and awareness\nB.9: Data protection and privacy\nB.15: Access control\n",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 39
  },
  {
    "id": "cloud-7",
    "scope": "cloud",
    "reference": 7,
    "riskType": "Supply chain",
    "scenario": "SaaS provider used by the organisation manages an insecure setup on the cloud (e.g., vendor software contains unpatched vulnerabilities and/or uses open source software or libraries with malicious code), resulting in attackers gaining unauthorised access to the organisation’s data and cloud workloads through its provider.",
    "informationSecurityProperties": "Confidentiality\nIntegrity\nAvailability",
    "linkedPreparednessDomains": "B.3: Risk management\nB.16: Cyber threat management\nB.17: Third-party risk and oversight\nB.12: System security\nB.18: Vulnerability assessment\nB.20: Network security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 40
  },
  {
    "id": "cloud-8",
    "scope": "cloud",
    "reference": 8,
    "riskType": "Supply chain",
    "scenario": "Attackers launch attacks on a key cloud service provider used by the organisation, resulting in disruption to the organisation’s services and operations as a large proportion of its cloud workload is with a specific cloud service provider.",
    "informationSecurityProperties": "Availability",
    "linkedPreparednessDomains": "B.3: Risk management\nB.4: Cyber strategy\nB.22: Business continuity /disaster recovery",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 41
  },
  {
    "id": "ot-1",
    "scope": "ot",
    "reference": 1,
    "riskType": "Infrastructure",
    "scenario": "Attacker exploits a credential compromise in the organisation's IT network, which uses a centralised/shared credential management system across its OT and IT network, enabling the attacker to perform lateral movement to the OT network, resulting in disruption and/or manipulation of OT operations.",
    "informationSecurityProperties": "Safety\nAvailability\nIntegrity\n",
    "linkedPreparednessDomains": "B.7: Training and awareness\nB.12: System security\nB.19: Physical/environmental security\nB.20: Network security\n",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 43
  },
  {
    "id": "ot-2",
    "scope": "ot",
    "reference": 2,
    "riskType": "Infrastructure",
    "scenario": "Attacker introduces malicious traffic into the OT environment through the IT network because of improper implementation or configuration of the network segmentation or firewall between the organisation's OT and IT network, resulting in disruption of OT operations.",
    "informationSecurityProperties": "Safety\nAvailability\n",
    "linkedPreparednessDomains": "B.12: System security\nB.13: Virus and malware protection\nB.19: Physical/environmental security\nB.20: Network security\n",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 44
  },
  {
    "id": "ot-3",
    "scope": "ot",
    "reference": 3,
    "riskType": "Infrastructure",
    "scenario": "Attacker bypasses the compensating control implemented to mitigate an unpatched vulnerability in a legacy OT device or system, and gains unauthorised access to the legacy OT environment, resulting in disruption and/or manipulation of OT operations.",
    "informationSecurityProperties": "Safety\nAvailability\nIntegrity\n",
    "linkedPreparednessDomains": "B.12: System security\nB.19: Physical/environmental security\nB.18: Vulnerability assessment\nB.20: Network security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 45
  },
  {
    "id": "ot-4",
    "scope": "ot",
    "reference": 4,
    "riskType": "Infrastructure",
    "scenario": "Attacker from a ransomware group exploits a vulnerability in the organisation's IT network. As the organisation's OT network relies on the IT system (e.g. for billing, tracking), when the IT system is impacted, the organisation's OT operations are disrupted and need to be shut down as well.",
    "informationSecurityProperties": "Safety\nAvailability\n",
    "linkedPreparednessDomains": "B.12: System security\nB.18: Vulnerability assessment\nB.20: Network security\nB.22: Business continuity /disaster recovery",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 46
  },
  {
    "id": "ot-5",
    "scope": "ot",
    "reference": 5,
    "riskType": "Infrastructure",
    "scenario": "Attacker exploits a vulnerability in a software or code library that has been implemented as a common software module in cross-sectoral OT deployments, resulting in large-scale cross-sectoral impact on OT operations, including disruption of the organisation's OT operations.",
    "informationSecurityProperties": "Safety\nAvailability\n",
    "linkedPreparednessDomains": "B.12: System security\nB.14: Secure SDLC\nB.19: Physical/environmental security\nB.18: Vulnerability assessment\nB.20: Network security\nB.22: Business continuity /disaster recovery",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 47
  },
  {
    "id": "ot-6",
    "scope": "ot",
    "reference": 6,
    "riskType": "Human factor",
    "scenario": "Employee overseeing OT operations connects a removable storage media with infected files to the organisation's OT network for routine on-site work without implementing any data sanitisation measures, resulting in virus/malware being introduced into the organisation's OT network and disruption of OT operations.",
    "informationSecurityProperties": "Safety\nAvailability\n",
    "linkedPreparednessDomains": "B.7: Training and awareness\nB.8: Asset management\nB.11: BYOD\nB.12: System security\nB.13: Virus and malware protection\nB.19: Physical/environmental security\nB.20: Network security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 48
  },
  {
    "id": "ot-7",
    "scope": "ot",
    "reference": 7,
    "riskType": "Physical security",
    "scenario": "Attacker gains unauthorised access to the physical site hosting the OT environment as the organisation has not implemented adequate physical access control measures, resulting in disruption of its OT operations.",
    "informationSecurityProperties": "Safety\nAvailability\n",
    "linkedPreparednessDomains": "B.7: Training and awareness\nB.19: Physical/environmental security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 49
  },
  {
    "id": "ot-8",
    "scope": "ot",
    "reference": 8,
    "riskType": "Supply chain",
    "scenario": "OT vendor engaged by the organisation connects the vendor maintenance laptop, which is infected by malware from other customer sites, to the organisation's OT network for routine on-site work without implementing any data sanitisation measures, resulting in infection of the organisation's OT network and disruption of OT operations.",
    "informationSecurityProperties": "Safety\nAvailability\nIntegrity\nConfidentiality",
    "linkedPreparednessDomains": "B.8: Asset management\nB.12: System security\nB.13: Virus and malware protection\nB.17: Third-party risk and oversight\nB.19: Physical/environmental security\nB.20: Network security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 50
  },
  {
    "id": "ot-9",
    "scope": "ot",
    "reference": 9,
    "riskType": "Supply chain",
    "scenario": "Remote access arrangement set up by the organisation for its OT vendor to provide remote maintenance and support is compromised due to a lack of Two-Factor Authentication (2FA), resulting in attacker gaining unauthorised entry to the organisation’s OT data and systems.",
    "informationSecurityProperties": "Safety\nAvailability\nIntegrity\nConfidentiality",
    "linkedPreparednessDomains": "B.12: System security\nB.15: Access control\nB.17: Third-party risk and oversight\nB.20: Network security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 51
  },
  {
    "id": "ot-10",
    "scope": "ot",
    "reference": 10,
    "riskType": "Supply chain",
    "scenario": "Attacker exploits a vulnerability in the cloud environment implemented by a third-party vendor engaged by the organisation to host and process its OT telemetry data in the cloud, resulting in the attacker gaining access to multiple OT sites that are cloud-managed.",
    "informationSecurityProperties": "Integrity\nConfidentiality",
    "linkedPreparednessDomains": "B.12: System security\nB.13: Virus and malware protection\nB.17: Third-party risk and oversight\nB.18: Vulnerability assessment\nB.20: Network security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 52
  },
  {
    "id": "ai-1",
    "scope": "ai",
    "reference": 1,
    "riskType": "Infrastructure",
    "scenario": "Attacker launches a poisoning attack on the training data or run-time data that is input to the organisation's AI system or an AI service used by the organisation, resulting in manipulation of the output (e.g., recommendation, decision, prediction, content) from the AI system or service. ",
    "informationSecurityProperties": "Integrity",
    "linkedPreparednessDomains": "B.9: Data protection and privacy\nB.12: System security\nB.20: Network security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 54
  },
  {
    "id": "ai-2",
    "scope": "ai",
    "reference": 2,
    "riskType": "Infrastructure",
    "scenario": "Attacker exploits a weakness in an insecure AI (e.g., Large Language Model (LLM)) plugin used by the organisation, resulting in injection of malicious content into the AI, or leakage of sensitive data such as credentials through the insecure plugin.",
    "informationSecurityProperties": "Confidentiality\nIntegrity",
    "linkedPreparednessDomains": "B.9: Data protection and privacy\nB.12: System security\nB.14: Secure SDLC\nB.20: Network security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 55
  },
  {
    "id": "ai-3",
    "scope": "ai",
    "reference": 3,
    "riskType": "Infrastructure",
    "scenario": "Attacker provides high frequency, voluminous or malicious inputs to a LLM used by the organisation, resulting in a denial of service of the LLM.",
    "informationSecurityProperties": "Availability",
    "linkedPreparednessDomains": "B.3: Risk management\nB.12: System security\nB.20: Network security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 56
  },
  {
    "id": "ai-4",
    "scope": "ai",
    "reference": 4,
    "riskType": "Infrastructure",
    "scenario": "Attacker manipulates inputs into the organisation’s AI model such that the model misclassifies or misinterprets the inputs, changing its intended behaviour (i.e. model evasion), resulting in unintended outcomes.",
    "informationSecurityProperties": "Integrity",
    "linkedPreparednessDomains": "B.12: System security\nB.14: Secure SDLC\nB.20: Network security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 57
  },
  {
    "id": "ai-5",
    "scope": "ai",
    "reference": 5,
    "riskType": "Data breach",
    "scenario": "Attacker manipulates the behaviour of a LLM used by the organisation through direct or indirect prompts, resulting in unintended actions from the LLM such as the attacker gaining unauthorised privilege access to restricted parts of a system, altering system configuration or critical data records.",
    "informationSecurityProperties": "Integrity",
    "linkedPreparednessDomains": "B.12: System security\nB.14: Secure SDLC\nB.20: Network security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 58
  },
  {
    "id": "ai-6",
    "scope": "ai",
    "reference": 6,
    "riskType": "Data breach",
    "scenario": "Attacker queries the organisation's AI model extensively to monitor the input and output to understand its structure and decisions, before replicating it, resulting in model theft.",
    "informationSecurityProperties": "Confidentiality",
    "linkedPreparednessDomains": "B.12: System security\nB.14: Secure SDLC\nB.20: Network security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 59
  },
  {
    "id": "ai-7",
    "scope": "ai",
    "reference": 7,
    "riskType": "Human factor",
    "scenario": "Employee uses an authorised generative AI solution deployed in the organisation for generating summaries and insights, but has not verified the output generated before using this as top-line information, resulting in inaccurate information being communicated to internal (e.g., senior management) and external (e.g., customers) stakeholders. ",
    "informationSecurityProperties": "Integrity",
    "linkedPreparednessDomains": "B.7: Training and awareness\nB.9: Data protection and privacy",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 60
  },
  {
    "id": "ai-8",
    "scope": "ai",
    "reference": 8,
    "riskType": "Human factor",
    "scenario": "Employee submits proprietary information from its organisation (e.g. internal meeting minutes, source code) into an external generative AI tool or service that has not been authorized or approved by the organisation for productivity or optimisation, resulting in leakage of confidential or sensitive data. ",
    "informationSecurityProperties": "Confidentiality",
    "linkedPreparednessDomains": "B.7: Training and awareness\nB.9: Data protection and privacy",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 61
  },
  {
    "id": "ai-9",
    "scope": "ai",
    "reference": 9,
    "riskType": "Supply chain",
    "scenario": "Attacker exploits an AI model developed by the organisation's provider, or obtained from open source, that had been compromised with malicious code or contains a backdoor, resulting in unintended behaviour of the AI system, or the AI system posing a security risk to other systems, which can result in data leakage.",
    "informationSecurityProperties": "Confidentiality\nIntegrity",
    "linkedPreparednessDomains": "B.9: Data protection and privacy\nB.12: System security\nB.17: Third-party risk and oversight\nB.18: Vulnerability assessment\nB.20: Network security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 62
  },
  {
    "id": "ai-10",
    "scope": "ai",
    "reference": 10,
    "riskType": "Supply chain",
    "scenario": "Attacker exploits a model that is not adequately secured, which has been developed by the organisation's provider, to launch an attack on the organisation, resulting in unintended behaviour of the AI system or data leakage.",
    "informationSecurityProperties": "Confidentiality\nIntegrity",
    "linkedPreparednessDomains": "B.9: Data protection and privacy\nB.12: System security\nB.17: Third-party risk and oversight\nB.18: Vulnerability assessment\nB.20: Network security",
    "sourceSheet": "CS Risk Assessment",
    "sourceRow": 63
  }
];
