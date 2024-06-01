import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6"
import { FilterContext } from "../context/FilterContext";

const Task = ({ id, body, deleteTask, completeTask, complete }) => {

  const {theme} = useContext(FilterContext)

  return (
    <div className={complete ? `task_container_${theme} complete_${theme}` : `task_container_${theme}`}>
      <div className="left">
        <div 
          className={'icon_check_container'}
          onClick={() => completeTask(id)}
        >
          <FaCheck className={complete ? 'icon_check' : 'icon_check incomplete_icon' } />
        </div>
        <div 
          className={complete ? `task_body_${theme}_complete` : `task_body_${theme}`} 
        >
          {body}
        </div>
      </div>
      <div 
        className="icon_delete_container"
        onClick={() => deleteTask(id)}
      >
        <AiOutlineClose className='icon_delete'/>
      </div>
    </div>
  )
}

export default Task