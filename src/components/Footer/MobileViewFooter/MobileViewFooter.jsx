import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaSquareFacebook, FaSquareYoutube, FaSquareXTwitter, FaSquareInstagram, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import './mobileviewfooter.css'

export const MobileViewFooter = () => {
  return (
    <>
      <Card data-bs-theme="dark" bsPrefix='card mobile-view-footer-card-container'>
        <Card.Header>
        <img src='src/images/UofI_Main_White_Text.png' className='footer-ui-logo'/>
        </Card.Header>
        <Card.Body>
          <Container>
            <Row sm={1}>
                <Col style={{margin: 'auto'}}>
                <Row sm='auto' style={{justifyContent: 'center', textAlign: 'center', marginBottom: "30px"}}>
                    <Col>
                      <Row style={{margin: '10px'}}>
                          <Col>
                          <FaPhone size={20} />
                          <h6>(208)123-4567</h6>  
                          </Col>
                      </Row>
                      <Row style={{margin: '10px'}}>
                          <Col>
                          <FaEnvelope size={20} />
                          <h6>email@uidaho.edu</h6>
                          </Col>
                      </Row>
                      <Row style={{margin: '10px'}}>
                          <Col>
                          <FaLocationDot size={20} />
                          <h6>1000 W Garden Ave | Coeur d'Alene, ID 83854</h6>
                          </Col>
                      </Row>
                    </Col>
                </Row>
                <Row style={{marginBottom: '10px'}}>
                    <Col>
                    <span><a href='https://www.facebook.com/' className='footer-icons'><FaSquareFacebook size={40} /></a></span>
                    <span><a href='https://www.x.com/' className='footer-icons'><FaSquareXTwitter size={40} /></a></span>
                    <span><a href='https://www.instagram.com/' className='footer-icons'><FaSquareInstagram size={40} /></a></span>
                    <span><a href='https://www.youtube.com/' className='footer-icons'><FaSquareYoutube size={40} /></a></span>
                    <span><a href='https://www.linkedin.com/' className='footer-icons'><FaLinkedin size={40} /></a></span>
                    </Col>
                </Row>
                </Col>
            </Row>
          </Container>
        </Card.Body>
        <Card.Footer>
        @2024 Rights Reserved
        </Card.Footer>
      </Card>
    </>
  )
}
