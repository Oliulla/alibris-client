import axios from "axios";
import React from "react";
import toast from "react-hot-toast";


const BookingModal = ({ givenModalInfo, setGivenModalInfo }) => {
  const { email, displayName, bookName, resalePrice, imgUrl } = givenModalInfo;

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const buyerName = form.userName.value;
    const buyerEmail = form.email.value;
    const price = form.price.value;
    const phoneNumber = form.phone.value;
    const meetLocation = form.meetLocation.value;
    // console.log(buyerName, buyerEmail, phoneNumber, meetLocation, price)

    const booking = {
      productImg: imgUrl,
      title: bookName,
      price,
      buyerName,
      buyerEmail,
      phoneNumber,
      meetLocation,
    };

    // send booking to db
    axios.post('http://localhost:5000/bookings', booking)
    .then(data => {
      console.log(data.data.status);
      if(data.data.status) {
        setGivenModalInfo(null)
        toast.success(data.data.message);
      }
    })
    .catch(error => {
      console.log(error);
    })
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl font-bold">{bookName}</h3>
          <form
            onSubmit={handleBookingSubmit}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              name="userName"
              defaultValue={displayName}
              placeholder="your name"
              className="input w-full border border-info"
              disabled
            />
            <input
              type="email"
              name="email"
              defaultValue={email}
              placeholder="email address"
              className="input w-full border border-info"
              disabled
            />
            <input
              type="number"
              name="price"
              defaultValue={resalePrice}
              placeholder="resle price"
              className="input w-full border border-info"
              disabled
            />
            <input
              type="Phone Number"
              name="phone"
              placeholder="phone number"
              className="input w-full border border-info"
              required
            />
            <input
              type="text"
              name="meetLocation"
              placeholder="meeting location"
              className="input w-full border border-info"
              required
            />
            <input
              type="submit"
              className="w-full text-white rounded btn btn-accent"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
