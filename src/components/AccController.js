import React from "react"

const AccController = ({
  addCharacter,
  removeCharacter,
  dailyReset,
  selectedCharacter,
}) => {
  return (
    <div className="Acc-Controller">
      <button onClick={addCharacter}>Add Character</button>
      <button onClick={() => removeCharacter(selectedCharacter)}>
        Remove Selected Character
      </button>
      <button onClick={dailyReset}>Daily Reset</button>
    </div>
  )
}

export default AccController
