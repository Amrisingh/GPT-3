import React from 'react'
import './possibility.css'
import possibbility  from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt__possibility section__padding' id="possibility">
      <div className='gpt__possibility-image'>
        <img src={possibbility} alt="possibility" />
      </div>
      <div className='gpt__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>From generating creative content to automating complex tasks, it redefines what's possible with AI. Whether it's crafting human-like conversations, building personalized learning systems, or powering innovative applications, GPT-3 opens doors to endless opportunities. The future of AI-driven solutions starts here!</p>
        <h4>Sign Up Early to Begin Your Journey Today!</h4>
      </div>
    </div>
  )
}

export default Possibility
