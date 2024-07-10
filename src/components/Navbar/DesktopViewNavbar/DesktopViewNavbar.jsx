import React from 'react'
import UILogo from '/src/images/UofI_Main_Full.png'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './desktopviewnavbar.css'

export const DesktopViewNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" style={{height: '60px', width: 'auto', padding: '0px'}}>
        <Container fluid>
          <Navbar.Brand><Link to={'/'} className='uinavlogo'><img src={UILogo} alt='UI Logo'/></Link></Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand><Link className='nav-link active' to='/'>Home</Link></Navbar.Brand>
          <Navbar.Brand><Link className='nav-link active' to='/Projects'>Projects</Link></Navbar.Brand>
          <Navbar.Brand><Link className='nav-link active' to='/AboutUs'>About Us</Link></Navbar.Brand>
          <Navbar.Brand><Link className='nav-link active' to='/Team'>Our Team</Link></Navbar.Brand>
          <Navbar.Brand><Link className='nav-link active' to='/RecentPublications'>Recent Publications</Link></Navbar.Brand>
          <Navbar.Brand><Link className='nav-link active' to='/ContactUs'>Contact Us</Link></Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}


// <Navbar expand="lg" className="bg-body-tertiary " style={{margin: '0'}}>
//         <Container>
//           <Navbar.Brand><a href='./'><img src={UILogo} alt='UI Logo'/></a></Navbar.Brand>
//         </Container>
//         <Container >
//           <Container className='d-flex align-items-center'>
//             <Navbar.Brand><Link className='nav-link active' to='/'>Home</Link></Navbar.Brand>
//           </Container>
//           <Container className='d-flex align-items-center'>
//             <Navbar.Brand><Link className='nav-link active' to='/Projects'>Projects</Link></Navbar.Brand>
//           </Container>
//           <Container className='d-flex align-items-center'>
//             <Navbar.Brand><Link className='nav-link active' to='/AboutUs'>About Us</Link></Navbar.Brand>
//           </Container>
//           <Container className='d-flex align-items-center'>
//             <Navbar.Brand><Link className='nav-link active' to='/Team'>Our Team</Link></Navbar.Brand>
//           </Container>
//           <Container className='d-flex align-items-center'>
//             <Navbar.Brand><Link className='nav-link active' to='/RecentPublications'>Recent Publications</Link></Navbar.Brand>
//           </Container>
//           <Container className='d-flex align-items-center'>
//             <Navbar.Brand><Link className='nav-link active' to='/ContactUs'>Contact Us</Link></Navbar.Brand>
//           </Container>
//         </Container>
//       </Navbar>