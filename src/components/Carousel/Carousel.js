import React, {Component, useEffect, useState} from 'react';
import {carouselImages} from "../../data/carouselImages";
import './Carousel.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import transitions from "@material-ui/core/styles/transitions";

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
            current: 0,
            previous: carouselImages.length - 1,
            next: 1,
            x: 0
        }
    }

    render() {
    const imageStyle = this.state.x === 0 ?
        {transform: `translateX(${this.state.x}%)`}
        :
        {transform: `translateX(${this.state.x}%)` , transition : "0.5s"}
        return (
            <div className="carousel">

                <img className="carousel__image" style={imageStyle}
                     src={carouselImages[this.state.previous]}/>
                <img className="carousel__image" style={imageStyle}
                     src={carouselImages[this.state.current]}/>
                <img className="carousel__image" style={imageStyle}
                     src={carouselImages[this.state.next]}/>
                <ArrowBackIosIcon className="carousel__ArrowBackIosIcon" onClick={() => {
                    this.handlePrevClick()
                }}/>
                <ArrowForwardIosIcon className="carousel__ArrowForwardIosIcon" onClick={() => {
                    this.handleNextClick()
                }}/>
            </div>
        );
    }


    nextImage = () => {
        if (this.state.current === carouselImages.length - 1) {
            this.setState({current: 0, previous: carouselImages.length - 1, next: 1}, () => console.log(this.state))

        } else {
            this.setState(prevState => ({
                current: prevState.current + 1,
                previous: prevState.current,
                next: prevState.next + 1
            }), () => console.log(this.state))

        }

    }

    prevImage = () => {
        if (this.state.current === 0) {

            this.setState({
                current: carouselImages.length - 1,
                previous: carouselImages.length - 2,
                next: 0
            }, () => console.log(this.state))
        } else {
            this.setState(prevState => ({
                current: prevState.current - 1,
                 previous: prevState.current - 2,
                next: prevState.next + 1
            }), () => console.log(this.state))
        }

    }
    handleNextClick = () => {
        if (this.state.current === carouselImages.length-2) {
            this.setState({x: -100}, () => {
                setTimeout(() => this.setState({
                        current: carouselImages.length - 1,
                        previous: carouselImages.length - 2,
                        next: 0
                    }, () => {
                        this.setState({x: 0},()=>{
                            console.log(this.state)})

                    }), 500
                )
            })
        }
        else {
            this.setState({x: -100}, () => {
                setTimeout(() => this.setState(prevState => ({
                        current: prevState.next,
                        previous: prevState.previous - 1,
                        next: prevState.next+1
                    }), () => this.setState({x: 0} , ()=>console.log(this.state)))
                    , 500)
            })

        }
    }
    handlePrevClick = () => {
       if (this.state.current === 1) {
            this.setState({x: 100}, () => {
                setTimeout(() => this.setState({
                        current: 0,
                        previous: carouselImages.length - 1,
                        next: 1
                    }, () => {
                        this.setState({x: 0},()=>{
                            console.log(this.state)})

                    }), 500
                )
            })
        }
        else {
            this.setState({x: 100}, () => {
                setTimeout(() => this.setState(prevState => ({
                        current: prevState.previous,
                        previous: prevState.previous - 1,
                        next: prevState.current
                    }), () => this.setState({x: 0} , ()=>console.log(this.state)))
                    , 500)
            })

        }
    }

};

export default Carousel;
