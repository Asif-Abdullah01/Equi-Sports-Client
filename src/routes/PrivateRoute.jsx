import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';



const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    const location = useLocation();
    console.log(location);

    if (loading) {
        return <>
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
        </>
    }

    if (user && user?.email) return children;

    return (
        <Navigate state={{from:location.pathname}} to={'/login'}></Navigate>
    );
};

export default PrivateRoute;