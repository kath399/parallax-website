import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import ScrollDown  from "../scroll-down/ScrollDown";


import "./carousal.css";

import  Slide1  from "../../assets/img/carousal/slide1.webp";
import  Slide2  from "../../assets/img/carousal/slide2.webp";
import  Slide3  from "../../assets/img/carousal/slide3.webp";




const CustomCarousel = () => {
    return (
        <div id="home">
            <Carousel controls={false} indicators interval={2500} pause={false}>
                <Carousel.Item>
                    <div className="d-block w-100 custom-img "/>
                </Carousel.Item>
            </Carousel>
            <ScrollDown/>
        </div>
    )
}

export default CustomCarousel;