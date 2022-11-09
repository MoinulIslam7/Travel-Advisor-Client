import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(user);

    if(loading){
        return <h2 className='text-xl text-center'>Loading...</h2>
    }
    
    if(!user){
        return <Navigate to='/Login' state={{from: location}} replace></Navigate>
    }
    else{
        return children;
    }
};

export default PrivateRoutes;