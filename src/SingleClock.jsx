import { useEffect, useState } from "react";
import { timeZones } from "./timeZones";
import { useParams } from "react-router";

export default function SingleClock() {
  const [time, setTime] = useState();

  const { cityKey } = useParams(); //Destructuring
  const { city, timeZone, country } = timeZones[cityKey]; //destructuring

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString("sv-SE", { timeZone }));
    }, 1000);
  }, []);

  return (
    <div className="flex justify-center">
      <div
        className="flex flex-col justify-between
      md:items-start p-6 bg-slate-200 rounded-md  mb-4 max-w-sm"
      >
        <div className="text-xl text-gray-600">{city}</div>
        <div className="text-xl text-sky-600">{country}</div>
        <div className="text-4xl text-slate-900 font-semibold font-mono">
          {time}
        </div>
      </div>
    </div>
  );
}