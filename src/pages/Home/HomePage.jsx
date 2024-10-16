import React from "react";
import Layout from "../../components/Layout/Layout";
import CarouselSlider from "../../components/Carousel/CarouselSlider";
import CategoriesSlider from "../../components/Categories/Categories";
import PauseOnHover from "../../components/Categories/Categories";
import Responsive from "../../components/Categories/Categories";
import ShopOurInsta from "../../components/ShopOurInsta/ShopOurInsta";
import Subscribe from "../../components/Subscribe/Subscribe";
import LatestPosts from "../../components/LatestPost/LatestPost";
import OurCollection from "../../components/Collection/OurCollection";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import ProductCard from "../../components/ProductCard/ProductCard";

const HomePage = () => {
  return (
    <div>
      <Layout>
        <CarouselSlider />
        <Responsive />
        {/* Display the products */}
        <ProductCard />
        <OurCollection />
        <LatestPosts />
        <Subscribe />
        <ShopOurInsta />
      </Layout>
    </div>
  );
};

export default HomePage;
