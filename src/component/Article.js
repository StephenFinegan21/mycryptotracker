import React from 'react'

//Pass in props 
const Article = ({ description, heading, date, link, about}) => {
    //Format the date
    const formattedDate = new Date(date).toLocaleDateString() //Format the date tp YYYY/MM/DD
    return (
        <>
        <div className="article">
            <div>
                <a href={link} className="no-style"><h3 id="article-link">{heading}</h3></a>
                <p className="description">{description}</p>
                <div className="article-information">
                    <p id="date">{formattedDate}</p>
                    <div className="about-indicators">
                    {/* If about indicator exists return it if not return null */}
                    {about ? about.map((m, index)  => 
                    <p 
                    key = {index} 
                    className="about">{m}
                    </p>
                     ) : null} 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Article
