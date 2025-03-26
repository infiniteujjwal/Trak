import React, { useEffect, useState } from 'react'
import Cycle from '../component/Cycle'
import FAQ from '../component/FAQ'
import About from '../component/About'
import Works from '../component/Works'
import Footer from '../component/Footer'
import Soon from '../component/ComingSoon'
import SmokeEmulsion from '../component/Waves'
import Button from '../component/Button'
import Scribble from '../assets/scribble.svg'

const Home = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className='px-20 max-md:px-5'>
        {showOverlay && (
          <div>
            <SmokeEmulsion />
          </div>
        )}
        
        {/* Single, Truly Responsive Header */}
        <h1 className='
          w-full fontClass font-medium 
          text-6xl md:text-6xl sm:text-5xl max-sm:text-4xl 
          my-10 leading-tight
        '>
          Your dream career isn't a faraway destination – it's a journey. 
          Trak makes sure you're on the &nbsp;
          <span className='inline-block relative'>
            <span className='text-[#39DC8E] fontClassFastHand font-medium'>
              right path
              <img 
                src={Scribble} 
                alt="scribble lines" 
                className='
                  h-4 sm:h-5 md:h-6 
                  absolute -bottom-2 left-0 right-0
                '
              />
            </span>
          </span>
          , every step of the way.
        </h1>

        <div className='flex w-full justify-between max-md:flex-col'>
          <div>
            <p className='mt-20 max-md:mt-10'>
              Master In-Demand Skills with Your Personal AI Mentor – Fast, Practical, and Market-Aligned.
            </p>
            <Button 
              txt="Explore Skills That Get Me Hired"
              className=''
              navigateTo='error' 
            />
          </div>
          <Cycle/>
        </div>

        <section id='Soon' className='my-20 overflow-hidden'>
          <Soon />
        </section>
        <section id='Works' className='my-5'>
          <Works />
        </section>
        <section id='FAQ' className='my-20'>
          <FAQ />
        </section>
        <section id='About' className='my-20'>
          <About />
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Home