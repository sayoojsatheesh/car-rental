// React //
import { useState } from "react";
// React Router //
import { Routes, Route,Navigate } from "react-router-dom";
// Custom //
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import VehicleModals from "./components/pages/VehicleModals/VehicleModals";
import IntroPage from "./components/pages/IntroPage/IntroPage";
import TestimonialsPage from "./components/pages/TestimonialsPage/TestimonialsPage";
import TeamPage from "./components/pages/TeamPage/TeamPage";
import ContactPage from "./components/pages/ContactPage/ContactPage";

function App() {
  const [showSideBar, setshowSideBar] = useState(false);

  return (
    <div>
      <SideBar showSideBar={showSideBar} setshowSideBar={setshowSideBar} />
      <NavBar showSideBar={showSideBar} setshowSideBar={setshowSideBar} />
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/models" element={<VehicleModals />} />
        <Route path="/Testimonials" element={<TestimonialsPage />} />
        <Route path="/Team" element={<TeamPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        {/* Catch-all route to redirect to the default route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      
    </div>
  );
}

export default App;
