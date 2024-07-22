import { Link } from "react-router-dom";
import "./Footer.css";
function QuickLink() {
  return (
  
      <div className="footer-section footer-navigation">
        <h2>Quick Links</h2>
        <ul>
          <li><Link to='/'> Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/resources'>Resources</Link></li>
          <li><Link to='/quizzes'>Quizzes</Link></li>
        </ul>
      </div>
   
  );
}

export default QuickLink;
