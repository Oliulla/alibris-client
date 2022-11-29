import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
// import useUserRole from "../../hooks/useUserRole";
import useSeller from "../../hooks/useSeller";
import useBuyer from "../../hooks/useBuyer";

const DashboardMenu = () => {
  const { user } = useContext(AuthContext);
  // const [userRole] = useUserRole(user?.email);
  //   console.log(userRole)
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);


  //   const {
  //     data: userRole = {},
  //     isLoading,
  //     error,
  //   } = useQuery({
  //     queryKey: ["user", user?.email],
  //     queryFn: async () => {
  //       try {
  //         const data = await axios.get(
  //           `https://alibris-server.vercel.app/user/${user?.email}`
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
          <li>
            <Link to="/dashboard/my-orders" className="justify-between">
              My Orders
            </Link>
          </li>
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
