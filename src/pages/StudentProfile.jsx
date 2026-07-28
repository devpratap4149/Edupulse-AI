// import { useParams, Link } from "react-router-dom";
// import students from "../data/students";

// export default function StudentProfile() {
//   const { id } = useParams();

//   const student = students.find((item) => item.id === Number(id));

//   if (!student) {
//     return (
//       <div className="page">
//         <h1>Student Not Found</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="page">
//       <Link to="/dropout-radar" className="back-link">
//         ← Back to Dropout Radar
//       </Link>

//       <h1>{student.name}</h1>
//       <p className="page-subtitle">
//         Class {student.className} | Roll No. {student.rollNo}
//       </p>

//       <div className="profile-grid">
//         <div className="profile-card">
//           <h3>Dropout Risk</h3>
//           <h2>{student.dropoutRisk}%</h2>
//         </div>

//         <div className="profile-card">
//           <h3>Academic Risk</h3>
//           <h2>{student.academicRisk}%</h2>
//         </div>

//         <div className="profile-card">
//           <h3>Engagement Risk</h3>
//           <h2>{student.engagementRisk}%</h2>
//         </div>
//       </div>

//       <div className="detail-section">
//         <h2>Risk Reasons</h2>

//         {student.reasons.map((reason, index) => (
//           <p key={index} className="reason-item">
//             ⚠ {reason}
//           </p>
//         ))}
//       </div>

//       <div className="detail-section">
//         <h2>Suggested Intervention</h2>
//         <p>{student.suggestedAction}</p>

//         <button className="primary-btn">Assign to Counsellor</button>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_BASE_URL from "../api";

export default function StudentProfile() {
  const { id } = useParams();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/students/${id}`);
        const data = await res.json();

        setStudent(data);
      } catch (error) {
        console.error("Failed to fetch student:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  if (loading) {
    return <div className="page">Loading student profile...</div>;
  }

  if (!student || student.message === "Student not found") {
    return <div className="page">Student not found.</div>;
  }

  return (
    <div className="page">
      <h1>{student.name}</h1>

      <p className="page-subtitle">
        Detailed AI risk profile with reasons and suggested intervention.
      </p>

      <div className="profile-grid">
  <div className="profile-card">
    <h3>Class</h3>
    <p>{student.className}</p>
  </div>

  <div className="profile-card">
    <h3>Roll No</h3>
    <p>{student.rollNo}</p>
  </div>

  <div className="profile-card">
    <h3>Attendance</h3>
    <p>{student.attendance}%</p>
  </div>

  <div className="profile-card">
    <h3>Average Marks</h3>
    <p>{student.averageMarks}%</p>
  </div>
</div>

      <div className="risk-section">
        <div className="risk-card">
          <h3>Dropout Risk</h3>
          <h2>{student.dropoutRisk}%</h2>
        </div>

        <div className="risk-card">
          <h3>Academic Risk</h3>
          <h2>{student.academicRisk}%</h2>
        </div>

        <div className="risk-card">
          <h3>Engagement Risk</h3>
          <h2>{student.engagementRisk}%</h2>
        </div>

        <div className="risk-card">
          <h3>Risk Level</h3>
          <span className={`risk-badge ${student.riskLevel.toLowerCase()}`}>
            {student.riskLevel}
          </span>
        </div>
      </div>

      <div className="detail-card">
        <h2>Why AI marked this student risky?</h2>

        <ul>
          {student.reasons.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </div>

      <div className="detail-card">
        <h2>Suggested Intervention</h2>
        <p>{student.suggestedAction}</p>

        <button className="primary-btn">Assign Intervention</button>
      </div>
    </div>
  );
}