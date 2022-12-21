import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useContext } from "react";
import Loading from "../../components/Loading";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import PermissionModal from "../../components/OpenModal/PermissionModal";
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
        `https://alibris-server.vercel.app/myproducts?email=${user?.email}`
      );
      // var productsArr = data.data.data;
      // var products = Array.prototype.concat.apply([], productsArr);
      // // console.log(products);
      // // setIsProductLoading(!isProductLoading)
      // console.log(data.data.data);
      return data?.data?.data;
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
    fetch(`https://alibris-server.vercel.app/advertiseProducts`, {
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

  return (
    <>
      {!myProducts.length ? (
        <p className="text-3xl mt-4 text-center py-12">
          You have not added any product
        </p>
      ) : (
        <div className="overflow-x-auto px-8 my-10">
          <h2 className="text-center text-2xl font-semibold mb-4 border-b-2 border-secondary">
            My Products
          </h2>
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Available</th>
                <th>Addvertise</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myProducts.map((singleProduct) => {
                return (
                  <tr key={singleProduct._id}>
                    <td className="font-bold">{singleProduct.bookName}</td>
                    <td>{singleProduct.resalePrice}tk</td>
                    <td>
                      <span className="font-semibold text-green-700">
                        {singleProduct.isAvailable ? "Unsold" : "Sold"}
                      </span>
                    </td>
                    <td>
                      <button
                      
                        className={`btn btn-sm btn-primary text-white font-extrabold ${singleProduct.isAvailable ? undefined : "btn-disabled"}`}
                        onClick={() => handleAdvertise(singleProduct)}
                      >
                        Advertise
                      </button>
                    </td>
                    <td>
                      {/* <label htmlFor="my-modal-6" className="btn">open modal</label> */}
                      <label
                        htmlFor="product-delet-modal"
                        className="btn btn-sm bg-red-500"
                      >
                        Delete
                      </label>
                      <PermissionModal
                        productId={singleProduct._id}
                        refetch={refetch}
                      />
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
