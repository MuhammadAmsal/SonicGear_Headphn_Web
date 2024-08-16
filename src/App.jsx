import { useState } from 'react'
 import Navbar from './components/Navbar'
import { UpdateFollower } from 'react-mouse-follower'
import Services from './components/Services'
import Hero from './components/Hero'

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
    <Services/>
    </main>
  )
}

export default App
