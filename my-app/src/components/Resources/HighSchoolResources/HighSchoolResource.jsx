import highschool from "../../../images/highschool-students.jpeg";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "../EachResources.css";
function HighSchoolResource() {
  return (
   
      <div className="highschoolBody">
        <div className="grades">
          <h1>Welcome to Highschool Resources</h1>
          <p>
            Welcome to BrainzAcademy's Highschool Resources page. This section
            is designed to provide students with the necessary materials to
            excel in their studies. Select your grade below to access tailored
            resources for your educational level.
          </p>
          <h2>Choose Grade</h2>
          <button>Grade 9</button>
          <button>Grade 10</button>
          <button>Grade 11</button>
          <button>Grade 12</button>
        </div>
        <img className="image" src={highschool} alt="" />
        
      </div>
      
  );
}

export default HighSchoolResource;
