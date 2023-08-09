// MUI //
import { Box, Grid } from "@mui/material";
import CustomNavBar from "../../CustomNavBar/CustomNavBar";
import TeamCard from "../../TeamCard/TeamCard";
import Contact from "../Contact/Contact";
// Data //
import teamData from "../../../Data/TeamData";

const TeamPage = () => {
  return (
    <Box>
      <CustomNavBar />
      <Box sx={{ padding: "2rem 4rem" }}>
        <Grid container spacing={3}>
          {teamData.map((item) => (
            <Grid item key={Math.random()} xs={12} sm={6} lg={4}>
              <TeamCard
                ImagePath={item.ImagePath}
                Name={item.Name}
                position={item.Position}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Contact />
    </Box>
  );
};

export default TeamPage;
