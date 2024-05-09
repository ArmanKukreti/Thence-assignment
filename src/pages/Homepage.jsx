import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Faqs from '../components/Faqs'
import Footer from '../components/Footer'


const Homepage = () => {
  return (
    <div>
      <Navbar Page={"homepage"}/>
      <Hero/>
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default Homepage
