import React from 'react'
import './SinglePost.css'

export default function SinglePost() {
    return (
        <div className="single-post">
            <div className="single-post-wrapper">
                <img 
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                    alt="single-post"
                    className="single-post-image"
                />
                <h1 className="single-post-title">
                    POST TITLE FOR BLOG
                    <div className="single-post-actions">
                        <i className="single-post-icon far fa-edit"></i>
                        <i className="single-post-icon far fa-trash-alt"></i>
                    </div>
                </h1>
                
                <div className="single-post-info">
                    <span className="single-post-author">
                        Author: <b>Abhishek</b>
                    </span>
                    <span className="single-post-date">
                        1 hour ago
                    </span>
                </div>
                <div className="single-post-description">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium velit expedita placeat et sit veniam voluptatibus blanditiis non incidunt, vitae illum consequatur sunt? Iure suscipit iusto rem cumque laborum animi!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum sunt debitis est harum, repellat tempora obcaecati quas deserunt natus distinctio voluptas nulla, voluptates, qui ut maxime magni eius ea ipsa!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi omnis iure eaque sequi id vel nam reprehenderit temporibus quaerat accusamus doloribus, tempore, unde harum illum, nesciunt nulla ex aliquam autem!
                    </p>
                </div>
            </div>
        </div>
    )
}
