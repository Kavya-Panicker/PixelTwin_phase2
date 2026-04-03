"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();

  const handleAuth = (e) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', color: '#381a11' }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '40px', background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(20px)', borderRadius: '16px', border: '1px solid rgba(242, 85, 44, 0.15)', boxShadow: '0 8px 32px rgba(92, 38, 20, 0.08)' }}>
        <h2 style={{ margin: '0 0 24px 0', textAlign: 'center' }}>Welcome back</h2>
        <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#704133', fontWeight: 500 }}>Email</label>
            <input type="email" required style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(242, 85, 44, 0.2)', borderRadius: '8px', color: '#381a11', boxSizing: 'border-box', outline: 'none' }} onFocus={(e) => e.target.style.borderColor = 'rgba(242, 85, 44, 0.5)'} onBlur={(e) => e.target.style.borderColor = 'rgba(242, 85, 44, 0.2)'} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#704133', fontWeight: 500 }}>Password</label>
            <input type="password" required style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(242, 85, 44, 0.2)', borderRadius: '8px', color: '#381a11', boxSizing: 'border-box', outline: 'none' }} onFocus={(e) => e.target.style.borderColor = 'rgba(242, 85, 44, 0.5)'} onBlur={(e) => e.target.style.borderColor = 'rgba(242, 85, 44, 0.2)'} />
          </div>
          <button type="submit" style={{ padding: '12px', background: 'linear-gradient(90deg, #ff6b4a, #d84315)', color: 'white', letterSpacing: '0.5px', borderRadius: '8px', border: 'none', fontWeight: 600, cursor: 'pointer', marginTop: '8px', transition: 'opacity 0.2s, transform 0.2s', boxShadow: '0 4px 12px rgba(242, 85, 44, 0.2)' }} onMouseOver={(e) => e.target.style.opacity = 0.9} onMouseOut={(e) => e.target.style.opacity = 1}>Log in</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#704133' }}>
          Don't have an account? <Link href="/signup" style={{ color: '#d84315', fontWeight: 600, textDecoration: 'none' }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
}
