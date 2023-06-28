import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black  p-16'>
      <div className='bg-footerColor rounded-md text-white p-8'>
<div className='border p-32 rounded m-32 text-center'>
  
    <h1 className='text-6xl '>Never Get Behind On NFTs!</h1>
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
      </div>
  )
}

export default Footer