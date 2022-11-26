import React from "react";
import Loading from "../../components/Loading";
import useGetUser from "../../hooks/useGetUser";

const AllSellers = () => {
  const [users, userLoading] = useGetUser();
  // console.log(users);

  const sellers = users.filter((user) => user?.role === "seller");
  //   console.log(sellers);

  return (
    <>
      {userLoading ? (
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
                      <button>Delete</button>
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
