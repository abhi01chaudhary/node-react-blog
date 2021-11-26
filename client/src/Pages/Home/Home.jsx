import React from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import Posts from '../../components/Posts/Posts'
import Sidebar from '../../components/Sidebar/Sidebar'
import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('/posts');
            setPosts(response.data);
        }
        fetchPosts();
    }, [])
    
    return (
        <div>
            <Header />
            
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />
            </div>
            
        </div>
    )
}
