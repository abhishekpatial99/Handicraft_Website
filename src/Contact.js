import React, { useState } from 'react'
import Navbar from './Navbar'

export default function Contact() {
  const [name,setname] =useState('')
  const [subject,setsubject]=useState('')
  const [Email,setEmail]=useState('')
  const [how,sethow]=useState('')
  const collectData =async()=>{
    console.log(name,subject,Email,how);
    let result=await fetch('http://localhost:24105/',{
        method:'POST',
        body:JSON.stringify({name,subject,Email,how}),
        headers:{
          'Content-Type' :'application/json'
        }
    })
    result =await result.json
    console.log(result);
  }
  return (
    <>
<Navbar />
<div className='all'>
<div className='all1'>
  <h1>Contact Us</h1>
</div>
    <div className="contact1"> 
        <div className="contact2">
        <input type="text" id="name" placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)}/>
        <input type="text" id="subject" placeholder="Subject"value={subject} onChange={(e)=>setsubject(e.target.value)}/>
        <input type="email" id="Email"placeholder="E-mail"value={Email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" id="how" placeholder="How can we help you?"value={how} onChange={(e)=>sethow(e.target.value)}/>
        <button id='submit'onClick={collectData}>Submit</button>
    </div>
    <div className="conatct3">
<h3>Headquarter</h3>
<p>Hamirpur</p>
<p>Himachal Pradesh</p>
<p> Phone No.8918841328</p>
<p>www.craftshop.com</p>
<h3>Hamirpur Branch</h3>
<p>Craftshop Pvt ltd.</p>
<p>Greater Noida</p>
<p>HAMIRPUR-176045</p>
<p>Phone No. +918918841328</p>
<p>www.craftshop.com</p>
    </div>
    </div>
    </div>
    </>
  )
}
