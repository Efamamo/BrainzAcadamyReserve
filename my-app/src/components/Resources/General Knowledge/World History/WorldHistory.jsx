import { useState } from "react";
import worldHistory from "../data/worldHistory";
import SpecificGeneral from "../SpecificGeneral";

import "../EachGeneral.css";
import Search from "../../../Search";


function WorldHistory() {
  const [search, setSearch] = useState("");
  const [currentElemets, setCurrentElemets] = useState(worldHistory.slice(0,10))
  const [count, setCount] = useState(10)


  function handleSearch(val) {
    setSearch(val);
  }

  const filteredWorldHistory = currentElemets.filter((history) => {
    return history.description.toLowerCase().includes(search.toLowerCase());
  });


  function load(){
    setCurrentElemets(worldHistory.slice(0,count+10))
    setCount(prev => prev+10)  }

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

      {filteredWorldHistory.map((history) => (
        <SpecificGeneral
          key={history.title}
          title={history.title}
          description={history.description}
          image={history.image}
          link={history.link}
        />
      ))}
      {count < worldHistory.length && (
        <button onClick={load} id="loadMoreBtn" class="load-more-btn">
          Load More...
        </button>
      )}
    </div>
  );
}

export default WorldHistory;
