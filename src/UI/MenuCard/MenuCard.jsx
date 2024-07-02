import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Placeholder from 'react-bootstrap/Placeholder';
import Spinner from 'react-bootstrap/Spinner';
import './menucard.css'

export const MenuCard = ({imgSrc, imgAlt, title, description, buttonText, link}) => {
  return (
    <>
    <Row xs={1} md={2} className="g-4">
      <Col>
        {/* Bootstrap Card Layout */}
        <Card style={{ width: '25rem', height: '30rem' }} className='card' bsPrefix='card-container'>
          {/**
           * If image and alt are unavailible, the placeholder animation = true
           */}
          {(!imgSrc && !imgAlt) ?
          <Placeholder>
            <Card.Img variant="top" style={{height: '60%'}} src=''/>
          </Placeholder>
          :
          <Card.Img variant="top" style={{height: '60%'}} src={imgSrc} alt={imgAlt} bsPrefix='card-img'/>
        }
          <Card.Body>
            {/**
             * If title is unavailible, the placeholder animation = true
             */}
            {(!title) ?
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            :
            <Card.Title bsPrefix='menu-card-title'>
              {title}
            </Card.Title>
          }
            {/**
             * If description is unavailible, the placeholder animation = true
             */}
            {(!description) ?
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
              <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>
            :
            <Card.Text>
              {description}
            </Card.Text>
          }
            {/**
             * If buttonText & link are unavailible, the placeholder animation = true
             */}
            {(!buttonText && !link) ?
            <Button variant="disabled secondary" className='col-2' bsPrefix='btn menu-btn' aria-hidden="true">
              <Spinner animation="border" size='sm' role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Button>
            :
            <Button bsPrefix='btn menu-btn' type='submit' value='submit' href={link}>{buttonText}</Button>
          }
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </>
  )
}