import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-dark py-5 text-light'>
            <Container >
            <h2><span className='text-warning fw-bold'>Cook's</span> Compendium</h2>
                <Row>
                    <Col xs={12} sm={12} md={4}>
                        <h4 className='pt-4 text-warning'>about us</h4>
                        <p className='text-light'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <a className='' href="">
                            {/* <img src="/Group 9969.png" alt="" /> */}
                        </a>
                    </Col>
                    <Col xs={12} sm={12} md={4}>
                        <h5 className='pt-4 text-warning'>Get News $ Offers</h5>
                        <div className='d-flex mt-3'>
                        <input className='p-3' type="email" name="" id=""  placeholder='Enter your email'/>
                        <Button className='rounded-0 text-light px-3' variant="warning">
                            <FaArrowRight></FaArrowRight>
                        </Button>
                        </div>
                    </Col>
                    <Col xs={6} sm={6} md={2}>
                        <h5 className='pt-4 text-warning'>Contact</h5>
                        <p className='text-light'>524 Broadway , NYC North Canton, OH 44720</p>
                        <p className='text-light'>Monday - Wednesday <br/> 7:00 - 9:00PM</p>
                    </Col>
                    <Col xs={6} sm={6} md={2}>
                        <a className='pt-5 d-block text-light text-decoration-none' href="">+1 777 - 978 - 5570</a>
                        <a className='text-light text-decoration-none' href=""> info@paladar.com</a>
                        <p className='text-light mt-4'>Wednesday - Sunday <br /> 8:00 - 10:30PM</p>
                    </Col>
                </Row>
                <p className='text-center text-light mt-5'>&copy;2023 Cook's Compendium. <small>All Right Reserved</small></p>
            </Container>
        </div>
    );
};

export default Footer;