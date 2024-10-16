import React from "react";
import Layout from "../components/Layout/Layout";
import ProductCard from "../components/ProductCard/ProductCard";
import Subscribe from "../components/Subscribe/Subscribe";
import ShopOurInsta from "../components/ShopOurInsta/ShopOurInsta";

const Accessories = ({ product }) => {
  const accessories = [
    {
      id: 1,
      name: "Sony PlayStation Move",
      price: 870,
      image: "https://images7.alphacoders.com/114/thumb-1920-1143022.jpg",
    },
    {
      id: 2,
      name: "GoPro",
      price: 600,
      image: "https://picfiles.alphacoders.com/613/613508.jpg",
    },
    {
      id: 3,
      name: "AirPods Pro",
      price: 400,
      image: "https://images5.alphacoders.com/136/thumb-1920-1362717.png",
    },
    {
      id: 4,
      name: "iPhone 15 Pro",
      price: 2000,
      image: "https://images6.alphacoders.com/108/thumb-1920-1086060.jpg",
    },
  ];

  return (
    <Layout>
      {/* Display the products */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-bold text-3xl text-center py-6">
          Best Selling Items
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {accessories.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Subscribe />
      <ShopOurInsta />
    </Layout>
  );
};

export default Accessories;
