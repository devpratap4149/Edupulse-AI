import { useState } from "react";
import sosReports from "../data/sosReports";

export default function SilentSOS() {
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");
  const [result, setResult] = useState(null);

  const classifyReport = (text) => {
    const lowerText = text.toLowerCase();

    if (
      lowerText.includes("bully") ||
      lowerText.includes("hit") ||
      lowerText.includes("threat")
    ) {
      return {
        category: "Bullying",
        severity: "High",
        urgencyScore: 88,
        assignedTo: "Counsellor",
      };
    }

    if (
      lowerText.includes("stress") ||
      lowerText.includes("anxiety") ||
      lowerText.includes("pressure") ||
      lowerText.includes("sad")
    ) {
      return {
        category: "Mental Health",
        severity: "Medium",
        urgencyScore: 65,
        assignedTo: "Counsellor",
      };
    }

    if (
      lowerText.includes("unsafe") ||
      lowerText.includes("dark") ||
      lowerText.includes("gate") ||
      lowerText.includes("parking")
    ) {
      return {
        category: "Safety Concern",
        severity: "Medium",
        urgencyScore: 59,
        assignedTo: "Security Team",
      };
    }

    return {
      category: "General Concern",
      severity: "Low",
      urgencyScore: 35,
      assignedTo: "Teacher",
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const classified = classifyReport(message);

    setResult({
      ...classified,
      message,
      location,
    });

    setMessage("");
    setLocation("");
  };

  return (
    <div className="page">
      <h1>SilentSOS</h1>
      <p className="page-subtitle">
        Anonymous student safety and wellbeing reporting system.
      </p>

      <div className="sos-layout">
        <form className="sos-form" onSubmit={handleSubmit}>
          <h2>Submit Anonymous Report</h2>

          <textarea
            placeholder="Describe your concern anonymously..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Location e.g. Back Gate, Library, Sports Ground"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <button className="primary-btn">Submit Report</button>
        </form>

        {result && (
          <div className="ai-result-card">
            <h2>AI Classification Result</h2>
            <p>
              <strong>Category:</strong> {result.category}
            </p>
            <p>
              <strong>Severity:</strong> {result.severity}
            </p>
            <p>
              <strong>Urgency Score:</strong> {result.urgencyScore}
            </p>
            <p>
              <strong>Escalated To:</strong> {result.assignedTo}
            </p>
          </div>
        )}
      </div>

      <div className="detail-section">
        <h2>Existing Anonymous Reports</h2>

        {sosReports.map((report) => (
          <div className="report-card" key={report.id}>
            <h3>{report.category}</h3>
            <p>{report.message}</p>
            <p>
              <strong>Location:</strong> {report.location}
            </p>
            <p>
              <strong>Severity:</strong> {report.severity} |{" "}
              <strong>Status:</strong> {report.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}