import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const serviceData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate Weather',
        desc: 'Description of Service One'
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: 'Description of Service Two'
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: 'Description of Service Three'
    },

];


const ServiceList = () => {
    return (
        <>
            {
                serviceData.map((item, index) => (
                    <Col lg='3' key={index} >
                        <ServiceCard item={item} />
                    </Col>
                ))
            }

        </>

    )
}

export default ServiceList