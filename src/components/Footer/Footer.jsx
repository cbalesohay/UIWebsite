import React from 'react'
import './footer.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';

export const Footer = () => {
  return (
    <>
      <Navbar className='bg-body-tertiary'>
        <Row>
          <Col>
            <img src='/src/images/UofI_Main_Full.png'/>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            {/**
             * Add links
             */}
            <h6>Home</h6>
            <h6>Projects</h6>
            <h6>About Us</h6>
            <h6>Our People</h6>
            <h6>Recent Publications</h6>
            <h6>Contact Us</h6>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h6>Rights Reserved</h6>
          </Col>
        </Row>
      </Navbar>
    </>
  );
}
