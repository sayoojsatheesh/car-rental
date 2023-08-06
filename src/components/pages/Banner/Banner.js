// MUI //
import { Box } from "@mui/material";

const Banner = () => {
  return (
    <Box sx={{ background: "#2d2d2d",margin:'1.5rem 0' }}>
      <Box sx={{ padding: "1rem 2.5rem" }}>
        <h1 style={{ color: "white", textAlign: "center", fontSize: "4rem" }}>
          Save big with our cheap car rental!
        </h1>
        <h4
          style={{
            textAlign: "center",
            margin: "0 auto",
            fontSize: "2rem",
          }}
        >
          Top Airports. Local Suppliers.{" "}
          <span style={{ color: "#ff4d30" }}>24/7</span> Support.
        </h4>
      </Box>
    </Box>
  );
};

export default Banner;
