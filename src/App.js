// React //
import { useState } from "react";

// Custom //
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import HomePage from "./components/pages/HomePage/HomePage";
import BookingPage from "./components/pages/BookingPage/BookingPage";
import PlanSection from "./components/pages/PlanSection/PlanSection";
import CarModels from "./components/pages/CarModels/CarModels";
import Banner from "./components/pages/Banner/Banner";
import Choose from "./components/pages/Choose/Choose";
import Testimonials from "./components/pages/Testimonials/Testimonials";
import FAQ from "./components/pages/FAQ/FAQ";

function App() {
  const [showSideBar, setshowSideBar] = useState(false);

  return (
    <div>
      <SideBar showSideBar={showSideBar} setshowSideBar={setshowSideBar} />
      <NavBar showSideBar={showSideBar} setshowSideBar={setshowSideBar} />
      <HomePage />
      <BookingPage />
      <PlanSection />
      <CarModels />
      <Banner />
      <Choose />
      <Testimonials />
      <FAQ />
    </div>
  );
}

export default App;
