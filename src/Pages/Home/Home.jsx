import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Chefs from '../../Components/Chefs/Chefs';
import { Container, Row } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import FeatureRecipe from '../../Components/FeatureRecipe/FeatureRecipe';

const Home = () => {
    const chefs = useLoaderData();
    const [featureRecipes, setFeatureRecipes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/feature-recipe')
            .then(res => res.json())
            .then(data => setFeatureRecipes(data))
    }, [])

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

                <h2 className='mt-5 mb-4 text-warning text-center'>Our Feature Recipes</h2>
                <Marquee speed={100}>
                    <Row className='me-4'>
                        {
                            featureRecipes.map(recipe => <FeatureRecipe
                                key={recipe.id}
                                recipe={recipe}></FeatureRecipe>)
                        }
                    </Row>
                </Marquee>
            </Container>
        </div>
    );
};

export default Home;