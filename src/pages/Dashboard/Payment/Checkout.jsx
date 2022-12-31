import React, { useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { toast } from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
// import { useContext } from "react";
// import { AuthContext } from "../../../contexts/AuthProvider";

const Checkout = ({ booking }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [isProcessing, setIsprocessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { price, buyerName, buyerEmail, _id } = booking;
//   console.log(clientSecret);
    // const {user} = useContext(AuthContext);

    // console.log(booking)

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      //   toast.warning(error?.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }

    setSuccess('');
    setIsprocessing(true)
    const {paymentIntent, error: confirmErr} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: buyerName,
              email: buyerEmail,
            },
          },
        },
      );

      if(confirmErr) {
        setCardError(confirmErr.message);
        return;
      }
      if(paymentIntent.status === "succeeded") {
        console.log("card", card);
        const payment = {
            price,
            transactionId: paymentIntent.id,
            buyerEmail,
            bookingId: _id
        }
        console.log("booking id:", _id);
        // store payment info in db
        axios.post(`http://localhost:5000/payments`, payment)
        .then(data => {
            console.log(data);
            if(data.insertedId) {
                setSuccess('Congrats! your payment is completed.')
                setTransactionId(paymentIntent.id);
            }
        })
        .catch(err => {
            console.log(err);
        })
      }
      setIsprocessing(false)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "#000",
                "::placeholder": {
                  color: "#000",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret || isProcessing}
          className="btn btn-sm mt-5 btn-secondary"
        >
          Pay
        </button>
      </form>
      <p className="text-red-600 font-semibold">{cardError}</p>
      {
        success && <div className="font-semibold mt-2">
            <p className="text-blue-900">{success}</p>
            <p>Your Transaction id is:</p>
            <p className="text-blue-600 font-extrabold">{transactionId}</p>
        </div>
      }
    </>
  );
};

export default Checkout;
