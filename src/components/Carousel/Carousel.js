import React, {Component, useEffect, useState} from 'react';
import {carouselImages} from "../../data/carouselImages";
import './Carousel.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

/*
const Carousel = () => {
    const [image , setImage] = useState({current : 0 , previous : carouselImages.length-1 , next : 1})
    const [x,setX] = useState(0)

    function nextImage() {
        if (image.current=== carouselImages.length-1)
        {
            setImage({current : 0 , previous : carouselImages.length-1 , next : 1})

        }else {
            setImage(prevState => ({current: prevState.current + 1 , previous: prevState.current , next: prevState.next+1} ))

        }

    }

    function prevImage() {
        if (image.current=== 0)
        {

            setImage({current : carouselImages.length-1 , previous : carouselImages.length-2 , next : 0})
        }else {
            setImage(prevState => ({current: prevState.current - 1 , previous: prevState.current-2 , next: prevState.next+1} ))
        }

    }
    return (
        <div className="carousel">

            <img className="carousel__image" style={{transform : `translateX(${x}%)`}} src={carouselImages[image.previous]}/>
            <img className="carousel__image" style={{transform : `translateX(${x}%)`}} src={carouselImages[image.current]}/>
            <img className="carousel__image" style={{transform : `translateX(${x}%)`}} src={carouselImages[image.next]}/>

            <ArrowBackIosIcon className="carousel__ArrowBackIosIcon" onClick={prevImage}/>
            <ArrowForwardIosIcon className="carousel__ArrowForwardIosIcon" onClick={nextImage}/>
        </div>
    );
};

export default Carousel;
*/

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0
        }
    }

    render() {

        return (
            <div className="carousel">
                {
                    carouselImages.map((item, index) => {
                        return (
                            <img className={"carousel__image"} key={index} src={item}
                                 style={{transform: `translateX(${this.state.x}%)`}}/>
                        );
                    })
                }

                <ArrowBackIosIcon className="carousel__ArrowBackIosIcon"
                                  style={this.state.x / 100 === 0 ? {display: "none"} : {}}
                                  onClick={() => {
                                      this.handlePrevClick()
                                  }}/>
                <ArrowForwardIosIcon className="carousel__ArrowForwardIosIcon"
                                     style={this.state.x / -100 === carouselImages.length - 1 ? {display: "none"} : {}}
                                     onClick={() => {
                                         this.handleNextClick()
                                     }}/>
            </div>
        );
    }

    handlePrevClick() {
        console.log(this.state.x / 100)
        if (this.state.x !== 0) {
            this.setState({x: this.state.x + 100})
        }
    }

    handleNextClick() {
        if (this.state.x / -100 !== carouselImages.length - 1) {
            this.setState({x: this.state.x - 100})
        }
    }
};

export default Carousel;
