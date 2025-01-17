import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src= {assets.logo } alt =''/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="footer-social-icons">
                    <a href="https://www.facebook.com/"><img src={assets.facebook_icon} alt="" /></a>
                    <a href="https://x.com/?mx=2"><img src={assets.twitter_icon} alt="" /></a>
                    <a href="https://www.linkedin.com/"><img src={assets.linkedin_icon} alt="" /></a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1(000)406-0818</li>
                    <li>owner@blackpanrestaurant.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 © BlackPanRestaurant.com-All Rights Reserved.</p>
    </div>
  )
}

export default Footer
