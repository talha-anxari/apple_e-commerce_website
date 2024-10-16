import React from "react";
import Layout from "../components/Layout/Layout";
import ShopOurInsta from "../components/ShopOurInsta/ShopOurInsta";
import Subscribe from "../components/Subscribe/Subscribe";
import ProductCard from "../components/ProductCard/ProductCard";

const AirPods = ({ product }) => {
  const airPods = [
    {
      id: 1,
      name: "MacBook Pro",
      price: 2000,
      image:
        "https://www.apple.com/v/airpods/x/images/overview/pro_endframe__e2wscfy18pme_large.jpg",
    },
    {
      id: 2,
      name: "MacBook Air",
      price: 1500,
      image:
        "https://cdn.wccftech.com/wp-content/uploads/2020/06/airpods-pro-deal-740x488.png",
    },
  ];

  return (
    <Layout>
      {/* Display the products */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-bold text-3xl text-center py-6">
          AirPods
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {airPods.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Subscribe />
      <ShopOurInsta />
    </Layout>
  );
};

export default AirPods;
