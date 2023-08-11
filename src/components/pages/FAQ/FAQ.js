// MUI //
import { Box } from "@mui/material";
// Custom //
import AccordianCustom from "../../AccordianCustom/AccordianCustom";

let accordianData = [
  {
    Heading: "1. What is special about comparing rental car deals?",
    Details:
      "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
  },
  {
    Heading: "2. How do I find the car rental deals?",
    Details:
      "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
  },
  {
    Heading: "3. How do I find such low rental car prices?",
    Details:
      "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
  },
];

const FAQ = () => {
  return (
    <Box sx={{ textAlign: "center", paddingBottom: "2rem" }}>
      <h3>FAQ</h3>
      <h1>Frequently Asked Questions</h1>
      <p
        style={{
          color: "grey",
          marginTop: "1rem",
          marginBottom: "1rem",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        Frequently Asked Questions About the Car Rental Booking Process on Our
        Website: Answers to Common Concerns and Inquiries.
      </p>
      <Box
        sx={{
          backgroundImage: `url('/Images/AccordianBackground.PNG')`,
          width: "100%",
          objectFit: "contain",
          backgroundPosition: "0 70%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            padding: "3.5rem 1.5rem",
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {accordianData.map((item, i) => (
            <AccordianCustom
              expanded={i == 0 ? true : false}
              key={Math.random()}
              Heading={item.Heading}
              Details={item.Details}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FAQ;
