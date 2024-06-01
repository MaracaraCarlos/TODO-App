import { useContext } from "react"
import { FilterContext } from "../context/FilterContext"

const Footer = ({ numberTodoLeft }) => {

  const { displayAllTasks, displayLeftTasks, displayDoneTasks, clearCompleteTasks, theme } = useContext(FilterContext)


  return (
    <div className={theme === 'light' ? 'footer_container' : 'footer_container footer_container_dark'} >
      <div className='task_left'>
        {numberTodoLeft} task left
      </div>
      <div className='filter'>
        <button onClick={displayAllTasks}>All</button>
        <button onClick={displayLeftTasks}>Active</button>
        <button onClick={displayDoneTasks}>Complete</button>
      </div>
      <div 
        className='clear_all'
        onClick={clearCompleteTasks}
      >
        Clear Complete
      </div>
    </div>
  )
}

export default Footer