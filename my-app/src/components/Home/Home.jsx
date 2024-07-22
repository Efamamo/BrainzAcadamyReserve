import brain from "../../images/brain_empower.png";
import saveGrade7Details from "../Resources/ElementaryResources/Grade7/Details";
import saveDetails from "../Resources/ElementaryResources/Grade7/Details";
import saveGrade8Details from "../Resources/ElementaryResources/Grade8/Details";
import "./Home.css";
import { useEffect } from "react";
function Home() {

  useEffect(()=>{
    saveGrade7Details()
    saveGrade8Details()
  },[])
  
  return (
    <div className="landing-container">
      <div className="greeting">
        <h1>Empowering Minds, One Quiz at a Time</h1>
        <p>
          At BrainzAcademy, we are dedicated to enhancing the learning
          experience for students of all ages. We offer a comprehensive range of
          educational materials tailored to each level of education, from
          elementary school to advanced studies. Our interactive platform
          provides an extensive collection of quizzes designed to match various
          educational levels and difficulty tiers. This ensures that learners
          are constantly challenged and engaged.
          <br />
          <br />
          Our services include personalized quiz recommendations based on the
          student's performance and progress tracking through detailed score
          reports. Whether you are looking to reinforce classroom learning,
          prepare for exams, or simply broaden your knowledge, BrainzAcademy is
          your go-to resource. Join us in our mission to make learning fun,
          effective, and accessible for everyone.
        </p>
        <a className="get-started" href="">
          Get Started ...
        </a>
      </div>

      <div className="landing-image-container">
        <img className="header-image" src={brain} alt="" />
      </div>
    </div>
  );
}

export default Home;
