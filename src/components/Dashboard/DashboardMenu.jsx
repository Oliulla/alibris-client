import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useUserRole from "../../hooks/useUserRole";

const DashboardMenu = () => {
  const { user } = useContext(AuthContext);
  const [userRole] = useUserRole(user?.email);
//   console.log(userRole)

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
        {userRole === "buyer" && (
          <li>
            <Link to="/dashboard/my-orders" className="justify-between">
              My Orders
            </Link>
          </li>
        )}
        {userRole === "seller" && (
          <>
            <li>
              <Link to="/dashboard/add-product">Add A Product</Link>
            </li>
            <li>
              <Link to="/dashboard/my-products">My Products</Link>
            </li>
          </>
        )}
        {userRole === "admin" && (
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
