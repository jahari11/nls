import React from 'react'
import Navbar from '../Component/Navbar'
import ItemContainer from '../Component/ItemContainer'
import Footer from '../Component/Footer'
import { motion } from 'framer-motion'

const Shop = () => {
  return (
    <div className='section'>
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration:1}}
      >
        <Navbar />
        <ItemContainer />
        <Footer />
        </motion.div>
    </div>
  )
}

export default Shop