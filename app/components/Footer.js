import React from 'react'
import img_987 from 'public/987.png'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className='bg-black  p-16'>
      <div className='bg-footerColor rounded-md text-white p-8'>
<div className='border p-32 bg-gradient-to-r from-blue-500 to-blue-950 rounded-lg m-32 text-center bg-cover bg-center' style={{ backgroundImage: 'url("/bg_88.png")' }}>
  <div className=''>  <h1 className='text-6xl '>Never Get Behind On NFTs!</h1>
    <p className='text-xl'>Subscribe to receive market insights, growth hacks, stories, etc  </p>
   <div className='flex text-center justify-center p-2'> 
     <input
              className="  bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-2  focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="Enter Your Email"
            />
            <button className='text-white bg-violet-700 p-2 m-4 rounded'>Subscribe</button>
</div>
</div>
  
</div>

<div className='flex my-32 '>
  <div>
    <Image src={img_987}  className='w-56 relative mx-40'/>
  </div>
  <div className='flex right-32 absolute '>
    <div className='mx-24 text-lg '>
      <h1 className='text-2xl my-2'>Links</h1>
      <Link href='' className='flex py-4'>Home</Link>
      <Link href='' className='flex py-4'>Community</Link>
      <Link href='' className='flex py-4'>Services</Link>
      </div>

    <div className='mx-24 text-lg'>
      <h1 className='text-2xl my-2'>Resources</h1>
      <Link href='' className='flex py-4'>About</Link>
      <Link href='' className='flex py-4'>Resources</Link>
      <Link href='' className='flex py-4'>Blogs</Link>
      </div>

    <div className='mx-24 text-lg '>
      <h1 className='text-2xl my-2'>Social Media</h1>
      <Link href='' className='flex py-4'>Twitter</Link>
      <Link href='' className='flex py-4'>Discord</Link>
      <Link href='' className='flex py-4'>Telegram</Link>
      </div>

  </div>

</div>


<hr/>
<div className='my-12 '>
  <h1 className='text-center'>Copyright © 2023 MCD. All rights reserved.</h1>
  <h2 className='text-center'>Powered by MCD. xxxxx.</h2>
</div>
      </div>
      </div>
  )
}

export default Footer