import React, { useContext } from 'react'
import './settings.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useState } from 'react'
import axios from 'axios'
import {Context} from '../../context/Context'

export default function Settings() {

    const [file, setFile] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user} = useContext(Context);

    const handleSubmit = async(e) => {
        
        e.preventDefault();
        
        const newUser = {
            username: user.username,
            email: email,
            password: password
        }

        if(file){
            const data = new FormData;
            const filename = Date.now() + file.name;
            data.append('name', filename)
            data.append('file', file)
            newUser.photo = filename
            try {
                const res = await axios.post('/upload', data)
            } catch (error) {
                console.log(error);
            }
        }
        
        try{
            const res = await axios.put(`/users/${user._id}`, {
                data:{
                    username, 
                    email, 
                    password
                }
            });
            window.location.replace('/settings')
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className="settings">
            <div className="settings-wrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Your Account</span>
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
                <form className="settings-form" onSubmit={handleSubmit}>
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
                    <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={user.username} />
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={user.email} />
                    <label htmlFor="username">Password</label>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

                    <button type="submit" className="settings-submit">Submit</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
