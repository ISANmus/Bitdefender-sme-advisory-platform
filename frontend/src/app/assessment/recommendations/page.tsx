"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  CyberTrustAnswer,
  cyberTrustQuestions,
} from "@/data/cyberTrustQuestions";

import {
  analyseReadiness,
  ReadinessAnalysis,
} from "@/lib/readiness";


export default function RecommendationsPage() {

  const [analysis, setAnalysis] =
    useState<ReadinessAnalysis | null>(null);


  useEffect(() => {

    const savedAnswers =
      localStorage.getItem("cyberTrustAnswers");


    if (!savedAnswers) {
      return;
    }


    const answers:
      Record<string, CyberTrustAnswer> =
      JSON.parse(savedAnswers);


    const result =
      analyseReadiness(
        cyberTrustQuestions,
        answers
      );


    setAnalysis(result);

  }, []);



  if (!analysis) {
    return (
      <main className="assessmentPage">
        <div className="resultsLoading">
          Loading recommendations...
        </div>
      </main>
    );
  }



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
            href="/assessment/results"
            className="backHome"
          >
            ← Back to Results
          </Link>

        </div>
      </nav>



      <section className="assessmentHeader">

        <div className="assessmentContainer">

          <div className="assessmentProgressHeader">

            <div>

              <p className="eyebrow">
                SECURITY RECOMMENDATIONS
              </p>


              <h1>
                Improvement Recommendations
              </h1>


              <p>
                Recommended actions based on the
                identified cybersecurity gaps.
              </p>

            </div>


            <div className="stepIndicator">

              <span>
                Step 4 of 4
              </span>


              <strong>
                Recommendations
              </strong>

            </div>


          </div>


          <div className="assessmentProgress">

            <div className="resultsProgressFill"/>

          </div>

        </div>

      </section>




      <section className="resultsSection">

        <div className="assessmentContainer">


          {analysis.gaps.length === 0 ? (

            <div className="noGapsCard">

              <span>
                ✓
              </span>


              <div>

                <h3>
                  No major gaps identified
                </h3>


                <p>
                  The organisation has met all
                  baseline controls assessed.
                  Further validation is recommended
                  before formal Cyber Trust assessment.
                </p>

              </div>


            </div>


          ) : (


            <div className="gapCards">


              {analysis.gaps.map((gap, index) => (

                <article
                  className="gapRecommendationCard"
                  key={gap.id}
                >


                  <div className="gapNumber">

                    {String(index + 1).padStart(2,"0")}

                  </div>



                  <div className="gapContent">


                    <p className="gapDomain">

                      {gap.domain}

                    </p>



                    <h3>

                      Recommended Improvement

                    </h3>



                    <p className="gapIssue">

                      {gap.recommendation}

                    </p>



                    {gap.bitdefenderCapability && (

                      <div className="bitdefenderBox">


                        <strong>
                          Security Capability Alignment
                        </strong>


                        <p>
                          {gap.bitdefenderCapability}
                        </p>


                      </div>

                    )}


                  </div>


                </article>


              ))}


            </div>


          )}



          <div className="resultsActions">

            <Link
              href="/assessment/results"
              className="secondaryButton"
            >
              Back to Results
            </Link>


            <Link
              href="/"
              className="primaryButton"
            >
              Complete Assessment
            </Link>


          </div>


        </div>


      </section>


    </main>
  );
}