import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const footer = () => {
  return (
    
    <footer>
      <a href='#' className='footer_logo'>Vandana Singh</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#Contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href='https://m.facebook.com/vandana.singhrajpoot.3?_rdr'><FaFacebookF/></a>
        <a href='https://www.instagram.com/_vandana_singh_rajput/?igshid=ZDdkNTZiNTM%3D'><FiInstagram/></a>
        <a href='https://twitter.com'><IoLogoTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Vandana Portfolio. All rights reserved </small>
      </div>
    </footer>
  )
}

export default footer