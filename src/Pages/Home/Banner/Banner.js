import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import BannerOne from '../../../images/banner/banner-1.png';
import BannerTwo from '../../../images/banner/banner-2.png';
import BannerThree from '../../../images/banner/banner-3.png';

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BannerOne}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome! I'm your new fitness trainer!</h3>
                    <p>I can help you choose what meets your need.</p>
                    <button href='#programs' className='btn btn-dark rounded-pill px-4'>Book Services</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BannerTwo}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>I currently provide six different programs</h3>
                    <p>You can choose any of them! I plan forward to increase my programs.</p>
                    <button href='#programs' className='btn btn-dark rounded-pill px-4'>Book Services</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BannerThree}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Join classes anywhere, anytime!</h3>
                    <p>You can choose to do practice from anywhere with online videos!</p>
                    <button href='#programs' className='btn btn-dark rounded-pill px-4'>Book Services</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;