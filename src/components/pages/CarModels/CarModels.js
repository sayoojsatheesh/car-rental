// React //
import { useState } from "react";
// MUI //
import { Grid, Box, Button } from "@mui/material";
// Data //
import CarData from "../../../Data/CarData";
// Custom //
import InfoContainer from "../../InfoContainer/InfoContainer";

const CarModels = () => {
  const [currentModel, setcurrentModel] = useState({
    id: 1,
    carName: "Audi A1 S-Line",
    rent: "45",
    model: "Audi",
    mark: "A1",
    year: "2012",
    doors: "4/5",
    ac: "Yes",
    transmission: "Manual",
    fuel: "Gasoline",
    imagePath: "/images/Audi.PNG",
  });

  function handleModelChange(currentId) {
    let currentModel = CarData.filter((item) => {
      if (currentId == item.id) return item;
    });
    setcurrentModel(currentModel[0]);
  }

  return (
    <div style={{ textAlign: "center", padding: "1rem 1rem" }}>
      <h4>Vehicle Models</h4>
      <h1>Our rental fleet</h1>
      <p
        style={{
          color: "grey",
          fontWeight: 500,
          maxWidth: "370px",
          margin: "0 auto",
        }}
      >
        Choose from a variety of our amazing vehicles to rent for your next
        adventure or business trip
      </p>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={3}>
          <Box>
            {CarData.map((item) => (
              <Button
                key={item.id}
                sx={{
                  width: "100%",
                  backgroundColor: "#e9e9e9",
                  color: "black",
                  padding: "1.2rem 0",
                  marginTop: ".5rem",
                  fontWeight: "600",
                  "&:hover": {
                    backgroundColor: "#ff4d30",
                  },
                }}
                onClick={() => {
                  handleModelChange(item.id);
                }}
              >
                {item.carName}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Box>
            <img
              src={currentModel.imagePath}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box>
            <Box
              sx={{
                backgroundColor: "#ff4d30",
                color: "white",
                padding: ".7rem",
              }}
            >
              <h2 style={{ fontSize: "2rem" }}>
                ${currentModel.rent} /{" "}
                <span style={{ fontSize: "1.2rem", fontWeight: "200" }}>
                  rent per day
                </span>
              </h2>
            </Box>
            <InfoContainer Heading={"Model"} Value={currentModel.model} />
            <InfoContainer Heading={"Mark"} Value={currentModel.mark} />
            <InfoContainer Heading={"Year"} Value={currentModel.year} />
            <InfoContainer Heading={"Doors"} Value={currentModel.doors} />
            <InfoContainer Heading={"Ac"} Value={currentModel.ac} />
            <InfoContainer
              Heading={"Transmission"}
              Value={currentModel.transmission}
            />
            <InfoContainer Heading={"Fuel"} Value={currentModel.fuel} />
            <Box>
              <Button
                sx={{
                  width: "100%",
                  backgroundColor: "#ff4d30",
                  color: "white",
                  marginTop: "1rem",
                  padding: ".5rem",
                  boxShadow: '9px 7px 5px 0px rgba(0,0,0,0.75)',
                  "&:hover": {
                    backgroundColor: "#ff4d30",
                  },
                }}
              >
                Reserv Now
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default CarModels;
