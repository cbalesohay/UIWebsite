import React from 'react'
import { PageLayout } from '/src/components/PageLayout/PageLayout'
import './valleyfever.css'

export const ValleyFever = () => {
  return (
    <>
        <PageLayout>
            <h1>Valley Fever</h1>
            <p>Valley Fever Research is a new research area for the Center for Intelligent Industrial Robotics incorporating environmental monitoring and artificial intelligence. Valley Fever is a fungal infection whose spread is often related to environmental conditions. The goal of this research project is to use environmental conditions in artificial intelligence models to predict case occurrences and eventually correlate specific environmental conditions with outbreaks. Currently, an xLSTM is being used to predict cases in California from weather data. The University of Idaho also supports the College of Natural Resources’s efforts, led by Leda Kobziar, to collect airborne environmental data from fires to determine Valley Fever spread information. The Center has helped 3D print drone attachments for this project and hopes to continue collaboration efforts.</p>
            <p>This project has been supported by the College of Natural Resources as well as Idaho INBRE.</p>
        </PageLayout>
    </>
  )
}
