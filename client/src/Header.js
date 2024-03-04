import React, { useState } from 'react'
import Hamburger from './assets/Hamburger.png'
import './Header.css'
import Home from './Home'
import About from './About'
import home from './assets/Home.png'
import Resume from './assets/Resume.png'
import works from './assets/Works.png'
import Blogs from './assets/Blogs.png'
import contact from './assets/Contacts.png'
import Works from './Works'
import Contact from './Contact'
import Education from './Education'


function Header() {
  const [res,setres]=useState(false)
  const [nav , setnav] = useState("home")
  const navhandle = ()=>{
    setres(!res)
  }
  const workhandle=()=>{
    setnav("works")
    setres(false)
  }
  const homehandle=()=>{
    setnav("home")
    setres(false)
  }
  const contacthandle = ()=>{
    setnav("contact")
    setres(false)
  }
  const resumhandle = ()=>{
    setnav("resume")
    setres(false)
  }
  return (
    <div className='head'>
      <div className='header-page'>
      <div className='header-name'>
      <h2 className='my-name'>𝐏𝐫𝐚𝐛𝐡𝐮</h2>
      </div>
      <div className='hamburger-position'>
      <img className='hamburger' onClick={navhandle} alt='hamburger' src={Hamburger}></img>
      </div>
      </div>
      <div>
        {res?
      <div className='navbar'>
        <div className='item'  onClick={homehandle}>
          <img className='nav-icon' alt='home' src={home}></img>
          <h4 className='nav-text'>Home</h4>
        </div>
        <div className='item' onClick={resumhandle}>
          <img className='nav-icon' alt='resume' src={Resume}></img>
          <h4 className='nav-text'>Resume</h4>
        </div>
        <div className='item' onClick={workhandle}>
          <img className='nav-icon' alt='works' src={works}></img>
          <h4 className='nav-text'>Works</h4>
        </div>
        <div className='item'>
          <img className='nav-icon' alt='blogs' src={Blogs}></img>
          <h4 className='nav-text'>Blogs</h4>
        </div>
        <div className='item' onClick={contacthandle}>
          <img className='nav-icon' alt='contact' src={contact}></img>
          <h4 className='nav-text'>Contact</h4>
        </div>
        </div>:''}
        <div className='responsive-page'>
        {nav==="home" && <About/> && <Home/>}
        {nav==="works" && <Works/>}
        {nav==="contact" && <Contact/>}
        {nav==="resume" && <Education/>}
      </div>
      </div>
    </div>
  )
}

export default Header
