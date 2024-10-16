import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-4 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <Link to={'/'} className="text-2xl font-bold text-orange-500">Apple<span className="text-gray-900">Store.</span></Link>
          <p className="text-gray-600 mt-4">
            Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#"><i className="fab fa-facebook-f text-orange-500"></i></a>
            <a href="#"><i className="fab fa-instagram text-orange-500"></i></a>
            <a href="#"><i className="fab fa-twitter text-orange-500"></i></a>
            <a href="#"><i className="fab fa-linkedin-in text-orange-500"></i></a>
            <a href="#"><i className="fab fa-youtube text-orange-500"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/shop'}>Shop</Link></li>
            <li><Link to={'/blog'}>Blogs</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
          </ul>
        </div>

        {/* Help & Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Help & Info</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li><a href="#">Track Your Order</a></li>
            <li><a href="#">Returns Policies</a></li>
            <li><a href="#">Shipping + Delivery</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
          <p className="mt-4 text-gray-600">Do you have any queries or suggestions?</p>
          <a href="mailto:yourinfo@gmail.com" className="text-orange-500">talhaanxaritn@outlook.com</a>
          <p className="mt-4 text-gray-600">If you need support? Just give us a call.</p>
          <a href="tel:+923400262456" className="text-orange-500">+923400262456</a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-200 pt-6 text-center md:flex md:justify-between">
        <p className="text-gray-600">We ship with:</p>
        <div className="flex items-center justify-center space-x-4 mt-2 md:mt-0">
          <img src="https://img.icons8.com/?size=512w&id=Pif7g5RUpk6E&format=png" alt="DHL" className="h-6" />
          <img src="https://img.icons8.com/?size=512w&id=12426&format=png" alt="Shipping" className="h-6" />
        </div>
        <p className="text-gray-600 mt-2 md:mt-0">Payment options:</p>
        <div className="flex items-center justify-center space-x-4 mt-2 md:mt-0">
          <img src="https://img.icons8.com/?size=512&id=11079&format=png" alt="Visa" className="h-6" />
          <img src="https://img.icons8.com/?size=512w&id=GBcBF6FImQrQ&format=png" alt="Mastercard" className="h-6" />
          <img src="https://img.icons8.com/?size=512w&id=Vr5TGbc9C4Ma&format=png" alt="PayPal" className="h-6" />
        </div>
        <p className="text-gray-600 mt-6 md:mt-0">© Copyright 2024 Apple Store. Design by Muhammad Talha Naeem Ansari</p>
      </div>
    </footer>
  )
}

export default Footer
