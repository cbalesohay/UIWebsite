import React from 'react'
import './navbar.css'

export const Navbar = () => {
  return (
    <>
      <div className='container'>
        <div className='navbar'>
          <h2>Website Demo</h2>
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
          <input placeholder='search'></input>
        </div>
      </div>
    </>
  )
}
