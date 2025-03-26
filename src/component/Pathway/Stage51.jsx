import { useState, useEffect, useRef } from 'react';
import Number1 from '../../assets/pathway/1.svg';
import Number2 from '../../assets/pathway/2.svg';
import Number3 from '../../assets/pathway/3.svg';
import Number4 from '../../assets/pathway/4.svg';
import Number5 from '../../assets/pathway/5.svg';

function Stage5() {
  const [activeStep, setActiveStep] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  
  const stepsData = [
    { number: "1", title: "Job", imagelink: Number5 },
    { number: "2", title: "Advance Internship", imagelink: Number4 },
    { number: "3", title: "Advanced Courses", imagelink: Number3 },
    { number: "4", title: "Intermediate Courses", imagelink: Number2 },
    { number: "5", title: "Basic Courses", imagelink: Number1 }
  ];
  
  // Calculate positions for each step and goal
  const calculatePositions = () => {
    const containerWidth = containerRef.current?.offsetWidth || 800;
    const containerHeight = isMobile ? 900 : 700;
    
    if (isMobile) {
      // Vertical layout for mobile
      const stepPositions = stepsData.map((step, index) => ({
        ...step,
        x: containerWidth / 2,
        y: 150 + index * 140,
        opacity: animationProgress > index * 0.2 ? Math.min(1, (animationProgress - index * 0.2) * 5) : 0,
        translateX: animationProgress > index * 0.2 ? 0 : -50
      }));
      
      const goalPosition = {
        x: containerWidth / 2,
        y: 350,
        opacity: animationProgress > 0.8 ? Math.min(1, (animationProgress - 0.8) * 5) : 0,
        scale: animationProgress > 0.8 ? Math.min(1, 0.8 + (animationProgress - 0.8)) : 0.8
      };
      
      return { stepPositions, goalPosition, containerHeight };
    } else {
      // Left side layout for desktop (semi-circle on the left of UI Designer)
      const centerX = containerWidth * 0.65;
      const centerY = 350;
      const radius = 300;
      
      const stepPositions = stepsData.map((step, index) => {
        // Distribute steps in an arc on the left side of the center
        const angle = Math.PI / 1.5 + (index * (Math.PI / 1.5) / (stepsData.length - 1));
        return {
          ...step,
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
          angle,
          opacity: animationProgress > index * 0.15 ? Math.min(1, (animationProgress - index * 0.15) * 5) : 0,
          translateX: animationProgress > index * 0.15 ? 0 : -50
        };
      });
      
      const goalPosition = {
        x: centerX,
        y: centerY,
        opacity: animationProgress > 0.8 ? Math.min(1, (animationProgress - 0.8) * 5) : 0,
        scale: animationProgress > 0.8 ? Math.min(1, 0.8 + (animationProgress - 0.8)) : 0.8
      };
      
      return { stepPositions, goalPosition, containerHeight };
    }
  };
  
  // Draw connecting lines on canvas with animation
  const drawConnections = (ctx, stepPositions, goalPosition) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    stepPositions.forEach((step, index) => {
      // Only draw lines for steps that have started to appear
      if (step.opacity > 0) {
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = '#e5e7eb';
        ctx.lineWidth = 2;
        ctx.globalAlpha = Math.min(1, animationProgress / (index * 0.15 + 0.3));
        
        // Get points for line
        const startX = step.x;
        const startY = step.y;
        const endX = goalPosition.x;
        const endY = goalPosition.y;
        
        // Calculate how much of the line to draw based on animation
        const lineProgress = Math.max(0, Math.min(1, (animationProgress - index * 0.15) * 2));
        
        if (lineProgress > 0) {
          ctx.moveTo(startX, startY);
          
          // Calculate point along the line
          const currentX = startX + (endX - startX) * lineProgress;
          const currentY = startY + (endY - startY) * lineProgress;
          
          ctx.lineTo(currentX, currentY);
          ctx.stroke();
        }
      }
    });
    
    // Reset global alpha
    ctx.globalAlpha = 1;
  };

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkViewport();
    window.addEventListener('resize', checkViewport);
    
    return () => window.removeEventListener('resize', checkViewport);
  }, []);
  
  // Start animation when component mounts
  useEffect(() => {
    // Animation timing function
    const startTime = performance.now();
    const animationDuration = 3000; // 3 seconds for full animation
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / animationDuration);
      
      setAnimationProgress(progress);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { stepPositions, goalPosition, containerHeight } = calculatePositions();
    
    // Set canvas dimensions
    canvas.width = containerRef.current.offsetWidth;
    canvas.height = containerHeight;
    
    // Draw the connections
    drawConnections(ctx, stepPositions, goalPosition);
    
    // Force re-render with updated positions
    setPositions({ stepPositions, goalPosition, containerHeight });
    
  }, [isMobile, containerRef.current?.offsetWidth, animationProgress]);
  
  const [positions, setPositions] = useState({ 
    stepPositions: [], 
    goalPosition: { x: 0, y: 0 },
    containerHeight: 700
  });
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !canvasRef.current) return;
      
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const { stepPositions, goalPosition, containerHeight } = calculatePositions();
      
      // Update canvas dimensions
      canvas.width = containerRef.current.offsetWidth;
      canvas.height = containerHeight;
      
      // Redraw connections
      drawConnections(ctx, stepPositions, goalPosition);
      
      // Update positions state
      setPositions({ stepPositions, goalPosition, containerHeight });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, animationProgress]);
  
  return (
    <div className="w-full h-full flex justify-center items-center p-4">
      <div 
        ref={containerRef}
        className="w-full max-w-4xl mx-auto relative p-4"
        style={{ height: `${positions.containerHeight}px` }}
      >
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 transition-opacity duration-500"
            style={{ opacity: animationProgress > 0 ? Math.min(1, animationProgress * 3) : 0 }}>
          Upskill & Generate My Pathway
        </h1>
        
        <div className="relative w-full h-full flex justify-center items">
          {/* Canvas for drawing connecting lines */}
          <canvas 
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full"
            style={{ zIndex: 0 }}
          />
          
          {/* UI Designer Box */}
          <div 
            className="absolute bg-white border-[1px] border-black py-2 px-4 md:py-2.5 md:px-7 text-sm md:text-base rounded-xl shadow-md cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-300"
            style={{ 
              top: positions.goalPosition.y,
              left: positions.goalPosition.x,
              boxShadow: '4px 4px 0px rgba(0,0,0,0.2)',
              opacity: positions.goalPosition.opacity,
              transform: `translate(-50%, -50%) scale(${positions.goalPosition.scale})`
            }}
          >
            <h3 className="text-lg md:text-xl font-bold">UI Designer</h3>
          </div>
          
          {/* Step Components */}
          {positions.stepPositions.map((step, index) => (
            <div 
              key={index}
              className="absolute flex flex-row items-center gap-2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
              style={{ 
                top: step.y,
                left: step.x,
                opacity: step.opacity,
                transform: `translate(-50%, -50%) translateX(${step.translateX}px)`
              }}
              onMouseEnter={() => setActiveStep(step.number)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <img 
                src={step.imagelink} 
                alt={`Step ${step.number}`}
                className="w-8 h-8 md:w-12 md:h-12" 
              />
              <span className={`text-sm md:text-lg font-semibold ${activeStep === step.number ? "text-blue-500" : ""}`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stage5;


// import { useState, useEffect, useRef } from 'react';
// import Number1 from '../../assets/pathway/1.svg';
// import Number2 from '../../assets/pathway/2.svg';
// import Number3 from '../../assets/pathway/3.svg';
// import Number4 from '../../assets/pathway/4.svg';
// import Number5 from '../../assets/pathway/5.svg';

// function () {
//   const [activeStep, setActiveStep] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isTablet, setIsTablet] = useState(false);
//   const [animationProgress, setAnimationProgress] = useState(0);
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);
//   const animationRef = useRef(null);
  
//   const stepsData = [
//     { number: "1", title: "Basic Courses", imagelink: Number1 },
//     { number: "2", title: "Intermediate Courses", imagelink: Number2 },
//     { number: "3", title: "Advanced Courses", imagelink: Number3 },
//     { number: "4", title: "Advance Internship", imagelink: Number4 },
//     { number: "5", title: "Job", imagelink: Number5 }
//   ];
  
//   // Calculate positions for each step and goal
//   const calculatePositions = () => {
//     const containerWidth = containerRef.current?.offsetWidth || 800;
//     const containerHeight = isMobile ? 900 : (isTablet ? 800 : 700);
    
//     if (isMobile) {
//       // Vertical layout for mobile - with better spacing
//       const goalPosition = {
//         x: containerWidth / 2,
//         y: 180,
//         opacity: 1, // Always visible, no animation
//         scale: 1
//       };
      
//       const stepPositions = stepsData.map((step, index) => ({
//         ...step,
//         x: containerWidth / 2, 
//         y: goalPosition.y + 120 + index * 120, // Position below the goal with proper spacing
//         opacity: animationProgress > index * 0.2 ? Math.min(1, (animationProgress - index * 0.2) * 5) : 0,
//         translateX: animationProgress > index * 0.2 ? 0 : -20 // Less movement for mobile
//       }));
      
//       return { stepPositions, goalPosition, containerHeight };
//     } else if (isTablet) {
//       // Modified layout for tablets - slightly compressed
//       const centerX = containerWidth * 0.55; // Shifted slightly left
//       const centerY = 300;
//       const radius = Math.min(240, containerWidth * 0.35); // Responsive radius
      
//       const goalPosition = {
//         x: centerX,
//         y: centerY,
//         opacity: 1, // Always visible, no animation
//         scale: 1
//       };
      
//       const stepPositions = stepsData.map((step, index) => {
//         // Distribute steps in an arc on the left side of the center for tablet
//         const angle = Math.PI * 0.8 + (index * (Math.PI * 0.6) / (stepsData.length - 1));
//         return {
//           ...step,
//           x: centerX + Math.cos(angle) * radius,
//           y: centerY + Math.sin(angle) * radius,
//           angle,
//           opacity: animationProgress > index * 0.15 ? Math.min(1, (animationProgress - index * 0.15) * 5) : 0,
//           translateX: animationProgress > index * 0.15 ? 0 : -30
//         };
//       });
      
//       return { stepPositions, goalPosition, containerHeight };
//     } else {
//       // Left side layout for desktop (semi-circle on the left of UI Designer)
//       const centerX = containerWidth * 0.65;
//       const centerY = 350;
//       const radius = Math.min(300, containerWidth * 0.4); // Responsive radius
      
//       const goalPosition = {
//         x: centerX,
//         y: centerY,
//         opacity: 1, // Always visible, no animation
//         scale: 1
//       };
      
//       const stepPositions = stepsData.map((step, index) => {
//         // Distribute steps in an arc on the left side of the center
//         const angle = Math.PI * 0.8 + (index * (Math.PI * 0.6) / (stepsData.length - 1));
//         return {
//           ...step,
//           x: centerX + Math.cos(angle) * radius,
//           y: centerY + Math.sin(angle) * radius,
//           angle,
//           opacity: animationProgress > index * 0.15 ? Math.min(1, (animationProgress - index * 0.15) * 5) : 0,
//           translateX: animationProgress > index * 0.15 ? 0 : -50
//         };
//       });
      
//       return { stepPositions, goalPosition, containerHeight };
//     }
//   };
  
//   // Draw connecting lines on canvas with animation
//   const drawConnections = (ctx, stepPositions, goalPosition) => {
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
//     stepPositions.forEach((step, index) => {
//       // Only draw lines for steps that have started to appear
//       if (step.opacity > 0) {
//         ctx.beginPath();
//         ctx.setLineDash([5, 5]);
//         ctx.strokeStyle = '#e5e7eb';
//         ctx.lineWidth = 2;
//         ctx.globalAlpha = Math.min(1, animationProgress / (index * 0.15 + 0.3));
        
//         // Get points for line
//         const startX = step.x;
//         const startY = step.y;
//         const endX = goalPosition.x;
//         const endY = goalPosition.y;
        
//         // Calculate how much of the line to draw based on animation
//         const lineProgress = Math.max(0, Math.min(1, (animationProgress - index * 0.15) * 2));
        
//         if (lineProgress > 0) {
//           ctx.moveTo(startX, startY);
          
//           // Calculate point along the line
//           const currentX = startX + (endX - startX) * lineProgress;
//           const currentY = startY + (endY - startY) * lineProgress;
          
//           ctx.lineTo(currentX, currentY);
//           ctx.stroke();
//         }
//       }
//     });
    
//     // Reset global alpha
//     ctx.globalAlpha = 1;
//   };

//   useEffect(() => {
//     const checkViewport = () => {
//       const width = window.innerWidth;
//       setIsMobile(width < 640); // Mobile breakpoint
//       setIsTablet(width >= 640 && width < 1024); // Tablet breakpoint
//     };
    
//     checkViewport();
//     window.addEventListener('resize', checkViewport);
    
//     return () => window.removeEventListener('resize', checkViewport);
//   }, []);
  
//   // Start animation when component mounts
//   useEffect(() => {
//     // Animation timing function
//     const startTime = performance.now();
//     const animationDuration = 3000; // 3 seconds for full animation
    
//     const animate = (currentTime) => {
//       const elapsed = currentTime - startTime;
//       const progress = Math.min(1, elapsed / animationDuration);
      
//       setAnimationProgress(progress);
      
//       if (progress < 1) {
//         animationRef.current = requestAnimationFrame(animate);
//       }
//     };
    
//     animationRef.current = requestAnimationFrame(animate);
    
//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, []);
  
//   useEffect(() => {
//     if (!containerRef.current || !canvasRef.current) return;
    
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     const { stepPositions, goalPosition, containerHeight } = calculatePositions();
    
//     // Set canvas dimensions
//     canvas.width = containerRef.current.offsetWidth;
//     canvas.height = containerHeight;
    
//     // Draw the connections
//     drawConnections(ctx, stepPositions, goalPosition);
    
//     // Force re-render with updated positions
//     setPositions({ stepPositions, goalPosition, containerHeight });
    
//   }, [isMobile, isTablet, containerRef.current?.offsetWidth, animationProgress]);
  
//   const [positions, setPositions] = useState({ 
//     stepPositions: [], 
//     goalPosition: { x: 0, y: 0 },
//     containerHeight: 700
//   });
  
//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       if (!containerRef.current || !canvasRef.current) return;
      
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext('2d');
//       const { stepPositions, goalPosition, containerHeight } = calculatePositions();
      
//       // Update canvas dimensions
//       canvas.width = containerRef.current.offsetWidth;
//       canvas.height = containerHeight;
      
//       // Redraw connections
//       drawConnections(ctx, stepPositions, goalPosition);
      
//       // Update positions state
//       setPositions({ stepPositions, goalPosition, containerHeight });
//     };
    
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [isMobile, isTablet, animationProgress]);
  
//   return (
//     <div className="w-full min-h-screen flex justify-center items-center p-4">
//       <div 
//         ref={containerRef}
//         className="w-full max-w-4xl mx-auto relative p-4"
//         style={{ height: `${positions.containerHeight}px` }}
//       >
//         <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 transition-opacity duration-500"
//             style={{ opacity: animationProgress > 0 ? Math.min(1, animationProgress * 3) : 0 }}>
//           Upskill & Generate My Pathway
//         </h1>
        
//         <div className="relative w-full h-full">
//           {/* Canvas for drawing connecting lines */}
//           <canvas 
//             ref={canvasRef}
//             className="absolute top-0 left-0 w-full h-full"
//             style={{ zIndex: 0 }}
//           />
          
//           {/* UI Designer Box - No Animation */}
//           <div 
//             className="absolute bg-white border-[1px] border-black py-2 px-4 md:py-2.5 md:px-7 text-sm md:text-base rounded-xl shadow-md cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-transform duration-300"
//             style={{ 
//               top: positions.goalPosition.y,
//               left: positions.goalPosition.x,
//               boxShadow: '4px 4px 0px rgba(0,0,0,0.2)',
//               zIndex: 10 // Ensure it's above canvas
//             }}
//           >
//             <h3 className="text-lg md:text-xl font-bold">UI Designer</h3>
//           </div>
          
//           {/* Step Components with Animation */}
//           {positions.stepPositions.map((step, index) => (
//             <div 
//               key={index}
//               className={`absolute flex ${isMobile ? 'flex-row' : 'flex-row'} items-center gap-2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500`}
//               style={{ 
//                 top: step.y,
//                 left: step.x,
//                 opacity: step.opacity,
//                 transform: `translate(-50%, -50%) translateX(${step.translateX}px)`,
//                 zIndex: 5 // Ensure steps are above canvas but below the goal
//               }}
//               onMouseEnter={() => setActiveStep(step.number)}
//               onMouseLeave={() => setActiveStep(null)}
//             >
//               <img 
//                 src={step.imagelink} 
//                 alt={`Step ${step.number}`}
//                 className="w-8 h-8 md:w-10 md:h-10" 
//               />
//               <span className={`text-sm md:text-base font-semibold ${activeStep === step.number ? "text-blue-500" : ""}`}>
//                 {step.title}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ;