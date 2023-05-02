import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h2>navbar</h2>
            <Outlet></Outlet>
            <h4>footer section</h4>
        </div>
    );
};

export default Main;