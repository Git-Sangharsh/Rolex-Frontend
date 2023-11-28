import React from 'react'
import './Footer.css'

import footerBg from '../assets/footer-bg-rolex.jpg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-wrapper">
            <img src={footerBg} alt="" className='footerbg' />
        </div>
            <div className="footer-text">
                <h1 className='footer-header'>Discover our Perpetual Initiatives</h1>
            </div>
    </div>
  )
}

export default Footer