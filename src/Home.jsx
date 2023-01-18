import Clock from "./Clock"
import { Link } from "react-router-dom"

export default function Home() {

    // 2 clocks
    return (
      <div>
        <div className=" flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
          <Clock cityKey={"stockholm"} />
          <Clock cityKey={"london"} />
          <Clock cityKey={"newYork"} />
        </div>
      </div> 
    )
}