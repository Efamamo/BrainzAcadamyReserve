import AboutContainer from "./AboutContainer";
import aboutInfo from "./data/AboutInfo";
import "./About.css";


function About() {
  
  return (
    <div>
     
      {aboutInfo.map((info) => (
        <AboutContainer
          key={info.name}
          name={info.name}
          desc={info.desc}
          image={info.image}
          isImageTop={info.isImageTop}
        />
      ))}
     
    </div>
  );
}

export default About;
