import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './Checkout.css';

const Checkout = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        toast('Thanks for booking! Have a great day!');
    }

    return (
        <div className='form-submit mx-auto'>
            <h1>Checkout Your Booking</h1>
            <ToastContainer />
            <form className='form-input-fields text-center'>
                <input type="text" name="name" id="" placeholder='Enter name' />
                <input type="email" name="email" id="" placeholder='Enter email' required />
                <input type="tel" name="phone" id="" placeholder='Enter phone number' required />
                <input type="text" name="address" id="" placeholder='Enter address' required />
                <button onClick={handleSubmit} className='button-submit btn rounded-pill' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Checkout;