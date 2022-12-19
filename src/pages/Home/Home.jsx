import React from "react";
import { useContext } from "react";
import AdvertiseItems from "../../components/HomeComponents/AdvertiseItems";
import Banner from "../../components/HomeComponents/Banner";
import BookCategories from "../../components/HomeComponents/BookCategories";
import HappyClient from "../../components/HomeComponents/HappyClient";
import { AuthContext } from "../../contexts/AuthProvider";
import useSeller from "../../hooks/useSeller";

const Home = () => {

  return (
    <>
      <Banner />
      <div className="grid grid-cols-1 lg:grid-cols-12 px-4 md:px-8 lg:px-12 my-10">
        <div className="lg:col-span-3">
        <BookCategories />
        </div>
        <div className="lg:col-span-9">
        <AdvertiseItems />
        </div>
      </div>
      <HappyClient />
    </>
  );
};

export default Home;
