import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Recipe = ({ recipe }) => {
    const [recipeDetails, setRecipeDetails] = useState(false);
    const { image, recipeName, ingredients, ratings } = recipe;


    // console.log(recipe)
    return (
        <Col>
            <Card className='mb-4'>
                <Card.Img variant="top" src={image} style={{ height: '250px' }} />
                <Card.Body>
                    <Card.Title>{recipeName}</Card.Title>
                    <h6>Ingredients:</h6>
                    <ol>
                        {
                            ingredients.map((ingredient, idIndx) => <li
                                key={idIndx}>
                                {ingredient}
                            </li>)
                        }
                    </ol>
                    <div className='d-flex align-items-center'>
                    <Rating
                        style={{ maxWidth: 150 }}
                        readOnly
                        value={ratings.taste}
                    />
                    <span className='ms-2 text-secondary'>{ratings.taste}</span>
                    </div>

                    <div className='d-flex justify-content-between gap-3 mt-3'>
                        <Button className='w-50' variant="primary">Favorite</Button>
                        <Button className='w-50' variant="outline-primary" onClick={() => setRecipeDetails(true)}>Details</Button>
                    </div>
                    <RecipeDetails
                        show={recipeDetails}
                        onHide={() => setRecipeDetails(false)}
                        recipe={recipe}>
                    </RecipeDetails>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Recipe;