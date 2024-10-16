import React, { useContext, useEffect, useState } from "react";
import { Heart } from "lucide-react";
import myContext from "../../context/myContext";
import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity, deleteFromCart, incrementQuantity } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const [product, setProduct] = useState("");

  const { id } = useParams();

  // get Product Detail data 

  const getProductData = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "products", id));
      setProduct({...productTemp.data(), id : productTemp.id});
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const cartItems = useSelector((state) => state.cart || []);
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success('Add to cart');
  }
  
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item))
    toast.success('Delete  from cart successfully');
  }

  // increment quantity function

const handleIncrement = (id) => {
  dispatch(incrementQuantity(id));  // Dispatch the action
}
// increment quantity function

const handleDecrement = (id) => {
  dispatch(decrementQuantity(id));  // Dispatch the action
};

useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cartItems))
},[cartItems])
  useEffect(() => {
    getProductData();
  },[])

  return (
    <div className="max-w-7xl mx-auto p-8 flex flex-col md:flex-row gap-8">
      {loading ? (
        <Loader className="fixed inset-0 flex items-center justify-center z-50" />
      ) : (
        <>
          <div className="md:w-1/2">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img
                src={product?.productImageURL}
                alt={product?.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
  
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{product?.title}</h1>
            <div className="flex items-center mb-4">
              <span className="text-orange-500 mr-1">★★★★★</span>
              <span className="text-gray-600">5.0</span>
            </div>
            <p className="text-3xl font-bold text-orange-500 mb-4">$ {product?.price}</p>
            <p className="text-gray-600 mb-6">{product?.description}</p>
  
            <p className="text-gray-600 mb-4">2 in stock</p>
            <div className="flex items-center gap-4 mb-6">
            {/* <div className="flex items-center justify-center">
                    <button
                      className="px-2 py-1 bg-gray-300 rounded"
                      onClick={() => handleDecrement(id)}
                    >
                      -
                    </button>
                    <span className="px-4">{quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-300 rounded"
                      onClick={() => handleIncrement(id)}
                    >
                      +
                    </button>
                  </div> */}
  
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
                BUY NOW
              </button>

              {cartItems.some((p) => p.id === product.id)
              ?
              <button onClick={() => deleteCart(product)} className="bg-gray-800 text-white px-6 py-2 rounded-md">
              Delete From Cart
            </button>
            :
            <button onClick={() => addCart(product)} className="bg-gray-800 text-white px-6 py-2 rounded-md">
            ADD TO CART
          </button>
              }
  
              <button className="border border-gray-300 p-2 rounded-full">
                <Heart size={24} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
  
};

export default ProductDetail;
