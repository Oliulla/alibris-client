import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
// import useUserRole from "../hooks/useUserRole";
import Loading from "../components/Loading";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email)
  const location = useLocation();
  // const [userRole, isLoading] = useUserRole(user?.email);
  // console.log(user, userRole);

  if (loading || isAdminLoading) {
    return <Loading />
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
