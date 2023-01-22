import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { MdZoomOutMap } from 'react-icons/md';
export default function Clock({ city, timeZone }) {
  const [isClick, setIsClick] = useState()
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString("sv-SE", { timeZone }));
    }, 1000);
  }, []);

  return (
    <div
      className="flex flex-col justify-between items-center md:items-center p-6 mt-5 bg-cyan-900 rounded-md w-full md:w-auto mb-4">
      <div className=" text-white text-3xl font-bold mb-2">{city}</div>
      <div className="text-3xl text-gray-900 bg-white p-3 m-2 rounded-xl font-semibold font-mono">
        {time}
      </div>
      <button title="BIGGER" type="button" className=" text-black bg-red-400 mt-3 px-3 py-2 hover:text-white" 
      onClick={()=>setIsClick( prev=>!prev)}> <div className={isClick ?"hidden":"block"}><MdZoomOutMap/></div>
      {isClick && <Link to={city}>BIGGER</Link>}
      </button>
    
    </div>
  );
}
