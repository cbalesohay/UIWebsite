import React from 'react'
import './footer.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import { FaSquarePhone, FaSquareEnvelope, FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { Container } from 'react-bootstrap';

export const Footer = () => {
  return (
    <>
      <Navbar className='bg-body-tertiary footer-size'>
        <Container className='jsutify-content-start'>
          <Row xs={1} md={1}>
            <Col>
              <FaSquarePhone size={20} />
            </Col>
            <Col>
              <h6>(208)###-####</h6>
            </Col>
          </Row>
          <Row xs={1} md={1}>
            <Col>
              <FaSquareEnvelope size={20} />
            </Col>
            <Col>
              <h6>email@email.com</h6>
            </Col>
          </Row>
          <Row xs={1} md={1}>
            <Col>
              <FaSquareFacebook size={20} />
            </Col>
            <Col>
              <h6>facebook.com/profile</h6>
            </Col>
          </Row>
        </Container>
        <Container className='justify-content-center'>
          <Row>
            <Col>
              <img src='/src/images/UofI_Main_Full.png'/>
              <br></br>
              <h6>1234 Address Street</h6>
              <h6>Coeur d'Alene,</h6>
              <h6>ID 83854</h6>
            </Col>
          </Row>
        </Container>
        <Container className='justify-content-end'>
          <Row>
            <Col>
              <h6>Rights Reserved</h6>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}
