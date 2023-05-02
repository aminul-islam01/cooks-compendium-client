import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Chefs from '../../Components/Chefs/Chefs';

const Home = () => {
    const chefs = useLoaderData()
    console.log(chefs)
    return (
        <div>
            <Banner></Banner>
            {
                chefs.map(chef => <Chefs
                    key={chef.id}
                    chef={chef}>
                </Chefs>)
            }
        </div>
    );
};

export default Home;