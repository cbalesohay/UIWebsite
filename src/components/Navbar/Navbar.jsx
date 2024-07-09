import React from 'react'
import './navbar.css'
import UILogo from '/src/images/UofI_Main_Full.png'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaSistrix } from "react-icons/fa6";




import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


export const NavbarTop = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary " >
        <Container>
          <Navbar.Brand><a href='./'><img src={UILogo} alt='UI Logo'/></a></Navbar.Brand>
        </Container>
        <Container >
          <Container className='d-flex align-items-center'>
            <Navbar.Brand><Link className='nav-link active' to='/'>Home</Link></Navbar.Brand>
          </Container>
          <Container className='d-flex align-items-center'>
            <Navbar.Brand><Link className='nav-link active' to='/Projects'>Projects</Link></Navbar.Brand>
          </Container>
          <Container className='d-flex align-items-center'>
            <Navbar.Brand><Link className='nav-link active' to='/AboutUs'>About Us</Link></Navbar.Brand>
          </Container>
          <Container className='d-flex align-items-center'>
            <Navbar.Brand><Link className='nav-link active' to='/Team'>Our Team</Link></Navbar.Brand>
          </Container>
          <Container className='d-flex align-items-center'>
            <Navbar.Brand><Link className='nav-link active' to='/RecentPublications'>Recent Publications</Link></Navbar.Brand>
          </Container>
          <Container className='d-flex align-items-center'>
            <Navbar.Brand><Link className='nav-link active' to='/ContactUs'>Contact Us</Link></Navbar.Brand>
          </Container>
        </Container>
      </Navbar>
      
    </>
  )
}



// {[false].map((expand) => (
//   <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
//     <Container fluid>
//       <Navbar.Brand><a href='./'><img src={UILogo} alt='UI Logo'/></a></Navbar.Brand>
//       <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//       <Navbar.Offcanvas
//         id={`offcanvasNavbar-expand-${expand}`}
//         aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//         placement="end"
//       >
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//             Menu
//           </Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <Nav className="justify-content-end flex-grow-1 pe-3">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/Projects">Projects</Nav.Link>
//             <Nav.Link href="/AboutUs">About Us</Nav.Link>
//             <Nav.Link href="/Team">Our Team</Nav.Link>
//             <Nav.Link href="/RecentPublications">Recent Publications</Nav.Link>
//             <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
//           </Nav>
//         </Offcanvas.Body>
//       </Navbar.Offcanvas>
//     </Container>
//   </Navbar>
// ))}