import React from 'react'
import { Link } from 'react-router-dom'

const Article = ({ heading, date, image, link }) => {
    const formattedDate = new Date(date).toLocaleDateString()
    
    return (
        <>
        
         <div className="article">
            <div>
                <img src = {image} className="article-image" alt="thumbnail"></img>
            </div>
            <div>
            <a href={link} className="no-style"><p>{heading}</p></a>
                <p id="date">{formattedDate}</p>
            </div>
        </div>
        
        
        </>
    )
}

export default Article
