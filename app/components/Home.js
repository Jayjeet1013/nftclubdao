import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import pic1 from 'public/pic1.png'


const Home = () => {
  return (
    <div className='bg-black h-screen  ' >
        
        <div className='text-white static'>
    <h1 className='py-40 font-bold text-6xl mx-40 absolute ' >Building New Experiences</h1>
    <span className='my-56 font-bold text-6xl absolute mx-40'>Using</span>
    <h2 className='font-bold text-6xl my-56 absolute mx-96' >Digital Assets</h2>
    <h3 className='my-80 absolute mx-40'>MetaClub DAO is a Community focused NFT accelerator</h3>
  </div>
  <div className='text-white static flex'>
    <button className='absolute my-96 mx-40 bg-purple-600 rounded px-2'>Join Our Community</button>
    <button className='absolute my-96 mx-96 border px-2'>Explore Our Services</button>
  </div>
  <Image src={pic1} className='mx-96 '/>
  </div>
  )
}

export default Home