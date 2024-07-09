import React from 'react'
import { PageLayout } from '/src/components/PageLayout/PageLayout'
import './aidata.css'

export const AiData = () => {
  return (
    <>
        <PageLayout>
          <h1>AI Data</h1>
          <p> The United States is seeking to improve manufacturing efforts in re-shoring, increase production efficiency and sustainability, and improving supply chain resilience. The University of Idaho Center for Intelligent Industrial Robotics, to this end, is increasing research and data science and artificial intelligence techniques for rugged industries to meet these goals. Problems of interest within the AIDA-MAE research area include finding cause of defects, production configuration and scheduling, determining machines trending out of settings, process control, and optical inspection.</p>
          <h3>Techniques:</h3>
          <p>The Center is focused on performant models and techniques with an emphasis on explainability. Techniques the center currently uses or plans to research include quantitative association rule mining, genetic algorithms, autoencoders, fuzzy logic, and convolutional neural networks.</p>
          <h3>Projects:</h3>
          <p>The Center has worked and/or researched several projects in this area including determining defects from process data, automatic plank defect inspection checking, frost predictor analysis, 3D model to scan inspection, and weed detection.</p>
          <h3>Support:</h3>
          <p>This area received support from the NASA Idaho Space Grant Consortium, Wapiti Consulting, Schweitzer Engineering Labs, Wildwood Grilling, H&H Molds, Laurel Grove Wine Farm, and the University of Idaho Office of Undergraduate Research.</p>
        </PageLayout>
    </>
  )
}
