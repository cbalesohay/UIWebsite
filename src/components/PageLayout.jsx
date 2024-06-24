import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import './pagelayout.css'


export const PageLayout = ({children}) => {
  return (
    <>
      {/* Allows for a flexible and reusable design structure */}
      <div className='page'>
          <Navbar/>
          {children}
          <Footer/>
      </div>
    </>
  )
}
