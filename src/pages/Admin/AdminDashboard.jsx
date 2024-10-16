// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import AdminProductDetail from "../../components/AdminProductDetail/AdminProductDetail";
// import OrderDetail from "../../components/AdminProductDetail/OrderDetail";
// import UserDetail from "../../components/AdminProductDetail/UserDetails";
// import ProductDetails from "../ProductDetails/ProductDetails";
// import ProductDetail from "../../components/AdminProductDetail/AdminProductDetail";
// import { useContext } from "react";
// import myContext from "../../context/myContext";
// import { IoBasket } from "react-icons/io5";
// import { FaUsers } from "react-icons/fa";
// import { AiOutlineOrderedList } from "react-icons/ai";

// const AdminDashboard = () => {
//     const user = JSON.parse(localStorage.getItem('users'));

//     const context = useContext(myContext);
//     const { getAllProduct } = context;
//     return (
//         <div className="px-8 py-6 bg-white min-h-screen">
//             {/* Top */}


//             <div className="px-5">
//             <div className="dashboard-container px-4 py-8 relative">
//     {/* Top Section - Dashboard Title */}
//     <div className="top mb-8 mt-5 px-5">
//         <div className="bg-gray-800 py-2 border border-transparent rounded-lg shadow-lg">
//             <h1 className="text-center text-4xl font-bold text-white tracking-wider">
//                 Admin Dashboard
//             </h1>
//         </div>
//     </div>

//     {/* Mid Section - Admin Profile & Info */}
//     <div className="mid mb-10 flex flex-col md:flex-row justify-around items-center bg-gray-100 shadow-lg py-7 rounded-lg border border-gray-300 relative overflow-hidden">

//         {/* Left Side - Profile Image */}
//         <div className="flex justify-center w-full md:w-1/3 relative z-10">
//             <img
//                 src="https://img.freepik.com/premium-vector/man-sits-desk-with-laptop-city-background_1013341-201438.jpg?w=740"
//                 alt="admin"
//                 className="w-40 h-40 rounded-full border-4 border-gray-400 shadow-md transform hover:scale-105 transition duration-300"
//             />
//         </div>

//         {/* Right Side - Admin Info */}
//         <div className="w-full md:w-2/3 text-left pr-10 relative z-10 space-y-4">
//             <h1 className="text-2xl text-gray-800 font-semibold">
//                 <span className="text-gray-600">Name: </span>{user?.name || "John Doe"}
//             </h1>
//             <h1 className="text-2xl text-gray-800 font-semibold">
//                 <span className="text-gray-600">Email: </span>{user?.email || "admin@example.com"}
//             </h1>
//             <h1 className="text-2xl text-gray-800 font-semibold">
//                 <span className="text-gray-600">Date: </span>{user?.date || "October 16, 2024"}
//             </h1>
//             <h1 className="text-2xl text-gray-800 font-semibold">
//                 <span className="text-gray-600">Role: </span>{user?.role || "Administrator"}
//             </h1>
//         </div>

//         {/* Background Decorative Elements */}
//         <div className="absolute -top-16 -right-16 bg-gray-300 w-56 h-56 rounded-full opacity-10 transform rotate-45"></div>
//         <div className="absolute -bottom-10 -left-10 bg-gray-300 w-40 h-40 rounded-full opacity-10 transform rotate-45"></div>

//         {/* Decorative Lines for Modern Effect */}
//         <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-400 transform translate-y-1/2 shadow-lg"></div>
//         <div className="absolute top-0 left-0 right-0 h-2 bg-gray-400 transform -translate-y-1/2 shadow-lg"></div>
//     </div>
// </div>





//                 {/* Bottom Section */}
//                 <div className="">
//                     <Tabs>
//                     <TabList className="flex flex-wrap gap-6 justify-center p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
//   {/* Total Products */}
//   <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full">
//     <div className="relative border-2 border-transparent bg-white hover:bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 p-6 cursor-pointer">
//       <div className="text-blue-500 w-16 h-16 mb-4 mx-auto flex items-center justify-center rounded-full bg-blue-100">
//         <IoBasket className="text-lg" />
//       </div>
//       <h2 className="text-center font-bold text-4xl text-blue-600 mb-2">
//         {getAllProduct.length}
//       </h2>
//       <p className="text-center text-blue-700 font-semibold tracking-wider uppercase">
//         Total Products
//       </p>
//     </div>
//   </Tab>

//   {/* Total Orders */}
//   <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full">
//     <div className="relative border-2 border-transparent bg-white hover:bg-gradient-to-br from-green-100 via-green-50 to-green-200 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 p-6 cursor-pointer">
//       <div className="text-green-500 w-16 h-16 mb-4 mx-auto flex items-center justify-center rounded-full bg-green-100">
//         <AiOutlineOrderedList />
//       </div>
//       <h2 className="text-center font-bold text-4xl text-green-600 mb-2">
//         20
//       </h2>
//       <p className="text-center text-green-700 font-semibold tracking-wider uppercase">
//         Total Orders
//       </p>
//     </div>
//   </Tab>

//   {/* Total Users */}
//   <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full">
//     <div className="relative border-2 border-transparent bg-white hover:bg-gradient-to-br from-purple-100 via-purple-50 to-purple-200 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 p-6 cursor-pointer">
//       <div className="text-purple-500 w-16 h-16 mb-4 mx-auto flex items-center justify-center rounded-full bg-purple-100">
//        <FaUsers />
//       </div>
//       <h2 className="text-center font-bold text-4xl text-purple-600 mb-2">
//         50
//       </h2>
//       <p className="text-center text-purple-700 font-semibold tracking-wider uppercase">
//         Total Users
//       </p>
//     </div>
//   </Tab>
// </TabList>

//                     <TabPanel>
//                         <ProductDetail />
//                     </TabPanel>
//                     <TabPanel>
//                         <OrderDetail/>
//                     </TabPanel>
//                     <TabPanel>
//                         <UserDetail />
//                     </TabPanel>
//                     </Tabs>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;


import React, { useContext } from 'react';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { IoBasket } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { AiOutlineOrderedList } from "react-icons/ai";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import myContext from "../../context/myContext";

// Assume these components are defined elsewhere
import AdminProductDetail from "../../components/AdminProductDetail/AdminProductDetail";
import OrderDetail from "../../components/AdminProductDetail/OrderDetail";
import UserDetail from "../../components/AdminProductDetail/UserDetails";

const AdminDashboard = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    const context = useContext(myContext);
    const { getAllProduct } = context;

    const data = [
        { name: 'Jan', sales: 4000 },
        { name: 'Feb', sales: 3000 },
        { name: 'Mar', sales: 5000 },
        { name: 'Apr', sales: 4500 },
        { name: 'May', sales: 6000 },
        { name: 'Jun', sales: 5500 },
    ];

    const StatCard = ({ title, value, icon: Icon, color }) => (
        <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300`}>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-600">{title}</h3>
                <Icon className={`h-6 w-6 ${color}`} />
            </div>
            <p className={`text-3xl font-bold ${color}`}>{value}</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Dashboard Title */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h1 className="text-3xl font-bold text-gray-800 text-center">
                        Admin Dashboard
                    </h1>
                </div>

                {/* Admin Profile */}
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                    <img
                        src="https://img.freepik.com/premium-vector/man-sits-desk-with-laptop-city-background_1013341-201438.jpg?w=740"
                        alt="admin"
                        className="w-32 h-32 rounded-full border-4 border-blue-200 shadow-md"
                    />
                    <div className="flex-1 space-y-2">
                        <h2 className="text-xl font-semibold text-gray-800">{user?.name || "John Doe"}</h2>
                        <p className="text-gray-600">{user?.email || "admin@example.com"}</p>
                        <p className="text-gray-600">{user?.role || "Administrator"}</p>
                        <p className="text-sm text-gray-500">Last login: {user?.date || "October 16, 2024"}</p>
                    </div>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard title="Total Products" value={getAllProduct.length} icon={IoBasket} color="text-blue-600" />
                    <StatCard title="Total Orders" value="20" icon={AiOutlineOrderedList} color="text-green-600" />
                    <StatCard title="Total Users" value="50" icon={FaUsers} color="text-purple-600" />
                </div>

                {/* Sales Chart */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Sales Overview</h2>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="sales" fill="#3b82f6" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="bg-white rounded-lg shadow-md">
                    <Tabs>
                        <TabList className="flex border-b">
                            <Tab className="px-6 py-3 text-gray-600 hover:text-gray-800 focus:outline-none cursor-pointer border-b-2 border-transparent hover:border-blue-500">Products</Tab>
                            <Tab className="px-6 py-3 text-gray-600 hover:text-gray-800 focus:outline-none cursor-pointer border-b-2 border-transparent hover:border-blue-500">Orders</Tab>
                            <Tab className="px-6 py-3 text-gray-600 hover:text-gray-800 focus:outline-none cursor-pointer border-b-2 border-transparent hover:border-blue-500">Users</Tab>
                        </TabList>

                        <div className="p-6">
                            <TabPanel>
                                <AdminProductDetail />
                            </TabPanel>
                            <TabPanel>
                                <OrderDetail />
                            </TabPanel>
                            <TabPanel>
                                <UserDetail />
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;