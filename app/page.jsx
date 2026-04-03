"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <header className="hero relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="badge"
      >
        <span className="highlight">State of Sites '26</span> &bull; Unlock the report now
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
      >
        Clone. Edit. <span style={{ color: '#E8612A' }}>Deploy.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      >
        Clone any website, edit every pixel with AI, and ship it live — 
        all without writing a single line of code.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 100 }}
        className="w-full max-w-[620px] bg-white rounded-[24px] p-2 pr-2.5 shadow-xl border border-neutral-200/60 flex items-center justify-between mt-8 mb-10 h-[76px] hover:shadow-2xl transition-shadow duration-300"
      >
        <input 
          type="text" 
          placeholder="Paste a website or Figma URL....." 
          className="flex-1 bg-transparent w-full min-w-0 border-none outline-none px-6 text-[16px] font-medium text-neutral-800 placeholder:text-neutral-400 group-hover:placeholder-gray-500 transition-colors"
        />
        <button className="bg-gradient-to-r from-[#ff6b4a] to-[#E8612A] text-white h-[58px] px-8 rounded-[18px] flex items-center justify-center font-bold shadow-md hover:shadow-lg hover:opacity-90 transition-all active:scale-95 whitespace-nowrap">
          Clone Site &rarr;
        </button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        className="hero-actions flex gap-4 mt-2"
      >
        <Link href="#" className="btn-primary hover:scale-[1.02] active:scale-[0.98]">Start for free</Link>
        <Link href="#" className="btn-secondary hover:scale-[1.02] active:scale-[0.98]">Start with AI</Link>
      </motion.div>
    </header>
  );
}

function CommunityGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  return (
    <section id="community" className="community-grid pt-10">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="masonry"
      >
        {/* Column 1 */}
        <div className="column">
          <motion.div variants={itemVariants} className="card hover:-translate-y-1 transition-transform duration-300 cursor-pointer" style={{ background: 'linear-gradient(145deg, #ffe0d5, #ffd0bc)', height: '350px' }}>
            <div className="card-content">
              <h3>Compliance Standard</h3>
              <p>Meet the modern platform that accelerates manual work.</p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="card hover:-translate-y-1 transition-transform duration-300 cursor-pointer" style={{ background: '#ff6b4a', height: '420px' }}>
            <div className="card-content" style={{ color: 'white' }}>
              <h3 style={{ color: 'white' }}>Haptic</h3>
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>We help ambitious teams turn bold visions into lasting impact.</p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="card hover:-translate-y-1 transition-transform duration-300 cursor-pointer" style={{ background: 'linear-gradient(180deg, #fffaf8, #ffdfd4)', height: '280px' }}>
            <div className="card-content">
              <h3>HiKeys 1977</h3>
            </div>
          </motion.div>
        </div>
        
        {/* Column 2 */}
        <div className="column">
          <motion.div variants={itemVariants} className="card hover:-translate-y-1 transition-transform duration-300 cursor-pointer" style={{ background: 'white', height: '300px' }}>
            <div className="card-content" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ flexGrow: 1 }} />
              <h3>Data Visualization</h3>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="card hover:-translate-y-1 transition-transform duration-300 cursor-pointer" style={{ background: 'linear-gradient(to right, #ffe1d6 0%, #ffc0a8 100%)', height: '450px' }}>
            <div className="card-content">
              <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.5)', padding: '4px 8px', borderRadius: '12px', fontWeight: 600 }}>AI answer engine</span>
              <h3 style={{ marginTop: '16px' }}>Build with the best AI.</h3>
              <p>Power your products with the fastest grounded search.</p>
            </div>
          </motion.div>
        </div>

        {/* Column 3 */}
        <div className="column">
          <motion.div variants={itemVariants} className="card group hover:-translate-y-1 transition-transform duration-300 cursor-pointer" style={{ height: '380px', position: 'relative' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=600&auto=format&fit=crop" className="group-hover:scale-105 transition-transform duration-500" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Portrait" />
            <div className="card-content glass-overlay" style={{ position: 'absolute', bottom: 0, width: '100%' }}>
              <h3>Fashion Weekly</h3>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="card hover:-translate-y-1 transition-transform duration-300 cursor-pointer" style={{ background: '#fff', height: '300px' }}>
            <div className="card-content">
              <h3>A personal AI assistant</h3>
            </div>
          </motion.div>
        </div>

        {/* Column 4 */}
        <div className="column">
          <motion.div variants={itemVariants} className="card hover:-translate-y-1 transition-transform duration-300 cursor-pointer" style={{ background: '#fff8f5', height: '320px' }}>
            <div className="card-content">
              <h3>Creating memorable brand experiences.</h3>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="card hover:-translate-y-1 transition-transform duration-300 cursor-pointer" style={{ background: '#8c2c11', height: '400px' }}>
            <div className="card-content" style={{ display:'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <h2 style={{ fontSize: '2.5rem', lineHeight: 1, textAlign: 'center', textTransform: 'uppercase', color: 'white' }}>Novel<br/>Reading<br/>Retreats</h2>
              <div style={{ background: '#ffaa91', color: '#381a11', padding: '15px', margin: '-24px', marginTop: 'auto', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase', textAlign: 'center' }}>
                Well read, well fed * New York * Read Together
              </div>
            </div>
          </motion.div>
        </div>
        
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen pt-20">
      {/* Background Blobs for Vibe - Animated with Framer Motion */}
      <div className="absolute top-0 left-0 w-full h-[120vh] pointer-events-none -z-10 bg-[var(--bg-base)] overflow-hidden hidden md:block">
        <motion.div 
          animate={{ x: [0, 40, -30, 0], y: [0, -60, 30, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[var(--accent-light)] rounded-full blur-[120px] opacity-60"
        />
        <motion.div 
          animate={{ x: [0, -40, 30, 0], y: [0, 50, -40, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-[var(--amber-light)] rounded-full blur-[100px] opacity-50"
        />
        <motion.div 
          animate={{ x: [0, 30, -40, 0], y: [0, 40, -30, 0], scale: [1, 1.2, 0.8, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-[var(--accent-light)] rounded-full blur-[80px] opacity-40"
        />
      </div>

      {/* Fallback CSS animations for mobile to save processing power */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[var(--bg-base)] md:hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[var(--accent-light)] rounded-full blur-[120px] animate-blob opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[var(--amber-light)] rounded-full blur-[100px] animate-blob animation-delay-2000 opacity-50"></div>
      </div>

      <Hero />
      <CommunityGrid />
    </main>
  );
}
