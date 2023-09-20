import React from 'react'
import { NavLink } from 'react-router-dom';
import img1 from './Img/logocraft.png'

export default function(Navbar) {
  return (
    <div>
  <header>
        <div class="logo">
        <img src={img1} width={90} height={60}/> 
    </div>
        <div class="wrapper1">
          <ul>
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/About'}>About</NavLink></li>
           <li><NavLink to={'/'}>Items</NavLink>
           <div class="sub-menu">
            <ul>
              <li class="hover"><NavLink to={'/Viewmore'}>Himachal</NavLink>
              <div class="sub-menu1">
                <ul>
                  <li><NavLink to={''}>Hamirpur</NavLink></li>
                  <li><NavLink to={''}>Mandi</NavLink></li>
                  <li><NavLink to={''}>Chamba</NavLink></li>
                  <li><NavLink to={''}>Shimla</NavLink></li>
                </ul>
              </div>
              </li>
              <li class="hover"><NavLink to={'/Viewmore'}>Punjab</NavLink>
              <div class="sub-menu1">
                <ul>
                  <li><NavLink to={''}>Amritsar</NavLink></li>
                  <li><NavLink to={''}>Bathinda</NavLink></li>
                  <li><NavLink to={''}>Fategarh</NavLink></li>
                  <li><NavLink to={''}>Jalandhar</NavLink></li>
                </ul>
              </div></li>
              <li class="hover"><NavLink to={'/Viewmore'}>Jammu</NavLink>
              <div class="sub-menu1">
                <ul>
                  <li><NavLink to={''}>Reasi</NavLink></li>
                  <li><NavLink to={''}>Ganderbal</NavLink></li>
                  <li><NavLink to={''}>Shopian</NavLink></li>
                  <li><NavLink to={''}>Srinagar</NavLink></li>
                </ul>
              </div></li>
              <li class="hover"><NavLink to={'/Viewmore'}>Rajasthan</NavLink>
              <div class="sub-menu1">
                <ul>
                  <li><NavLink to={''}>Jaipur</NavLink></li>
                  <li><NavLink to={''}>Jodhpur</NavLink></li>
                  <li><NavLink to={''}>Jhunjhunum</NavLink></li>
                  <li><NavLink to={''}>Udaipur</NavLink></li>
                </ul>
              </div></li>
              <li class="hover"><NavLink to={'/Viewmore'}>Mizoram</NavLink> 
              <div class="sub-menu1">
                <ul>
                  <li><NavLink to={''}>Lawngtlai</NavLink></li>
                  <li><NavLink to={''}>Aizawl</NavLink></li>
                  <li><NavLink to={''}>Mamit</NavLink></li>
                  <li><NavLink to={''}>Saiha</NavLink></li>
                </ul>
              </div>
              </li>
            </ul>
           </div>
           </li>
            <li>
            <NavLink to={'/Service'}>Service</NavLink></li>
            <li>
              <NavLink to={'/Contact'}>Contact</NavLink>
            </li>
            </ul>
            </div>
            <div class="item-no">
                <input type="search" placeholder="Search"/>
        </div>
                <div>
            < NavLink to={'/Login'}><button class="item-yes">LogIn</button></NavLink>
            <NavLink to={'/Register'}><button class="item-yes">Register</button></NavLink>
    </div>
    </header>
  </div>
  );
}
