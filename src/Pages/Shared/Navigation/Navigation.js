import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
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
        <div>
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
                        <Link to='/login'>
                            <button className='btn btn-outline-dark rounded-pill px-4'>Login</button>
                        </Link>
                        <Link to='/sign-up'>
                            <button className='button-navbar-signup btn btn-outline-primary rounded-pill px-4 ms-3'>Sign Up</button>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;