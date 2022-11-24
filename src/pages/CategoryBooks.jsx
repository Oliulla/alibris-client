import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoryBooks = () => {
  const {data} = useLoaderData();
  console.log(data);

  return (
    <div className="mt-10 mx-auto px-2 lg:px-8">
      <h2 className="text-3xl font-semibold mb-4">All books for {data?.categoryName}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data?.books?.map((book) => (
          <div
            key={book.bookId}
            className="card card-side bg-base-100 border-r-2 border-blue-500 shadow-2xl"
          >
            <figure>
              <img src={book?.imgURL} alt={book?.bookName} className="h-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-secondary">{book?.bookName}</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBooks;
