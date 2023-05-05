import React from 'react';
import { Button,  Container, Form, Row } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

const ContactUs = () => {
    const handleBooking = (event) => {
        const form = event.target;
        event.preventDefault();
        form.reset();
    }
    return (
        <Container>
            <Row xs={1} md={2}>
                <Form onSubmit={handleBooking} className='py-5 my-5'>
                    <h1 className='text-light fw-bold display-4'>Book a Table</h1>
                    <div className='d-md-flex gap-2 fs-3 text-light'>
                        <div className='w-100'>
                            <label htmlFor="date">Date</label><br />
                            <input className='w-100 p-1 fs-4 text-light bg-transparent border-light border border-2 rounded' type="date" name="date" id="date" required/>
                        </div>
                        <div className='w-100'>
                            <label htmlFor="time">Time</label><br />
                            <input className='w-100 p-1 fs-4 text-light bg-transparent border-light border border-2 rounded' type="time" name="time" id="time" required/>
                        </div>
                        <div className='w-100'>
                            <label htmlFor="guest">Guest</label><br />
                            <input className='w-100 p-1 fs-4 text-light bg-transparent border-light border border-2 rounded' type="number" name="guest" id="guest" placeholder='4 People' required/>
                        </div>
                    </div>
                    <input className='w-100 my-4 p-1 fs-4 bg-transparent text-light border-light border border-2 rounded' type="email" name="email" id="email" 
                    placeholder='Your email address' required/>
                    <Button variant="warning" type='submit' className='py-3 px-5 text-light'>Booking Now <FaArrowRight></FaArrowRight></Button>
                </Form>
            </Row>
        </Container>
    );
};

export default ContactUs;