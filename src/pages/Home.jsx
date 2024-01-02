import React from 'react'
import Hero from '../component/Hero'
import PopularItem from '../component/PopularItem'
import Popper from '../component/Popper'
import NewCoffee from '../component/NewCoffee'
import Popper2 from '../component/Popper2'
import Footer from '../component/Footer'

function Home() {
  return (
    <div className='d-grid gap-5'>
    <Hero/>
    <NewCoffee/>
    <Popper/>
    <PopularItem/>
    <Popper2/>
    <Footer/>
    </div>
  )
}

export default Home