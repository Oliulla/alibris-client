import React from "react";
import AdvertiseItems from "../../components/HomeComponents/AdvertiseItems";
import Banner from "../../components/HomeComponents/Banner";
import BookCategories from "../../components/HomeComponents/BookCategories";
import HappyClient from "../../components/HomeComponents/HappyClient";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 px-4 md:px-8 lg:px-12 my-10">
        <div className="lg:col-span-9">
          <AdvertiseItems />
        </div>
        <div className="lg:col-span-3">
          <BookCategories />
        </div>
      </div>
      <HappyClient />
    </>
  );
};

export default Home;
