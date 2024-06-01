import { useContext } from "react"
import { FilterContext } from "../context/FilterContext"
import AllTasks from "./AllTasks"
import LeftTasks from "./LeftTasks"
import DoneTasks from "./DoneTasks"

const FilterTask = () => {

  const { display } = useContext(FilterContext)
  
  const filterFunction = (display) => {
    if (display.total) {
      return <AllTasks />
    }
    if (display.done) {
      return <DoneTasks />
    }
    if (display.left) {
      return <LeftTasks />
    }
  }

  return (
    <>
      {filterFunction(display)}
    </>
  )
}

export default FilterTask