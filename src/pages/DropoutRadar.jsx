import { Link } from "react-router-dom";
import students from "../data/students";

export default function DropoutRadar() {
  const sortedStudents = [...students].sort(
    (a, b) => b.dropoutRisk - a.dropoutRisk
  );

  return (
    <div className="page">
      <h1>Dropout Radar AI</h1>
      <p className="page-subtitle">
        Students ranked by dropout, academic, and engagement risk.
      </p>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Class</th>
              <th>Attendance</th>
              <th>Marks</th>
              <th>Fee Status</th>
              <th>Dropout Risk</th>
              <th>Risk Level</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {sortedStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.className}</td>
                <td>{student.attendance}%</td>
                <td>{student.averageMarks}%</td>
                <td>{student.feeStatus}</td>
                <td>
                  <strong>{student.dropoutRisk}%</strong>
                </td>
                <td>
                  <span className={`risk ${student.riskLevel.toLowerCase()}`}>
                    {student.riskLevel}
                  </span>
                </td>
                <td>
                  <Link to={`/student/${student.id}`} className="small-btn">
                    View Profile
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}