import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useContext } from "react";
import Loading from "../../components/Loading";
import { AuthContext } from "../../contexts/AuthProvider";

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    // console.log(user);

    const {data: myProducts = [], isLoading, error} = useQuery({
        queryKey: ["myproducts", user?.email],
        queryFn: async() => {
            const data = await axios.get(`http://localhost:5000/myproducts?email=${user?.email}`)
            // console.log(data.data.data);
            return data?.data?.data;
        }
    })

    if(isLoading) {
        return <Loading />
    }
    if(error) {
        console.log(error)
    }
    

  return (
    <div className="overflow-x-auto px-8 my-10">
        <h2 className="text-center text-3xl mb-4 border-b-2 border-secondary">My Products</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Available/Sold</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {
                myProducts.map((categoryProduct) => (categoryProduct.products.map((singleProduct) => {
                    return <tr key={categoryProduct._id + Math.random()}>
                    <td className="font-bold">{singleProduct.bookName}</td>
                    <td>{singleProduct.resalePrice}tk</td>
                    <td>
                        <button className="text-green-700">
                          {singleProduct.isAvailable ? "Unsold" : "Sold"}
                        </button>
                        <button className="ml-4 text-blue-800">
                          {singleProduct.isAvailable ? "Advertise" : ""}
                        </button>
                    </td>
                    <td>
                        <button className="btn btn-sm bg-red-500">Delete</button>
                    </td>
                  </tr>
                })))
            }
          
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
