import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Loading from '../Shared/Loading';
import UseAdmin from './UseAdmin';

const RequireUser = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = UseAdmin(user)
    const location = useLocation()

    if (loading || adminLoading) {
        return <Loading></Loading>
    }


    if (!user || admin) {
        localStorage.removeItem('accessToken')
        toast.error("its is procted for User")
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireUser;