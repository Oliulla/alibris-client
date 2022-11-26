import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useUserRole from "../hooks/useUserRole";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [userRole, isLoading] = useUserRole(user?.email);
  // console.log(user, userRole);

  if (loading || isLoading) {
    return <p className="text-center mt-28 text-2xl">Loading...</p>;
  }

  if (user && userRole === "seller") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SellerRoute;
