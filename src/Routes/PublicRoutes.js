import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';

const PublicRoutes = ({children}) => {
    const {loading } = useContext(AuthContext)

    if (loading) {
        return <div className='flex justify-center m-20'><button className="btn loading">loading</button></div>
    }
    return children;
};

export default PublicRoutes;