import React, { useContext } from 'react';
import { UserContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(UserContext);
    const location = useLocation();
    // console.log(location)

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }else if(user){
        return children;
    }else {
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>;
    }
};

export default PrivateRoute;