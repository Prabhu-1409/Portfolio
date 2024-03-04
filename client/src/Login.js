import React, { useState } from 'react'
import Axios from 'axios'

function Login() {
    const [email,setemail] = useState()
    const [password,setpassword] = useState()
    const handlesubmit=(e)=>{
        e.preventDefault()
        const formdata  = new FormData()
        formdata.append('email',email)
        formdata.append('password',password)
        console.log([...formdata.entries()])
        Axios({
            method:'POST',
            url:'http://localhost:3001/login',
            data:formdata,
            headers:{
                "Content-Type":'application/json'
            }
        })
    }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type='email' value={email} name='email' onChange={(e)=>{setemail(e.target.value)}}/>
        <input type='password' value={password}  name='password' onChange={(e)=>{setpassword(e.target.value)}}/>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default Login
