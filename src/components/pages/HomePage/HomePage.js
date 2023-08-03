// CSS //
import classes from "./HomePage.module.css";
// MUI //
import { Box, Button, styled, useMediaQuery } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// Images //
import CarImage from "../../../Assets/Image/CarImage1-new2.png";

const RegisterButton = styled(Button)({
  backgroundColor: "#ff4d30",
  fontWeight: 400,
  fontSize: "1.2rem",
  width: "80%",
  maxWidth: "388px",
  "&:hover": {
    backgroundColor: "#f34826",
  },
  "&:hover svg": {
    color: "#00e676",
  },
});

const LearnMoreButton = styled(Button)({
  backgroundColor: "black",
  fontWeight: 400,
  fontSize: "1.2rem",
  width: "80%",
  maxWidth: "388px",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
  "&:hover svg": {
    color: "black",
  },
});

const HomePage = () => {
  const NotSmallScreen = useMediaQuery("(min-width:1100px)");

  return (
    <Box
      className={classes.HomePageContainer}
      sx={{ display: `${NotSmallScreen ? "flex" : null}` }}
    >
      <Box sx={{ width: `${NotSmallScreen ? "40%" : null}` ,alignSelf:'center'}}>
        <h2>Plan your trip now</h2>
        <h1>
          Save <span>big</span> with our car rental
        </h1>
        <p>
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more.
        </p>
        <Box
          sx={{
            display: "flex",
            flexDirection: `${NotSmallScreen ? "row" : "column"}`,
            justifyContent: `${NotSmallScreen ? "space-between" : ""}`,
            alignItems: "center",
            gap: "1em",
            marginTop:'1.5rem',
            alignSelf:'flex-end'
            
          }}
        >
          <RegisterButton
            sx={{ width: NotSmallScreen ? "45%" : "80%" }}
            variant="contained"
            endIcon={<CheckCircleIcon sx={{ color: "white" }} />}
          >
            Book Ride
          </RegisterButton>
          <LearnMoreButton
            sx={{ width: NotSmallScreen ? "45%" : "80%" }}
            variant="contained"
            endIcon={<ArrowForwardIosIcon sx={{ color: "white" }} />}
          >
            Learn More
          </LearnMoreButton>
        </Box>
      </Box>
      {NotSmallScreen ? (
        <Box sx={{ width: `${NotSmallScreen ? "60%" : null}`, height: "100%" }}>
          <img className={classes.CarImage} src={CarImage} />
        </Box>
      ) : null}
    </Box>
  );
};

export default HomePage;
