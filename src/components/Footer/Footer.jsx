import React, {useState} from 'react'
import { DesktopViewFooter } from './DesktopViewFooter/DesktopViewFooter';
import { MobileViewFooter } from './MobileViewFooter/MobileViewFooter';
import './footer.css'


export const Footer = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 1050;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', () => setWidth(window.innerWidth))

    return () => window.removeEventListener('resize', handleWindowResize)
  })
  return (
    <>
    {(width < breakpoint) ?
    <MobileViewFooter/>
    :
    <DesktopViewFooter/>
  }
    </>
  );
}
