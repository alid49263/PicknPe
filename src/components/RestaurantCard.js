import React from 'react'
import { Link } from 'react-router-dom'
import './RestaurantCard.css'
import Tags from './Tags'
function RestaurantCard(props) {
    return (
            <div  className="card-container">
                <Link to={{
                    pathname:"/restaurant",
                    my:props.items.resName
                }}>
                <div className="black">
                     <h2 className="rest-name">{props.items.resName}</h2>
                     <div className="tags">
                        {props.items.type.map((type,ind)=>{
                            return(
                                <Tags key={ind} tag={type}></Tags>
                            )
                        })}
                    </div>
                     <div className="detail">
                        <p className="rest-dist">Distance : {props.items.dist}</p>
                        <p className="rest-rating">Ratings: {props.items.restRating}/5</p>
                     </div>
                </div>
                <img className="card" src={props.items.image} alt="yo" />
                </Link>
             </div>
    )
}

export default RestaurantCard
