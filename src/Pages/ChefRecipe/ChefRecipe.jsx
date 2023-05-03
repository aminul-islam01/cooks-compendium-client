import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../../Components/Recipe/Recipe';

const ChefRecipe = () => {
    const chef = useLoaderData();
    const [chefRecipes, setChefRecipes] = useState([]);
    const { id, name, picture, bio, experience_years, recipes, total_likes } = chef;

    useEffect(() => {
        fetch(`http://localhost:5000/recipes/${id}`)
        .then(res=> res.json())
        .then(data=> setChefRecipes(data))
    } , [])
    // console.log(chef)
    return (
        <Container>
            <Row className='py-4'>
                <Col sm={8}>
                    <Card>
                        <img src={picture} style={{ height: '80vh' }} />
                    </Card>
                </Col>
                <Col sm={4}>
                    <h1>{name}</h1>
                    <p>{bio}</p>
                    <p>Work Experience: {experience_years} year</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <span>Total Recipes: {recipes}</span>
                        <span><FaThumbsUp className='me-2 text-primary'></FaThumbsUp>{total_likes}k</span>
                    </div>
                </Col>
            </Row>
            <h2 className='mt-5 text-center'>{name} Special Recipes</h2>
            <Row xs={1} md={3} className="g- mt-5">
                {
                    chefRecipes.map((recipe, idIndx) => <Recipe 
                    key={idIndx}
                    recipe={recipe}></Recipe>)
                }
            </Row>
        </Container>
    );
};

export default ChefRecipe;