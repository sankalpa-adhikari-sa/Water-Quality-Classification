import React from 'react'
import './Home.css'
import {ReactComponent as Water} from '../../assets/Ellipse 1.svg'
import Card from '../../UI components/card'
import {FaKaggle} from 'react-icons/fa'
import DataUsedCard from '../../UI components/DataUsedCard'
import Footer from '../../UI components/Footer'
import { NavLink, Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className='HomeWrapper'>
        <div className="textContainer">
          <h3 className="heading">From Source to Tap :</h3>
          <span className='SubHeading'>Water Quality</span>
          <span>Everyone has right to access clean water</span>
        </div>
        <Water className='Image1'/>
        <p className='Question'>Did you Knew ?</p>
        <Card data='1.2 M' header="Deaths Each Year"/>
        <Card data='6 %' header="Deaths In low income Countries as Results of Unsafe Water Resources "/>
        <Card data='1 in 4' header="People have no access to Clean Water"/>
      </div>
      <div className='HomeWrapper2'>
        <div className="Ribbon">
          <h3 className='Header2'>Is your Water Potable ?</h3>
          <Link to="/prediction" className="CheckPotable">Check Now</Link>
        </div>
        <div className="DataWrapper">
          <h2 className="DataHeader">Data We Used</h2>
          <div className="DataLink">
            <span>Here's the Link to Dataset</span>
            <a href='https://www.kaggle.com/datasets/adityakadiwal/water-potability' target="_blank" rel="noopener noreferrer"><FaKaggle className='KaggleIcon' color='White'/></a>
          </div>
          <DataUsedCard/>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home