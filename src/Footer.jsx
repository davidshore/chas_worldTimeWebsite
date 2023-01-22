import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
        <ul className="flex flex-col sm:flex-row justify-around  bottom-0 sticky  bg-cyan-900 p-2">
          <div className='flex justify-around  sm:w-1/2'>
              <Link to="/Stockholm"><li className='bg-white text-black px-1 py-2 font-bold w-24 text-center my-2 hover:rounded-xl'>Stockholm</li></Link>
              <Link to="/NewYork"><li className='bg-white text-black px-1 py-2 font-bold w-24 text-center my-2 hover:rounded-xl'>New York</li></Link>
              <Link to="/Istanbul"><li className='bg-white text-black px-1 py-2 font-bold w-24 text-center my-2 hover:rounded-xl'>Istanbul</li></Link>
          </div>
          <div className='flex justify-around sm:w-1/2'>
              <Link to="/London"><li className='bg-white text-black px-1 py-2 font-bold w-24 text-center my-2 hover:rounded-xl'>London</li></Link>
              <Link to="/Tokyo"><li className='bg-white text-black px-1 py-2 font-bold w-24 text-center my-2 hover:rounded-xl'>Tokyo</li></Link>
              <Link to="/Shanghai"><li className='bg-white text-black px-1 py-2 font-bold w-24 text-center my-2 hover:rounded-xl'>Shanghai</li></Link>
          </div>
        </ul>
    </div>
  )
}
