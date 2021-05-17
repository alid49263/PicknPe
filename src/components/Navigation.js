import React from 'react'
import './Navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode , faShoppingCart ,faSearch ,faUserAlt } from "@fortawesome/free-solid-svg-icons"
function Navigation() {
    return (
        <div className="nav-container">
            <div>
                <FontAwesomeIcon className="nav-icon" icon={faQrcode}/>
                <p>Scan</p>
            </div>
            <div>
                <FontAwesomeIcon className="nav-icon" icon={faSearch}/>
                <p>Search</p>
            </div>
            <div>
                <FontAwesomeIcon className="nav-icon" icon={faShoppingCart}/>
                <p>My Cart</p>
            </div>
            <div>
                <FontAwesomeIcon className="nav-icon" icon={faUserAlt}/>
                <p>My Profile</p>
            </div>
        </div>
    )
}

export default Navigation


