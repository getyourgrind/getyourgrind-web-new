
import React from 'react';

const Solution: React.FC = () => {
  return (
    <section id="system" className="py-32 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1">
          <h2 className="text-[#8A7CFF] font-mono text-sm tracking-[0.3em] uppercase mb-4">The Solution</h2>
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.1]">
            THE MODERN <span className="gradient-accent italic">OPERATING SYSTEM</span> FOR YOUR LIFE.
          </h3>
          <p className="text-xl text-white/50 mb-10 leading-relaxed max-w-xl">
            We don't sell hope. We sell structure. GetYourGrind is designed to make consistency addictive through data and clean engineering.
          </p>
          
          <div className="space-y-6">
            {[
              "Real-time habit metrics",
              "Advanced workout tracking",
              "Screentime & Focus control",
              "Gamified streak ecosystem"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-[#8A7CFF] flex items-center justify-center text-black">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <span className="text-lg font-bold uppercase tracking-tight">{text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1 w-full aspect-square relative">
            <div className="absolute inset-0 bg-[#8A7CFF]/5 blur-[100px] rounded-full animate-pulse"></div>
            <div className="relative glass w-full h-full rounded-feature flex items-center justify-center overflow-hidden">
                <div className="text-[#8A7CFF]/20 text-9xl font-black italic -rotate-12 select-none">GYG CORE</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
