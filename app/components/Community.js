import React from 'react'
import Image from 'next/image'
import rewardimg from 'public/1.png'
import resourcesimg from 'public/7.png'
import moneyimg from 'public/2.png'
import nftimg from 'public/4.png'

const Community = () => {
  return (
    <div className=' bg-customColor'>Community
        <div className='text-white justify-center text-center my-20'>
          <h3 className='font-bold  text-5xl '>Unlock Exclusive Community Perks</h3>
          <h6 className='text-2xl my-3'>Our vision is to create high-class, utility-driven projects using the power of NFTs and communities.</h6>
        </div>
        <div className='flex text-white justify-center'>
          <div className='w-96 m-32'>
            <Image src={rewardimg}/>
            <h2 className='text-bold text-4xl '>Incentives & Rewards</h2>
            <p>Active members and contributors will get a chance to work on exciting projects with us, and some additional rewards.</p>
          </div>    
          
          <div className='w-96 m-32'>
            <Image src={resourcesimg}/>
            <h3 className='text-4xl text-bold'>Access to Resources</h3>
            <p>Dive into our knowledge hub filled with valuable resources, educational content, and insights into the world of NFTs.</p>
          </div>
        </div>

        <div className='flex text-white justify-center'>
          <div className='w-96 m-32'>
            <Image src={moneyimg}/>
            <h2 className='text-bold text-4xl '>Incentives & Rewards</h2>
            <p>Active members and contributors will get a chance to work on exciting projects with us, and some additional rewards.</p>
          </div>    
          
          <div className='w-96 m-32'>
            <Image src={nftimg}/>
            <h3 className='text-4xl text-bold'>Access to Resources</h3>
            <p>Dive into our knowledge hub filled with valuable resources, educational content, and insights into the world of NFTs.</p>
          </div>
        </div>

        <div className=' mx-56 my-32 border rounded-lg text-white'>
        <div className='p-20 justify-center text-center'>
          <h1 className='text-5xl '>Get Your Early Access!</h1>
          <p className='text-xl'>Become a part of a revolution.</p>
          <button className='rounded-sm border bg-violet-500 p-2 my-4'>Join Discord</button>
        </div>
        </div>

        <div className='text-white text-center my-20 '>
               <h1 className='text-5xl'>Why Metaclub Dao?</h1>
               <p className='text-lg'>We’re bringing our love for NFTs and communities together to create an NFT centred ecosystem filled with creativity and passion.</p>
        </div>

        <div className='flex text-white px-40 '> 
        <div className='m-6  border '>
            <Image src={nftimg}/>
            <h3 className='text-3xl text-bold'>Creative</h3>
            <p>Pushing boundaries and creating impact through creative output.</p>
          </div>
          <div className='border m-6 '>
            <Image src={nftimg}/>
            <h3 className='text-3xl text-bold'>Community</h3>
            <p>Building a collaborative environment to build brands and experiences.</p>
          </div>
          <div className=' border m-6'>
            <Image src={nftimg}/>
            <h3 className='text-3xl text-bold'>Inspirational</h3>
            <p>Setting new standards and inspiring the industry towards greatness.</p>
          </div>
          <div className='border  justify-center text-center m-6'>
            <Image src={nftimg}/>
            <h3 className='text-3xl   text-bold'>Empowerment</h3>
            <p>Delivering value and empowering creators to build experiences.</p>
          </div>

        </div>
        
        <div className='text-center'>
            <button className='rounded bg-violet-600 p-2 '>Read More</button>
        </div>
    </div>
  )
}

export default Community