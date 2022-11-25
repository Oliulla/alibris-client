import React, { useState, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../components/BookingModal";
import Books from "../components/Books";
import { AuthContext } from "../contexts/AuthProvider";

const CategoryBooks = () => {
  const { data } = useLoaderData();
  const { user } = useContext(AuthContext);
  const { email, displayName } = user;
  const [givenModalInfo, setGivenModalInfo] = useState({
    email: "",
    displayName: "",
    bookName: "",
    resalePrice: "",
    imgUrl: "",
  });

  const handleBooking = (bookName, resalePrice, imgURL) => {
    // console.log(bookName, resalePrice)
    setGivenModalInfo({
      email: email,
      displayName: displayName,
      bookName: bookName,
      resalePrice: resalePrice,
      imgUrl: imgURL,
    });
  };

  return (
    <div className="mt-10 mx-auto px-2 lg:px-8">
      <h2 className="text-3xl font-semibold mb-4">
        All books for {data?.categoryName}
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {data?.books?.map((book) => (
          <Books key={book.bookId} book={book} handleBooking={handleBooking} />
        ))}
      </div>
      {
        givenModalInfo && <BookingModal setGivenModalInfo={setGivenModalInfo} givenModalInfo={givenModalInfo} />
      }
    </div>
  );
};

export default CategoryBooks;
