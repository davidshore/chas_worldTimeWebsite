import React from 'react'
import Clock from '../Clock'
export default function NewYork() {
  return (
    <div className='px-10 min-h-[68vh]'>
      <div className='text-center w-56 m-auto mt-10'>
      <h1 className='bg-cyan-900 text-white text-4xl py-3 font-bold'>New York</h1>
      </div>
      <div className='pt-10'>
        <Clock city="New York" timeZone="America/New_York" />
      </div>
    </div>
  )
}
