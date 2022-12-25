import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
// import useUserRole from "../hooks/useUserRole";
import Loading from "../components/Loading";
import useBuyer from "../hooks/useBuyer";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(user);
  // const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
  // const [userRole, isLoading] = useUserRole(user?.email)
  // console.log(isBuyerLoading);
  //------------------------------------------use query-----------------------------------

  const {
    data: isBuyer = false,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      try {
        const data = await axios.get(
          `http://localhost:5000/user/${user?.email}`
        );
        if (data.status === 200) {
          if(data?.data?.data === 'buyer') {
            return true;
          }
          else {
            return false;
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  // console.log(loading, isLoading);

  if((loading || isLoading)) {
    return <Loading />
  }

  if(error) {
    console.log(error);
  }

  if (user?.uid && isBuyer) {
    return children;
  }
  return <Navigate to="/login" state={{from: location}} replace />
};

export default PrivateRoute;
