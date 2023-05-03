import React from 'react';
import { Card, Col } from 'react-bootstrap';

const FeatureRecipe = ({recipe}) => {
    const {name, picture} = recipe;
    return (
        <Col>
            <Card className='mb-4 shadow'>
                <Card.Img variant="top" src={picture} style={{ height: '250px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default FeatureRecipe;