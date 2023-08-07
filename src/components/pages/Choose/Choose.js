// MUI //
import {
  Box,
  Grid,
  Button,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlanSectionCard from "../../PlanSectionCard/PlanSectionCard";

const InfoArray = [
  {
    imagePath: "/images/Choose1.PNG",
    HeadingText: "Cross Country Drive",
    Paragraph:
      "Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.",
  },
  {
    imagePath: "/images/Choose2.PNG",
    HeadingText: "All Inclusive Pricing",
    Paragraph:
      "Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.",
  },
  {
    imagePath: "/images/Choose3.PNG",
    HeadingText: "No Hidden Charges",
    Paragraph:
      "Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.",
  },
];

const FindUsButton = styled(Button)({
  backgroundColor: "#ff4d30",
  fontWeight: 400,
  fontSize: "1.2rem",
  width: "80%",
  maxWidth: "388px",
  "&:hover": {
    backgroundColor: " #d13b1f",
  },
  margin: "1.5rem 0",
});

const Choose = () => {
  const theme = useTheme();
  const screenSizeMDUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ padding: "1rem 2rem" }}>
      <Box>
        <img src="/Images/Cars.PNG" style={{ width: "100%", height: "100%" }} />
      </Box>
      <Grid container alignItems={"center"}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: "center" }}
        >
          <Box >
            <h4>Why Choose US!</h4>
            <h2 style={{ fontWeight: "700", margin: ".5rem 0" }}>
              Best valued deals you will ever find
            </h2>
            <p style={{ color: "grey", fontWeight: "400" }}>
              Discover the best deals you'll ever find with our unbeatable
              offers. We're dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don't miss out on your chance to
              save big.
            </p>
            <Box>
              <FindUsButton
                variant="contained"
                endIcon={<ArrowForwardIosIcon sx={{ color: "white" }} />}
              >
                Find Details
              </FindUsButton>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          display={screenSizeMDUp ? "flex" : ""}
          flexDirection={screenSizeMDUp ? "column" : ""}
        >
          {InfoArray.map((item) => (
            <PlanSectionCard
              key={Math.random()}
              flex={screenSizeMDUp}
              Headingtext={item.HeadingText}
              ImagePath={item.imagePath}
              Paragraph={item.Paragraph}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Choose;
