import React from 'react';
import './LoadingSpinner.css';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
    return (
        <div className='loading'>
            <div>
             <span className='fs-1'>L</span>
             <Spinner animation="border" variant="warning" />
             <span className='fs-1'>ading....</span>
            </div>
        </div>
    );
};

export default LoadingSpinner;