import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BookCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((productData) => {
        console.log(productData.data.data);
        setCategories(productData.data.data);
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }, []);

  return (
    <section className="px-4 md:px-8 lg:px-12 my-10">
      <h2 className="text-accent font-semibold text-3xl">Choose Your Favourite Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-8">
        {categories.map((category) => {
          return (
            <Link to={`/category/${category._id}`} key={category._id}>
              <div
                className="card h-[26rem] shadow-xl image-full"
              >
                <figure>
                  <img
                    src={category?.bookCategoryImg}
                    alt={category?.categoryName}
                    className="w-full"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-3xl">
                    {category?.categoryName}
                  </h2>
                  <p>{category?.categoryText}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default BookCategories;
