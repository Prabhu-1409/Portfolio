import React, { useRef, useState } from 'react'
import './Home.css'
import './Contact.css'
import emailjs from '@emailjs/browser'
import Axios from 'axios'

function Contact() {
  const form = useRef()
  const [name,setname] = useState('')
  const [email,setemail]= useState('')
  const [message,setmessage]= useState('')
  const serviceid ='service_d2vcdu2'
  const publickey='uD6kxdrpSztJFTTK1'
  const templateid='template_499okvd'
  const data = {
      service_id:serviceid,
      template_id:templateid,
      user_id:publickey,
      template_params:
      {
      from_name:name,
      from_email:email,
      to_name:'Prabhu',
      message:message,
      },
  }

  const handlesubmit=(e)=>{
    e.preventDefault();
    Axios.post('https://api.emailjs.com/api/v1.0/email/send',data).then(()=>{
      console.log('sent successfully')
    }).catch((err)=>{
      console.log(err)
    })
    
  }
  return (
    <div className='contact-page'>
    <div className='about'>
      <div className='topics'>
              <h1>Contact</h1>
              <span className='line'></span>
      </div>
      <div className='form-container'>
      <div className='form'>
        <div className='text'>
        <h2 className='contact-text1'>I'm always open to discussing product</h2>
        <h2 className='contact-text2'>design work or partnerships.</h2>
        </div>
        <div className='form-content'>
            <form ref={form}>
                <input type='text' name='from_name' autoComplete='off' placeholder='Name' value={name} onChange={(e)=>{setname(e.target.value)}}></input>
                <input type='email' name='email' autoComplete='off' placeholder='Email'value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
                <input type='text' name='message' placeholder='Message' value={message} onChange={(e)=>{setmessage(e.target.value)}}></input>
                <button className='button' onClick={handlesubmit}>Submit</button>
            </form>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
