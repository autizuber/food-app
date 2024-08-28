import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
     <div className='footer-content'>
        <div className='footer-left'>
          <img className='company-logo' src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ducimus ea quam, quidem nam quae veritatis sint perspiciatis. Animi nisi esse sed provident sapiente quae laboriosam rerum eveniet ab assumenda?</p>
          <div className='footer-socel-icon'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className='footer-center'>
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Delavery</li>
              <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+918446676067</li>
              <li>contact@Tomato.com</li>
            </ul>
        </div>
     </div>
     <hr></hr>
     <p className='copy'>copyright 2024 &copy; @Tomato.com All right Risever  </p>
    </div>
  )
}

export default Footer
