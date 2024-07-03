import React from 'react'
import './footer.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { FaSquarePhone, FaSquareEnvelope, FaSquareFacebook, FaSquareYoutube, FaSquareXTwitter, FaSquareInstagram, FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
      <Card data-bs-theme="dark" bsPrefix='card '>
        <Card.Header>
          <img src='src/images/UofI_Main_White_Text.png'/>
        </Card.Header>
        <Card.Body>
          <Row sm={3}>
            <Col style={{margin: 'auto'}}>
              <Row sm='auto' style={{justifyContent: 'center', textAlign: 'start'}}>
                <Col>
                  <Row>
                    <Col>
                      Home
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      Projects
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      About Us
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      Recent Publications
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      Contact Us
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col style={{margin: 'auto'}}>
              <Row sm='auto' style={{justifyContent: 'center', textAlign: 'center'}}>
                <Col>
                  <Row>
                    <Col>
                      <FaSquarePhone size={30} />
                    </Col>
                    <Col>
                      <h6>(208)123-4567</h6>  
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FaSquareEnvelope size={30} />
                    </Col>
                    <Col>
                      <h6>email@uidaho.edu</h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FaSquareEnvelope size={30} />
                    </Col>
                    <Col>
                      <h6>1000 W Garden Ave | Coeur d'Alene, ID 83854</h6>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col style={{margin: 'auto'}}>
              <Row>
                <Col>
                  <span><a href='https://www.youtube.com/' className='footer-icons'><FaSquareFacebook size={40} /></a></span>
                  <span><a href='https://www.x.com/' className='footer-icons'><FaSquareXTwitter size={40} /></a></span>
                  <span><a href='https://www.instagram.com/' className='footer-icons'><FaSquareInstagram size={40} /></a></span>
                  <span><a href='https://www.youtube.com/' className='footer-icons'><FaSquareYoutube size={40} /></a></span>
                  <span><a href='https://www.linkedin.com/' className='footer-icons'><FaLinkedin size={40} /></a></span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          @2024 Rights Reserved
        </Card.Footer>
      </Card>
    </>
  );
}
