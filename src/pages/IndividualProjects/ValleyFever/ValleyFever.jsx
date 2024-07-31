import React from 'react'
import { PageLayout } from '/src/components/PageLayout/PageLayout'
import { Container, Button } from 'react-bootstrap'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './valleyfever.css'

export const ValleyFever = () => {
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
          <h1>Valley Fever</h1>
          <img src='/src/images/cobot.jpg' alt='Valley Fever Photo' className='valleyfever-img'/>
          <p>Valley Fever Research is a new research area for the Center for Intelligent Industrial Robotics incorporating environmental monitoring and artificial intelligence. Valley Fever is a fungal infection whose spread is often related to environmental conditions. The goal of this research project is to use environmental conditions in artificial intelligence models to predict case occurrences and eventually correlate specific environmental conditions with outbreaks. Currently, an xLSTM is being used to predict cases in California from weather data. The University of Idaho also supports the College of Natural Resources’s efforts, led by Leda Kobziar, to collect airborne environmental data from fires to determine Valley Fever spread information. The Center has helped 3D print drone attachments for this project and hopes to continue collaboration efforts.</p>
          <p>This project has been supported by the College of Natural Resources as well as Idaho INBRE.</p>
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
