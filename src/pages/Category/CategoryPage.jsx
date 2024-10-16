import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate, useParams } from "react-router";
import myContext from "../../context/myContext";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import { RiDeleteBinLine, RiShoppingCartLine } from "@remixicon/react";
import { FaOpencart } from "react-icons/fa6";
import { PiTrashSimpleThin } from "react-icons/pi";

const CategoryPage = () => {
  const { categoryname } = useParams();
  const context = useContext(myContext);
  const { loading, getAllProduct } = context;
  const [hoveredProductId, setHoveredProductId] = useState(null); // Define hoveredProductId state
  const navigate = useNavigate();

  // Filter products based on the selected category
  const filterProduct = getAllProduct.filter((obj) => obj.category.includes(categoryname));
  const goToHome = () => {
    navigate("/");
  };

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
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-bold text-3xl text-center py-6">{categoryname}</h1>
        {loading ? 
        <Loader className="fixed inset-0 flex items-center justify-center z-50" />
        :
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProduct.length > 0 ? 
          filterProduct.map((item) => {  // Use filtered products here
            const { id, title, price, productImageURL } = item; // Destructure product properties

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
                    hoveredProductId === id ? "w-16" : "w-0"
                  } overflow-hidden`}
                >
                {cartItems.some((p) => p.id == item.id) ? (
                  <button
                    onClick={() => deleteCart(item)}
                    className="text-white mb-4 p-2 bg-black bg-opacity-50 rounded-full hover:text-gray-700 transition-colors duration-200"
                    aria-label="Delete from Cart"
                  >
                    {/* <RiDeleteBinLine
                    className="text-lg"
                    color='red'
                     /> */}
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
                    className="text-lg"
                    /> */}
                    <FaOpencart className='text-lg text-blue-500' />
                  </button>
                )}
                  <button
                    className="p-2 bg-black bg-opacity-50 text-white hover:text-gray-700 rounded-full transition-colors duration-200"
                    aria-label="Add to Wishlist"
                  >
                    {/* Add to Wishlist Icon */}
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
          })
          :
<div className="flex justify-center items-center h-screen bg-gray-100">
  <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm text-center">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">
      No items found in {categoryname}
    </h2>
    <p className="text-gray-600 mb-6">
      It seems like there are no products available in the {categoryname} category at the moment.
    </p>
    <button
      onClick={() => navigate("/")}
      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
    >
      Go Back Home
    </button>
  </div>
</div> // Show a message if no products found
        }

      </div>
      }
      </div>
    </Layout>
  );
};

export default CategoryPage;



// import React, { useContext, useState } from "react";
// import Layout from "../../components/Layout/Layout";
// import { useNavigate, useParams } from "react-router";
// import myContext from "../../context/myContext";
// import Loader from "../../components/Loader/Loader";

// const CategoryPage = () => {
//   const { categoryname } = useParams();
//   const context = useContext(myContext);
//   const { loading, getAllProduct } = context;
//   const [hoveredProductId, setHoveredProductId] = useState(null); // Define hoveredProductId state
//   const navigate = useNavigate();

//  // Loading state handling
//  const filterProduct = getAllProduct.filter((obj) => obj.category.includes(categoryname))

//   return (
//     <Layout>
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="font-bold text-3xl text-center py-6">{categoryname}</h1>
//         {loading ? 
//         <Loader className="fixed inset-0 flex items-center justify-center z-50" />
//         :
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filterProduct.length > 0 ? 
//           <>
//                   {getAllProduct.slice(0, 8).map((product) => {
//           const { id, title, price, productImageURL } = product; // Destructure product properties

//           return (
//             <div
//               key={id} // Use product id instead of index
//               className="rounded-lg overflow-hidden relative"
//               onMouseEnter={() => setHoveredProductId(id)}
//               onMouseLeave={() => setHoveredProductId(null)}
//             >
//               <img
//                 onClick={() => navigate(`/productDetails/${id}`)} // Pass product ID to navigate
//                 className="cursor-pointer w-full h-56 object-cover"
//                 src={productImageURL}
//                 alt={title}
//               />
//               <div className="p-4 text-center">
//                 <h2 className="font-semibold text-lg mb-1">{title}</h2>
//                 <p className="text-black font-bold">${price}</p>
//               </div>
//               <div
//                 className={`absolute top-0 right-0 h-full transition-all duration-300 ease-in-out flex flex-col justify-center items-center ${
//                   hoveredProductId === id ? "w-16" : "w-0"
//                 } overflow-hidden`}
//               >
//                 <button
//                   className="text-white mb-4 p-2 bg-black bg-opacity-50 rounded-full hover:text-gray-700 transition-colors duration-200"
//                   aria-label="Add to Cart"
//                 >
//                   {/* Add to Cart Icon */}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                     />
//                   </svg>
//                 </button>
//                 <button
//                   className="p-2 bg-black bg-opacity-50 text-white hover:text-gray-700 rounded-full transition-colors duration-200"
//                   aria-label="Add to Wishlist"
//                 >
//                   {/* Add to Wishlist Icon */}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//           </>
//           :
//           <div className="flex justify-center items-center h-screen bg-gray-100">


//         }

//       </div>
//     }
//       </div>
//     </Layout>
//   );
// };

// export default CategoryPage;
