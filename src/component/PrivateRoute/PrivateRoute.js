import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
        const {user} = useAuth();
        return ( user?.email ? children  : <Navigate to="/login"/>);
};

export default PrivateRoute;