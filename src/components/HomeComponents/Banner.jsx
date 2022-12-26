import React from "react";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import "../../CustomCSS/Custom.css";

const Banner = () => {
  const {setSearchText} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCollectSearchData = (e) => {
    e.preventDefault();

    // console.log(e.target.searchWord.value);
    setSearchText(e.target?.searchWord?.value);
    // <Navigate to="/products/search" />
    navigate('/products/search');
  }


  return (
    <div className="custom_overlay">
      {/* <img className='w-screen' src="https://i.ibb.co/pZ1dj9f/banner2.jpg" alt="alibris banner" /> */}
      {/* <p className='absolute top-10 left-12 md:top-52 md:left-1/3 text-base-100 text-3xl font-semibold italic'>Reading Book Is An Art</p> */}
      <p className="text-base-100 text-3xl font-semibold italic">
        Reading Book Is An Art
      </p>
      <p className="text-base-100 text-3xl font-semibold">
        Find Your Expected Books
      </p>
      {/* <div className="custom_flex flex justify-center items-center mt-4"> */}
        <form onSubmit={handleCollectSearchData} className="custom_flex flex justify-center items-center mt-4">
          <input
            type="text"
            name="searchWord"
            className="px-4 py-3 outline-none text-black md:w-1/3"
            placeholder="Search books by book name or books category name"
          />
        <input type='submit' className="btn border-none bg-blue-600 rounded-none text-secondary hover:text-white" value="Search" />
        </form>
      {/* </div> */}
    </div>
  );
};

export default Banner;
