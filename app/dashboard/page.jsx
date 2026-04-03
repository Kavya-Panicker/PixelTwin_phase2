"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles.module.css';

const projects = [
  { id: 1, title: 'Hungry Future', viewed: 'Viewed 12m ago', free: true, thumb: 'logo' },
  { id: 2, title: 'Mino Area (copy)', viewed: 'Viewed 3mo ago', free: false, thumb: 'text' },
  { id: 3, title: 'Accretion (copy)', viewed: 'Viewed 4mo ago', free: true, thumb: 'acc' },
  { id: 4, title: 'Dreello - Framer Template', viewed: 'Viewed 4mo ago', free: true, thumb: 'drel' },
];

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [workspaceName, setWorkspaceName] = useState("Shekh's Workspace");
  const [workspaceInitial, setWorkspaceInitial] = useState("S");
  const [isNewProjectOpen, setIsNewProjectOpen] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem('workspaceName');
    if (savedName) {
      const firstName = savedName.split(' ')[0];
      setWorkspaceName(`${firstName}'s Workspace`);
      setWorkspaceInitial(firstName.charAt(0).toUpperCase());
    }
  }, []);

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isSidebarOpen ? '' : styles.collapsed}`}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: isSidebarOpen ? 'space-between' : 'center', marginBottom: '24px', width: '100%' }}>
          {isSidebarOpen && (
            <div className={styles.workspaceToggle}>
              <div className={styles.workspaceLogo}>{workspaceInitial}</div>
              <span style={{ fontSize: '15px', fontWeight: 700, whiteSpace: 'nowrap' }}>{workspaceName}</span>
              <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#a62b08' }}>&#9660;</span>
            </div>
          )}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={styles.burgerBtn}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>

        {isSidebarOpen ? (
          <input type="text" placeholder="Search..." className={styles.searchBar} />
        ) : (
          <div className={styles.searchIconCollapsed}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f2552c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
        )}

        <div className={styles.navSection}>
          {isSidebarOpen && <h3>Projects</h3>}
          
          <div className={`${styles.navItem} ${styles.active}`} title="All">
            <span className={styles.iconSpan}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect></svg>
            </span> 
            {isSidebarOpen && <span className={styles.navText}>All</span>}
          </div>
          
          <div className={styles.navItem} title="Team">
            <span className={styles.iconSpan} style={{ opacity: 0.9 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </span> 
            {isSidebarOpen && <span className={styles.navText}>Team</span>}
          </div>
        </div>

        <div className={styles.sidebarFooter}>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px', justifyContent: isSidebarOpen ? 'flex-start' : 'center', width: '100%', cursor: 'pointer', paddingBottom: '4px'}} title="Invite your team">
            <span className={styles.iconSpan} style={{ opacity: 0.9 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
            </span>
            {isSidebarOpen && <span style={{ whiteSpace: 'nowrap' }}>Invite your team</span>}
            {isSidebarOpen && <button className={styles.copyBtn}>Copy Link</button>}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>All</h1>
          <div className={styles.headerActions}>
            <button className={styles.filterBtn}>Last viewed by me <span style={{fontSize: '9px', marginLeft: '6px'}}>&#9660;</span></button>
            <button className={styles.newProjectBtn} onClick={() => setIsNewProjectOpen(true)}>New Project</button>
          </div>
        </header>

        <div className={styles.grid}>
          {projects.map((proj) => (
            <div key={proj.id} className={styles.card}>
              <div className={styles.thumbnail}>
                {proj.thumb === 'logo' && (
                  <div style={{background: 'linear-gradient(135deg, #fff2eb, #ffe3d6)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{filter: 'drop-shadow(0 4px 6px rgba(242,85,44,0.2))'}}>
                      <rect x="2" y="2" width="8" height="8" fill="#E8612A" rx="1"/>
                      <rect x="10" y="10" width="8" height="8" fill="#E8612A" rx="1"/>
                      <rect x="2" y="10" width="8" height="8" fill="#E8612A" rx="1" opacity="0.3"/>
                    </svg>
                  </div>
                )}
                {proj.thumb === 'text' && (
                  <div style={{ background: 'linear-gradient(to top right, #ffc9b5, #fff5f0)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '22px', fontWeight: '900', letterSpacing: '4px', color: '#1a0c08' }}>MINO &ndash; AREA</span>
                  </div>
                )}
                {proj.thumb === 'acc' && (
                  <div style={{ background: '#fff0e6', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '28px' }}>
                     <div style={{ color: '#1a0c08', background: 'white', padding: '16px 24px', borderRadius: '12px', boxShadow: '0 8px 16px rgba(242, 85, 44, 0.1)', fontSize: '11px', textAlign: 'center', marginBottom: '20px', zIndex: 10, border: '1px solid rgba(242, 85, 44, 0.15)' }}>
                        <strong style={{fontSize: '15px', fontWeight: 800, display: 'block', marginBottom: '6px'}}>All your work pulled<br/>into one powerful place</strong>
                        <span style={{color: '#a3614d', fontSize: '9px', fontWeight: 500}}>All pieces in together in a neat way</span>
                        <div style={{ background: 'linear-gradient(90deg, #ff6b4a, #d84315)', width: '50px', height: '16px', margin: '12px auto 0', borderRadius: '12px', boxShadow: '0 2px 6px rgba(242, 85, 44, 0.2)' }}></div>
                     </div>
                     <div style={{ background: '#fff9f7', width: '85%', height: '100px', borderRadius: '12px 12px 0 0', border: '1px solid rgba(242, 85, 44, 0.25)', borderBottom: 'none', boxShadow: '0 -4px 12px rgba(242, 85, 44, 0.05)' }}></div>
                  </div>
                )}
                {proj.thumb === 'drel' && (
                  <div style={{ background: 'linear-gradient(135deg, #e6f0ff, #fff0e6)', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px' }}>
                    <div style={{display: 'flex', width: '85%', justifyContent: 'space-between', marginBottom: '12px', background: 'white', padding: '10px 14px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)'}}>
                       <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
                           <span style={{width:'10px', height:'10px', borderRadius:'50%', background:'#381a11'}}></span>
                           <h3 style={{ color: '#381a11', fontSize: '13px', margin: 0, fontWeight: 800 }}>Run your freelance business like a pro</h3>
                       </div>
                    </div>
                    <div style={{ background: '#ffffff', width: '85%', height: '100px', borderRadius: '8px', boxShadow: '0 6px 16px rgba(242, 85, 44, 0.08)', padding: '12px', display: 'flex', flexDirection: 'column', gap: '12px', border: '1px solid rgba(242,85,44,0.1)' }}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                           <div style={{width: '24px', height: '24px', background: '#ffe3d6', borderRadius: '6px'}}></div>
                           <div style={{width: '70px', height: '24px', background: '#ffe3d6', borderRadius: '6px'}}></div>
                        </div>
                        <div style={{width: '100%', height: '40px', background: '#f5f5f5', borderRadius: '6px'}}></div>
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.cardInfo}>
                <div>
                  <h3 className={styles.cardTitle}>{proj.title}</h3>
                  <p className={styles.cardSubtitle}>{proj.viewed}</p>
                </div>
                {proj.free && <span className={styles.badge}>FREE</span>}
                {!proj.free && <span style={{ color: '#d84315', cursor: 'pointer', paddingBottom: '4px', letterSpacing: '2px', fontWeight: 900 }}>...</span>}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* New Project Overlay Modal */}
      <AnimatePresence>
        {isNewProjectOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center pointer-events-auto"
            style={{ backgroundColor: 'rgba(255, 246, 242, 0.6)' }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsNewProjectOpen(false);
            }}
          >
            {/* Back/Close Button */}
            <div className="absolute top-[100px] left-8 sm:left-12 z-50">
              <button onClick={() => setIsNewProjectOpen(false)} className="text-[#d84315] font-bold text-[13px] flex items-center gap-2 hover:opacity-80 transition-opacity tracking-wide uppercase outline-none">
                <span>&larr;</span> Back to Dashboard
              </button>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full max-w-[700px] flex flex-col items-center justify-center mt-[-40px]"
            >
              <h1 className="font-bold text-[#381a11] mb-10 tracking-tighter text-center" style={{ fontSize: '3.5rem', lineHeight: '1.1' }}>
                Start a new project.
              </h1>

              {/* Master Pill Container */}
              <div className="w-full max-w-[620px] bg-[#f4f4f4] rounded-[50px] p-2 pr-2.5 shadow-md border border-neutral-200/50 flex items-center justify-between" style={{ height: '76px' }}>
                  
                  {/* Left Box (Star + Chevrons) */}
                  <div className="bg-white h-full px-5 gap-3 rounded-[38px] flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-neutral-100/50 transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] cursor-pointer">
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
                    className="flex-1 bg-transparent w-full min-w-0 border-none outline-none px-6 text-[18px] font-bold text-neutral-800 placeholder:text-neutral-400"
                    autoFocus
                  />
                  
                  {/* Right Box (Arrow) */}
                  <div 
                    onClick={() => setIsNewProjectOpen(false)}
                    className="bg-white h-[58px] w-[58px] shrink-0 rounded-full flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-neutral-100/50 cursor-pointer hover:bg-neutral-50 transition-all active:scale-95 group"
                  >
                    <svg className="transition-transform group-hover:translate-x-1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
