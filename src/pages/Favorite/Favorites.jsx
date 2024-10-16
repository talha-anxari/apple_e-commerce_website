import React from 'react'
import Layout from '../../components/Layout/Layout'
import Banner from '../../components/Banner/Banner'
import ShopOurInsta from '../../components/ShopOurInsta/ShopOurInsta'
import Subscribe from '../../components/Subscribe/Subscribe'

const Favorites = () => {
  return (
    <Layout>
      <Banner title={'Your Favorite Products'} currentPage={'Favorite'}/> 
      <Subscribe />
      <ShopOurInsta />
    </Layout>
  )
}

export default Favorites
