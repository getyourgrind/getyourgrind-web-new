
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// --- Supabase Config ---
const supabaseUrl = 'https://kqwbqdknrsexkawsiggf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtxd2JxZGtucnNleGthd3NpZ2dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2Nzk5OTEsImV4cCI6MjA4MDI1NTk5MX0.fvhf7u6Y5sR8DQPd0KhzRF3Qa9S4n0K5ywSv2zuYvZk';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// --- Components ---

const Navigation = () => {
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
        <a href="#register" className="bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full text-[12px] font-bold hover:bg-[#8A7CFF] transition-all magnetic-btn shadow-md">Waitlist</a>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen pt-44 pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-violet-400/20 blur-[180px] rounded-full -z-10 animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange-400/15 blur-[160px] rounded-full -z-10"></div>
    <div className="animate-reveal opacity-0" style={{ animationDelay: '0.2s' }}>
      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm text-[10px] uppercase tracking-[0.4em] font-black mb-12 text-black/40 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#8A7CFF] shadow-[0_0_12px_rgba(138,124,255,0.6)] animate-ping"></span>
        Level Up Your Reality
      </div>
    </div>
    <h1 className="text-reveal text-6xl md:text-[8.5rem] font-extrabold tracking-[-0.06em] leading-[0.85] mb-12 max-w-7xl mx-auto animate-reveal opacity-0" style={{ animationDelay: '0.4s' }}>
      OPTIMIZE <br /><span className="italic">EVERYTHING.</span>
    </h1>
    <p className="max-w-xl mx-auto text-lg md:text-xl text-black/50 font-medium leading-relaxed mb-16 animate-reveal opacity-0" style={{ animationDelay: '0.6s' }}>
      Forget generic motivation. Build a high-precision operating system for your progress.
    </p>
    <div className="flex flex-col sm:flex-row items-center gap-8 animate-reveal opacity-0" style={{ animationDelay: '0.8s' }}>
      <a href="#register" className="group relative px-12 py-6 bg-[#1A1A1A] text-white rounded-full text-lg font-bold hover:scale-105 transition-all shadow-xl magnetic-btn overflow-hidden">
        <span className="relative z-10">Initialize Protocol</span>
        <div className="absolute inset-0 bg-gradient-to-r from-[#8A7CFF] to-[#FF8A7C] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
      </a>
    </div>
  </section>
);

const Problem = () => (
  <section id="problem" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-[#8A7CFF] font-mono text-xs font-black tracking-[0.4em] uppercase mb-4">The Logic</h2>
        <h3 className="text-4xl md:text-7xl font-black tracking-tight leading-none mb-8 text-black">SOLVING FOR <br /><span className="text-black/20 italic">CONSISTENCY.</span></h3>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "No More Hype", desc: "Motivation is a feeling. Systems are a choice.", icon: "🔥", color: "bg-orange-50 text-orange-600" },
          { title: "Metric Truth", desc: "If you don't measure it, you're guessing.", icon: "📉", color: "bg-blue-50 text-blue-600" },
          { title: "Pattern Control", desc: "Structure is your superpower.", icon: "🌪️", color: "bg-emerald-50 text-emerald-600" }
        ].map((item, i) => (
          <div key={i} className="bento-card p-12 rounded-[2.5rem] group border border-black/5">
            <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-sm`}>{item.icon}</div>
            <h4 className="text-2xl font-extrabold mb-4 uppercase text-black tracking-tighter">{item.title}</h4>
            <p className="text-black/50 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Ecosystem = () => (
  <section id="ecosystem" className="py-44 px-6 relative">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
        <div className="max-w-2xl">
          <h2 className="text-[#8A7CFF] font-mono text-[11px] font-black tracking-[0.5em] uppercase mb-8">Ecosystem</h2>
          <h3 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none text-black">BEYOND THE <br /><span className="text-black/10 italic">APP.</span></h3>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
        {[
          { name: 'Core OS', tag: 'Discipline', desc: 'Atomic habit architecture.', size: 'md:col-span-2 md:row-span-2', color: '#8A7CFF', icon: '🧠' },
          { name: 'Money', tag: 'Capital', desc: 'Financial engineering.', size: 'md:col-span-1 md:row-span-1', color: '#22C55E', icon: '💰' },
          { name: 'Muscle', tag: 'Output', desc: 'Physical optimization.', size: 'md:col-span-1 md:row-span-1', color: '#EF4444', icon: '💪' },
          { name: 'Brain', tag: 'Focus', desc: 'Deep work analytics.', size: 'md:col-span-2 md:row-span-1', color: '#3B82F6', icon: '⚡' },
        ].map((item, idx) => (
          <div key={idx} className={`group bento-card p-12 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-end ${item.size} border-black/5 shadow-sm`}>
            <div className="absolute top-10 right-10 text-4xl opacity-10 group-hover:opacity-100 transition-all">{item.icon}</div>
            <div className="relative z-10">
              <div className="text-[10px] font-mono font-black text-black/20 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }}></span>{item.tag}
              </div>
              <h4 className="text-3xl font-extrabold mb-4 uppercase tracking-tighter text-black">{item.name}</h4>
              <p className="text-black/40 text-sm font-semibold leading-relaxed max-w-[240px]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Registration = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    // Simulation für Demo-Zwecke (Supabase kann im Nachgang konfiguriert werden)
    setTimeout(() => {
      setStatus(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="register" className="py-44 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto bg-white border border-black/5 p-16 md:p-32 rounded-[4rem] text-center relative shadow-2xl">
        <h2 className="text-5xl md:text-8xl font-black tracking-[-0.05em] mb-10 leading-none uppercase text-black">JOIN THE <br /><span className="text-reveal italic">VANGUARD.</span></h2>
        {status ? (
          <div className="bg-gradient-to-r from-[#8A7CFF] to-[#FF8A7C] text-white p-10 rounded-full inline-block font-black uppercase tracking-[0.3em] shadow-xl">Protocol Initialized.</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto bg-black/[0.03] p-4 rounded-[3.5rem] border border-black/5">
            <input type="email" required placeholder="operator@email.com" className="flex-1 bg-transparent px-10 py-6 rounded-full font-bold text-sm outline-none text-black" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" disabled={loading} className="bg-[#1A1A1A] text-white px-12 py-6 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-[#8A7CFF] transition-all shadow-xl">{loading ? 'SYNCING...' : 'Join Protocol'}</button>
          </form>
        )}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 px-6 border-t border-black/5 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
      <div className="max-w-xs">
        <span className="font-extrabold tracking-tight text-xl uppercase italic text-black">GetYourGrind</span>
        <p className="text-black/40 text-sm font-semibold mt-4">The world's premier architecture for human performance.</p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-black/5 text-[10px] font-mono text-black/20 uppercase tracking-[0.4em] font-bold">
      &copy; 2024 GETYOURGRIND &trade;
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Ecosystem />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}
