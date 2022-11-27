import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex justify-center gap-4 w-full h-screen items-center">
      {error && (
        <>
        <div>
            <img className="w-80" src="https://i.ibb.co/mBvQGMg/errorImg.jpg" alt="" />
        </div>
        <div className="flex flex-col items-center">
          {
            <>
              <h2 className="text-4xl font-bold text-red-600">Opps!!!</h2>
              <p className="text-3xl font-bold">{error?.status}</p>
              <h2 className="text-2xl font-bold">{error.statusText}</h2>
            </>
          }
        </div>
        </>
      )}
    </div>
  );
};

export default ErrorPage;
