import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Chefs from '../../Components/Chefs/Chefs';
import { Container, Row } from 'react-bootstrap';

const Home = () => {
    const chefs = useLoaderData()
    console.log(chefs)
    return (
        <div>
            <Banner></Banner>
            <Container>
            <h2 className='mt-5 mb-4 text-warning text-center'>Our Creative Team</h2>
            <Row xs={1} md={3}>
                {
                    chefs.map(chef => <Chefs
                        key={chef.id}
                        chef={chef}>
                    </Chefs>)
                }
            </Row>
            </Container>
        </div>
    );
};

export default Home;