import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useUserRole from "../hooks/useUserRole";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [userRole, isLoading] = useUserRole(user?.email)

  if(loading || isLoading) {
    return <p className="text-center text-2xl mt-10">Loading...</p>
  }

  if (user && userRole === 'buyer') {
    return children;
  }
  return <Navigate to="/login" state={{from: location}} replace />
};

export default PrivateRoute;
