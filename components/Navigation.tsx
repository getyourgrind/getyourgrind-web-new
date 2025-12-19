
import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 pt-8 ${scrolled ? 'translate-y-[-10px]' : ''}`}>
      <div className={`mx-auto glass-pill rounded-full flex items-center justify-between px-6 transition-all duration-700 ${scrolled ? 'max-w-2xl py-3' : 'max-w-5xl py-4'}`}>
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-10 h-10 bg-[#1A1A1A] rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-12 shadow-lg">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-extrabold tracking-tighter text-xl uppercase text-black">GYG</span>
        </div>
        
        <div className="hidden md:flex gap-10 text-[11px] font-bold text-black/40 uppercase tracking-[0.2em]">
          <a href="#system" className="hover:text-black transition-colors">OS</a>
          <a href="#ecosystem" className="hover:text-black transition-colors">Ecosystem</a>
          <a href="#founder" className="hover:text-black transition-colors">Vision</a>
        </div>
        
        <a 
          href="#register" 
          className="bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full text-[12px] font-bold hover:bg-[#8A7CFF] transition-all magnetic-btn shadow-md"
        >
          Waitlist
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
