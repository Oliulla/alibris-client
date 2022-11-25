import React from "react";
import Banner from "../../components/HomeComponents/Banner";
import BookCategories from "../../components/HomeComponents/BookCategories";

const Home = () => {
  return (
    <>
      <Banner />
      <BookCategories />
      <div>
        <h2>Extra meaningfull section</h2>
      </div>
    </>
  );
};

export default Home;
