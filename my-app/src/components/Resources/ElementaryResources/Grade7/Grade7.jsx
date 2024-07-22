import Subject from "../Subject";
import "../Grades.css";
import maths from "../../../../images/maths.jpeg";
import amharic from "../../../../images/amharic.jpeg";
import english from '../../../../images/englidh.jpg'
import social from '../../../../images/social-science1-1200x675.png'
import general from '../../../../images/general-science-1200x675.png'
import pe from '../../../../images/Physical-Education-1200x675.jpg'
import carrer from '../../../../images/carrer.webp'
import pva from '../../../../images/arts.jpg'
import it from '../../../../images/IT.png'
import citizen from '../../../../images/citizen.jpeg'
import mother from '../../../../images/mother_tongue-1200x675.jpeg'
import { Link } from "react-router-dom";
function Grade7() {
  return (
    <div className="grade">
      <p>
        Welcome to the Grade 7 Learning Materials page! Here, you'll find a
        collection of essential textbooks to support your academic success in
        various subjects. Whether you're studying at school or at home, these
        resources will help you deepen your understanding and build on your
        existing knowledge. Explore the exciting topics of Grade 7 and let these
        materials guide you towards achieving your academic goals.
      </p>
      <h2>Choose Text Book</h2>
      <div className="books">

    
        <Link to="/resources/elementary/grade7/amharc"><Subject number={1} title={"Amharic"} image={amharic} grade={7} subject={"amharc"}/></Link>
        <Link to='/resources/elementary/grade7/english'><Subject number={2} title={"English"} image={english} grade={7} subject={"english"} /></Link>
        <Link to="/resources/elementary/grade7/maths"><Subject number={3} title={"Mathematics"} image={maths} grade={7} subject={"maths"}/></Link>
        <Link to="/resources/elementary/grade7/social"><Subject number={4} title={"Social Studies"} image={social} grade={7} subject={"social"} /></Link>
        <Link to="/resources/elementary/grade7/general"><Subject number={5} title={"General Science"} image={general} grade={7} subject={"general"} /></Link>
        <Link to="/resources/elementary/grade7/pva"><Subject number={6} title={"PVA"} image={pva} grade={7} subject={"pva"}/></Link>
        <Link to="/resources/elementary/grade7/it"><Subject number={7} title={"IT"} image={it} grade={7} subject={"it"}/></Link>
        <Link to="/resources/elementary/grade7/citizen"><Subject number={8} title={"Citizenship Education"} image={citizen} grade={7} subject={"citizen"}/></Link>
        <Link to="/resources/elementary/grade7/career"><Subject number={9} title={"Carrer"} image={carrer} grade={7} subject={"career"}/></Link>
      </div>
    </div>
  );
}

export default Grade7;
