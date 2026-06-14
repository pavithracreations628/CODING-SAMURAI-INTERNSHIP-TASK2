import React from 'react'

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify text-center space-y-2 my-32">
        <h1 className="md:text-4xl text-2xl font-semibold" style={{marginTop:'100px'}}>Never Miss a Blog!</h1>
        <p className="md:text-lg text-gray-500/70 pb-8" style={{marginTop:'20px', marginBottom:'30px'}}>Subscribe to get the latest blog, new tech, and exclusive news.</p>
        <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12"style={{marginTop:'30px', marginBottom:'70px'}}>
            <input className="border border-gray-300 rounded-md h-full border-r-0
             outline-none w-full rounded-r-none px-3 text-gray-500" type="text" 
             placeholder="Enter your email id" required/>
            <button  type="submit" className="md:px-8 h-full text-white w-30 h-20 bg-blue-500
             hover:bg-primary transition-all cursor-pointer rounded-md rounded-1-none">
            Subcribe
            </button> 
        </form>
             
    </div>
  )
}

export default NewsLetter
