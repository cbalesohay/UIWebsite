import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaSquareFacebook, FaSquareYoutube, FaSquareXTwitter, FaSquareInstagram, FaLinkedin } from "react-icons/fa6";
import './mobilesocialcomponentsfooter.css'

export const MobileSocialComponentsFooter = () => {
    const MobileSocialStyle = {
        padding: '2px',
        margin: '0px'
    }
  return (
    <>
    <Row>
        <Col>
            <Row>
                <Col style={MobileSocialStyle}>
                    <span><a className='mobile-view-footer'><FaSquareFacebook size={40} /></a></span>    
                </Col>
                <Col style={MobileSocialStyle}>
                    <span><a className='mobile-view-footer'><FaSquareXTwitter size={40} /></a></span>    
                </Col>
                <Col style={MobileSocialStyle}>
                    <span><a className='mobile-view-footer'><FaSquareInstagram size={40} /></a></span>    
                </Col>
                <Col style={MobileSocialStyle}>
                    <span><a className='mobile-view-footer'><FaSquareYoutube size={40} /></a></span>    
                </Col>
                <Col style={MobileSocialStyle}>
                    <span><a className='mobile-view-footer'><FaLinkedin size={40} /></a></span>    
                </Col>
            </Row>
        </Col>
    </Row>
    </>
  )
}
