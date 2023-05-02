import React from 'react';
// import { Card, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Chefs = ({ chef }) => {
    const { name, picture } = chef;
    console.log(chef)
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={picture}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Chefs;