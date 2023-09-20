import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Login() {
   const [name,setname] = useState('')
   const [password,setpassword] =  useState('')
   const navigate =useNavigate()
   const collectData =async()=>{
    console.log (name,password);
    let result= await fetch('http://localhost:24092/',{
        method:'POST',
        body:JSON.stringify({name,password}),
        headers:{
            'Content-Type' :'application/json'
        }
    })
    result =await result.json()
    console.log(result); 
   
   }

  return (
    <>
<div className="mainlog">
<header>
        <h2 className="logo2">LO<span>GO</span></h2>
        <nav className="navigation">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/About'}>About</NavLink>
            <NavLink to={'/Service'}>Serive</NavLink>
            <NavLink to={'/Contact'}>Contact</NavLink>
            <button className="btnlogin-popup"><NavLink to={'/register'}>Register</NavLink> </button>
        </nav>
    </header>
    <div className="wrapper">
        <div className="form-box login">
            <h2>Login</h2>
            <form className="#" >
                <div className="input-box">
                    <input type="text" id='name' required="required" 
                  value={name} onChange={(e)=>setname(e.target.value)}
                    />
                <label>Username</label>
            </div>
                <div className="input-box">
                    <input type="password" id='password' required="required" 
                     value={password} onChange={(e)=>setpassword(e.target.value)}
                    />
                <label>Password</label>
            </div>
           
                <button type="Submit" className="btn"onClick={collectData}>logIn</button>
                
                <div className="login-reg">
                    <p>Don't have an account<NavLink to={'/register'}> Register </NavLink></p>
                </div>
            </form>
        </div>
    </div>

    </div>


    </>
  )
}
