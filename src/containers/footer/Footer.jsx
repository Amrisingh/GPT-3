import React from 'react'
import './footer.css'
import gptlogo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt__footer section__padding'>
      <div className='gpt__footer-heading'>
        <h1 className='gradient__text'>Do you want to unlock the future before everyone else?</h1>
      </div>
      <div className='gpt__footer-btn'>
        <p>Apply For Early Access</p>
      </div>
      <div className='gpt__footer-links'>
        <div className='gpt__footer-links_logo'>
          <img src={gptlogo} alt="" />
          <p>XYZ Complex, Block C, Connaught Place, New Delhi - 110001</p>
        </div>
        <div className='gpt__footer-links_div'>
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Explore More</p>
          <p>Quick Start</p>
          <p>Contact</p>
        </div>
        <div className='gpt__footer-links_div'>
          <h4>Company</h4>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Careers</p>
        </div>
        <div className='gpt__footer-links_div'>
          <h4>Get in Touch</h4>
          <p>abcxyz@gmail.com</p>
          <p>085-56787</p>
          <p>Chat with Us</p>
        </div>

      </div>
      <div className='gpt__footer-copyright'>
        <p>&copy; 2025 GPT-3. All rights reserved. </p>
      </div>
    </div>
  )
}

export default Footer
