import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const BookCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/categories")
      .then((productData) => {
        // console.log(productData.data.data);
        setCategories(productData.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        return;
      });
  }, []);

  return (
    <section className="mb-14">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="text-accent font-semibold text-3xl">
              Find Your Books
          </h2>
          <div className="flex flex-row lg:flex-col md:gap-2 mt-2">
            {categories.map((category) => {
              return (
                <Link
                  to={`/category/${category._id}`}
                  key={category._id}
                  className="w-auto font-semibold pr-4 md:px-6 lg:px-0 uppercase hover:text-accent text-blue-700 underline"
                >
                  {category.categoryName}
                </Link>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default BookCategories;
