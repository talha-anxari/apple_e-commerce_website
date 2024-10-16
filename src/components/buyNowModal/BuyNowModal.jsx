// import { Button, Dialog, DialogBody } from "@material-tailwind/react";
// import { useState } from "react";

// const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => setOpen(!open);
//   return (
//     <>
//       <Button
//         type="button"
//         onClick={handleOpen}
//         className="w-full px-4 py-3 text-center text-gray-100 bg-orange-600 border border-transparent dark:border-gray-700 hover:text-gray-700 hover:bg-orange-100 rounded-xl"
//       >
//         Buy now
//       </Button>
//       <Dialog open={open} handler={handleOpen} className=" bg-pink-50">
//         <DialogBody className="">
//           <div className="mb-3">
//             <input
//               value={addressInfo.name}
//               onChange={(e) => {
//                 setAddressInfo({
//                   ...addressInfo,
//                   name: e.target.value,
//                 });
//               }}
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
//             />
//           </div>
//           <div className="mb-3">
//             <input
//                 value={addressInfo.address}
//                 onChange={(e) => {
//                 setAddressInfo({
//                     ...addressInfo,
//                     address: e.target.value,
//                 });
//                 }}
//               type="text"
//               name="address"
//               placeholder="Enter your address"
//               className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
//             />
//           </div>

//           <div className="mb-3">
//             <input
//                 value={addressInfo.pinCode}
//                 onChange={(e) => {
//                 setAddressInfo({
//                     ...addressInfo,
//                     pinCode: e.target.value,
//                 });
//                 }}
//               type="number"
//               name="pincode"
//               placeholder="Enter your pincode"
//               className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
//             />
//           </div>

//           <div className="mb-3">
//             <input
//                 value={addressInfo.mobileNumber}
//                 onChange={(e) => {
//                 setAddressInfo({
//                     ...addressInfo,
//                     mobileNumber: e.target.value,
//                 });
//                 }}
//               type="text"
//               name="mobileNumber"
//               placeholder="Enter your mobileNumber"
//               className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
//             />
//           </div>

//           <div className="">
//             <Button
//               type="button"
//               onClick={() => {handleOpen();
//                 buyNowFunction();}
//               }
//               className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 rounded-lg"
//             >
//               Buy now
//             </Button>
//           </div>
//         </DialogBody>
//       </Dialog>
//     </>
//   );
// };

// export default BuyNowModal;

import React, { useState } from 'react';

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOpen();
    buyNowFunction();
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
      >
        Buy Now
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Complete Your Purchase</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={addressInfo.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                name="address"
                value={addressInfo.address}
                onChange={handleInputChange}
                placeholder="Delivery Address"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                name="pinCode"
                value={addressInfo.pinCode}
                onChange={handleInputChange}
                placeholder="PIN Code"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="tel"
                name="mobileNumber"
                value={addressInfo.mobileNumber}
                onChange={handleInputChange}
                placeholder="Mobile Number"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <div className="mt-6 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={handleOpen}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  Confirm Purchase
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BuyNowModal;