import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
// import useUserRole from "../hooks/useUserRole";
import Loading from "../components/Loading";
import useBuyer from "../hooks/useBuyer";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(user);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email)
  // const [userRole, isLoading] = useUserRole(user?.email)
  // console.log(isBuyerLoading);

  console.log(loading, isBuyerLoading);

  if((loading || isBuyerLoading)) {
    return <Loading />
  }

  if (user && isBuyer) {
    return children;
  }
  return <Navigate to="/login" state={{from: location}} replace />
};

export default PrivateRoute;
