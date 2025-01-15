import { faqItems } from '@/data';
import { AnimatePresence, motion } from 'framer-motion';
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
        <h1 className="lg:text-6xl  text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-600 py-4 text-3xl text-center font-medium">Your Questions Answered</h1>
       <div className='lg:w-[650px] mt-4 px-20px'>
       {faqItems.map((item, index) => (
          <div key={index} className="mb-2 border-t-2 border-[#cce6e0] ">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between w-full text-left text-lg font-medium py-2 focus:outline-none transition duration-300"
              aria-expanded={open === index ? 'true' : 'false'}
            >
             <p className='text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400'> {item.question}</p>
              <span className="text-xl text-white transition duration-500 ease-in-out">{open === index ? <IoIosArrowUp/> : <IoIosArrowDown/>}</span>
            </button>
            <AnimatePresence initial={false}>
              {open === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.9, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="flex justify-between">
                    <p className="px-1 py-4 text-white w-[400px] text-start">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
       </div>
      </div>
    </div>
  )
}

export default Faqs
