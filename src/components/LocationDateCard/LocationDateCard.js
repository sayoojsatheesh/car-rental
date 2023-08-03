import { Box } from "@mui/material";

const LocationDateCard = (props) => {
  return (
    <>
      <h4 style={{ textAlign: "center",marginTop:'1rem' }}>Props.Heading</h4>
      <Box sx={{ textAlign: "center",color:'grey' }}>{props.Value}</Box>
    </>
  );
};

export default LocationDateCard;
