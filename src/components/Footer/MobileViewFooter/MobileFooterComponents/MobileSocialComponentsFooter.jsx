import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaSquareFacebook, FaSquareYoutube, FaSquareXTwitter, FaSquareInstagram, FaLinkedin } from "react-icons/fa6";
import './mobilesocialcomponentsfooter.css'

export const MobileSocialComponentsFooter = () => {
  return (
    <>
    <Row>
        <Col>
            <Row>
            <Col>
                <span><a href='https://www.facebook.com/uidaho' className='mobile-view-footer'><FaSquareFacebook size={40} /></a></span>    
            </Col>
            <Col>
                <span><a href='https://twitter.com/uidaho' className='mobile-view-footer'><FaSquareXTwitter size={40} /></a></span>    
            </Col>
            <Col>
                <span><a href='https://instagram.com/uidaho' className='mobile-view-footer'><FaSquareInstagram size={40} /></a></span>    
            </Col>
            <Col>
                <span><a href='https://www.youtube.com/user/uidahovideo' className='mobile-view-footer'><FaSquareYoutube size={40} /></a></span>    
            </Col>
            <Col>
                <span><a href='https://www.linkedin.com/school/10313' className='mobile-view-footer'><FaLinkedin size={40} /></a></span>    
            </Col>
            </Row>
        </Col>
    </Row>
    </>
  )
}
