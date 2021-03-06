import "./App.css"
import { useEffect, useState } from "react"
import Modal from "./components/Modal"
import Banner from "./components/Banner"
import AccController from "./components/AccController"
import CharacterController from "./components/CharacterController"
import TaskListAcc from "./components/TaskListAcc"
import TaskListChar from "./components/TaskListChar"

function App() {
  let localStorageName = "todolostark"

  let [account, setAccount] = useState(
    JSON.parse(localStorage.getItem(localStorageName)) || false
  )

  if (account === false) {
    setAccount(createAccount())
  }

  function createAccount() {
    let freshAcc = {
      id: Date.now(),
      accountDailyTasks: {
        ghostShip: false,
        chaosGate: false,
        worldBoss: false,
        adventureIsland: false,
        anguishedIsland: false,
      },
      characters: [],
    }
    return freshAcc
  }

  function resetAccount() {
    selectCharacter("none")
    setAccount(createAccount())
  }

  function addCharacter(name) {
    let newCharacter = {
      name: name,
      id: Date.now(),
      characterDailyTasks: {
        chaosDungeon: false,
        guardianRaid: false,
        unaDaily: false,
        guildDonation: false,
      },
    }

    selectCharacter(newCharacter.id)

    setAccount({
      ...account,
      characters: [...account.characters, newCharacter],
    })
  }

  function removeCharacter(id) {
    setSelectedCharacter("none")
    setAccount({
      ...account,
      characters: account.characters.filter((character) => character.id !== id),
    })
  }

  function dailyReset() {
    setAccount({
      ...account,
      accountDailyTasks: {
        ghostShip: false,
        chaosGate: false,
        worldBoss: false,
        adventureIsland: false,
        anguishedIsland: false,
      },
      characters: account.characters.map((character) => {
        return {
          ...character,
          characterDailyTasks: {
            chaosDungeon: false,
            guardianRaid: false,
            unaDaily: false,
            guildDonation: false,
          },
        }
      }),
    })
  }

  let [selectedCharacter, setSelectedCharacter] = useState("none")

  function selectCharacter(id) {
    setSelectedCharacter(id)
  }
  let [lightsOn, setLightsOn] = useState(false)

  function flipLights() {
    setLightsOn(!lightsOn)
  }

  let [modalOn, setModalOn] = useState(false)

  function openModal() {
    setModalOn(true)
  }

  function closeModal() {
    setModalOn(false)
  }

  let [characterNameInput, setCharacterNameInput] = useState("")

  useEffect(() => {
    localStorage.setItem(localStorageName, JSON.stringify(account))
  }, [localStorageName, account])

  return (
    <div className={`App ${lightsOn ? "Light" : "Dark"}`}>
      <Banner lightsOn={lightsOn} flipLights={flipLights} />

      <div className="Content">
        <TaskListAcc account={account} setAccount={setAccount} />
        <AccController
          openModal={openModal}
          removeCharacter={removeCharacter}
          dailyReset={dailyReset}
          selectedCharacter={selectedCharacter}
          addCharacter={addCharacter}
        />
        <CharacterController
          characters={account.characters}
          selectedCharacter={selectedCharacter}
          selectCharacter={selectCharacter}
        />
        <TaskListChar
          account={account}
          setAccount={setAccount}
          selectedCharacter={selectedCharacter}
        />
      </div>
      <div className="Footer">
        <button className="Danger" onClick={resetAccount}>
          Reset Account
        </button>
      </div>
      <Modal
        modalOn={modalOn}
        closeModal={closeModal}
        characterNameInput={characterNameInput}
        characterNameInputController={(name) => {
          setCharacterNameInput(name)
        }}
        addCharacter={(name) => {
          addCharacter(name)
        }}
      />
    </div>
  )
}

export default App
