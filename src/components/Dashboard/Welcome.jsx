import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Welcome = () => {
    const {user} = useContext(AuthContext);

    return (
        <div className='flex justify-center mt-10'>
             <h2 className='text-3xl font-bold'>Hey <span className='text-blue-400'>{user.displayName}</span>, Welcome to your Dashboard</h2>
        </div>
    );
};

export default Welcome;