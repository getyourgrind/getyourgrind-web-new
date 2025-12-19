
import React from 'react';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-[#8A7CFF] font-mono text-xs font-black tracking-[0.4em] uppercase mb-4">The Logic</h2>
          <h3 className="text-4xl md:text-7xl font-black tracking-tight leading-none mb-8 text-black">
            SOLVING FOR <br />
            <span className="text-black/20 italic">CONSISTENCY.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "No More Hype", desc: "Motivation is a feeling. Systems are a choice. We automate the choice.", icon: "🔥", color: "bg-orange-50 text-orange-600" },
            { title: "Metric Truth", desc: "If you don't measure it, you're guessing. Guessing leads to failure.", icon: "📉", color: "bg-blue-50 text-blue-600" },
            { title: "Pattern Control", desc: "Randomness is your enemy. Structure is your superpower. Build the cage for chaos.", icon: "🌪️", color: "bg-emerald-50 text-emerald-600" }
          ].map((item, i) => (
            <div key={i} className="bento-card p-12 rounded-[2.5rem] group border border-black/5">
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform shadow-sm`}>{item.icon}</div>
              <h4 className="text-2xl font-extrabold mb-4 uppercase text-black tracking-tighter">{item.title}</h4>
              <p className="text-black/50 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
