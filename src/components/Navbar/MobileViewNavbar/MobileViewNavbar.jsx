import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import UILogo from '/src/images/UofI_Main_Full.png'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import './mobileviewnavbar.css'

export const MobileViewNavbar = () => {
    const [expanded, setExpanded] = useState(false);
  return (
    <>
        <Navbar expand={expanded} sticky='top' className="bg-body-tertiary" style={{height: '60px', width: 'auto', padding: '0px'}}>
            <Container fluid>
                /*
                * Fix Background of I image for mobile view (still has white background on it from cropping)
                 */
            <Navbar.Brand><Link to={'/'} className='uinavlogo'><img src='src/images/UI_I_logo.jpg' alt='UI Logo'/></Link></Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded)}/>
                <Navbar.Offcanvas
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{fontSize: '40px'}}>
                        Menu
                    </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1" style={{fontSize: '25px'}}>
                        <Navbar.Brand><Link to={'/'} onClick={() => setExpanded(false)} style={{textDecoration: 'none', color: 'black'}}>Home</Link></Navbar.Brand>
                        <Navbar.Brand><Link to={"/Projects"} onClick={() => setExpanded(false)} style={{textDecoration: 'none', color: 'black'}}>Projects</Link></Navbar.Brand>
                        <Navbar.Brand><Link to={"/AboutUs"} onClick={() => setExpanded(false)} style={{textDecoration: 'none', color: 'black'}}>About Us</Link></Navbar.Brand>
                        <Navbar.Brand><Link to={"/Team"} onClick={() => setExpanded(false)} style={{textDecoration: 'none', color: 'black'}}>Our Team</Link></Navbar.Brand>
                        <Navbar.Brand><Link to={"/RecentPublications"} onClick={() => setExpanded(false)} style={{textDecoration: 'none', color: 'black'}}>Recent Publications</Link></Navbar.Brand>
                        <Navbar.Brand><Link to={"/ContactUs"} onClick={() => setExpanded(false)} style={{textDecoration: 'none', color: 'black'}}>Contact Us</Link></Navbar.Brand>
                    </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    </>
  )
}


// {[false].map((expand) => (
//     <Navbar key={expand} expand={expand} sticky='top' className="bg-body-tertiary" style={{height: '60px', width: 'auto', padding: '0px'}}>
//         <Container fluid>
//         <Navbar.Brand><a href='./' className='uinavlogo'><img src={UILogo} alt='UI Logo'/></a></Navbar.Brand>
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//             <Navbar.Offcanvas
//                 id={`offcanvasNavbar-expand-${expand}`}
//                 aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//                 placement="end"
//             >
//                 <Offcanvas.Header closeButton>
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{fontSize: '40px'}}>
//                     Menu
//                 </Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1" style={{fontSize: '25px'}}>
//                     <Nav.Link href="/">Home</Nav.Link>
//                     <Nav.Link href="/Projects">Projects</Nav.Link>
//                     <Nav.Link href="/AboutUs">About Us</Nav.Link>
//                     <Nav.Link href="/Team">Our Team</Nav.Link>
//                     <Nav.Link href="/RecentPublications">Recent Publications</Nav.Link>
//                     <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
//                 </Nav>
//                 </Offcanvas.Body>
//             </Navbar.Offcanvas>
//         </Container>
//     </Navbar>
//     ))}
