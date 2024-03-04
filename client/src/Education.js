import React from 'react'
import education from './assets/Education.png'
import './Education.css'

function Education() {
  return (
    <div className='education-container0'>
    <div className='about'>
      <div className='first'>
            <div className='topics'>
              <h1>Education</h1>
              <span className='line'></span>
         </div>
    </div>
    <div className='education-container'>
        <div className='education-box'>
            <div className='align-text'>
            <h4 className='year'>2020 - Present</h4>
            <h2 className='institute-name'>Adhiyamaan College of Engineering</h2>
            <h4 className='graduate'>Under Graduate</h4>
            </div>
        </div>
        <div className='education-box'>
            <div className='align-text'>
            <h4 className='year'>2019 - 2020</h4>
            <h2 className='institute-name'>Wisdom Matriculation Higher Secondary School</h2>
            <h4 className='graduate'>High School</h4>
            </div>
        </div>
        <div className='education-box'>
            <div className='align-text'>
            <h4 className='year'>2017 - 2018</h4>
            <h2 className='institute-name'>Wisdom Matriculation Higher Secondary School</h2>
            <h4 className='graduate'>Secondary Schooling</h4>
            </div>
        </div>
        <h1 className='skills-topic'>Skills</h1>
        <div className='skill-box'>
            <div className='skills'>
                <h2 className='skill-name'>Java</h2>
                <span className='bar'><span className='java'></span></span>
            </div>
            <div className='skills'>
                <h2 className='skill-name'>C and C++</h2>
                <span className='bar'><span className='c'></span></span>
            </div>
            <div className='skills'>
                <h2 className='skill-name'>Python</h2>
                <span className='bar'><span className='python'></span></span>
            </div>
            <div className='skills'>
                <h2 className='skill-name'>MongoDB, Expressjs, Reactjs, Nodejs (MERN)</h2>
                <span className='bar'><span className='mern'></span></span>
            </div>
            <div className='skills'>
                <h2 className='skill-name'>MySQL</h2>
                <span className='bar'><span className='mysql'></span></span>
            </div>
            <div className='skills'>
                <h2 className='skill-name'>Machine learning models and Deep learning</h2>
                <span className='bar'><span className='ml'></span></span>
            </div>
            <div className='skills'>
                <h2 className='skill-name'>Data Structures and Algorithms</h2>
                <span className='bar'><span className='dsa'></span></span>
            </div>
            <div className='skills'>
                <h2 className='skill-name'>AWS</h2>
                <span className='bar'><span className='aws'></span></span>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Education
