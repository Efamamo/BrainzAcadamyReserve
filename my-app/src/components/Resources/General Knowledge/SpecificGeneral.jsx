import "./EachGeneral.css";
function SpecificGeneral(props) {
  return (
    <div className="each-general">
      <div className="description-container">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p className="wiki">
          For more detailed information, you can read this{" "}
          <a target="_blank" href={props.link}>
            article on {props.title}
          </a>
          
        </p>
      </div>
      <div className="image-container">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
}

export default SpecificGeneral;
