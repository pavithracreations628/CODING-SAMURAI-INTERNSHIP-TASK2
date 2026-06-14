import React, { useEffect, useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] =useState('')

  const handleSubmit = async (e)=>{
    e.prenevtDefault()
  }
  
  
  return (
   <div className="flex items-center justify-center h-screen">
    <div className="w-full max-w-sm p-6 max-md:m-10 border border-gray-150 shadow-xl shadow-primary/15 rounded-lg">
    <div className="flex flex-col items-center justify-center">
      <div className="w-full py-6 text-center w-800 h-20"style={{marginTop:'40px'}}>
        <h1 className="text-3xl font-bold">
        <span className="text-blue-600">Admin</span>Login</h1>
        <p className="font-light">Enter your crendentials to access the <br/> 
          admin panel</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-6 w-full 
      sm:max-w-80 text-gray-600"style={{marginTop:'50px'}}>
        <div className="flex flex-col"style={{marginLeft:'5px', marginRight:'5px'}}>
          <label>Email</label>
          <input onChange={e=> setEmail(e.target.value)} value={email} type="email" required placeholder='your email id' 
          className="border-b-2 border-gray-300 p-2 outline-none mb-6"style={{marginTop:'15px',marginBottom:'20px'}}/>
          <label>Password</label>
          <input onChange={e=> setPassword(e.target.value)} value={password} type="password" required placeholder='your email id' 
          className="border-b-2 border-gray-300 p-2 outline-none mb-6"style={{marginBottom:'20px', marginTop:'15px'}}/>
        </div>
        <button type='submit' className="w-full py-3 font-medium bg-blue-400 text-white 
        rounded cursor-pointer hover:bg-primary/90 transition-all w-70 h-10"style={{marginBottom:'40px', marginRight:'20px'}}>Login</button>

      </form>
    </div>
    </div>
      
    </div>
  )
}

export default Login
