import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import './mobilecontactcomponentsfooter.css'

export const MobileContactComponentsFooter = () => {
    const linkStyle = {
        textDecoration: 'none',
        color: '#FFFFFF'
    }
  return (
    <>
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
                        <Link to='tel:2081234567' style={linkStyle}>(208)659-5772</Link>
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
                        <Link to='mailto:email@uidaho.edu' style={linkStyle}>jshovic@uidaho.edu</Link>
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
                        <Link to='geo:47.67519378549674,-116.79614685893004' style={linkStyle}>1000 W. Garden Ave | Coeur d'Alene, ID 83814</Link>
                    </Col>
                    </Row>
                </Col>
            </Row>
            </Col>
        </Row>
    </>
  )
}
