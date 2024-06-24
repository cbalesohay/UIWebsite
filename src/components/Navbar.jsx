import React from 'react'
import './navbar.css'
import UILogo from '/src/images/UofI_Main_Full.png'

/* Need to fix Image click to LandingPage on reload */

export const Navbar = () => {
  return (
    <>
      <div className='container'>
        <div className='navbar'>
        <img src={UILogo} alt='UI Logo'/>
          <nav>
            <ul>
              <li><a>Home</a></li>
              <li><a>Projects</a></li>
              <li><a>About Us</a></li>
              <li><a>Our People</a></li>
              <li><a>Recent Publications</a></li>
              <li><a>Contact Us</a></li>
            </ul>
          </nav>
          <input className='search' placeholder='...search'></input>
        </div>
      </div>
    </>
  )
}
