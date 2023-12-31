// MUI //
import { Box, Grid } from "@mui/material";
// Custom //
import VehicleCard from "../../VehicleCard/VehicleCard";
import CustomNavBar from "../../CustomNavBar/CustomNavBar";
import Contact from "../Contact/Contact";
// Data //
import CarData from "../../../Data/CarData";

const VehicleModals = () => {
  return (
    <Box>
      <CustomNavBar />
      <Box sx={{ padding: "2rem 2rem" }}>
        <Grid container spacing={3}>
          {CarData.map((item) => (
            <Grid item xs={12} md={6} lg={4} key={Math.random()}>
              <VehicleCard
                model={item.model}
                doors={item.doors}
                transmission={item.transmission}
                fuel={item.fuel}
                imagePath={item.imagePath}
                rent={item.rent}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Contact />
    </Box>
  );
};

export default VehicleModals;
