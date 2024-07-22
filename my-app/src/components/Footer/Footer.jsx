import Contact from "./Contact"
import FollowUs from "./FollowUs"
import QuickLink from "./QuickLink"
import './Footer.css'

function Footer(){
    return (
    <footer>
    <div className="footer-container">
        
        <Contact/>
        <FollowUs/>
        <QuickLink/>
       
    </div>
</footer>);
}

export default Footer