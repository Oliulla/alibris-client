import React from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // log out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  // update user
  const updateUser = displayName => {
    setLoading(true);
    return updateProfile(auth.currentUser, {displayName: displayName})
  }

  // user statechange
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return() => unsubscribed();

  }, []);

  const userInfo = { user, createUser, updateUser, logOut, loading};
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
