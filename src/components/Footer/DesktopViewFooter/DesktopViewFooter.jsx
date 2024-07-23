import React from 'react'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { DesktopSocialComponentsFooter } from './DesktopFooterComponents/DesktopSocialComponentsFooter';
import { DesktopNavComponentsFooter } from './DesktopFooterComponents/DesktopNavComponentsFooter';
import { DesktopContactComponentsFooter } from './DesktopFooterComponents/DesktopContactComponentsFooter';
import './desktopviewfooter.css'




export const DesktopViewFooter = () => {
  return (
    <>
        <Card data-bs-theme="dark" style={{borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'}}>
            <Card.Body>
                <Container>
                    <Row sm={3}>
                        <DesktopNavComponentsFooter/>
                        <DesktopContactComponentsFooter/>
                        <DesktopSocialComponentsFooter/>
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
