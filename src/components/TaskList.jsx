import { useState } from "react"
import TaskInput from "./TaskInput"
import Footer from "./Footer"
import { FilterContext } from "../context/FilterContext"
import FilterTask from "./FilterTask"
import Headers from './Headers'

const TaskList = () => {

  const [tasks, setTasks] = useState([])
  const [tasksComplete, setTasksComplete] = useState([])
  const [tasksIncomplete, setTasksIncomplete] = useState([])
  const [display, setDisplay] = useState({total: true, done: false, left: false})
  const [theme, setTheme] = useState('light')

  const addTask = (task) => {
    // trim() elimina espacios en blanco a los extremos del string
    if (task.body.trim()) {
      task.body = task.body.trim()
      const taskUpdate = [task, ...tasks]
      setTasks(taskUpdate)
      const todoIncomplete = tasks.filter(arr => arr.complete === false)
      setTasksIncomplete(todoIncomplete)
      const todoComplete = tasks.filter(arr => arr.complete === true)
      setTasksComplete(todoComplete)
    }
  }

  const deleteTask = (id) => {
    const tasksUpdate = tasks.filter(task => task.id !== id)
    setTasks(tasksUpdate)
    const todoIncomplete = tasks.filter(arr => arr.complete === false)
    setTasksIncomplete(todoIncomplete)
    const todoComplete = tasks.filter(arr => arr.complete === true)
    setTasksComplete(todoComplete)
  }

  const completeTask = (id) => {
    const tasksUpdate = tasks.map(task => {
      if (task.id === id) {
        task.complete = !task.complete
      }
      return task
    })
    setTasks(tasksUpdate)
    const todoIncomplete = tasks.filter(arr => arr.complete === false)
    setTasksIncomplete(todoIncomplete)
    const todoComplete = tasks.filter(arr => arr.complete === true)
    setTasksComplete(todoComplete)
  }

  const displayDoneTasks = () => {
    const doneTasks = {
      total: false,
      done: true,
      left: false
    }
    setDisplay(doneTasks)
  }

  const displayLeftTasks = () => {
    const leftTasks = {
      total: false,
      done: false,
      left: true
    }
    setDisplay(leftTasks)
  }

  const displayAllTasks = () => {
    const allTasks = {
      total: true,
      done: false,
      left: false
    }
    setDisplay(allTasks)
  }

  const clearCompleteTasks = () => {
    setTasks(tasksIncomplete)
  }

  const changeThemeLight = () => {
    setTheme('light')
  }

  const changeThemeDark = () => {
    setTheme('dark')
  }

  return (
    <div className={theme === 'light' ? 'body' : 'body bodydark'}>
      <div className='app_container'>
        <FilterContext.Provider 
          value={{ 
            completeTask, 
            deleteTask, 
            addTask, 
            tasks, 
            tasksComplete, 
            tasksIncomplete, 
            display,
            theme,
            displayAllTasks, 
            displayLeftTasks, 
            displayDoneTasks,
            clearCompleteTasks,
            changeThemeLight,
            changeThemeDark
          }}>
          <Headers />
          <TaskInput />
          <FilterTask />
          <Footer 
            numberTodoLeft={tasksIncomplete.length}
          />
        </FilterContext.Provider>
      </div>
    </div>
  )
}

export default TaskList