// React //
import { useState } from "react";
// MUI //
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  TextField,
  Grid,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import LocationDateCard from "../LocationDateCard/LocationDateCard";
// React Toastify //
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let imageMap = {
  ["Audi A1s-Line"]: "/Images/Audi.PNG",
  ["VW Golf 6"]: "/Images/VWGolf.PNG",
  ["Toyota Camry"]: "/Images/Toyota.PNG",
  ["BMW 320 ModernLine"]: "/Images/BMW.PNG",
  ["Mercedes-Benz GLK"]: "/Images/Mercedes.PNG",
  ["VW Passat CC"]: "/Images/VWPassat.PNG",
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{
        m: 0,
        p: 2,
        textAlign: "left",
        backgroundColor: "#ff4d30",
        color: "white",
        fontWeight: 600,
        fontSize: "1.5rem",
        background: "red",
      }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon fontSize="large" sx={{ color: "white" }} />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const ReservationDialog = (props) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [emailAddress, setemailAddress] = useState("");

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleReserveNowButtonClicked = () => {
    if (!firstName || !lastName || !emailAddress) {
      toast.error("All fields required!", {
        autoClose: 2000, // 2000 milliseconds (2 seconds)
      });
      return;
    }
    toast.success("Reservation Done!", {
      autoClose: 2000, // 2000 milliseconds (2 seconds)
    });
    setfirstName("");
    setlastName("");
    setemailAddress("");
    props.setOpen(false);
  };

  return (
    <div>
      <ToastContainer position="top-center" reverseOrder={false} />
      <BootstrapDialog
        maxWidth="xl"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <BootstrapDialogTitle
          maxWidth="xl"
          id="customized-dialog-title"
          onClose={handleClose}
        >
          COMPLETE RESERVATION
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid container spacing={1} alignItems={"flex-start"}>
            <Grid item xs={12} lg={6}>
              <h3 style={{ color: "#ff4d30", textAlign: "center" }}>
                Location & Date
              </h3>
              <LocationDateCard
                Heading={"Pick-Up Location"}
                Value={props.pickupLocation}
              />
              <LocationDateCard
                Heading={"Pick-Up Date & Time"}
                Value={props.pickupDate}
              />
              <LocationDateCard
                Heading={"Drop-Of Location"}
                Value={props.dropofLocation}
              />
              <LocationDateCard
                Heading={"Drop-Of Date & Time"}
                Value={props.dropofDate}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <h3 style={{ textAlign: "center" }}>
                Car - <span style={{ color: "#ff4d30" }}>{props.carType}</span>
              </h3>
              <img
                src={`${imageMap[props.carType]}`}
                alt={props.carType}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Grid>
          </Grid>
          <Divider sx={{ backgroundColor: "#333" }} variant="fullWidth" />
          <h3
            style={{
              color: "#ff4d30",
              marginTop: ".5rem",
              marginBottom: ".5rem",
            }}
          >
            Personal Information
          </h3>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box>
                <h4 style={{ color: "grey" }}>
                  First Name <span style={{ color: "#ff4d30" }}>*</span>
                </h4>
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  sx={{ width: "100%", marginTop: ".3rem" }}
                  onChange={(event) => {
                    setfirstName(event.target.value);
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <h4 style={{ color: "grey" }}>
                  Last Name <span style={{ color: "#ff4d30" }}>*</span>
                </h4>
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  sx={{ width: "100%", marginTop: ".3rem" }}
                  onChange={(event) => {
                    setlastName(event.target.value);
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <h4 style={{ color: "grey" }}>
                  Email Address<span style={{ color: "#ff4d30" }}>*</span>
                </h4>
                <TextField
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                  sx={{ width: "100%", marginTop: ".3rem" }}
                  onChange={(event) => {
                    setemailAddress(event.target.value);
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              color: "white",
              background: "#ff4d30",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#f34826",
                boxShadow: "#f34826 0px 5px 15px",
              },
            }}
            autoFocus
            onClick={handleReserveNowButtonClicked}
          >
            Reserve Now
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default ReservationDialog;
