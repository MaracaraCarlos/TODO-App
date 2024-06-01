import { useContext } from "react"
import { FilterContext } from "../context/FilterContext"
import Task from "./Task"

const LeftTasks = () => {

  const { tasksIncomplete, completeTask, deleteTask, theme } = useContext(FilterContext)

  return (
    <div className={theme === 'light' ? 'container_tasks_list' : 'container_tasks_list container_tasks_list_dark'}>
      {
        tasksIncomplete.map((task) => 
          <Task 
            key={task.id}
            id={task.id}
            body={task.body}
            complete={task.complete}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        )
      }
    </div>
  )
}

export default LeftTasks