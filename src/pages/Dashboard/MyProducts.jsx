import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const MyProducts = () => {
    const {user} = useContext(AuthContext);

    const {data: myProducts = [], isLoading, error} = useQuery({
        queryKey: ["sellerProduct", user?.email],
        queryFn: async() => {
            const data = await axios.get(`http://localhost:5000/sellerProduct?email=${user?.email}`)
            // console.log(data.data.data);
            return data?.data?.data;
        }
    })

    // console.log(myProducts);
    

  return (
    <div className="overflow-x-auto px-8 my-10">
        <h2 className="text-center text-3xl mb-4 border-b-2 border-secondary">My Products</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Available/Sold</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {
                myProducts.map((categoryProduct, idx) => (categoryProduct.products.map((singleProduct) => {
                    return <tr key={categoryProduct._id}>
                    <th>{idx + 1}</th>
                    <td className="font-bold">{singleProduct.productName}</td>
                    <td>{singleProduct.resalePrice}tk</td>
                    <td>
                        <button>Available</button>
                        <button className="ml-4">Advertise</button>
                    </td>
                    <td>Delete</td>
                  </tr>
                })))
            }
          
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
