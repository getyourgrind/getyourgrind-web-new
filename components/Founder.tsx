
import React from 'react';

const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-32 px-6">
      <div className="max-w-5xl mx-auto bg-white border border-black/5 p-12 md:p-20 rounded-[3rem] flex flex-col md:flex-row items-center gap-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-400/5 blur-[100px] rounded-full"></div>
        
        <div className="w-56 h-56 rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border-4 border-black/5 shadow-lg shrink-0 group">
          <img 
            src="https://picsum.photos/seed/karl-vision/600/600" 
            alt="Karl Hüper" 
            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-[#8A7CFF] font-mono text-xs font-black tracking-[0.4em] uppercase mb-6">The Architect</h2>
          <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter text-black">KARL HÜPER</h3>
          <p className="text-xl text-black/60 leading-relaxed mb-8 italic font-medium">
            "Performance is the result of clean engineering. We're here to give you the blueprints."
          </p>
          <div className="flex gap-10 font-mono text-[11px] uppercase tracking-[0.2em] text-black/20">
            <div className="flex flex-col gap-1">
              <span className="text-[#8A7CFF] font-black text-2xl tracking-tighter">1M+</span>
              <span className="font-bold">GLOBAL REACH</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#FF8A7C] font-black text-2xl tracking-tighter">SYSTEMS</span>
              <span className="font-bold">FIRST MINDSET</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
