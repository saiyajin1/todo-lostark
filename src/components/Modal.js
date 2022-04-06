const Modal = ({
  modalOn,
  closeModal,
  characterNameInput,
  characterNameInputController,
  addCharacter,
}) => {
  function characterNameChange(e) {
    characterNameInputController(e.target.value)
  }

  function addCharacterClick() {
    if (characterNameInput.length > 0) {
      addCharacter(characterNameInput)
      characterNameInputController("")
      document.getElementById("characterNameInput").value = ""
      closeModal()
    }
  }
  return (
    <>
      <div
        className={`BackDrop ${modalOn ? "Visible" : ""}`}
        onClick={closeModal}
      ></div>
      <div className={`Modal ${modalOn ? "Visible" : ""}`}>
        <h3>New Character</h3>

        <input
          id="characterNameInput"
          placeholder="enter at least 1 character"
          onChange={characterNameChange}
          type="text"
        />
        <div className="ModalButtonsContainer">
          <button onClick={addCharacterClick}>Add</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </>
  )
}

export default Modal
