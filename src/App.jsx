import React from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import NoPage from "./pages/NoPage/NoPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import SignIn from "./pages/Registration/SignIn";
import SignUp from "./pages/Registration/SignUp.";
import Favorites from "./pages/Favorite/Favorites";
import Categories from './components/Categories/Categories'
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import UserDashboard from "./pages/User/UserDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AddProductPage from "./pages/Admin/AddProductPage";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import { ProtectedForUser } from "./pages/ProtectedRoute/ProtectedForUser";
import ProtectedRouteForAdmin from "./pages/ProtectedRoute/ProtectedRouteForAdmin";
import UpdateProductPage from "./pages/Admin/UpdateProductPage";
import CategoryPage from "./pages/Category/CategoryPage";
import CartPage from "./pages/CartPage/CartPage";

const App = () => {
  return (
    <MyState>
        <Router>
          <ScrollTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favorite" element={<Favorites />} />
            <Route path="/cartPage" element={<CartPage />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/category/:categoryname" element={<CategoryPage />} />
            <Route path='/productDetails/:id' element={<ProductDetails />} />
            <Route path="/userDashboard" element={<ProtectedForUser >
              <UserDashboard />
            </ProtectedForUser>} />
            <Route path="/adminDashboard" element={<ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>} />
            <Route path="/addProduct" element={
              <ProtectedRouteForAdmin>
                <AddProductPage/>
              </ProtectedRouteForAdmin>
            } />
            <Route path="/updateProductPage/:id" element={
              <ProtectedRouteForAdmin>
                <UpdateProductPage />
              </ProtectedRouteForAdmin>
            } />
            <Route path="/*" element={<NoPage />} />
          </Routes>
            <Toaster />
        </Router>
    </MyState>
  );
};

export default App;
