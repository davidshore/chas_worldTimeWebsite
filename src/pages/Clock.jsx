import { useState, useEffect } from "react";
import { timeZones } from "../timeZones";

function Clock({ city, timeZone, country, small }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [smaller, setSmaller] = useState(true);

  useEffect(() => {
    let url = window.location.href
    if(url.includes(country)) {
      setSmaller(false)
    } else {
      setSmaller(true)
    }
  })

  useEffect(() => {
    const timer = setInterval(function () {
      getTimeWithTimeZones();
    }, 1000);
    return function clear() {
      clearInterval(timer);
    };
  }, []);

  function getTimeWithTimeZones() {
    let time = new Date();
    let val = time.toLocaleTimeString("en-US", { timeZone: timeZone });
    setTime(val);
  }

  function getString() {
    let url = window.location.href;
    let baseUrl = url
      .replace("Sweden", "")
      .replace("England", "")
      .replace("USA", "")
      .replace("Australia", "");
    return baseUrl + country;
  }

  function checkCountry() {
    if (window.location.href.includes(country)) {
      // setSmaller(!smaller)
      return true
    };
    if (
      window.location.href.includes("Sweden") === false &&
      window.location.href.includes("England") === false &&
      window.location.href.includes("USA") === false &&
      window.location.href.includes("Australia") === false
    ) {
      // setSmaller(!smaller)
      return true;
    }
    // setSmaller(!smaller)
    return false;
  }

  return (
    <>
      {checkCountry() && (
        <div
          className={`${smaller ? "small-clock-container" : "clock-container"}`}>
          <a
            href={getString()}
            style={{ height: "100%", width: "100%", zIndex: 9, position: 'absolute' }}></a>
          <h1>{city}</h1>
          <h1>{time}</h1>
        </div>
      )}
    </>
  );
}
export default Clock;
