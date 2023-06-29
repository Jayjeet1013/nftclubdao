import React from 'react'
import Image from 'next/image'
import Mcdao from 'public/MCDAO_Colour_PNG_Transparent 1.png'
import Link from 'next/link'


const Header = () => {
  return (
    <div className=' bg-black w-full  flex   justify-center'>
      <div >
          <Image className='absolute mx-80 left-2' src={Mcdao}/>
      </div>
     
      <div className=' p-8  font-bold text-white mx-96  '>
    <Link className='p-4 ' href='#Home'>Home</Link>
    <Link className='p-4' href='#Community'>Community</Link>
    <Link className='p-4' href='/Services'>Services</Link>
    <Link className='p-4' href='/Blogs'>Blogs</Link>
    <button className='bg-purple-500  text-white font-bold px-4  rounded absolute right-48' >Join Our Community</button>
</div>

     
    </div>
  )
}

export default Header