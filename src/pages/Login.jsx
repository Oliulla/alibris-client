import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import toast from "react-hot-toast";
import GoogleLogin from "../components/GoogleLogin";
import useToken from "../hooks/useToken";
import { useState } from "react";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const [loginUserEmail, setLoginuserEmail] = useState('');
  const [token] = useToken(loginUserEmail);
  const navigate = useNavigate();
  const location = useLocation();
    const from = "/";

    if(token) {
      navigate(from, {replace: true});
    }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    // login user
    userLogin(data?.email, data?.password)
      .then((result) => {
        console.log(result.user)
        setLoginuserEmail(data?.email);
        toast.success("successfully logged in");
        // navigate(from, {replace: true})
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  return (
    <div className="hero my-10">
      <div className="hero-content w-full md:w-7/12">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-6">
          <h3 className="text-center text-3xl text-secondary font-semibold">
            Login
          </h3>
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Email</span>
              </label>
              <input
                {...register("email", { required: "email must be provide" })}
                aria-invalid={errors.email ? "true" : "false"}
                type="email"
                placeholder="example@gmail.com"
                className="input input-bordered"
              />
            </div>
            {errors.email && (
              <small role="alert" className="text-red-500">
                {errors.email?.message}
              </small>
            )}

            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "password must be provide",
                })}
                aria-invalid={errors.password ? "true" : "false"}
                type="password"
                placeholder="......"
                className="input input-bordered"
              />
            </div>
            {errors.password && (
              <small role="alert" className="text-red-500">
                {errors.password?.message}
              </small>
            )}

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="px-10">
            <p>
              <span>Don't Have An Account?</span>{" "}
              <Link
                to="/register"
                className="text-secondary hover:text-primary underline"
              >
                Register
              </Link>
            </p>
            <p className="text-2xl font-bold mb-2">Or</p>
            {/* <button className="btn btn-sm">Login with Google</button> */}
            <GoogleLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
