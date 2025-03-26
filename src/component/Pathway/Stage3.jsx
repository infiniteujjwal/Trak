import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

function Stage3({ onNextClick3 }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    skills: '',
    confidence: '',
    learningStyle: '',
    timeline: ''
  });
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element when the step changes
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentStep]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (error) setError(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAdvance();
    }
  };

  const handleAdvance = () => {
    const isCurrentStepValid = () => {
      if (currentStep === 2) {
        // For radio button step, check if an option is selected
        return formData.learningStyle !== '';
      } else {
        // For text inputs, check if there's a value
        const field = questions[currentStep].name;
        return formData[field].trim() !== '';
      }
    };

    if (isCurrentStepValid()) {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
        setError(false);
      } else {
        // Check if the final step (timeline) is filled before proceeding
        if (formData.timeline.trim() !== '') {
          onNextClick3();
        } else {
          setError(true);
        }
      }
    } else {
      setError(true);
    }
  };

  const learningOptions = [
    "Hands-on projects",
    "Structured courses",
    "Mentorship & coaching",
    "Learning by doing (internships/jobs)",
    "Self-paced online learning"
  ];

  const questions = [
    {
      question: "What are the key skills you already have?",
      type: "text",
      name: "skills"
    },
    {
      question: "How confident do you feel about your career journey right now?",
      type: "text",
      name: "confidence"
    },
    {
      question: "What's your preferred way of learning?",
      type: "radio",
      name: "learningStyle",
      options: learningOptions
    },
    {
      question: "How soon do you want to achieve your career goal?",
      type: "text",
      name: "timeline"
    }
  ];

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep) / questions.length) * 100;

  // Fixed radio button selection handler
  const handleRadioChange = (option) => {
    // First update the form data
    setFormData({
      ...formData,
      learningStyle: option
    });
    
    // Then advance to next step immediately
    // We don't need to check if it was empty before
    setTimeout(() => {
      setCurrentStep(currentStep + 1);
    }, 500);
  };

  return (
    <div className="w-[71.42%] h-[71.42%] bg-white flex flex-col gap-6 items-center justify-between p-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">Let&apos;s get you more</h1>
      
      <div className="w-full mt-4">
        <motion.div
          key={currentStep}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <div className="mb-6">
            <label className={`block mb-3 ${error ? 'text-red-500' : 'text-gray-700'}`}>
              {currentQuestion.question}
              {error && <span className="ml-2">(Required)</span>}
            </label>
            {currentQuestion.type === "text" ? (
              <input
                ref={inputRef}
                type="text"
                name={currentQuestion.name}
                value={formData[currentQuestion.name]}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className={`w-full h-21 border rounded-md py-3 px-4 focus:outline-none  ${
                  error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 '
                }`}
                // placeholder="Type your answer and press Enter"
              />
            ) : (
              <div className="space-y-5 md:space-y-4 lg:space-y-5 w-full border border-gray-300 px-3 sm:px-6 md:px-10 lg:px-13 py-4 sm:py-8 md:py-12 lg:py-15 rounded-lg flex flex-col">
              {currentQuestion.options.map((option, idx) => (
                <div key={idx} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`option-${idx}`}
                    name="learningStyle"
                    value={option}
                    checked={formData.learningStyle === option}
                    onChange={() => handleRadioChange(option)}
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-md border-gray-400 border-1 checked:bg-green-500 checked:border-black appearance-none focus:outline-none hover:border-black cursor-pointer transition-all duration-200"
                  />
                  <label
                    htmlFor={`option-${idx}`}
                    className="text-[#A2A2A2] text-sm sm:text-base md:text-lg px-2 sm:px-3 py-1 sm:py-2 rounded-lg cursor-pointer transition-all duration-200 hover:text-black truncate"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Progress Slider */}
      <div className="w-full max-w-lg h-5 bg-black rounded-full overflow-hidden flex justify-start items-center">
        <motion.div 
          className="h-3 m-1 bg-gray-200 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}

export default Stage3;