
import { preparednessStatements } from "@/data/cyberTrustAssessmentData";

import type {
  CyberTrustScope,
  PreparednessStatement,
  CyberTrustTier,
} from "@/data/cyberTrustAssessmentData";

/**
 * Answers supported by the CSA preparedness questionnaire.
 */
export type PreparednessAnswer = "yes" | "no" | "na";

export interface ProgressiveAnswer {
  answer: PreparednessAnswer;
  justification?: string;
}

/**
 * A statement displayed for one selected assessment pillar.
 */
export interface ScopeStatementContent {
  scope: CyberTrustScope;
  text: string;
  inherited: boolean;
}

/**
 * One assessment item represents one CSA clause
 * within one selected pillar.
 */
export interface ActivePreparednessItem {
  id: string;
  scope: CyberTrustScope;
  statement: PreparednessStatement;
  scopeContent: ScopeStatementContent[];
}

/**
 * Progress information for each domain and pillar.
 */
export interface DomainProgress {
  domain: string;
  scope: CyberTrustScope;
  answered: number;
  yes: number;
  no: number;
  na: number;
  total: number;
  stoppingClause?: string;
  stoppingTier?: CyberTrustTier;
}

const SCOPE_LABELS: Record<CyberTrustScope, string> = {
  classical: "Classical Cybersecurity",
  cloud: "Cloud Security",
  ot: "OT Security",
  ai: "AI Security",
};

const NOT_ASSESSABLE_PREFIX =
  "Domain is not assessable for this tier";

/**
 * Creates a unique answer key for a clause and pillar.
 *
 * Example:
 * B.1.3::classical
 * B.1.3::cloud
 */
export function getQuestionKey(
  clause: string,
  scope: CyberTrustScope
): string {
  return `${clause}::${scope}`;
}

/**
 * Returns the display name of an assessment pillar.
 */
export function getScopeLabel(
  scope: CyberTrustScope
): string {
  return SCOPE_LABELS[scope];
}

/**
 * Determines whether a workbook cell contains
 * an actual assessable requirement.
 *
 * "inherit" means the Classical requirement applies.
 * Null means there is no separate statement.
 * "Domain is not assessable..." is informational,
 * not a question requiring a Yes/No answer.
 */
function isAssessableText(
  value: string | null | "inherit" | undefined
): value is string {
  return (
    typeof value === "string" &&
    value !== "inherit" &&
    value.trim().length > 0 &&
    !value.trim().startsWith(NOT_ASSESSABLE_PREFIX)
  );
}

/**
 * Builds the actual requirements for one pillar.
 *
 * Classical:
 *   Classical requirement only.
 *
 * Cloud / OT / AI:
 *   Classical baseline requirement, where applicable,
 *   plus the pillar-specific requirement, where available.
 *
 * An "inherit" marker does not create a separate
 * question. It means the Classical requirement applies.
 */
export function getScopeContent(
  statement: PreparednessStatement,
  scope: CyberTrustScope
): ScopeStatementContent[] {
  const content: ScopeStatementContent[] = [];

  const classicalText = statement.statements.classical;

  const additionalText = statement.statements[scope];

  if (scope === "classical") {
    if (isAssessableText(classicalText)) {
      content.push({
        scope: "classical",
        text: classicalText,
        inherited: false,
      });
    }

    return content;
  }

  // Include the Classical baseline if it is assessable.
  if (isAssessableText(classicalText)) {
    content.push({
      scope: "classical",
      text: classicalText,
      inherited: false,
    });
  }

  // Include a separate pillar requirement when one exists.
  if (isAssessableText(additionalText)) {
    content.push({
      scope,
      text: additionalText,
      inherited: false,
    });
  }

  return content;
}

/**
 * Checks whether a CSA clause contains at least one
 * assessable requirement for the selected pillar.
 */
export function isStatementAssessable(
  statement: PreparednessStatement,
  scope: CyberTrustScope
): boolean {
  return getScopeContent(statement, scope).length > 0;
}

/**
 * Returns the ordered assessment statements.
 *
 * Progression is independent for each selected pillar
 * and each cybersecurity domain.
 *
 * A No answer stops subsequent statements in the
 * same domain and pillar only.
 *
 * Yes and Not Applicable allow progression.
 */
export function buildActivePreparednessItems(
  selectedScopes: CyberTrustScope[],
  answers: Record<string, ProgressiveAnswer>
): ActivePreparednessItem[] {
  const orderedDomains: string[] = [];

  const statementsByDomain = new Map<
    string,
    PreparednessStatement[]
  >();

  // Preserve the original workbook ordering.
  for (const statement of preparednessStatements) {
    if (!statementsByDomain.has(statement.domain)) {
      statementsByDomain.set(statement.domain, []);
      orderedDomains.push(statement.domain);
    }

    statementsByDomain.get(statement.domain)!.push(statement);
  }

  const activeItems: ActivePreparednessItem[] = [];

  // Assess each domain and selected pillar independently.
  for (const domain of orderedDomains) {
    const domainStatements =
      statementsByDomain.get(domain) ?? [];

    for (const scope of selectedScopes) {
      for (const statement of domainStatements) {
        const scopeContent = getScopeContent(
          statement,
          scope
        );

        // Skip clauses with no assessable requirement
        // for this particular pillar.
        if (scopeContent.length === 0) {
          continue;
        }

        const id = getQuestionKey(
          statement.clause,
          scope
        );

        activeItems.push({
          id,
          scope,
          statement,
          scopeContent,
        });

        const existingAnswer = answers[id]?.answer;

        // A No ends progression for this domain
        // and pillar, following CSA instructions.
        if (existingAnswer === "no") {
          break;
        }
      }
    }
  }

  return activeItems;
}

/**
 * Removes answers to subsequent statements within
 * the same domain and pillar after a No response.
 *
 * Other pillars and domains are not affected.
 */
export function clearLaterDomainAnswers(
  answers: Record<string, ProgressiveAnswer>,
  currentItem: ActivePreparednessItem
): Record<string, ProgressiveAnswer> {
  const updatedAnswers = { ...answers };

  const currentPosition =
    preparednessStatements.findIndex(
      (item) =>
        item.clause === currentItem.statement.clause
    );

  if (currentPosition === -1) {
    return updatedAnswers;
  }

  const currentDomain = currentItem.statement.domain;
  const currentScope = currentItem.scope;

  preparednessStatements.forEach(
    (statement, index) => {
      if (
        statement.domain === currentDomain &&
        index > currentPosition
      ) {
        const laterKey = getQuestionKey(
          statement.clause,
          currentScope
        );

        delete updatedAnswers[laterKey];
      }
    }
  );

  return updatedAnswers;
}

/**
 * Calculates assessment progress for each domain
 * and pillar separately.
 */
export function getDomainProgress(
  selectedScopes: CyberTrustScope[],
  answers: Record<string, ProgressiveAnswer>
): DomainProgress[] {
  const activeItems = buildActivePreparednessItems(
    selectedScopes,
    answers
  );

  const domainMap = new Map<string, DomainProgress>();

  for (const item of activeItems) {
    const domain = item.statement.domain;
    const scope = item.scope;

    const key = `${domain}::${scope}`;

    if (!domainMap.has(key)) {
      domainMap.set(key, {
        domain,
        scope,
        answered: 0,
        yes: 0,
        no: 0,
        na: 0,
        total: 0,
      });
    }

    const result = domainMap.get(key)!;

    result.total += 1;

    const response = answers[item.id];

    if (!response) {
      continue;
    }

    result.answered += 1;

    if (response.answer === "yes") {
      result.yes += 1;
    }

    if (response.answer === "no") {
      result.no += 1;
      result.stoppingClause = item.statement.clause;
      result.stoppingTier = item.statement.tier;
    }

    if (response.answer === "na") {
      result.na += 1;
    }
  }

  return Array.from(domainMap.values());
}
