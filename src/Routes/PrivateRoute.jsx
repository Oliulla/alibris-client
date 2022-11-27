import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useUserRole from "../hooks/useUserRole";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [userRole, isLoading] = useUserRole(user?.email)

  if(loading || isLoading) {
    return <Loading />
  }

  if (user && userRole === 'buyer') {
    return children;
  }
  return <Navigate to="/login" state={{from: location}} replace />
};

export default PrivateRoute;
