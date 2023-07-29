import React from 'react'
import "./Footer.css"
import { FaGithub, FaKaggle, FaLinkedinIn } from 'react-icons/fa';
import {BiLogoGmail} from 'react-icons/bi';
import {FaUserSecret} from 'react-icons/fa';
function Footer() {
  return (
    <div className='FooterWrapper'>
      <div className="Intro">
        <span className='IntroHeader'>Hello I am,</span>
        <div className="Info">
          <span className='Name'> <FaUserSecret fontSize={20}/>Sankalpa Adhikari</span>
          <span className='Mail'> <BiLogoGmail fontSize={20}/>Sankalpaadhikari.sa@gmail.com</span>
        </div>
      </div>
      <div className="FindMe">
        <div className="FindMeHeader">I am also in,</div>
        <span className="SocialHandles">
          <a href='https://www.linkedin.com/in/sankalpa-adhikari-b78823238' target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='Handle' fontSize={40}/></a> 
          <a href='https://github.com/sankalpa-adhikari-sa' target="_blank" rel="noopener noreferrer"><FaGithub className='Handle' fontSize={30}/></a>
          <a href='https://www.kaggle.com/sankalpaadhikari' target="_blank" rel="noopener noreferrer"><FaKaggle className='Handle' fontSize={30}/></a>
        </span>

      </div>
    </div>
  )
}

export default Footer