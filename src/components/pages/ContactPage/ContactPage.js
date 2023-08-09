// MUI //
import { TextField, Grid, Box, TextareaAutosize, Button } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// Custom //
import CustomNavbar from "../../CustomNavBar/CustomNavBar";
import Contact from "../Contact/Contact";

const ContactPage = () => {
  return (
    <Box>
      <CustomNavbar />
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              textAlign: "center",
              padding: "2rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <h1 style={{ fontWeight: 800, fontSize: "3rem" }}>
              Need additional information?
            </h1>
            <p style={{ color: "grey" }}>
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                justifyContent: "center",
                marginBottom: ".7rem",
              }}
            >
              <LocalPhoneIcon /> <span>(123) -456-789</span>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                justifyContent: "center",
                marginBottom: ".7rem",
              }}
            >
              <EmailIcon /> <span>karrental@gmail.com</span>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                justifyContent: "center",
                marginBottom: ".7rem",
              }}
            >
              <LocationOnIcon /> <span>Kerala, India</span>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              padding: "1rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <Box>
              <h4 style={{ color: "grey", textAlign: "center" }}>
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

            <Box>
              <h4 style={{ color: "grey", textAlign: "center" }}>
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

            <Box>
              <h4 style={{ color: "grey", textAlign: "center" }}>
                Tell us about it<span style={{ color: "#ff4d30" }}>*</span>
              </h4>
              <TextareaAutosize
                minRows={3} // Minimum number of rows
                maxRows={10} // Maximum number of rows before scrolling
                placeholder="Write here..."
                style={{ width: "100%", minHeight: "50px" }}
                onChange={(event) => {
                  setemailAddress(event.target.value);
                }}
              />
            </Box>
            <Box>
              <Button
                sx={{
                  width: "100%",
                  color: "white",
                  background: "#ff4d30",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#f34826",
                    boxShadow: "#f34826 0px 5px 15px",
                  },
                }}
                autoFocus
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Contact />
    </Box>
  );
};

export default ContactPage;
