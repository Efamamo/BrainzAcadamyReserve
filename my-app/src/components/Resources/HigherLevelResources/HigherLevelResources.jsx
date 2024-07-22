import "../EachResources.css";
import highlevel from "../../../images/collage-student.webp";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

function HighLevelResource() {
  function textHundler(event) {
    console.log(event.target.value);
  }
  return (
   
      <div className="higherLevelBody">
        <div className="departments">
          <h1>Welcome to Higher Level Resources</h1>
          <p>
            Welcome to BrainzAcademy's Higher Level Resources page. This page
            provides a range of materials to support advanced learning in
            various disciplines. Choose your department below to explore
            specific resources tailored to your field of study.
          </p>
          <h2>Choose Department</h2>
          <button>Engineering</button>
          <button>Psychology</button>
          <button>Health Related</button>
          <button>Computer Scinces</button>
        </div>
        <img className="image" src={highlevel} alt="" />
      </div>
     
  );
}

export default HighLevelResource;
