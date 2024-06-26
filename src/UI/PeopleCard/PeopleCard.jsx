import React from 'react'
import './peoplecard.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const PeopleCard = ({imgSrc, imgAlt, title, name, description}) => {
  return (
    <>
      {/* Bootstrap Card Layout */}
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card style={{width: '300px'}}>
            <Card.Img variant="top" className='card-img' src={imgSrc} alt={imgAlt} />
            <Card.Body>
              <Card.Title>{title && name && <h2 className='title-name'>{title + name}</h2>}</Card.Title>
              <Card.Text>
                {description && <p className='card-description'>{description}</p>}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

/*

Original Card template

import React from 'react'
import './peoplecard.css'

export const PeopleCard = ({imgSrc, imgAlt, title, name}) => {
  return (
    <div className='people-card-container'>
        {imgSrc && imgAlt && <img src={imgSrc} alt={imgAlt} className='people-images'/>}
        <div>
            {title && name && <h2 className='title-name'>{title + name}</h2>}
        </div>
    </div>
  )
}

*/