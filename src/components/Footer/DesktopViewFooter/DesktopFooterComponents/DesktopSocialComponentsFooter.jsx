import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaSquareFacebook, FaSquareYoutube, FaSquareXTwitter, FaSquareInstagram, FaLinkedin } from "react-icons/fa6";
import './desktopsocialcomponentsfooter.css'

export const DesktopSocialComponentsFooter = () => {
  return (
    <>
        <Col style={{margin: 'auto'}}>
            <Row sm='auto' style={{justifyContent: 'center'}}>
                <Col>
                    <Row>
                        <Col>
                            <span><a className='desktop-view-icons-footer'><FaSquareFacebook size={40} /></a></span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span><a className='desktop-view-icons-footer'><FaSquareXTwitter size={40} /></a></span>        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span><a className='desktop-view-icons-footer'><FaSquareInstagram size={40} /></a></span>        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span><a className='desktop-view-icons-footer'><FaSquareYoutube size={40} /></a></span>        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span><a className='desktop-view-icons-footer'><FaLinkedin size={40} /></a></span>        
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    </>
  )
}
