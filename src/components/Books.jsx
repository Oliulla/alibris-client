import axios from "axios";
import React from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { HiCheckCircle } from "react-icons/hi";
import { AuthContext } from "../contexts/AuthProvider";

const Books = ({ book, handleBooking }) => {
  const { user } = useContext(AuthContext);
  const {
    bookName,
    location,
    resalePrice,
    originalPrice,
    yearOfUse,
    postDate,
    sellerName,
    bookImgUrl,
    status,
    _id,
    isAvailable
  } = book;

  const handleWishlist = (bookName, resalePrice, imgURL, productId) => {
    const wishlistProduct = {
      email: user?.email,
      displayName: user?.displayName,
      bookName: bookName,
      resalePrice: resalePrice,
      imgUrl: imgURL,
      productId,
    };

    axios
      .post("https://alibris-server.vercel.app/mywishlist", wishlistProduct)
      .then((data) => {
        console.log(data);
        toast.success(`Successfully ${bookName} added in wishlist!!!`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card card-side bg-base-100 border-r-2 border-blue-500 shadow-2xl">
      <figure>
        <img src={bookImgUrl} alt={book?.bookName} className="h-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black font-semibold">{bookName}</h2>
        <div>
          <p className="my-2 md:my-6">
            <span className="font-semibold">Location:</span> {location}
          </p>
          <p className="my-2 md:my-6">
            <span className="font-semibold">Resale Price:</span> {resalePrice}tk
          </p>
          <p className="my-2 md:my-6">
            <span className="font-semibold">Original Price:</span>{" "}
            {originalPrice}tk
          </p>
          <p className="my-2 md:my-6">
            <span className="font-semibold">Years of use:</span> {yearOfUse}
          </p>
          <p className="my-2 md:my-6">
            <span className="font-semibold">Posted:</span> {postDate}
          </p>
          <div className="my-2 md:my-6 flex">
            <span className="font-semibold inline-flex">Seller:</span>
            <p className="flex">
              <span className="text-xl text-white px-2 rounded-sm bg-gray-900 flex justify-center items-center ml-2">
                {sellerName}
                {status === "Verified" && (
                  <span className="text-blue-500">
                    <HiCheckCircle />
                  </span>
                )}
              </span>
            </p>
          </div>
        </div>
        {

        }
        <div className="card-actions justify-end">
          <button
            onClick={() =>
              handleWishlist(bookName, resalePrice, bookImgUrl, _id)
            }
            htmlFor="booking-modal"
            className={`btn btn-accent text-base-100 ${!isAvailable && "btn-disabled bg-gray-300"}`}
          >
            Add Wishlist
          </button>
          <label
            onClick={() =>
              handleBooking(bookName, resalePrice, bookImgUrl, _id)
            }
            htmlFor="booking-modal"
            className={`btn btn-primary text-base-100 ${!isAvailable && "btn-disabled bg-gray-300"}`}
          >
            {isAvailable ? <span>Book Now</span> : "Booked"}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Books;
