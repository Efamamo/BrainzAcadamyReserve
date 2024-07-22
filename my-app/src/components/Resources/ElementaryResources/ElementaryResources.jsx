import { Link, useParams } from "react-router-dom";
import elementary from "../../../images/elementary-students.jpeg";
import '../EachResources.css'

function ElementaryResources() {

  
  return (
   
    <div className="elementaryBody">
      <div className="content">
        <h1>Welcome to Elementary Resources</h1>
        <p>
          Welcome to BrainzAcademy's Elementary Resources page. Here you will
          find a variety of educational materials designed to help students
          excel in their studies. Whether you're looking for grade-specific
          resources, interactive quizzes, or additional learning materials,
          we've got you covered. Choose your grade below to get started.
        </p>
        <h2>Choose Grade</h2>
        <Link to='/resources/elementary/grade7'><button>Grade 7</button></Link>
        <Link to='/resources/elementary/grade8'><button>Grade 8</button></Link>
      </div>
      <img className="image" src={elementary} alt="" />
    </div>
    
    
  );
}

export default ElementaryResources;
