// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router';
// import myContext from '../../context/myContext';

// // const products = [
// //   {
// //     id: 1,
// //     name: "Sony PlayStation Move",
// //     price: 870,
// //     image: "https://images7.alphacoders.com/114/thumb-1920-1143022.jpg",
// //     desc: 'Sony PlayStation Move is a motion controller...',
// //     stock: 2,
// //   },
// //   {
// //     id: 2,
// //     name: "GoPro",
// //     price: 600,
// //     image: "https://picfiles.alphacoders.com/613/613508.jpg",
// //     desc: 'GoPro: The Ultimate Action Camera...',
// //     stock: 2,
// //   },
// //   {
// //     id: 3,
// //     name: "AirPods Pro",
// //     price: 400,
// //     image: "https://images5.alphacoders.com/136/thumb-1920-1362717.png",
// //     desc: 'AirPods Pro: Experience High-Fidelity Sound...',
// //     stock: 2,
// //   },
// //   {
// //     id: 4,
// //     name: "iPhone 15 Pro",
// //     price: 2000,
// //     image: "https://images6.alphacoders.com/108/thumb-1920-1086060.jpg",
// //     desc: 'iPhone 15 Pro: The Ultimate Smartphone...',
// //     stock: 2,
// //   },
// // ];

// const ProductCard = () => {
//   const navigate = useNavigate();
//   const [hoveredProductId, setHoveredProductId] = useState(null);

//   const context = useContext(myContext);
//   const {getAllProduct} = context;
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="font-bold text-3xl text-center py-6">
//         Best Selling Items
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {getAllProduct.map((product, index) => (
//           // Destructure product properties
//           const { id, title, price, productImageURL } = product;
//           <div
//             key={id}
//             className="rounded-lg overflow-hidden relative"
//             onMouseEnter={() => setHoveredProductId(id)}
//             onMouseLeave={() => setHoveredProductId(null)}
//           >
//             <img
//               onClick={() => navigate('/productDetails')} // Passing product ID to navigate
//               className="cursor-pointer w-full h-56 object-cover"
//               src={productImageURL}
//               alt={title}
//             />
//             <div className="p-4 text-center">
//               <h2 className="font-semibold text-lg mb-1">{title}</h2>
//               <p className="text-black font-bold">${price}</p>
//             </div>
//             <div
//               className={`absolute top-0 right-0 h-full transition-all duration-300 ease-in-out flex flex-col justify-center items-center ${
//                 hoveredProductId === id ? 'w-16' : 'w-0'
//               } overflow-hidden`}
//             >
//               <button
//                 className="text-white mb-4 p-2 bg-black bg-opacity-50 rounded-full hover:text-gray-700 transition-colors duration-200"
//                 aria-label="Add to Cart"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                   />
//                 </svg>
//               </button>
//               <button
//                 className="p-2 bg-black bg-opacity-50 text-white hover:text-gray-700 rounded-full transition-colors duration-200"
//                 aria-label="Add to Wishlist"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


// import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router";
// import myContext from "../../context/myContext";
// import { useDispatch, useSelector } from "react-redux";
// import toast from "react-hot-toast";
// import { addToCart, deleteFromCart } from "../../redux/cartSlice";


// const ProductCard = () => {
//     const navigate = useNavigate();

//     const context = useContext(myContext);
//     const { getAllProduct } = context;

//     const cartItems = useSelector((state) => state.cart);
//     const dispatch = useDispatch();

//     const addCart = (item) => {
//         // console.log(item)
//         dispatch(addToCart(item));
//         toast.success("Add to cart")
//     }

//     const deleteCart = (item) => {
//         dispatch(deleteFromCart(item));
//         toast.success("Delete cart")
//     }

//     // console.log(cartItems)

//     useEffect(() => {
//         localStorage.setItem('cart', JSON.stringify(cartItems));
//     }, [cartItems])


//     return (
//         <div className="mt-10">
//             {/* Heading  */}
//             <div className="">
//                 <h1 className=" text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
//             </div>

//             {/* main  */}
//             <section className="text-gray-600 body-font">
//                 <div className="container px-5 py-5 mx-auto">
//                     <div className="flex flex-wrap -m-4">
//                         {getAllProduct.slice(0, 8).map((item, index) => {
//                             const { id, title, price, productImageUrl } = item
//                             return (
//                                 <div key={index} className="p-4 w-full md:w-1/4">
//                                     <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
//                                         <img
//                                             onClick={() => navigate(`/productinfo/${id}`)}
//                                             className="lg:h-80  h-96 w-full"
//                                             src={productImageUrl}
//                                             alt="blog"
//                                         />
//                                         <div className="p-6">
//                                             <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
//                                                 E-bharat
//                                             </h2>
//                                             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//                                                 {title.substring(0, 25)}
//                                             </h1>
//                                             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//                                                 ₹{price}
//                                             </h1>

//                                             <div
//                                                 className="flex justify-center ">
//                                                 {cartItems.some((p)=> p.id === item.id) 
                                                
//                                                 ?
//                                                 <button
//                                                     onClick={() => deleteCart(item)}
//                                                     className=" bg-red-700 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
//                                                     Delete To Cart
//                                                 </button>

//                                                 : 

//                                                 <button
//                                                     onClick={() => addCart(item)}
//                                                     className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
//                                                     Add To Cart
//                                                 </button>
//                                             }
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default ProductCard;

import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../../context/myContext';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/cartSlice';
import toast from 'react-hot-toast';
import { RiDeleteBinLine, RiShoppingCartLine } from '@remixicon/react';
import { FaOpencart } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa';
import { PiTrashSimpleThin } from 'react-icons/pi';

const ProductCard = () => {
  const navigate = useNavigate();
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const context = useContext(myContext);
  const { getAllProduct, loading } = context;

  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems)
  const dispatch = useDispatch();

// Add to cart function
const addCart = (item) => {
  dispatch(addToCart(item));  // Dispatch the action
  toast.success('Added to Cart');
};

// Delete from cart function
const deleteCart = (item) => {
  dispatch(deleteFromCart(item));  // Dispatch the action
  toast.success('Deleted from Cart');
};

useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
},[cartItems])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-bold text-3xl text-center py-6">Best Selling Items</h1>
      {loading && (
        <Loader className="fixed inset-0 flex items-center justify-center z-50" />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {getAllProduct.slice(0, 8).map((item, index) => {
          // Destructure product properties
          const { id, title, price, productImageURL } = item;

          return (
            <div
              key={id} // Use product id instead of index
              className="rounded-lg overflow-hidden relative"
              onMouseEnter={() => setHoveredProductId(id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <img
                onClick={() => navigate(`/productDetails/${id}`)} // Pass product ID to navigate
                className="cursor-pointer w-full h-56 object-cover"
                src={productImageURL}
                alt={title}
              />
              <div className="p-4 text-center">
                <h2 className="font-semibold text-lg mb-1">{title}</h2>
                <p className="text-black font-bold">${price}</p>
              </div>
              <div
                className={`absolute top-0 right-0 h-full transition-all duration-300 ease-in-out flex flex-col justify-center items-center ${
                  hoveredProductId === id ? 'w-16' : 'w-0'
                } overflow-hidden`}
              >
                {cartItems.find((p) => p.id == item.id) ? (
                  <button
                    onClick={() => deleteCart(item)}
                    className="text-white mb-4 p-2 bg-black bg-opacity-50 rounded-full hover:text-gray-700 transition-colors duration-200"
                    aria-label="Delete from Cart"
                  >
                    <PiTrashSimpleThin 
                    className="text-lg text-red-500"
                     />
                  </button>
                ) : (
                  <button
                    onClick={() => addCart(item)}
                    
                    className="text-white mb-4 p-2 bg-black bg-opacity-50 rounded-full hover:text-gray-700 transition-colors duration-200"
                    aria-label="Add to Cart"
                  >
                    {/* <RiShoppingCartLine
                    className="text-lg text-sky-500"
                    /> */}
                    <FaOpencart className='text-lg text-blue-500' />
                  </button>
                )}
                <button
                  className="p-2 bg-black bg-opacity-50 text-white hover:text-gray-700 rounded-full transition-colors duration-200"
                  aria-label="Add to Wishlist"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;

