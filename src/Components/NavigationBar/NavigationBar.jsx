import React, { useContext } from 'react';
import profile from '../../assets/userLogo.png'
import Image from 'react-bootstrap/Image';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../Providers/AuthProviders';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'


const NavigationBar = () => {
    const { user, logOut } = useContext(UserContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky='top' className='shadow'>
            <Tooltip id="my-tooltip" />
            <Container>
                <h2><span className='text-warning fw-bold'>Cook's</span> Compendium</h2>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink className={({ isActive }) => (isActive ? 'text-decoration-none me-4 text-danger' : 'text-decoration-none me-4 text-secondary')} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'text-decoration-none me-4 text-danger' : 'text-decoration-none me-4 text-secondary')} to='/blogs'>Blog</NavLink>
                    </Nav>
                    <Nav>
                        {user ? <Image
                          data-tooltip-id="my-tooltip" 
                          data-tooltip-content={user.displayName} 
                          data-tooltip-place="top"
                         className='border border-2 border-dark me-3' 
                         style={{ width: '40px', height: '40px' }} 
                         src={user.photoURL ? (user.photoURL) 
                         : profile} roundedCircle /> : ""
                        }

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