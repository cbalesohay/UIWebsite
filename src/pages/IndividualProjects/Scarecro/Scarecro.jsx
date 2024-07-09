import React from 'react'
import { PageLayout } from '/src/components/PageLayout/PageLayout'
import './scarecro.css'

export const Scarecro = () => {
  return (
    <>
        <PageLayout>
            <h1>Scarecro</h1>
            <h6>The SCARECRO System (an only mildly-forced acronym that stands for Sensor Collection and Remote Environment Care Reasoning Operation) was developed by the University of Idaho and Laurel Grove Wine Farm to be a flexible and robust wireless sensor network for precision agriculture applications. The system is designed to be easy to modify to incorporate a very wide variety of off-the-shelf sensors into a full collection system and data visualization and analysis suite. The system can be configured in many ways.</h6>
            <h3>Components</h3>
            <p>Sensors: Currently supported sensors include: S5 BLE temp/humidity beacon, KKM K6P BLE temp/humidity beacon, minew S1 BLE temp/humidity beacon, Atlas Gravity pH sensor, Atlas Ezo pH sensor, Meter Teros 10 soil moisture sensor, Switchdoc Labs Weather Rack 2 Sensor, Renogy Wanderer Solar Controller, BMP280 air pressure sensor, Switchdoc Labs Thunderboard Sensor, Switchdoc Labs AQI sensor, and the Tempest Weather Station.</p>
            <p>Data Gators: Data Gators are custom-built PCBs on top of an ESP32 microcontroller that can take information from a variety of wired and wireless sensors. Data Gators have analog, digital, SPI, and I2C wired interfaces and can also listen for bluetooth sensors. These are highly power efficient and low cost devices that read sensors and send information upstream. Data Gators run on solar power.</p>
            <p>Gateways: Gateways are implemented via low-cost raspberry pi computers which listen for short and long range sensors on wired interfaces, 433 Mhz radio, Bluetooth, and MQTT Wifi. The Gateways also take readings from the Data Gator devices. Gateways send the information to the middle agent. Gateways also run on solar power.</p>
            <p>Middle Agent: The middle agent is typically responsible for high-level internet transactions, database storage, and data cleaning operations and can be hosted locally or on the cloud.</p>
            <p>Database: SCARECRO data is designed for storage in a long-term database.</p>
            <p>Dashboard: The SCARECRO dashboard is a highly configurable and versatile site that can generate a variety of maps and charts with gathered data and serve as an interface to the database.</p>
            <p>AI techniques: While still in infancy, SCARECRO data has been used in conjunction with neural networks and genetic algorithms to determine possible frost predictors</p>
            <h3>Deployments</h3>
            <p>The University of Idaho has two main deployments of the SCARECRO system:</p>
            <p>Laurel Grove Wine Farm: Jaclyn and Dustin Mommen have been research and development partners from the system’s inception. Their deployment was initially installed in spring 2022 and now consists of 8 gateways, 12 Data Gators, more than 100 S5/KKM temp/humidity beacons, 18 weather racks, and multiple soil moisture and soil pH sensors across the 120 acres of planned vineyard. The Mommens have used SCARECRO data to determine areas to plant the initial vineyard block in spring 2024, as well as how to orient the vines and what varietals should be planted in what sections.</p>
            <p>Sandpoint Organic Agriculture Center: The University of Idaho SOAC center is a heritage orchard with over 60 varieties of apple. The deployment has one gateway, 1 Data Gator, and 2 weather racks. Future work at this deployment includes integrating dendrometers and using the information for degree day modeling.</p>
            <h3>Support</h3>
            <p>The SCARECRO system has received a wide variety of university, government, and private industry support. Funding agencies and partners have included: Laurel Grove Wine Farm, Sandpoint Organic Agriculture Center, University of Idaho Office of Undergraduate Research, NASA Idaho Space Grant Consortium, Idaho Higher Education Research Council, and Susan Rumble.</p>
        </PageLayout>
    </>
  )
}
