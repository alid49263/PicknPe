import React from 'react'
import Rest from '../db/restaurant.json'
import Top from '../db/toprated.json'
import RestaurantCard from './RestaurantCard'
import "./Body.css"
function Body() {
    return (
        <div className="body-container">
            <div className="con-one">
                <div className="con">
                    <h3>Near By</h3>
                    <button >View More</button>
                </div>
                <div className="nearby">
                    {Rest.map((item,idx)=>{
                        return(
                            <RestaurantCard key={idx} items={item}/>
                        )
                    })}
                </div>
            </div>
            <div className="con-two">
                <div className="con">
                    <h3>Top Rated</h3>
                    <button >View More</button>
                </div>
                <div className="top-rated">
                    {Top.map((top,idx)=>{
                        return(
                            <RestaurantCard key={idx} items={top}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Body
