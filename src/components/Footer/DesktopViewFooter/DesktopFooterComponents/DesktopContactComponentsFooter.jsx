import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

export const DesktopContactComponentsFooter = () => {
    const linkStyle = {
        textDecoration: 'none',
        color: '#FFFFFF'
    }
  return (
    <>
        <Col style={{margin: 'auto'}}>
            <Row sm='auto' style={{justifyContent: 'center', textAlign: 'center'}}>
                <Col>
                    <Row style={{margin: '10px'}}>
                        <Col>
                            <FaPhone size={20} style={{margin: '10px'}}/>
                            <br></br>
                            <Link to='tel:2081234567' style={linkStyle}>(208)123-4567</Link>
                        </Col>
                    </Row>
                    {/* <Row style={{margin: '10px'}}>
                        <Col>
                            <FaEnvelope size={20} style={{margin: '10px'}}/>
                            <br></br>
                            <Link to='mailto:email@uidaho.edu' style={linkStyle}>jshovic@uidaho.edu</Link>
                        </Col>
                    </Row> */}
                    <Row style={{margin: '10px'}}>
                        <Col>
                            <FaLocationDot size={20} style={{margin: '10px'}}/>
                            <br></br>
                            <Link to='geo:47.67519378549674,-116.79614685893004' style={linkStyle}>1000 W. Garden Ave | Coeur d'Alene, ID 83814</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    </>
  )
}
