import { useFormik } from "formik";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { stepincrement } from "../Redux/stepSlice";

const PersonalInfo = () => {

  const dispatch =useDispatch()



  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.phone) {
      errors.phone = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validate,
    onSubmit: () => {
      dispatch(
        stepincrement()
      )
      
      
    },
  });
  return (
    <div className='felx flex-col justify-between relative h-full '>
      <h1 className='text-3xl text-marine-blue font-bold'>Personal Info</h1>
      <p className='mt-1 text-cool-gray'>
        Please provide your name, email address, and phone number.
      </p>

      <form onSubmit={formik.handleSubmit}
      action='' className='flex flex-col gap-5 mt-8 sm:mt-5 '>
        <label htmlFor='name' className='flex flex-col gap-1 '>
          <div className="flex justify-between items-center">
            <span className=' text-marine-blue capitalize'>name</span>
            {formik.errors.name && <span className=" font-semibold text-strawberry-red text-sm"> {formik.errors.name} </span>}
          </div>

          <input
            className={`border p-3 rounded-lg focus:border-purplish-blue outline-none ${formik.errors.name ? 'border-strawberry-red ':'border-light-gray'} `}
            value={formik.values.name}
            onChange={formik.handleChange}
            id='name'
            type='text'
            name='name'
            placeholder='e.g.Stephen King'
          />
        </label>
        <label htmlFor='email' className='flex flex-col gap-1 '>
          <div className="flex justify-between items-center">
            <span className=' text-marine-blue capitalize'>email Address</span>
            {formik.errors.email && <span className=" font-semibold text-strawberry-red text-sm"> {formik.errors.email} </span>}
          </div>

          <input
            className={`border p-3 rounded-lg focus:border-purplish-blue outline-none ${formik.errors.email ? 'border-strawberry-red ':'border-light-gray'} `}
            value={formik.values.email}
            onChange={formik.handleChange}
            type='email'
            name='email'
            id='email'
            placeholder='e.g. stephenking@gmail.com'
          />
        </label>

        <label htmlFor='phone' className='flex flex-col gap-1 '>
          <div className="flex justify-between items-center">
            <span className=' text-marine-blue capitalize'>phone Number</span>
            {formik.errors.phone && <span className=" font-semibold text-strawberry-red text-sm"> {formik.errors.phone} </span>}
          </div>

          <input
            className={`border p-3 rounded-lg focus:border-purplish-blue outline-none ${formik.errors.phone ? 'border-strawberry-red ':'border-light-gray'} `}
            value={formik.values.phone}
            onChange={formik.handleChange}
            type='tel'
            name='phone'
            id='phone'
            placeholder='e.g +1 234 567 890'
          />
        </label>
      <Button 
        value={"Next Step"} bg={"bg-marine-blue"} />
      </form>
    </div>
  );
};

export default PersonalInfo;
