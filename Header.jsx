import React from 'react'
import assets from '../assets/assets'

const Header = () => {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
        <div className="text-center mt-20 mb-8">
            <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5  mb-4  
            border border-primary/40 w-60 h-8 bg-blue rounded-full text-sm text-primary
            " style={{ marginTop: '60px',  marginBottom:'20px'}}>
                <p>New:  AI features integrated</p>
                <img className="w-2.5" src={assets.star_icon} alt=""/>
            </div>
            <h1 className="text-center text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700" style={{ marginBottom: '40px' }}>
                Your own <span className="text-blue-400">blogging</span><br/>platform</h1>
             <div className="flex flex-col items-center justify-center w-full">
               <p className="text-center my-6 sm:my-8 max-w-2xl max-sm:text-xs text-gray-500"> 
               This is your space to think out loud, to share what matters, and to write without filters. Whether it's one word or a thousand, your story starts right here. 
               </p>
            </div>
            <div className="flex  items-center justify-center" style={{marginTop:'20px'}}>
            <form className="max-w-lg max-sm:scale-75 mx-auto
            border border-gray-300 bg-white rounded overflow-hidden">
                <input type="text" placeholder='Search for blogs' required className="w-100 h-10  pl-4 outline-none"/>
                <button type="submit" className="bg-blue-500 text-white px-8 py-2 m-1.5 w-15 h-10 rounded 
                hover:scale-105 transition-all cursor-pointer font-medium">Search</button>
                
            </form>
            </div>
        </div>
        <img className="absolute top-[-50px] z-[-1] opacity-50" src={assets.gradientBackground} alt="background gradient"/>
    </div>
  )
}

export default Header
