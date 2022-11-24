import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoryBooks = () => {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <div className="mt-10 mx-auto px-2 lg:px-8">
      <h2 className="text-3xl font-semibold mb-4">
        All books for {data?.categoryName}
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {data?.books?.map((book) => (
          <div
            key={book.bookId}
            className="card card-side bg-base-100 border-r-2 border-blue-500 shadow-2xl"
          >
            <figure>
              <img src={book?.imgURL} alt={book?.bookName} className="h-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black font-semibold">{book?.bookName}</h2>
              <div>
                <p className="my-2 md:my-6">
                  <span className="font-semibold">Location:</span> {book?.location}
                </p>
                <p className="my-2 md:my-6">
                  <span className="font-semibold">Resale Price:</span> {book?.resalePrice}tk
                </p>
                <p className="my-2 md:my-6">
                  <span className="font-semibold">Original Price:</span> {book?.originalPrice}tk
                </p>
                <p className="my-2 md:my-6">
                  <span className="font-semibold">Years of use:</span> {book?.yearsOfUse}
                </p>
                <p className="my-2 md:my-6">
                  <span className="font-semibold">Posted:</span> {book?.postTime}
                </p>
                <p className="my-2 md:my-6">
                  <span className="font-semibold">Seller:</span> {book?.sellerName} <span>tick</span>
                </p>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary text-base-100">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBooks;
