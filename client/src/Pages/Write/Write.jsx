import React from 'react'
import './write.css'

export default function Write() {
    return (
        <div className="write-wrapper">
            <img
                className="write-img"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <form className="write-form">
                <div className="write-form-group">
                    <label htmlFor="file-input">
                        <i className="write-icon fas fa-plus"></i>
                    </label>
                    <input type="file" id="file-input" style={{ display: 'none'}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="write-form-group">
                    <textarea
                        className="writeInput writeText"
                        placeholder="Tell your story..."
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <button type="submit" className="write-submit">Publish</button>
            </form>
        </div>
    )
}
