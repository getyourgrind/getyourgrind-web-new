
import React from 'react';

const Ecosystem: React.FC = () => {
  const items = [
    { name: 'Core OS', tag: 'Discipline', desc: 'Atomic habit architecture and daily protocol tracking.', size: 'md:col-span-2 md:row-span-2', color: '#8A7CFF', icon: '🧠' },
    { name: 'Money', tag: 'Capital', desc: 'Financial engineering.', size: 'md:col-span-1 md:row-span-1', color: '#22C55E', icon: '💰' },
    { name: 'Muscle', tag: 'Output', desc: 'Physical optimization.', size: 'md:col-span-1 md:row-span-1', color: '#EF4444', icon: '💪' },
    { name: 'Brain', tag: 'Focus', desc: 'Deep work analytics and cognitive load balancing.', size: 'md:col-span-2 md:row-span-1', color: '#3B82F6', icon: '⚡' },
  ];

  return (
    <section id="ecosystem" className="py-44 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-[#8A7CFF] font-mono text-[11px] font-black tracking-[0.5em] uppercase mb-8">Ecosystem</h2>
            <h3 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none text-black">
              BEYOND THE <br />
              <span className="text-black/10 italic">APP.</span>
            </h3>
          </div>
          <p className="text-black/40 text-lg max-w-xs font-semibold border-l-2 border-black/5 pl-8 italic">
            A modular framework designed to cover every variable of performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className={`group bento-card p-12 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-end ${item.size} border-black/5 shadow-sm hover:shadow-xl`}
            >
              <div 
                className="absolute top-[-20%] right-[-20%] w-[150%] h-[150%] opacity-0 group-hover:opacity-20 transition-opacity duration-1000 blur-[80px]"
                style={{ background: `radial-gradient(circle, ${item.color} 0%, transparent 70%)` }}
              ></div>
              
              <div className="absolute top-10 right-10 text-4xl opacity-10 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700">{item.icon}</div>

              <div className="relative z-10">
                <div className="text-[10px] font-mono font-black text-black/20 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                  {item.tag}
                </div>
                <h4 className="text-3xl font-extrabold mb-4 uppercase tracking-tighter text-black">{item.name}</h4>
                <p className="text-black/40 text-sm font-semibold leading-relaxed max-w-[240px]">{item.desc}</p>
              </div>

              {/* Decorative clean reflection */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-transparent pointer-events-none opacity-50"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
