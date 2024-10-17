// import React, { useContext } from "react";
// import Layout from "../../components/Layout/Layout";
// import myContext from "../../context/myContext";

// const UserDashboard = () => {
//   const user = JSON.parse(localStorage.getItem("users"));

//   const context = useContext(myContext);
//   const { loading, getAllOrder } = context;
//   return (
//     <Layout>
//       <div className="container mx-auto px-4 py-8">
//         {/* Hero Section */}
//         <div className="bg-black text-white rounded-xl p-8 mb-8">
//           <h1 className="text-4xl font-bold mb-4">Welcome to Your Dashboard</h1>
//           <p className="text-xl">Manage your Apple products and orders</p>
//         </div>

//         {/* User Info */}
//         <div className="bg-gray-100 rounded-xl p-8 mb-8">
//           <div className="flex items-center justify-between">
//             <div>
//               <h2 className="text-2xl font-bold mb-2">
//                 <span className="font-bold">Name : </span>
//                 {user?.name}
//               </h2>
//               <p className="text-gray-600">
//                 <span className="font-bold">Email : </span>
//                 {user?.email}
//               </p>
//               <p className="text-gray-600">
//                 <span className="font-bold">Date : </span>
//                 {user?.date}
//               </p>
//               <p className="text-gray-600">
//                 <span className="font-bold">Role : </span>
//                 {user?.role}
//               </p>
//             </div>
//             <img
//               src="https://img.freepik.com/premium-vector/illustrations_995281-35700.jpg?w=740"
//               alt="User Avatar"
//               className="w-20 h-20 rounded-full"
//             />
//           </div>
//         </div>

//         {/* Order Details */}
//         {getAllOrder
//           .filter((obj) => obj.userId == user?.uid)
//           .map((order, index) => {
//             return (
//               <div key={index} className="">
//                 {order.cartItems.map((item, index) => {
//                   const {
//                     id,
//                     date,
//                     quantity,
//                     price,
//                     title,
//                     productImageURL,
//                     category,
//                   } = item;
//                   return (
//                     <div
//                       key={index}
//                       className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
//                     >
//                       <div className="p-8">
//                         <h2 className="text-2xl font-bold mb-6">
//                           Order Details
//                         </h2>
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//                           <div>
//                             <p className="text-sm font-semibold text-gray-600">
//                               Order Id
//                             </p>
//                             <p className="text-lg">{id}</p>
//                           </div>
//                           <div>
//                             <p className="text-sm font-semibold text-gray-600">
//                               Date
//                             </p>
//                             <p className="text-lg">{date}</p>
//                           </div>
//                           <div>
//                             <p className="text-sm font-semibold text-gray-600">
//                               Total Amount
//                             </p>
//                             <p className="text-lg">{price * quantity}</p>
//                           </div>
//                           <div>
//                             <p className="text-sm font-semibold text-gray-600">
//                               Order Status
//                             </p>
//                             <p className="text-lg text-green-600 first-letter:uppercase">{order.status}</p>
//                           </div>
//                         </div>
//                         <div className="border-t border-gray-200 pt-6">
//                           <h3 className="text-xl font-semibold mb-4">Items</h3>
//                           <ul className="divide-y divide-gray-200">
//                             <li key={id} className="py-4 flex items-center">
//                               <img
//                                 src={productImageURL}
//                                 alt={title}
//                                 className="w-16 h-16 object-cover rounded-lg mr-4"
//                               />
//                               <div className="flex-1">
//                                 <h4 className="text-lg font-semibold">
//                                   {title}
//                                 </h4>
//                                 <p className="text-gray-600">
//                                     {category}
//                                   </p>
//                               </div>
//                               <div className="text-right">
//                                 <p className="text-lg font-semibold">{price}</p>
//                                 <p className="text-gray-600">Qty: {quantity}</p>
//                               </div>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             );
//           })}

//         {/* Quick Links */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           <a
//             href="#"
//             className="bg-gray-100 rounded-xl p-4 text-center hover:bg-gray-200 transition"
//           >
//             <img
//               src="https://img.freepik.com/free-vector/customer-using-mobile-app-tracking-order-delivery_74855-5229.jpg?t=st=1729161080~exp=1729164680~hmac=80d6c00fc185be5d0a3ea6f8b3aae14b47262c4092d7c14253385330c501307a&w=996"
//               alt="Track Order"
//               className="w-16 h-16 mx-auto mb-2"
//             />
//             <p className="font-semibold">Track Order</p>
//           </a>
//           <a
//             href="#"
//             className="bg-gray-100 rounded-xl p-4 text-center hover:bg-gray-200 transition"
//           >
//             <img
//               src="https://img.freepik.com/premium-vector/professional-call-center-concept-with-man-answering-questions_1324816-17165.jpg?w=996"
//               alt="Support"
//               className="w-16 h-16 mx-auto mb-2"
//             />
//             <p className="font-semibold">Get Support</p>
//           </a>
//           <a
//             href="#"
//             className="bg-gray-100 rounded-xl p-4 text-center hover:bg-gray-200 transition"
//           >
//             <img
//               src="https://img.freepik.com/free-vector/phishing-account-concept_23-2148552774.jpg?t=st=1729160996~exp=1729164596~hmac=350ebbd385e23e5d3cbf83595749bfd64fde7a6854c7bbd1f1c4955461ac4925&w=740"
//               alt="Apple ID"
//               className="w-16 h-16 mx-auto mb-2"
//             />
//             <p className="font-semibold">Manage Apple ID</p>
//           </a>
//           <a
//             href="#"
//             className="bg-gray-100 rounded-xl p-4 text-center hover:bg-gray-200 transition"
//           >
//             <img
//               src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?t=st=1729160932~exp=1729164532~hmac=ad06f37eb4c1438b0ea66a4968a4a6dc1ad57b951a339bd885566506dd1c4123&w=740"
//               alt="Settings"
//               className="w-16 h-16 mx-auto mb-2"
//             />
//             <p className="font-semibold">Account Settings</p>
//           </a>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default UserDashboard;


import React, { useContext, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import myContext from "../../context/myContext";

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  const context = useContext(myContext);
  const { loading, getAllOrder } = context;
  const [activeTab, setActiveTab] = useState('overview');

  // Dummy data for the chart
  const data = [
    { name: 'Jan', spend: 4000 },
    { name: 'Feb', spend: 3000 },
    { name: 'Mar', spend: 5000 },
    { name: 'Apr', spend: 2780 },
    { name: 'May', spend: 1890 },
    { name: 'Jun', spend: 2390 },
  ];

  const userOrders = getAllOrder.filter((obj) => obj.userId === user?.uid);

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Total Spend</h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="text-2xl font-bold text-gray-900">₹{userOrders.reduce((total, order) => total + order.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0), 0)}</p>
              <p className="text-sm text-gray-500 mt-2">+20.1% from last month</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <p className="text-2xl font-bold text-gray-900">{userOrders.length}</p>
              <p className="text-sm text-gray-500 mt-2">+180.1% from last month</p>
            </div>
            <div className="col-span-full bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Spending Overview</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="spend" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        );
      case 'orders':
        return (
          <div className="space-y-6">
            {userOrders.map((order, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Order #{order.id}</h3>
                <div className="space-y-4">
                  {order.cartItems.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-4">
                      <img src={item.productImageURL} alt={item.title} className="w-16 h-16 rounded-md object-cover" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-800">₹{item.price}</p>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">{order.status}</span>
                  <p className="font-semibold text-gray-800">Total: ₹{order.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}</p>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return <div className="text-gray-600">Content for {activeTab}</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white shadow-lg">
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-3xl font-bold text-gray-800">AppleStore</h1>
        </div>
        <ul className="flex flex-col py-4">
          {['overview', 'orders', 'products', 'settings'].map((item) => (
            <li key={item}>
              <a
                href="#"
                className={`flex items-center text-gray-600 py-2 px-4 ${activeTab === item ? 'bg-gray-200' : ''} hover:bg-gray-200 transition-colors duration-200`}
                onClick={() => setActiveTab(item)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-semibold text-gray-800">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-1 rounded-full text-gray-400 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button className="p-1 rounded-full text-gray-400 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
              {user?.name.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold text-gray-800">Welcome back, {user?.name}!</h1>
              <p className="text-gray-600 mt-2">Here's what's happening with your account today.</p>
            </div>
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;