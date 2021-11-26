import React from 'react'
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <span className="sidebar-title">
                    About Me
                </span>
                <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Minus, temporibus laborum veniam nulla 
                </p>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">Category</span>
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">Sport</li>
                    <li className="sidebar-list-item">Music</li>
                    <li className="sidebar-list-item">Books</li>
                    <li className="sidebar-list-item">Life</li>
                    <li className="sidebar-list-item">Music</li>
                    <li className="sidebar-list-item">Books</li>
                </ul>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">Follow US</span>
                <div className="social-icons">
                    <i className="top-icons fab fa-facebook-square"></i>
                    <i className="top-icons fab fa-twitter-square"></i>
                    <i className="top-icons fab fa-pinterest-square"></i>
                    <i className="top-icons fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
