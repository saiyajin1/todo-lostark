const TaskListChar = ({ account, setAccount, selectedCharacter }) => {
  function handleChange(event) {
    setAccount({
      ...account,
      characters: account.characters.map((character) => {
        if (character.id === selectedCharacter) {
          return {
            ...character,
            characterDailyTasks: {
              ...character.characterDailyTasks,
              [event.target.id]: event.target.checked,
            },
          }
        } else {
          return character
        }
      }),
    })
  }

  return (
    <div className="Char-Tasks Border">
      {selectedCharacter !== "none" ? (
        <div className="Select-Group">
          {Object.keys(
            account.characters.filter(
              (character) => character.id === selectedCharacter
            )[0].characterDailyTasks
          ).map((prop) => {
            return (
              <div className="Select-Component" key={prop}>
                <input
                  id={prop}
                  type="checkbox"
                  onChange={handleChange}
                  checked={
                    account.characters.filter(
                      (character) => character.id === selectedCharacter
                    )[0].characterDailyTasks[`${prop}`]
                  }
                ></input>
                <label htmlFor={prop}>
                  <img src={`/${prop}.png`} alt={prop}></img>
                </label>
              </div>
            )
          })}
        </div>
      ) : (
        <h3>Select/Create A Character</h3>
      )}
    </div>
  )
}

export default TaskListChar
