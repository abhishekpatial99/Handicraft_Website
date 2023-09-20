import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Showmore from './Showmore'


export default function Viewmore() {
  return (
    <>
         <Navbar />
    <h1 class="hp">HIMACHAL PRADESH</h1>
     <div class="main">
        <div class="first">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, error!</p>
       <NavLink to={'/Showmore'}><button>More+</button></NavLink>
    </div>
    <div class="first1"> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, laboriosam. </p>
        <NavLink to={'/Showmore'}><button>More+</button></NavLink>
    </div> 
    <div class="second">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, error!</p>
        <NavLink to={'/Showmore'}><button>More+</button></NavLink>
    </div> 
    <div class="second1">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, error!</p>
        <NavLink to={'/Showmore'}><button>More+</button></NavLink>
    </div> 
    </div>
    <hr/>
    <div class="min">
    <h1 class="hp">JAMMU KASHMIR</h1>
    <div class="main2">
    <div class="third">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nihil?</p>
        <NavLink to={''}><button>More+</button></NavLink>
    </div>
<div class="fourth">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nihil?</p>
    <NavLink to={''}><button>More+</button></NavLink>
</div>
<div class="third1">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nihil?</p>
    <NavLink to={''}><button>More+</button></NavLink>
</div>
<div class="fourth1">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nihil?</p>
<NavLink to={''}><button>More+</button></NavLink>
</div>
</div>
<hr/>
<h1 class="hp">PUNJAB</h1>
<div class="main3">
        <div class="fifth">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, error!</p>
            <NavLink to={''}><button>More+</button></NavLink>
        </div>  
        <div class="sixth">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nihil?</p>
            <NavLink to={''}><button>More+</button></NavLink>
        </div>  
        <div class="fifth1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, error!</p>
            <NavLink to={''}><button>More+</button></NavLink>
        </div>  
        <div class="sixth1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nihil?</p>
            <NavLink to={''}><button>More+</button></NavLink>
        </div>
    </div>
    <hr/>
    <h1 class="hp">RAJASTHAN</h1>
    <div class="main4">
        <div class="seventh">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nihil?</p>
            <NavLink to={''}><button>More+</button></NavLink>
        </div>
            <div class="eight">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nihil?</p>
           <NavLink to={''} ><button>More+</button></NavLink>
            </div> 
            <div class="seventh1">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nihil?</p>
                <NavLink to={''}><button>More+</button></NavLink>
            </div>
                <div class="eight1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nihil?</p>
                    <NavLink to={''}><button>More+</button></NavLink>
                </div> 
    </div>
    <hr/>
</div>
        </>
  )
}
