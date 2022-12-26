import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
// import { saveUserToDb } from "../api/saveUserToDb";
import { AuthContext } from "../contexts/AuthProvider";
import useToken from "../hooks/useToken";

const GoogleLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [createUserEmail, setCreateUserEmail] = useState("");
  const [token] = useToken(createUserEmail);
  const from = location?.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        toast.success("logged in successfully");
        const { displayName, email } = result?.user;
        const role = "buyer";
        saveUserToDb(displayName, email, role);
        // navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };

  // save user to db
  const saveUserToDb = async (name, email, role) => {
    try {
      const user = { name, email, role };
      const data = await axios.put("http://localhost:5000/users", user);
      setCreateUserEmail(email);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={handleGoogleLogin} className="btn btn-sm">
        Login with Google
      </button>
    </>
  );
};

export default GoogleLogin;
