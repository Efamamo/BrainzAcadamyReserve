import { Link } from "react-router-dom";
import "./Resources.css";

function Resources() {
  
  return (
    
    <main className="choice">
      <h2>Choose Your Level of Education</h2>
      <Link to="/resources/elementary"><button className="elementary"> Elementary </button></Link>
      <Link to="/resources/highschool"><button className="highschool"> HighSchool</button></Link>
      <Link to='/resources/highlevel'><button className="higher-level"> Higher Level</button></Link>
    
      <h2>OR</h2>
      <Link to="/resources/general-knowledge"><button className="general"> General Knowledge</button></Link> 
    </main>
    
    
  );
}

export default Resources;
