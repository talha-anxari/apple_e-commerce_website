import React from "react";
import Layout from "../components/Layout/Layout";
import ShopOurInsta from "../components/ShopOurInsta/ShopOurInsta";
import Subscribe from "../components/Subscribe/Subscribe";
import ProductCard from "../components/ProductCard/ProductCard";

const AppleVisionPro = ({ product }) => {
  const appleVision = [
    {
      id: 1,
      name: "MacBook Pro",
      price: 2000,
      image:
        "https://th.bing.com/th/id/OIP.VNVb-osZJsC1vUPvSMidmQHaEo?rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      name: "MacBook Air",
      price: 1500,
      image:
        "https://th.bing.com/th/id/OIP.yFWZ4kua6bXwfI5fS4W9mAHaER?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <Layout>
      {/* Display the products */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-bold text-3xl text-center py-6">
          Apple Vision Pro
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {appleVision.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Subscribe />
      <ShopOurInsta />
    </Layout>
  );
};

export default AppleVisionPro;
