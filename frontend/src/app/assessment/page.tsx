"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AssessmentPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    organisationName: "",
    industry: "",
    employeeCount: "",
    endpointCount: "",
    itManagement: "",
    currentSecurity: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    localStorage.setItem(
      "organisationProfile",
      JSON.stringify(formData)
    );

    router.push("/assessment/questions");
  }

  const formComplete =
    formData.organisationName.trim() !== "" &&
    formData.industry !== "" &&
    formData.employeeCount !== "" &&
    formData.endpointCount !== "" &&
    formData.itManagement !== "";

  return (
    <main className="assessmentPage">
      <nav className="navbar">
        <div className="container navbarContent">
          <Link href="/" className="brand">
            <div>
              <p className="brandName">SME Security Advisor</p>
              <p className="brandSubtext">
                Cyber Trust Readiness & Bitdefender Advisory
              </p>
            </div>
          </Link>

          <Link href="/" className="backHome">
            ← Back to Home
          </Link>
        </div>
      </nav>

      <section className="assessmentHeader">
        <div className="assessmentContainer">
          <div className="assessmentProgressHeader">
            <div>
              <p className="eyebrow">CYBERSECURITY ASSESSMENT</p>

              <h1>Tell us about your organisation</h1>

              <p>
                This information provides context for the cybersecurity
                readiness assessment and subsequent recommendations.
              </p>
            </div>

            <div className="stepIndicator">
              <span>Step 1 of 4</span>
              <strong>Organisation Profile</strong>
            </div>
          </div>

          <div className="assessmentProgress">
            <div className="assessmentProgressFill"></div>
          </div>
        </div>
      </section>

      <section className="assessmentContent">
        <div className="assessmentContainer assessmentLayout">
          <div className="assessmentFormCard">
            <div className="formSectionHeader">
              <h2>Organisation Information</h2>

              <p>
                Provide some basic information about the organisation being
                assessed.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="formGroup">
                <label htmlFor="organisationName">
                  Organisation Name
                </label>

                <input
                  id="organisationName"
                  name="organisationName"
                  type="text"
                  placeholder="Enter organisation name"
                  value={formData.organisationName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formRow">
                <div className="formGroup">
                  <label htmlFor="industry">Industry</label>

                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select industry</option>

                    <option value="professional-services">
                      Professional Services
                    </option>

                    <option value="retail">
                      Retail
                    </option>

                    <option value="manufacturing">
                      Manufacturing
                    </option>

                    <option value="healthcare">
                      Healthcare
                    </option>

                    <option value="education">
                      Education
                    </option>

                    <option value="financial-services">
                      Financial Services
                    </option>

                    <option value="technology">
                      Technology
                    </option>

                    <option value="logistics">
                      Logistics
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>

                <div className="formGroup">
                  <label htmlFor="employeeCount">
                    Number of Employees
                  </label>

                  <select
                    id="employeeCount"
                    name="employeeCount"
                    value={formData.employeeCount}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select range</option>
                    <option value="1-10">1 - 10</option>
                    <option value="11-50">11 - 50</option>
                    <option value="51-100">51 - 100</option>
                    <option value="101-200">101 - 200</option>
                    <option value="201+">More than 200</option>
                  </select>
                </div>
              </div>

              <div className="formRow">
                <div className="formGroup">
                  <label htmlFor="endpointCount">
                    Approximate Number of Endpoints
                  </label>

                  <select
                    id="endpointCount"
                    name="endpointCount"
                    value={formData.endpointCount}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select range</option>
                    <option value="1-10">1 - 10</option>
                    <option value="11-50">11 - 50</option>
                    <option value="51-100">51 - 100</option>
                    <option value="101-250">101 - 250</option>
                    <option value="251+">More than 250</option>
                  </select>
                </div>

                <div className="formGroup">
                  <label htmlFor="itManagement">
                    How is IT currently managed?
                  </label>

                  <select
                    id="itManagement"
                    name="itManagement"
                    value={formData.itManagement}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select option</option>

                    <option value="internal">
                      Internal IT Team
                    </option>

                    <option value="outsourced">
                      Outsourced IT / Managed Service Provider
                    </option>

                    <option value="both">
                      Internal and Outsourced
                    </option>

                    <option value="none">
                      No Dedicated IT Team
                    </option>
                  </select>
                </div>
              </div>

              <div className="formGroup">
                <label htmlFor="currentSecurity">
                  Current Endpoint Security Solution
                </label>

                <input
                  id="currentSecurity"
                  name="currentSecurity"
                  type="text"
                  placeholder="e.g. Bitdefender GravityZone, Microsoft Defender"
                  value={formData.currentSecurity}
                  onChange={handleChange}
                />

                <span className="fieldHint">
                  Leave blank if the organisation does not currently use an
                  endpoint security solution.
                </span>
              </div>

              <div className="formActions">
                <Link href="/" className="secondaryButton">
                  Cancel
                </Link>

                <button
                  type="submit"
                  className="primaryButton"
                  disabled={!formComplete}
                >
                  Continue to Assessment →
                </button>
              </div>
            </form>
          </div>

          <aside className="assessmentSidebar">
            <div className="sidebarCard">
              <p className="sidebarLabel">
                ASSESSMENT PROCESS
              </p>

              <div className="assessmentStep activeAssessmentStep">
                <span>1</span>

                <div>
                  <strong>Organisation Profile</strong>
                  <p>Basic environment information</p>
                </div>
              </div>

              <div className="assessmentStep">
                <span>2</span>

                <div>
                  <strong>Cybersecurity Assessment</strong>
                  <p>Security controls and practices</p>
                </div>
              </div>

              <div className="assessmentStep">
                <span>3</span>

                <div>
                  <strong>Readiness Analysis</strong>
                  <p>Cyber Trust preparedness and gaps</p>
                </div>
              </div>

              <div className="assessmentStep">
                <span>4</span>

                <div>
                  <strong>Recommendations</strong>
                  <p>Improvement and solution guidance</p>
                </div>
              </div>
            </div>

            <div className="sidebarNotice">
              <strong>Why do we need this?</strong>

              <p>
                Organisation size, endpoint environment and existing security
                solutions provide additional context when analysing security
                gaps and recommending suitable improvements.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}