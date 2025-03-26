import { useEffect, useRef } from "react";
import gsap from "gsap";

function Stage1({ onUiUxClick }) {
  const careerOptions = [
    "Doctor",
    "Lawyer",
    "Software Developer",
    "UI/UX Designer",
    "Engineer",
  ];

  const uiUxRefMobile = useRef(null);
  const uiUxRefTablet = useRef(null);
  const uiUxRefDesktop = useRef(null);
  const animationRefMobile = useRef(null);
  const animationRefTablet = useRef(null);
  const animationRefDesktop = useRef(null);

  // Animation setup for all breakpoints
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mobile animation
      if (uiUxRefMobile.current) {
        animationRefMobile.current = gsap
          .timeline({ repeat: -1, yoyo: true })
          .to(uiUxRefMobile.current, { rotation: 10, duration: 0.2, ease: "power1.out" })
          .to(uiUxRefMobile.current, { rotation: -8, duration: 0.2, ease: "power1.out" })
          .to(uiUxRefMobile.current, { rotation: 6, duration: 0.15, ease: "power1.out" })
          .to(uiUxRefMobile.current, { rotation: -4, duration: 0.15, ease: "power1.out" })
          .to(uiUxRefMobile.current, { rotation: 2, duration: 0.1, ease: "power1.out" })
          .to(uiUxRefMobile.current, { rotation: 0, duration: 0.1, ease: "power1.out" });
      }

      // Tablet animation
      if (uiUxRefTablet.current) {
        animationRefTablet.current = gsap
          .timeline({ repeat: -1, yoyo: true })
          .to(uiUxRefTablet.current, { rotation: 10, duration: 0.2, ease: "power1.out" })
          .to(uiUxRefTablet.current, { rotation: -8, duration: 0.2, ease: "power1.out" })
          .to(uiUxRefTablet.current, { rotation: 6, duration: 0.15, ease: "power1.out" })
          .to(uiUxRefTablet.current, { rotation: -4, duration: 0.15, ease: "power1.out" })
          .to(uiUxRefTablet.current, { rotation: 2, duration: 0.1, ease: "power1.out" })
          .to(uiUxRefTablet.current, { rotation: 0, duration: 0.1, ease: "power1.out" });
      }

      // Desktop animation
      if (uiUxRefDesktop.current) {
        animationRefDesktop.current = gsap
          .timeline({ repeat: -1, yoyo: true })
          .to(uiUxRefDesktop.current, { rotation: 10, duration: 0.2, ease: "power1.out" })
          .to(uiUxRefDesktop.current, { rotation: -8, duration: 0.2, ease: "power1.out" })
          .to(uiUxRefDesktop.current, { rotation: 6, duration: 0.15, ease: "power1.out" })
          .to(uiUxRefDesktop.current, { rotation: -4, duration: 0.15, ease: "power1.out" })
          .to(uiUxRefDesktop.current, { rotation: 2, duration: 0.1, ease: "power1.out" })
          .to(uiUxRefDesktop.current, { rotation: 0, duration: 0.1, ease: "power1.out" });
      }
    });

    return () => ctx.revert(); // Cleanup GSAP animations when component unmounts
  }, []);

  // Event handlers for mobile
  const handleMouseEnterMobile = () => {
    animationRefMobile.current?.pause();
    gsap.to(uiUxRefMobile.current, { rotation: 0, duration: 0.2 });
  };

  const handleMouseLeaveMobile = () => {
    animationRefMobile.current?.resume();
  };

  // Event handlers for tablet
  const handleMouseEnterTablet = () => {
    animationRefTablet.current?.pause();
    gsap.to(uiUxRefTablet.current, { rotation: 0, duration: 0.2 });
  };

  const handleMouseLeaveTablet = () => {
    animationRefTablet.current?.resume();
  };

  // Event handlers for desktop
  const handleMouseEnterDesktop = () => {
    animationRefDesktop.current?.pause();
    gsap.to(uiUxRefDesktop.current, { rotation: 0, duration: 0.2 });
  };

  const handleMouseLeaveDesktop = () => {
    animationRefDesktop.current?.resume();
  };
  
  return (
    <div className="h-full w-full px-4 md:px-6 lg:px-8 py-8 flex flex-col justify-center gap-8 md:gap-12 lg:gap-16">
      <div className="flex flex-col gap-2">
        <div className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold">
          Choose Your Career Goal
        </div>
        <div className="text-base sm:text-lg text-center font-normal">Find Your Path</div>
      </div>

      <div className="flex flex-col gap-4 md:gap-6 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
        {/* Mobile: Stack all buttons vertically */}
        <div className="flex flex-col sm:hidden w-full gap-4">
          {careerOptions.map((career, index) => (
            <button
              key={index}
              ref={career === "UI/UX Designer" ? uiUxRefMobile : null}
              onClick={career === "UI/UX Designer" ? onUiUxClick : undefined}
              onMouseEnter={career === "UI/UX Designer" ? handleMouseEnterMobile : undefined}
              onMouseLeave={career === "UI/UX Designer" ? handleMouseLeaveMobile : undefined}
              className="w-full border border-black rounded-full py-2 px-4 text-base font-normal hover:bg-gray-100 transition-colors duration-200"
            >
              {career}
            </button>
          ))}
        </div>

        {/* Tablet: Two rows with buttons wrapping */}
        <div className="hidden sm:flex md:hidden flex-wrap gap-4 justify-center">
          {careerOptions.map((career, index) => (
            <button
              key={index}
              ref={career === "UI/UX Designer" ? uiUxRefTablet : null}
              onClick={career === "UI/UX Designer" ? onUiUxClick : undefined}
              onMouseEnter={career === "UI/UX Designer" ? handleMouseEnterTablet : undefined}
              onMouseLeave={career === "UI/UX Designer" ? handleMouseLeaveTablet : undefined}
              className="border border-black rounded-full py-2 px-5 text-base font-normal hover:bg-gray-100 transition-colors duration-200"
            >
              {career}
            </button>
          ))}
        </div>

        {/* Desktop: Two rows as in original design */}
        <div className="hidden md:flex flex-wrap gap-6 justify-center">
          {/* First row */}
          <div className="w-full flex gap-4 md:gap-6 flex-row justify-center">
            {careerOptions.slice(0, 3).map((career, index) => (
              <button
                key={index}
                className="border border-black rounded-full py-2 md:py-3 px-4 md:px-6 text-base md:text-lg font-normal hover:bg-gray-100 transition-colors duration-200"
              >
                {career}
              </button>
            ))}
          </div>

          {/* Second row */}
          <div className="w-full flex justify-center gap-4 md:gap-6">
            {careerOptions.slice(3).map((career, index) =>
              career === "UI/UX Designer" ? (
                <button
                  key={index + 3}
                  ref={uiUxRefDesktop}
                  onClick={onUiUxClick}
                  onMouseEnter={handleMouseEnterDesktop}
                  onMouseLeave={handleMouseLeaveDesktop}
                  className="border border-black rounded-full py-2 md:py-3 px-4 md:px-6 text-base md:text-lg font-normal hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                >
                  {career}
                </button>
              ) : (
                <button
                  key={index + 3}
                  className="border border-black rounded-full py-2 md:py-3 px-4 md:px-6 text-base md:text-lg font-normal hover:bg-gray-100 transition-colors duration-200"
                >
                  {career}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stage1;