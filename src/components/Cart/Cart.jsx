import { cartSlice, decrementQuantity, deleteFromCart, incrementQuantity } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BuyNowModal from "../buyNowModal/BuyNowModal";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";

export default function Cart() {

  const cartItems = useSelector((state) => state.cart || []);
  console.log(cartItems)
  const dispatch = useDispatch();

// Delete from cart function
const deleteCart = (item) => {
  dispatch(deleteFromCart(item));  // Dispatch the action
  toast.success('Deleted from Cart');
};

// increment quantity function

const handleIncrement = (id) => {
  dispatch(incrementQuantity(id));  // Dispatch the action
}
// increment quantity function

const handleDecrement = (id) => {
  dispatch(decrementQuantity(id));  // Dispatch the action
};

const navigate = useNavigate();
// cart Item Total
const cartItemTotal = cartItems.map(item => item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);

const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);

useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
}, [cartItems])

// Buy Now Function

const user = JSON.parse(localStorage.getItem('users'));

// address info state

const [addressInfo, setAddressInfo] = useState({
  name: '',
  address: '',
  pinCode: '',
  mobileNumber: '',
  time: Timestamp.now(),
  date: new Date().toLocaleString(
    'en-US',{
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }
  )

});

// buy Now Function

const buyNowFunction = () => {
  // if(addressInfo.name == '' || addressInfo.address == '' || addressInfo.pinCode == '' || addressInfo.mobileNumber ){
  //   return toast.error('All Fields are required')
  // }
  // order Info

const orderInfo = {
  cartItems,
  addressInfo,
  email: user.email,
  userId: user.uid,
  status: 'confirmed',
  time: Timestamp.now(),
  date: new Date().toLocaleString(
    'en-US',{
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }
  )
}
try {
  const orderRef = collection(fireDB, 'orders');
  addDoc(orderRef, orderInfo);
  setAddressInfo({
    name: '',
    address: '',
    pinCode: '',
    mobileNumber: '',
  })
  toast.success('order place Successful')

} catch (error) {
  console.log(error)
}
}


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>

      {/* Responsive table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full mb-6">
          <thead>
            <tr className="hidden md:table-row">
              <th className="text-left">Product</th>
              <th>Quantity</th>
              <th className="text-right">Subtotal</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length > 0 ?
            <>
                        {cartItems.map((item, index) => {
              const { id, title, price, productImageURL, quantity, category} = item;
              return (
<tr
                key={item.id}
                className="flex flex-col md:table-row md:flex-row items-center py-4 border-b"
              >
                <td className="flex items-center md:w-auto mb-4 md:mb-0">
                  <img
                    src={productImageURL}
                    alt={title}
                    className="w-20 h-20 object-cover mr-4"
                  />
                  <div>
                    <h2 className="text-lg font-medium">{title}</h2>
                    <p className="text-gray-700">{category}</p>
                    <p className="text-orange-500">${price}</p>
                  </div>
                </td>
                <td className="md:w-auto text-center mb-4 md:mb-0">
                  <div className="flex items-center justify-center">
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
                  </div>
                </td>
                {/* <td className="md:w-auto text-right text-orange-500 mb-4 md:mb-0">
                  ${(price * quantity).toFixed(2)}
                </td> */}
                <td className="md:w-auto text-right">
                  <button
                  onClick={() => deleteCart(item)}
                    className="text-gray-500 hover:text-red-500"
                    
                  >
                    🛒✖
                  </button>
                </td>
              </tr>
              )
            }
              
            )}
            </>
            :
            <h1>Not Product In Cart Page</h1>}
          </tbody>
        </table>
      </div>

      {/* Cart totals */}
      <div className="bg-gray-100 p-4 rounded-md w-full max-w-sm ml-auto">

        <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
        <dl>
          <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-800">
            Price ({cartItemTotal}  items)
          </dt>
          <dd>{cartTotal}</dd>
          </div>
          <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-800">
            <h2>Total: </h2>
          </dt>
          <dd>$ {cartTotal}</dd>
          </div>
        </dl>

        {/* Buy Now Button */}
        <div
          className="w-full text-white font-semibold py-2 rounded mt-4">
            {user
            ? 
            <BuyNowModal
            addressInfo={addressInfo}
            setAddressInfo={setAddressInfo}
            buyNowFunction={buyNowFunction} />
          : 
          navigate('/signIn')
          }
          
        </div>
      </div>
    </div>
  );
}
