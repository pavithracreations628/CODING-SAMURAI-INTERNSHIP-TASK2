import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:_id" element={<Blog />} />
      <Route path="/login" element={<Login/>}/>
     </Routes> 
    </div>
  )
}

export default App

