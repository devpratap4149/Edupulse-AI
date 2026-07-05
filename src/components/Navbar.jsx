import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">EduPulse AI</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dropout-radar">Dropout Radar</Link>
        <Link to="/silent-sos">SilentSOS</Link>
        <Link to="/skill-passport">Skill Passport</Link>
        <Link to="/campus-heatmap">Heatmap</Link>
        <Link to="/interventions">Interventions</Link>
        <Link to="/alerts">Alerts</Link>
        
      </div>
    </nav>
  );
}