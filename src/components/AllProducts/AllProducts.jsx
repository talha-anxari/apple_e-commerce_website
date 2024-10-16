import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import myContext from '../../context/myContext';
import Loader from '../Loader/Loader';
import { addToCart, deleteFromCart } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBinLine, RiShoppingCartLine } from '@remixicon/react';
import { PiTrashSimpleThin } from 'react-icons/pi';
import { FaOpencart } from 'react-icons/fa6';

const products = [
  { id: 1, name: 'Sony PlayStation Move', price: 99, image: 'https://img.freepik.com/free-photo/smartphone-with-speed-traffic-scene-generative-ai_188544-19436.jpg?t=st=1728721026~exp=1728724626~hmac=39b9b351834cc6a09c6e2e1e66f17a7bfcc77b9b7bf14695ddc3c47ab3e16c8d&w=1060' },
  { id: 2, name: 'GoPro', price: 399, image: 'https://img.freepik.com/premium-photo/extreme-black-action-video-camera-sports-recording_63762-9753.jpg?w=996' },
  { id: 3, name: 'AirPods Pro', price: 249, image: 'https://img.freepik.com/premium-photo/white-ipod-white-container-with-white-ear-buds-it_524159-3644.jpg?w=740' },
  { id: 4, name: 'iPhone 15 Pro', price: 999, image: 'https://img.freepik.com/free-vector/realistic-smartphone-with-black-back-cover_23-2148385252.jpg?t=st=1728745434~exp=1728749034~hmac=d076c667e650759cd0fd29c6dbed19ccba74021f1cd44fc31d2cfe9890649419&w=740' },
  { id: 5, name: 'Apple MacBook Pro', price: 1299, image: 'https://img.freepik.com/premium-photo/macbook-pro-laptop-16-inch-screen-realistic-mockup-front-view_1234738-440148.jpg?w=1060' },
  { id: 6, name: 'iPhone X Pro', price: 699, image: 'https://img.freepik.com/premium-photo/creative-tempered-glass-mockup-with-awesome-background_622540-7761.jpg?w=740' },
  { id: 7, name: 'PlayStation 5', price: 499, image: 'https://img.freepik.com/premium-photo/floating-playstation-5-gamepad-white-background-3d-render_1101231-36820.jpg?w=740' },
  { id: 8, name: 'Watch', price: 399, image: 'https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039302.jpg?t=st=1728745275~exp=1728748875~hmac=cc4f4298d921f37390b92b6a77e0e6be8c9e3970ce75cf619005ec2be3e8d614&w=996' },
  { id: 9, name: 'Gimbal Parts', price: 29, image: 'https://img.freepik.com/premium-photo/drone-accessories-layout-with-case-remote-control-smartphone_1282444-108592.jpg?w=740' },
];

const categories = ['All', 'Phones', 'Accessories', 'Tablets', 'Watches'];
const tags = ['White', 'Classic', 'Mobile', 'Modern'];
const brands = ['Apple', 'Samsung', 'Dream'];
const priceRanges = ['Less than $10', '$10 - $20', '$20 - $30', '$30 - $40'];

const AllProducts = () => {
    const navigate = useNavigate();
    const [hoveredProductId, setHoveredProductId] = useState(null);

    const context = useContext(myContext);
    const { loading, getAllProduct } = context;

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
        {getAllProduct.map((item, index) => {
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
                {cartItems.some((p) => p.id == item.id) ? (
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
  )
}

export default AllProducts
