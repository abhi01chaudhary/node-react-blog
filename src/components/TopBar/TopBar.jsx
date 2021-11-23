import React from 'react'
import "./TopBar.css"

export default function TopBar() {
    return (
        <div className="top-bar">
            <div className="top-left">
                <i className="top-icons fab fa-facebook-square"></i>
                <i className="top-icons fab fa-twitter-square"></i>
                <i className="top-icons fab fa-pinterest-square"></i>
                <i className="top-icons fab fa-instagram-square"></i>
            </div>
            <div className="top-center">
                <ul className="top-list">
                    <li className="top-list-item">Home</li>
                    <li className="top-list-item">About Us</li>
                    <li className="top-list-item">Contact Us</li>
                    <li className="top-list-item">Write</li>
                    <li className="top-list-item">Home</li>
                </ul>
            </div>
            <div className="top-right">
                <img className="top-bar-image" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="pexels-pic" />
                <i className="top-search-icon fas fa-search"></i>
            </div>
        </div>
    )
}
