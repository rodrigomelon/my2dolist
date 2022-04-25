import * as React from 'react'
import '../App.css'
import { useState } from 'react'
import { BiTrash } from 'react-icons/bi'

export default function Main() {
  const [name, setName] = useState('')
  const [duration, setDuration] = useState('')
  const [tasks, setTasks] = useState([])

  const handleClick = e => {
    e.preventDefault()

    if (name === '' || duration === '') {
      alert('Wrong name or duration!')
      return
    }

    let task = {
      id: Math.random(),
      name,
      duration
    }

    setTasks(prevState => [...tasks, task])
    setName('')
    setDuration('')
  }

  const handleDelete = id => {
    const filtrados = tasks.filter(task => task.id !== id)
    setTasks(filtrados)
  }

  return (
    <div>
      <h1>MY 2-DO LIST</h1>
      <form>
        <label htmlFor="name">TASK NAME:</label>
        <br />
        <input
          className="pinput"
          type="text"
          name="tname"
          placeholder="Write the name of your task here..."
          onChange={e => setName(e.target.value)}
          value={name || ''}
        ></input>
        <br />
        <label>TASK DURATION: (in hours)</label>
        <br />
        <input
          className="sinput"
          type="text"
          name="tduration"
          placeholder="Write the duration of your task here..."
          onChange={e => setDuration(e.target.value)}
          value={duration || ''}
        ></input>
        <br />
        <button onClick={handleClick}>ADD TASK!</button>
      </form>
      <h1 className="tasklistt">TASK LIST:</h1>
      {tasks.length === 0 && <h3>There's no tasks yet!</h3>}
      {tasks.map(task => (
        <div key={task.id} className="taskitem">
          <div className="taskinfo">
            <p>{task.name}</p>
            <p>{task.duration} hours</p>
          </div>
          <div className="trash">
            <BiTrash
              size={20}
              cursor="pointer"
              onClick={() => handleDelete(task.id)}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
