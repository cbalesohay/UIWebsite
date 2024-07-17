import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaSquareFacebook, FaSquareYoutube, FaSquareXTwitter, FaSquareInstagram, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import './desktopviewfooter.css'

export const DesktopViewFooter = () => {
  return (
    <>
        <Card data-bs-theme="dark" bsPrefix='card desktop-view-footer-container'>
            <Card.Body>
                <Container>
                    <Row sm={3}>
                        <Col style={{margin: 'auto'}}>
                            <Row sm='auto' style={{justifyContent: 'center', textAlign: 'start'}}>
                                <Col>
                                    <Row>
                                        <Col>
                                            <Link className='desktop-view-links-footer  active' to='/'>Home</Link>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Link className='desktop-view-links-footer active' to='/Projects'>Projects</Link>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Link className='desktop-view-links-footer active' to='/AboutUs'>About Us</Link>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Link className='desktop-view-links-footer active' to='/Team'>Our Team</Link>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Link className='desktop-view-links-footer active' to='/RecentPublications'>Recent Publications</Link>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Link className='desktop-view-links-footer active' to='/ContactUs'>Contact Us</Link>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        {/*
                        * Fix the highlight so that it only highlights over the words/letters
                        */}
                        <Col style={{margin: 'auto'}}>
                            <Row sm='auto' style={{justifyContent: 'center', textAlign: 'center'}}>
                                <Col>
                                    <Row style={{margin: '10px'}}>
                                        <Col>
                                            <FaPhone size={20} style={{margin: '10px'}}/>
                                            <h6 className='desktop-view-links-footer'>(208)123-4567</h6>
                                        </Col>
                                    </Row>
                                    <Row style={{margin: '10px'}}>
                                        <Col>
                                            <FaEnvelope size={20} style={{margin: '10px'}}/>
                                            <span><h6 className='desktop-view-links-footer'>email@uidaho.edu</h6></span>
                                        </Col>
                                    </Row>
                                    <Row style={{margin: '10px'}}>
                                        <Col>
                                            <FaLocationDot size={20} style={{margin: '10px'}}/>
                                            <h6 className='desktop-view-links-footer'>1000 W Garden Ave | Coeur d'Alene, ID 83854</h6>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col style={{margin: 'auto'}}>
                            <Row sm='auto' style={{justifyContent: 'center'}}>
                                <Col>
                                    <Row>
                                        <Col>
                                            <span><a href='https://www.facebook.com/' className='desktop-view-icons-footer'><FaSquareFacebook size={40} /></a></span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <span><a href='https://www.x.com/' className='desktop-view-icons-footer'><FaSquareXTwitter size={40} /></a></span>        
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <span><a href='https://www.instagram.com/' className='desktop-view-icons-footer'><FaSquareInstagram size={40} /></a></span>        
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <span><a href='https://www.youtube.com/' className='desktop-view-icons-footer'><FaSquareYoutube size={40} /></a></span>        
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <span><a href='https://www.linkedin.com/' className='desktop-view-icons-footer'><FaLinkedin size={40} /></a></span>        
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
