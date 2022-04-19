import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { signOut } from "firebase/auth";
import auth from '../../../firebase.init';
import './Navigation.css';

const Navigation = () => {
    const [user] = useAuthState(auth);
    console.log(user);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {

            })
    }

    const CustomLink = ({ children, to, ...props }) => {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={{ color: match ? 'rgb(48, 155, 255)' : '' }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
                {match && ""}
            </div >
        );
    }

    return (
        <Navbar className='navigation fixed-top' bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link className='navbar-main-link' to='/'>
                        <h1>FitnessBuddy</h1>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <nav className='navbar-links'>
                            <CustomLink to='/home'>Home</CustomLink>
                            <CustomLink to='/checkout'>Checkout</CustomLink>
                            <CustomLink to='/blogs'>Blogs</CustomLink>
                            <CustomLink to='/about'>About Me</CustomLink>
                        </nav>
                    </Nav>
                    {
                        user &&
                        <div className='navbar-image'>
                            <img className='rounded-pill mx-3' width='45px' src={user.photoURL} alt="" />
                        </div>
                    }
                    {
                        user && <p className='navbar-name me-3 my-0 fw-bold'>{user.displayName}</p>
                    }
                    {
                        user ?
                            <div className='navbar-signout'>
                                <button onClick={handleSignOut} className='btn btn-dark rounded-pill px-4'>Sign Out</button>
                            </div>
                            :
                            <div className='navbar-button-group'>
                                <Link to='/login'>
                                    <button className='btn btn-outline-dark rounded-pill px-4'>Login</button>
                                </Link>
                                <Link to='/sign-up'>
                                    <button className='button-navbar-signup btn btn-outline-primary rounded-pill px-4 ms-3'>Sign Up</button>
                                </Link>
                            </div>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;