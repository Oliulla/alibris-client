import React from "react";

const BookingModal = ({ givenModalInfo }) => {
    const {email, displayName, bookName, resalePrice} = givenModalInfo;

    const handleBookingSubmit = e => {
        e.preventDefault()
        const phoneNumber = e.target.phone.value;
        const meetLocation = e.target.meetLocation.value;
        console.log(phoneNumber, meetLocation)
    }

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
          <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 gap-3 mt-10">
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
              type="text"
              name="reselPrice"
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
