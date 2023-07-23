import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import pic1 from 'public/pic1.png'
import { Container } from 'postcss'


const Home = () => {
  return (
    <div className='bg-black  flex flex-col md:flex-row justify-between items-center max-w-1300 mx-auto'>
  <div className='text-white px-4 md:px-8 py-8 md:py-24'>
    <h1 className='text-2xl md:text-4xl font-bold mb-4'>Building New Experiences</h1>
    <h2 className='text-xl md:text-2xl font-bold mb-4'>
      <span>Using</span> Digital Assets
    </h2>
    <h3 className='text-lg md:text-xl mb-4'>
      MetaClub DAO is a Community focused NFT accelerator
    </h3>
    <button className='bg-purple-600 text-white font-bold px-4 py-2 rounded mb-2 md:mb-0 md:mr-2'>
      Join Our Community
    </button>
    <button className='border text-purple-600 font-bold px-4 py-2 rounded'>
      Explore Our Services
    </button>
  </div>

  <div className='flex justify-center items-center'>
    <Image src={pic1} className='w-48 md:w-auto' />
  </div>
</div>

  
  
  )
}

export default Home