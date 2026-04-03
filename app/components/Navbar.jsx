"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [activeUrl, setActiveUrl] = useState('/');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      setActiveUrl(pathname + hash);

      const handleLocationChange = () => {
        setActiveUrl(window.location.pathname + window.location.hash);
      };

      window.addEventListener('hashchange', handleLocationChange);
      return () => window.removeEventListener('hashchange', handleLocationChange);
    }
  }, [pathname]);

  if (pathname && pathname.startsWith('/dashboard')) {
    return null;
  }

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Community', href: '/#community' },
    { name: 'Support', href: '/support' },
    { name: 'Pricing', href: '/pricing' }
  ];

  // Helper function to check if a link should be active
  const checkIsActive = (href) => {
    // Exact match immediately handles immediate clicks and hash links
    if (activeUrl === href) return true;
    
    // Fallback: If we just don't have hash but path matches (mostly for '/' base path)
    const exactPath = href.split('#')[0] || '/';
    const linkHash = href.includes('#') ? '#' + href.split('#')[1] : '';

    if (!activeUrl.includes('#') && activeUrl === exactPath && !linkHash) {
      return true;
    }

    return false;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[1000] flex justify-center p-3 pointer-events-none">
      <nav className="flex items-center justify-between w-[50%] max-w-[100%] bg-[rgba(255,255,255,0.7)] p-1.5 rounded-[40px] backdrop-blur-[16px] shadow-md border border-[var(--border)] pointer-events-auto max-lg:w-[80%] max-sm:w-[95%]">
        {/* LOGO */}
        <Link 
          href="/" 
          onClick={() => setActiveUrl('/')}
          className="px-4 flex items-center gap-2 no-underline group"
        >
          <div className="flex items-center group-hover:scale-105 transition-transform duration-300">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="8" height="8" fill="#E8612A" rx="1"/>
              <rect x="10" y="10" width="8" height="8" fill="#E8612A" rx="1"/>
              <rect x="2" y="10" width="8" height="8" fill="#E8612A" rx="1" opacity="0.3"/>
            </svg>
          </div>
          <span className="text-[20px] font-extrabold tracking-[-0.5px] font-['Inter',sans-serif]">
            <span className="text-[var(--text-primary)]">Pixel</span>
            <span className="text-[#E8612A]">Twin</span>
          </span>
        </Link>

        {/* PILL LINKS */}
        <div className="flex gap-1 relative bg-transparent max-md:hidden">
          {links.map((link) => {
            const isActive = checkIsActive(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveUrl(link.href)}
                className={`relative px-6 py-2.5 rounded-[30px] text-[15px] transition-colors duration-300 ease-in-out font-medium z-10 ${
                  isActive ? 'text-white' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] rounded-[30px] shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-1 pr-1">
          {['/login', '/signup'].map((path) => {
            const name = path === '/login' ? 'Log in' : 'Sign up';
            const isActive = checkIsActive(path);
            const isSignup = path === '/signup';
            
            return (
              <Link
                key={path}
                href={path}
                onClick={() => setActiveUrl(path)}
                className={`relative px-6 py-2.5 rounded-[30px] text-[15px] transition-colors duration-300 ease-in-out font-medium z-10 ${
                  isActive ? 'text-white' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                } ${isSignup && !isActive ? 'bg-[var(--bg-hover)]' : ''}`}
              >
                {isActive && (
                   <motion.div
                     layoutId="active-nav-pill"
                     className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] rounded-[30px] shadow-sm -z-10"
                     transition={{ type: "spring", stiffness: 380, damping: 30 }}
                   />
                )}
                <span className="relative z-10">{name}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  );
}
