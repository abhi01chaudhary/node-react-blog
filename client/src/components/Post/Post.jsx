import React from 'react'
import './Post.css'
import { Link } from 'react-router-dom'

export default function Post({post}) {
    return (
        <div className="post">
            {post.photo ? (
                <img className="post-image" src="{post.photo}" alt="pexel-img" />
            ): (
                <img className="post-image" src="https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pexel-img" />
            ) }
            <div className="post-info">
                <div className="post-category">
                    {post.categories.map((category, index) => (
                        <span className="post-category-title" key={index}>{category}, </span> 
                    ))}
                </div>
                <span className="post-title">
                    <Link className="link" to={`/posts/${post._id}`} >
                        <span>{post.title}</span>
                    </Link>
                </span>
                <hr />
                <span className="post-timestamp">{ new Date(post.createdAt).toDateString()}</span>
                <p className="post-description">
                    {post.desc}
                </p>
            </div>
        </div>
    )
}
