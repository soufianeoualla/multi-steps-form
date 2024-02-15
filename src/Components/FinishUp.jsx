import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import GobackBtn from "./GobackBtn";
import { changeStep, stepincrement } from "../Redux/stepSlice";
import { stepChenged } from "../Redux/packageSlice";

const FinishUp = () => {
    const selectedPlans = useSelector(state => state.package.plan);
    const addOns = useSelector(state => state.package.addOns);
    const totalPrice = useSelector(state=>state.package.totalPrice)
    const yearly = selectedPlans.map(item => item.yearly)

    console.log(yearly)
    const dispatch = useDispatch()

    const handleClick = ()=>{
        dispatch(
            stepincrement()
        )

    }
    const handleChangeButton = () => {
       dispatch(changeStep())
       dispatch(stepChenged())
    }
    

    return (
        <div className="relative h-full">
            <h1 className='text-3xl text-marine-blue font-bold'>Finishing up</h1>
            <p className='mt-1 text-cool-gray'>
                Double-check everything looks OK before confirming
            </p>
            <div className="grid bg-pastel-blue bg-opacity-15 p-5 rounded-lg mt-8 sm:mt-5">
                <div className="selected-plan">
                    {selectedPlans.map(plan => (
                        <div className="flex justify-between items-center border-b pb-5 border-light-gray" key={plan.title}>
                            <div className="flex flex-col items-start capitalize">
                                <b>{plan.title} ({yearly ?'Yearly':'Monthly'}) </b>
                                <button
                                onClick={handleChangeButton}
                                 className="p-0 underline text-cool-gray hover:text-purplish-blue">Change</button>
                            </div>
                            <span className="font-bold text-marine-blue">${plan.price}{yearly ?'/yr':'/mo'} </span> 
                        </div>
                    ))}
                    
                </div>

                <div className="addons">
                        {addOns.map((item) => (
                            <div key={item}>
                                {item.map(add_on=>(

                               <div key={add_on} className="flex justify-between mt-4 text-cool-gray">
                                <p>{add_on.title} </p>
                                <p className=" text-marine-blue">+{add_on.price}{yearly ?'/yr':'/mo'} </p>
                               </div>
                                ))}

                            </div>
                        ))}
                    </div>

                    
            </div>
            <div className="total p-4 mt-4 text-cool-gray flex justify-between">
                        <p>Total (per month) </p>
                        <h2 className="text-xl font-bold text-purplish-blue ">+{totalPrice}{yearly ?'/yr':'/mo'}  </h2>
                    </div>

                    <div onClick={handleClick}>
                        <Button value={'Confirm'} bg={'bg-purplish-blue hover:bg-opacity-45 '}/>
                    </div>
                    <GobackBtn/>
        </div>
    );
};

export default FinishUp;
