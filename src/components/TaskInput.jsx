import { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { FilterContext } from "../context/FilterContext"


const TaskInput = () => {

  const { addTask, theme } = useContext(FilterContext)

  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      body: input,
      complete: false
    }
    addTask(newTask)
    setInput('')
    Array(document.querySelector('input'))[0].value = ''
  }

  return (
    <form 
      className={theme === 'light' ? 'task_input' : 'task_input task_input_dark'}
      onSubmit={handleSubmit}>
      <button></button>
      <input
        className={theme === 'light' ? 'input' : 'input input_dark'}
        type='text' 
        name='body'
        placeholder='Create a new todo...' 
        onChange={handleChange}
      />
    </form>
  )
}

export default TaskInput