import React, { useEffect, useState } from "react";
import smoke4 from "../../assets/smoke4.svg";
import smoke45 from "../../assets/smoke4.5.svg";
import smoke46 from "../../assets/smoke4.6.svg";
import smoke5 from "../../assets/smoke5.svg";
import smoke55 from "../../assets/smoke5.5.svg";
import smoke57 from "../../assets/smoke5.7.svg";
import smoke58 from "../../assets/smoke5.8.svg";
import smoke59 from "../../assets/smoke5.9.svg";
import smoke6 from "../../assets/smoke6.svg";
import smoke61 from '../../assets/smoke6.1.svg' 
import smoke62 from '../../assets/smoke6.2.svg' 

const SmokeEmulsion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  // Define the sequence of smoke images in the correct order
  const smokeSequence = [
    { id: "smoke4", src: smoke4 },
    { id: "smoke45", src: smoke45 },
    { id: "smoke46", src: smoke46 },
    { id: "smoke5", src: smoke5 },
    { id: "smoke55", src: smoke55 },
    { id: "smoke57", src: smoke57 },
    { id: "smoke58", src: smoke58 },
    { id: "smoke59", src: smoke59 },
    { id: "smoke6", src: smoke6 },
    { id: "smoke61", src: smoke61 },
    { id: "smoke62", src: smoke62 },
  ];

  useEffect(() => {
    // Transition to the next smoke image every 2 seconds
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (prevIndex < smokeSequence.length - 1) {
          return prevIndex + 1; // Move to the next image
        } else {
          clearInterval(interval); // Stop the interval at the last image
          setIsVisible(false); // Hide the component immediately
          return prevIndex;
        }
      });
    }, 100); // Adjust the delay as needed

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) {
    return null;
  }
  return (
    <div className="relative w-screen h-screen overflow-hidden fc-loader_overlay-fill z-50">
      {/* Black Background */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-100 ${
          activeIndex === smokeSequence.length - 1 ? "opacity-0" : "opacity-100"
        }`}
      ></div>

      {/* Smoke Images */}
      <div className="absolute inset-0">
        {smokeSequence.map((smoke, index) => (
          <img
            key={smoke.id}
            src={smoke.src}
            alt={smoke.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-100 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              animation:
                index === activeIndex
                  ? "fadeIn 1s ease-in-out forwards"
                  : index === activeIndex - 1
                  ? "fadeOut 1s ease-in-out forwards"
                  : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SmokeEmulsion;