import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { HiCheckCircle } from "react-icons/hi";
import Loading from "../Loading";

const AdvertiseItems = () => {
  const {
    data: advertiseProducts = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["advertiseProducts"],
    queryFn: async () => {
      try {
        const data = await axios.get("https://alibris-server.vercel.app/advertiseProducts");
        // console.log(data)
        return data.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (error) {
    console.log(error);
    // return <p>{error.mesdsage}</p>;
  }

  console.log(advertiseProducts);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex justify-center w-full">
            <div className="mb-20 w-full">
              <h2 className="text-2xl font-semibold">Advertise Books</h2>
              <div className="md:flex flex-wrap gap-4 w-full">
                {advertiseProducts.map((product) => {
                  return (
                    <div
                      key={product._id}
                      className="card w-full md:w-5/12 h-80 bg-base-100 shadow-2xl border border-info mt-4 md:mt-0"
                    >
                      <div className="px-3 py-2">
                        <h2 className="card-title">{product?.bookName}</h2>
                        <div className="flex justify-between">
                          <p>
                            <span className="font-semibold">Location:</span>{" "}
                            {product.location}
                          </p>
                          <p>
                            <span className="font-semibold">Year of used:</span>{" "}
                            {product.yearOfUse}yr
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <p>
                            <span className="font-semibold">Post Date:</span>{" "}
                            {product.postDate}
                          </p>
                          <p>
                            <span className="font-semibold">
                              {product.isAvailable ? "Available" : "Booked"}
                            </span>
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <p>
                            <span className="font-semibold">Resale Price:</span>{" "}
                            {product.resalePrice}tk
                          </p>
                          <p className="line-through">
                            <span className="font-semibold">
                              Original Price:
                            </span>{" "}
                            {product.originalPrice}tk
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <p className="flex">
                            <span className="font-semibold">Seller:</span>{" "}
                            <span className="text-xl text-white px-2 rounded-sm bg-gray-900 flex justify-center items-center ml-2">
                              {product.sellerName}
                              {product?.status === "Verified" && (
                                <span className="text-blue-500">
                                  <HiCheckCircle />
                                </span>
                              )}
                            </span>
                          </p>
                          <p>
                            <span className="font-semibold">Phone:</span>{" "}
                            {product.sellerPhone}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <p>
                            <span className="font-semibold">Condition:</span>{" "}
                            {product.bookCondition}
                          </p>
                          <button className="btn btn-primary btn-sm btn-disabled">
                            Report
                          </button>
                        </div>
                      </div>
                      <figure>
                        <img
                          className="h-36 w-full absolute bottom-0 rounded-b-xl"
                          src={product?.bookImgUrl}
                          alt=""
                        />
                      </figure>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AdvertiseItems;
