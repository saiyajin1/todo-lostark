import React from "react"

const AccController = ({
  openModal,
  removeCharacter,
  dailyReset,
  selectedCharacter,
}) => {
  return (
    <div className="Acc-Controller">
      <button onClick={openModal}>Add Character</button>
      <button onClick={() => removeCharacter(selectedCharacter)}>
        Remove Selected Character
      </button>
      <button onClick={dailyReset}>Daily Reset</button>
    </div>
  )
}

export default AccController
