import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
// import useUserRole from "../../hooks/useUserRole";
import useSeller from "../../hooks/useSeller";
import useBuyer from "../../hooks/useBuyer";

const DashboardMenu = () => {
  const { user } = useContext(AuthContext);
  console.log("from dashboard", user);
  // const [userRole] = useUserRole(user?.email);
  // console.log(userRole)
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
  console.log("inside dashbord use hook", isAdmin, isSeller, isBuyer);

  if (isSellerLoading) {
    return;
  }

  if (isBuyerLoading) {
    return;
  }

  if (isAdminLoading) {
    return;
  }

  //   const {
  //     data: userRole = {},
  //     isLoading,
  //     error,
  //   } = useQuery({
  //     queryKey: ["user", user?.email],
  //     queryFn: async () => {
  //       try {
  //         const data = await axios.get(
  //           `http://localhost:5000/user/${user?.email}`
  //         );
  //         if (data.status === 200) {
  //           return data?.data?.data;
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     },
  //   });

  //   if(isLoading) {
  //     return <p className="text-center text-2xl mt-6">Loading...</p>
  //   }

  //   if(error) {
  //     return <p className="text-red-500">{error.message}</p>
  //   }

  return (
    <div>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
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
            <li>
              <Link to="/dashboard/reported-items">Reported Items</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default DashboardMenu;
