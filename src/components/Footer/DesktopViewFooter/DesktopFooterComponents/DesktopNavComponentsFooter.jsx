import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom'
import './DesktopNavComponentsFooter.css'

export const DesktopNavComponentsFooter = () => {
  return (
    <>
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
                        <Link className='desktop-view-links-footer active' to='/Publications'>Publications</Link>
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
    </>
  )
}
