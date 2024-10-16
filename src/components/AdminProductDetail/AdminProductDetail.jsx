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

// //   Delete function
//   const deleteProduct = async (id) => {
//     setLoading(true);
//     try {
//         await deleteDoc(doc(fireDB, 'products', id));
//         toast.success('Product Delete Successfully');
//         getAllProductFunction();
//         setLoading(false);
//     } catch (error) {
//         console.log(error)
//         setLoading(false);
//     }
//   }
//   return (
//     <div className="p-6 bg-gray-50">
//       <div className="py-5 flex justify-between items-center border-b border-gray-200">
//         {/* Text */}
//         <h1 className="text-2xl text-gray-700 font-bold">Product Management</h1>
//         {/* Add Product Button */}
//         <Link to={"/addProduct"}>
//           <button className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
//             + Add Product
//           </button>
//         </Link>
//       </div>
//       {loading && (
//         <Loader className="fixed inset-0 flex items-center justify-center z-50" />
//       )}
//       {/* table  */}
//       <div className="w-full overflow-x-auto mb-5">
//         <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
//           <tbody>
//             <tr>
//               <th
//                 scope="col"
//                 className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
//               >
//                 S.No.
//               </th>
//               <th
//                 scope="col"
//                 className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
//               >
//                 Image
//               </th>
//               <th
//                 scope="col"
//                 className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
//               >
//                 Title
//               </th>
//               <th
//                 scope="col"
//                 className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
//               >
//                 Price
//               </th>
//               <th
//                 scope="col"
//                 className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
//               >
//                 Category
//               </th>
//               <th
//                 scope="col"
//                 className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
//               >
//                 {" "}
//                 Date
//               </th>
//               <th
//                 scope="col"
//                 className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
//               >
//                 Action
//               </th>
//               <th
//                 scope="col"
//                 className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
//               >
//                 Action
//               </th>
//             </tr>
//             {getAllProduct.map((item, index) => {
//               const { id, title, price, category, date, productImageURL } =
//                 item;
//               return (
//                 <tr key={index} className="text-pink-300">
//                   <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 ">
//                     {index + 1}.
//                   </td>
//                   <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                     <div className="flex justify-center">
//                       <img className="w-20 " src={productImageURL} alt="" />
//                     </div>
//                   </td>
//                   <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                     {title}
//                   </td>
//                   <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                     {price}
//                   </td>
//                   <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                     {category}
//                   </td>
//                   <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                     {date}
//                   </td>
//                   <td
//                   onClick={() => navigate(`/updateProductPage/${id}`)}
//                    className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer ">
//                     Edit
//                   </td>
//                   <td
//                   onClick={() => deleteProduct(id)}
//                    className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer ">
//                     Delete
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

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../Loader/Loader";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const context = useContext(myContext);
  const { loading, setLoading, getAllProduct, getAllProductFunction } = context;

  const navigate = useNavigate();

  // Delete function
  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "products", id));
      toast.success("Product Deleted Successfully");
      getAllProductFunction();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="py-6 flex justify-between items-center border-b border-gray-300 mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Product Management</h1>
        <Link to="/addProduct">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-lg transition">
            + Add Product
          </button>
        </Link>
      </div>

      {loading && (
        <Loader className="fixed inset-0 flex items-center justify-center z-50" />
      )}

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 divide-y divide-gray-200 rounded-lg shadow-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              {["S.No.", "Image", "Title", "Price", "Category", "Date", "Edit", "Delete"].map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-4 text-left text-sm font-semibold tracking-wider uppercase"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {getAllProduct.map((item, index) => {
              const { id, title, price, category, date, productImageURL } = item;
              return (
                <tr key={id} className="hover:bg-gray-100 transition">
                  <td className="px-6 py-4 text-gray-700">{index + 1}</td>
                  <td className="px-6 py-4">
                    <img className="w-20 h-20 object-cover rounded-md" src={productImageURL} alt={title} />
                  </td>
                  <td className="px-6 py-4 text-gray-700 capitalize">{title}</td>
                  <td className="px-6 py-4 text-gray-700">{price}</td>
                  <td className="px-6 py-4 text-gray-700 capitalize">{category}</td>
                  <td className="px-6 py-4 text-gray-500">{date}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => navigate(`/updateProductPage/${id}`)}
                      className="text-blue-600 hover:text-blue-800 transition font-medium"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => deleteProduct(id)}
                      className="text-red-600 hover:text-red-800 transition font-medium"
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
  );
};

export default ProductDetail;
