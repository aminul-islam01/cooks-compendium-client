import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Components/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <h4>footer section</h4>
        </div>
    );
};

export default Main;