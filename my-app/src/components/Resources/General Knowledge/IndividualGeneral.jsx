import { Link } from 'react-router-dom';
import './GeneralKnowledge.css'

function IndividualGeneral(props){
    
    return (
    <Link to={props.link} className="each-link">
        <div className="each">
            <img src={props.image} alt=""/>
            <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    </Link>
    )
}

export default IndividualGeneral;