import arcade from "./assets/icon-arcade.svg";
import advanced from "./assets/icon-advanced.svg";
import pro from "./assets/icon-pro.svg";
import { useState } from "react";
import Button from "./Button";
import GobackBtn from "./GobackBtn";
import { useDispatch, useSelector } from "react-redux";
import { stepincrement } from "../Redux/stepSlice";
import { setYearly } from "../Redux/planTypeSlice";
import { choosenPlan } from "../Redux/packageSlice";

const SelectPlan = () => {
  const plans = [
    {
      title: "arcade",
      img: arcade,
      price: {
        monthly: 9,
        yearly: 90,
      },
    },
    {
      title: "advanced",
      img: advanced,
      price: {
        monthly: 12,
        yearly: 120,
      },
    },
    {
      title: "pro",
      img: pro,
      price: {
        monthly: 15,
        yearly: 150,
      },
    },
  ];
  const isYearly = useSelector(state=>state.plan.yearly)

  const[plan,setplan]=useState(0)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(stepincrement());

    const selectedplan = plans.map(plan => {
        if (isYearly) {
            return {
                ...plan,
                price: plan.price.yearly,
                yearly:true
            };
        } else {
          return {
            ...plan,
            price: plan.price.monthly,
            yearly:true
        };
        }
    });

    dispatch(choosenPlan(selectedplan[plan]));
}

  return (
    <div className="h-full relative" >
      <h1 className='text-3xl text-marine-blue font-bold'>Select your plan</h1>
      <p className='mt-1 text-cool-gray'>
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex mt-8 justify-between items-center gap-4 sm:flex-col sm:mt-5 sm:gap-3">
        {plans.map((item,index) => (
          <div onClick={()=>setplan(index)}
           key={item.title}
           className={` cursor-pointer p-4 flex flex-col justify-between items-start w-1/3 border  rounded-lg ${plan === index ? 'border-purplish-blue bg-pastel-blue bg-opacity-10 ':'border-light-gray'} sm:w-full sm:flex-row sm:items-start sm:justify-start sm:gap-4 `}>
            <img src={item.img} alt='plan' />
            <div className="mt-10 sm:m-0">
                <b className=" capitalize text-marine-blue">{item.title} </b>
                <p className=" text-cool-gray">${isYearly ?` ${item.price.yearly}/yr `  :` ${item.price.monthly}/mo`} </p>
                {isYearly && <span className=" text-marine-blue text-sm font-medium" >2 months free </span> }
            </div>
          </div>
        ))}
      </div>
        <div className=" flex justify-center items-center gap-4 mt-8 p-3 bg-magnolia rounded-lg sm:mt-5" >
            <span>Monthly</span>
            <div onClick={()=>dispatch(setYearly())}
            className="toggle cursor-pointer  bg-marine-blue w-10 h-5 rounded-3xl relative">
                <div className={`toggle-circle bg-white h-[14px] w-[14px] rounded-full absolute top-[2.5px]  ${isYearly ? 'right-1    ':'left-1  '} `}></div>
            </div>
            <span>Yearly</span>


        </div>
        
        <div className="flex">
          <div onClick={handleClick}>

        <Button   value={"Next Step"} bg={"bg-marine-blue"} />
          </div>
            <GobackBtn/>
        </div>
    </div>
  );
};

export default SelectPlan;
