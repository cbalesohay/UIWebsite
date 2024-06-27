import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './projectcard.css'

export const ProjectCard = ({imgSrc, imgAlt, title, description, buttonText, link}) => {
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
            <Button variant="primary">{buttonText}</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </>
  );
}










// import React from 'react'
// import './projectcard.css'

// export const ProjectCard = ({imgSrc, imgAlt, title, description, buttonText, link}) => {
//   return (
//     <div className='card-container' >
//         {imgSrc && imgAlt && <img src={imgSrc} alt={imgAlt} className='card-img'/>}
//         {title && <h2 className='card-title'>{title}</h2>}
//         {description && <p className='card-description'>{description}</p>}
//         {link && buttonText && <a href={link} className='card-btn'>{buttonText}</a>}
//     </div>
//   )
// }
