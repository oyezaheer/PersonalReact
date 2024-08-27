import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://leetcode.com/u/oyezaheer/" target="_blank" rel="noreferrer"><SiLeetcode /></a>
        <a href="https://www.linkedin.com/in/zaheer-khan-3b222019b" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/oyezaheer" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://instagram.com/oyezaheer" target="_blank" rel="noreferrer"><BsInstagram /></a>
      
    </div>
  )
}

export default HeaderSocials
