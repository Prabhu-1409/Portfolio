import React from 'react'
import './Home.css'
import './Works.css'
import cart from './assets/cart.png'
import mushroom from './assets/mushroom.png'
import frontend from './assets/frontend.png'
import imagepro from './assets/imagepro.png'
import yolo from './assets/yolo.png'

function Works() {
  return (
    <div className='works'>
    <div className='about'>
            <div className='topics'>
              <h1>Works</h1>
              <span className='line'></span>
            </div>
    <div className='flex-row'>
      <div className='flex-column1'>
        <div className='object'>
          <div className='work-container'>
          <div className='image1'>
            <img className='works-icon' alt='cart' src={cart}></img>
            </div>
            <h5 className='works-content-1'>Full Stack Web Application</h5>
            <h3 className='works-content-2'>E-Commerece</h3>
            </div>
        </div>
        <div className='object'>
          <div className='work-container'>
          <div className='image2'>
            <img className='works-icon' alt='yolo' src={yolo}></img>
            </div>
            <h5 className='works-content-1'>Object Detection</h5>
            <h3 className='works-content-2'>PCB and Wood Defect <br></br> Detection using YOLO</h3>
            </div>
        </div>
        <div className='object'>
          <div className='work-container'>
          <div className='image3'>
            <img className='works-icon' alt='processing' src={imagepro}></img>
            </div>
            <h5 className='works-content-1'>Image Processing</h5>
            <h3 className='works-content-2'>Mushroom Image <br></br> Processing Using CNN</h3>
            </div>
        </div>
        </div>
      <div className='flex-column2'>
      <div className='object'>
          <div className='work-container'>
          <div className='image4'>
            <img className='works-icon' alt='mushroom' src={mushroom}></img>
            </div>
            <h5 className='works-content-1'>Machine Learning Application</h5>
            <h3 className='works-content-2'>Edible and Poisonous<br></br> Mushroom Classification</h3>
            </div>
        </div>
        <div className='object'>
          <div className='work-container'>
          <div className='image5'>
            <img className='works-icon' alt='frontend' src={frontend}></img>
            </div>
            <h5 className='works-content-1'>User Interface</h5>
            <h3 className='works-content-2'>Amazon Clone</h3>
            </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Works
