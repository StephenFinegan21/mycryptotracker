import React from 'react'
import { useGetNewsQuery } from '../services/newsAPI'
import Article from '../component/Article';

const News = () => {
    const { data, isFetching } = useGetNewsQuery()
    if (isFetching) return "Loading"; //Wait until data finishes loading
    const articleData = (data.value.map(a => a))
    //console.log(articleData.map(a => a.image ? a.image.thumbnail.contentUrl : null))
   // console.log(articleData.map(m => m.about ?  m.about[0].name : null))
    return (
        <>
        <h2>Latest Crypto News</h2>
        <div className="news-grid">
            {articleData && articleData.map((a, articleIndex) => 
            <Article
            keyValue = {articleIndex}
            key = {articleIndex}
                heading={a.name}
                link={a.url}
                date={a.datePublished}
                about={a.about ?  a.about.map(m => m.name) : null}
                description={a.description}
               

            />
            )}
        
        </div>           
        </>
        
    )
}

export default News
