// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

// import API_BASE_URL from "../api";

// export default function DropoutRadar() {
//   const sortedStudents = [...students].sort(
//     (a, b) => b.dropoutRisk - a.dropoutRisk
//   );

//   const [students, setStudents] = useState([]);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   const fetchStudents = async () => {
//     try {
//       const res = await fetch(`${API_BASE_URL}/students`);
//       const data = await res.json();
//       setStudents(data);
//     } catch (error) {
//       console.error("Failed to fetch students:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchStudents();
// }, []);

// if (loading) {
//   return <div className="page">Loading students...</div>;
// }

//   return (
//     <div className="page">
//       <h1>Dropout Radar AI</h1>
//       <p className="page-subtitle">
//         Students ranked by dropout, academic, and engagement risk.
//       </p>

//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Student</th>
//               <th>Class</th>
//               <th>Attendance</th>
//               <th>Marks</th>
//               <th>Fee Status</th>
//               <th>Dropout Risk</th>
//               <th>Risk Level</th>
//               <th>Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {sortedStudents.map((student) => (
//               <tr key={student.id}>
//                 <td>{student.name}</td>
//                 <td>{student.className}</td>
//                 <td>{student.attendance}%</td>
//                 <td>{student.averageMarks}%</td>
//                 <td>{student.feeStatus}</td>
//                 <td>
//                   <strong>{student.dropoutRisk}%</strong>
//                 </td>
//                 <td>
//                   <span className={`risk ${student.riskLevel.toLowerCase()}`}>
//                     {student.riskLevel}
//                   </span>
//                 </td>
//                 <td>
//                   <Link to={`/student/${student.id}`} className="small-btn">
//                     View Profile
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_BASE_URL from "../api";

export default function DropoutRadar() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/students`);
        const data = await res.json();

        setStudents(data);
      } catch (error) {
        console.error("Failed to fetch students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return <div className="page">Loading students...</div>;
  }

  return (
    <div className="page">
      <h1>Dropout Radar AI — Explainable Risk Prediction</h1>

      <p className="page-subtitle">
        AI analyzes attendance, marks, fee delay, activity participation, and
        counselling signals to rank students by dropout, academic, and engagement
        risk.
      </p>

      {students.length === 0 ? (
        <p>No student data found. Please add students from backend first.</p>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Class</th>
                <th>Attendance</th>
                <th>Marks</th>
                <th>Dropout Risk</th>
                <th>Risk Level</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td>{student.className}</td>
                  <td>{student.attendance}%</td>
                  <td>{student.averageMarks}%</td>
                  <td>{student.dropoutRisk}%</td>
                  <td>
                    <span className={`risk-badge ${student.riskLevel.toLowerCase()}`}>
                      {student.riskLevel}
                    </span>
                  </td>
                  <td>
                    <Link to={`/student/${student._id}`} className="small-btn">
                      View Profile
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}