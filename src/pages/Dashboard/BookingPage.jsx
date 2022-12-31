import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Checkout from "./Payment/Checkout";

const BookingPage = () => {
  const booking = useLoaderData();
    // console.log(booking);
  // Make sure to call `loadStripe` outside of a component’s render to avoid
  // recreating the `Stripe` object on every render.
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
//   console.log(stripePromise);
  return (
    <div className="md:px-4 px-1 md:mt-2 flex items-center flex-col">
      <h2 className="text-3xl font-semibold">
        <span>Payment for</span>
        <span className="font-bold pl-2 text-primary">{booking?.title}</span>
      </h2>
      <h3 className="text-xl font-semibold">
        Please pay <strong>{booking?.price}tk</strong> to get the book
      </h3>
      <div className="md:w-5/12 w-11/12 mt-6">
        <Elements stripe={stripePromise}>
          <Checkout booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default BookingPage;
