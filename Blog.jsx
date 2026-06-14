import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import assets, { blog_data, comments_data } from '../assets/assets'
import { Navbar } from '../components/Navbar'
import moment from 'moment'
import Footer from '../components/Footer'


const Blog = () => {

  const {_id} = useParams()

  const [data, setData] = useState(null)
  const [comments, setComments] = useState(null)

  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const fetchBlogData = async()=> {
    const data = blog_data.find(item => item.id == _id)
    setData(data)
  }

  const fetchComments = async () => {
    setComments(comments_data)
  }

  const addComment = async (e) => {
    e.preventDefault();
  }

  useEffect(()=>{
    fetchBlogData()
    fetchComments()
  },[])

   return data ? (
    <div className="item-center justify-center relative min-h-screen bg-white">
 
  <img 
    src={assets.gradientBackground} 
    alt="" 
    className=" items-center absolute top-0 left-0 right-0 h-96 w-full object-cover z-0 opacity-50 pointer-events-none"
  />


  <div className="relative z-10">
    <Navbar/>
  </div>

  <div className="flex flex-col items-center justify-center relative z-10 px-6 md:px-16 lg:px-24 text-center">
    <p className="text-primary py-4 font-medium"style={{marginBottom:'20px'}}>
      Published on {moment(data.createdAt).format('MMMM Do YYYY')}
    </p>
    <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl 
    mx-auto text-gray-800 text-center block"style={{marginBottom:'20px'}}>{data.title}</h1>
    <p className="inline-block py-1  text-1xl px-4 rounded-full mb-6 border text-sm 
    border-black-35 bg-blue-100 w-30 h-6 font-medium text-purple"style={{color:'purple', marginBottom:'20px'}}>Michael Brown</p>
  </div>
  <div className="flex flex-col items-center justify-center relative">
  <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">

    <img src={data.image} alt="" className=" items-center justify-center rounded-3xl mb-5"/>
  </div>

  <div className="justify-center rich-text max-w-3xl"style={{marginBottom:'30px'}} 
  dangerouslySetInnerHTML={{__html:data.description}}></div>

  
  </div>
  <div className="flex flex-col items-center justify-center relative"style={{marginBottom:'40px'}}>
  <div className="mt-14 mb-10 max-w-8xl mx-auto">
    <p> Comments ({comments.length})  </p>
    <div className="flex flex-col gap-4">
      {comments.map((item, index)=> (
        <div key={index} className="relative bg-gray-100 
          max-w-5xl w-190 p-4 rounded text-gray-600">
          <div className="flex items-center gap-2 mb-2"style={{marginLeft:'20px', marginTop:"20px"}}>
            <img src={assets.user_icon} alt="" className="w-6"/>
            <p className="font-medium">{item.name}</p>
          </div>
          <p className="text-sm max-w-md items-center ml-9"style={{marginLeft:'50px',marginBottom:'20px',marginTop:'10px'}}>{item.content}</p>
          <div className="absolute right-4 bottom-3 top-6 flex items-center gap-2 text-xs">
            {moment(item.createdAt).fromNow()}</div>
        </div>
      ))}
    </div>
  </div>
  </div>

  <div className="flex flex-col items-center justify-center relative max-w-5xl mx-auto">
    <p className="font-semibold mb-4">Add your comment</p>
    <form onSubmit={addComment} className="gap-4 max-w-lg" style={{marginLeft:'360px', marginBottom:'20px'}}>

      <input onChange={(e)=> setName(e.target.value)} value={name}  type='text' placeholder='Name' required className="w-180 h-10 p-3 
      border border-gray-300 rounded outline-none"style={{marginBottom:'20px'}}/>

      <textarea onChange={(e)=> setContent(e.target.value)} value={content}  placeholder='Comment' className="items-center justify-center w-180 p-2
       border border-gray-300 rounded outline-none h-48"style={{marginBottom:'20px'}} required></textarea>
       
      <button   type='submit' className="bg-blue-800 w-30 h-10 text-white rounded 
      p-2 px-8 hover:scale-102 transition-all cursor-pointer">
      Submit
      </button>
      
    </form>
  </div>
  <div className="flex flex-col items-center justify-center my-24 max-w-6xl mx-auto"style={{marginTop:'60px',marginBottom:'60px'}}>
    <p className="font-semibold my-4">Share this article on social media</p>
    <div className="flex items-center justify-center ">
      <img src={assets.facebook_icon} width={50} alt=""/>
      <img src={assets.twitter_icon} width={50} alt=""/>
      <img src={assets.googleplus_icon} width={50} alt=""/>
    </div>
  </div>
  <Footer/>
</div>

  ) : (
    <div className="text-center py-20 text-gray-500">Loading....</div>
  ); 
}


export default Blog
