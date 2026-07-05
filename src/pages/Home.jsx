import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <p className="badge">Student Intelligence & Safety Ecosystem</p>

        <h1>EduPulse AI</h1>

        <h2>Not just managing students — understanding, protecting, and empowering them.</h2>

        <p className="hero-text">
          EduPulse AI helps schools and colleges predict student risk, detect
          safety concerns, verify student skills, and optimize campus resources
          using data intelligence.
        </p>

        <div className="hero-buttons">
          <Link to="/dashboard" className="primary-btn">
            Open Dashboard
          </Link>

          <Link to="/silent-sos" className="secondary-btn">
            Try SilentSOS
          </Link>
        </div>
      </section>

      <section className="features-grid">
        <div className="feature-card">
          <h3>Dropout Radar AI</h3>
          <p>
            Predict students at risk using attendance, marks, fee delays, and
            engagement signals.
          </p>
        </div>

        <div className="feature-card">
          <h3>SilentSOS</h3>
          <p>
            Anonymous reporting system for bullying, ragging, harassment, mental
            pressure, and safety concerns.
          </p>
        </div>

        <div className="feature-card">
          <h3>Skill Passport</h3>
          <p>
            Verified digital portfolio for projects, hackathons, sports,
            certifications, and leadership roles.
          </p>
        </div>

        <div className="feature-card">
          <h3>Campus Heatmap</h3>
          <p>
            Identify crowded zones, underused spaces, repeated complaint areas,
            and campus safety blind spots.
          </p>
        </div>
      </section>
    </div>
  );
}