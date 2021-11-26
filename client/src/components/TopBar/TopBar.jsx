import React from 'react'
import "./TopBar.css"
import { Link } from 'react-router-dom'

export default function TopBar() {
    
    const user = false;

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
                    <li className="top-list-item">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="top-list-item">
                        <Link className="link" to="/write-post">Write a Post</Link>
                    </li>
                    <li className="top-list-item">
                        <Link className="link" to="/settings">Settings</Link>
                    </li>
                    <li className="top-list-item">
                        { user && "LOGOUT" }
                        {/* { user ? <Link className="link" to="/">Logout</Link> : '' } */}
                    </li>
                </ul>
            </div>
            <div className="top-right">
                { 
                    user ? 
                        (
                        <ul className="top-list">
                            <li className="top-list-item">
                                <img className="top-bar-image" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="pexels-pic" />
                            </li>
                        </ul>
                        )
                    : (
                        <ul className="top-list">
                            <li className="top-list-item">
                                <Link className="link" to="/login">Login</Link>
                            </li>
                            <li className="top-list-item">
                                <Link className="link" to="/register">Register</Link>
                            </li>
                        </ul>
                    )
                }
                
                <i className="top-search-icon fas fa-search"></i>
                
            </div>
        </div>
    )
}
