import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import toast from 'react-hot-toast';
import DashboardMenu from "./Dashboard/DashboardMenu";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
//   console.log(user);
const handleLogOut = () =>{
    logOut()
    .then(() => {
        toast.success('logged out successful')
    })
    .catch(error => {
        console.log(error)
        toast.error(error?.message)
    })
}

  return (
    <nav className="navbar bg-primary text-base-100 md:px-10 lg:px-20 py-6 lg:py-8 sticky top-0 z-50">
      <div className="flex-1">
        <Link to="/" className="normal-case md:text-2xl font-bold">
          alibris.com
        </Link>
      </div>
      <div className="flex-none">
        <Link to="/blogs" className="mr-3 md:mr-8">
          Blogs
        </Link>
        {!user?.uid && !user?.email ? (
          <>
            <Link
              to="/login"
              className="btn btn-outline text-base-100 btn-sm border-secondary text-[0.8rem]"
            >
              Log in
            </Link>
          </>
        ) : (
          <>
            <div className="dropdown dropdown-end pr-4">
              <label tabIndex={0}>
                <button
                  
                  className="btn btn-outline text-base-100 btn-sm border-secondary text-[0.8rem]"
                >
                  Dashboard
                </button>
              </label>
              {/* <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
              >
                <li>
                  <Link to="/dashboard/myorders" className="justify-between">
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link to="/">Settings</Link>
                </li>
                <li>
                  <Link to="/">Coming..</Link>
                </li>
              </ul> */}
              <DashboardMenu />
            </div>
            <button onClick={handleLogOut} className="btn btn-outline text-base-100 btn-sm border-secondary text-[0.8rem]">
              Log out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
