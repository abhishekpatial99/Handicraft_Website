import React, { useState } from 'react'
import Navbar from '../Navbar'
import { NavLink } from 'react-router-dom'

export default function Register1() {
  const [fname, setfname] =useState('')
  const[lname, setlname] =useState('')
  const[email, setemail]=useState('')
  const[contact,setcontact]=useState('')
  const [address, setaddress]=useState('')
  const [password, setpassword]=useState('')
  const[confirmpassword,setconfirmpassword]=useState('')
  const[zip,setzip]= useState('')
  const collectData =async()=>{
    console.log(fname,lname,email,address,password,confirmpassword,zip)
    let result = await fetch('http://localhost:24111/',{
      method:'POST',
      body:JSON.stringify({fname,lname,email,address,password,confirmpassword,zip}),
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
 <div class="container-lg">
<div class="row-justify-content-center">
<div class="col-lg-12">
<div className='reg34'>
<div class="card shadow-lg border-0 rounded-lg mt-6">
<div class="card-header">
<hr /> 
<h3 class="text-center font-weight-light my-4">Create Account</h3></div>
<div class="card-body">
<form action="/Register1" method="POST">
<div class="row mb-3">
<div class="col-md-6">
<div class="form-floating mb-3 mb-md-0">
<input class="form-control" id="fname" name="fname" type="text" placeholder="Enter your first name"
 required value={fname} onChange={(e) => setfname(e.target.value)} />
<label for="inputFirstName">First name</label>
</div>
</div>
                                            
<div class="col-md-6">
<div class="form-floating">
<input class="form-control" id="lname" name="lname" type="text"
 placeholder="Enter your last name" required  value={lname} onChange={(e) => setlname(e.target.value)}/>
<label for="inputLastName">Last name</label>
</div>
</div>
</div>


<div class="form-floating mb-3">
<input class="form-control" id="email" name="email" type="email"
 placeholder="abhishekpatial@gmail.com" required value={email} onChange={(e) => setemail(e.target.value)}  />
<label for="inputEmail">Email address</label>
</div>


<div class="form-floating mb-3">
<input class="form-control" id="contact" name="contact" type="text" 
placeholder="891****328" required pattern="[0-9]{10}" title="10 numeric characters only"  maxlength="10"  value={contact} onChange={(e) => setcontact(e.target.value)}/>
<label for="inputcontact">Contact Number</label>
</div> 
<div class="row mb-3">
<div class="col-md-6">
<div class="form-floating mb-3 mb-md-0">
<input class="form-control" id="password" name="password" type="password" placeholder="Create a password" 
pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="at least one number and one uppercase and lowercase letter, and at least 6 or more characters" required 
value={password} onChange={(e) => setpassword(e.target.value)}/>
<label for="inputPassword">Password</label>
</div>
</div>
                                            

<div class="col-md-6">
<div class="form-floating mb-3 mb-md-0">
<input class="form-control" id="confirmpassword" name="confirmpassword" type="password" 
placeholder="Confirm password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" 
title="at least one number and one uppercase and lowercase letter, and at least 6 or more characters" required 
value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)} />
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


<div class="mt-4 mb-0">
<div class="d-grid"><button type="submit" class="btn btn-primary btn-block" name="submit"onClick={collectData} >Create Account</button></div>
</div>
</form>

</div>
</div>
<div class="card-footer text-center py-3">
<div class="small"><NavLink to={'/Login'}>Have an account? Go to login</NavLink></div>
<div class="small"><NavLink to={'/'}>Back to Home</NavLink></div>
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
