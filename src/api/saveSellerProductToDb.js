import toast from "react-hot-toast";

// save user to db
export const saveSellerProductToDb = (sellerCategoryProduct) => {
  // save seller products to db
  fetch("http://localhost:5000/categories", {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(sellerCategoryProduct),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.status) {
        toast.success(data.message);
        // return data;
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};
