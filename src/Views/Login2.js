import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
    <>
<div class="mainlog">
    <div class="wrapper">
        <div class="form-box login">
            <h2>Login</h2>
            <form class="#">
                <div class="input-box">
                    <input type="text" required="required"/>
                <label>Username</label>
            </div>
                <div class="input-box">
                    <input type="password" required="required"/>
                <label>Password</label>
            </div>
           
                <button type="Submit" class="btn"><NavLink to={'#'} >logIn</NavLink></button>
                
            </form>
        </div>
    </div>

    </div>


    </>
  )
}
