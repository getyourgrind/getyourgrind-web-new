
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-44 pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Vibrant Background Aura Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-violet-400/20 blur-[180px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange-400/15 blur-[160px] rounded-full -z-10"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-400/10 blur-[200px] rounded-full -z-10"></div>
      
      <div className="animate-reveal opacity-0" style={{ animationDelay: '0.2s' }}>
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm text-[10px] uppercase tracking-[0.4em] font-black mb-12 text-black/40 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#8A7CFF] shadow-[0_0_12px_rgba(138,124,255,0.6)] animate-ping"></span>
          Level Up Your Reality
        </div>
      </div>
      
      <h1 className="text-reveal text-6xl md:text-[8.5rem] font-extrabold tracking-[-0.06em] leading-[0.85] mb-12 max-w-7xl mx-auto animate-reveal opacity-0" style={{ animationDelay: '0.4s' }}>
        OPTIMIZE <br />
        <span className="italic">EVERYTHING.</span>
      </h1>
      
      <p className="max-w-xl mx-auto text-lg md:text-xl text-black/50 font-medium leading-relaxed mb-16 animate-reveal opacity-0" style={{ animationDelay: '0.6s' }}>
        Forget generic motivation. Build a high-precision operating system for your progress.
        Measure what matters. Build habits that stick. Gain total control.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-8 animate-reveal opacity-0" style={{ animationDelay: '0.8s' }}>
        <a 
          href="#register" 
          className="group relative px-12 py-6 bg-[#1A1A1A] text-white rounded-full text-lg font-bold hover:scale-105 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)] magnetic-btn overflow-hidden"
        >
          <span className="relative z-10">Initialize Protocol</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#8A7CFF] to-[#FF8A7C] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
        </a>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-3">
            {[1,2,3].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-neutral-200 overflow-hidden shadow-sm">
                <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="user" />
              </div>
            ))}
          </div>
          <span className="text-[10px] font-mono tracking-widest text-black/30 uppercase font-bold">5,250+ OPERATORS ACTIVE</span>
        </div>
      </div>

      {/* Decorative Mockup Element with Bright Glass */}
      <div className="mt-32 w-full max-w-6xl mx-auto animate-reveal opacity-0" style={{ animationDelay: '1s' }}>
        <div className="relative group p-[1px] rounded-[3.5rem] bg-gradient-to-b from-black/5 to-transparent">
          <div className="relative glass-pill rounded-[3.5rem] aspect-[21/9] overflow-hidden flex flex-col items-center justify-center bg-white/40 shadow-2xl">
            <div className="absolute top-10 w-full px-12 flex justify-between items-center opacity-40 font-mono text-[10px] tracking-widest text-black font-bold">
              <span>GYG_OS_v2.5 // LIVE</span>
              <span className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                 PERFORMANCE: PEAK
              </span>
            </div>
            <div className="text-black/5 text-[15vw] font-black italic tracking-tighter select-none rotate-[-2deg]">CORE DASH</div>
            
            {/* Vibrant Cards */}
            <div className="absolute bottom-[-10%] left-[-5%] w-64 h-80 bg-white border border-black/5 rounded-3xl p-6 rotate-[-12deg] group-hover:rotate-[-5deg] transition-all duration-700 shadow-xl">
               <div className="w-12 h-1 bg-violet-400 rounded-full mb-4"></div>
               <div className="text-black/30 text-xs font-mono font-bold">Streak: 42 Days</div>
               <div className="mt-6 h-32 w-full bg-violet-50 rounded-xl flex items-end p-4 gap-1">
                  {[40, 70, 50, 90, 60, 80].map((h, i) => (
                    <div key={i} className="flex-1 bg-violet-400/30 rounded-t-sm" style={{height: `${h}%`}}></div>
                  ))}
               </div>
            </div>
            <div className="absolute bottom-[-15%] right-[-5%] w-64 h-80 bg-white border border-black/5 rounded-3xl p-6 rotate-[12deg] group-hover:rotate-[5deg] transition-all duration-700 shadow-xl">
               <div className="w-12 h-1 bg-orange-400 rounded-full mb-4"></div>
               <div className="text-black/30 text-xs font-mono font-bold">XP: 14,250</div>
               <div className="mt-6 flex flex-col gap-3">
                  <div className="h-4 w-full bg-orange-50 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-orange-400"></div>
                  </div>
                  <div className="h-4 w-3/4 bg-orange-50 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-orange-400"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
