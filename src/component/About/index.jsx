import React from 'react'
import about1 from '../../assets/about1.svg'
import mapImage from '../../assets/mapImage.svg'
import Heading from '../Heading'
import Mapf from '../../assets/mapf.svg'
function About() {

    return (
        <div className='mb-52  mx-auto '>
           <Heading txt = "About Us" />
            <div className='w-full max-md:w-full  flex justify-around  my-16 max-md:flex-col max-md:justify-center max-md:items-center'>


                <div className={` w-[25%] max-md:w-full flex flex-col items-start  `}>
                    <p className='text-[#39DC8E] w-full text-sm leading-loose'>O &nbsp;&nbsp; u &nbsp;&nbsp; r &nbsp;&nbsp;&nbsp; H &nbsp;&nbsp; i &nbsp;&nbsp; s &nbsp;&nbsp;t&nbsp;&nbsp;o&nbsp;&nbsp;r &nbsp;&nbsp;y</p>
                    <h2 className='text-6xl w-full font-semibold mt-3.5'>Our History</h2>
                    <p className='text-base   mt-8 max-md:w-full'>
Trak was born from a simple yet powerful idea – to bridge the gap between ambition and opportunity using AI-driven skill training. Our journey began with a mission to empower job seekers, students, and professionals through personalized learning experiences aligned with real industry demands.
<br />From our roots in Rajasthan, India, we’ve grown into a tech-first upskilling platform that uses an AI Mentor to assess skills, guide learning, and support users step-by-step in mastering in-demand competencies.
<br />Driven by innovation and a passion for reskilling, we continue to evolve—ensuring every learner can build a meaningful, future-ready career with Trak – Your AI-Powered Skill Mentor.</p>
                </div>

                <div className={`w-[25%] max-md:w-full flex flex-col items-start mt-20  `}>
                    {/* <div> </div>  Empty virtual div for the extra space above the our */}
                    <p className='text-[#39DC8E] w-full text-sm leading-loose'>C &nbsp;&nbsp; o &nbsp;&nbsp; n &nbsp;&nbsp;&nbsp; c &nbsp;&nbsp; a &nbsp;&nbsp; c &nbsp;&nbsp;t&nbsp;&nbsp; U&nbsp;&nbsp; s &nbsp;&nbsp;</p>
                    <h2 className='text-6xl w-full font-semibold mt-3.5'>Contact Us</h2>
                    <p className='text-base w-full mt-8  max-md:w-full'>Have questions or need support? We're here to help! Whether you're looking for career guidance, partnership opportunities, or just want to say hello, reach out to us</p>
                    <p className='text-base  mt-7 w-full max-md:w-full'>📩 Email: support@trak.com
                    </p>
                    <p className='text-base  mt-3 w-full max-md:w-full'>📍Location: Rajasthan, India</p>
                    <p className='text-base  mt-7 w-ful max-md:w-full'>Let's build your career plan together with Trak – Your AI-Powered Career Companion!</p>
                    <img src={Mapf} alt="" className='mt-7' />
                </div>







            </div>
        </div>

    )
}

export default About