import interventions from "../data/interventions";

export default function Interventions() {
  return (
    <div className="page intervention-page">
      <h1>Intervention Tracker</h1>
      <p className="page-subtitle">
        Track assigned student support actions and escalation status.
      </p>

      <div className="intervention-list">
        {interventions.map((item) => (
          <div className="intervention-card" key={item.id}>
            <h2>{item.studentName}</h2>

            <p>
              <strong>Issue:</strong> {item.issueType}
            </p>

            <p>
              <strong>Assigned To:</strong> {item.assignedTo}
            </p>

            <p>
              <strong>Priority:</strong> {item.priority}
            </p>

            <p>
              <strong>Status:</strong> {item.status}
            </p>

            <p>
              <strong>Action:</strong> {item.action}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}