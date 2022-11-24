import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const GoogleLogin = () => {
    const {googleLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleLogin()
        .then(() => {
            toast.success('logged in successfully')
            navigate(from, {replace: true})
        })
        .catch(err => {
            toast.error(err?.message);
        })
    }

    return (
        <>
         <button onClick={handleGoogleLogin} className="btn btn-sm">Login with Google</button>   
        </>
    );
};

export default GoogleLogin;