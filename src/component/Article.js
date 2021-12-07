import React from 'react'

const Article = ({ heading, date, image, link }) => {
    const test = new Date(date).toLocaleDateString()
    
    return (
        <div className="article">
            
            
            <p>{test}</p>
            <p>{heading}</p>
        


            
            <img src = {image} className="article-image"></img>
            
            
            
            
           
        </div>
    )
}

export default Article
