import React from 'react'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import Banner from '../Component/Banner'
import Newsletter from '../Component/Newsletter'

const Home = () => {
  return (
    <div className='section'>
      <Navbar />
      <Hero />
      <Banner />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home