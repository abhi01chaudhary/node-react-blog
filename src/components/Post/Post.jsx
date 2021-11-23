import React from 'react'
import './Post.css'

export default function Post() {
    return (
        <div className="post">
            <img className="post-image" src="https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pexel-img" />
            <div className="post-info">
                <div className="post-category">
                    <span className="post-category-title">Music</span>
                    <span className="post-category-title">Life</span>
                </div>
                <span className="post-title">Coding is fun</span>
                <hr />
                <span className="post-timestamp">Saturday 15th Nov 2021</span>
                <p className="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quidem natus eligendi adipisci maxime mollitia cupiditate officiis, voluptates nesciunt! 
                    A cupiditate illo molestiae hic, omnis voluptatem nostrum pariatur minima consectetur vel. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quidem natus eligendi adipisci maxime mollitia cupiditate officiis, voluptates nesciunt! 
                    A cupiditate illo molestiae hic, omnis voluptatem nostrum pariatur minima consectetur vel.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quidem natus eligendi adipisci maxime mollitia cupiditate officiis, voluptates nesciunt! 
                    A cupiditate illo molestiae hic, omnis voluptatem nostrum pariatur minima consectetur vel.
                </p>
            </div>
        </div>
    )
}
