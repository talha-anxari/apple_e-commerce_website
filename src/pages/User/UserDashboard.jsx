import React from 'react'
import Layout from '../../components/Layout/Layout'

const products = [
    {
        id: 1,
        name: 'iPhone 15 Pro',
        imageSrc: 'https://img.freepik.com/free-vector/realistic-smartphone-with-black-back-cover_23-2148385252.jpg?t=st=1728464493~exp=1728468093~hmac=aa9bbe03af10f45b3f24c2ae01fcf588423691c0a571c42cae6b0bc664224a98&w=740',
        href: '#',
        price: '₹129,900',
        color: 'Natural Titanium',
        imageAlt: 'iPhone 15 Pro',
        quantity: 1,
    },
    // Add more products as needed
];

const UserDashboard = () => {
    const user = JSON.parse(localStorage.getItem('users'));
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
                {/* Hero Section */}
                <div className="bg-black text-white rounded-xl p-8 mb-8">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Your Dashboard</h1>
                    <p className="text-xl">Manage your Apple products and orders</p>
                </div>

                {/* User Info */}
                <div className="bg-gray-100 rounded-xl p-8 mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-2"><span className='font-bold'>Name : </span>{user?.name}</h2>
                            <p className="text-gray-600"><span className='font-bold'>Email : </span>{user?.email}</p>
                            <p className="text-gray-600"><span className='font-bold'>Date : </span>{user?.date}</p>
                            <p className="text-gray-600"><span className='font-bold'>Role : </span>{user?.role}</p>

                        </div>
                        <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="User Avatar" className="w-20 h-20 rounded-full" />
                    </div>
                </div>

                {/* Order Details */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                    <div className="p-8">
                        <h2 className="text-2xl font-bold mb-6">Order Details</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div>
                                <p className="text-sm font-semibold text-gray-600">Order Id</p>
                                <p className="text-lg">#74557994327</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-600">Date</p>
                                <p className="text-lg">4 March, 2023</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-600">Total Amount</p>
                                <p className="text-lg">PK129,900</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-600">Order Status</p>
                                <p className="text-lg text-green-600">Confirmed</p>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 pt-6">
                            <h3 className="text-xl font-semibold mb-4">Items</h3>
                            <ul className="divide-y divide-gray-200">
                                {products.map((product) => (
                                    <li key={product.id} className="py-4 flex items-center">
                                        <img src={product.imageSrc} alt={product.imageAlt} className="w-16 h-16 object-cover rounded-lg mr-4" />
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold">{product.name}</h4>
                                            <p className="text-gray-600">{product.color}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-semibold">{product.price}</p>
                                            <p className="text-gray-600">Qty: {product.quantity}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <a href="#" className="bg-gray-100 rounded-xl p-4 text-center hover:bg-gray-200 transition">
                        <img src="https://img.freepik.com/free-vector/realistic-smartphone-with-black-back-cover_23-2148385252.jpg?t=st=1728464493~exp=1728468093~hmac=aa9bbe03af10f45b3f24c2ae01fcf588423691c0a571c42cae6b0bc664224a98&w=740" alt="Track Order" className="w-16 h-16 mx-auto mb-2" />
                        <p className="font-semibold">Track Order</p>
                    </a>
                    <a href="#" className="bg-gray-100 rounded-xl p-4 text-center hover:bg-gray-200 transition">
                        <img src="/api/placeholder/64/64" alt="Support" className="w-16 h-16 mx-auto mb-2" />
                        <p className="font-semibold">Get Support</p>
                    </a>
                    <a href="#" className="bg-gray-100 rounded-xl p-4 text-center hover:bg-gray-200 transition">
                        <img src="/api/placeholder/64/64" alt="Apple ID" className="w-16 h-16 mx-auto mb-2" />
                        <p className="font-semibold">Manage Apple ID</p>
                    </a>
                    <a href="#" className="bg-gray-100 rounded-xl p-4 text-center hover:bg-gray-200 transition">
                        <img src="/api/placeholder/64/64" alt="Settings" className="w-16 h-16 mx-auto mb-2" />
                        <p className="font-semibold">Account Settings</p>
                    </a>
                </div>
            </div>
    </Layout>
  )
}

export default UserDashboard

