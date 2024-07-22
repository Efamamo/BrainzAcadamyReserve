import facebookIcon from '../../images/icons/facebook-svgrepo-com (1).svg';
import twitterIcon from '../../images/icons/twitter-svgrepo-com.svg';
import instagramIcon from '../../images/icons/instagram-svgrepo-com.svg';
import linkedinIcon from '../../images/icons/linkedin-svgrepo-com.svg';
import SocialMedia from './SocialMedia';
import './Footer.css'
function FollowUs() {
  return (
    <div className="footer-section social-media">
      <h2>Follow Us</h2>
      <SocialMedia name={"FaceBook"} link={"https://www.facebook.com"} icon={facebookIcon}/>
      <SocialMedia name={"Twitter"} link={"https://www.twitter.com"} icon={twitterIcon}/>
      <SocialMedia name={"Instagram"} link={"https://www.instagram.com"} icon={instagramIcon}/>
      <SocialMedia name={"LinkedIn"} link={"https://www.linkedin.com"} icon={linkedinIcon}/>
    </div>
  );
}

export default FollowUs
