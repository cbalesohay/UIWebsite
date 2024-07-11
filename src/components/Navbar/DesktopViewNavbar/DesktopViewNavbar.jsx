import React from 'react'
import { useState } from 'react';
import UILogo from '/src/images/UofI_Main_Full.png'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './desktopviewnavbar.css'

export const DesktopViewNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar sticky='top' bg='dark' expand="lg" className="bg-body-tertiary fixed-top" >
      <Container fluid>
        <Navbar.Brand><Link to={'/'} className='uinavlogo'><img src={UILogo} alt='UI Logo'/></Link></Navbar.Brand>
        <Navbar.Toggle  onClick={handleShow}/>
        <Navbar.Offcanvas 
              responsive='lg'
              placement="end"
              className='w-40'
              show={show}
              onHide={handleClose}
            >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{fontSize: '40px'}}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto d-flex" style={{fontSize: '30px', textAlign: 'end'}}>
              <Navbar.Brand><Link className='nav-link active' to='/'>Home</Link></Navbar.Brand>
              <Navbar.Brand><Link className='nav-link active' to='/Projects'>Projects</Link></Navbar.Brand>
              <Navbar.Brand><Link className='nav-link active' to='/AboutUs'>About Us</Link></Navbar.Brand>
              <Navbar.Brand><Link className='nav-link active' to='/Team'>Our Team</Link></Navbar.Brand>
              <Navbar.Brand><Link className='nav-link active' to='/RecentPublications'>Recent Publications</Link></Navbar.Brand>
              <Navbar.Brand><Link className='nav-link active' to='/ContactUs'>Contact Us</Link></Navbar.Brand>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}