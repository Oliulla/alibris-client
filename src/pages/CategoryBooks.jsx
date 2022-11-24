import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoryBooks = () => {
  const loaderData = useLoaderData();
  console.log(loaderData)

  return (
    <div>
      <h2>Category wise books</h2>
    </div>
  );
};

export default CategoryBooks;
