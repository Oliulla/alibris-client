import React from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";


// user authContext
export const AuthContext = createContext();

// google authprovider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // update user
  const updateUser = displayName => {
    setLoading(true);
    return updateProfile(auth.currentUser, displayName)
  }

  // login with google
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  // log out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }


  // user statechange
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return() => unsubscribed();

  }, []);

  const userInfo = { user, createUser, updateUser, userLogin, googleLogin, logOut, loading};
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
