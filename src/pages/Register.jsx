import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import toast from "react-hot-toast";
import GoogleLogin from "../components/GoogleLogin";
// import axios from "axios";
// import { saveUserToDb } from "../api/saveUserToDb";
import axios from "axios";
import useToken from "../hooks/useToken";

const Register = () => {
  const {register, formState: { errors }, handleSubmit} = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  // const [signUpError, setSignUPError] = useState('');
  const [createUserEmail, setCreateUserEmail] = useState("");
  const [token] = useToken(createUserEmail);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if(token){
    navigate(from, { replace: true });
}



  const handleRegister = (data) => {
    // console.log(data);
    createUser(data?.email, data?.password)
      .then((result) => {
        // console.log(result.user);
        toast.success("successfully registered");
        // console.log(result.user);

        const userInfo = {
          displayName: data.name,
        };

        // update user name
        updateUser(userInfo)
          .then(() => {
            saveUserToDb(data?.name, data?.email, data?.role);
            // setUserSaved(!userSaved)
            // return navigate(from, { replace: true });
            // .then((data) => {
            //   console.log(data)
            //     // console.log(data)
            //   })
            //   .catch(error => {
            //     console.log(error);
            //   })
          })
          .catch((error) => {
            console.log(error?.message);
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.message);
      });
  };

  // save user to db
  const saveUserToDb = async (name, email, role) => {
    try {
      const user = { name, email, role };
      const data = await axios.put("http://localhost:5000/users", user);
      setCreateUserEmail(email)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="hero my-10">
      <div className="hero-content w-full md:w-7/12">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-6">
          <h3 className="text-center text-3xl text-secondary font-semibold">
            Register
          </h3>
          <form onSubmit={handleSubmit(handleRegister)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Name</span>
              </label>
              <input
                {...register("name", { required: "name must be provide" })}
                aria-invalid={errors.name ? "true" : "false"}
                type="text"
                placeholder="Mukut"
                className="input input-bordered"
              />
            </div>
            {errors.name && (
              <small role="alert" className="text-red-500">
                {errors.name?.message}
              </small>
            )}

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

            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text text-xl">Buyer</span>
                <input
                  {...register("role")}
                  type="radio"
                  value="buyer"
                  className="radio checked:bg-blue-500 radio-info"
                  checked
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text text-xl">Seller</span>
                <input
                  {...register("role")}
                  type="radio"
                  value="seller"
                  className="radio checked:bg-blue-500 radio-info"
                />
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="px-10">
            <p>
              <span>Already Have An Account?</span>{" "}
              <Link
                to="/login"
                className="text-secondary hover:text-primary underline"
              >
                Login
              </Link>
            </p>
            <p className="text-2xl font-bold mb-2">Or</p>
            {/* <p className="btn btn-sm">Login with Google</p> */}
            <GoogleLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
