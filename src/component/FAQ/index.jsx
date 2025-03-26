import React, { useState } from 'react';

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: 'What is Trak?',
      answer: 'Trak is an AI-powered platform that helps you upskill with personalized guidance, real-time support, and hands-on learning. It identifies your strengths and gaps, delivers tailored content, and supports you step by step with your own AI mentor.',
    },
    {
      id: 2,
      question: ' How do I track my progress?',
      answer: 'Your progress is displayed on a dashboard, showing completed modules, milestones achieved, and what’s next on your pathway.',
    },
    {
      id: 3,
      question: 'Is there a cost to use Trak?',
      answer: 'Trak offers both free and premium plans. While the free plan provides essential features, the premium plan unlocks advanced tools, exclusive milestones, and tailored resources.',
    },
    {
        id: 4,
        question: 'Can I change my goals after starting?',
        answer:'Absolutely! Trak’s pathways are dynamic and evolve as your goals or circumstances change. You’re in control every step of the way.'
    },
    {
         id:5,
         question: 'Is Trak suitable for beginners?',
         answer: 'Trak offers a mix of videos, articles, hands-on projects, and more, all tailored to your learning preferences and pace.'
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    console.log(activeIndex); // Note: This will log the previous state due to async nature
  };

  return (
    <div className=" my-40">
      <h1 className="text-4xl text-center font-semibold  fontClassFAQ mb-20">
        Frequently 
        Asked
        <b className="text-[#39DC8E] font-semibold"> Questions</b>
      </h1>
      {faqData.map((faq, index) => (
        <div className="border-2 border-black mb-5 py-4 rounded-md px-5 max-md:px-2 mx-auto pt-5 mt-12 w-3xl max-md:w-full " key={faq.id}>
          <div className="faq-header relative" onClick={() => toggleFAQ(index)}>
            <span className="text-lg max-md:text-sm font-semibold">0{index + 1}</span>
            <span className="ml-5 max-md:ml-2 text-xl max-md:text-sm font-semibold">{faq.question}</span>
            <span
              className={`w-[5%] h-[230%] max-md:h-[250%]  max-md:w-[10%] inline-block p-3 max-md:py-3.5 ${activeIndex === index ? 'bg-[#39DC8E]':'bg-black text-white' }  text-2xl max-md:text-xl absolute -right-5 -top-5 max-md:-right-2 cursor-pointer`}
            >
              {activeIndex === index ? '-' : '+'}
            </span>
          </div>
          <div className={` faq-content ${activeIndex === index ? 'block' : 'hidden'}`}>
            <p className="my-10 mb-16 ml-10 font-light leading-loose">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
