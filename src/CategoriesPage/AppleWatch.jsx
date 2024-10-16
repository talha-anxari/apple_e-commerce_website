import React from "react";
import Layout from "../components/Layout/Layout";
import ShopOurInsta from "../components/ShopOurInsta/ShopOurInsta";
import Subscribe from "../components/Subscribe/Subscribe";
import ProductCard from "../components/ProductCard/ProductCard";

const AppleWatch = ({ product }) => {
  const macProducts = [
    {
      id: 1,
      name: "Apple Watch Pro",
      price: 2000,
      image:
        "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Apple Watch",
      price: 1500,
      image:
        "https://images.pexels.com/photos/437038/pexels-photo-437038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Apple Watch",
      price: 1500,
      image:
        "https://images.pexels.com/photos/9130876/pexels-photo-9130876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <Layout>
      {/* Display the products */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-bold text-3xl text-center py-6">
          Apple Watches
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

export default AppleWatch;
