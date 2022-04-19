import React, { useState } from 'react';
import './Login.css';
import Google from '../../../images/logos/Google.svg';
import GitHub from '../../../images/logos/GitHub.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loader from '../../Shared/Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginEmailError, setLoginEmailError] = useState('');
    const [loginPasswordError, setLoginPasswordError] = useState('');
    const [loginEmptyError, setLoginEmptyError] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        sendPasswordResetEmail,
        sending,
        resetError
    ] = useSendPasswordResetEmail(auth);

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

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleLoginEmail = event => {
        setLoginEmail(event.target.value);
    }

    const handleLoginPassword = event => {
        setLoginPassword(event.target.value)
    }

    if (loading || googleLoading || githubLoading || sending) {
        return <Loader />
    }

    if (user || googleUser || githubUser) {
        navigate(from, { replace: true });
    }

    if (error || googleError || githubError) {
        alert(resetError || googleError || githubError?.message);
    }

    const handleLogin = () => {
        if (!loginEmail) {
            setLoginEmailError('Please enter your email address!')
            if (!loginPassword) {
                setLoginPasswordError('Please enter your password!')
                return;
            }
        }

        if (loginEmail && loginPassword) {
            signInWithEmailAndPassword(loginEmail, loginPassword);
            setLoginEmailError('');
            setLoginPasswordError('');
            setLoginEmptyError('');
        }
        else {
            setLoginEmptyError('Please enter both your email & password!')
            return;
        }
    }

    const handleResetPassword = async () => {
        if (!loginEmail) {
            setLoginEmailError('Please enter your email address to sent reset link!')
            setLoginPasswordError('');
        }
        else {
            await sendPasswordResetEmail(loginEmail);
            setLoginEmailError('');
            setLoginPasswordError('');
            setLoginEmptyError('');
            toast('Password reset email sent!');
        }
    }

    return (
        <div className='login mx-auto'>
            <ToastContainer />
            <h1>Login</h1>
            <p>Stay updated on your fitness world</p>
            <div className='login-input-fields text-center'>
                <p className='error-message'>{loginEmptyError}</p>
                <input onBlur={handleLoginEmail} type="email" name="email" id="" placeholder='Enter email' required />
                <p className='error-message'>{loginEmailError}</p>
                <input onBlur={handleLoginPassword} type="password" name="password" id="" placeholder='Enter password' required />
                <p className='error-message'>{loginPasswordError}</p>
                <p onClick={handleResetPassword} className='forgot-password btn-link'>Forgot password?</p>
                <button onClick={handleLogin} className='button-login btn rounded-pill' type="submit">Login</button>
                <p className='link-to-signup'>
                    New to FitnessBuddy?
                    <Link to='/sign-up'> Sign Up</Link>
                </p>
            </div>
            <div className='or-login-section'>
                <div></div>
                <p className='mx-2 mb-0'>or</p>
                <div></div>
            </div>
            <div className='other-login-method text-center'>
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
        </div>
    );
};

export default Login;