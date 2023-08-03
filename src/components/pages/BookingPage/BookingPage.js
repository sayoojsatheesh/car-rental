// REACT //
import { useState } from "react";
// MUI //
import {
  Box,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PinDropIcon from "@mui/icons-material/PinDrop";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// Custom //
import DatePickerCustom from "../../DatePicker/DatePicker";

const BookingPage = () => {
  const [carType, setcarType] = useState("");
  const [carTypeOpen, setcarTypeOpen] = useState(false);
  const [pickupLocation, setpickupLocation] = useState("");
  const [pickupLocationOpen, setpickupLocationOpen] = useState(false);
  const [dropofLocation, setdropofLocation] = useState("");
  const [dropofLocationOpen, setdropofLocationOpen] = useState(false);
  const [pickupDate,setpickupDate]=useState('');

  console.log("pickupDate =",pickupDate);

  // Car Type //
  function handleCarTypeClose() {
    setcarTypeOpen(false);
  }

  function handleCarTypeOpen() {
    setcarTypeOpen(true);
  }

  function handleCarTypeChange(event) {
    setcarType(event.target.value);
  }

  // Pick-Up Location //
  function handlePickUpClose() {
    setpickupLocationOpen(false);
  }

  function handlePickUpOpen() {
    setpickupLocationOpen(true);
  }

  function handlePickUpChange(event) {
    setpickupLocation(event.target.value);
  }

  // Drop-of Location //
  function handleDropOfClose() {
    setdropofLocationOpen(false);
  }

  function handleDropOfOpen() {
    setdropofLocationOpen(true);
  }

  function handleDropOfLocationChange(event) {
    setdropofLocation(event.target.value);
  }

  return (
    <Box
      sx={{
        width: "95%",
        backgroundImage: `url('https://car-rental-ten.vercel.app/static/media/book-bg.6f629a1041e9fd9c6685.png')`,
        margin: "0 auto",
        marginTop: "2rem",
        padding: "1.5em 1.5em",
        boxShadow: "0 10px 20px 0 rgba(0,0,0,.1)",
        borderRadius: "5px",
      }}
    >
      <h2
        style={{ textAlign: "left", marginBottom: "2rem", marginLeft: "1px" }}
      >
        Book a car
      </h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              gap: ".7em",
              alignItems: "center",
              paddingLeft: "6px",
              marginBottom: ".5em",
            }}
          >
            <DirectionsCarIcon fontSize="large" sx={{ color: "#ff4d30" }} />{" "}
            <span style={{ fontSize: "1.6rem", fontWeight: 600 }}>
              Select your car type <span style={{ color: "#ff4d30" }}>*</span>
            </span>
          </Box>
          <Box>
            <FormControl sx={{ m: 1, width: "100%",marginLeft:0 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Car Type
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={carTypeOpen}
                onClose={handleCarTypeClose}
                onOpen={handleCarTypeOpen}
                value={carType}
                label="Car Type"
                onChange={handleCarTypeChange}
              >
                <MenuItem value="">
                  <em>Car Type</em>
                </MenuItem>
                <MenuItem value={"Audi A1s-Line"}>Audi A1s-Line</MenuItem>
                <MenuItem value={"VW Golf 6"}>VW Golf 6</MenuItem>
                <MenuItem value={"Toyota Camry"}>Toyota Camry</MenuItem>
                <MenuItem value={"BMW 320 ModernLine"}>
                  BMW 320 ModernLine
                </MenuItem>
                <MenuItem value={"Mercedes-Benz GLK"}>
                  Mercedes-Benz GLK
                </MenuItem>
                <MenuItem value={"VW Passat CC"}>VW Passat CC</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              gap: ".7em",
              alignItems: "center",
              paddingLeft: "6px",
              marginBottom: ".5em",
            }}
          >
            <PinDropIcon fontSize="large" sx={{ color: "#ff4d30" }} />
            <span style={{ fontSize: "1.6rem", fontWeight: 600 }}>
              Pick-Up <span style={{ color: "#ff4d30" }}>*</span>
            </span>
          </Box>
          <Box>
            <FormControl sx={{ m: 1, width: "100%" ,marginLeft:0}}>
              <InputLabel id="demo-controlled-open-select-label">
                Select Pick-Up Location
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={pickupLocationOpen}
                onClose={handlePickUpClose}
                onOpen={handlePickUpOpen}
                value={pickupLocation}
                label="Select Pick-Up Location"
                onChange={handlePickUpChange}
              >
                <MenuItem value="">
                  <em>Select Pick-Up Location</em>
                </MenuItem>
                <MenuItem value={"Kannur"}>Kannur</MenuItem>
                <MenuItem value={"Kochi"}>Kochi</MenuItem>
                <MenuItem value={"Calicut"}>Calicut</MenuItem>
                <MenuItem value={"Kottayam"}>Kottayam</MenuItem>
                <MenuItem value={"Kasargod"}>Kasargod</MenuItem>
                <MenuItem value={"Caltex"}>Caltex</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              gap: ".7em",
              alignItems: "center",
              paddingLeft: "6px",
              marginBottom: ".5em",
            }}
          >
            <PinDropIcon fontSize="large" sx={{ color: "#ff4d30" }} />
            <span style={{ fontSize: "1.6rem", fontWeight: 600 }}>
              Drop-Of <span style={{ color: "#ff4d30" }}>*</span>
            </span>
          </Box>
          <Box >
            <FormControl sx={{ m: 1, width: "100%",marginLeft:0}}>
              <InputLabel id="demo-controlled-open-select-label">
                Select Drop-Of Location
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={dropofLocationOpen}
                onClose={handleDropOfClose}
                onOpen={handleDropOfOpen}
                value={dropofLocation}
                label="Select Pick-Up Location"
                onChange={handleDropOfLocationChange}
              >
                <MenuItem value="">
                  <em>Select Drop-Of Location</em>
                </MenuItem>
                <MenuItem value={"Kannur"}>Kannur</MenuItem>
                <MenuItem value={"Kochi"}>Kochi</MenuItem>
                <MenuItem value={"Calicut"}>Calicut</MenuItem>
                <MenuItem value={"Kottayam"}>Kottayam</MenuItem>
                <MenuItem value={"Kasargod"}>Kasargod</MenuItem>
                <MenuItem value={"Caltex"}>Caltex</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              gap: ".7em",
              alignItems: "center",
              paddingLeft: "6px",
              marginBottom: ".5em",
            }}
          >
            <CalendarMonthIcon fontSize="large" sx={{ color: "#ff4d30" }} />
            <span style={{ fontSize: "1.6rem", fontWeight: 600 }}>
              Pick-Up <span style={{ color: "#ff4d30" }}>*</span>
            </span>
          </Box>
          <Box  >
            <DatePickerCustom setDate={setpickupDate} />
          </Box>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Box>
  );
};

export default BookingPage;
