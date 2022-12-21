import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const MyWishlist = () => {
    const [wishlists, setWishlists] = useState([]);
    const {user} = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://alibris-server.vercel.app/myWishlists/${user?.email}`)
        .then(data => {
            setWishlists(data?.data?.data);
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
            setIsLoading(false);
        })
    }, [user?.email])

    console.log(wishlists);

    return (
        <>
        {wishlists.length && !isLoading ? (
          <>
            <div className="mx-auto px-20 my-10">
              <h2 className="text-3xl text-accent font-semibold mb-2">
                My Wishlists
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
                    {wishlists?.map((wishlist, idx) => {
                      return (
                        <tr key={wishlist._id}>
                          <th>{idx + 1}</th>
                          <td>
                            <img
                              className="w-12 h-12"
                              src={wishlist?.imgUrl}
                              alt=""
                            />
                          </td>
                          <td>{wishlist?.bookName}</td>
                          <td>{wishlist?.resalePrice}tk</td>
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
              You have no books in wishlist. To add wishlist
            </span>
            <Link to="/" className="text-secondary font-semibold underline ml-2">
              Visit here
            </Link>
          </p>
        )}
      </>
    );
};

export default MyWishlist;