import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assests/me.png'
import HeaderSocial from './HeaderSocial'


const Header = () => {
  return (
    <header id='home'>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Rendon</h1>
        <h5 className='text-light'>Pag sa goal, dapat iwan pati pamilya</h5>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocial/>
        
        <div className='me'>
          <img src={Me} alt='me'/>
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header