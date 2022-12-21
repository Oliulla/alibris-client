import { useEffect, useState } from "react";

const useSeller = (email, userSaved) => {
  const [isSeller, setIsSeller] = useState(false);
  const [isSellerLoading, setIsSellerLoading] = useState(true);
  // console.log(email)
  useEffect(() => {
    if (email) {
      fetch(`https://alibris-server.vercel.app/users/seller/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsSeller(data.isSeller);
          setIsSellerLoading(false);
        });
    }
  }, [email, userSaved]);
  return [isSeller, isSellerLoading];
};

export default useSeller;
