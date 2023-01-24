import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import FindUs from './FindUs'
import Header from './Header'
import Home from './Home'
import PrivateLeasing from './PrivateLeasing'
import TrailerSale from './TrailerSale'
import TrailerSection from './TrailerSection'

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <Home />
    <Header />
    <PrivateLeasing />
    <TrailerSection />
    <TrailerSale />
    <FindUs />
    <Footer />
    </>
  )
}

export default LandingPage