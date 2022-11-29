import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Loading from '../../components/Loading';
// import useGetUser from '../../hooks/useGetUser';

const AllBuyers = () => {
    // const [users, userLoading] = useGetUser();

    const {data: buyers = [], isLoading, refetch } = useQuery({
      queryKey: ["buyers"],
      queryFn: async() => {
        try {
          const data = await axios.get(`https://alibris-server.vercel.app/buyers`);
          // console.log(data.data);
          return data?.data;
        } catch (error) {
          console.log(error)
        }
      }
    })
  
    // console.log(users);
    const handleBuyerDelete = buyerId => {
      axios.delete(`https://alibris-server.vercel.app/buyers/${buyerId}`)
      .then(data => {
        // console.log(data);
        refetch()
      })
    }

    // const buyers = users.filter(user => user?.role === 'buyer');

    return (
        <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="overflow-x-auto mx-auto px-6 my-10">
          <h2 className="text-3xl font-semibold mb-2">All buyers</h2>
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
              {buyers.map((buyer, idx) => {
                return (
                  <tr key={buyer._id}>
                    <th>{idx + 1}</th>
                    <td>{buyer?.name}</td>
                    <td>{buyer?.role}</td>
                    <td>
                      <button onClick={() => handleBuyerDelete(buyer._id)} className="text-red-600">Delete</button>
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

export default AllBuyers;