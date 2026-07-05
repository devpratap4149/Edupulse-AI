import DashboardCard from "../components/DashboardCard";
import students from "../data/students";
import sosReports from "../data/sosReports";
import campusLocations from "../data/campusLocations";
import interventions from "../data/interventions";
import alerts from "../data/alerts";

export default function Dashboard() {
  const highRiskStudents = students.filter(
    (student) => student.riskLevel === "High"
  ).length;

  const highSeverityReports = sosReports.filter(
    (report) => report.severity === "High"
  ).length;

  const highRiskZones = campusLocations.filter(
    (location) => location.riskLevel === "High"
  ).length;

  const pendingInterventions = interventions.filter(
    (item) => item.status === "Pending"
  ).length;

  const highPriorityAlerts = alerts.filter(
  (alert) => alert.priority === "High"
  ).length;

  return (
    <div className="page">
      <h1>Risk Intelligence Dashboard</h1>
      <p className="page-subtitle">
        Real-time overview of student risk, safety reports, campus zones, and
        intervention actions.
      </p>

      <div className="dashboard-grid">
        <DashboardCard
          title="Students Monitored"
          value={students.length}
          subtitle="Across active classes"
        />

        <DashboardCard
          title="High-Risk Students"
          value={highRiskStudents}
          subtitle="Need immediate attention"
        />

        <DashboardCard
          title="Active SOS Reports"
          value={sosReports.length}
          subtitle={`${highSeverityReports} high severity`}
        />

        <DashboardCard
          title="High-Risk Zones"
          value={highRiskZones}
          subtitle="Campus safety hotspots"
        />

        <DashboardCard
          title="Pending Interventions"
          value={pendingInterventions}
          subtitle="Awaiting action"
        />

        <DashboardCard
          title="Parent/Teacher Alerts"
          value={alerts.length}
          subtitle={`${highPriorityAlerts} high priority alerts`}
        />
      </div>

      <div className="insight-panel">
        <h2>AI Institutional Insight</h2>
        <p>
          EduPulse AI detected that dropout risk is strongly linked with low
          attendance, declining academic performance, and repeated fee delays.
          Safety reports are concentrated near the Back Gate after school hours.
        </p>
      </div>
    </div>
  );
}