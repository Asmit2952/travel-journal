import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Card () {
    return (
        <div className="entries">
            <div className="card--image">
                <img src="https://source.unsplash.com/WLxQvbMyfas" alt="location images"/>
            </div>
            <div className="details">
                <ul className="location">
                    <li><FontAwesomeIcon icon={faLocationDot} className="location--pin"/></li>
                    <li><p>Japan</p></li>
                    <li><a href="https://github.com/Asmit2952" rel="noopener noreferrer" target="_blank" >View on Google Maps</a></li>
                </ul>
                <div className="card--title">
                    <h1>Mount Fuji</h1>
                </div>
            </div>
        </div>
    )
}