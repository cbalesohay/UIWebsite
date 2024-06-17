import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Body } from './Body'
import './pagelayout.css'

export const PageLayout = () => {
  return (
    <>
      <div className='page'>
          <Navbar/>
          <Body/>
          <Footer/>
      </div>
    </>
  )
}
