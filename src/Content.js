import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import img1 from './Img/pexels-toa-heftiba-şinca-1194397.jpg'
import img2 from './Img/tanaphong-toochinda-WddCult7llk-unsplash.jpg'
import img3 from './Img/pxfuel (8).jpg'
import img4 from './Img/pxfuel (3).jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Location from './Location'

export default function Content() {
    useEffect(()=>{
        AOS.init();
        AOS.refresh();
      },[])
  return (
    <div>

        <div class="content">
    <div class="content1">
        <div class="content2">
                <h1>CRAFT <span>SHOP</span></h1>
               <p>"Art is not a handicraft,<span>It is the transmission of feeling the artist has Experienced."</span></p>
               <NavLink to={'/Viewmore'}><button>View More</button></NavLink>
               </div>
             </div>
             </div>
   <div class="container">
   <div class="style" data-aos="fade-down">
                 <h1>Style</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, aperiam!</p>
                 <NavLink to={''}><button>View More</button></NavLink>
             </div>
   <div class="brand" data-aos="fade-down">
       <h1>Brand</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, aperiam!</p>
       <NavLink to={''}><button>View More</button></NavLink>
             </div>
   <div class="design" data-aos="fade-down">
               <h1>Design</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, aperiam!</p>
            <NavLink to={'/Viewmore'}>  <button>View More</button></NavLink>
                     </div>
   <div class="fashion" data-aos="fade-down">
                       <h1>Fashion</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, aperiam!</p>
                     <NavLink to={''}><button>View More</button></NavLink>
                             </div>
             </div>
             <div class="container1">
               <div class="cont">
            <h1>A New Way To Create For You</h1>
                   <NavLink to={''}><button>View More</button></NavLink>
                   </div>
             </div>
              <div class="make">
               <h2>Make Your Style Today</h2>
               <div class="make2">
                   <div class="make1">
               <img src={img1} height="400px" width="600px"/>
               <h3>Ideas</h3>
               <p>Projects</p>
               <img src={img2} height="400px" width="600px"/>
               <h3>Skills</h3>
               <p>Portfolio</p>
               </div>
               <div class="make3">
               <img src={img3} height="400px" width="600px"/>
               <h3>Teams</h3>
               <p>Projects</p>
               <img src={img4} height="400px" width="600px"/>
               <h3>Works</h3>
               <p>Portfolio</p>
               </div>
           </div>
               <h1>Brand History</h1>
               <p class="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque totam, accusantium adipisci quasi distinctio dolor laudantium debitis voluptatum ipsum molestias! ipsum dolor sit amet. ipsum dolor sit amet consectetur adipisicing elit. Fugit, corporis! Perspiciatis, odio? ipsum dolla trnexplicabo porro eveniet.</p>
       </div>
       <div class="abhishek">
           <h1 class="abhi1">A New Way To</h1>
           <h1 class="abhi2">Create Design</h1>
       </div>
       <div class="create">
           <div class="create1" data-aos="flip-left" >
               <h1>Create Your</h1>
               <h1>Unique Style</h1>
               <NavLink to={'/seller'}><button>Login</button></NavLink>
               <NavLink to={'/seller/register'}><button>Register</button></NavLink>
               
           </div>
           <div class="create2">
               <p>Lorem ipsum dolor sit amet, ,</p>
           <p>consectetur adipisicing elit.</p>
           <p>Atque, doloremque at amet debitis,</p>
           <p> perspiciatis perferendis mollitia soluta necessitatibus tenetur qui</p>
           <p>impedit consequuntur sequi non eos eum.</p>
           <p>Laudantium quia ratione necessitatibus?</p>
           </div>
       </div>
       <div class="attch">
           
           </div>
           <div class="clients">
            <h1>OUR CLIENTS</h1>
            <div class="client1">
            <div class="client2">
            <h3><a href=''><i class="fa-brands-google fa a-bounce fa-large"></i></a>GOOGLE</h3>
            <h3>AMAZON</h3>
            <h3>FLIPKART</h3></div>
            <div class="client2">
            <h3>COMFORT ZONE</h3>
            <h3>ORGANIC</h3>
            <h3>STYLE</h3></div>
            <div class="client2">
            <h3>CUPCKAE</h3>
            <h3>COMFORT ZONE</h3>
            <h3>STYLE</h3>
        </div>
    
            </div>
           </div>
           <Location/>
           <div class="aboutshop">
            <h1>About Shop</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem quaerat blanditiis eaque dolorum sequi ad hic facere at voluptates aliquid adipisci, animi excepturi perspiciatis quisquam in doloremque perferendis architecto. Cumque aut corrupti dolorem nemo facilis fuga recusandae atque suscipit amet aliquam? Blanditiis aliquam ratione vero? Nobis eum omnis placeat illum.</p>
             <div class="support">
             <h3>More Info:<span>Abhishekpatial999@gmail.com</span></h3>
             <h3>Category:<span>Creative</span></h3>
             <h3>Date:<span>MAY 01, 2023</span></h3>
             <h3>Share:<span>Telegram</span></h3>
             </div>
              </div>
              <div className='limited'>
                <h2>Limited Time Offer</h2>
                <div className='special'>
                    <h3>Special Edition</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, ut. ipsum dolor sit amet consectetur adipisicing elit. Vero, ex!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sapiente magnam id vero perspiciatis explicabo placeat. Ad nesciunt est adipisci.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, non.</p>
                   <div className='buy1'>  
                    <h4>Buy This Handicraft item At 20% Discount, Use </h4>
                    <h4>Code OFF20</h4>
                  </div>
                    <div className='buy2'>
                    <button className='shopnow'>Shop Now</button>
                    </div>
                    
                </div>
              </div>
       <div class="social">
        <div class="social1">
           <h1>Social Networks</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto unde tempore iure. Veritatis aliquam consequuntur quis,</p>
            <h4>gmail:-abhishekpatial999@gmail.com</h4>
            <h4>Facebook</h4>
            <h4>Whatsapp</h4>
            <h4>Telegram</h4>
            <h4>Contact number</h4>
            </div>
       </div>
       <div class="team">
    <h1>
        Our Team
    </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque dolorem similique. Nisi natus delectus error. Tempora necessitatibus repellendus expedita corrupti est! Veniam, odit reprehenderit atque, assumenda illum libero deleniti, quisquam pariatur non doloremque praesentium quibusdam repellat? Aperiam vitae consequatur fuga ipsa dolorum, dolor quasi et rerum? Non, quia itaque.</p>
</div>
<div class="teamm">
    <div>
<img src={img3} width={300} height={300}/>
<h3>Abhishek Patial</h3>
<h4>Hamirpur</h4>
<h4>Abhishekpatial***2gamil.com</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eius alias sint, debitis eos quasi tempore soluta repellat labore officia?</p>
</div>
<div>
    <img src={img3} width={300} height={300}/>
    <h3>Abhishek Patial</h3>
    <h4>Hamirpur</h4>
    <h4>Abhishekpatial***2gamil.com</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorem alias harum atque eligendi eos in voluptas consectetur excepturi incidunt?</p>
</div>
</div>
<div class="teammm">
    <img src={img3} width={300} height={300}/>
    </div>
    <div class="team3">
    <h3>Abhishek Patial</h3>
    <h4>Hamirpur</h4>
    <h4>Abhishekpatial***2gamil.com</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorem alias harum atque eligendi eos in voluptas consectetur excepturi incidunt?</p>
    </div>
    </div>

  )
}
