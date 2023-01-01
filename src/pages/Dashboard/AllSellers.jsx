import React, { useState } from "react";
import Loading from "../../components/Loading";
// import useGetUser from "../../hooks/useGetUser";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { useContext } from "react";
// import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";
// import { useEffect } from "react";

const AllSellers = () => {
  // const [users, userLoading] = useGetUser();
  // const {user} = useContext(AuthContext);
  // console.log(user);
  // const [isVerified, setIsverified] = useState(false);

  const {
    data: sellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      try {
        const data = await axios.get(`https://alibris-server.vercel.app/sellers`);
        // console.log(data.data);
        return data?.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  // console.log(users);
  const handleSellerDelete = (sellerId) => {
    axios.delete(`https://alibris-server.vercel.app/sellers/${sellerId}`).then((data) => {
      console.log(data);
      refetch();
    });
  };

  // const sellers = users.filter((user) => user?.role === "seller");
  //   console.log(sellers);

  // verify sellers
  const verifySeller = (userEmail) => {
    axios
      .put(`https://alibris-server.vercel.app/sellerVerified/${userEmail}`)
      .then((data) => {
        console.log(data);
        toast.success("Successfully verified the seller!!!");
        // setIsverified(!isVerified);
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="overflow-x-auto mx-auto px-6 my-10">
          <h2 className="text-3xl font-semibold mb-2">All Sellers</h2>
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((seller, idx) => {
                return (
                  <tr key={seller._id}>
                    <th>{idx + 1}</th>
                    <td>{seller?.name}</td>
                    <td>{seller?.email}</td>
                    <td>
                      <button
                        onClick={() => handleSellerDelete(seller._id)}
                        className="btn bg-red-600 text-white btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      {seller?.status === "Verified" ? (
                        <span className="text-info font-semibold">Verified</span>
                      ) : (
                        <button
                          onClick={() => verifySeller(seller?.email)}
                          className="btn btn-sm btn-primary"
                        >
                          Verify
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default AllSellers;
