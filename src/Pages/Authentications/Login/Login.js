import React from 'react';
import './Login.css';
import Google from '../../../images/logos/Google.svg';
import GitHub from '../../../images/logos/GitHub.svg';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login mx-auto'>
            <h1>Login</h1>
            <p>Stay updated on your fitness world</p>
            <div className='login-input-fields text-center'>
                <input type="email" name="email" id="" placeholder='Enter email' required />
                <br />
                <input type="password" name="password" id="" placeholder='Enter password' required />
                <p className='forgot-password btn-link'>Forgot password?</p>
                <button className='button-login btn rounded-pill' type="submit">Login</button>
                <p className='link-to-signup'>
                    New to FitnessBuddy?
                    <Link to='/sign-up'> Sign Up Here</Link>
                </p>
            </div>
            <div className='or-login-section'>
                <div></div>
                <p className='mx-2 mb-0'>or</p>
                <div></div>
            </div>
            <div className='other-login-method text-center'>
                <button className='mx-auto btn rounded-pill'>
                    <img width='40px' src={Google} alt="" />
                    <h6>Continue with Google</h6>
                </button>
                <br />
                <button className='mx-auto btn rounded-pill'>
                    <img width='40px' src={GitHub} alt="" />
                    <h6>Continue with GitHub</h6>
                </button>
            </div>
        </div>
    );
};

export default Login;