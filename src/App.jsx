import { useState } from 'react'
 import Navbar from './components/Navbar'
import { UpdateFollower } from 'react-mouse-follower'
import Services from './components/Services'
import Hero from './components/Hero'
import Banner from './components/Banner'
import BannerText from './components/BannerText'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
 
function App() {
   

  return (
    <main className='overflow-x-hidden' >
    <UpdateFollower
    mouseOptions={{
      backgroundColor:"white",
      zIndex:999,
      followSpeed:1.5
    }}
    >

      <Navbar/>
      
      <Hero/>
    </UpdateFollower>
    <UpdateFollower
    mouseOptions={{
      backgroundColor:"black",
      zIndex:999,
      followSpeed:1.5
    }}
    >
    <Services/>
    <Banner/>
    <BannerText/>
    <Blogs/>
    <Footer/>
    </UpdateFollower>
   
    </main>
  )
}

export default App
