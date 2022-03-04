import React from 'react'
import { NavLink } from 'react-router-dom'
import "./buynow.css"


const Empty = () => {
    return (
        <div className="buynow_section">
            <div className="buynow_container">
                <div className="empty_buy" style={{ padding: "40px 40px" }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xpOr8GbZhxyLr0uD8mEn9L6lsHT-jHq2Kg&usqp=CAU" alt="cart img" />
                    <div className="emptydata">
                        <h1>Your Amazon Basket is empty</h1>
                        <p>See recommendations</p>
                    </div>
                    <NavLink className="empty_btn" to="/">Add Your Iteams</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Empty
