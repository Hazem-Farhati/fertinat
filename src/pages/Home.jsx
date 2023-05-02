import React from 'react'
import BannerHome from '../components/BannerHome'
import UnderBanner from '../components/UnderBanner'
import Events from '../components/Events'
import Contact from './Contact'
import OurDetails from '../components/OurDetails'

const Home = () => {
  return (
    <>
      <BannerHome />
      <OurDetails/>
      <UnderBanner />
      <Events />
      <Contact />
    </>
  );
}

export default Home