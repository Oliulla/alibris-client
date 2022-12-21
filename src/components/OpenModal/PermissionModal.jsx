import React from "react";
import { toast } from "react-hot-toast";

const PermissionModal = ({ productId, refetch }) => {

  // delete specific product
  const handleProductDelete = (deletedProductId) => {

    fetch(`https://alibris-server.vercel.app/myproducts/${deletedProductId}`, {
      method: 'Delete',
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      toast.success('Successfully deleted!');
      refetch();
    })
    .catch(err => {
      console.log(err)
    })
  };


  return (
    <div>
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="product-delet-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="card-actions items-center flex-col gap-4 mr-10">
            <h3 className="text-lg font-bold">Are you sure to delete?</h3>
            <div>
              <label
                htmlFor="product-delet-modal"
                className="btn btn-sm p-2 m-2 btn-warning"
                onClick={() => handleProductDelete(productId)}
              >
                Delete
              </label>
              <label
                htmlFor="product-delet-modal"
                className="btn btn-sm p-2 m-2"
              >
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermissionModal;
