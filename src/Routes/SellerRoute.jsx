import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
// import useUserRole from "../hooks/useUserRole";
import Loading from "../components/Loading";
import useSeller from "../hooks/useSeller";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();
  // const [userRole, isLoading] = useUserRole(user?.email);
  // console.log(user, userRole);

  if (loading || isSellerLoading) {
    return <Loading />
  }

  if (user && isSeller) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SellerRoute;
