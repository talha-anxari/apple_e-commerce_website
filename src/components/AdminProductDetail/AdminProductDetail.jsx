

// import { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import myContext from "../../context/myContext";
// import Loader from "../Loader/Loader";
// import { deleteDoc, doc } from "firebase/firestore";
// import { fireDB } from "../../firebase/FirebaseConfig";
// import toast from "react-hot-toast";

// const ProductDetail = () => {
//   const context = useContext(myContext);
//   const { loading, setLoading, getAllProduct, getAllProductFunction } = context;

//   const navigate = useNavigate();

//   // Delete function
//   const deleteProduct = async (id) => {
//     setLoading(true);
//     try {
//       await deleteDoc(doc(fireDB, "products", id));
//       toast.success("Product Deleted Successfully");
//       getAllProductFunction();
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       {/* Header Section */}
//       <div className="py-6 flex justify-between items-center border-b border-gray-300 mb-8">
//         <h1 className="text-3xl font-semibold text-gray-800">Product Management</h1>
//         <Link to="/addProduct">
//           <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-lg transition">
//             + Add Product
//           </button>
//         </Link>
//       </div>

//       {loading && (
//         <Loader className="fixed inset-0 flex items-center justify-center z-50" />
//       )}

//       {/* Product Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-300 divide-y divide-gray-200 rounded-lg shadow-lg">
//           <thead className="bg-blue-500 text-white">
//             <tr>
//               {["S.No.", "Image", "Title", "Price", "Category", "Date", "Edit", "Delete"].map((header, index) => (
//                 <th
//                   key={index}
//                   className="px-6 py-4 text-left text-sm font-semibold tracking-wider uppercase"
//                 >
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {getAllProduct.map((item, index) => {
//               const { id, title, price, category, date, productImageURL } = item;
//               return (
//                 <tr key={id} className="hover:bg-gray-100 transition">
//                   <td className="px-6 py-4 text-gray-700">{index + 1}</td>
//                   <td className="px-6 py-4">
//                     <img className="w-20 h-20 object-cover rounded-md" src={productImageURL} alt={title} />
//                   </td>
//                   <td className="px-6 py-4 text-gray-700 capitalize">{title}</td>
//                   <td className="px-6 py-4 text-gray-700">{price}</td>
//                   <td className="px-6 py-4 text-gray-700 capitalize">{category}</td>
//                   <td className="px-6 py-4 text-gray-500">{date}</td>
//                   <td className="px-6 py-4">
//                     <button
//                       onClick={() => navigate(`/updateProductPage/${id}`)}
//                       className="text-blue-600 hover:text-blue-800 transition font-medium"
//                     >
//                       Edit
//                     </button>
//                   </td>
//                   <td className="px-6 py-4">
//                     <button
//                       onClick={() => deleteProduct(id)}
//                       className="text-red-600 hover:text-red-800 transition font-medium"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../Loader/Loader";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { loading, setLoading, getAllProduct, getAllProductFunction } = useContext(myContext);
  const navigate = useNavigate();

  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "products", id));
      toast.success("Product Deleted Successfully");
      getAllProductFunction();
    } catch (error) {
      console.log(error);
      toast.error("Error deleting product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold text-purple-600 mb-6 text-center">Product Management</h1>
          <Link to="/addProduct">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              + Add Product
            </button>
          </Link>
        </div>

        {loading && <Loader className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50" />}

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="bg-purple-100 text-left text-xs font-semibold text-purple-700 uppercase tracking-wider">
                  {["S.No.", "Image", "Title", "Price", "Category", "Date", "Actions"].map((header) => (
                    <th key={header} className="px-6 py-3 text-xs font-semibold text-purple-700 uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {getAllProduct.map((item, index) => {
                  const { id, title, price, category, date, productImageURL } = item;
                  return (
                    <tr key={id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img className="h-16 w-16 rounded-md object-cover" src={productImageURL} alt={title} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">{title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${price}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => navigate(`/updateProductPage/${id}`)}
                          className="text-indigo-600 hover:text-indigo-900 mr-4"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteProduct(id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
