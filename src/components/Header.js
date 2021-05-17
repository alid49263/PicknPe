import React, { useState } from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt , faMapPin } from "@fortawesome/free-solid-svg-icons"
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar'
const useStyles = makeStyles((theme) => ({
    small: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    }
}))
function Header() {
    const classes=useStyles()
    const [input, setInput] = useState("")
    return (
        <div className="header-container">
            <div className="subContainer">
            <div className="header-logo">zomato</div>
            <form type="submit" className="header-search">
                <FontAwesomeIcon className="icon" icon={faMapMarkerAlt}/>
                <input onChange={(e)=>setInput(e.target.value)} className="header-input" type="text" placeholder="Search by location"/>    
                <div className="icon1">
                    <FontAwesomeIcon className="icon-loc" icon={faMapPin}/>
                </div>
            </form>
            <div className="avatar">
                <Avatar className={classes.small}  alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg" />
                <p className="header-avatar-img">Syed</p>
            </div>
            </div>
        </div>
    )
}

export default Header
