import React from 'react'
import './navbar.css'
import UILogo from '/src/images/UofI_Main_Full.png'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaSistrix } from "react-icons/fa6";


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
            <Navbar.Brand><Link className='nav-link active' to='/OurPeople'>Our People</Link></Navbar.Brand>
          </Container>
          <Container className='d-flex align-items-center'>
            <Navbar.Brand><Link className='nav-link active' to='/RecentPublications'>Recent Publications</Link></Navbar.Brand>
          </Container>
          <Container className='d-flex align-items-center'>
            <Navbar.Brand><Link className='nav-link active' to='/ContactUs'>Contact Us</Link></Navbar.Brand>
          </Container>
        </Container>
        <Container className='justify-content-end'>
          <Navbar.Brand>
          <form class="d-flex align-items-center" role="search">
              <input class="form-control search-bar me-2" type="search" placeholder="Search" aria-label="Search"/>
              <FaSistrix/>
          </form>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}


/*

This is for the expanding bar at break point (need to learn how to integrate with current theme)


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';

{['xl'].map((expand) => (
      <Navbar key={expand} expand={expand} className="bg-body-tertiary" fixed='top'>
        <Container fluid>
          <Navbar.Brand>
            <Container>
              <Navbar.Brand><a href='./'><img src={UILogo} alt='UI Logo'/></a></Navbar.Brand>
            </Container>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <Container>
                <Navbar.Brand><a href='./'><img src={UILogo} alt='UI Logo'/></a></Navbar.Brand>
              </Container>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Container>
                  <Navbar.Brand><Link className='nav-link active' to='/'>Home</Link></Navbar.Brand>
                </Container>
                <Container>
                  <Navbar.Brand><Link className='nav-link active' to='/Projects'>Projects</Link></Navbar.Brand>
                </Container>
                <Container>
                  <Navbar.Brand><Link className='nav-link active' to='/AboutUs'>About Us</Link></Navbar.Brand>
                </Container>
                <Container>
                  <Navbar.Brand><Link className='nav-link active' to='/OurPeople'>Our People</Link></Navbar.Brand>
                </Container>
                <Container>
                  <Navbar.Brand><Link className='nav-link active' to='/RecentPublications'>Recent Publications</Link></Navbar.Brand>
                </Container>
                <Container>
                  <Navbar.Brand><Link className='nav-link active' to='/ContactUs'>Contact Us</Link></Navbar.Brand>
                </Container>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}

*/