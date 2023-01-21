import React from 'react'
import Clock from "./Clock";
export default function WorldTime() {
  return (
    <div>
        <main className="p-8">
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
          <div>
          <Clock city="Stockholm" timeZone="Europe/Stockholm" />
          <Clock city="London" timeZone="Europe/London" />
          </div>
          <div>
          <Clock city="New York" timeZone="America/New_York" />
          <Clock city="Tokyo" timeZone="Asia/Tokyo" />
          </div>
          <div>
          <Clock city="Istanbul" timeZone="Asia/Istanbul" />
          <Clock city="Shanghai" timeZone="Asia/Shanghai" />
          </div>
        </div>
      </main>
    </div>
  )
}
