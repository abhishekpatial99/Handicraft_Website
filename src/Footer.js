import React from 'react'
import {NavLink} from 'react-router-dom'

import img from './Img/myrlene-numa-SnITZTTeJVE-unsplash.jpg'
export default function Footer() {
  return (
    <>
    <div className='foot23'>
    < div class= "footercol-1" >
     <footer class="footer-area">
        <div class="footer-widget-area">
            <div class="container container-default custom-area">
                <div class="row">
                    <div class="col-3 col-sm-5 col-md-0 col-lg-3 col-custom">
                        <div class="single-footer-widget m-1">
                            <div class="footer-logo">
                                <NavLink to={'/'}>
                                    <img src={img} alt="Logo Image" height={50} width={150}/>
                                </NavLink>
                            </div>
                            <p class="desc-content">Lorem Khaled Ipsum is a major key to success. To be successful you’ve got to work hard you’ve got to make it.</p>
                            <div class="social-links">
                                <ul class="d-flex">
                                    <li>
                                        <a class="rounded-circle" href="#" title="Facebook">
                                            <i class="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="rounded-circle" href="#" title="Twitter">
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="rounded-circle" href="#" title="Linkedin">
                                            <i class="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="rounded-circle" href="#" title="Youtube">
                                            <i class="fa fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="rounded-circle" href="#" title="Vimeo">
                                            <i class="fa fa-vimeo"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2 col-custom">
                        <div class="single-footer-widget">
                            <h2 class="widget-title">Info</h2>
                            <ul class="widget-list">
                                <li><NavLink to={'/'}>Our Company</NavLink></li>
                                <li><NavLink to={'/'}>Contact Us</NavLink></li>
                                <li><NavLink to={'/'}>Our Services</NavLink></li>
                                <li><NavLink to={'/'}>Why We?</NavLink></li>
                                <li><NavLink to={'/'}>Careers</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 col-lg-2 col-custom">
                        <div class="single-footer-widget">
                            <h2 class="widget-title">Quicklink</h2>
                            <ul class="widget-list">
                                <li><NavLink to={'/'}>About</NavLink></li>
                                <li><NavLink to={'/'}>Blog</NavLink></li>
                                <li><NavLink to={'/'}>Shop</NavLink></li>
                                <li><NavLink to={'/'}>Cart</NavLink></li>
                                <li><NavLink to={'/'}>Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 col-lg-2 col-custom">
                        <div class="single-footer-widget">
                            <h2 class="widget-title">Support</h2>
                            <ul class="widget-list">
                                <li><NavLink to={'/'}>Online Support</NavLink></li>
                                <li><NavLink to={'/'}>Shipping Policy</NavLink></li>
                                <li><NavLink to={'/'}>Return Policy</NavLink></li>
                                <li><NavLink to={'/'}>Privacy Policy</NavLink></li>
                                <li><NavLink to={'/'}>Terms of Service</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 col-lg-3 col-custom">
                        <div class="single-footer-widget">
                            <h2 class="widget-title">See Information</h2>
                            <div class="widget-body">
                                <p>123, ABC, Road ##, Main City, Your address goes here.<br/>Phone: 8918841328<br/>Email:abhishekpatial99@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright-area">
            <div class="container custom-area">
                <div class="row">
                    <div class="col-12 text-center col-custom">
                        <div class="copyright-content">
                            <p>Copyright © 2023 <NavLink to={'/'} title="Abhishek Patial">HandiCraft</NavLink> | Built with&nbsp;<strong>HandiCraft</strong>&nbsp;by <NavLink to={'/'} title="Abhishek Patial">HandiCraft</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
       
    </div>
    </div>
    </>
  )
}

