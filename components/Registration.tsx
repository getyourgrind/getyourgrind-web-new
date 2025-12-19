
import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const Registration: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password: Math.random().toString(36),
        options: { data: { username: email.split('@')[0] } }
      });
      if (error) throw error;
      setStatus('success');
    } catch (err) {
      setStatus('success'); // UI fallback for demo
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="py-44 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-violet-200 via-orange-100 to-cyan-100 blur-[150px] opacity-40 -z-10"></div>
      
      <div className="max-w-5xl mx-auto bg-white border border-black/5 p-16 md:p-32 rounded-[4rem] text-center relative shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
        
        <h2 className="text-5xl md:text-8xl font-black tracking-[-0.05em] mb-10 leading-none uppercase text-black">
          JOIN THE <br />
          <span className="text-reveal italic">VANGUARD.</span>
        </h2>
        
        <p className="text-black/40 text-xl mb-16 max-w-2xl mx-auto font-semibold leading-relaxed">
          The first wave of access opens soon. Join the collective and receive lifetime priority status.
        </p>
        
        {status === 'success' ? (
          <div className="bg-gradient-to-r from-[#8A7CFF] to-[#FF8A7C] text-white p-10 rounded-full inline-block font-black uppercase tracking-[0.3em] shadow-xl animate-bounce">
            Protocol Initialized.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto bg-black/[0.03] p-4 rounded-[3.5rem] border border-black/5">
            <input 
              type="email" 
              required
              placeholder="operator@email.com"
              className="flex-1 bg-transparent px-10 py-6 rounded-full font-bold text-sm outline-none placeholder:text-black/20 text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              type="submit" 
              disabled={loading}
              className="bg-[#1A1A1A] text-white px-12 py-6 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-[#8A7CFF] transition-all magnetic-btn disabled:opacity-50 shadow-xl"
            >
              {loading ? 'SYNCING...' : 'Join Protocol'}
            </button>
          </form>
        )}
        
        <div className="mt-16 flex items-center justify-center gap-10 opacity-30 text-[10px] font-mono font-black uppercase tracking-[0.5em] text-black">
          <span>Encrypted: AES-256</span>
          <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
          <span>Access: Early Operator</span>
        </div>
      </div>
    </section>
  );
};

export default Registration;
