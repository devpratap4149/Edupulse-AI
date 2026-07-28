import { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";
import API_BASE_URL from "../api";

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  const [sosReports, setSosReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const studentRes = await fetch(`${API_BASE_URL}/students`);
        const studentData = await studentRes.json();

        const sosRes = await fetch(`${API_BASE_URL}/sos`);
        const sosData = await sosRes.json();

        setStudents(studentData);
        setSosReports(sosData);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <div className="page">Loading dashboard...</div>;
  }

  const highRiskStudents = students.filter(
    (student) => student.riskLevel === "High"
  ).length;

  const highSeverityReports = sosReports.filter(
    (report) => report.severity === "High"
  ).length;

  const pendingReports = sosReports.filter(
    (report) => report.status === "Pending"
  ).length;

  return (
    <div className="page dashboard-page">
      <h1>Risk Intelligence Dashboard</h1>

      <p className="page-subtitle">
        Real-time overview of student risk, anonymous safety reports, and
        AI-powered institutional insights.
      </p>

      <div className="dashboard-grid">
        <DashboardCard
          title="Students Monitored"
          value={students.length}
          subtitle={`${highRiskStudents} high-risk students`}
        />

        <DashboardCard
          title="Active SOS Reports"
          value={sosReports.length}
          subtitle={`${highSeverityReports} high severity reports`}
        />

        <DashboardCard
          title="Pending Reports"
          value={pendingReports}
          subtitle="Reports awaiting action"
        />

        <DashboardCard
          title="AI Engine Status"
          value="Active"
          subtitle="Backend risk scoring enabled"
        />
      </div>

      <section className="dashboard-ai-panel">
        <div className="dashboard-ai-content">
          <span className="dashboard-ai-label">LIVE BACKEND + AI LOGIC</span>

          <h2>Real-Time Student Risk & Safety Intelligence</h2>

          <p>
            EduPulse AI now uses a live Node.js, Express.js, and MongoDB backend
            to store student records, anonymous SOS reports, and AI-generated
            risk insights. The system calculates dropout risk, classifies safety
            concerns, and updates dashboard analytics using real database
            records.
          </p>
        </div>

        <div className="dashboard-ai-grid">
          <div>
            <h3>Dropout Risk Engine</h3>
            <p>Calculates risk from attendance, marks, fees, and participation</p>
          </div>

          <div>
            <h3>SilentSOS Classifier</h3>
            <p>Classifies anonymous reports by category, severity, and urgency</p>
          </div>

          <div>
            <h3>MongoDB Storage</h3>
            <p>Stores student profiles, SOS reports, timestamps, and status</p>
          </div>

          <div>
            <h3>Live Dashboard Metrics</h3>
            <p>Shows real-time counts from backend APIs</p>
          </div>
        </div>
      </section>

      <section className="dashboard-reports-card">
        <div>
          <h2>Recent SilentSOS Reports</h2>

          <p>
            Latest anonymous student safety and wellbeing reports submitted
            through the live backend system.
          </p>
        </div>

        <div className="dashboard-report-list">
          {sosReports.length === 0 ? (
            <p>No SOS reports submitted yet.</p>
          ) : (
            sosReports.slice(0, 4).map((report) => (
              <div className="dashboard-report-item" key={report._id}>
                <div className="report-top-row">
                  <h3>{report.category}</h3>

                  <span
                    className={`report-severity ${report.severity
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {report.severity}
                  </span>
                </div>

                <p>
                  <strong>Location:</strong> {report.location}
                </p>

                <p>
                  <strong>Assigned To:</strong> {report.assignedTo}
                </p>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}