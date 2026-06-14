import React from 'react'
import { useNavigate } from 'react-router-dom'
import assets from '../assets/assets.js'
import arrowIcon from '../assets/arrow.svg'



const Navbar = () => {

    const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-5" style={{ margin: '20px' }}>
      <img onClick={()=>navigate('/')} src={assets.logo} alt="logo" className="w-32 sm:w-44" />
      
      <button onClick={()=>navigate('/login')} className="flex items-center justify-center gap-2 rounded-full
       bg-blue-500 text-white font-semibold tracking-wide w-30 h-8 px-5 py-2.5 shadow-lg hover:bg-blue-600 transition-all" style={{ marginLeft: '50px', display: 'flex' }}>
        Login
        <img src={arrowIcon} alt="arrow" style={{width: '20px', height: '20px'}} />
      </button>
      
    </div>
  )
}

export { Navbar }