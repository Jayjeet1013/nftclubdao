'use client'

import React from 'react'
import Image from 'next/image'
import service_1 from 'public/5.png'
import service_2 from 'public/6.png'
import service_3 from 'public/8.png'
import service_4 from 'public/9.png'
import bg_4 from 'public/bg_4.png'



import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'


const Services = () => {



  return (
    <div className='bg-serviceColor '>
      <div className='text-white text-center p-8 '>
        <h1 className='text-5xl p-12 '>Discover our Unparalleled Services</h1>
        <p className='text-md'>Leverage the power of NFTs to create new experiences for your customers</p>
      </div>
 <div className='flex text-center justify-center  '>
<div className='text-white border rounded text-center w-96 p-2 m-8'>
  <Image src={service_1} className='mx-auto'/>
  <h1>Growth</h1>
  <p>Attracting strategic partnerships by crafting hyper growth marketing campaigns.</p>
</div>
<div className='text-white border rounded text-center w-96 p-2 m-8 '>
  <Image src={service_2} className='mx-auto'/>
  <h1>Fundraising</h1>
  <p>Taking your project to new heights by introducing relevant investors and partners.</p>
</div>
 </div>
 
<Image src={bg_4} className='right-0  absolute p-0 m-0 '/>

 <div className='flex text-center justify-center'>
<div className='text-white border rounded text-center w-96 p-2 m-8 '>
  <Image src={service_3} className='mx-auto'/>
  <h1>Consulting</h1>
  <p>Doing intense market and user research to create the best strategies for your brand launch and revival.</p>
</div>
<div className='text-white border rounded text-center w-96 p-2 m-8  '>
  <Image src={service_4} className=' mx-auto '/>
  <h1>Development</h1>
  <p>Bringing ideas from concept to life with art and technology development.</p>
</div>
 </div>


<div className='flex justify-center text-center p-4'>
 
    <button className='border rounded-md bg-violet-800 p-1 m-4'>Contact Us</button>
    <button className='border rounded-md text-white p-1 m-4'>Explore More</button>
   
</div>


<div className='text-center justify-center text-white'>

  
  <div className='justify-center text-center mx-96 py-20'>
    <h1 className='text-5xl py-4 text-white '>FAQs</h1>
    
  <Accordion className='text-lg  px-20'>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className='py-4 text-2xl'>
        What is MetaClub DAO?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
<hr/>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' py='12' className='text-2xl'>
        How can I become a part of MetaClub DAO?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
<hr/>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' py='12' className='text-2xl'>
        Is MetaClub DAO a NFT project?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
<hr/>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' py='12' className='text-2xl'>
        What are the benefits of joining MetaClub DAO?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

</Accordion>
</div>
</div>
    </div>
  )
}

export default Services