import "./About.css";
function AboutContainer(props) {
  return(
    <div className="about_container">
      {props.isImageTop ? <img src={props.image} alt="" /> : null
      }
      <div>
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
      </div>
      {!props.isImageTop ? <img src={props.image} alt="" />: null}
    </div>
  );
}

export default AboutContainer;
