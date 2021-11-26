import React from 'react'
import './settings.css'
import Sidebar from '../../components/Sidebar/Sidebar'

export default function Settings() {
    return (
        <div className="settings">
            <div className="settings-wrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Your Account</span>
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
                <form className="settings-form">
                    <h2>Profile Picture</h2>
                    <div className="settings-profile">
                        <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <label htmlFor="settings-file-input">
                            <i class="settings-user-profile far fa-user-circle"></i>
                            <span>Select New Image</span>
                        </label>
                        <input type="file" id="settings-file-input" style={{ display: 'none' }}/>
                    </div>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Username" />
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Email" />
                    <label htmlFor="username">Password</label>
                    <input type="password" placeholder="Password" />

                    <button type="submit" className="settings-submit">Submit</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
