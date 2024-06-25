import React from 'react'
import './navbar.css'
import UILogo from '/src/images/UofI_Main_Full.png'
import { Link } from 'react-router-dom'

/* Need to fix Image click to LandingPage on reload */

export const Navbar = () => {
  return (
    <>
      <div className='container'>
        <div className='navbar'>
        <a href='./'><img src={UILogo} alt='UI Logo'/></a>
          <nav>
            <ul>
              <li><Link className='my-tab' to='/'>Home</Link></li>
              <li><Link className='my-tab' to='/Projects'>Projects</Link></li>
              <li><Link className='my-tab' to='/AboutUs'>About Us</Link></li>
              <li><Link className='my-tab' to='/OurPeople'>Our People</Link></li>
              <li><Link className='my-tab' to='/RecentPublications'>Recent Publications</Link></li>
              <li><Link className='my-tab' to='/ContactUs'>Contact Us</Link></li>
            </ul>
          </nav>
          <input className='search' placeholder='...search'></input>
        </div>
      </div>
    </>
  )
}
