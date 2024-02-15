
const Button = ({value,bg}) => {

  return (
    <button 
     className={`${bg} py-3 px-6 rounded-lg text-white absolute right-0 bottom-0 sm:fixed sm:bottom-3 sm:right-5 sm:rounded-md sm:px-4 sm:z-10 `} type="submit">
        {value}
    </button>
  )
}

export default Button