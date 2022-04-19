import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found text-center'>
            <h1>404</h1>
            <h4>Sorry sir, you're on the wrong side of the earth!</h4>
            <Link to='/'>
                <button className='btn btn-primary px-5 py-2 mt-3 rounded-pill'>Get me back to homepage</button>
            </Link>
        </div>
    );
};

export default NotFound;