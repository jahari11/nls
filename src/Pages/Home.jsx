import React from 'react'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import Banner from '../Component/Banner'
import Newsletter from '../Component/Newsletter'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <div className='section'>
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration:1}}
      >  
      <Navbar />
      <Hero />
      <Banner />
      <Newsletter />
      <Footer />
      </motion.div>
    </div>
  )
}

export default Home