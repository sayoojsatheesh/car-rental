// MUI //
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
// Custom //
import TestimonialCard from "../../TestimonialCard/TestimonialCard";

let testimonials = [
  {
    TestimonialsText:
      "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
    Name: "Jarry Carter",
    Address: "Belgard",
    ImagePath: "/Images/Harry.jpg",
  },
  {
    TestimonialsText:
      "The car was in great condition and made our trip even better. Highly recommend for this car rental website!",
    Name: "Ron Rizzly",
    Address: "Novi Sad",
    ImagePath: "/Images/Jack.jpg",
  },
];

const Testimonials = () => {
  const theme = useTheme();
  const screenSizeMDUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ padding: screenSizeMDUp ? "1rem 10rem" : "1rem 2rem" }}>
      <Box sx={{ textAlign: "center" }}>
        <h4>Reviewed by People</h4>
        <h1>Client's Testimonials</h1>
        <p style={{ color: "grey", maxWidth: "700px", margin: "0 auto" }}>
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
      </Box>
      <Box>
        <Grid
          container
          spacing={3}
          sx={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}
        >
          {testimonials.map((item) => (
            <Grid item xs={12} md={6} key={Math.random()}>
              <TestimonialCard
                Testimonial={item.TestimonialsText}
                Name={item.Name}
                Address={item.Address}
                ImagePath={item.ImagePath}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Testimonials;
