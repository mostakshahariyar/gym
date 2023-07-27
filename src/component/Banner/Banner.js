import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Banner.css'
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../img/Banner/banner1.jpg';
import img2 from '../../img/Banner/banner2.jpg';
import img3 from '../../img/Banner/banner3.jpg';
import img4 from '../../img/Banner/banner4.jpg';
import img5 from '../../img/Banner/banner5.jpg';
import img6 from '../../img/Banner/banner6.jpg';

const Banner = () => {
        return (

                <Carousel className='md:mx-28 mx-[5%]  mb-8' autoPlay='1000' emulateTouch={true} infiniteLoop={true} centerSlidePercentage={true} dynamicHeight={true}
                        preventMovementUntilSwipeScrollTolerance={true}>
                        <div>
                                <img alt="" src={img1} />
                        </div>
                        <div>
                                <img alt="" src={img2} />
                        </div>
                        <div>
                                <img alt="" src={img3} />
                        </div>
                        <div>
                                <img alt="" src={img4} />
                        </div>
                        <div>
                                <img alt="" src={img5} />
                        </div>
                        <div>
                                <img alt="" src={img6} />
                        </div>
                </Carousel>

        );
};

export default Banner;