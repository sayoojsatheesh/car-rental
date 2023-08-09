// MUI //
import { Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// CSS //
import classes from "./SideBar.module.css";
// React -Router //
import { Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <Drawer
      transitionDuration={{ enter: 800, exit: 800 }}
      anchor="left"
      open={props.showSideBar}
    >
      <div className={classes.SubContainer}>
        <div className={classes.CloseButton}>
          <CloseIcon
            fontSize="large"
            onClick={() => {
              props.setshowSideBar(false);
            }}
          />
        </div>
        <ul
          onClick={() => {
            props.setshowSideBar(false);
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              textAlign: "center",
            }}
            to="/"
          >
            <li>Home</li>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              textAlign: "center",
            }}
            to="/models"
          >
            <li>Vehicle Modals</li>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              textAlign: "center",
            }}
            to="/Testimonials"
          >
            <li>Testimonials</li>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              textAlign: "center",
            }}
            to="/Team"
          >
            <li>Our Team</li>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              textAlign: "center",
            }}
            to="/Contact"
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </Drawer>
  );
};

export default SideBar;
