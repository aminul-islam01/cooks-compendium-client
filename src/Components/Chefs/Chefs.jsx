import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Chefs = ({ chef }) => {
    const { id, name, picture, experience_years, recipes, total_likes } = chef;
    return (
        <Col>
            <Card className='mb-4'>
                <Card.Img variant="top" src={picture} style={{ height: '250px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div>
                        <p>Work Experience: {experience_years} years</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <span>Total Recipes: {recipes}</span>
                            <span><FaThumbsUp className='me-2 text-primary'></FaThumbsUp>{total_likes}k</span>
                        </div>
                        <Link to={`/chef-recipe/${id}`}>
                            <Button className='mt-3' variant="danger">View Recipes</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Chefs;