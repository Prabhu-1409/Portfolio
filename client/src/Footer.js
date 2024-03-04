import React from 'react'
import copyright from './assets/copyright.png'
import './Footer.css'

function Footer() {
  return (
    <div className='div'>
      <div className='foot-container'>
        <div className='content-position'>
        <div className='foot-box'>
        <img className='copyright' alt='copyright' src={copyright}></img>
        <h3 className='letter'>@Prabhu</h3>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
