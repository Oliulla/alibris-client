import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AdvertiseItems = () => {
  const {
    data: advertiseProducts = [],
    error,
  } = useQuery({
    queryKey: ["advertiseProducts"],
    queryFn: async () => {
      try {
        const data = await axios.get("http://localhost:5000/advertiseProducts");
        // console.log(data)
        return data.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (error) {
    return <p>{error.message}</p>;
  }

//   console.log(advertiseProducts);

  return (
    <>
      {!advertiseProducts.length ? (
        <p className="text-3xl text-slate-800">No books for advertisements</p>
      ) : (
        <>
          <div className="mb-20">
            <h2 className="text-2xl">Advertise Books</h2>
            <div className="md:flex flex-wrap gap-4">
              {advertiseProducts.map((product) => {
                return (
                  <div
                    key={product._id}
                    className="card w-60 h-60 bg-base-100 shadow-xl border border-info mt-4 md:mt-0"
                  >
                    <div className="card-body">
                      <h2 className="card-title">{product?.bookName}</h2>
                      <p>Location: {product.location}</p>
                    </div>
                    <figure>
                      <img
                      className="h-36 w-full"
                        src={product?.bookImgUrl}
                        alt=""
                      />
                    </figure>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AdvertiseItems;
