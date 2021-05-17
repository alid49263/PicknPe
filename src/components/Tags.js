import React from 'react'
import "./Tags.css"
function Tags(props) {
    return (
        <div className="tag">
            <p className="tag-inner">{props.tag}</p>
        </div>
    )
}

export default Tags
