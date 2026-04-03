"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  useEffect(() => {
    setHash(window.location.hash);
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [pathname]);

  // If we're on the dashboard, don't show the main landing page navbar
  if (pathname && pathname.startsWith('/dashboard')) {
    return null;
  }

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Community', href: '/#community' },
    { name: 'Support', href: '/support' },
    { name: 'Pricing', href: '/pricing' }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', position: 'fixed', top: '0', left: 0, right: 0, zIndex: 1000, pointerEvents: 'none', padding: '12px' }}>
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.7)',
        padding: '6px 6px',
        borderRadius: '40px',
        backdropFilter: 'blur(16px)',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid var(--border)',
        pointerEvents: 'auto',
        justifyContent: 'space-between',
        width: '50%',
        maxWidth: '100%'
      }}>
        {/* LOGO */}
        <Link href="/" style={{ padding: '0 16px', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="8" height="8" fill="#E8612A" rx="1"/>
              <rect x="10" y="10" width="8" height="8" fill="#E8612A" rx="1"/>
              <rect x="2" y="10" width="8" height="8" fill="#E8612A" rx="1" opacity="0.3"/>
            </svg>
          </div>
          <span style={{ 
            fontSize: '20px', 
            fontWeight: '800', 
            letterSpacing: '-0.5px',
            fontFamily: 'Inter, sans-serif'
          }}>
            <span style={{ color: 'var(--text-primary)' }}>Pixel</span>
            <span style={{ color: '#E8612A' }}>Twin</span>
          </span>
        </Link>

        {/* PILL LINKS */}
        <div style={{ display: 'flex', gap: '4px', background: 'transparent' }}>
          {links.map((link) => {
            const exactPath = link.href.split('#')[0] || '/';
            const linkHash = link.href.includes('#') ? '#' + link.href.split('#')[1] : '';

            let isActive = false;
            if (hash) {
              isActive = (linkHash === hash && pathname === exactPath);
            } else {
              isActive = (pathname === exactPath && !linkHash);
            }

            return (
              <Link key={link.name} href={link.href} onClick={() => setHash(linkHash)} style={{
                padding: '10px 24px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? '#ffffff' : 'var(--text-secondary)',
                background: isActive ? 'linear-gradient(90deg, var(--accent), var(--accent-hover))' : 'transparent',
                boxShadow: isActive ? 'var(--shadow-md)' : 'none',
                transition: 'all 0.2s ease',
              }}>
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* ACTIONS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', paddingRight: '4px' }}>
          <Link href="/login" style={{
            padding: '10px 24px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: pathname === '/login' ? 600 : 500,
            color: pathname === '/login' ? '#ffffff' : 'var(--text-secondary)',
            background: pathname === '/login' ? 'linear-gradient(90deg, var(--accent), var(--accent-hover))' : 'transparent',
            boxShadow: pathname === '/login' ? 'var(--shadow-md)' : 'none',
            transition: 'all 0.2s ease'
          }}>
            Log in
          </Link>
          <Link href="/signup" style={{
            padding: '10px 24px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: pathname === '/signup' ? 600 : 500,
            color: pathname === '/signup' ? '#ffffff' : 'var(--text-secondary)',
            background: pathname === '/signup' ? 'linear-gradient(90deg, var(--accent), var(--accent-hover))' : 'transparent',
            boxShadow: pathname === '/signup' ? 'var(--shadow-md)' : 'none',
            transition: 'all 0.2s ease'
          }}>
            Sign up
          </Link>
        </div>
      </nav>
    </div>
  );
}
