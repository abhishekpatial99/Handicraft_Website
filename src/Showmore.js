import React from 'react'
import { NavLink } from 'react-router-dom'
import img7 from './Img/alexander-grey-TZZwC_xsClY-unsplash.jpg'
import img8 from './Img/alice-dietrich-FwF_fKj5tBo-unsplash.jpg'
import img9 from './Img/arnel-hasanovic-MNd-Rka1o0Q-unsplash.jpg'
import img10 from './Img/brooke-lark-cqOZcjOOmRw-unsplash.jpg'
import Checkout from './Checkout'
export default function Showmore() {

  return (
    <>
    
    <div className="main20">
    <div className="slider">
        <img src={img7} alt="" height="400" width="300px"/>
    </div>
    <div className="slider">
        <img src={img8} alt=""height="400" width="300px"/>
    </div> 
    <div className="slider">
        <img src={img9} alt=""height="400" width="300px"/>
    </div>
    <div className="butt12"><button><NavLink to={'/Checkout'}>Add to cart</NavLink></button></div>
    <div className="button13"><button><NavLink to={'/Checkout'}>Buy</NavLink></button></div>
    </div>
    <div className="para">
        <h2> Product Details </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, esse.</p>
        <div className="details">
            <div><h4>country of origin</h4></div>
            <div className="ind">India</div>
        </div>
    </div>
    <div className="picture">
        <h3>Product image gallery</h3>
        <img src={img7}/>
        <img src={img8}/>
        <img src={img9}/>
</div>
<div className="picture"><h3>Product Description</h3>
<img src={img10}/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, explicabo.</p>

</div>
<div className="info">
    <h3>Product Information</h3>
    <table>
        <tr>
            <td>Manufacture:-</td>
            <td></td>
            </tr>
            <tr>
                <td>Country of origin:-</td>
                <td>India</td>
            </tr>
            <tr>
                <td>item model number:-</td>
                <td>8918841329</td>
            </tr>
    </table>
</div>
    
    
    
    
    </>
  )
}
