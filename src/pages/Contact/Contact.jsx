import React from 'react'
import Layout from '../../components/Layout/Layout'
import Banner from '../../components/Banner/Banner'
import ContactUs from '../../components/ContactUs/ContactUs'
import Subscribe from '../../components/Subscribe/Subscribe'
import ShopOurInsta from '../../components/ShopOurInsta/ShopOurInsta'


const Contact = () => {
  return (
    <Layout>
      <Banner title={'Contact Us'} currentPage={'Contact'}/>
      <ContactUs />
      <Subscribe />
      <ShopOurInsta />
    </Layout>
  )
}

export default Contact
