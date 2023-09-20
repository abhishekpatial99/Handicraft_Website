import React from 'react'
import qr from './Img/qr.jpg'
import pay from './Img/paypal.jpg'
import {NavLink} from 'react-router-dom'
import Navbar from './Navbar'
export default function Googlepay() {
    

  return (
    <>
    <Navbar/>
    
     <div className='paymt21'>
        <div class="text-center">
            <div class="bg-success pb-1 pt-1">
                <div className='goo'>
<h2>GPay</h2>

<p>accepted here</p>
</div>
</div>
<hr/>

</div>
<div class="text-center">
    <h4>Your Bussiness Name</h4>
    <h6>8918841328</h6>
    <img src={qr} alt="" />
    <h6>abhishek@sbiyhhh</h6>
<img src={pay} alt=""/>

</div>
<hr/>

<button class="w-100 btn btn-primary btn-lg" type="submit" onClick={()=>{
    alert.show('Payment successful')
}}><NavLink to={'/'}>Done</NavLink></button>
    </div>

    
    
    </>
  )
}
