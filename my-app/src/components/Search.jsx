import "./Search.css";
import cancel from "../images/cancel-svgrepo-com.svg";
import { useState } from "react";
function Search(props) {
  const [current, setCurrent] = useState("");

  function handleChange(event) {
    setCurrent(event.target.value);
    props.onSearch(event.target.value);
  }

  function cancelSearch() {
    props.onSearch("");
    setCurrent("");
  }
  return (
    <div className="search-container">
      <span className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.442 1.398a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
        </svg>
      </span>
      <input
        value={current}
        type="text"
        onChange={handleChange}
        placeholder="Search"
        className="search-input"
      />

      {current.length > 0 && <img
        onClick={cancelSearch}
        className="cancel"
        style={{ width: "20px" }}
        src={cancel}
      />}
    </div>
  );
}

export default Search;
