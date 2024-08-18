import React from 'react'
import { UpdateFollower } from 'react-mouse-follower'

function BannerText() {
  return (
    <section className='py-12 text-center font-varela' >
        <div className='container' >
        <div className='bg-gradient-to-t from-primary to-primary/70 text-white rounded-3xl p-8 hover:scale-105 duration-500 hover:shadow-2xl' >
         <UpdateFollower mouseOptions={{
                     backgroundColor:"white",
                      zIndex:9999,
                      mixBlendMode:'difference',
                      scale:5,
                     followSpeed:0.5
                      }} >
         <p className='font-bold text-3xl max-w-[700px] mx-auto leading-normal' >Headphones with Good Quality And Affordable Price</p>
         </UpdateFollower>
          
        </div>
        </div>
    </section>
  )
}

export default BannerText

