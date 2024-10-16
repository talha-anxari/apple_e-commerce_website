import React from "react";
import Layout from "../components/Layout/Layout";
import ShopOurInsta from "../components/ShopOurInsta/ShopOurInsta";
import Subscribe from "../components/Subscribe/Subscribe";
import ProductCard from "../components/ProductCard/ProductCard";

const AppleTv4K = ({ product }) => {
  const appleTV = [
    {
      id: 1,
      name: "MacBook Pro",
      price: 2000,
      image:
        "https://i.ytimg.com/vi/u6Kripa2Q1Y/maxresdefault.jpg",
    },
    {
      id: 2,
      name: "MacBook Air",
      price: 1500,
      image:
        "https://th.bing.com/th/id/R.be933b681123059497bbaec37d989b69?rik=vNTSfkjPQqN6Yw&pid=ImgRaw&r=0",
    },
  ];

  return (
    <Layout>
      {/* Display the products */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-bold text-3xl text-center py-6">
          Apple Tv 4k
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {appleTV.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Subscribe />
      <ShopOurInsta />
    </Layout>
  );
};

export default AppleTv4K;
