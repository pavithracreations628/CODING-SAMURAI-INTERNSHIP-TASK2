import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import BlogCard from './BlogCard'
import blog from './BlogCard'


const BlogList = () => {

    const [menu, setMenu] = useState("All")

  return (
    <div>
     <div className="flex justify-center gap-4 sm:gap-8 my-10 relative" style={{marginTop:'20px'}}>
       {blogCategories && blogCategories.map((item) => (
       <div key={item} className="relative inline-flex items-center justify-center m-1">
        <button  
            onClick={() => setMenu(item)} 
            className={`cursor-pointer transition-all relative z-20 w-25 text-gray-500 font-medium ${menu === item ? 'text-white px-4 py-1' : ''}`}
        >
            {item}
        </button>
        {menu === item && (
            <div className="absolute inset-0 bg-blue-500 rounded-full z-0"></div>
        )}
        </div>
       ))}


     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
       xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {blog_data.filter((blog)=> menu === "All" ? true : blog.category === menu).
        map((blog)=> <BlogCard key={blog._id} blog={blog} />)}
     </div>
    </div>
  )
}

export default BlogList
