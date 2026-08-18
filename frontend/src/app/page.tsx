import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <div className="container navbarContent">
          <div className="brand">
            <Image
              src="/logo.png"
              alt="SME Security Advisor Logo"
              width={120}
              height={45}
              className="brandLogo"
            />

            <div>
              <p className="brandName">SME Security Advisor</p>
              <p className="brandSubtext">
                Cyber Trust Readiness & Bitdefender Advisory
              </p>
            </div>
          </div>

          <div className="navLinks">
            <a href="#how-it-works">How It Works</a>
            <a href="#features">Features</a>

            <Link href="/assessment" className="navButton">
              Start Assessment
            </Link>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container heroContent">
          <div className="heroText">
            <p className="eyebrow">CYBER TRUST READINESS FOR SMEs</p>

            <h1>
              Understand your security.
              <span> Prepare for Cyber Trust.</span>
            </h1>

            <p className="heroDescription">
              Assess your organisation&apos;s cybersecurity posture, identify
              security gaps, understand your preparedness for Cyber Trust, and
              receive recommendations to strengthen your security environment.
            </p>

            <div className="heroActions">
              <Link href="/assessment" className="primaryButton">
                Start Assessment
                <span>→</span>
              </Link>

              <a href="#how-it-works" className="secondaryButton">
                Learn How It Works
              </a>
            </div>

            <p className="assessmentInfo">
              Readiness assessment • Gap analysis • Cyber Trust preparedness •
              Security recommendations
            </p>
          </div>

          <div className="heroCard">
            <div className="cardHeader">
              <div>
                <p className="cardLabel">Example Assessment Result</p>
                <h2>Cyber Trust Readiness</h2>
              </div>

              <div className="statusBadge">Moderate</div>
            </div>

            <div className="scoreSection">
              <div className="scoreCircle">
                <span className="scoreNumber">68</span>
                <span className="scorePercent">%</span>
              </div>

              <div className="scoreText">
                <strong>Overall Readiness</strong>
                <p>
                  Your organisation has several cybersecurity controls in
                  place, but some areas may require improvement before being
                  better prepared for Cyber Trust.
                </p>
              </div>
            </div>

            <div className="category">
              <div className="categoryHeader">
                <span>Endpoint Security</span>
                <strong>80%</strong>
              </div>

              <div className="progressBackground">
                <div className="progressBar progress80"></div>
              </div>
            </div>

            <div className="category">
              <div className="categoryHeader">
                <span>Access Control</span>
                <strong>70%</strong>
              </div>

              <div className="progressBackground">
                <div className="progressBar progress70"></div>
              </div>
            </div>

            <div className="category">
              <div className="categoryHeader">
                <span>Security Preparedness</span>
                <strong>55%</strong>
              </div>

              <div className="progressBackground">
                <div className="progressBar progress55"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section">
        <div className="container">
          <div className="sectionHeading">
            <p className="eyebrow">HOW IT WORKS</p>

            <h2>
              From cybersecurity assessment to actionable recommendations
            </h2>

            <p>
              The platform evaluates your organisation&apos;s current security
              practices and provides an overview of its cybersecurity and Cyber
              Trust preparedness.
            </p>
          </div>

          <div className="stepsGrid">
            <div className="stepCard">
              <div className="stepNumber">01</div>

              <h3>Organisation Profile</h3>

              <p>
                Provide information about your organisation, IT environment,
                existing security solutions, and security requirements.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">02</div>

              <h3>Security Assessment</h3>

              <p>
                Complete a structured assessment covering important
                cybersecurity controls and practices.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">03</div>

              <h3>Readiness & Gap Analysis</h3>

              <p>
                Identify security gaps and understand how prepared your
                organisation is for Cyber Trust.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">04</div>

              <h3>Recommendations</h3>

              <p>
                Receive recommended improvements and relevant Bitdefender
                security capabilities based on identified gaps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="featuresSection">
        <div className="container">
          <div className="sectionHeading">
            <p className="eyebrow">PLATFORM FEATURES</p>

            <h2>Understand where you are and what needs improvement</h2>

            <p>
              The platform combines cybersecurity assessment, readiness
              analysis, and solution advisory into one guided process.
            </p>
          </div>

          <div className="featuresGrid">
            <div className="featureCard">
              <div className="featureIcon">✓</div>

              <h3>Cybersecurity Assessment</h3>

              <p>
                Evaluate your organisation&apos;s current cybersecurity
                controls, practices, and security environment.
              </p>
            </div>

            <div className="featureCard">
              <div className="featureIcon">!</div>

              <h3>Cyber Trust Readiness</h3>

              <p>
                Understand areas of strength and identify gaps that may require
                improvement when preparing for Cyber Trust.
              </p>
            </div>

            <div className="featureCard">
              <div className="featureIcon">◎</div>

              <h3>Bitdefender Advisory</h3>

              <p>
                Map identified security gaps and requirements to relevant
                Bitdefender GravityZone security capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="container ctaContent">
          <div>
            <p className="eyebrow lightEyebrow">GET STARTED</p>

            <h2>How prepared is your organisation?</h2>

            <p>
              Complete the assessment to understand your cybersecurity posture,
              Cyber Trust preparedness, key security gaps, and recommended areas
              for improvement.
            </p>
          </div>

          <Link href="/assessment" className="ctaButton">
            Start Assessment
            <span>→</span>
          </Link>
        </div>
      </section>

      <footer>
        <div className="container footerContent">
          <div>
            <strong>SME Security Advisor</strong>

            <p>
              Cyber Trust readiness and cybersecurity solution advisory
              platform.
            </p>
          </div>

          <p>Capstone Project</p>
        </div>
      </footer>
    </main>
  );
}