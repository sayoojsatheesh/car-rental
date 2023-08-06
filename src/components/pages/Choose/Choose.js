// MUI //
import { Box, Grid, Button, styled } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlanSection from "../PlanSection/PlanSection";

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
  return (
    <Box sx={{ padding: "1rem 2rem" }}>
      <Box>
        <img src="/Images/Cars.PNG" style={{ width: "100%", height: "100%" }} />
      </Box>
      <Grid container>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <h4>Why Choose US!</h4>
          <h2 style={{ fontWeight: "700", margin: ".5rem 0" }}>
            Best valued deals you will ever find
          </h2>
          <p style={{ color: "grey", fontWeight: "400" }}>
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <Box>
            <FindUsButton
              variant="contained"
              endIcon={<ArrowForwardIosIcon sx={{ color: "white" }} />}
            >
              Find Details
            </FindUsButton>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <PlanSection />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Choose;
