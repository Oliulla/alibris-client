import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetUser = () => {
    const [users, setUsers] = useState([]);
    const [userLoading, setUserLoading] = useState(true);

    useEffect(() => {
        setUserLoading(true)
        axios.get('https://alibris-server.vercel.app/users')
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