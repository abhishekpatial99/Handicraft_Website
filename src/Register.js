import React,{ useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
export default function Register() {

const [firstName, setfirstName] =useState('')
const[lastName, setlastName] =useState('')
const[email, setemail]=useState('')
const[contact,setcontact]=useState('')
const [address, setaddress]=useState('')
const [password, setpassword]=useState('')
const[confirmpassword,setconfirmpassword]=useState('')
const[zip,setzip]= useState('')
const collectData =async()=>{
  console.log(firstName,lastName,email,contact,address,password,confirmpassword,zip)
  let result = await fetch('http://localhost:24112/',{
    method:'POST',
    body:JSON.stringify({firstName,lastName,email, contact,address,password,confirmpassword,zip}),
    headers:{
      'Content-Type' :'application/json'
    }
  })
  result= await result.json()
console.log(result);
}



  return (
    <>

    <Navbar />
    <div id="layoutAuthentication">
    <div id="layoutAuthentication_content">
     <div className="container-lg">
   <div className="row-justify-content-center">
    <div className='reg34'>
  <div className="col-lg-13">
  <div className="card shadow-lg border-0 rounded-lg mt-4">
   <div className="card-header">
<h2 align="center"></h2>
<hr /> 
<h3 className="text-center font-weight-light my-4">Create Account</h3></div>
  <div className="card-body">
<form action="/Register" method="post">

<div className="row mb-3">
<div className="col-md-6">
<div className="form-floating mb-3 mb-md-0">
<input className="form-control" id="firstName" name="firstName"
 type="text" placeholder="Enter your first name" 
 required value={firstName} onChange={(e) => setfirstName(e.target.value)} />
<label for="inputFirstName">First name</label>
</div>
</div>
                                                
<div className="col-md-6">
<div className="form-floating">
<input className="form-control" id="lastName" name="lastName" type="text" placeholder="Enter your last name"
 required value={lastName} onChange={(e) => setlastName(e.target.value)}/>
 <label for="inputLastName">Last name</label>
</div>
</div>
</div>


<div className="form-floating mb-3">
<input className="form-control" id="email" name="email" type="email" placeholder="abhishekpatial@gmail.com" 
required value={email} onChange={(e) => setemail(e.target.value)}/>
<label for="inputEmail">Email address</label>
</div>
 

<div className="form-floating mb-3">
<input className="form-control" id="contact" name="contact" type="tel" 
placeholder="891****328" required pattern="[0-9]{10}" title="10 numeric characters only"  maxlength="10"
value={contact} onChange={(e) => setcontact(e.target.value)}/>
<label for="inputcontact">Contact Number</label>
</div> 
<div className="row mb-3">
<div className="col-md-6">
 <div className="form-floating mb-3 mb-md-0">
<input className="form-control" id="password" name="password" type="password" placeholder="Create a password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" 
title="at least one number and one uppercase and lowercase letter, and at least 6 or more characters" required
value={password} onChange={(e) => setpassword(e.target.value)} />
<label for="inputPassword">Password</label>
</div>
</div>
                                                

<div className="col-md-6">
<div className="form-floating mb-3 mb-md-0">
<input className="form-control" id="confirmpassword" name="confirmpassword" type="password" placeholder="Confirm password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="at least one number and one uppercase and lowercase letter, and at least 6 or more characters" required 
value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)}/>
<label for="inputPasswordConfirm">Confirm Password</label>
</div>
</div>
</div>
<div className="row mb-3">
<div className="col-md-6">
 <div className="form-floating mb-3 mb-md-0">
<input className="form-control" id="address" name="address" type="text" placeholder="Address"  required 
value={address} onChange={(e) => setaddress(e.target.value)}/>
<label for="Address">Address</label>
</div>
</div>
                                                

<div className="col-md-6">
<div className="form-floating mb-3 mb-md-0">
<input className="form-control" id="zip" name="zip" type="number" placeholder="Zip code"  required 
value={zip} onChange={(e) => setzip(e.target.value)}/>
<label for="Zipcode">Zip code</label>
</div>
</div>
</div>                            

<div className="mt-4 mb-0">
<div className="d-grid"><button type="submit" className="btn btn-primary btn-block"onClick={collectData} name="Register" id= "Register">Create Account</button></div>
</div>
</form>
</div>
<div className='reg23'>
 <div className="card-footer text-center py-3">
 <div className="large"><NavLink to={'/Login'}>Have an account? Go to login</NavLink></div>
  <div className="large"><NavLink to={'/'}>Back to Home</NavLink></div>
  <div className='large'><NavLink to={'/Changepass'}>Change Password</NavLink></div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>  

  </>
  )
  }
  