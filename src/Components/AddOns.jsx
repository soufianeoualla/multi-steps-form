import { StrictMode, useState } from "react";
import checkmark from "./assets/icon-checkmark.svg";
import Button from "./Button";
import GobackBtn from "./GobackBtn";
import { useDispatch, useSelector } from "react-redux";
import { stepincrement } from "../Redux/stepSlice";
import { choosenAddOns } from "../Redux/packageSlice";
const AddOns = () => {

  const addOns = [
    {
      title: "Online service",
      desc: "access to multiplayer games",
      price: {
        monthly: 1,
        yearly: 10,
      },
    },
    {
      title: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
    {
      title: "Customizable Profile",
      desc: "Custom theme on your profile",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
  ];

  const [isChecked, setIsChecked] = useState([]);


  const handleChecked = (index) => {
    const checked = isChecked.some((item) => item.index === index);

    if (checked) {
      setIsChecked(isChecked.filter((item) => item.index !== index));
    } else {
      setIsChecked([...isChecked, { index, add_on: addOns[index] }]);
    }
  };

  const dispatch = useDispatch();
  const isYearly = useSelector(state=>state.plan.yearly)

  const handleClick = () => {
    dispatch(stepincrement());
    
    const selectedAddOns = isChecked.map(checked => checked.add_on);
    
    const modifiedAddOns = selectedAddOns.map(addOn => {
      if (isYearly) {
        return {
          ...addOn,
          price: addOn.price.yearly
        };
      } else {
        return {
          ...addOn,
          price: addOn.price.monthly
        };
      }
    });
    
    dispatch(choosenAddOns(modifiedAddOns));
  }
  
  
  

  return (
    <div className='relative h-full'>
      <h1 className='text-3xl text-marine-blue font-bold'>Pick add-ons</h1>
      <p className='mt-1 text-cool-gray'>
        Add-ons help enhance your gaming experience.
      </p>
      <div className='grid gap-4 mt-8 sm:mt-5'>
        {addOns.map((item, index) => (
          <div
            onClick={() => handleChecked(index)}
            className={`p-4 border border-light-gray flex items-center relative rounded-lg hover:border-purplish-blue cursor-pointer ${
              isChecked.some((item) => item.index === index) &&
              "bg-pastel-blue bg-opacity-20 border-purplish-blue"
            } sm:p-3 `}
            key={item.title}
          >
            <div
              className={`checkbox w-5 h-5 border border-light-gray mr-5 cursor-pointer rounded-md  flex justify-center items-center ${
                isChecked.some((item) => item.index === index) &&
                "bg-purplish-blue"
              } sm:mr-3 ` }
            >
              <img src={checkmark} alt='' />
            </div>
            <div>
              <b className=' text-marine-blue'>{item.title} </b>
              <p className=' text-cool-gray'> {item.desc}</p>
            </div>
            <span className=' absolute right-4 text-purplish-blue'>
              +${isYearly ? `${item.price.yearly}/yr`:`${item.price.monthly}/mo`}
            </span>
          </div>
        ))}
      </div>
      <div onClick={handleClick}>
        <Button value={"Next Step"} bg={"bg-marine-blue"} />
      </div>
      <GobackBtn />
    </div>
  );
};

export default AddOns;
