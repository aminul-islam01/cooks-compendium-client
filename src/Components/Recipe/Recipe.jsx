import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import Swal from 'sweetalert2'

const Recipe = ({ recipe }) => {
    const [recipeDetails, setRecipeDetails] = useState(false);
    const { image_url, name, ratings } = recipe;
    const [show, setShow] = useState(false)

    const handleFavorite = () => {
        setShow(!show);
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Add to favorite saved',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <Col>
            <Card className='mb-4'>
                <Card.Img variant="top" src={image_url} style={{ height: '250px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div className='d-flex align-items-center'>
                        <Rating
                            style={{ maxWidth: 150 }}
                            readOnly
                            value={ratings}
                        />
                        <span className='ms-2 text-secondary'>{ratings}</span>
                    </div>

                    <div className='d-flex justify-content-between gap-3 mt-3'>
                        <Button onClick={handleFavorite} disabled={show} className='w-50' variant="primary">Favorite</Button>
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