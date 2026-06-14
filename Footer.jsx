import React from 'react'
import assets, { footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3 bg-gray-100"style={{marginTop:'20px', }}>
        <div className="flex flex-col md:flex-row items-start justify-between 
        gap-10 py-10 border-b border-gray-500/30 text-gray-500">

            <div className="x-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3 bg-gray-100"style={{marginTop:'20px', marginLeft:'50px'}}>
                <img src={assets.logo} alt="logo" className="w-32 sm:w-44"/>
                <p className="max-w-[410px] mt-6">Quickblog is a useful blogging platform. 
                    It is used by many users and liked it.</p>
            </div>

            <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5"style={{marginTop:'40px', marginBottom:'10px'}} >
                {footer_data.map((section, index)=> (
                    <div key={index}>
                        <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2"style={{marginBottom:'20px'}}>{section.title}</h3>
                        <ul className="text-sm space-y-1"style={{marginBottom:'30px'}}>
                            {section.links.map((link, i)=> (
                                <li key={i}>
                                    <a href="#" className="hover:underline transition">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))} 
            </div>
        </div> 
        <p className="py-4 text-center text-sm md:text-base h-8 text-gray-500/80 bg-gray-100"style={{marginTop:'3px'}}>
            Copyright 2025 @ QuickBlog GreatStack - All rights are reserved
        </p>
    </div>
  )
}


export default Footer
