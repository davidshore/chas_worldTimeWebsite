import React from 'react'

import { Link } from 'react-router-dom'
export default function Navigation() {
  return (
    <div className='top-0 sticky'>
      <nav className="flex justify-between p-8 bg-cyan-900 shadow-xl  items-center ">
        <Link to="/"><h1 className="text-4xl font-extrabold bg-white px-6 py-5 text-black rounded-2xl">World Time</h1></Link>

        <ul className="flex flex-col sm:flex-row ">
            <Link to="/About"><li className='w-28  font-extrabold bg-white px-6 py-2 m-2 text-center text-black rounded-2xl' >About</li></Link> 
            <Link to="/Contact"><li className='w-28  font-extrabold bg-white px-6 py-2 m-2 text-center text-black rounded-2xl' >Contact</li></Link> 
        </ul>
      </nav>
    </div>
  )
}
