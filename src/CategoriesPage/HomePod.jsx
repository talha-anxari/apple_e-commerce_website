import React from "react";
import Layout from "../components/Layout/Layout";
import ShopOurInsta from "../components/ShopOurInsta/ShopOurInsta";
import Subscribe from "../components/Subscribe/Subscribe";
import ProductCard from "../components/ProductCard/ProductCard";

const HomePod = ({ product }) => {
  const homePod = [
    {
      id: 1,
      name: "MacBook Pro",
      price: 2000,
      image:
        "https://th.bing.com/th/id/OIP.pHt6mmYev55HW_sHx3h1NwAAAA?rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      name: "MacBook Air",
      price: 1500,
      image:
        "https://images.macrumors.com/t/CiePHsiXY2II5ku8MYIiSojKTWk=/1600x/article-new/2021/11/homepod-mini-color-bars.jpg",
    },
  ];

  return (
    <Layout>
      {/* Display the products */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-bold text-3xl text-center py-6">
          HomePods
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {homePod.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Subscribe />
      <ShopOurInsta />
    </Layout>
  );
};

export default HomePod;
