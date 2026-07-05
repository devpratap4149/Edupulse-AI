import alerts from "../data/alerts";

export default function Alerts() {
  return (
    <div className="page alerts-page">
      <h1>Parent & Teacher Alerts</h1>

      <p className="page-subtitle">
        AI-generated alerts help parents, teachers, counsellors, and security
        teams act early on academic decline, wellness concerns, and safety risks.
      </p>

      <div className="alerts-grid">
        {alerts.map((alert) => (
          <div className={`alert-card ${alert.priority.toLowerCase()}`} key={alert.id}>
            <div className="alert-top">
              <span className="alert-role">{alert.sentTo}</span>
              <span className={`alert-priority ${alert.priority.toLowerCase()}`}>
                {alert.priority}
              </span>
            </div>

            <h2>{alert.title}</h2>

            <p className="alert-student">
              <strong>Related To:</strong> {alert.studentName}
            </p>

            <p>{alert.message}</p>

            <div className="alert-footer">
              <span>Status: {alert.status}</span>
              <button className="small-btn">View Action</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}