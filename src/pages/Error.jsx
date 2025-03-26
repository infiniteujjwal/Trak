import React, { useEffect } from 'react'
import Button from '../component/Button'
import { useState } from 'react'
import { div } from 'motion/react-client'

function ErrorPage() {

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 3000);
  }, [])
  return (
    <>
      {
        loader ? (
          <div className='flex  justify-center  items-center justify-items-center h-[85vh] '>         
            <div class="text-center">
              <div
                class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#39DC8E] mx-auto"
              ></div>
            </div>
          </div>
        ) : (
          <section>
            <div className='w-[50%] mx-auto  my-16 max-md:w-full max-md:px-5 max-md:mb-60 max-md:my-5 '>
              <h1 className='text-4xl max-md:text-2xl '>Oops! We’re Not Live in Your Location Yet 🚧</h1>
              <p className='text-lg  max-md:text-sm mt-6 max-md:mt-3'>Looks like you’re trying to access Trak from outside Rajasthan, India. We’re currently rolling out our AI-powered skill mentor exclusively in Rajasthan – but don’t worry, we’re expanding soon to help more people upskill and reach their career goals!</p>
              <p className='text-lg  max-md:text-sm mt-6 max-md:mt-3'>✨ Want to be the first to know when we launch in your area? </p>
              <Button txt="Sign up for Early Access" 
              className='!mt-5'
              navigateTo='pathway'/>
            </div>
            <footer className=' bg-black py-10 px-10 max-md:px-5 max-md:py-5 fixed bottom-0 w-full '>
              <div className='flex justify-between items-center mt-10 max-md:mt-5 max-md:flex-col'>
                <p className='text-sm text-white'>© 2025 — Copyright</p>

                <span className='flex justify-between my-5'>
                  <span className='bg-white inline-block text-black rounded-md px-2 py-1 max-md:text-lg text-2xl mx-2.5 rotate-6 max-md:w-fit'
                  >step</span>

                  <span className='bg-white inline-block text-black rounded-md px-2 py-1.5 text-2xl max-md:text-lg mx-2.5 -rotate-6 max-md:w-fit'
                  >destination</span>
                </span>
                <div className='flex justify-between text-white'>
                  <p className='mr-3.5 cursor-pointer hover:text-green-600'>FI</p>
                  <p className='mr-3.5 cursor-pointer hover:text-green-600 '>HI</p>
                  <p className='mr-3.5 cursor-pointer hover:text-green-600'>SWE</p>
                  <p className='mr-3.5 cursor-pointer hover:text-green-600'>EN</p>
                </div>
              </div>
              <hr className=' border-8 border-white rounded-sm mt-6' />
            </footer>
          </section>
        )
      }
    </>
  )
}

export default ErrorPage