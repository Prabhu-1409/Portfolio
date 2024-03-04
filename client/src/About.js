import React from 'react'
import './Home.css'
import frontend from './assets/frontend1.png'
import backend from './assets/backend.png'
import machine from './assets/machine.png'
import code from  './assets/code.png'
import problem from './assets/problem.png'
import camera from './assets/camera.png'

function About() {
  return (
    <div className='about'>
          <div className='first'>
            <div className='topics'>
              <h1>About Me</h1>
              <span className='line'></span>
            </div>
            <p className='about-text'>I'm a creative developer, working in Full web development and Machine Learning.I enjoy to do 
              Problem Solving. 
            </p>
          </div>
          <div className='second'>
            <h1 className='topics-2'>What I do</h1>
            <div className='grid'>
              <div className='grids'>
                <div className='grid-topic'>
                <img className='grid-icons' alt='full-stack' src={code}></img>
                <h3>Full Stack Web Development</h3>
                </div>
                <p className='grid-text1'>It refers to the end-to-end application software development, including the front end and back end.</p>
              </div>
              <div className='grids'>
                <div className='grid-topic'>
                <img className='grid-icons'src={machine} alt='machine learning'></img>
                <h3>Machine Learning</h3>
                </div>
                <p className='grid-text2'>Helps Machine to Learn and act accordingly from training examples and Algorithms.</p>
              </div>
              <div className='grids'>
                <div className='grid-topic'>
                <img className='grid-icons'src={frontend} alt='frontend'></img>
                <h3>Frontend Development</h3>
                </div>
                <p className='grid-text2'>This is content that you see in a web browser when viewing a page. In Concrete, a site is a collection of Pages.</p>
              </div>
              <div className='grids'>
                <div className='grid-topic'>
                <img className='grid-icons'src={camera} alt='photography'></img>
                <h3>Photography</h3>
                </div>
                <p className='grid-text2'>Passionate task to capture memories and aesthetic things around world.</p>
              </div>
              <div className='grids'>
                <div className='grid-topic'>
                <img className='grid-icons'src={problem} alt='problem-solving'></img>
                <h3>Problem Solving</h3>
                </div>
                <p className='grid-text2'>Solving Complex problems through DSA.</p>
              </div>
              <div className='grids'>
                <div className='grid-topic'>
                <img className='grid-icons'src={backend} alt='backend'></img>
                <h3>backend Development & Restful API</h3>
                </div>
                <p className='grid-text2'>Creating a RESTful Application programming interfacem for client & server Communication.</p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default About
