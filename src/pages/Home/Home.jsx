import React from "react";
import AdvertiseItems from "../../components/HomeComponents/AdvertiseItems";
import Banner from "../../components/HomeComponents/Banner";
import BookCategories from "../../components/HomeComponents/BookCategories";
import HappyClient from "../../components/HomeComponents/HappyClient";

const Home = () => {
  return (
    <>
      <Banner />
      <BookCategories />
      <AdvertiseItems />
      <HappyClient />
    </>
  );
};

export default Home;
