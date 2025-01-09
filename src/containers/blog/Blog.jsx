import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog01,blog02,blog03,blog04,blog05 } from '../../components/article/import'

const Blog = () => {
  return (
    <div className='gpt__blog section__padding' id='blog'>
      <div className='gpt__blog-heading'>
        <h1 className='gradient__text'>
         There's a lot going on, and we're covering it in our blog.
        </h1>
      </div>
      <div className='gpt__blog-container'>
        <div className='gpt__blog-container_groupA'>
        <Article imgUrl={blog01} date='Jan 08, 2025' title='GPT-3: The Future of AI-Powered Content Creation and Automation'/>
        </div>
        <div className='gpt__blog-container_groupB'>
        <Article imgUrl={blog05} date='Dec 15, 2024' title=' How GPT-3 Is Revolutionizing AI-Driven Data Insights and Predictions'/>
        <Article imgUrl={blog02} date='Nov 20, 2024' title='The Role of GPT-3 in Advancing Machine Learning Models for Real-World Applications'/>
        <Article imgUrl={blog04} date='Oct 10, 2024' title='Unlocking the Power of GPT-3: How It’s Shaping the Future of AI and Automation'/>
        <Article imgUrl={blog03} date='Sep 05, 2024' title='Why GPT-3 Is Essential for AI-Powered SEO and Content Generation'/>
        </div>
      </div>
    </div>
  )
}

export default Blog
