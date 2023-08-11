// MUI //
import { Box } from "@mui/material";
// React Router //
import { useLocation } from "react-router";

const CustomNavBar = () => {
  const currentPath = useLocation().pathname;
  let map = {
    "/models": "Vehicle Modals",
    "/Testimonials": "Testimonials",
    "/Team":'Our Team',
    "/Contact":'/Contact Us'
  };
  let pathName = map[currentPath];
  return (
    <Box
      sx={{
        height: "250px",
        backgroundImage: `url('https://images.unsplash.com/photo-1471479917193-f00955256257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80')`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
        backgroundColor: "hsla(0,0%,100%,.92)",
        position: "relative",
        zIndex: "-99",
      }}
    >
      <Box
        sx={{
          color: "white",
          position: "absolute",
          top: "50%",
          left: "3rem",
        }}
      >
        <h2>{pathName}</h2>
        <h5>Home / {pathName}</h5>
      </Box>
    </Box>
  );
};

export default CustomNavBar;
