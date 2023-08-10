// MUI//
import { Box, Grid } from "@mui/material";
// Custom //
import PlanSectionCard from "../../PlanSectionCard/PlanSectionCard";

const InfoArray = [
  {
    imagePath: "/Images/Planimg1.PNG",
    HeadingText: "Select Car",
    Paragraph:
      "We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs",
  },
  {
    imagePath: "/Images/Planimg2.PNG",
    HeadingText: "Contact Operator",
    Paragraph:
      "Our knowledgeable and friendly operators are always ready to help with any questions or concerns",
  },
  {
    imagePath: "/Images/Planimg3.PNG",
    HeadingText: "Let's Drive",
    Paragraph:
      "Whether you're hitting the open road, we've got you covered with our wide range of cars",
  },
];

const PlanSection = () => {
  return (
    <Box sx={{ padding: "1rem 1rem", marginTop: "2rem", marginBottom: "2rem" }}>
      <h4 style={{ textAlign: "center" }}>Plan your trip now</h4>
      <h2 style={{ lineHeight: "1.5", fontWeight: 600 }}>
        Quick & Easy Car Rental
      </h2>
      <Grid container justifyContent={"center"}>
        {InfoArray.map((item) => (
          <Grid key={Math.random()} item lg={4}>
            <PlanSectionCard
              ImagePath={"/Images/Planimg3.PNG"}
              Headingtext={item.HeadingText}
              Paragraph={item.Paragraph}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PlanSection;
