import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/common/subcomponents/Hero'
import Categories from '../components/common/subcomponents/Categories'
import Footer from '../components/common/Footer'


const Home = () => {
  return (
    <div className=' bg-gray-200 '>
        
        <Hero/>
        <Categories/>
        <Footer/>
        
      
    </div>
  )
}

export default Home