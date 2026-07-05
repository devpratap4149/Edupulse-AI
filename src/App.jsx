import { BrowserRouter , Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import DropoutRadar from "./pages/DropoutRadar";
import StudentProfile from "./pages/StudentProfile";
import SilentSOS from "./pages/SilentSOS";
import SkillPassport from "./pages/SkillPassport";
import CampusHeatmap from "./pages/CampusHeatmap";
import Interventions from "./pages/Interventions";
import Alerts from "./pages/Alerts";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dropout-radar" element={<DropoutRadar />} />
        <Route path="/student/:id" element={<StudentProfile />} />
        <Route path="/silent-sos" element={<SilentSOS />} />
        <Route path="/skill-passport" element={<SkillPassport />} />
        <Route path="/campus-heatmap" element={<CampusHeatmap />} />
        <Route path="/interventions" element={<Interventions />} />
        <Route path="/alerts" element={<Alerts />} />
        
      </Routes>
    </BrowserRouter>
  );
}