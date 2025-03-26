import { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import Person1 from '../../assets/pathway/Person1.svg';
import Person2 from '../../assets/pathway/person2.svg';
import Person3 from '../../assets/pathway/person3.svg';
import Person4 from '../../assets/pathway/person4.svg';
import Tick1 from '../../assets/pathway/tick1.svg';
import Tick2 from '../../assets/pathway/tick2.svg';
import Tick3 from '../../assets/pathway/tick3.svg';
import Tick4 from '../../assets/pathway/tick4.svg';

const StatusCard = ({ title, description, imageSrc, intext, bgColor, isSelected, onSelect, markIcon }) => {
  return (
    <motion.button 
      onClick={onSelect}
      className="group cursor-pointer w-53 outline-none"
      style={{ aspectRatio: '1/1.83' }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Card container with displaced shadow effect */}
      <div className="w-full h-full ">
        {/* Main card that sits on top of shadow */}
        <div 
          className={`w-full h-full rounded-3xl flex flex-col justify-between overflow-hidden ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
          style={{ 
            backgroundColor: '#fcfbfc',
            boxShadow: '12px 12px 0px 0px rgba(0,0,0,1)'
          }}
        >
          <div className='m-2 h-5/7 rounded-3xl flex flex-col gap-2' style={{ backgroundColor: bgColor }}>
            <div className="p-4">
              <div className='w-9 h-9 border-2 border-black rounded-full flex items-center justify-center '>
                <img 
                  src={markIcon} 
                  alt="Selected" 
                  className={` object-cover transition-opacity duration-300 ${isSelected ? 'opacity-100' : 'opacity-0'}`} 
                />
              </div>
            </div>
            
            {/* Text inside card */}
            <div className="px-4 text-start">
              <p className="text-lg font-light">{intext}</p>
            </div>
                            
            {/* Person image */}
            <div className="flex-grow flex items-end justify-center px-4 rounded-3xl w-full h-full">
              <img src={imageSrc} alt={title} width="150" height="150" className="object-contain" />
            </div>
          </div>
                
          {/* Bottom info section */}
          <div className="bg-[#fcfbfc] m-2 h-2/7 rounded-b-2xl w-full flex flex-col justify-center">
            <h3 className="font-bold text-start">{title}</h3>
            <p className="text-gray-600 text-start">{description}</p>
          </div>
        </div>
      </div>
    </motion.button>
  );
};

function Stage2({ onNextClick2 }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  // Calculate constraint values for horizontal drag
  useEffect(() => {
    if (sliderRef.current && containerRef.current) {
      setSliderWidth(sliderRef.current.scrollWidth);
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const statusOptions = [
    { title: 'Student', description: 'Currently studying', imageSrc: Person1, bgColor: '#dbe9fb', intext: 'Student', markIcon: Tick1 },
    { title: 'Working Currently', description: 'Seeking career growth', imageSrc: Person2, bgColor: '#eeedee', intext: 'Great for opportunities', markIcon: Tick2 },
    { title: 'Graduate', description: 'Seeking opportunities', imageSrc: Person3, bgColor: '#ffc6bf', intext: 'Graduate', markIcon: Tick3 },
    { title: 'Career Switcher', description: 'Exploring new fields.', imageSrc: Person4, bgColor: '#fde5d7', intext: 'Career growth', markIcon: Tick4 }
  ];

  const handleSelect = (index) => {
    setSelectedIndex(index);
    // Trigger next stage transition after a short delay for visual feedback
    setTimeout(() => {
      onNextClick2();
    }, 300);
  };

  return(
    <div className="container mx-auto px-4 flex flex-col gap-10">
      <h1 className="text-4xl font-semibold text-center">What&apos;s your status?</h1>
      
      {/* Mobile View with Improved Slider */}
      <div ref={containerRef} className="relative overflow-hidden sm:hidden">
        <motion.div
          ref={sliderRef}
          className="flex gap-6 pb-4 touch-pan-x w-full"
          drag="x"
          dragConstraints={{ 
            right: 0, 
            left: -(sliderWidth - containerWidth) 
          }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
          style={{ 
            overscrollBehaviorX: "contain",
            scrollbarWidth: "none"
          }}
        >
          {statusOptions.map((status, index) => (
            <motion.div key={index} className="flex-shrink-0" style={{ width: '80%', maxWidth: '250px' }}>
              <StatusCard
                title={status.title}
                description={status.description}
                imageSrc={status.imageSrc}
                intext={status.intext}
                bgColor={status.bgColor}
                isSelected={selectedIndex === index}
                onSelect={() => handleSelect(index)}
                markIcon={status.markIcon}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Optional: Add pagination indicators */}
        <div className="flex justify-center gap-2 mt-4 sm:hidden">
          {statusOptions.map((_, index) => (
            <div 
              key={index} 
              className={`h-2 rounded-full transition-all ${selectedIndex === index ? 'w-6 bg-blue-500' : 'w-2 bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop and Tablet */}
      <div className="flex gap-10 flex-row flex-wrap justify-center sm:flex hidden">
        {statusOptions.map((status, index) => (
          <StatusCard
            key={index}
            title={status.title}
            description={status.description}
            imageSrc={status.imageSrc}
            intext={status.intext}
            bgColor={status.bgColor}
            isSelected={selectedIndex === index}
            onSelect={() => handleSelect(index)}
            markIcon={status.markIcon}
          />
        ))}
      </div>
    </div>
  );
}

export default Stage2;