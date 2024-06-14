import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Body } from './Body'

export const PageLayout = () => {
  return (
    <>
        <div>
            <h2>Website Demo</h2>
            <Navbar/>
            <Body/>
            <Footer/>
        </div>
    </>
  )
}
