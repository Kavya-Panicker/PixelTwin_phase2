import React from 'react';
import Link from 'next/link';



function Hero() {
  return (
    <header className="hero">
      <div className="badge">
        <span className="highlight">State of Sites '26</span> &bull; Unlock the report now
      </div>
      <h1>Clone. Edit. <span style={{ color: '#E8612A' }}>Deploy.</span></h1>
      <p>
        Clone any website, edit every pixel with AI, and ship it live — 
        all without writing a single line of code.
      </p>
      <div className="w-full max-w-[620px] bg-white rounded-[24px] p-2 pr-2.5 shadow-lg border border-neutral-200/50 flex items-center justify-between mt-8 mb-8" style={{ height: '76px' }}>
        <input 
          type="text" 
          placeholder="Paste a website or Figma URL....." 
          className="flex-1 bg-transparent w-full min-w-0 border-none outline-none px-6 text-[16px] font-medium text-neutral-800 placeholder:text-neutral-400"
        />
        <button className="bg-gradient-to-r from-[#ff6b4a] to-[#E8612A] text-white h-[58px] px-8 rounded-[18px] flex items-center justify-center font-bold shadow-md hover:opacity-90 transition-all active:scale-95 whitespace-nowrap">
          Clone Site &rarr;
        </button>
      </div>

      <div className="hero-actions">
        <a href="#" className="btn-primary large">Start for free</a>
        <a href="#" className="btn-secondary large">Start with AI</a>
      </div>
    </header>
  );
}

function CommunityGrid() {
  return (
    <section id="community" className="community-grid">
      <div className="masonry">
        {/* Column 1 */}
        <div className="column">
          <div className="card" style={{ background: 'linear-gradient(145deg, #ffe0d5, #ffd0bc)', height: '350px' }}>
            <div className="card-content">
              <h3>Compliance Standard</h3>
              <p>Meet the modern platform that accelerates manual work.</p>
            </div>
          </div>
          <div className="card" style={{ background: '#ff6b4a', height: '420px' }}>
            <div className="card-content" style={{ color: 'white' }}>
              <h3 style={{ color: 'white' }}>Haptic</h3>
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>We help ambitious teams turn bold visions into lasting impact.</p>
            </div>
          </div>
          <div className="card" style={{ background: 'linear-gradient(180deg, #fffaf8, #ffdfd4)', height: '280px' }}>
            <div className="card-content">
              <h3>HiKeys 1977</h3>
            </div>
          </div>
        </div>
        
        {/* Column 2 */}
        <div className="column">
          <div className="card" style={{ background: 'white', height: '300px' }}>
            <div className="card-content" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ flexGrow: 1 }} />
              <h3>Data Visualization</h3>
            </div>
          </div>
          <div className="card" style={{ background: 'linear-gradient(to right, #ffe1d6 0%, #ffc0a8 100%)', height: '450px' }}>
            <div className="card-content">
              <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.5)', padding: '4px 8px', borderRadius: '12px', fontWeight: 600 }}>AI answer engine</span>
              <h3 style={{ marginTop: '16px' }}>Build with the best AI.</h3>
              <p>Power your products with the fastest grounded search.</p>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="column">
          <div className="card" style={{ height: '380px', position: 'relative' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=600&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Portrait" />
            <div className="card-content glass-overlay" style={{ position: 'absolute', bottom: 0, width: '100%' }}>
              <h3>Fashion Weekly</h3>
            </div>
          </div>
          <div className="card" style={{ background: '#fff', height: '300px' }}>
            <div className="card-content">
              <h3>A personal AI assistant</h3>
            </div>
          </div>
        </div>

        {/* Column 4 */}
        <div className="column">
          <div className="card" style={{ background: '#fff8f5', height: '320px' }}>
            <div className="card-content">
              <h3>Creating memorable brand experiences.</h3>
            </div>
          </div>
          <div className="card" style={{ background: '#8c2c11', height: '400px' }}>
            <div className="card-content" style={{ display:'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <h2 style={{ fontSize: '2.5rem', lineHeight: 1, textAlign: 'center', textTransform: 'uppercase', color: 'white' }}>Novel<br/>Reading<br/>Retreats</h2>
              <div style={{ background: '#ffaa91', color: '#381a11', padding: '15px', margin: '-24px', marginTop: 'auto', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase', textAlign: 'center' }}>
                Well read, well fed * New York * Read Together
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background Blobs for Vibe */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[var(--bg-base)]">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[var(--accent-light)] rounded-full blur-[120px] animate-blob opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[var(--amber-light)] rounded-full blur-[100px] animate-blob animation-delay-2000 opacity-50"></div>
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-[var(--accent-light)] rounded-full blur-[80px] animate-blob animation-delay-4000 opacity-40"></div>
      </div>

      <Hero />
      <CommunityGrid />
    </main>
  );
}
