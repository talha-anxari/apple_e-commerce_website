import React from 'react'
import Layout from '../../components/Layout/Layout'
import ShopOurInsta from '../../components/ShopOurInsta/ShopOurInsta'
import Subscribe from '../../components/Subscribe/Subscribe'
import ProductDetail from '../../components/ProductDetail/ProductDetail'

const ProductDetails = () => {
  return (
    <Layout>
      <ProductDetail />
        <Subscribe />
      <ShopOurInsta />
    </Layout>
  )
}

export default ProductDetails
