import { faqItems } from '@/data';
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Faqs = () => {
    const [open, setOpen] = useState<number | null>(null);
  
    const toggle = (index: React.SetStateAction<number | null>) => {
      setOpen(open === index ? null : index);
    };
  return (
    <div>
      <div className="w-full lg:px-[150px] flex justify-center flex-col items-center mt-5">
        <h1 className="text-7xl  text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-600 py-4">Your Questions Answered</h1>
       <div className='lg:w-[650px] mt-4 px-20px sm:w-[300px]'>
       {faqItems.map((item, index) => (
          <div key={index} className="mb-2 border-t-2 ">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between w-full text-left text-lg font-semibold py-2  text-white hover:text-white focus:outline-none transition duration-300"
              aria-expanded={open === index ? 'true' : 'false'}
            >
              {item.question}
              <span className="text-xl">{open === index ? <IoIosArrowUp/> : <IoIosArrowDown/>}</span>
            </button>

              {open === index && (
                <div
                  className="overflow-hidden"
                >
                  <div className="flex justify-between">
                    <p className="px-2 py-4 text-gray-600 w-[400px] text-start">{item.answer}</p>
                  </div>
                </div>
              )}
          </div>
        ))}
       </div>
      </div>
    </div>
  )
}

export default Faqs
