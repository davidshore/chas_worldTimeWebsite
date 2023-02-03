import Clock from "./Clock";
import { timeZones } from "../timeZones";
import { useState, useEffect } from "react";

function Home() {
  const [showsingleClock, setShowSingleClock] = useState(false);

  let url = window.location.href;
  let locationObj = {
    city: "Stockholm",
    timeZone: "Europe/Stockholm",
    country: "Sweden",
  };

  // useEffect(() => {
  //   console.log("hello", window.location.href);
  //   if (
  //     url.includes("Sweden") ||
  //     url.includes("England") ||
  //     url.includes("USA") ||
  //     url.includes("Australia")
  //   ) {
  //     timeZones.forEach((el) => {
  //       if (url.includes(el.country)) {
  //         locationObj.city = el.city;
  //         locationObj.timeZone = el.timeZone;
  //         locationObj.country = el.country;
  //       }
  //     });
  //     setShowSingleClock(!showsingleClock);
  //   } else {
  //     setShowSingleClock(false);
  //   }
  // }, window.location.href);

  let clocksList = timeZones.map((el) => {
    return (
      <Clock
        key={el.city}
        city={el.city}
        timeZone={el.timeZone}
        country={el.country}
        small={true}
      />
    );
  });

  return (
    <div className="page-container">
      <h1>home </h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {showsingleClock ? (
          <Clock
            key={locationObj.city}
            city={locationObj.city}
            timeZone={locationObj.timeZone}
            country={locationObj.country}
            small={false}
          />
        ) : (
          clocksList
        )}
      </div>
    </div>
  );
}

export default Home;
