// MUI //
import { Box, Rating, Divider, Button,styled } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
// CSS //
import classes from "./Vehicle.module.css";
// Custom //
const RegisterButton = styled(Button)({
  color:'white',
  backgroundColor: "#ff4d30",
  fontWeight: 400,
  fontSize: "1.2rem",
  width: "80%",
  maxWidth: "388px",
  marginBottom:'10px',
  "&:hover": {
    backgroundColor: "#f34826",
  },
  "&:hover svg": {
    color: "#00e676",
  },
});

const VehicleCard = (props) => {
  return (
    <Box>
      <Box
        sx={{
          width: "95%",
          borderRadius:'5px',
          border:'.5px solid grey',
          minHeight:'490px',
          display:'flex',
          flexDirection:'column',
          justifyContent:'space-between'
           
        }}
      >
        <Box>
          <img src={props.imagePath} className={classes.imageTag} />
        </Box>
        <Box className={classes.DetailsContainer}>
          <Box className={classes.SubContainer}>
            <Box
              sx={{
                width: "50%",
                paddingLeft: "4px",
                fontWeight: "600",
                fontSize: "2rem",
              }}
            >
              {props.model}
            </Box>
            <Box
              sx={{
                width: "50%",
                textAlign: "right",
                fontWeight: "600",
                fontSize: "2rem",
              }}
            >
              ${props.rent}
            </Box>
          </Box>
        </Box>
        <Box className={classes.DetailsContainer}>
          <Box className={classes.SubContainer}>
            <Box sx={{ width: "50%" }}>
              <Rating name="read-only" value={4} readOnly />
            </Box>
            <Box sx={{ width: "50%", textAlign: "right" }}>per day</Box>
          </Box>
        </Box>
        <Box className={classes.DetailsContainer}>
          <Box className={classes.SubContainer}>
            <Box sx={{ width: "50%", display: "flex", alignItems: "center" }}>
              <DirectionsCarIcon sx={{ marginRight: "5px" }} />
              <span>{props.model}</span>
            </Box>
            <Box
              sx={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <span>{props.doors}</span>
              <DirectionsCarIcon sx={{ marginLeft: "5px" }} />
            </Box>
          </Box>
        </Box>
        <Box className={classes.DetailsContainer}>
          <Box className={classes.SubContainer}>
            <Box sx={{ width: "50%", display: "flex", alignItems: "center" }}>
              <DirectionsCarIcon sx={{ marginRight: "5px" }} />
              <span>{props.transmission}</span>
            </Box>
            <Box
              sx={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <span>{props.fuel}</span>
              <DirectionsCarIcon sx={{ marginLeft: "5px" }} />
            </Box>
          </Box>
        </Box>
        <Divider
          variant="middle"
          sx={{ borderBottomWidth: "4px", margin: "10px 10px" }}
        />
        <Box sx={{display:'flex',justifyContent:'center'}}>
          <RegisterButton>Book Ride</RegisterButton>
        </Box>
      </Box>
    </Box>
  );
};

export default VehicleCard;
