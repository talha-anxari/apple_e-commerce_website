import React, { useContext } from "react";
import myContext from "../../context/myContext";

const OrderDetail = () => {
  const { getAllOrder, deleteOrderFunction } = useContext(myContext);

  return (
    <div className="bg-gray-100  p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-purple-600 mb-6 text-center">VIP Orders</h1>
        
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="bg-purple-100 text-left text-xs font-semibold text-purple-700 uppercase tracking-wider">
                  {["S.No.", "Order Id", "Image", "Title", "Category", "Price", "Quantity", "Total Price", "Status", "Name", "Address", "Pincode", "Phone Number", "Email", "Date", "Action"].map((header) => (
                    <th key={header} className="px-4 py-3">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {getAllOrder.flatMap((order, orderIndex) =>
                  order.cartItems.map((item, itemIndex) => (
                    <tr key={`${order.id}-${item.id}`} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm">{orderIndex * order.cartItems.length + itemIndex + 1}</td>
                      <td className="px-4 py-3 text-sm">{item.id}</td>
                      <td className="px-4 py-3">
                        <img src={item.productImageURL} alt={item.title} className="h-12 w-12 object-cover rounded" />
                      </td>
                      <td className="px-4 py-3 text-sm">{item.title}</td>
                      <td className="px-4 py-3 text-sm">{item.category}</td>
                      <td className="px-4 py-3 text-sm">${item.price}</td>
                      <td className="px-4 py-3 text-sm">{item.quantity}</td>
                      <td className="px-4 py-3 text-sm">${item.quantity * item.price}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          order.status === "Delivered" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">{order.addressInfo.name}</td>
                      <td className="px-4 py-3 text-sm">{order.addressInfo.address}</td>
                      <td className="px-4 py-3 text-sm">{order.addressInfo.pinCode}</td>
                      <td className="px-4 py-3 text-sm">{order.addressInfo.mobileNumber}</td>
                      <td className="px-4 py-3 text-sm">{order.email}</td>
                      <td className="px-4 py-3 text-sm">{order.date}</td>
                      <td className="px-4 py-3 text-sm">
                        <button
                          onClick={() => deleteOrderFunction(order.id)}
                          className="text-red-600 hover:text-red-900 transition duration-150 ease-in-out"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;

