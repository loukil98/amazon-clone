import React, {useState} from 'react';
import {carouselImages} from "../../data/carouselImages";
import './Carousel.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const Carousel = () => {
    const [current , setCurrent] = useState(0)

    function nextImage() {
        if (current ==  carouselImages.length -1 ) {
            setCurrent(0)
        }else {
            setCurrent(current+1)
        }
    }

    function prevImage() {
        if (current ==   0) {
            setCurrent(carouselImages.length -1)
        }else {
            setCurrent(current - 1)
        }
    }

    return (
        <div className="carousel">
            <img className="carousel__image" src={carouselImages[current]}/>
            <ArrowBackIosIcon className="carousel__ArrowBackIosIcon" onClick={prevImage}/>
            <ArrowForwardIosIcon className="carousel__ArrowForwardIosIcon" onClick={nextImage}/>
        </div>
    );
};

export default Carousel;
