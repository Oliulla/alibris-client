import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const {
    isLoading,
    error,
    data: bookings = [],
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      try {
        const data = await axios.get(
          `http://localhost:5000/bookings?email=${user?.email}`
        );
        if (data.status === 200) {
          return data.data.data;
        }
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isLoading)
    return <Loading />

  if (error) {
    return <p>{"An error has occurred: " + error.message}</p>;
  }

  return (
    <>
      {bookings.length && !isLoading ? (
        <>
          <div className="mx-auto px-20 my-10">
            <h2 className="text-3xl text-accent font-semibold mb-2">
              My Orders
            </h2>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings?.map((order, idx) => {
                    return (
                      <tr key={order._id}>
                        <th>{idx + 1}</th>
                        <td>
                          <img
                            className="w-12 h-12"
                            src={order?.productImg}
                            alt=""
                          />
                        </td>
                        <td>{order?.title}</td>
                        <td>{order?.price}tk</td>
                        <td>
                          <button className="btn btn-primary btn-sm">
                            Pay
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <p className="mt-10 mb-56 text-center">
          <span className="text-3xl">
            You have no order. To give order
          </span>
          <Link to="/" className="text-secondary font-semibold underline ml-2">
            Visit here
          </Link>
        </p>
      )}
    </>
  );
};

export default MyOrders;
