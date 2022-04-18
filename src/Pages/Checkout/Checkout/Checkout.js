import React from 'react';
import './Checkout.css';

const Checkout = () => {
    return (
        <div className='sign-up mx-auto'>
            <h1>Chectout your Booking</h1>
            <form className='sign-up-input-fields text-center'>
                <input type="text" name="name" id="" placeholder='Enter name' />
                <input type="email" name="email" id="" placeholder='Enter email' />
                <input type="tel" name="phone" id="" placeholder='Enter phone number' />
                <input type="text" name="address" id="" placeholder='Enter address' />
                <button className='button-sign-up btn rounded-pill' type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Checkout;