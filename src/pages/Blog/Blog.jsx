import Banner from "../../components/Banner/Banner";
import Layout from "../../components/Layout/Layout";
import LatestPosts from "../../components/LatestPost/LatestPost";
import ShopOurInsta from "../../components/ShopOurInsta/ShopOurInsta";
import Subscribe from "../../components/Subscribe/Subscribe";
import AllProducts from "../../components/AllProducts/AllProducts";

const Blog = () => {
  return (
    <Layout>
      <Banner title="Blog" currentPage={"Blog"} />
      <AllProducts />
      <Subscribe />
      <ShopOurInsta />
    </Layout>
  );
};

export default Blog;
