import "./App.css"
import { useState } from "react"
import Banner from "./components/Banner"
import AccWideDailyTasks from "./components/AccWideDailyTasks"
import AccController from "./components/AccController"

function App() {
  let localStorageName = "todolostark"

  let [account, setAccount] = useState(
    JSON.parse(localStorage.getItem(localStorageName)) || createAccount()
  )

  function createAccount() {
    return {
      id: Date.now(),
      accountDailyTasks: {
        loginReward: false,
        compassActivities: false,
        monthlyRotatingEventDaily: false,
        anguishedIslandDaily: false,
        tradeEnergy: false,
        rapport: false,
      },
      characters: [],
    }
  }

  function resetAccount() {
    setAccount(
      localStorage.setItem(localStorageName, JSON.stringify(createAccount()))
    )
  }

  function addCharacter(name) {
    let newCharacter = {
      name: name,
      id: Date.now(),
      characterDailyTasks: {
        chaosDungeon1: false,
        chaosDungeon2: false,
        guardianRaid1: false,
        guardianRaid2: false,
        unaTask1: false,
        unaTask2: false,
        unaTask3: false,
        guildDonation: false,
        guildResearch: false,
      },
    }

    setAccount({
      ...account,
      characters: [...account.characters, newCharacter],
    })
  }

  function removeCharacter(id) {
    setAccount({
      ...account,
      characters: account.characters.filter((character) => character.id !== id),
    })
  }

  let [selectedCharacter, setSelectedCharacter] = useState("none")

  function selectCharacter(event) {
    event.preventDefault()
    console.log(event.target.value)
  }
  let [lightsOn, setLightsOn] = useState(false)

  function flipLights() {
    setLightsOn(!lightsOn)
  }

  return (
    <div className={`App ${lightsOn ? "Light" : "Dark"}`}>
      <Banner lightsOn={lightsOn} flipLights={flipLights} />

      <div className="Content">
        <AccController />
        <AccWideDailyTasks />
        <div>
          <div>character select</div>
          <ul>
            <li>login reward</li>
            <li>compass activities</li>
            <li>montly rotating event daily</li>
            <li>compass activities</li>
            <li>rapport</li>
            <li>trade energy</li>
          </ul>
        </div>
        <div>character select zone</div>
        <div>selected character quests</div>
        <div className="Button-Text-Pair">
          <div>Account</div>
          <button
            id="salata"
            className="Button-Danger"
            onClick={selectCharacter}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
