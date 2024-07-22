import { useState } from "react";
import literature from "../data/litrature";

import "../EachGeneral.css";
import Search from "../../../Search";
import SpecificGeneral from "../SpecificGeneral";
function Litrature() {
  const [search, setSearch] = useState("");
  const [currentElements, setCurrent] = useState(literature.slice(0,10))
  const [count, setCount] = useState(10)
  
  function handleSearch(val) {
    setSearch(val);
  }

  const filteredLitrature= currentElements.filter((litrat) => {
    return litrat.description.toLowerCase().includes(search.toLowerCase());
  });

  function load(){
    setCurrent(literature.slice(0,count+10))
    setCount(prev => prev+10)
    }

  return (
    
   
    <div className="general-container">
      <p className="intro">
        History is the captivating study of humanity's past, a window into the
        events, cultures, and individuals that have shaped our present world. It
        encompasses the rise and fall of civilizations, the triumphs and
        tragedies of nations, and the stories of people who have left their mark
        on the sands of time. Through history, we gain a deeper understanding of
        where we come from, the paths we've taken, and the lessons we've learned
        along the way.
      </p>
      <div className="search">
        <Search onSearch={handleSearch} />
      </div>

      {filteredLitrature.map((litrat) => (
        <SpecificGeneral
          key={litrat.title}
          title={litrat.title}
          description={litrat.description}
          image={litrat.image}
          link={litrat.link}
        />
      ))}
      {count < literature.length &&  <button onClick={load} id="loadMoreBtn" class="load-more-btn">Load More...</button>}
      </div>
 
   
  );
}

export default Litrature;
