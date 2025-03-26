import React from 'react'

function Footer() {
  return (
    <div className = 'bg-black py-16 px-14 w-full max-md:px-5 max-md:py-5'>
        <h1 className=' w-[60%] max-md:w-fit max-md:text-xl text-center mx-auto text-white text-6xl font-semibold'>
        Your dream career isn’t a faraway  
        <span className='bg-white inline-block text-black rounded-md px-2  py-1.5 max-md:px-1 text-3xl max-md:text-sm mx-2.5 -rotate-6'
        >destination</span>
         it’s a journey. Trak makes sure you’re on the right path, every 
         <span className='bg-white inline-block text-black rounded-md px-2 py-1 text-3xl mx-2.5 rotate-6  max-md:text-sm'
        >step</span>
          of the way
        </h1>
        <div className='flex justify-between mt-28 max-md:flex-col'>
            <p className='text-sm text-white max-md:hidden'>© 2025 — Copyright</p>
             <div className='flex justify-between text-white'>
                <p className='mr-3.5 cursor-pointer hover:text-green-600'>HI</p>
                <p className='mr-3.5 cursor-pointer hover:text-green-600 '>FI</p>
                <p className='mr-3.5 cursor-pointer hover:text-green-600'>SWE</p>
                <p className='mr-3.5 cursor-pointer hover:text-green-600'>EN</p>
             </div>
        </div>
     
   
       <hr className=' border-8 border-white rounded-sm mt-6'/>
    </div>
  )
}

export default Footer