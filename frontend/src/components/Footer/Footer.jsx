import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-con-left">
                    <img className='logo' src={assets.logo} alt="" />
                    <p>Made with ❤️ by the Food Delivery Team.Fast, fresh, and delivered to your door.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-con-center">
                    <h2>COMPANY</h2>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </div>
                <div className="footer-con-right">
                    <h2>GET IN TOUCH</h2>
                    <li>+1-212-456-7890</li>
                    <li>Contact us: support@fooddelivery.com</li>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>© 2025 Food Delivery Website. All rights reserved.</p>
        </div>
        
  )
}

export default Footer
