import React, { useContext } from 'react'
import './settings.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Context} from '../../context/Context'

export default function Settings() {

    const [file, setFile] = useState(null)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user} = useContext(Context);

    const PF = 'http://localhost:5000/images/'

    useEffect(() => {
        setUsername(user.username)
        setEmail(user.email)
    }, [])

    const handleSubmit = async(e) => {
        
        e.preventDefault();
        
        const newUser = {
            userId: user._id,
            username,
            email,
            password
        }

        if(file){
            const data = new FormData;
            const filename = Date.now() + file.name;
            data.append('name', filename)
            data.append('file', file)
            newUser.profilePic  = filename
            try {
                const res = await axios.post('/upload', data)
            } catch (error) {
                console.log(error);
            }
        }

        try{
            const res = await axios.put(`/users/${user._id}`, {
                userId: user._id,
                username, 
                email, 
                password,
                profilePic: newUser.profilePic ? newUser.profilePic : user.profilePic
            });
            window.location.replace('/settings')
            localStorage.setItem('user', null);
            localStorage.setItem('user', JSON.stringify(res.data))
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
                        {user.profilePic ? (
                            <img 
                                src={PF + user.profilePic} 
                                alt="profile-img" 
                            />
                        ) : null}
                        {
                            file && 
                            (
                                <img src={URL.createObjectURL(file)} alt="" />
                            )
                        }
                        <label htmlFor="settings-file-input">
                            <i className="settings-user-profile far fa-user-circle"></i>
                            <span>Select Image</span>
                        </label>
                        <input type="file" id="settings-file-input" style={{ display: 'none' }} onChange={(event) => setFile(event.target.files[0])} />
                    </div>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} />
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <label htmlFor="username">Password</label>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

                    <button type="submit" className="settings-submit">Submit</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
