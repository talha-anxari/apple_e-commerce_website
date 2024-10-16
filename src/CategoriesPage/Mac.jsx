import React from "react";
import Layout from "../components/Layout/Layout";
import ShopOurInsta from "../components/ShopOurInsta/ShopOurInsta";
import Subscribe from "../components/Subscribe/Subscribe";
import ProductCard from "../components/ProductCard/ProductCard";

const Mac = ({ product }) => {
  const macProducts = [
    {
      id: 1,
      name: "MacBook Pro",
      price: 2000,
      image:
        "https://img.freepik.com/premium-photo/macbook-air-mockup_1285920-554.jpg?w=740",
    },
    {
      id: 2,
      name: "MacBook Air",
      price: 1500,
      image:
        "https://img.freepik.com/free-photo/view-3d-laptop-device-with-screen-keyboard_23-2150714005.jpg?t=st=1728417601~exp=1728421201~hmac=4743cfa166aacee41421bd1a93162741739ec051fb57d89697c7fbc0bf75ab30&w=740",
    },
  ];

  return (
    <Layout>
      {/* Display the products */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-bold text-3xl text-center py-6">
          Mac
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {macProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Subscribe />
      <ShopOurInsta />
    </Layout>
  );
};

export default Mac;
