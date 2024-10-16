// NoPage.js
import { Link } from 'react-router-dom';
import React from 'react'

const NoPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-xl text-gray-700">Oops! Page not found.</p>
      <p className="mt-2 text-gray-500">The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded shadow">
        Go Back Home
      </Link>
    </div>
  </div>
  )
}

export default NoPage
