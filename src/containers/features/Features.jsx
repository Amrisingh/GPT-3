import React from 'react'
import './features.css'
import { Feature } from '../../components'

const Features = () => {
  return (
    <div className='gpt__features section__padding' id='features'>
      <div className='gpt__features-heading'>
        <h1 className='gradient__text'>The Future Is Here—You Just Need To Embrace It. Take The First Step Today And Make It A Reality.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt__features-container'>
        <Feature title="Smart Content Generator" text="Create high-quality articles, blogs, or product descriptions instantly with GPT-3-powered text generation. Save time and effort with AI that understands your requirements and delivers engaging, SEO-friendly content in seconds."/>
        <Feature title="24/7 AI Chatbot Assistance" text="Provide seamless customer support with an intelligent chatbot that understands and responds like a human. Enhance user engagement, resolve queries instantly, and offer a personalized experience to your customers anytime, anywhere."/>
        <Feature title="Dynamic Knowledge Base Builder" text="Generate, update, and organize information effortlessly for an accessible and up-to-date knowledge hub. Empower your team and users with accurate data and insights at their fingertips, ensuring they never miss critical information." />
        <Feature title="Personalized Learning Solutions" text="Offer tailored educational content and interactive tutoring powered by GPT-3 for learners of all levels. Create an engaging learning environment that adapts to individual needs, making education accessible, fun, and effective."/>
      </div>
    </div>
  )
}

export default Features
