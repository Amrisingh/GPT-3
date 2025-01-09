import React from 'react'
import './article.css'

const Article = ({imgUrl, date, title}) => {
  return (
    <div className='gpt__blog-container_article'>
      <div className='gpt__blog-container_article-image'>
        <img src={imgUrl} alt="blog" />
      </div>
      <div className='gpt__blog-container_article-content'>
        <div>
        <p>{date}</p>
        <h4>{title}</h4>
        </div>
        <p>Read More</p>
      </div>
    </div>
  )
}

export default Article
