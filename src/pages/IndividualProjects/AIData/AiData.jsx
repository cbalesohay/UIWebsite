import React from 'react'
import { PageLayout } from '/src/components/PageLayout/PageLayout'
import { Container, Button } from 'react-bootstrap'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './aidata.css'

export const AiData = () => {
  const buttonStyle = {
    border: '2px solid rgb(94, 72, 255)',
    borderRadius: '0px',
    boxShadow: 'inset 0 0 0 0 #5E48FF',
    borderColor: '#5E48FF',
    width: '200px'
  }
  return (
    <>
      <PageLayout>
        <Container>
          <h1>AI Data</h1>
          <img src='/src/images/AI.webp' alt='AI Photo' className='ai-img'/>
          <p> The United States is seeking to improve manufacturing efforts in re-shoring, increase production efficiency and sustainability, and improving supply chain resilience. The University of Idaho Center for Intelligent Industrial Robotics, to this end, is increasing research and data science and artificial intelligence techniques for rugged industries to meet these goals. Problems of interest within the AIDA-MAE research area include finding cause of defects, production configuration and scheduling, determining machines trending out of settings, process control, and optical inspection.</p>
          <h3>Techniques:</h3>
          <p>The Center is focused on performant models and techniques with an emphasis on explainability. Techniques the center currently uses or plans to research include quantitative association rule mining, genetic algorithms, autoencoders, fuzzy logic, and convolutional neural networks.</p>
          <h3>Projects:</h3>
          <p>The Center has worked and/or researched several projects in this area including determining defects from process data, automatic plank defect inspection checking, frost predictor analysis, 3D model to scan inspection, and weed detection.</p>
          <h3>Support:</h3>
          <p>This area received support from the NASA Idaho Space Grant Consortium, Wapiti Consulting, Schweitzer Engineering Labs, Wildwood Grilling, H&H Molds, Laurel Grove Wine Farm, and the University of Idaho Office of Undergraduate Research.</p>
          <Container style={{textAlign: 'start', paddingBottom: '10px'}}>
            <Link to='/Projects'>
              <Button style={buttonStyle} type='submit' value='submit' bsPrefix='btn btn-slide-animation btn-slide-animation-lupine'><FaArrowLeft size={22} /> Back to Projects</Button>
            </Link>
          </Container>
        </Container>
      </PageLayout>
    </>
  )
}
