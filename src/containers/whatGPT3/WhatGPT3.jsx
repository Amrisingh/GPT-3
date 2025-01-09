import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div className='gpt__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="GPT-3, developed by OpenAI, is a cutting-edge language model that understands and generates human-like text. It is widely used for tasks like content creation, coding assistance, customer support, and more. With its advanced capabilities, GPT-3 transforms how we interact with technology."/>
      </div>
      <div className='gpt__whatgpt3-heading'>
        <h1 className='gradient__text'>
        The possibilities are more than you can imagine
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt__whatgpt3-container'>
        <Feature title="Chatbots" text="GPT-3 revolutionizes chatbots by enabling them to understand and respond with human-like accuracy. These chatbots can handle complex queries, provide personalized experiences, and adapt to various industries seamlessly. "/>
        <Feature title="Knowledgebase" text="GPT-3 enhances knowledge bases by generating accurate and detailed information quickly. It can create, update, and organize content, making it easier to access relevant insights."/>   
        <Feature title="Education" text="GPT-3 is transforming education by providing personalized learning experiences and instant access to knowledge. It can assist with tutoring, generate study materials, and answer complex questions." />
      </div>
    </div>
  )
}

export default WhatGPT3
