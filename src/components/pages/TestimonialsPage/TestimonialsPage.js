// MUI //
import { Box } from "@mui/material";
// Custom //
import CustomNavBar from "../../CustomNavBar/CustomNavBar";
import CustomCarousel from "../../Carousel/CustomCarousel";
import Contact from "../Contact/Contact";

const TestimonialsPage = () => {
  return (
    <Box>
      <CustomNavBar />
      <Box
        sx={{
          padding: "2.5rem 1.5rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "7px",
        }}
      >
        <h5>Reviewed by People</h5>
        <h2>Client's Testimonials</h2>
        <p style={{ maxWidth: "450px", color: "grey", margin: "0 auto" }}>
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
      </Box>
      <Box>
        <CustomCarousel />
      </Box>
      <Contact />
    </Box>
  );
};

export default TestimonialsPage;
