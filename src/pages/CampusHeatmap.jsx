import campusLocations from "../data/campusLocations";

export default function CampusHeatmap() {
  return (
    <div className="page">
      <h1>Campus Heatmap</h1>
      <p className="page-subtitle">
        Visual intelligence for campus activity, safety blind spots, and
        infrastructure usage.
      </p>

      <div className="heatmap-grid">
        {campusLocations.map((location) => (
          <div
            className={`heatmap-card ${location.riskLevel.toLowerCase()}`}
            key={location.id}
          >
            <h2>{location.name}</h2>

            <p>
              <strong>Type:</strong> {location.type}
            </p>

            <p>
              <strong>Crowd Level:</strong> {location.crowdLevel}
            </p>

            <p>
              <strong>Reports:</strong> {location.reportCount}
            </p>

            <p>
              <strong>Risk Level:</strong> {location.riskLevel}
            </p>

            <div className="insight-box">
              <strong>AI Insight:</strong>
              <p>{location.insight}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}