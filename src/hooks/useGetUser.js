import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useGetUser = () => {
    const [users, setUsers] = useState([]);
    const [userLoading, setUserLoading] = useState(true);

    useEffect(() => {
        setUserLoading(true)
        axios.get('http://localhost:5000/users')
        .then(data => {
            setUsers(data.data.data)
            setUserLoading(false);
        })
        .catch(error => {
            setUserLoading(false)
            console.log(error);
        })
    }, [])
    return [users, userLoading]
};

export default useGetUser;