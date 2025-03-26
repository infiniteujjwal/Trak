function Stage4({onNextClick4}) {
  
  return (
   
        <div className="flex flex-col gap-10 justify-center items-center h-4/7 ">
          <div className="flex flex-col justify-start">
              <div>
                <h1 className="text-[3rem] font-semibold  ">Your Profie</h1>
                <h1 className="text-[3rem] font-semibold  ">mathes</h1>
              </div>
             
              <div className="text-[8rem] font-bold ">66%</div>
              <div className="text-[1.67rem] font-semibold ">with this career goal</div>

          </div>
         {/* Buttons Section */}
         <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 w-full px-4">
  {/* Apply for Job Button */}
  <button 
    className="bg-gray-300 border-[1px] border-black py-2.5 px-7 text-sm mt-5 sm:mt-10 rounded-xl btnShadow cursor-pointer w-full sm:w-auto">
    Apply for job
  </button>
          
  {/* Career Path Button - Desktop */}
  <button 
    className="bg-white border-[1px] border-black py-2.5 px-7 text-sm mt-5 sm:mt-10 rounded-xl btnShadow cursor-pointer w-full sm:w-auto hidden sm:block"
    onClick={onNextClick4}>
    <span>Upskill with</span><br />
    <span>My AI Mentor</span>
    
  </button>
  
  {/* Career Path Button - Mobile */}
  <button 
    className="bg-white border-[1px] border-black py-2.5 px-7 text-sm mt-5 sm:mt-10 rounded-xl btnShadow cursor-pointer w-full sm:hidden"
    onClick={onNextClick4}>
    Upskill with My AI Mentor
    
  </button>
</div>
             
        </div>
  
  );
}


export default Stage4;


// <div className="text-center w-full max-w-[600px]">
// <h1 className="text-3xl md:text-3xl font-semibold  leading-tight">
//   Your profile 
// </h1>
// <h1 className="text-3xl md:text-3xl font-semibold  leading-tight">
//  matches
// </h1>

// <div className="text-[8rem] font-bold my-10">66%</div>

// <div className="text-2xl font-semibold mb-10">with this career goal</div>

// {/* Buttons Section */}
//   <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 w-full px-4">
// {/* Apply for Job Button */}
//       <button 
//         className="bg-white border-[1px] border-black py-2.5 px-7 text-sm mt-5 sm:mt-10 rounded-xl btnShadow cursor-pointer w-full sm:w-auto">
//         Apply for job
//       </button>
                
//       {/* Career Path Button */}
//       <button 
//         className="bg-white border-[1px] border-black py-2.5 px-7 text-sm mt-3 sm:mt-10 rounded-xl btnShadow cursor-pointer w-full sm:w-auto">
//         Upskill & Generate My Pathway
//       </button>
//   </div>
// </div>