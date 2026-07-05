import { useParams, Link } from "react-router-dom";
import students from "../data/students";

export default function StudentProfile() {
  const { id } = useParams();

  const student = students.find((item) => item.id === Number(id));

  if (!student) {
    return (
      <div className="page">
        <h1>Student Not Found</h1>
      </div>
    );
  }

  return (
    <div className="page">
      <Link to="/dropout-radar" className="back-link">
        ← Back to Dropout Radar
      </Link>

      <h1>{student.name}</h1>
      <p className="page-subtitle">
        Class {student.className} | Roll No. {student.rollNo}
      </p>

      <div className="profile-grid">
        <div className="profile-card">
          <h3>Dropout Risk</h3>
          <h2>{student.dropoutRisk}%</h2>
        </div>

        <div className="profile-card">
          <h3>Academic Risk</h3>
          <h2>{student.academicRisk}%</h2>
        </div>

        <div className="profile-card">
          <h3>Engagement Risk</h3>
          <h2>{student.engagementRisk}%</h2>
        </div>
      </div>

      <div className="detail-section">
        <h2>Risk Reasons</h2>

        {student.reasons.map((reason, index) => (
          <p key={index} className="reason-item">
            ⚠ {reason}
          </p>
        ))}
      </div>

      <div className="detail-section">
        <h2>Suggested Intervention</h2>
        <p>{student.suggestedAction}</p>

        <button className="primary-btn">Assign to Counsellor</button>
      </div>
    </div>
  );
}