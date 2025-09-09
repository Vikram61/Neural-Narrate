import React from 'react'
import {assets, footer_data} from '../assets/assets'
const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 ' >
      <div className='flex flex-col md:flex-row items-start justify-between gap-10
      py-10 border-b border-gray-500/30 text-gray-500' >
       <div>
        <img src='/new1.png' alt="logo" className='w-32 sm:w-44' />
        <p className='max-w-[410px] mt-6' >
            Neural Narrative is an AI-powered blogging platform designed
             to help creators, writers, and professionals share their stories 
             with impact. By combining intelligent content generation with seamless publishing tools, we make blogging smarter, faster, and more engaging. Whether you’re building thought leadership or sharing personal insights, Neural Narrative empowers your voice with the support of AI innovation.
        </p>
       </div>
       <div className='flex felx-wrap justify-between w-full md:w-[45%] gap-5' >
             {footer_data.map((section,index)=>(
                <div key={index} >
                    <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2' >{section.title}</h3>
                    <ul className='text-sm space-y-1' >
                        {section.links.map((link,i)=>(
                            <li key={i} >
                                <a href="#" className='hover:underline transition' >
                                    {link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
             ))}
       </div>
      </div>

      <p className='py-4 text-center text-sm md:text-base text-gray-500/80' 
       >Copyright 2025 Neural Narrate All Rights Reserved. </p>
    </div>
  )
}

export default Footer
