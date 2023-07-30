import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="#" target='_blank'><BsLinkedin/></a>
        <a href="#" target='_blank'><FaGithub/></a>
        <a href="#" target='_blank'><FaFacebook/></a>
    </div>
  )
}

export default HeaderSocial