import React from "react"

function Banner({ lightsOn, flipLights }) {
  return (
    <div className="Banner">
      <div>Lost Ark Todo's</div>
      <div className="Banner-Clickable-Container">
        <div className="LightSwitch" onClick={flipLights}>
          {lightsOn ? "🌚" : "🌝"}
        </div>
      </div>
    </div>
  )
}

export default Banner
