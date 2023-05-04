import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container>
            <Row xs={1} md={2}>
                <div className='my-5 mx-auto'>
                    <h4>1: How to differences between uncontrolled and controlled components?</h4>
                    <p><strong>Answer:</strong> In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                    <h4>2: How to validate React props using PropTypes?</h4>
                    <ol>
                        <strong>Answer:</strong>
                        <li>PropTypes.any : The prop can be of any data type.</li>
                        <li>PropTypes.bool : The prop should be a Boolean.</li>
                        <li>PropTypes.number : The prop should be a number.</li>
                        <li>PropTypes.string : The prop should be a string.</li>
                        <li>PropTypes.func : The prop should be a function.</li>
                        <li>PropTypes.array : The prop should be an array.</li>
                    </ol>
                    <h4>3: How to difference between nodejs and express js?</h4>
                    <p><strong>Answer:</strong> Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p>
                    <h4>4: What is a custom hook, and why will you create a custom hook?</h4>
                    <p><strong>Answer:</strong> Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated. How does a custom Hook get isolated state? Each call to a Hook gets isolated state.</p>
                </div>
            </Row>
        </Container>
    );
};

export default Blogs;