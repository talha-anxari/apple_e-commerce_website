import React from "react";
import Layout from "../components/Layout/Layout";
import ShopOurInsta from "../components/ShopOurInsta/ShopOurInsta";
import Subscribe from "../components/Subscribe/Subscribe";
import ProductCard from "../components/ProductCard/ProductCard";

const Iphone = ({ product }) => {
  const iphone = [
    {
      id: 1,
      name: "MacBook Pro",
      price: 2000,
      image:
        "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437107.jpg?t=st=1728418720~exp=1728422320~hmac=8b165be7b77b628ab28d126c3bfa98221db99d8767498d92fa17afd490995023&w=996",
    },
    {
      id: 2,
      name: "MacBook Air",
      price: 1500,
      image:
        "https://img.freepik.com/premium-photo/silver-iphone-with-colorful-case-that-says-rainbow-colors-it_1127397-1121.jpg?w=740",
    },
  ];

  return (
    <Layout>
      {/* Display the products */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-bold text-3xl text-center py-6">
          iPhone
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {iphone.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Subscribe />
      <ShopOurInsta />
    </Layout>
  );
};

export default Iphone;
