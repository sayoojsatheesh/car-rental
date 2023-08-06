const PlanSectionCard = (props) => {
  return (
    <>
      <div style={{ maxWidth: "250px", margin: "0 auto" }}>
        <img
          src={props.ImagePath}
          style={{ width: "100%", height: "100%" }}
        ></img>
      </div>
      <h3 style={{ textAlign: "center" }}>{props.Headingtext}</h3>
      <p
        style={{
          textAlign: "center",
          width: "90%",
          maxWidth: "250px",
          margin: "0 auto",
          color: "grey",
          padding: ".6rem 0",
        }}
      >
        {props.Paragraph}
      </p>
    </>
  );
};

export default PlanSectionCard;
