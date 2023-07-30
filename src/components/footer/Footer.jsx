import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>CRAM</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_social">
        <a href="#"><FaFacebook/></a>
        <a href="#"><FaGithub/></a>
        <a href="#"><SiGmail/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Egator Tutorials. All rights reserved</small>
      </div>
    </footer>
  )
}

export default footer