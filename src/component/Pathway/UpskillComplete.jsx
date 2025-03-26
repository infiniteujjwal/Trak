import Tickend from '../../assets/pathway/tickend.svg'

const UpskillComplete = () => {
  return (
   
      <div className="bg-[#ECFDE7] w-[75%] min-h-[65%] rounded-lg p-4 sm:p-6 md:p-8   text-center flex flex-col justify-center items-center gap-8">
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="bg-green-500 rounded-full p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
            <img src={Tickend} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" alt="Completion checkmark" />
          </div>
        </div>
        <h1 className="text-green-500 text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">
          Upskill Pathway complete!
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl md:text-2xl max-w-xs sm:max-w-lg md:max-w-2xl mx-auto">
          The track is set, the pathway is ready—it&apos;s time to take the first step toward your success with TRAK!
        </p>
      </div>
    
  );
};

export default UpskillComplete;