import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import BannerOne from '../../../images/banner/banner-1.jpg';
import BannerTwo from '../../../images/banner/banner-2.jpg';
import BannerThree from '../../../images/banner/banner-3.jpg';

const Banner = () => {
    return (
        <Carousel style={{ marginTop: '72px' }} fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BannerOne}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome! I'm your new fitness trainer!</h3>
                    <p>I can help you choose what meets your need.</p>
                    <button className='btn button-carousel rounded-pill px-4'>
                        <a href='#programs'>Book Services</a>
                    </button>
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
                    <button className='btn button-carousel rounded-pill px-4'>
                        <a href="#services">Book Services</a>
                    </button>
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
                    <button className='btn button-carousel rounded-pill px-4'>
                        <a href="#services">Book Services</a>
                    </button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;