// MUI //
import {  Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// CSS //
import classes from "./SideBar.module.css";

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
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Models</li>
          <li>Testimonials</li>
          <li>Our Team</li>
          <li>Contact</li>
        </ul>
      </div>
    </Drawer>
  );
};

export default SideBar;
