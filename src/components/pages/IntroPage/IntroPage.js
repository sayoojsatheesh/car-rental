// Custom //
import HomePage from "../../pages/HomePage/HomePage";
import BookingPage from "../../pages/BookingPage/BookingPage";
import PlanSection from "../../pages/PlanSection/PlanSection";
import CarModels from "../../pages/CarModels/CarModels";
import Banner from "../../pages/Banner/Banner";
import Choose from "../../pages/Choose/Choose";
import Testimonials from "../../pages/Testimonials/Testimonials";
import FAQ from "../../pages/FAQ/FAQ";
import Contact from "../../pages/Contact/Contact";

const IntroPage = () => {
  return (
    <div>
      <HomePage />
      <BookingPage />
      <PlanSection />
      <CarModels />
      <Banner />
      <Choose />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default IntroPage;
