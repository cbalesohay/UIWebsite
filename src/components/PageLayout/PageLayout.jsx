import React from 'react'
import { NavbarTop } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import './pagelayout.css'


export const PageLayout = ({children}) => {
  return (
    <>
      {/* Allows for a flexible and reusable design structure */}
      <NavbarTop/>
      {children}
      <Footer/>
    </>
  )
}