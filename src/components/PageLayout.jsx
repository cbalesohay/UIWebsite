import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import './pagelayout.css'


export const PageLayout = ({children}) => {
  return (
    <>
      <div className='page'>
          <Navbar/>
          {children}
          <Footer/>
      </div>
    </>
  )
}
