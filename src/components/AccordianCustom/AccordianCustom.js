// React //
import { useState } from "react";
// MUI //
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordianCustom = (props) => {
  const theme = useTheme();
  const MdScreenAbove = useMediaQuery(theme.breakpoints.up("md"));
  const [expanded, setexpanded] = useState(false);

  return (
    <Accordion
      onChange={(e, expanded) => {
        if (expanded) {
          setexpanded(true);
        } else {
          setexpanded(false);
        }
      }}
      sx={{width:MdScreenAbove?'60%':'auto'}}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ backgroundColor: expanded ? "#ff4d30" : "" }}
      >
        <h3>{props.Heading}</h3>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ color: "grey" }}>
         {props.Details}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordianCustom;
