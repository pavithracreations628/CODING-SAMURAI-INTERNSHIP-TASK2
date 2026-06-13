import React from 'react'
import './Footer.css'
import shopping from '../Assets/shopping.png'
import instagram_icon from '../Assets/instagram.png'
import pinterest_icon from '../Assets/pinterest.png'
import whatsapp_icon from '../Assets/whatsapp.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={shopping} alt=''/>
            <p>TrendEra Emporium</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt=""/>
            </div>
            <div className="footer-icons-container">
                <img  src={pinterest_icon} alt=""/>
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt=""/>
            </div>
        </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
