import React from 'react'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'

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
           <h1 className='text-3xl font-bold text-center pb-10' >Services</h1>
        </div>
        
     </section>
  )
}
