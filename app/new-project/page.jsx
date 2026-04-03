"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NewProject() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-[120px] pb-10 px-4">
      
      {/* Back Button */}
      <div className="absolute top-[100px] left-8 sm:left-12">
        <Link href="/dashboard" className="text-[#d84315] font-bold text-[13px] flex items-center gap-2 hover:opacity-80 transition-opacity tracking-wide uppercase">
           <span>&larr;</span> Back to Dashboard
        </Link>
      </div>

      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, ease: "easeOut" }}
         className="w-full max-w-[700px] flex flex-col items-center justify-center mt-[-60px]"
      >
         
         <h1 className="font-bold text-[#381a11] mb-12 tracking-tighter text-center" style={{ fontSize: '3.5rem', lineHeight: '1.1' }}>
           Start a new project.
         </h1>

         {/* Master Pill Container */}
         <div className="w-full max-w-[620px] bg-[#f4f4f4] rounded-[50px] p-2 pr-2.5 shadow-inner border border-neutral-200/50 flex items-center justify-between" style={{ height: '76px' }}>
            
            {/* Left Box (Star + Chevrons) */}
            <div className="bg-white h-full px-5 gap-3 rounded-[38px] flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-neutral-100/50 transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] cursor-pointer">
               {/* 4-point star SVG */}
               <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M12 2.5l2.2 6.8 6.8 2.2-6.8 2.2-2.2 6.8-2.2-6.8-6.8-2.2 6.8-2.2z"></path>
               </svg>
               <div className="flex flex-col gap-1 mt-0.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#c0c0c0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#c0c0c0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
               </div>
            </div>
            
            {/* Input Field */}
            <input 
              type="text" 
              placeholder="Website url....." 
              className="flex-1 bg-transparent border-none outline-none px-6 text-[18px] font-bold text-neutral-800 placeholder:text-neutral-400"
            />
            
            {/* Right Box (Arrow) */}
            <div className="bg-white h-[58px] w-[58px] shrink-0 rounded-full flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-neutral-100/50 cursor-pointer hover:bg-neutral-50 transition-all active:scale-95 group">
               <svg className="transition-transform group-hover:translate-x-1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
               </svg>
            </div>
            
         </div>

      </motion.div>
    </div>
  );
}
