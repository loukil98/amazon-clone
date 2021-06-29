import React, {Component} from 'react';
import './Carousel.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {carouselImages} from "../../data/carouselImages";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            previous: carouselImages.length - 1,
            next: 1,
            x: 0,
            pointerEvents:"auto"
        }
    }

    render() {
        const imageStyle = this.state.x === 0 ?
            {transform: `translateX(${this.state.x}%)`}
            :
            {transform: `translateX(${this.state.x}%)`, transition: "0.5s"}
        return (
            <div className="carousel">

                <img className="carousel__image" style={imageStyle}
                     src={carouselImages[this.state.previous]}/>
                <img className="carousel__image" style={imageStyle}
                     src={carouselImages[this.state.current]}/>
                <img className="carousel__image" style={imageStyle}
                     src={carouselImages[this.state.next]}/>
                <div style={{pointerEvents:this.state.pointerEvents}}>
                    <ArrowBackIosIcon className="carousel__ArrowBackIosIcon" onClick={() => {
                        this.handlePrevClick()
                    }}
                    />
                </div>
                <div style={{pointerEvents:this.state.pointerEvents}}>
                    <ArrowForwardIosIcon className="carousel__ArrowForwardIosIcon" onClick={(e) => {
                        this.handleNextClick(e)
                    }}/>
                </div>
            </div>
        );
    }


    handleNextClick = (e) => {

        if (this.state.current === carouselImages.length - 2) {
            this.setState({x: -100,pointerEvents:"none"}, () => {
                setTimeout(() => this.setState({
                        current: carouselImages.length - 1,
                        previous: carouselImages.length - 2,
                        next: 0
                    }, () => {
                        this.setState({x: 0,pointerEvents:'auto'}, () => {
                        })

                    }), 500
                )
            })
        } else {
            this.setState({x: -100,pointerEvents:"none"}, () => {
                setTimeout(() => this.setState(prevState => ({
                        current: prevState.next,
                        previous: prevState.current,
                        next: prevState.next + 1
                    }), () => this.setState({x: 0,pointerEvents:"auto"}, () => console.log(this.state)))
                    , 500)
            })

        }
    }
    handlePrevClick = () => {
        if (this.state.current === 1) {
            this.setState({x: 100,pointerEvents:"none"}, () => {
                setTimeout(() => this.setState({
                        current: 0,
                        previous: carouselImages.length - 1,
                        next: 1
                    }, () => {
                        this.setState({x: 0,pointerEvents:"auto"}, () => {
                            console.log(this.state)
                        })

                    }), 500
                )
            })
        } else if (this.state.current === 0) {
            this.setState({x: 100,pointerEvents:"none"}, () => {
                setTimeout(() => this.setState({
                        current: carouselImages.length - 1,
                        previous: carouselImages.length - 2,
                        next: 0
                    }, () => {
                        this.setState({x: 0,pointerEvents:"auto"}, () => {
                            console.log(this.state)
                        })

                    }), 500
                )
            })
        } else {
            this.setState({x: 100,pointerEvents:"none"}, () => {
                setTimeout(() => this.setState(prevState => ({
                        current: prevState.previous,
                        previous: prevState.previous - 1,
                        next: prevState.current
                    }), () => this.setState({x: 0,pointerEvents:"auto"}, () => console.log(this.state)))
                    , 500)
            })
        }
    }

};

export default Carousel;
