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
        <Card.Body>
          <Container>
            <Row sm={1}>
                <Col>
                  <Row sm='auto' style={{justifyContent: 'center', textAlign: 'center'}}>
                      <Col>
                        <Row style={{marginBottom: '15px'}}>
                            <Col>
                              <Row>
                                <Col style={{padding: '5px'}}>
                                  <FaPhone size={20}/>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <h6>(208)123-4567</h6>  
                                </Col>
                              </Row>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: '15px'}}>
                            <Col>
                              <Row>
                                <Col style={{padding: '5px'}}>
                                  <FaEnvelope size={20} />    
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <h6>email@uidaho.edu</h6>
                                </Col>
                              </Row>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: '15px'}}>
                            <Col>
                              <Row>
                                <Col style={{padding: '5px'}}>
                                  <FaLocationDot size={20} />    
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <h6>1000 W Garden Ave | Coeur d'Alene, ID 83854</h6>    
                                </Col>
                              </Row>
                            </Col>
                        </Row>
                      </Col>
                  </Row>
                  {/**
                   * Need to fix the spacing of the icons
                   */}
                  <Row>
                      <Col>
                        <Row>
                          <Col>
                            <span><a href='https://www.facebook.com/' className='mobile-view-footer'><FaSquareFacebook size={40} /></a></span>    
                          </Col>
                          <Col>
                            <span><a href='https://www.x.com/' className='mobile-view-footer'><FaSquareXTwitter size={40} /></a></span>    
                          </Col>
                          <Col>
                            <span><a href='https://www.instagram.com/' className='mobile-view-footer'><FaSquareInstagram size={40} /></a></span>    
                          </Col>
                          <Col>
                            <span><a href='https://www.youtube.com/' className='mobile-view-footer'><FaSquareYoutube size={40} /></a></span>    
                          </Col>
                          <Col>
                            <span><a href='https://www.linkedin.com/' className='mobile-view-footer'><FaLinkedin size={40} /></a></span>    
                          </Col>
                        </Row>
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
