import React from 'react'
import Layout from '../../components/Layout/Layout'
import Banner from '../../components/Banner/Banner'
import ShopOurInsta from '../../components/ShopOurInsta/ShopOurInsta'
import Subscribe from '../../components/Subscribe/Subscribe'
import ShoppingCart from '../../components/Cart/Cart'

const CartPage = () => {
  return (
    <Layout>
      <Banner title={'Cart'} currentPage={'Cart'}/>
      <ShoppingCart />
      <Subscribe />
      <ShopOurInsta />
    </Layout>
  )
}

export default CartPage
