import React from 'react'
const NavbarMenu=[
    {
      id:1,
      title:'Home',
      link:'#',
    },
    {
      id:2,
      title:'Services',
      link:'#services',
    },
    {
      id:3,
      title:'Blog',
      link:'#blog',
    },
    {
      id:4,
      title:'About',
      link:'#about',
    },
    {
      id:5,
      title:'Contact',
      link:'#contact',
    },
  ]

export default function ResponsiveNav({display}) {
  return (
    <div className={`bg-[#1e1f1f] text-white w-[100%]  px-9 py-5 z-10 ml-auto mr-auto max-lg:flex-col  ${display?'block':'hidden'}`} >
      <ul className='flex-1 text-xl flex-col justify-center items-center  ' >
             {NavbarMenu.map((items)=>(<li className='mt-4' key={items.id} ><a className='font-monts text-lg text-slate-gray errat leading-normal hover:text-xl ' href={items.link} >{items.title}</a></li>))}
            </ul>
    </div>
  )
}
