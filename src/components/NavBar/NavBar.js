// CSS //
import classes from "./NavBar.module.css";
// MUI //
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, Box } from "@mui/material";
// Image //
import CarRental from "../../Assets/Image/CarRental.PNG";

const NavBar = (props) => {
  const dontShowMenuIcon = useMediaQuery("(max-width:1100px)");

  function handleMenuCliked() {
    props.setshowSideBar(!props.showSideBar);
  }
  
  return (
    <div className={classes.NavBarMainContainer}>
      <img src={CarRental} />
      {!dontShowMenuIcon ? (
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Vehicle Modals</li>
          <li>Testimonials</li>
          <li>Our Team</li>
          <li>Contact</li>
        </ul>
      ) : null}
      {!dontShowMenuIcon ? (
        <Box>
          <span>Sign In</span>
          <button className={classes.RegisterButton}>Register</button>
        </Box>
      ) : null}
      {dontShowMenuIcon ? (
        <MenuIcon fontSize="large" onClick={handleMenuCliked} />
      ) : null}
    </div>
  );
};

export default NavBar;
