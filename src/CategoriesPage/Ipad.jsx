import React from "react";
import Layout from "../components/Layout/Layout";
import ShopOurInsta from "../components/ShopOurInsta/ShopOurInsta";
import Subscribe from "../components/Subscribe/Subscribe";
import ProductCard from "../components/ProductCard/ProductCard";

const Ipad = ({ product }) => {
  const ipad = [
    {
      id: 1,
      name: "MacBook Pro",
      price: 2000,
      image:
        "https://img.freepik.com/premium-photo/professional-ipad-mockup-image-app-showcases_1199394-115684.jpg?w=740",
    },
    {
      id: 2,
      name: "MacBook Air",
      price: 1500,
      image:
        "https://img.freepik.com/premium-photo/professional-ipad-mockup-image-app-showcases_1199394-115670.jpg?w=740",
    },
  ];

  return (
    <Layout>
      {/* Display the products */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-bold text-3xl text-center py-6">
          iPad
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ipad.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Subscribe />
      <ShopOurInsta />
    </Layout>
  );
};

export default Ipad;
