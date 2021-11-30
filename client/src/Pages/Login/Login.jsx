import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

export default function Login() {
    return (
        <div class="login-wrapper">
            <div className="login-box">
                <div className="login-title">
                    <h2>Login</h2>
                </div>
                <form className="login-form">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Email" />

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" />

                    <div className="form-submit">
                        <button type="submit" className="login-submit">Submit</button>
                        <Link to="/register" className="login-register-button">Register</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
