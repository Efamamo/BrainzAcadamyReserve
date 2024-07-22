import { useState } from "react";
import Search from "../../Search";
import "./GeneralKnowledge.css";
import IndividualGeneral from "./IndividualGeneral";
import generalKnowledgeTopics from "./data/generaKnowledgelData";
function GeneralKnowledge() {
  const [search, setSearch] = useState("");
  function handleSearch(val) {
    setSearch(val);
  }

  const filteredTopics = generalKnowledgeTopics.filter((topic) => {
    return topic.description.toLowerCase().includes(search.toLowerCase());
  });
  return (
   
     <div className="general-container">
      <p className="general-intro">
        Welcome to the <b>General Knowledge</b> hub at BrainzAcademy! This
        section is dedicated to broadening your horizons and enriching your
        understanding of the world around you. Whether you are a curious
        learner, or someone looking to boost your intellect,
        our carefully curated topics offer a wealth of information across
        diverse fields. From the depths of history and the expanse of geography
        to the intricacies of science and the beauty of the arts, our content is
        designed to engage, inform, and inspire. Dive into the fascinating world
        of general knowledge and discover new insights that will sharpen your
        mind and enhance your learning journey.
      </p>
     
      <div className="general-search">
        <Search onSearch={handleSearch} />
      </div>

      {filteredTopics.map((topic) => (
        <IndividualGeneral
          link = {topic.link}
          key={topic.title}
          image={topic.image}
          title={topic.title}
          description={topic.description}
        />
      ))}
    </div>
    
   
  );
}

export default GeneralKnowledge;
