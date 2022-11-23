import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-primary text-base-100 md:px-10 lg:px-20 md:py-6 lg:py-8">
      <div className="flex-1">
        <Link to="/" className="normal-case md:text-2xl font-bold">
          alibris.com
        </Link>
      </div>
      <div className="flex-none">
        <Link to="/blogs" className="mr-3 md:mr-8">Blogs</Link>
        <Link to="/login" className="btn btn-outline text-base-100 btn-sm border-secondary text-[0.8rem]">Log in</Link>
        <button className="btn btn-outline text-base-100 btn-sm border-secondary text-[0.8rem]">Log out</button>
        <div className="dropdown dropdown-end pl-4">
          <label tabIndex={0}>
            <Link
              to="/"
              className="btn btn-outline text-base-100 btn-sm border-secondary text-[0.8rem]"
            >
              Dashboard
            </Link>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
          >
            <li>
              <Link to='/' className="justify-between">Profile</Link>
            </li>
            <li>
              <Link to='/'>Settings</Link>
            </li>
            <li>
              <Link to='/'>Coming..</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
