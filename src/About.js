import React, { useEffect } from 'react'
import Navbar from './Navbar'
import img14 from './Img/img00.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function About() {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  },[])
  return (
    <>
    <Navbar/>
    <div className='abot0'>
    <div className='abot'><h1>About</h1></div>
 <div class="abot1">
      <div class="about1">
       <div class="about2" data-aos="zoom-in">
   <h1>About US</h1>
   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
       </div>
   <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
   <img src={img14} alt="" height="350px"/>
   </div>
      </div>
   </div>
   
      <div class="about14">
   <div>
   <img src={img14} alt="" height="350px"/>
   </div>
   <div>
   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
       </div>
      </div>
   </div>
    </>
  )
}
