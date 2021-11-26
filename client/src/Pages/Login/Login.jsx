import React from 'react'
import './Login.css'

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
                        <button className="login-register-button">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
