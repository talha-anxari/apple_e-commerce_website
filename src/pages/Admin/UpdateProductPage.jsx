// import { useContext, useEffect, useState } from "react";
// import myContext from "../../context/myContext";
// import { useNavigate, useParams } from "react-router";
// import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
// import { fireDB } from "../../firebase/FirebaseConfig";
// import toast from "react-hot-toast";

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

// const UpdateProductPage = () => {
//     const context = useContext(myContext);
//     const {loading, setLoading, getAllProductFunction} = context;
//     const navigate = useNavigate();

//     const { id } = useParams();

//     // create product state

//     const [product, setProduct] = useState({
//         title: '',
//         price: '',
//         productImageURL: '',
//         category: '',
//         description: '',
//         time: Timestamp.now(),
//         date: new Date().toLocaleString(
//             'en-US',
//             {
//                 year: 'numeric',
//                 month: 'short',
//                 day: '2-digit',
//             }
//         )
//     });

//     // get single product function

//     const getSingleProductFunction = async () => {
//         setLoading(true);

//         try {
//             const productTemp = await getDoc(doc(fireDB, 'products', id));
            
//             const product = productTemp.data();
//             console.log(product)

//             setProduct({
//                 title: product?.title,
//                 price: product?.price,
//                 productImageURL: product?.productImageURL,
//                 category: product?.category,
//                 description: product?.description,
//                 time: product?.time,
//                 date: product?.date,
//                 quantity: product?.quantity
//             })
//             setLoading(false)

//         } catch (error) {
//             console.log(error)
//             setLoading(false)
//         }
//     }

//     // now update product

//     const updateProduct = async () => {
//         setLoading(true);

//         try {
//             await setDoc(doc(fireDB, 'products', id), product)
//             toast.success('Product  updated successfully')
//             getAllProductFunction();
//             setLoading(false)
//             navigate('/adminDashboard')
//         } catch (error) {
//             console.log(error)
//             setLoading(false)
//         }
//     }

//     useEffect(() =>{
//         getSingleProductFunction();
//     },[])

//     return (
//         <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//             <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Update Product</h2>
//                 <div className="space-y-4">
//                     <input
//                         type="text"
//                         name="title"
//                         value={product.title}
//                         onChange={(e) => setProduct({ ...product, title: e.target.value })}
//                         placeholder="Product Title"
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                         type="number"
//                         value={product.price}
//                         onChange={(e) => setProduct({ ...product, price: e.target.value })}
//                         name="price"
//                         placeholder="Product Price"
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                         type="text"
//                         value={product.productImageURL}
//                         onChange={(e) => setProduct({ ...product, productImageURL: e.target.value })}
//                         name="productImageUrl"
//                         placeholder="Product Image URL"
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <select
//                     value={product.category}
//                     onChange={(e) => setProduct({ ...product, category: e.target.value })}
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     >
//                         <option disabled>Select Product Category</option>
//                         {categoryList.map((value, index) => (
//                             <option key={index} value={value.name}>{value.name}</option>
//                         ))}
//                     </select>
//                     <textarea
//                     value={product.description}
//                     onChange={(e) => setProduct({ ...product, description: e.target.value })}
//                         name="description"
//                         placeholder="Product Description"
//                         rows="4"
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     ></textarea>
//                     <button
//                     onClick={updateProduct}
//                         type="button"
//                         className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//                     >
//                         Update Product
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default UpdateProductPage;

import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import myContext from "../../context/myContext";

const categories = [
    { label: 'Select Category', value: '' },
    { label: 'iPhone', value: 'iPhone' },
    { label: 'MacBook', value: 'MacBook' },
    { label: 'Apple Watch', value: 'Apple Watch' },
    { label: 'iPad', value: 'iPad' },
    { label: 'AirPods', value: 'AirPods' },
    { label: 'AirTag', value: 'AirTag' },
    { label: 'Apple Vision Pro', value: 'Apple Vision Pro' },
    { label: 'Apple TV 4k', value: 'Apple TV 4k' },
    { label: 'HomePod', value: 'HomePod' },
    { label: 'Accessories', value: 'Accessories' },
];

const UpdateProductPage = () => {
    const { loading, setLoading, getAllProductFunction } = useContext(myContext);
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

    const { id } = useParams();
    const navigate = useNavigate();

    const fetchProductData = async () => {
        setLoading(true);
        try {
            const productSnapshot = await getDoc(doc(fireDB, 'products', id));
            const productData = productSnapshot.data();
            if (productData) {
                setProduct({
                    title: productData.title,
                    price: productData.price,
                    productImageURL: productData.productImageURL,
                    category: productData.category,
                    description: productData.description,
                    quantity: productData.quantity,
                    time: productData.time,
                    date: productData.date,
                });
            }
        } catch (error) {
            console.error("Error fetching product:", error);
            toast.error("Failed to fetch product details.");
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateProduct = async () => {
        if (!product.title || !product.price || !product.productImageURL || !product.category || !product.description) {
            toast.error("Please fill all the fields");
            return;
        }

        setLoading(true);
        try {
            await setDoc(doc(fireDB, 'products', id), product);
            toast.success("Product updated successfully");
            getAllProductFunction();
            navigate('/adminDashboard');
        } catch (error) {
            console.error("Error updating product:", error);
            toast.error("Product update failed.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProductData();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Update Product</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        value={product.title}
                        onChange={(e) => setProduct({ ...product, title: e.target.value })}
                        placeholder="Product Title"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="number"
                        value={product.price}
                        onChange={(e) => setProduct({ ...product, price: e.target.value })}
                        placeholder="Product Price"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        value={product.productImageURL}
                        onChange={(e) => setProduct({ ...product, productImageURL: e.target.value })}
                        placeholder="Product Image URL"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                        value={product.category}
                        onChange={(e) => setProduct({ ...product, category: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {categories.map((option, index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                    <textarea
                        value={product.description}
                        onChange={(e) => setProduct({ ...product, description: e.target.value })}
                        placeholder="Product Description"
                        rows="4"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <button
                        onClick={handleUpdateProduct}
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                    >
                        Update Product
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateProductPage;
