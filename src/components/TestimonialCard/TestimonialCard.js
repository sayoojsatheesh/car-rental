// MUI //
import { Box } from "@mui/material";

const TestimonialCard = (props) => {
  return (
    <Box
      sx={{
        padding: "1rem 1.5rem",
        borderRadius: "5px",
        background: "#f0f0f0",
        height:'100%',
        boxShadow: '4px 7px 5px 0px rgba(0,0,0,0.75)',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
      }}
    >
      <p>"{props.Testimonial}"</p>
      <Box sx={{display:'flex',marginTop:'1.5rem'}}>
        <Box >
          <img
            style={{
              width: "70px",
              height: "70px",
              objectFit: "contain",
              borderRadius: "50%",
            }}
            src={props.ImagePath}
          ></img>
        </Box>
        <Box sx={{alignSelf:'center',padding:'0 1.5rem'}}>
          <h2>{props.Name}</h2>
          <h5 style={{color:'grey'}}>{props.Address}</h5>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialCard;
