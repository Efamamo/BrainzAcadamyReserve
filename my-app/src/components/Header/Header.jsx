import { NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
  
      <div className="title">
        <h1 className="logo">BrainzAcadamy</h1>
        <ul className="links">
          <li><NavLink activeclassname='active' to='/'> Home</NavLink></li>
          <li><NavLink activeclassname='active' to='/about'>About</NavLink></li>
          <li><NavLink activeclassname='active' to='/resources'>Resources</NavLink></li>
          <li><NavLink activeclassname='active'to="/exams">Quizzes</NavLink></li>
        </ul>

        <div></div>
      </div>
    
  );
}

export default Header;
