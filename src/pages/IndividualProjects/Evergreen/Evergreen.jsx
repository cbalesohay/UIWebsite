import React from 'react'
import { PageLayout } from '/src/components/PageLayout/PageLayout'
import './evergreen.css'

export const Evergreen = () => {
  return (
    <>
        <PageLayout>
            <h1>Evergreen</h1>
            <p>Funded by the United States Forest Service and the USDA, Project Evergreen is developing an autonomous weeding robot for National Forest tree seedling nurseries. Led by graduate student Garrett Wells, the project is designed to help nurseries increase their production under the REPLANT act to help United States reforestation efforts.</p>
            <p>The project uses an autonomous robot rover equipped with a 3-axis gantry and an electrical probe system, which will use artificial intelligence to navigate and identify weeds before electrocuting them with the probe. The system is designed to keep 1 and 2 year old bare root seedling plots healthy and weed free.</p>
            <p>The project involves technology from every area of robotics: robotic operation and control, electrical conductivity and end effector design, 3D printing, machine vision modeling, artificial intelligence, navigation, and safety testing.</p>
            <p>The project is principally funded by the USFS and USDA but has also received support from the Office of Undergraduate Research.</p>
        </PageLayout>
    </>
  )
}
