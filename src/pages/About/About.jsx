import React from 'react'
import Layout from '../../components/Layout/Layout'
import CarouselSlider from '../../components/Carousel/CarouselSlider'
import Banner from '../../components/Banner/Banner';
import ShopOurInsta from '../../components/ShopOurInsta/ShopOurInsta';
import LatestPosts from '../../components/LatestPost/LatestPost';
import FeatureSection from '../../components/FeatureSection/FeatureSection';

const About = () => {

  const slides = [
    {
      city: "Paris",
      country: "France",
      img: "https://www.apple.com/v/iphone-15/c/images/overview/design/design__bokk6rh0vf7m_large.jpg",
    },
    {
      city: "Singapore",
      img: "https://images6.alphacoders.com/136/thumb-1920-1362719.png",
    },
    {
      city: "Prague",
      country: "Czech Republic",
      img: "https://images2.alphacoders.com/458/thumb-1920-458435.jpg",
    },
    {
      city: "Amsterdam",
      country: "Netherlands",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg",
    },
    {
      city: "Moscow",
      country: "Russia",
      img: "https://images.unsplash.com/photo-1524656855800-59465ebcec69?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <Layout>
      <Banner title={'About'} currentPage={'About'}/>
      <FeatureSection />
      <LatestPosts />
      <ShopOurInsta />
    </Layout> 
  )
}

export default About
