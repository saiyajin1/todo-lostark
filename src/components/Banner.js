import React from "react"

function Banner({ lightsOn, flipLights }) {
  return (
    <div className="Banner">
      <h2>Lost Ark Todo's</h2>
      <div className="Banner-Clickable-Container">
        <div className="LightSwitch" onClick={flipLights}>
          {lightsOn ? "🌚" : "🌝"}
        </div>
      </div>
    </div>
  )
}

export default Banner
