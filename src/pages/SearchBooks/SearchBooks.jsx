// import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import Banner from "../../components/HomeComponents/Banner";
import Loading from "../../components/Loading";
import { AuthContext } from "../../contexts/AuthProvider";

const SearchBooks = () => {
  const { searchText } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [searchBooks, setSearchBooks] = useState([]);

  console.log("inside searchBooks", searchText);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://alibris-server.vercel.app/categories/products/${searchText}`)
      .then((res) => {
        console.log(res);
        setSearchBooks(res?.data?.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [searchText]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Banner />
          <div className="mt-8 flex justify-center">
            <div className="mb-20">
              {searchBooks?.length && (
                <div className="flex justify-between">
                  <h1 className="text-3xl font-semibold mb-4">
                    Best match for your search
                  </h1>

                  <Link
                    to="/"
                    className="text-secondary btn btn-primary font-semibold"
                  >
                    Go Home
                  </Link>
                </div>
              )}
              <div className="md:flex flex-wrap gap-4">
                {!searchBooks?.length ? (
                  <div>
                    <p className="text-3xl font-semibold text-center w-3/6">
                      Sorry, there is no data matched. Please, search book by
                      book category name or book name. Thank you.
                    </p>
                    <Link to="/" className="text-secondary font-semibold">
                      Go Home
                    </Link>
                  </div>
                ) : (
                  searchBooks?.map((product) => {
                    return (
                      <div
                        key={product._id}
                        className="card w-full md:w-96 h-96 bg-base-100 shadow-xl border border-info mt-4 md:mt-0"
                      >
                        <div className="px-3 py-2">
                          <h2 className="card-title">{product?.bookName}</h2>
                          <div className="flex justify-between">
                            <p>
                              <span className="font-semibold">Location:</span>{" "}
                              {product.location}
                            </p>
                            <p>
                              <span className="font-semibold">
                                Year of used:
                              </span>{" "}
                              {product.yearOfUse}yr
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <p>
                              <span className="font-semibold">Post Date:</span>{" "}
                              {product.postDate}
                            </p>
                            <p>
                              <span className="font-semibold">
                                {product.isAvailable ? "Available" : "Booked"}
                              </span>
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <p>
                              <span className="font-semibold">
                                Resale Price:
                              </span>{" "}
                              {product.resalePrice}tk
                            </p>
                            <p className="line-through">
                              <span className="font-semibold">
                                Original Price:
                              </span>{" "}
                              {product.originalPrice}tk
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <p className="flex">
                              <span className="font-semibold">Seller:</span>{" "}
                              <span className="text-xl text-white px-2 rounded-sm bg-gray-900 flex justify-center items-center ml-2">
                                {product.sellerName}
                                {product?.status === "Verified" && (
                                  <span className="text-blue-500">
                                    <HiCheckCircle />
                                  </span>
                                )}
                              </span>
                            </p>
                            <p>
                              <span className="font-semibold">
                                Seller Phone:
                              </span>{" "}
                              {product.sellerPhone}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <p>
                              <span className="font-semibold">Condition:</span>{" "}
                              {product.bookCondition}
                            </p>
                            <button className="btn btn-primary btn-sm btn-disabled">
                              Report
                            </button>
                          </div>
                        </div>
                        <div className="md:h-1/2">
                          <img
                            className="h-40 w-full absolute bottom-0 rounded-b-xl md:h-1/2"
                            src={product?.bookImgUrl}
                            alt=""
                          />
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SearchBooks;
