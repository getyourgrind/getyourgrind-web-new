
import React from 'react';

const Audience: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          <div className="p-12 bg-black">
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-emerald-500 mb-8 uppercase">FOR THE BUILDERS</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-emerald-500 font-mono">✓</span>
                <div>
                  <h4 className="font-bold uppercase text-lg">Responsibility Bearers</h4>
                  <p className="text-white/50 text-sm">Founders, leaders, and those with people counting on them.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-emerald-500 font-mono">✓</span>
                <div>
                  <h4 className="font-bold uppercase text-lg">System Thinkers</h4>
                  <p className="text-white/50 text-sm">People who prefer a dashboard over a pep talk.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-emerald-500 font-mono">✓</span>
                <div>
                  <h4 className="font-bold uppercase text-lg">Long-term Builders</h4>
                  <p className="text-white/50 text-sm">Those looking 10 years ahead, not 10 days.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="p-12 bg-neutral-900/40">
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-rose-500 mb-8 uppercase">NOT FOR THE DREAMERS</h3>
            <ul className="space-y-6 opacity-60">
              <li className="flex items-start gap-4">
                <span className="text-rose-500 font-mono">✕</span>
                <div>
                  <h4 className="font-bold uppercase text-lg">Excuse Makers</h4>
                  <p className="text-white/50 text-sm">If you need a reason to start, don't start.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-rose-500 font-mono">✕</span>
                <div>
                  <h4 className="font-bold uppercase text-lg">Short-term Seekers</h4>
                  <p className="text-white/50 text-sm">Looking for the latest dopamine hit of "motivation".</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-rose-500 font-mono">✕</span>
                <div>
                  <h4 className="font-bold uppercase text-lg">Chaos Lovers</h4>
                  <p className="text-white/50 text-sm">If you enjoy being out of control, stay there.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
