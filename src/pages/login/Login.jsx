import React, { useState } from 'react'
import './Login.css'


const Login = () => {

const [email , setEmail] = useState("")


  return (
    <div className=" logincontainer">
  <h1>My Todo list</h1>
  <form onSubmit={(e)=>{

// console.log(e);
e.preventDefault();
setEmail(' ')


  }}>
  <label htmlFor='email'> Email {email} </label>
<input    type='email'
value={email}
onChange={(e)=>{

  setEmail(e.target.value)

}} 
required name='email' id='email' ></input>
<label htmlFor='password'>Password :</label>
<input type='password' name='password' id='password'></input>
<button>Login / Registration </button>
</form>
    </div>
  )
}

export default Login;








































