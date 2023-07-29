

import React from 'react'
import Image from 'next/image'
import Mcdao from 'public/MCDAO_Colour_PNG_Transparent 1.png'
import Link from 'next/link'



const Header = () => {
  return (
   <div className=' bg-black'>
    <div className=' flex justify-between items-center  md:flex-row max-w-screen-2xl mx-auto'>
      <div >
          <Image className='  ' src={Mcdao}/>
      </div>
     
      <div className=' p-8  font-bold text-white  hiddenmobile'>
    <Link className='p-4 ' href='#Home'>Home</Link>
    <Link className='p-4' href='#Community'>Community</Link>
    <Link className='p-4' href='/Services'>Services</Link>
    <Link className='p-4' href='/Blogs'>Blogs</Link>
    
</div>

     <button className='bg-purple-500  text-white font-bold px-4  rounded ' >Join Our Community</button>
    </div>
 </div>
  )
}

export default Header