import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Placeholder from 'react-bootstrap/Placeholder';
import './menucard.css'

export const MenuCard = ({imgSrc, imgAlt, title, description, buttonText, link}) => {
  return (
    <>
    <Row xs={1} md={2} className="g-4">
      <Col>
        <Card style={{ width: '25rem' }} className='card'>
          {/**
           * If image and alt are unavailible, the placeholder animation = true
           */}
          {(!imgSrc && !imgAlt) ?
          <Placeholder>
            <Card.Img variant="top" src="holder.js/100px180" />
          </Placeholder>
          :
          <Card.Img variant="top" src={imgSrc} alt={imgAlt} className='card-img'/>
        }
          <Card.Body>
            {/**
             * If title is unavailible, the placeholder animation = true
             */}
            {(!title) ?
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder lg={6} />
            </Placeholder>
            :
            <Card.Title>{title && <h2>{title}</h2>}</Card.Title>
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
              {description && <p>{description}</p>}
            </Card.Text>
          }
            {/**
             * If buttonText & link are unavailible, the placeholder animation = true
             */}
            {(!buttonText && !link) ?
            <Button variant="secondary" className='placeholder-menu-btn placeholder-wave col-3' aria-hidden="true">{buttonText}</Button>
            :
            <Button variant="primary" className='menu-btn' href={link}>{buttonText}</Button>
          }
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </>
  )
}