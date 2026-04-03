"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How do I upgrade to a premium plan?",
    answer: "You can upgrade at any time from your billing dashboard. The Pro and Business plans offer seamless per-seat scaling to give your team instant access to higher volume tools."
  },
  {
    question: "Is there a long-term contract locked in?",
    answer: "No, all plans operate on a simple month-to-month or year-to-year basis depending on the billing cycle you selected. You can cancel at any time with exactly 0 early termination penalties."
  },
  {
    question: "Can I migrate existing projects into this workspace?",
    answer: "Absolutely. We heavily support bulk data migrations. You can upload massive CSV files into the database or connect securely through one-click external integrations with over 50 popular apps."
  },
  {
    question: "What is your direct refund policy?",
    answer: "We offer a strict 14-day no-questions-asked refund policy. After that period, we do not offer partial prorated refunds on the remainder of your billing cycle."
  }
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-[140px] pb-24 px-4" style={{ background: 'var(--bg-gradient, linear-gradient(135deg, #fff6f2 0%, #ffeae0 100%))' }}>
      
      <div className="w-full max-w-[750px] flex flex-col items-center">
         
         {/* Main Page Title */}
         <h1 className="font-bold text-[#381a11] mb-6 tracking-tighter text-center" style={{ fontSize: '3.5rem', lineHeight: '1.1' }}>
           How can we help?
         </h1>
         <p className="text-neutral-500 font-medium text-[17px] mb-12 text-center max-w-[500px] leading-relaxed">
           Search through our vast library of documentation or get directly in touch with our world-class engineering team.
         </p>

         {/* Search Input Box */}
         <div className="w-full bg-white rounded-[24px] p-3 shadow-[0_10px_30px_rgba(242,85,44,0.06)] border border-orange-500/10 flex items-center mb-16">
            <svg className="ml-5 mr-3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d84315" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
               <circle cx="11" cy="11" r="8"></circle>
               <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder="Search for answers..." 
              className="flex-1 bg-transparent border-none outline-none px-3 py-3 text-[18px] font-bold text-neutral-800 placeholder:text-neutral-300"
            />
            <button className="bg-gradient-to-r from-[#ff6b4a] to-[#d84315] text-white px-8 py-3.5 rounded-xl text-[16px] font-bold hover:opacity-90 active:scale-95 transition-all outline-none shadow-[0_4px_12px_rgba(242,85,44,0.2)]">
               Search
            </button>
         </div>

         {/* FAQ Section Grid */}
         <div className="w-full flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[#381a11] tracking-tight mb-2 pl-1">Frequently Asked Questions</h2>
            
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div 
                  key={i} 
                  className={`bg-white rounded-[20px] shadow-sm border overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#f2552c] ring-1 ring-[#f2552c]' : 'border-neutral-100'}`}
                >
                  <div 
                    className="px-6 py-5 flex justify-between items-center cursor-pointer hover:bg-neutral-50/50"
                    onClick={() => toggleFaq(i)}
                  >
                     <h3 className={`font-bold text-[18px] leading-tight pr-8 transition-colors ${isOpen ? 'text-[#d84315]' : 'text-neutral-900'}`}>
                       {faq.question}
                     </h3>
                     <div 
                       className="text-[#f2552c] flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-orange-50 font-bold"
                       style={{ transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s ease' }}
                     >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                     </div>
                  </div>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-7 pt-1">
                           <p className="text-neutral-500 font-medium text-[16px] leading-relaxed">
                             {faq.answer}
                           </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
         </div>
         
         {/* Extended Contact Card */}
         <div className="w-full mt-12 bg-[#ffece3] rounded-[24px] p-8 border border-orange-500/20 shadow-inner flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden group">
            <div className="absolute top-[-50px] right-[-50px] w-[180px] h-[180px] bg-white rounded-full opacity-40 blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
            
            <div className="flex flex-col z-10 text-center sm:text-left">
               <h3 className="font-bold text-[22px] text-[#381a11] mb-2 tracking-tight">Still need help?</h3>
               <p className="text-[#a3614d] text-[15px] font-medium leading-relaxed max-w-[360px]">
                 Can't find the exact answer you're looking for? Feel free to contact our friendly engineering team directly.
               </p>
            </div>
            
            <button className="whitespace-nowrap z-10 bg-white text-[#d84315] px-8 py-3.5 rounded-xl text-[15px] font-bold hover:shadow-md active:scale-95 transition-all outline-none border border-orange-500/10">
               Support Chat
            </button>
         </div>

      </div>
    </div>
  );
}
