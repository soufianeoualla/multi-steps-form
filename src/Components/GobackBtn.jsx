import { useDispatch } from "react-redux"
import { stepdecrement } from "../Redux/stepSlice"

const GobackBtn = () => {
  const dispatch = useDispatch()
  return (
    <button 
    onClick={()=>
    dispatch(stepdecrement())}
     className="absolute bottom-0 left-0 py-3 text-cool-gray font-semibold sm:fixed sm:bottom-3 sm:left-5 sm:z-10">
        Go Back
    </button>
  )
}

export default GobackBtn