// MUI //
import { Box } from "@mui/material";

const TeamCard = (props) => {
  return (
    <Box
      sx={{
        boxShadow: "1px 1px 5px 3px rgba(0,0,0,0.75)",
        borderRadius: "5px",
      }}
    >
      <Box>
        <img src={props.ImagePath} style={{ width: "100%", height: "100%" }} />
      </Box>
      <Box sx={{ textAlign: "center", padding: " .7rem 0" }}>
        <h1>{props.Name}</h1>
        <h3 style={{ color: "grey" }}>{props.position}</h3>
      </Box>
    </Box>
  );
};

export default TeamCard;
