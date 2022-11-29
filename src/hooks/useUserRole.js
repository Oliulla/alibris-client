import { useEffect, useState } from "react"

const useUserRole = (email) => {
    const [userRole, setUserRole] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    // console.log(email);

    useEffect(() => {
        if(email) {
            fetch(`https://alibris-server.vercel.app/user/${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setUserRole(data?.data);
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false)
                console.log(error);
            })
        }
    }, [email])
    return [userRole, isLoading];
}

export default useUserRole;
