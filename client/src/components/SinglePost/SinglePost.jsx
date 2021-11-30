import React from 'react'
import { useLocation } from "react-router";
import './SinglePost.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPost = async () => {
          const res = await axios.get("/posts/" + path);
          setPost(res.data);
        };
        getPost();
      }, [path]);

    return (
        
        <div className="single-post">
            <div className="single-post-wrapper">
                {post.photo && (
                    <img 
                        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        alt="single-post"
                        className="single-post-image"
                    />
                )}
                <h1 className="single-post-title">
                    {post.title}
                    <div className="single-post-actions">
                        <i className="single-post-icon far fa-edit"></i>
                        <i className="single-post-icon far fa-trash-alt"></i>
                    </div>
                </h1>
                
                <div className="single-post-info">
                    <span className="single-post-author">
                        Author: 
                        <Link className="link" to={`/?username=${post.username}`}>
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="single-post-date">
                        {new Date(post.createdAt).toDateString()}
                    </span>
                </div>
                <div className="single-post-description">
                    <p>
                        {post.desc}
                    </p>
                </div>
            </div>
        </div>
    )
}
