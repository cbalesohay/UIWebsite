import React, { useState } from 'react'
import { DesktopViewNavbar } from './DesktopViewNavbar/DesktopViewNavbar.jsx'
import { MobileViewNavbar } from './MobileViewNavbar/MobileViewNavbar.jsx'
import './navbar.css'

export const NavbarTop = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 1050;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', () => setWidth(window.innerWidth))

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [])

  return (
    <>
      {(width < breakpoint) ?
      <MobileViewNavbar/>
      :
      <DesktopViewNavbar/>
    }
    </>
  )
}