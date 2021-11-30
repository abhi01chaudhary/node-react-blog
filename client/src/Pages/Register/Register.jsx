import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className="register-wrapper">
            <div className="register-box">
                <div className="register-title">
                    <h2>Register</h2>
                </div>
                <form className="register-form">
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder="First Name" />

                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder="Last Name" />

                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Email" />

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" />

                    <div className="form-submit">
                        <button type="submit" className="register-submit">Register</button>
                        <Link className="register-login-button" to="/login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
