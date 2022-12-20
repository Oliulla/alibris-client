import React from "react";
import { Outlet } from "react-router-dom";
import DashboardMenu from "../components/Dashboard/DashboardMenu";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <Outlet />
        </div>
        <div className="col-span-3">
          <DashboardMenu />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DashboardLayout;
