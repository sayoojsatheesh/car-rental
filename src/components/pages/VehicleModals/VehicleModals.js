// MUI //
import { Box } from "@mui/material";
// Custom //
import VehicleCard from "../../VehicleCard/VehicleCard";
import CustomNavBar from "../../CustomNavBar/CustomNavBar";

const VehicleModals = () => {
  return (
    <Box>
      <CustomNavBar />
      <Box>
        <VehicleCard />
      </Box>
    </Box>
  );
};

export default VehicleModals;
