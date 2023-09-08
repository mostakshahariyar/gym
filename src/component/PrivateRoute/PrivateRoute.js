import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
        const { user, isLogin } = useAuth();
        if (isLogin) {
                return <div className='flex justify-center h-screen items-center align-center gap-1'>
                        <p className='text-2xl animate-ping font-mono text-sky-500'>Loading</p>
                </div>
        }
        return (user?.email ? children : <Navigate to="/login" />);
};

export default PrivateRoute;