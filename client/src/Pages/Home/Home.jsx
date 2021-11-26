import React from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import Posts from '../../components/Posts/Posts'
import Sidebar from '../../components/Sidebar/Sidebar'

export default function Home() {
    return (
        <div>
            <Header />
            
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
            
        </div>
    )
}
