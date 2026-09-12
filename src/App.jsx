import { useState } from 'react'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  function addTask() {
    if (task.trim() === "") {
      return
    }

    setTasks([...tasks, task])
    setTask("")
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  return (
    <>
      <h1>Task Manager</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <h2>Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <p>Total Tasks: {tasks.length}</p>
    </>
  )
}

export default App