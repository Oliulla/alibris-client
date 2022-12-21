import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { saveSellerProductToDb } from "../../api/saveSellerProductToDb";
import { AuthContext } from "../../contexts/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  // img host key for imgbb
  const imgHostKey = process.env.REACT_APP_imgbb_key;

  // post date
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const postDate = today.toLocaleString();

  const handleAddProduct = (data) => {
    // console.log(data);
    // console.log(data.categoryName);

    // upload image to imgbb
    const image = data.bookImg[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          // products for db
          const sellerProduct = {
            categoryName: data?.categoryName,
            email: user?.email,
            bookName: data?.bookName,
            location: data?.location,
            originalPrice: data?.originalPrice,
            resalePrice: data?.resalePrice,
            bookCondition: data?.bookCondition,
            yearOfUse: data?.yearOfUse,
            sellerPhone: data?.phoneNumber,
            description: data?.description,
            postDate: postDate,
            sellerName: user?.displayName,
            bookImgUrl: imgData.data.url,
            isAvailable: true,
          };

          // console.log(sellerProduct)

          // save seller product to db under category
          saveSellerProductToDb(sellerProduct);
          // .then((res) => res.json())
          // .then((data) => {
          //   console.log(data);
          //   if (data.status) {
          //     toast.success(data.message);
          //   }
          // })
          // .catch((error) => {
          //   console.log(error);
          // });
          // navigate("/dashboard/my-products");
        }
      });

    // // save seller products to db
    // fetch("https://alibris-server.vercel.app/sellerProduct", {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(sellerCategoryProduct),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.status) {
    //       toast.success(data.message);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
  };

  return (
    <div className="mx-auto px-4 md:px-10 my-5 md:my-10">
      <div className="mb-6">
        <h2 className="text-center text-secondary text-3xl border-b-2 border-info">
          Add A product
        </h2>
      </div>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-9/12 gap-3 md:gap-0 mx-auto"
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl mt-1">Book Name</span>
          </label>
          <input
            type="text"
            {...register("bookName", { required: true })}
            placeholder="book name"
            className="input input-bordered w-full max-w-xs input-info"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl mt-1">Resale Price</span>
          </label>
          <input
            type="number"
            {...register("resalePrice", { required: true })}
            placeholder="Resale price"
            className="input input-bordered w-full max-w-xs input-info"
            min={0}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text text-xl mt-1">Book Condition</span>
          </label>
          <div className="flex items-center gap-1">
            <small>Excellent</small>
            <input
              type="radio"
              {...register("bookCondition")}
              value="excellent"
              className="radio w-4 h-4 radio-info"
            />
            <small className="ml-2">Good</small>
            <input
              type="radio"
              {...register("bookCondition")}
              value="good"
              className="radio w-4 h-4 radio-info"
            />
            <small className="ml-2">Fair</small>
            <input
              type="radio"
              {...register("bookCondition")}
              value="fair"
              className="radio w-4 h-4 radio-info"
            />
          </div>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl mt-1">Phone Number</span>
          </label>
          <input
            type="phone number"
            {...register("phoneNumber", { required: true })}
            placeholder="phone number"
            className="input input-bordered w-full max-w-xs input-info"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl mt-1">Location</span>
          </label>
          <input
            type="text"
            {...register("location", { required: true })}
            placeholder="location"
            className="input input-bordered w-full max-w-xs input-info"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl mt-1">Book Category</span>
          </label>
          <span className="border border-[#3ABFF8] w-full py-[.7rem] rounded-md">
            <select
              {...register("categoryName")}
              className="w-full outline-none h-full"
            >
              <option value="Science Fiction">Science Fiction</option>
              <option value="Novel">Novel</option>
              <option value="Poetry">Poetry</option>
              <option value="Mathematics">Mathematics</option>
            </select>
          </span>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl mt-1">Book Description</span>
          </label>
          <textarea
            {...register("description")}
            className="textarea resize-none textarea-info"
            placeholder="description"
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl mt-1">Original Price</span>
          </label>
          <input
            type="number"
            {...register("originalPrice", { required: true })}
            placeholder="Original price"
            className="input input-bordered w-full max-w-xs input-info"
            min={0}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl mt-1">Years of Use</span>
          </label>
          <input
            type="number"
            {...register("yearOfUse", { required: true })}
            placeholder="year of use"
            className="input input-bordered w-full max-w-xs input-info"
            min={0}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl mt-1">Years of Purchase</span>
          </label>
          <input
            type="date"
            {...register("yearOfPurchase", { required: true })}
            placeholder="year of purchase"
            className="input input-bordered w-full max-w-xs input-info"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl mt-1">Book Image</span>
          </label>
          <input
            type="file"
            {...register("bookImg", { required: true })}
            placeholder="book image"
            className="w-full max-w-xs input-info"
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn btn-primary w-full max-w-xs mt-8"
        />
      </form>
    </div>
  );
};

export default AddProduct;
