// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { X as XMarkIcon } from 'lucide-react';
// import { useContext, useState } from 'react';
// import myContext from '../../context/myContext';
// import { addDoc, collection, Timestamp } from 'firebase/firestore';
// import toast from 'react-hot-toast';
// import { fireDB } from '../../firebase/FirebaseConfig';
// import Loader from '../../components/Loader/Loader';

// const categoryList = [
//     { name: '' },
//     { name: 'iPhone' },
//     { name: 'MacBook' },
//     { name: 'Apple Watch' },
//     { name: 'iPad' },
//     { name: 'AirPods' },
//     { name: 'AirTag' },
//     { name: 'Apple Vision Pro' },
//     { name: 'Apple TV 4k' },
//     { name: 'HomePod' },
//     { name: 'Accessories' },
// ];

// const AddProductPage = () => {

//   const context = useContext(myContext);
//   const {loading, setLoading} = context;
//     const navigate = useNavigate(); // useNavigate hook

//     const [product, setProduct] = useState({
//       title: '',
//       price: '',
//       productImageURL: '',
//       category: '',
//       description: '',
//       quantity: 1,
//       time: Timestamp.now(),
//       date: new Date().toLocaleString(
//         'en-US',
//         {
//           year: 'numeric',
//           month: 'short',
//           day: '2-digit',
//         }
//       )

//     })

//     const handleClose = () => {
//         navigate('/adminDashboard'); // Navigate to adminDashboard on close
//     };

//     const handleAddProduct = async () => {
//       if (product.title == "" || product.price == "" || product.productImageURL == "" || product.category == '' || product.description == "") {
//         return toast.error("Please fill all the fields")
//     }
  
//       setLoading(true);
  
//       // Add Products in Firebase
    
//       try {
//         const productRef = collection(fireDB, 'products');
//         await addDoc(productRef, product)
//         toast.success('Add product successfully');
//         navigate('/adminDashboard');
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//         toast.error("Add product failed");
//       }
        
//     }

//     return (
//         <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//                 {loading && (
//         <Loader className="fixed inset-0 flex items-center justify-center z-50" />
//       )}
//             <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
//                 {/* Close Button */}
//                 <button 
//                     onClick={handleClose} 
//                     className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//                 >
//                     {/* &times; */}
//                     <XMarkIcon size={24} />
//                 </button>

//                 <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add Product</h2>
//                 <div className="space-y-4">
//                     <input
//                         type="text"
//                         name="title"
//                         value={product.title}
//                         onChange={(e) => {
//                           setProduct({
//                             ...product,
//                             title: e.target.value
//                           })
//                         }}
//                         placeholder="Product Title"
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        
//                     />
//                     <input
//                         type="number"
//                         name="price"
//                         value={product.price}
//                         onChange={(e) => {
//                           setProduct({
//                             ...product,
//                             price: e.target.value
//                           })
//                         }}
//                         placeholder="Product Price"
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                         type="text"
//                         name="productImageUrl"
//                         value={product.productImageURL}
//                         onChange={(e) => {
//                           setProduct({
//                             ...product,
//                             productImageURL: e.target.value
//                           })
//                         }}
//                         placeholder="Product Image URL"
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <select
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         value={product.category}
//                         onChange={(e) => {
//                           setProduct({
//                             ...product,
//                             category: e.target.value
//                           })
//                         }}
//                     >
//                         <option disabled>Select Product Category</option>
//                         {categoryList.map((value, index) => (
//                             <option key={index} value={value.name}>{value.name}</option>
//                         ))}
//                     </select>
//                     <textarea
//                                             value={product.description}
//                                             onChange={(e) => {
//                                               setProduct({
//                                                 ...product,
//                                                 description: e.target.value
//                                               })
//                                             }}
//                         name="description"
//                         placeholder="Product Description"
//                         rows="4"
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     ></textarea>
//                     <button
//                     onClick={handleAddProduct}
//                         type="button"
//                         className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//                     >
//                         Add Product
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AddProductPage;

import { useNavigate } from 'react-router-dom';
import { X as XMarkIcon } from 'lucide-react';
import { useContext, useState } from 'react';
import myContext from '../../context/myContext';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { fireDB } from '../../firebase/FirebaseConfig';
import Loader from '../../components/Loader/Loader';

// Predefined categories for the product dropdown
const categoryList = [
    { name: '' },
    { name: 'iPhone' },
    { name: 'MacBook' },
    { name: 'Apple Watch' },
    { name: 'iPad' },
    { name: 'AirPods' },
    { name: 'AirTag' },
    { name: 'Apple Vision Pro' },
    { name: 'Apple TV 4k' },
    { name: 'HomePod' },
    { name: 'Accessories' },
];

const AddProductPage = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;
    const navigate = useNavigate(); // React Router's navigation hook

    // State for product form
    const [product, setProduct] = useState({
        title: '',
        price: '',
        productImageURL: '',
        category: '',
        description: '',
        quantity: 1,
        time: Timestamp.now(),
        date: new Date().toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
        }),
    });

    // Close the add product form and navigate back
    const handleClose = () => {
        navigate('/adminDashboard'); // Navigate to adminDashboard on close
    };

    // Handle adding a product to Firebase
    const handleAddProduct = async () => {
        const { title, price, productImageURL, category, description } = product;

        // Validate form fields
        if (!title || !price || !productImageURL || !category || !description) {
            return toast.error('Please fill in all fields');
        }

        setLoading(true);

        try {
            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, product);
            toast.success('Product added successfully');
            navigate('/adminDashboard');
            setLoading(false);
        } catch (error) {
            console.error('Error adding product:', error);
            setLoading(false);
            toast.error('Failed to add product');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            {loading && (
                <Loader className="fixed inset-0 flex items-center justify-center z-50" />
            )}
            <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                {/* Close Button */}
                <button 
                    onClick={handleClose} 
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
                >
                    <XMarkIcon size={24} />
                </button>

                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Add New Product</h2>

                <div className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={(e) => setProduct({ ...product, title: e.target.value })}
                        placeholder="Product Title"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={(e) => setProduct({ ...product, price: e.target.value })}
                        placeholder="Product Price"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        name="productImageUrl"
                        value={product.productImageURL}
                        onChange={(e) => setProduct({ ...product, productImageURL: e.target.value })}
                        placeholder="Product Image URL"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={product.category}
                        onChange={(e) => setProduct({ ...product, category: e.target.value })}
                    >
                        <option disabled>Select Product Category</option>
                        {categoryList.map((value, index) => (
                            <option key={index} value={value.name}>{value.name}</option>
                        ))}
                    </select>
                    <textarea
                        value={product.description}
                        onChange={(e) => setProduct({ ...product, description: e.target.value })}
                        name="description"
                        placeholder="Product Description"
                        rows="4"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>

                    <button
                        onClick={handleAddProduct}
                        type="button"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddProductPage;
