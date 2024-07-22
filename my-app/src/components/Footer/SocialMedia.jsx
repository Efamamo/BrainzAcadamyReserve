import './Footer.css'
function SocialMedia(props){
    return (
        <div className="social-container">
        <img
          width="20px"
          src={props.icon}
          alt="facebook-icon"
        />
        <a href={props.link} target="_blank">
          {props.name}
        </a>
      </div>
    )
}

export default SocialMedia