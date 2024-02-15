import thankyou from './assets/icon-thank-you.svg'
const Thankyou = () => {
  return (
    <div className='flex justify-center flex-col items-center h-full text-center p-10'>
        <img src={thankyou} alt="" />
        <h1 className='text-3xl font-bold mt-6 mb-3'>Thank you!</h1>
        <p className='text-cool-gray'> Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default Thankyou