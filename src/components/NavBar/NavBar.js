// CSS //
import classes from "./NavBar.module.css";
// MUI //
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, Box } from "@mui/material";
// Image //
import CarRental from "../../Assets/Image/CarRental.PNG";
// React Router //
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const dontShowMenuIcon = useMediaQuery("(max-width:1100px)");

  function handleMenuCliked() {
    props.setshowSideBar(!props.showSideBar);
  }

  return (
    <div className={classes.NavBarMainContainer}>
      <Box>
        <img style={{ width: "100%", height: "52px" }} src={CarRental} />
      </Box>

      {!dontShowMenuIcon ? (
        <ul>
           <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
           <li>Home</li>
          </Link>   
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/models">
          <li>Vehicle Modals</li>
          </Link>
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
