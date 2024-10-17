import React, { useContext, useState } from 'react';
import { Tab } from '@headlessui/react';
import { IoBasket, IoTrendingUp, IoWallet } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { AiOutlineOrderedList } from "react-icons/ai";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import myContext from "../../context/myContext";

// Assume these components are defined elsewhere
import AdminProductDetail from "../../components/AdminProductDetail/AdminProductDetail";
import OrderDetail from "../../components/AdminProductDetail/OrderDetail";
import UserDetail from "../../components/AdminProductDetail/UserDetails";

const AdminDashboard = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    const context = useContext(myContext);
    const { getAllProduct, getAllOrder, getAllUser } = context;

    const [selectedTab, setSelectedTab] = useState(0);

    const salesData = [
        { name: 'Jan', sales: 4000 },
        { name: 'Feb', sales: 3000 },
        { name: 'Mar', sales: 5000 },
        { name: 'Apr', sales: 4500 },
        { name: 'May', sales: 6000 },
        { name: 'Jun', sales: 5500 },
    ];

    const revenueData = [
        { name: 'Jan', revenue: 10000 },
        { name: 'Feb', revenue: 15000 },
        { name: 'Mar', revenue: 12000 },
        { name: 'Apr', revenue: 18000 },
        { name: 'May', revenue: 20000 },
        { name: 'Jun', revenue: 22000 },
    ];

    const StatCard = ({ title, value, icon: Icon, color, bgColor }) => (
        <div className={`${bgColor} rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl`}>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-100">{title}</h3>
                <Icon className={`h-8 w-8 ${color}`} />
            </div>
            <p className={`text-3xl font-bold ${color}`}>{value}</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Dashboard Header */}
                <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center space-x-6">
                        <img
                            src="https://img.freepik.com/premium-vector/man-sits-desk-with-laptop-city-background_1013341-201438.jpg?w=740"
                            alt="admin"
                            className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-lg"
                        />
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold text-white">Welcome back, {user?.name || "John Doe"}</h1>
                            <p className="text-gray-400">{user?.email || "admin@example.com"}</p>
                            <p className="text-gray-400">{user?.role || "Administrator"}</p>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <p className="text-sm text-gray-400">Last login: {user?.date || "October 16, 2024"}</p>
                        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                            View Profile
                        </button>
                    </div>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard title="Total Products" value={getAllProduct.length} icon={IoBasket} color="text-blue-300" bgColor="bg-gradient-to-br from-blue-600 to-blue-800" />
                    <StatCard title="Total Orders" value={getAllOrder.length} icon={AiOutlineOrderedList} color="text-green-300" bgColor="bg-gradient-to-br from-green-600 to-green-800" />
                    <StatCard title="Total Users" value={getAllUser.length} icon={FaUsers} color="text-purple-300" bgColor="bg-gradient-to-br from-purple-600 to-purple-800" />
                    <StatCard title="Revenue" value="$58,000" icon={IoWallet} color="text-yellow-300" bgColor="bg-gradient-to-br from-yellow-600 to-yellow-800" />
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Sales Chart */}
                    <div className="bg-gray-800 rounded-xl shadow-xl p-6">
                        <h2 className="text-xl font-semibold mb-4 text-white">Sales Overview</h2>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={salesData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                    <XAxis dataKey="name" stroke="#9CA3AF" />
                                    <YAxis stroke="#9CA3AF" />
                                    <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                                    <Bar dataKey="sales" fill="#3B82F6" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Revenue Chart */}
                    <div className="bg-gray-800 rounded-xl shadow-xl p-6">
                        <h2 className="text-xl font-semibold mb-4 text-white">Revenue Trends</h2>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={revenueData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                    <XAxis dataKey="name" stroke="#9CA3AF" />
                                    <YAxis stroke="#9CA3AF" />
                                    <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                                    <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="bg-gray-800 rounded-xl shadow-xl">
                    <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
                        <Tab.List className="flex space-x-1 rounded-xl bg-gray-700 p-1">
                            {['Products', 'Orders', 'Users'].map((category) => (
                                <Tab
                                    key={category}
                                    className={({ selected }) =>
                                        `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white
                                        ${selected ? 'bg-blue-600 shadow' : 'text-gray-400 hover:bg-gray-600 hover:text-white'}`
                                    }
                                >
                                    {category}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mt-2 p-6">
                            <Tab.Panel><AdminProductDetail /></Tab.Panel>
                            <Tab.Panel><OrderDetail /></Tab.Panel>
                            <Tab.Panel><UserDetail /></Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;