import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const RecipeDetails = (props) => {
    const recipe = props.recipe;
    const { image, recipeName, ingredients, cookingMethod } = recipe;
    const cookiesDetails = cookingMethod.split('.');
    console.log(recipe)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {recipeName}
                </Modal.Title>
            </Modal.Header>
            <Card className='mb-4'>
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{recipeName}</Card.Title>
                    <h6 className='mt-4'>Ingredients:</h6>
                    <ol>
                        {
                            ingredients.map((ingredient, idIndx) => <li
                                key={idIndx}>
                                {ingredient}
                            </li>)
                        }
                    </ol>
                    <h6 className='mt-4'>Cooking Method:</h6>
                    <ol>
                        {
                            cookiesDetails.map((cook, idIndx) => <li
                                key={idIndx}>
                                {cook}
                            </li>)
                        }
                    </ol>
                    <div className='text-end'>
                    <Button onClick={props.onHide}>Close</Button>
                    </div>
                </Card.Body>
            </Card>
        </Modal>
    );
};

export default RecipeDetails;