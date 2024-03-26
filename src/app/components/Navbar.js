"use client"
import React from 'react'
import Row from './Row'
import Buttons from './buttons'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <a href='/'>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </a>
    
    <div className=''>
      <Buttons adress="/signin" className="text-white pr-4" title='Sign In'/>
      <Buttons adress='/signout' className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white" title='Sign Out'/>
    </div>
    
      
    
    </div>
    
  )
}

export default Navbar
