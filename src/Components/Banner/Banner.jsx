import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import banner1 from '../../images/cook4.jpg'
import banner2 from '../../images/cook6.png'
import banner3 from '../../images/cook3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <Carousel slide={false}>
            <Carousel.Item>
                <div>
                    <img
                        className="d-block w-100"
                        style={{ height: '100vh'}}
                        src={banner3}
                        alt="First slide"
                    />
                    <div id="overlay"></div>
                </div>
                <Carousel.Caption className='d-flex justify-content-center align-items-center my-auto ' style={{ height: '100vh', zIndex:'3'}}>
                    <div>
                        <h3>Vegetable Stir-Fry</h3>
                        <p>Vegetable Stir-Fry - A healthy and versatile dish that can be made with a variety of vegetables like broccoli, carrots, peppers, and onions, stir-fried in a flavorful sauce made with soy sauce, ginger, and garlic. It's a great option for a quick and easy weeknight meal.</p>
                        <Button className='mt-5 me-4' variant="warning">Our Menu</Button>
                        <Button className='mt-5' variant="outline-warning">About Us</Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: '100vh' }}
                    src={banner2}
                    alt="Second slide"
                />
                 <div id="overlay"></div>
                <Carousel.Caption className='d-flex justify-content-center align-items-center my-auto ' style={{ height: '100vh', zIndex:'3' }}>
                    <div>
                        <h3>Chocolate Cake </h3>
                        <p>Chocolate Cake - A rich and indulgent dessert made with layers of moist chocolate cake and chocolate frosting. It's a classic dessert that's perfect for special occasions or for satisfying a chocolate craving.</p>
                        <Button className='mt-5 me-4' variant="warning">Our Menu</Button>
                        <Button className='mt-5' variant="outline-warning">About Us</Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: '100vh' }}
                    src={banner1}
                    alt="Third slide"
                />
                 <div id="overlay"></div>
                <Carousel.Caption className='d-flex justify-content-center align-items-center my-auto ' style={{ height: '100vh', zIndex:'3' }}>
                    <div>
                        <h3>hicken Tikka Masala</h3>
                        <p>
                            Chicken Tikka Masala - A popular Indian dish made with marinated chicken that's cooked in a creamy tomato-based sauce with spices like cumin, coriander, and garam masala. It's typically served with rice or naan bread.
                        </p>
                        <Button className='mt-5 me-4' variant="warning">Our Menu</Button>
                        <Button className='mt-5' variant="outline-warning">About Us</Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;