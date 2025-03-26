import AIModel from '../../assets/AI_Model.svg'

const Stage5 = () => {
  return (
    <div className="flex w-full  flex-col md:flex-row items-center justify-center py-8 px-10 md:px-8 lg:px-16 h-full ">
      <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-8">
        <div className="space-y-4">
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-black">
            Your Personal AI
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-black">
            Mentor is in
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-black">
            training...
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#39DC8E]">
            Launching soon.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={AIModel}
          alt="Ai-model"
          className="max-w-full max-h-[500px] object-contain"
        />
      </div>
    </div>
  );
};

export default Stage5;