
import FromTick from '../../assets/pathway/formtick.svg'

const Stepper = () => {
  return (
    <div className="flex space-x-4 items-start">
      {/* Sidebar */}
      <div className="flex flex-col w-10 h-50 bg-[#D9D9D970] rounded-full justify-between py-1 px-0.3 items-center">
        
     
        <div className="flex flex-col justify-between h-1/2">
            <div className="w-9 h-9 rounded-full flex justify-center items-center bg-[#4bde80] ">
              <div>
                  <img src={FromTick} alt="Completed" width={16} height={16} /> 
              </div>
              
               
            </div>
            <div className="flex w-full  flex-row justify-center ">
                <div className="w-3 h-3 rounded-full bg-[#4A3AFF]">
                
                </div>
            </div>
            
            <div className="flex w-full justify-center items-center">
              <div className="w-3 h-3 rounded-full bg-[#B9B9B9]">
              
              </div>
            </div>
          
            

        </div>
        <div className="w-9 h-9 rounded-full flex justify-center items-center bg-white">
            2
        </div>
      </div>
      
      {/* Content */}
      <div>
        <div>
            <h2 className="text-lg font-normal">Personal Information</h2>
            <div className="flex flex-col gap-1 ">
              <span className="text-[#4A3AFF] text-end">Name</span>
              <span className="text-gray-400 text-end">Other</span>
            </div>
            
        </div>
        <div>
        <h2 className="mt-6 text-lg font-normal">Current Status</h2>
        </div>
        
       
        
      </div>
    </div>
  );
};

export default Stepper;
