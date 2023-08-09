// React //
import { useState } from "react";
// React Router //
import { Routes, Route } from "react-router-dom";

// Custom //
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import VehicleModals from "./components/pages/VehicleModals/VehicleModals";
import IntroPage from "./components/pages/IntroPage/IntroPage";
import TestimonialsPage from "./components/pages/TestimonialsPage/TestimonialsPage";

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
      </Routes>
      
    </div>
  );
}

export default App;
