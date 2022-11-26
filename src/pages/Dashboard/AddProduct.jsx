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

  // post date
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const postDate = today.toLocaleString()

  const handleAddProduct = (data) => {
    // const lowerCaseCategory = data?.categoryName.toLowerCase()
    // console.log(data);
    const sellerCategoryProduct = {
      categoryName: data?.categoryName,
      email: user?.email,
      products: [
        {
          productName: data?.productName,
          location: data?.location,
          originalPrice: data?.originalPrice,
          resalePrice: data?.resalePrice,
          productCondition: data?.productCondition,
          yearOfPurchase: data?.yearOfPurchase,
          sellerPhone: data?.sellerPhone,
          description: data?.description,
          postDate: postDate
        },
      ],
    };

    saveSellerProductToDb(sellerCategoryProduct);
    navigate("/dashboard/my-products")


    // // save seller products to db
    // fetch("http://localhost:5000/sellerProduct", {
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
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            {...register("productName", { required: true })}
            placeholder="product name"
            className="input input-bordered w-full max-w-xs input-info"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Resale Price</span>
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
            <span className="label-text">Product Condition</span>
          </label>
          <div className="flex items-center gap-1">
            <small>Excellent</small>
            <input
              type="radio"
              {...register("productCondition")}
              value="excellent"
              className="radio w-4 h-4 radio-info"
              checked
            />
            <small className="ml-2">Good</small>
            <input
              type="radio"
              {...register("productCondition")}
              value="good"
              className="radio w-4 h-4 radio-info"
            />
            <small className="ml-2">Fair</small>
            <input
              type="radio"
              {...register("productCondition")}
              value="fair"
              className="radio w-4 h-4 radio-info"
            />
          </div>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Phone Number</span>
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
            <span className="label-text">Location</span>
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
            <span className="label-text">Product Category</span>
          </label>
          <input
            type="text"
            {...register("categoryName", { required: true })}
            placeholder="product Category"
            className="input input-bordered w-full max-w-xs input-info"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Description</span>
          </label>
          <textarea
            {...register("description")}
            className="textarea resize-none textarea-info"
            placeholder="description"
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Original Price</span>
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
            <span className="label-text">Year of Purchase</span>
          </label>
          <input
            type="number"
            {...register("yearOfPurchase", { required: true })}
            placeholder="year of purchase"
            className="input input-bordered w-full max-w-xs input-info"
            min={0}
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn btn-primary w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default AddProduct;
