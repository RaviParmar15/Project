import React, { useState } from 'react'
import SignUp from './SignUp'
import Login from './Login'

const LoginSignup = () => {
    const [toggle,setToggle]=useState(true)
  return (
    <div>
        {toggle ? <SignUp/>: <Login/>}
        <h1 onClick={()=>setToggle(!toggle)}>toggle</h1>
        
    </div>
  )
}

export default LoginSignup