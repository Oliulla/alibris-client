import React from "react";
import { Outlet } from "react-router-dom";
import DashboardMenu from "../components/Dashboard/DashboardMenu";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../utils/ScrollToTop";

const DashboardLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <Outlet />
        </div>
        <div className="col-span-4">
          <DashboardMenu />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DashboardLayout;
