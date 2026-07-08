import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navClass = ({ isActive }) =>
    isActive ? "nav-item active-tab" : "nav-item";

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src={logo} alt="EduPulse AI Logo" className="logo-img" />
      </Link>

      <div className="nav-links">
        <NavLink to="/dashboard" className={navClass}>
          Dashboard
        </NavLink>

        <NavLink to="/dropout-radar" className={navClass}>
          Dropout Radar
        </NavLink>

        <NavLink to="/silent-sos" className={navClass}>
          SilentSOS
        </NavLink>

        <NavLink to="/skill-passport" className={navClass}>
          Skill Passport
        </NavLink>

        <NavLink to="/campus-heatmap" className={navClass}>
          Heatmap
        </NavLink>

        <NavLink to="/interventions" className={navClass}>
          Interventions
        </NavLink>

        <NavLink to="/alerts" className={navClass}>
          Alerts
        </NavLink>
      </div>
    </nav>
  );
}