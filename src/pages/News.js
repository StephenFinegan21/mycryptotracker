import React from 'react'
import { useGetNewsQuery } from '../services/newsAPI'
import Article from '../component/Article';

const News = () => {
    const { data, isFetching } = useGetNewsQuery()
    if (isFetching) return "Loading"; //Wait until data finishes loading
    const articleData = (data.value.map(a => a))
    console.log(articleData.map(a => a))

    return (
        <>
        <div className="news-grid">
            {articleData.map(a => 
            <Article
                heading={a.name}
                link={a.url}
                date={a.datePublished}
                image={a.image.thumbnail.contentUrl}

            />
            )}
        
        </div>           
        </>
        
    )
}

export default News
