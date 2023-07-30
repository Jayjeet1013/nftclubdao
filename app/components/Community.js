import React from 'react'
import Image from 'next/image'
import rewardimg from 'public/1.png'
import resourcesimg from 'public/7.png'
import moneyimg from 'public/2.png'
import nftimg from 'public/4.png'
import img_22 from 'public/22.png'
import img_55 from 'public/55.png'
import img_60 from 'public/60.png'
import img_70 from 'public/70.png'
import img_80 from 'public/80.png'
import img_90 from 'public/90.png'



const Community = () => {
  return (
    <div className=' bg-gradient-to-b from-serviceColor to-black '>
    <div className='   max-w-screen-2xl mx-auto pt-5'>
        <div className='text-white justify-center text-center py-20'>
          <h3 className='font-bold  text-5xl '>Unlock Exclusive Community Perks</h3>
          <h6 className='text-2xl my-3'>Our vision is to create high-class, utility-driven projects using the power of NFTs and communities.</h6>
        </div>
        <div className='flex flex-col md:flex-row gap-6 pb-8 text-white justify-center'>
          <div className='w-96 text-center justify-center'>
            <Image src={rewardimg} className='mx-auto'/>
            <h2 className='text-bold text-4xl '>Incentives & Rewards</h2>
            <p>Active members and contributors will get a chance to work on exciting projects with us, and some additional rewards.</p>
          </div>    
          
         <Image src={img_55} className='left-0 absolute hiddenmobile'/>

          <div className='w-96  justify-center text-center'>
            <Image src={resourcesimg} className='mx-auto'/>
            <h3 className='text-4xl text-bold'>Access to Resources</h3>
            <p>Dive into our knowledge hub filled with valuable resources, educational content, and insights into the world of NFTs.</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-6 md:pb-48 text-white justify-center'>
          <div className='w-96  text-center justify-center'>
            <Image src={moneyimg} className='mx-auto'/>
            <h2 className='text-bold text-4xl '>Incentives & Rewards</h2>
            <p>Active members and contributors will get a chance to work on exciting projects with us, and some additional rewards.</p>
          </div>    
          
          <div className='w-96  justify-center text-center'>
            <Image src={nftimg} className='mx-auto'/>
            <h3 className='text-4xl text-bold'>Access to Resources</h3>
            <p>Dive into our knowledge hub filled with valuable resources, educational content, and insights into the world of NFTs.</p>
          </div>
        </div>

        <div className='  border rounded-lg text-white '>
        <div className='p-6 md:p-28 text-center bg-cover' style={{ backgroundImage: 'url("/98.png")' }}>
          <h1 className='md:text-6xl text-3xl'>Get Your Early Access!</h1>
          <p className='text-xl p-2'>Become a part of a revolution.</p>
          <button className='rounded-lg border bg-violet-500 p-2 my-2'>Join Discord</button>
        </div>
        </div>

        <div className='text-white text-center my-20 '>
               <h1 className='text-6xl m-4'>Why Metaclub Dao?</h1>
               <p className='text-lg'>We’re bringing our love for NFTs and communities together to create an NFT centred ecosystem filled with creativity and passion.</p>
        </div>

        <div className='flex flex-col md:flex-row gap-6  text-white justify-center text-center '> 
        <div className='  border  justify-between text-center rounded-lg py-20 w-80 px-4 '>
            <Image src={img_90} className='mx-auto'/>
            <h3 className='text-3xl text-bold'>Creative</h3>
            <p className=''>Pushing boundaries and creating impact through creative output.</p>
          </div>
          <div className='border  rounded-lg justify-center text-center py-20 w-80 px-4'>
            <Image src={img_60} className='mx-auto'/>
            <h3 className='text-3xl text-bold'>Community</h3>
            <p>Building a collaborative environment to build brands and experiences.</p>
          </div>
          <div className=' border   rounded-lg justify-center text-center py-20 w-80 px-4'>
            <Image src={img_70} className='mx-auto'/>
            <h3 className='text-3xl text-bold'>Inspirational</h3>
            <p>Setting new standards and inspiring the industry towards greatness.</p>
          </div>
          <div className='border rounded-lg justify-center text-center  py-20 w-80 px-4'>
            <Image src={img_80} className='mx-auto'/>
            <h3 className='text-3xl   text-bold'>Empowerment</h3>
            <p>Delivering value and empowering creators to build experiences.</p>
          </div>

        </div>
        
        <div className='text-center'>
            <button className='rounded-lg bg-violet-600 p-2 my-12 '>Read More</button>
        </div>

        <div className='justify-center flex item-center'>
          <Image src={img_22} className=''/>
        </div>
    </div>
    </div>
  )
}

export default Community