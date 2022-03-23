import React from "react"

const CharacterController = ({ characters, selectCharacter }) => {
  return (
    <div>
      {characters.map((character) => (
        <button
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
