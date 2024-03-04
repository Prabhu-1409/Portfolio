import React, { useState } from 'react'
import './Home.css'
import phone from './assets/phone.png'
import location from './assets/location.png'
import email from './assets/mail.png'
import birthday from './assets/birthday.png'
import instagram from './assets/instagram.png'
import github from './assets/github.png'
import kaggle from './assets/kaggle.png'
import linkedin from './assets/linkedin.png'
import photo from './photo.jpeg'
import home from './assets/Home.png'
import Resume from './assets/Resume.png'
import works from './assets/Works.png'
import Blogs from './assets/Blogs.png'
import contact from './assets/Contacts.png'
import Works from './Works'
import About from './About'
import Contact from './Contact'
import './Works.css'
import Education from './Education'
import leetcode from './assets/LeetCode.png'

function Home() {
  const [click, setclick] = useState("home")

  return (
    <div className='home'>
      <div className='left'>
        <img src={photo} alt='myphoto' className='name'></img>
        <div className='left-container'>
            <div className='container-0'>
              <h2 style={{ color:'white'}} className='prabhu'>Prabhu M S</h2>
              <div className='box-0'>
              <div className='box'><h3 style={{ color:'gray'}} className='fresher'>Full Stack Developer</h3></div>
              </div>
            </div>
            <div className='icon'>
            <a href='https://www.instagram.com/the.__.noah/'><img alt='instagram' className='icons' src={instagram}></img></a>
            <a href='https://github.com/Prabhu-1409'><img className='icons' alt='github' src={github}></img></a>
            <a href='https://www.kaggle.com/prabhusundhar'><img className='icons' alt='kaggle' src={kaggle}></img></a>
            <a href='https://www.linkedin.com/in/prabhu-sundhar/'><img  alt='linkedin' className='icons' src={linkedin}></img></a>
            <a href='https://leetcode.com/Prabhu_M_S/'><img className='icons-leet' alt='leetcode' src={leetcode}></img></a>
            </div>
            <div className='container-1'>
              <div className='contact'>
              <div className='child'>
              <div className='icon-background'>
              <img className='con-icons' alt='phone' src={phone}></img>
              </div>
              <div className='align'>
              <span className='phone'></span>
              <strong>+91 6382983292</strong>
              </div>
              </div>
              <div className='child'>
              <div className='icon-background'>
              <img className='con-icons' alt='location' src={location}></img>
              </div>
              <div className='align'>
              <span className='location'></span>
              <strong>Hosur</strong>
              </div>
              </div>
              <div className='child'>
              <div className='icon-background'>
              <img className='con-icons' alt='email' src={email}></img>
              </div>
              <div className='align'>
              <span className='email'></span>
              <strong>msprabhuraj15@gmail.com</strong>
              </div>
              </div>
              <div className='child'>
              <div className='icon-background'>
              <img className='con-icons' alt='birthday' src={birthday}></img>
              </div>
              <div className='align'>
              <span className='bday'></span>
              <strong>14th September 2002</strong>
              </div>
              </div>
            </div>
            </div>
        </div>
        </div>
        <div className='content'>
        <div className='container-2'>
        <div className='home-content'>
            <div className='btn-in' onClick={()=>{
              setclick("home") 
            }}>
              <img alt='home' className='btn-icon' src={home}></img>
              <h5>Home</h5>
            </div>
            <div className='btn-in'  onClick={()=>{
              setclick("resume")
            }}>
              <img className='btn-icon' alt='resume' src={Resume}></img>
              <h5>Resume</h5>
            </div>
            <div className='btn-in' onClick={()=>{
              setclick("about")
            }}>
              <img className='btn-icon' alt='works' src={works}></img>
              <h5>Works</h5>
            </div>
            <div className='btn-in'> 
            <img className='btn-icon' alt='blogs' src={Blogs}></img>
            <h5>Blogs</h5>
          </div>
            <div className='btn-in' onClick={()=>{
              setclick("contact-page")
            }}>
              <img className='btn-icon' alt='contact' src={contact}></img>
              <h5>Contact</h5>
            </div>
        </div>
        </div>
        <div className='res-pages'>
        {click==="home" && <About/>}
        </div>
        {click==="about" && <Works/>}
        {click==="contact-page" && <Contact/>}
        {click==="resume" && <Education/>}
      </div>
    </div>
  )
}

export default Home
