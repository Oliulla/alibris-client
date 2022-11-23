import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero my-10">
      <div className="hero-content md:w-7/12">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-6">
          <h3 className="text-center text-3xl text-secondary font-semibold">
            Login
          </h3>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="......"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="pl-10">
            <span>Don't Have An Account?</span>{" "}
            <Link to="/register" className="text-secondary hover:text-primary underline">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
