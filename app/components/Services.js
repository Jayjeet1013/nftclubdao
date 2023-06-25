import React from 'react'
import Image from 'next/image'
import service_1 from 'public/5.png'
import service_2 from 'public/6.png'
import service_3 from 'public/8.png'
import service_4 from 'public/9.png'
import bg_4 from 'public/bg_4.png'

const Services = () => {
  return (
    <div className='bg-serviceColor'>
      <div className='text-white'>
        <h1>Discover our Unparalleled Services</h1>
        <p>Leverage the power of NFTs to create new experiences for your customers</p>
      </div>
 <div className='flex'>
<div className='text-white border rounded'>
  <Image src={service_1} className=''/>
  <h1>Growth</h1>
  <p>Attracting strategic partnerships by crafting hyper growth marketing campaigns.</p>
</div>
<div className='text-white border rounded'>
  <Image src={service_2} className=''/>
  <h1>Fundraising</h1>
  <p>Taking your project to new heights by introducing relevant investors and partners.</p>
</div>
 </div>

 <div className='flex'>
<div className='text-white border rounded'>
  <Image src={service_3} className=''/>
  <h1>Consulting</h1>
  <p>Doing intense market and user research to create the best strategies for your brand launch and revival.</p>
</div>
<div className='text-white border rounded'>
  <Image src={service_4} className=''/>
  <h1>Development</h1>
  <p>Bringing ideas from concept to life with art and technology development.</p>
</div>
 </div>






<div className='flex justify-center text-center'>
  <Image src={bg_4} className='right-0 absolute '/>
    <button className='border rounded-md bg-violet-800'>Contact Us</button>
    <button className='border rounded-md '>Explore More</button>
  
</div>



    </div>
  )
}

export default Services