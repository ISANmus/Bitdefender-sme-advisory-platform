"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  CyberTrustAnswer,
  cyberTrustQuestions,
} from "@/data/cyberTrustQuestions";

interface OrganisationProfile {
  organisationName: string;
  industry: string;
  employeeCount: string;
  endpointCount: string;
  itManagement: string;
  currentSecurity: string;
}

export default function QuestionsPage() {
  const router = useRouter();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [organisationProfile, setOrganisationProfile] =
    useState<OrganisationProfile | null>(null);

  const [answers, setAnswers] = useState<
    Record<string, CyberTrustAnswer>
  >({});

  const [justifications, setJustifications] = useState<
    Record<string, string>
  >({});

  useEffect(() => {
    const savedProfile = localStorage.getItem("organisationProfile");

    if (savedProfile) {
      setOrganisationProfile(JSON.parse(savedProfile));
    }

    const savedAnswers = localStorage.getItem("cyberTrustAnswers");

    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }

    const savedJustifications = localStorage.getItem(
      "cyberTrustJustifications"
    );

    if (savedJustifications) {
      setJustifications(JSON.parse(savedJustifications));
    }
  }, []);

  const currentQuestion = cyberTrustQuestions[currentQuestionIndex];

  const currentAnswer = answers[currentQuestion.id];

  const progress =
    ((currentQuestionIndex + 1) / cyberTrustQuestions.length) * 100;

  function selectAnswer(answer: CyberTrustAnswer) {
    const updatedAnswers = {
      ...answers,
      [currentQuestion.id]: answer,
    };

    setAnswers(updatedAnswers);

    localStorage.setItem(
      "cyberTrustAnswers",
      JSON.stringify(updatedAnswers)
    );
  }

  function updateJustification(value: string) {
    const updatedJustifications = {
      ...justifications,
      [currentQuestion.id]: value,
    };

    setJustifications(updatedJustifications);

    localStorage.setItem(
      "cyberTrustJustifications",
      JSON.stringify(updatedJustifications)
    );
  }

  function goNext() {
    if (!canContinue) {
      return;
    }

    if (currentQuestionIndex < cyberTrustQuestions.length - 1) {
      setCurrentQuestionIndex((previous) => previous + 1);
    }
  }

  function goPrevious() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((previous) => previous - 1);
    }
  }

  function handleAnalyse() {
    if (!allQuestionsComplete) {
      return;
    }

    localStorage.setItem(
      "cyberTrustAnswers",
      JSON.stringify(answers)
    );

    localStorage.setItem(
      "cyberTrustJustifications",
      JSON.stringify(justifications)
    );

    router.push("/assessment/results");
  }

  const canContinue =
    Boolean(currentAnswer) &&
    !(
      currentAnswer === "na" &&
      !justifications[currentQuestion.id]?.trim()
    );

  const allQuestionsComplete = cyberTrustQuestions.every((question) => {
    const answer = answers[question.id];

    if (!answer) {
      return false;
    }

    if (
      answer === "na" &&
      !justifications[question.id]?.trim()
    ) {
      return false;
    }

    return true;
  });

  const answeredCount = cyberTrustQuestions.filter(
    (question) => answers[question.id]
  ).length;

  return (
    <main className="assessmentPage">
      <nav className="navbar">
        <div className="container navbarContent">
          <Link href="/" className="brand">
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

      <section className="assessmentHeader">
        <div className="assessmentContainer">
          <div className="assessmentProgressHeader">
            <div>
              <p className="eyebrow">
                CYBER TRUST BASELINE ASSESSMENT
              </p>

              <h1>Cybersecurity Assessment</h1>

              <p>
                Review your organisation&apos;s current cybersecurity controls
                and practices.
              </p>
            </div>

            <div className="stepIndicator">
              <span>Step 2 of 4</span>
              <strong>Cybersecurity Assessment</strong>
            </div>
          </div>

          <div className="assessmentProgress">
            <div
              className="questionOverallProgress"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </section>

      <section className="assessmentContent">
        <div className="assessmentContainer questionLayout">
          <div className="questionMain">
            <div className="questionTopBar">
              <div>
                <span className="questionNumber">
                  Question {currentQuestionIndex + 1} of{" "}
                  {cyberTrustQuestions.length}
                </span>

                <span className="domainBadge">
                  {currentQuestion.domain}
                </span>
              </div>

              <span className="answeredCount">
                {answeredCount} answered
              </span>
            </div>

            <div className="questionCard">
              <p className="questionDomain">
                {currentQuestion.domain}
              </p>

              <h2>
                {currentQuestion.question}
              </h2>

              <p className="questionDescription">
                {currentQuestion.description}
              </p>

              <div className="answerOptions">
                <button
                  type="button"
                  className={`answerOption ${
                    currentAnswer === "yes"
                      ? "selectedAnswer"
                      : ""
                  }`}
                  onClick={() => selectAnswer("yes")}
                >
                  <span className="answerCircle">
                    ✓
                  </span>

                  <div>
                    <strong>Yes</strong>

                    <p>
                      This is currently implemented.
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  className={`answerOption ${
                    currentAnswer === "no"
                      ? "selectedAnswer"
                      : ""
                  }`}
                  onClick={() => selectAnswer("no")}
                >
                  <span className="answerCircle">
                    ×
                  </span>

                  <div>
                    <strong>No</strong>

                    <p>
                      This is not currently implemented.
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  className={`answerOption ${
                    currentAnswer === "na"
                      ? "selectedAnswer"
                      : ""
                  }`}
                  onClick={() => selectAnswer("na")}
                >
                  <span className="answerCircle">
                    —
                  </span>

                  <div>
                    <strong>Not Applicable</strong>

                    <p>
                      This does not apply to the organisation&apos;s
                      environment.
                    </p>
                  </div>
                </button>
              </div>

              {currentAnswer === "na" && (
                <div className="naJustification">
                  <label htmlFor="naJustification">
                    Why is this not applicable?
                  </label>

                  <textarea
                    id="naJustification"
                    value={
                      justifications[currentQuestion.id] ?? ""
                    }
                    onChange={(event) =>
                      updateJustification(event.target.value)
                    }
                    placeholder="Provide a brief justification..."
                  />

                  <span>
                    A justification is required for a Not Applicable response.
                  </span>
                </div>
              )}

              <div className="questionNavigation">
                <button
                  type="button"
                  className="questionBackButton"
                  onClick={goPrevious}
                  disabled={currentQuestionIndex === 0}
                >
                  ← Previous
                </button>

                {currentQuestionIndex <
                cyberTrustQuestions.length - 1 ? (
                  <button
                    type="button"
                    className="primaryButton"
                    onClick={goNext}
                    disabled={!canContinue}
                  >
                    Next Question →
                  </button>
                ) : (
                  <button
                    type="button"
                    className="primaryButton"
                    onClick={handleAnalyse}
                    disabled={!allQuestionsComplete}
                  >
                    Analyse Readiness →
                  </button>
                )}
              </div>
            </div>
          </div>

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
                    <span>Employees</span>

                    <strong>
                      {organisationProfile.employeeCount}
                    </strong>
                  </div>

                  <div>
                    <span>Endpoints</span>

                    <strong>
                      {organisationProfile.endpointCount}
                    </strong>
                  </div>
                </div>
              )}
            </div>

            <div className="sidebarNotice">
              <strong>
                About this assessment
              </strong>

              <p>
                This prototype provides a preliminary cybersecurity readiness
                screening. It does not constitute Cyber Trust certification or
                replace assessment by an appointed certification body.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}