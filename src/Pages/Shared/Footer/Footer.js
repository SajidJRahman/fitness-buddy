import React from 'react';
import './Footer.css';
import Twitter from '../../../images/logos/Twitter.svg';
import YouTube from '../../../images/logos/YouTube.png';
import Facebook from '../../../images/logos/Facebook.svg';
import Instagram from '../../../images/logos/Instagram.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id='footer'>
            <div className='social'>
                <h1>FitnessBuddy</h1>
                <div className='social-links'>
                    <a rel="noopener noreferrer" target='_blank' href="https://twitter.com/sajidjrahman"><img src={Twitter} alt="" /></a>
                    <a rel="noopener noreferrer" target='_blank' href="https://instagram.com/sajidjrahman"><img src={Instagram} alt="" /></a>
                    <a rel="noopener noreferrer" target='_blank' href="https://facebook.com/sajidjrahman"><img src={Facebook} alt="" /></a>
                    <a rel="noopener noreferrer" target='_blank' href="https://www.youtube.com/channel/UCZmJKsZ84FWv5QMKmgLtUeg"><img src={YouTube} alt="" /></a>
                </div>
            </div>
            <div className='footer-navigation'>
                <div className='footer-links'>
                    <p>Support</p>
                    <Link to="/home#footer">Contect Me</Link>
                    <br />
                    <Link to="/home#footer">FAQ</Link>
                    <br />
                    <Link to="/home#footer">Blogs</Link>
                    <br />
                    <Link to="/home#footer">Newsroom</Link>
                </div>
                <div className='footer-links'>
                    <p>FitnessBuddy</p>
                    <Link to="/about">About FitnessBuddy</Link>
                    <br />
                    <Link to="/checkout">Checkout</Link>
                    <br />
                    <Link to="/login">Login</Link>
                    <br />
                    <Link to="/sign-up">Sign Up</Link>
                </div>
            </div>
            <p className='copyright'>Copyright © 2022 by Sajid Rahman</p>
        </footer>
    );
};

export default Footer;