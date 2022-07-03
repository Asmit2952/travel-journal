import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Card (props) {
    return (
        <div className="entries">
            <div className="card--image">
                <img src={props.item.imageUrl} alt="location images"/>
            </div>
            <div className="details">
                <ul className="location">
                    <li><FontAwesomeIcon icon={faLocationDot} className="location--pin"/></li>
                    <li><p>{props.item.location}</p></li>
                    <li><a href={props.item.googleMapsUrl} rel="noopener noreferrer" target="_blank" >View on Google Maps</a></li>
                </ul>
                <div className="card--title">
                    <h1>{props.item.title}</h1>
                </div>
                <div className="travel--details">
                    <h5>{props.item.startDate} - {props.item.endDate}</h5>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}