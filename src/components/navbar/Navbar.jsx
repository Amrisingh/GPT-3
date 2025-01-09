import React, {useState} from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

const Menu = () =>(
        <>
         <p><a href="#home">Home</a></p>
         <p><a href="#wgpt3">What is GPT-3?</a></p>
         <p><a href="#features">Case Studies</a></p>
         <p><a href="#possibility">Open AI</a></p>
         <p><a href="#blog">Library</a></p>
         </>
)

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt__navbar'>
      <div className='gpt__navbar-links'>
        <div className='gpt__navbar-links_logo'>
          <img src={logo} alt="logo" width={62.56} height={16.02} />
        </div>
        <div className='gpt__navbar-links_container'>
         <Menu/>
        </div>
      </div>
      <div className='gpt__navbar-sign'>
        <button type='button' id='button1'>Sign in</button>
          <button type='button' id='button2'>Sign up</button>
        </div>
      <div className='gpt__navbar-menu'>
       {toggleMenu ? 
       <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)}/>
       :<RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)}/> 
       }  
      {toggleMenu && (
         <div className='gpt__navbar-menu_container scale-up-center'>
          <div className='gpt__navbar-menu_container-links'>
            <Menu/>
            <div className='gpt__navbar-menu_container-links-sign'>
               <button type='button'>Sign in</button>
               <button type='button'>Sign up</button>
            </div>
          </div>
         </div>
      )}
      </div>  
    </div>
  )
}

export default Navbar
