import React from 'react'
import Stockholm from "./components/Stockholm";
import London from "./components/London"
import { Link } from 'react-router-dom'
export default function Navigation() {
  return (
    <div>
      <nav className="flex justify-between p-8 bg-blue-400 items-center">
        <Link to="/"><h1 className="text-4xl font-extrabold text-white">World Time</h1></Link>

        <ul className="flex space-x-4">
          <Link to="/Stockholm"><li><Stockholm/></li></Link>
          <Link to="/Stockholm"><li><Stockholm/></li></Link>
          <Link to="/London"><li><London/></li></Link>
          <Link to="/Stockholm"><li><Stockholm/></li></Link>
          <Link to="/Stockholm"><li><Stockholm/></li></Link>
        </ul>
      </nav>
    </div>
  )
}
