import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Chefs from '../../Components/Chefs/Chefs';
import { Row } from 'react-bootstrap';

const Home = () => {
    const chefs = useLoaderData()
    console.log(chefs)
    return (
        <div>
            <Banner></Banner>
            <Row xs={1} md={3} className="g-4" className='mt-5'>
                {
                    chefs.map(chef => <Chefs
                        key={chef.id}
                        chef={chef}>
                    </Chefs>)
                }
            </Row>
        </div>
    );
};

export default Home;