import React from 'react'
import Header from './Header'
import BannerLayout from './BannerLayout'
import About from './About'
import Skill from './Skill'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <>
    <Header />
      <BannerLayout />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default Home