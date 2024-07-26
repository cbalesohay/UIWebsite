import React from 'react'
import { useState } from 'react';
import UILogo from '/src/images/General/UofI_Main_White_Text.png'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars } from "react-icons/fa6";
import './desktopviewnavbar.css'

export const DesktopViewNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    {/**
     * Need to fix sticky top so that it is only active when the toggle is active
     */}
    <Navbar data-bs-theme="dark" expand="lg"  className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand><Link to={'/'} className='uinavlogo'><img src={UILogo} alt='UI Logo'/></Link></Navbar.Brand>
        <Navbar.Toggle  onClick={handleShow}><FaBars size={25} /></Navbar.Toggle>
        <Navbar.Offcanvas 
              data-bs-theme="dark"
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
              <Navbar.Brand><Link className='view-links-navbar active' to='/'>Home</Link></Navbar.Brand>
              <Navbar.Brand><Link className='view-links-navbar active' to='/Projects'>Projects</Link></Navbar.Brand>
              <Navbar.Brand><Link className='view-links-navbar active' to='/AboutUs'>About Us</Link></Navbar.Brand>
              <Navbar.Brand><Link className='view-links-navbar active' to='/Team'>Our Team</Link></Navbar.Brand>
              <Navbar.Brand><Link className='view-links-navbar active' to='/RecentPublications'>Recent Publications</Link></Navbar.Brand>
              <Navbar.Brand><Link className='view-links-navbar active' to='/ContactUs'>Contact Us</Link></Navbar.Brand>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}