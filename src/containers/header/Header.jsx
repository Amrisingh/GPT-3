import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt__header section__padding' id='home'>
      <div className='gpt__header-content'>
        <h1 className='gradient__text'>
        Let's bring amazing ideas to life with OpenAI's GPT-3!
        </h1>

        <p>Explore the endless possibilities of AI with GPT-3 by OpenAI. From crafting innovative solutions to transforming your ideas into reality, our platform empowers you to unlock the true potential of cutting-edge technology. Let's revolutionize the way we create together!</p>

        <div className='gpt__header-content__input'>
          <input type="email" placeholder='Enter your Email' />
          <button type='button'>Let's Go</button>
        </div>
        <div className='gpt__header-content__people'>
          <img src={people} alt="people" height={38} width={181.79}/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt__header-image'>
          <img src={ai} alt="ai" height={670} width={670}/>
      </div>
    </div>
  )
}

export default Header
