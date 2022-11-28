import React from "react";

const Books = ({ book, handleBooking }) => {
  const {
    bookName,
    location,
    resalePrice,
    originalPrice,
    yearOfUse,
    postDate,
    sellerName,
    bookImgUrl,
  } = book;

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
          <p className="my-2 md:my-6">
            <span className="font-semibold">Seller:</span> {sellerName}
          </p>
        </div>
        <div className="card-actions justify-end">
          <label
            onClick={() => handleBooking(bookName, resalePrice, bookImgUrl)}
            htmlFor="booking-modal"
            className="btn btn-primary text-base-100"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default Books;
