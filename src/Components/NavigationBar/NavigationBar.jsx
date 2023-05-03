import React, { useContext } from 'react';
import profile from '../../assets/userLogo.png'
import Image from 'react-bootstrap/Image';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Providers/AuthProviders';

const NavigationBar = () => {
    const { user, logOut } = useContext(UserContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky='top' className='shadow'>
            <Container>
                <h2><span className='text-warning fw-bold'>Cook's</span> Compendium</h2>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className='text-decoration-none me-4 text-secondary' to='/'>Home</Link>
                        <Link className='text-decoration-none me-4 text-secondary' to=''>Blog</Link>
                    </Nav>
                    <Nav>
                        {user? <Image className='border border-2 border-dark me-3' style={{ width: '40px', height: '40px' }} src={user.photoURL ? (user.photoURL) : profile} roundedCircle /> :""}

                        {user ? <Link onClick={logOut} to="/login">
                            <Button variant='dark' className='rounded-0 fw-bold px-5'>Logout</Button>
                        </Link>
                            :
                            <Link to="/login">
                                <Button variant='dark' className='rounded-0 fw-bold px-5'>Login</Button>
                            </Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;