import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Google from '../../../images/logos/Google.svg';
import GitHub from '../../../images/logos/GitHub.svg';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loader from '../../Shared/Loader/Loader';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [
        updateProfile,
        updating,
        profileError
    ] = useUpdateProfile(auth);

    const [
        signInWithGoogle,
        googleUser,
        googleLoading,
        googleError
    ] = useSignInWithGoogle(auth);

    const [
        signInWithGithub,
        githubUser,
        githubLoading,
        githubError
    ] = useSignInWithGithub(auth);

    if (loading || updating || googleLoading || githubLoading) {
        return <Loader />;
    }

    if (user || googleUser || githubUser) {
        updateProfile({ displayName: name });
        navigate('/home');
    }

    if (error || profileError || googleError || githubError) {
        alert(error || profileError || googleError || githubError.message);
    }

    const handleName = event => {
        setName(event.target.value);
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event)
    }

    const validateEmail = email => {
        const testEmail = /\S+@\S+\.\S+/;
        return testEmail.test(email);
    }

    const handleSignIn = event => {
        event.preventDefault();

        if (!validateEmail(email) || email === '') {
            setEmailErrorMessage('Please enter a valid email address!');
            return;
        }

        if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setPasswordErrorMessage('Please use at least one special character!')
            return;
        }

        if (password !== confirmPassword) {
            createUserWithEmailAndPassword(email, password);
        }

        else {
            setPasswordErrorMessage("Sorry, your passwords didn't matched!")
            return;
        }
    }

    return (
        <div className='sign-up mx-auto'>
            <h1>Sign Up</h1>
            <p>Create an account to stay updated on your fitness world</p>
            <form className='sign-up-input-fields text-center'>
                <input onBlur={handleName} type="text" name="name" id="" placeholder='Enter name' />
                <input onBlur={handleEmail} type="email" name="email" id="" placeholder='Enter email' required />
                <p className='error-message'>{emailErrorMessage}</p>
                <input onBlur={handlePassword} type="password" name="password" id="" placeholder='Enter password' required />
                <p className='error-message'>{passwordErrorMessage}</p>
                <input onBlur={handleConfirmPassword} type="password" name="password" id="" placeholder='Confirm password' required />
                <p className='error-message'>{passwordErrorMessage}</p>
                <button onClick={handleSignIn} className='button-sign-up btn rounded-pill' type="submit">Sign Up</button>
                <p className='link-to-login'>
                    Already FitnessBuddy's Member?
                    <Link to='/login'> Login</Link>
                </p>
            </form>
            <div className='or-signup-section'>
                <div></div>
                <p className='mx-2 mb-0'>or</p>
                <div></div>
            </div>
            <div className='other-signup-method text-center'>
                <button onClick={() => signInWithGoogle()} className='mx-auto btn rounded-pill'>
                    <img width='40px' src={Google} alt="" />
                    <h6>Continue with Google</h6>
                </button>
                <br />
                <button onClick={() => signInWithGithub()} className='mx-auto btn rounded-pill'>
                    <img width='40px' src={GitHub} alt="" />
                    <h6>Continue with GitHub</h6>
                </button>
            </div>
        </div >
    );
};

export default SignUp;