import { useSelector } from "react-redux"

const SideBar = () => {
    const steps =['your info','select plan', 'add-ons','summary']

    const step = useSelector(state=>state.step.step)
    
  return (
    <div className="flex flex-col gap-6 side-bar p-8 rounded-lg w-1/3 text-sm sm:flex-row sm:justify-center  sm:w-full sm:h-1/4 sm:rounded-none ">
        {steps.map((item,index)=>(

            <div key={item} className="flex gap-5">
            <span className={`flex justify-center items-center rounded-full w-10 h-10 font-medium border-white border ${step === (index + 1) ? ' bg-pastel-blue text-marine-blue':'text-white'  } `}>{index+1}</span>
            <div className=" uppercase sm:hidden">
                <p className=" text-cool-gray text-sm">STEP {index + 1}</p>
                <b className="text-white font-medium tracking-wide">{item}</b>
            </div>
        </div>
            ))}
    </div>
  )
}

export default SideBar