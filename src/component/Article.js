import React from 'react'
import { Link } from 'react-router-dom'

/*

*/

const Article = ({ description, heading, date, link, about }) => {
    const formattedDate = new Date(date).toLocaleDateString()
    
    return (
        <>
        
         <div className="article">
            
            <div>
                <a href={link} className="no-style"><h3 id="article-link">{heading}</h3></a>
                <p className="description">{description}</p>
                <div className="article-information">
                    <p id="date">{formattedDate}</p>
                    <div className="about-indicators">
                    {about ? about.map(m  => <p className="about">{m}</p> ) : null}
                    </div>
                </div>
            </div>
        </div>
        
        
        </>
    )
}

export default Article
