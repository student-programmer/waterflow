import React from 'react'
import slider from "./SliderComponent.module.css"
import Carousel from "react-bootstrap/Carousel"

import 'bootstrap/dist/css/bootstrap.min.css';
const SliderComponent = ({ship, code}) => {
    return (
<Carousel>
    <Carousel.Item>
        <img 
        src={ship} alt="ship" className="d-block w-100"/>
        <Carousel.Caption>
            <h3>WhatterFool </h3>
            <p className=""></p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img 
        src={code} alt="code" className="d-block w-100"/>
        <Carousel.Caption>
            <h3>WhatterFool </h3>
            <p className=""></p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
    )
}

export default SliderComponent
