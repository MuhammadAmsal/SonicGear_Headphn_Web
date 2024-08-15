import React, { useState } from 'react'
import headphone1 from '../images/headphone1.png'
import headphone2 from '../images/headphone2.png'
import headphone3 from '../images/headphone3.png'
import { FaWhatsapp } from 'react-icons/fa'
import { UpdateFollower } from 'react-mouse-follower'
import { AnimatePresence, easeInOut, motion } from 'framer-motion'

const headphoneData=[
    {
        id:1,
        image:headphone1,
        title:"Headphones Wireless",
        subtitle:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard ',
        price:'$100',
        modal:'Modal Brown',
        bgColor:"#8b5958"
    },
    {
        id:2,
        image:headphone2,
        title:"Headphones Wireless 2",
        subtitle:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard ',
        price:'$100',
        modal:'Lime Green',
        bgColor:"#638153"
    },
    {
        id:3,
        image:headphone3,
        title:"Headphones Wireless 3",
        subtitle:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard',
        price:'$100',
        modal:'Ocean Blue',
        bgColor:"#5d818c"
    },

]

const fadeUp=()=>{
    return{
        hidden:{
            opacity:0,
            y:100,
            scale:0.5,
        },
        show:{
          opacity:1,
          y:0,
          scale:1,
          transition:{
            duration:0.5,
            delay: 0.5,
            ease: easeInOut
          },
        },
        exit:{
            opacity:0,
            y:50,
            scale:0.5,
            transition:{
            duration:0.2,
            ease: easeInOut,
            }
        }
    }
}
 

export default function Hero() {
       
    const[activeData,setActiveData]=useState(headphoneData[0])
    const handleActiveData=(data)=>{
        setActiveData(data)
}

  return (
     <>
        <section className="bg-brandDark text-white font-varela" >
            <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[700px] ' >
              {/* HeadphoneInfo */}
                   <div className='flex flex-col  justify-center py-14 md:py-0 xl:max-w-[500px]' >
                   <div className='space-y-5 text text-center md:text-left' >
                   <AnimatePresence mode='wait' >
               <UpdateFollower mouseOptions={{
                backgroundColor:"white",
                zIndex:99999,
                followSpeed:0.5,
                rotate:-720,
                mixBlendMode:"difference",
                scale:10
               }}>
               <motion.h1  
                   key={activeData.id}
                   variants={fadeUp(0.2)}
                   initial="hidden"
                   animate="show"
                   exit="exit"
                   className='text-3xl lg:text-6xl font-bold font-varela' >{activeData.title}</motion.h1>
               </UpdateFollower>
                 
                   </AnimatePresence>
                     <p className='text-sm leading-loose text-white/80' >{activeData.subtitle}</p>
                     <button style={{backgroundColor:activeData.bgColor}} className={`px-4 py-2 inline-block font-normal rounded-sm `} >Buy and Listen</button>
                       {/* headphone list */}
                      <div className='flex items-center justify-center md:justify-start gap-4 !mt-24' >
                        <div className='w-20 h-[1px] bg-white' ></div>
                        <p className='uppercase text-sm' >Top Headphones for you</p>
                        <div className='w-20 h-[1px] bg-white' ></div>
                      </div>
                      {/* headphone list switcher */}
                         <div className='grid grid-cols-3 gap-10' >
                            {headphoneData.map((item)=>(
                                <div key={item.id} onClick={()=>handleActiveData(item)} className='grid grid-cols-2 place-items-center cursor-pointer' >
                                <div>

                                <img src={item.image} alt='' className='w-[200px]' />
                                </div>
                                <div className='space-y-2' >
                                    <p className='rext-base-font-bold' >{item.price}</p>
                                    <p className='text-xs font-normal text-nowrap' >{item.modal}</p>
                                </div>
                                </div>
                            ))}
                         </div>
                   </div>
                   
                   </div>
             {/* heroimage */}
             <div className='flex flex-col justify-end items-center' >
                <img className='w-[300px] md:w-[400px] xl:w-[550px]' src={activeData.image} alt='' />
             </div>
           {/* whatsapp icon */}
           <div className='text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference' >
            <a>
                <FaWhatsapp  />
            </a>
           </div>
            </div> 
        </section>
     </>
  )
}
