import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


export default function Login() {
    const [name,setname] = useState('')
    const [password,setpassword] =  useState('')
    const navigate = useNavigate()
    const collectData =async()=>{
     console.log (name,password);
     let result= await fetch('http://localhost:24234/',{
         method:'POST',
         body:JSON.stringify({name,password}),
         headers:{
             'Content-Type' :'application/json'
         }
     })
     result =await result.json()
     console.log(result); 
     if(result.name){
        localStorage.setItem("name",JSON.stringify(result))
        navigate("/Addselleritem")
     }
     else{
        alert("Password does't Match")
     }
    }
  return (
    <>
    <div class="mainlog">
<header>
        <h2 class="logo2">LO<span>GO</span></h2>
        <nav class="navigation">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/About'}>About</NavLink>
            <NavLink to={'/Service'}>Serive</NavLink>
            <NavLink to={'/Contact'}>Contact</NavLink>
            <button class="btnlogin-popup">
                <NavLink to={'/seller/register'}>Register</NavLink>
                 </button>
        </nav>
    </header>
    <div class="wrapper">
        <div class="form-box login">
            <h2>Login</h2>
            <form class="#">
                <div class="input-box">
                    <input type="text" required="required"
                    value={name} onChange={(e)=>setname(e.target.value)}/>
                <label>Username</label>
            </div>
                <div class="input-box">
                    <input type="password" required="required"
                    value={password} onChange={(e)=>setpassword(e.target.value)}/>
                <label>Password</label>
            </div>
                <button type="Submit" class="btn" onClick={collectData}><NavLink to={'Addselleritem'} >logIn</NavLink></button>
                <div class="login-reg">
                    <p>Don't have an account?<NavLink to={'/'} > Register </NavLink></p>
                </div>
            </form>
        </div>
    </div>

    </div>
    </>
  )
}
