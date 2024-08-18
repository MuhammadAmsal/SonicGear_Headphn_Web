import React from 'react'
import blog1 from '../images/blog1.jpg'
import blog2 from '../images/blog2.jpg'
import blog3 from '../images/blog3.jpg'
import blog4 from '../images/blog4.jpg'
import { motion } from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'

const BlogsData=[
    {
        id:1,
        title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard",
        link:"#",
        img:blog1
    },
    {
        id:2,
        title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard",
        link:"#",
        img:blog2
    },
    {
        id:3,
        title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard",
        link:"#",
        img:blog3
    },
    {
        id:4,
        title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard",
        link:"#",
        img:blog4
    },
]

function Blogs() {
  return (
     <section id='blog' className='bg-gray-50' >
        <div className='container py-14' >
        <h1 className='text-3xl font-bold text-center font-poppins pb-8' >Blogs</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6' >
            {BlogsData.map((data)=>(
                <UpdateFollower   mouseOptions={{
                     backgroundColor:"black",
                      zIndex:999,
                      text:"read",
                     followSpeed:1.5,
                     textFontSize:"3px",
                     scale:5
                      }} >
                <div className='flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300' >
                <img src={data.img} />
                <div className='space-y-2 ' >
                    <h1 className='text-lg font-bold line-clamp-2' >{data.title}</h1>
                    <p className='line-clamp-2' >{data.desc}</p>
                </div>
              </div>
                </UpdateFollower>
              
            ))}
        </div>
        </div>
     </section>
  )
}

export default Blogs
