
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="max-w-xs">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-[#1A1A1A] rounded-lg flex items-center justify-center font-black text-white text-xs tracking-tighter shadow-sm">
              GYG
            </div>
            <span className="font-extrabold tracking-tight text-xl uppercase italic text-black">GetYourGrind</span>
          </div>
          <p className="text-black/40 text-sm font-semibold leading-relaxed">
            The world's premier architecture for human performance and systematic progress.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-[11px] font-black uppercase tracking-widest text-black">
          <div className="flex flex-col gap-4">
            <span className="text-black/10">Product</span>
            <a href="#system" className="hover:text-[#8A7CFF] transition-colors">Core OS</a>
            <a href="#ecosystem" className="hover:text-[#8A7CFF] transition-colors">Ecosystem</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-black/10">Legal</span>
            <a href="#" className="hover:text-[#8A7CFF] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#8A7CFF] transition-colors">Terms</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-black/10">Social</span>
            <a href="#" className="hover:text-[#8A7CFF] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[#8A7CFF] transition-colors">Instagram</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-mono text-black/20 uppercase tracking-[0.4em] font-bold">
        <span>&copy; 2024 GETYOURGRIND &trade;</span>
        <span>ENGINEERED FOR EXCELLENCE.</span>
      </div>
    </footer>
  );
};

export default Footer;
