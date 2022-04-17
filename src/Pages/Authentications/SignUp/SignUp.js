import React from 'react';
import { Link } from 'react-router-dom';
import Google from '../../../images/logos/Google.svg';
import GitHub from '../../../images/logos/GitHub.svg';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='sign-up mx-auto'>
            <h1>Sign Up</h1>
            <p>Create an account to stay updated on your fitness world</p>
            <div className='sign-up-input-fields text-center'>
                <input type="text" name="name" id="" placeholder='Enter name' />
                <br />
                <input type="email" name="email" id="" placeholder='Enter email' required />
                <br />
                <input type="password" name="password" id="" placeholder='Enter password' required />
                <br />
                <input type="password" name="confirm-password" id="" placeholder='Confirm password' required />
                <button className='button-sign-up btn rounded-pill' type="submit">Sign Up</button>
                <p className='link-to-login'>
                    Already FitnessBuddy's Member?
                    <Link to='/login'> Login Here</Link>
                </p>
            </div>
            <div className='or-signup-section'>
                <div></div>
                <p className='mx-2 mb-0'>or</p>
                <div></div>
            </div>
            <div className='other-signup-method text-center'>
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

export default SignUp;