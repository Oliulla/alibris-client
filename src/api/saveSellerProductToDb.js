import toast from "react-hot-toast";

// save user to db
export const saveSellerProductToDb = (product) => {
  // save seller products to db
  fetch("https://alibris-server.vercel.app/categories", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(product),
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
