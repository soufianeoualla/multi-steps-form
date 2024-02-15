import { useSelector } from "react-redux";
import "./App.css";
import PersonalInfo from "./Components/PersonalInfo";
import SelectPlan from "./Components/SelectPlan";
import SideBar from "./Components/SideBar";
import AddOns from "./Components/AddOns";
import FinishUp from "./Components/FinishUp";
import Thankyou from "./Components/Thankyou";

function App() {
  const step = useSelector((state) => state.step.step);

  return (
    <>
      <div className=' flex rounded-xl bg-white p-4   h-[600px] w-[1000px] lg:w-[800px] lg:h-[550px] md:w-[700px] md:h-[500px] sm:h-screen sm:w-screen sm:p-0 sm:grid sm:relative sm:bg-magnolia '>
        <SideBar />
        <div className=' p-6 w-[56%] ml-20 md:p-4 md:text-sm sm:bg-white rounded-lg sm:w-[90%] relative sm:absolute sm:top-[15%] left-[-3%]  s '>
          {step === 1 && <PersonalInfo />}
          {step === 2 && <SelectPlan />}
          {step === 3 && <AddOns />}
          {step === 4 && <FinishUp />}
          {step === 5 && <Thankyou />}
        </div>
        <footer className=" hidden sm:block w-screen h-[70px] bg-white fixed bottom-0 z-0">

        </footer>
      </div>
    </>
  );
}

export default App;
