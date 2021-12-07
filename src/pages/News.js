import React from 'react'
import { useGetNewsQuery } from '../services/newsAPI'
import Article from '../component/Article';

const News = () => {
    const { data, isFetching } = useGetNewsQuery()
    if (isFetching) return "Loading"; //Wait until data finishes loading
    const articleData = (data.value.map(a => a))
    //console.log(articleData.map(a => a.image ? a.image.thumbnail.contentUrl : null))

    return (
        <>
        <div className="news-grid">
            {articleData && articleData.map(a => 
            <Article
                heading={a.name}
                link={a.url}
                date={a.datePublished}
                image={a.image ? a.image.thumbnail.contentUrl : null}
               

            />
            )}
        
        </div>           
        </>
        
    )
}

export default News
