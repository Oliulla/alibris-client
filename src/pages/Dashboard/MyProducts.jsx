import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useContext } from "react";
import Loading from "../../components/Loading";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
// import useRefetch from "../../hooks/useRefetch";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  // const [isProductLoading, setIsProductLoading] = useRefetch();

  let {
    data: myProducts = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["myproducts", user?.email],
    queryFn: async () => {
      const data = await axios.get(
        `http://localhost:5000/myproducts?email=${user?.email}`
      );
      var productsArr = data.data.data;
      var products = Array.prototype.concat.apply([], productsArr);
      // console.log(products);
      // setIsProductLoading(!isProductLoading)
      return products;
    },
  });

  if (isLoading) {
    refetch();
    return <Loading />;
  }
  if (error) {
    console.log(error);
  }

  // advertise items save to db
  const handleAdvertise = (advertiseProduct) => {
    fetch(`http://localhost:5000/advertiseProducts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(advertiseProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success("successfully added as advertise items");
        }
      });
  };

  // need aggregate to delete this product
  const handleProductDelete = (deletedProduct) => {
    // console.log(myProducts, deletedProduct);
    // console.log(deletedProduct);
    // fetch(`http://localhost:5000/myproducts/${_id}`, {
    //   method: 'PUT',
    //   body: JSON.stringify(deletedProduct)
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data)
    // })
  };

  return (
    <>
      {!myProducts.length ? (
        <p className="text-3xl mt-4">You have not added any product</p>
      ) : (
        <div className="overflow-x-auto px-8 my-10">
          <h2 className="text-center text-3xl mb-4 border-b-2 border-secondary">
            My Products
          </h2>
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
              {myProducts.map((singleProduct, idx) => {
                return (
                  <tr key={idx}>
                    <td className="font-bold">{singleProduct.bookName}</td>
                    <td>{singleProduct.resalePrice}tk</td>
                    <td>
                      <button className="text-green-700">
                        {singleProduct.isAvailable ? "Unsold" : "Sold"}
                      </button>
                      <button
                        className="ml-4 text-blue-800"
                        onClick={() => handleAdvertise(singleProduct)}
                      >
                        {singleProduct.isAvailable ? "Advertise" : ""}
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleProductDelete(singleProduct)}
                        className="btn btn-sm bg-red-500"
                      >
                        Delete
                      </button>
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

export default MyProducts;
