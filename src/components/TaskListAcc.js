import React from "react"

const TaskListAcc = ({ account, setAccount }) => {
  function handleChange(event) {
    setAccount({
      ...account,
      accountDailyTasks: {
        ...account.accountDailyTasks,
        [event.target.id]: event.target.checked,
      },
    })
  }
  return (
    <div className="Account-Wide-Tasks">
      <h3>Account Wide Tasks</h3>
      <div className="Select-Group">
        {Object.keys(account.accountDailyTasks).map((prop) => {
          return (
            <div className="Select-Component" key={prop}>
              <input
                onChange={handleChange}
                id={prop}
                type="checkbox"
                checked={account.accountDailyTasks[`${prop}`]}
              ></input>
              <label htmlFor={prop}>
                <img src={`/${prop}.png`} alt={prop}></img>
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TaskListAcc
