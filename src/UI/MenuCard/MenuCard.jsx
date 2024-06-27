import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './menucard.css'

export const MenuCard = ({imgSrc, imgAlt, title, description, link}) => {
  return (
    <>
    <Row xs={1} md={2} className="g-4">
      <Col>
        <Card style={{ width: '25rem' }} className='card'>
          <Card.Img variant="top" src={imgSrc} alt={imgAlt} className='card-img'/>
          <Card.Body>
            <Card.Title>{title && <h2>{title}</h2>}</Card.Title>
            <Card.Text>
              {description && <p>{description}</p>}
            </Card.Text>
            <Button variant="primary" href={link}>Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </>
  )
}

{/* <div className='menu-card-container' >
      {title && <h2 className='card-title'>{title}</h2>}
      {imgSrc && imgAlt && <img src={imgSrc} alt={imgAlt} className='menu-card-img'/>}
      {description && <p className='menu-card-description'>{description}</p>}
      {link && buttonText && <a href={link} className='menu-card-btn'>{buttonText}</a>}
    </div> */}