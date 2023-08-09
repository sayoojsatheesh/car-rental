// MUI //
import { Box, Grid, TextField, Button, Divider } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <Box sx={{ padding: "2rem 2rem", textAlign: "center" }}>
      <Divider />
      <Grid container>
        <Grid  xs={12} sm={6} md={6} lg={3} item p={3}>
          <h2 style={{ marginBottom: ".7rem" }}>
            <span style={{ fontWeight: "800" }}>Car</span> Rental
          </h2>
          <p style={{ marginBottom: ".7rem",maxWidth:'500px',margin:'0 auto' }}>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
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
        </Grid>
        <Grid xs={12} sm={6} md={6} lg={3} p={3}>
          <h2 style={{ fontWeight: 800, marginBottom: ".7rem" }}>Company</h2>
          <h4 style={{ color: "grey", marginBottom: ".7rem" }}>New York</h4>
          <h4 style={{ color: "grey", marginBottom: ".7rem" }}>Careers</h4>
          <h4 style={{ color: "grey", marginBottom: ".7rem" }}>Mobile</h4>
          <h4 style={{ color: "grey", marginBottom: ".7rem" }}>Blog</h4>
          <h4 style={{ color: "grey", marginBottom: ".7rem" }}>How we work</h4>
        </Grid>
        <Grid xs={12} sm={6} md={6} lg={3} p={3}>
          <h2 style={{ fontWeight: 800, marginBottom: ".7rem" }}>
            Working Hours
          </h2>
          <h4 style={{ color: "grey", marginBottom: ".7rem" }}>
            Mon - Fri: 9:00AM - 9:00PM
          </h4>
          <h4 style={{ color: "grey", marginBottom: ".7rem" }}>
            Sat: 9:00AM - 19:00PM
          </h4>
          <h4 style={{ color: "grey", marginBottom: ".7rem" }}>Sun: Closed</h4>
        </Grid>
        <Grid xs={12} sm={6} md={6} lg={3} p={3}>
          <h2 style={{ fontWeight: 800, marginBottom: ".7rem" }}>
            SUBSCRIPTION
          </h2>
          <p style={{ marginBottom: ".7rem" }}>
            Subscribe your Email address for latest news & updates.
          </p>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Enter Email"
            variant="outlined"
          />
          <Button
            sx={{
              background: "#ff4d30",
              color: "white",
              padding: "16.5px 14px",
              width: "100%",
              marginTop: "7px",
              fontWeight: "800",
              "&:hover": {
                backgroundColor: "#f34826",
                boxShadow: "#f34826 0px 5px 15px",
              },
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
