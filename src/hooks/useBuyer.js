import { useEffect, useState } from "react";

const useBuyer = (email, userSaved) => {

  const [isBuyer, setIsBuyer] = useState(false);
  const [isBuyerLoading, setIsBuyerLoading] = useState(true);
  
  useEffect(() => {
    if (email) {
      // setIsBuyerLoading(true);
      fetch(`http://localhost:5000/users/buyer/${email}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
          setIsBuyer(data.isBuyer);
          setIsBuyerLoading(false);
        })
        .catch(err => {
          console.log(err)
        })
    } 
  }, [email, userSaved]);
  
  return [isBuyer, isBuyerLoading];
};

export default useBuyer;
