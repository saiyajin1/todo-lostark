import React from "react"

const CharacterController = ({
  characters,
  selectedCharacter,
  selectCharacter,
}) => {
  return (
    <div className="Char-Controller">
      {characters.map((character) => (
        <button
          className={character.id === selectedCharacter ? " Selected" : ""}
          key={character.id}
          onClick={() => {
            selectCharacter(character.id)
          }}
        >
          {character.name}
        </button>
      ))}
    </div>
  )
}

export default CharacterController
