import { useContext } from "react"
import Task from "./Task"
import { FilterContext } from "../context/FilterContext"

const DoneTasks = () => {

  const { tasksComplete, completeTask, deleteTask, theme } = useContext(FilterContext)

  return (
    <div className={theme === 'light' ? 'container_tasks_list' : 'container_tasks_list container_tasks_list_dark'}>
      {
        tasksComplete.map((task) => 
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

export default DoneTasks