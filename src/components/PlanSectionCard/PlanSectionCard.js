const PlanSectionCard = (props) => {
  return (
    <div
      style={{
        display: props.flex ? "flex" : "",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "250px",
          margin: "0 auto",
          display: "flex",
         justifyContent:'center',
         alignItems:'center',
        
        }}
      >
        <img src={props.ImagePath} style={{ height: "100px" }}></img>
      </div>
      <div
      style={{ width:props.flex?'50%':'auto'}}
      >
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
      </div>
    </div>
  );
};

export default PlanSectionCard;
