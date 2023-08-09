// MUI //
import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

let testimonials = [
  {
    TestimonialsText:
      "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
    Name: "Jarry Carter",
    Address: "Belgard",
    ImagePath: "/images/Harry.JPG",
  },
  {
    TestimonialsText:
      "The car was in great condition and made our trip even better. Highly recommend for this car rental website!",
    Name: "Ron Rizzly",
    Address: "Novi Sad",
    ImagePath: "/images/Jack.JPG",
  },
  {
    TestimonialsText:
      "Highly recommend for this car rental website!",
    Name: "Sam Parag",
    Address: "India",
    ImagePath: "/images/Harry.JPG",
  },
];

const CustomCarousel = () => {
  return (
    <Box sx={{marginBottom:'2rem'}} >
      <Carousel >
        {testimonials.map((item) => (
          <Box >
          <TestimonialCard
            Testimonial={item.TestimonialsText}
            Name={item.Name}
            Address={item.Address}
            ImagePath={item.ImagePath}
          />
          </Box>
        ))}
    
      </Carousel>
    </Box>
  );
};

export default CustomCarousel;
