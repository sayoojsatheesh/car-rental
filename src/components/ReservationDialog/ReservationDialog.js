// MUI //
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Box,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import LocationDateCard from "../LocationDateCard/LocationDateCard";

let imageMap = {
  ["Audi A1s-Line"]: "/images/Audi.PNG",
  ["VW Golf 6"]: "/images/VWGolf.PNG",
  ["Toyota Camry"]: "/images/Toyota.PNG",
  ["BMW 320 ModernLine"]: "/images/BMW.PNG",
  ["Mercedes-Benz GLK"]: "/images/Mercedes.PNG",
  ["VW Passat CC"]: "/images/VWPassat.PNG",
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
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
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
          <h3 style={{ color: "#ff4d30" }}>Personal Information</h3>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>1</Grid>
            <Grid item xs={12} md={6}>2</Grid>
            <Grid item xs={12}>3</Grid>
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
            onClick={handleClose}
          >
            Reserve Now
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default ReservationDialog;
