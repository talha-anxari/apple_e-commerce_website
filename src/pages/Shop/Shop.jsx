import Banner from '../../components/Banner/Banner'
import Layout from '../../components/Layout/Layout'
import LatestPosts from '../../components/LatestPost/LatestPost'
import ShopOurInsta from '../../components/ShopOurInsta/ShopOurInsta'
import Subscribe from '../../components/Subscribe/Subscribe'
import AllProducts from '../../components/AllProducts/AllProducts'

const Shop = () => {
  
  return (
    <Layout>
      <Banner title="Shop" currentPage="Shop" />
      <AllProducts  />
      <Subscribe />
      <ShopOurInsta />
    </Layout>
  )
}

export default Shop
