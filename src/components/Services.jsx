import React from 'react'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import { UpdateFollower } from 'react-mouse-follower'
import { motion } from 'framer-motion'

export const fadeUp=(delay)=>{
    return{
        hidden:{
            opacity:0,
            y:100,
        },
        show:{
          opacity:1,
          y:0,
         
          transition:{
            duration:0.5,
            delay: delay,
           
          },
        },
        
        }
    }
  


const servicesData=[
    {
        id:1,
        title:'Security',
        img:icon1,
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard ',
        delay:0.5
    },
    {
        id:2,
        title:'Gurantee',
        img:icon2,
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard ',
        delay:0.8
    },
    {
        id:1,
        title:'Affordability',
        img:icon3,
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard ',
        delay:1.1
    },
]


export default function Services() {
  return (
     <section className='bg-gray-100 font-poppins py-8' >
        <div  className='container py-14' >
           <motion.h1
           variants={fadeUp(0.2)}
           initial="hidden"
           whileInView="show"
            className='text-3xl font-bold text-center pb-10' >Services</motion.h1>
       
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6' > 
            {servicesData.map((data)=>(
                
             <UpdateFollower mouseOptions={{
                          backgroundColor:"white",
                          zIndex:99999,
                          followSpeed:0.5,
                          rotate:-720,
                         scale:6,
                         backgroundElement:(
                            <div><img src={data.img} /></div>
                         )
                          } }  >
             <motion.div 
             variants={fadeUp(data.delay)}
                 initial="hidden"
                 whileInView="show"
             className='flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white' >
                <img src={data.img} className='w-[100px] mb-4' />
                <div 
                 
                className='text-center space-y-2' >
                    <h1 className='text-2xl font-bold' >{data.title}</h1>
                    <p className='text-center text-sm text-black/75' >{data.description}</p>
                </div>
             </motion.div>
             </UpdateFollower>
            ))}
         </div> 
         </div>      
 
     </section>
  )
}
