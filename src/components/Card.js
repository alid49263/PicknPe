import React, { useState } from 'react'
import './Card.css'
function Card(props) {
    const [cart, setCart] = useState(0)
    const decrease=()=>{
        if(cart>0){
            setCart(cart=>cart-1)
        }
    }
    const increase=()=>{
        setCart(cart=>cart+1)
    }
    return (
        <div  className="food-card-container">
            <img src={props.item.strMealThumb} alt="" className="food-image" />
            <div className="details">
                <h2 className="food-name">{props.item.strCategory}</h2>
                <p className="cart-head">Lorem ipsum dolor sit amet, adipiscing elit.</p>
                <p>Rs. XXX</p>
                <div className="cart">
                    <p onClick={decrease}>-</p>
                    <p>{cart}</p>
                    <p onClick={increase}>+</p>
                </div>
            </div>
        </div>
    )
}

export default Card
