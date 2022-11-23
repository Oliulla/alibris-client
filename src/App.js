import React from "react";
import { router } from "./Routes/router";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />;
    </>
  );
};

export default App;
