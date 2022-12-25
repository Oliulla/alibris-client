import React, { useContext, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
// import useUserRole from "../../hooks/useUserRole";
import useSeller from "../../hooks/useSeller";
import useBuyer from "../../hooks/useBuyer";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading";

const DashboardMenu = () => {
  const { user, userSaved } = useContext(AuthContext);
  // console.log("from dashboard", user);
  // const [userRole] = useUserRole(user?.email);
  // console.log(userRole)
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const [isSeller, isSellerLoading] = useSeller(user?.email, userSaved);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email, userSaved);
  // console.log("inside dashbord use hook", isAdmin, isSeller, isBuyer);
  const navigate = useNavigate();

  // if (isSellerLoading) {
  //   return <Loading />;
  // }

  // if (isBuyerLoading) {
  //   return <Loading />;
  // }

  // if (isAdminLoading) {
  //   return <Loading />;
  // }

    // const {
    //   data: userRole = "",
    //   isLoading,
    //   error,
    //   refetch
    // } = useQuery({
    //   queryKey: ["user", user?.email],
    //   queryFn: async () => {
    //     try {
    //       const data = await axios.get(
    //         `http://localhost:5000/user/${user?.email}`
    //       );
    //       if (data.status === 200) {
    //         console.log("check data", data.data.data);
    //         return data?.data?.data;
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   },
    // });

    // console.log(user?.email)
    // if(user?.email && !userRole) {
    //   refetch()
    // }

    // if(isLoading) {
    //   return <p className="text-center text-2xl mt-6">Loading...</p>
    // }

    // if(error) {
    //   return <p className="text-red-500">{error.message}</p>
    // }


    // const isBuyer = userRole === 'buyer' ? true : false;
    // const isSeller = userRole === 'seller' ? true : false;
    // const isAdmin = userRole === 'admin' ? true : false;
    // console.log(userRole)

    // useEffect(() => {
    //   if(isAdmin) {
    //     return navigate("/dashboard/all-sellers");
    //   }
    //   if(isSeller) {
    //     return navigate("/dashboard/add-products");
    //   }
    //   if(isBuyer) {
    //     return navigate("/dashboard/my-orders");
    //   }
    
      
    // }, [isAdmin, isBuyer, isSeller, navigate])
    


  return (
    <div className="min-h-screen relative bg-black">
      <h2 className="text-white font-semibold text-2xl py-4 pl-4">Name: {user?.displayName ? user?.displayName : 'Anonymous'}</h2>
      <ul
        // tabIndex={0}
        className="menu menu-compact fixed top-36 p-2 shadow w-full bg-black h-48 text-white"
      >
        {isBuyer && (
          <>
            <li>
              <Link to="/dashboard/my-orders" className="justify-between">
                My Orders
              </Link>
            </li>
            <li>
              <Link to="/dashboard/my-wishlists" className="justify-between">
                My Wishlists
              </Link>
            </li>
          </>
        )}
        {isSeller && (
          <>
            <li>
              <Link to="/dashboard/add-product">Add A Product</Link>
            </li>
            <li>
              <Link to="/dashboard/my-products">My Products</Link>
            </li>
          </>
        )}
        {isAdmin && (
          <>
            <li>
              <Link to="/dashboard/all-sellers">All Sellers</Link>
            </li>
            <li>
              <Link to="/dashboard/all-buyers">All Buyers</Link>
            </li>
            {/* <li>
              <Link to="/dashboard/reported-items">Reported Items</Link>
            </li> */}
          </>
        )}
      </ul>
    </div>
  );
};

export default DashboardMenu;
