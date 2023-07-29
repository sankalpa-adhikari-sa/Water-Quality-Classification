import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'
import {AiFillGithub} from 'react-icons/ai'
function Navbar() {
  return (
    <div className='NavbarWrapper'>
      <div className='InternalLinks'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/prediction'>Prediction</NavLink>
      </div>
      <div className='links'>
          <a href='https://github.com/sankalpa-adhikari-sa/Water-Quallity-Classification' target="_blank" rel="noopener noreferrer"><AiFillGithub fontSize={30} color='white'/></a>
      </div>
    </div>
  )
}

export default Navbar