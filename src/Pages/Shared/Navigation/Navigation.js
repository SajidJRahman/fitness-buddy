import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <Navbar className='navigation' fixed="top" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link className='navbar-main-link' to='/'>
                            <h1>FitnessFreak</h1>
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
                                <Link to='/checkout'>Checkout</Link>
                                <Link to='/blogs'>Blogs</Link>
                                <Link to='/about'>About Me</Link>
                            </nav>
                        </Nav>
                        <Link to='/login'>
                            <button className='button-login btn btn-outline-primary rounded-pill px-4'>Login</button>
                        </Link>
                        <Link to='/sign-up'>
                            <button className='button-login btn btn-outline-primary rounded-pill px-4 ms-3'>Sign Up</button>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;