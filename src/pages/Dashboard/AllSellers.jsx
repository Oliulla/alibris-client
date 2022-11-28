import React from "react";
import Loading from "../../components/Loading";
// import useGetUser from "../../hooks/useGetUser";
import { useQuery } from '@tanstack/react-query'
import axios from "axios";
// import { useEffect } from "react";


const AllSellers = () => {
  // const [users, userLoading] = useGetUser();

  const {data: sellers = [], isLoading, refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: async() => {
      try {
        const data = await axios.get(`http://localhost:5000/sellers`);
        // console.log(data.data);
        return data?.data;
      } catch (error) {
        console.log(error)
      }
    }
  })

  // console.log(users);
  const handleSellerDelete = sellerId => {
    axios.delete(`http://localhost:5000/sellers/${sellerId}`)
    .then(data => {
      console.log(data);
      refetch()
    })
  }
  

  // const sellers = users.filter((user) => user?.role === "seller");
  //   console.log(sellers);


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
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((seller, idx) => {
                return (
                  <tr key={seller._id}>
                    <th>{idx + 1}</th>
                    <td>{seller?.name}</td>
                    <td>{seller?.role}</td>
                    <td>
                      <button onClick={() => handleSellerDelete(seller._id)} className="text-red-600">Delete</button>
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
