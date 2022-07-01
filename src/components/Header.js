import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons'

export default function Header () {
    return (
        <div>
            <div className="header">
                <h3 className="header--title"><FontAwesomeIcon icon={faEarthAsia} className="globe--icon"/> My Travel Journal</h3>
            </div>
        </div>
    )
}