import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import NavigationBar from '../Components/NavigationBar/NavigationBar';
import Footer from '../Components/Footer/Footer';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';

const Main = () => {
    const navigation = useNavigation();
    if(navigation.state === 'loading') {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;