import React from "react";
import Layout from "../components/Layout/Layout";
import ShopOurInsta from "../components/ShopOurInsta/ShopOurInsta";
import Subscribe from "../components/Subscribe/Subscribe";
import ProductCard from "../components/ProductCard/ProductCard";

const AirTag = ({ product }) => {
  const airTag = [
    {
      id: 1,
      name: "MacBook Pro",
      price: 2000,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQ682?wid=890&hei=890&fmt=jpeg&qlt=95&.v=1689619505807",
    },
    {
      id: 2,
      name: "MacBook Air",
      price: 1500,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPTW2?wid=890&hei=890&fmt=jpeg&qlt=95&.v=1689027670808",
    },
  ];

  return (
    <Layout>
      {/* Display the products */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-bold text-3xl text-center py-6">
          AirTag
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {airTag.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Subscribe />
      <ShopOurInsta />
    </Layout>
  );
};

export default AirTag;
