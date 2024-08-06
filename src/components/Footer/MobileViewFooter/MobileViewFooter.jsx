import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { MobileSocialComponentsFooter } from './MobileFooterComponents/MobileSocialComponentsFooter';
import { MobileContactComponentsFooter } from './MobileFooterComponents/MobileContactComponentsFooter';
import './mobileviewfooter.css'

export const MobileViewFooter = () => {
  const mobileFooterStyle = {
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px'
}
  return (
    <>
      <Card data-bs-theme="dark" style={mobileFooterStyle}>
        <Card.Body>
          <Container>
            <Row sm={1}>
                <Col>
                  <MobileContactComponentsFooter/>
                  <MobileSocialComponentsFooter/>
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
