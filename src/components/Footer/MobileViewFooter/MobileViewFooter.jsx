import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { MobileSocialComponentsFooter } from './MobileFooterComponents/MobileSocialComponentsFooter';
import { MobileContactComponentsFooter } from './MobileFooterComponents/MobileContactComponentsFooter';
import './mobileviewfooter.css'

export const MobileViewFooter = () => {
  return (
    <>
      <Card data-bs-theme="dark" style={{borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'}}>
        <Card.Body>
          <Container>
            <Row sm={1}>
                <Col>
                  <MobileContactComponentsFooter/>
                  {/**
                   * Need to fix the spacing of the icons
                   */}
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
