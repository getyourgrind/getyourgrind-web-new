
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// --- CONTENT DATA ---
const translations = {
  de: {
    nav_system: "System",
    nav_ecosystem: "Ecosystem",
    nav_founder: "Gründer",
    nav_waitlist: "Warteliste",
    hero_badge: "Level Up Your Reality",
    hero_title_1: "BAUE SYSTEME.",
    hero_title_2: "KONTROLLIERE ALLES.",
    hero_sub: "GetYourGrind ist kein Motivationstool. Es ist ein Operating System für Disziplin, Fortschritt und Kontrolle. Daten > Gefühle.",
    btn_protocol: "Protocol starten",
    problem_title: "Motivation ist eine Lüge.",
    problem_sub: "Gefühle sind instabil. Systeme sind eine Entscheidung. Wir automatisieren diese Entscheidung.",
    eco_title: "Das Ecosystem",
    eco_sub: "Mehr als nur eine App. Ein modulares Framework für Performance.",
    founder_title: "Der Architekt",
    founder_bio: "Karl Hüper ist System-Architekt, Sportler und Gründer. Sein Fokus liegt auf der Entwicklung messbarer Strukturen für persönlichen und technischen Fortschritt.",
    waitlist_title: "Tritt dem Kollektiv bei.",
    waitlist_sub: "Sichere dir Early Access und lebenslangen Priority Status.",
    footer_copy: "Entwickelt für Exzellenz.",
  },
  en: {
    nav_system: "System",
    nav_ecosystem: "Ecosystem",
    nav_founder: "Founder",
    nav_waitlist: "Waitlist",
    hero_badge: "Level Up Your Reality",
    hero_title_1: "BUILD SYSTEMS.",
    hero_title_2: "GAIN CONTROL.",
    hero_sub: "GetYourGrind isn't a motivation tool. It's an operating system for discipline, progress, and control. Data > Feelings.",
    btn_protocol: "Initialize Protocol",
    problem_title: "Motivation is a lie.",
    problem_sub: "Feelings are unstable. Systems are a choice. We automate that choice.",
    eco_title: "The Ecosystem",
    eco_sub: "Beyond an app. A modular framework for high performance.",
    founder_title: "The Architect",
    founder_bio: "Karl Hüper is a system architect, athlete, and founder. He focuses on building measurable structures for personal and technical progress.",
    waitlist_title: "Join the Vanguard.",
    waitlist_sub: "Secure early access and lifetime priority status.",
    footer_copy: "Engineered for Excellence.",
  }
};

// --- COMPONENTS ---

const Navigation = ({ lang, setLang, theme, setTheme }: any) => {
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang as keyof typeof translations];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pt-4 md:pt-8 px-4 flex justify-center">
      <div className={`glass w-full max-w-5xl rounded-full border border-black/5 dark:border-white/10 flex items-center justify-between px-4 md:px-8 py-3 md:py-4 transition-all duration-500 ${scrolled ? 'bg-white/80 dark:bg-black/80 shadow-xl' : 'bg-transparent'}`}>
        <div className="flex items-center gap-2 md:gap-4 font-black text-xl tracking-tighter italic cursor-pointer">
          <div className="bg-black dark:bg-white text-white dark:text-black w-8 h-8 rounded-lg flex items-center justify-center text-xs not-italic">GYG</div>
          <span className="hidden sm:inline">Karl Hüper</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">
          <a href="#system" className="hover:text-black dark:hover:text-white transition-colors">{t.nav_system}</a>
          <a href="#ecosystem" className="hover:text-black dark:hover:text-white transition-colors">{t.nav_ecosystem}</a>
          <a href="#founder" className="hover:text-black dark:hover:text-white transition-colors">{t.nav_founder}</a>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button onClick={() => setLang(lang === 'de' ? 'en' : 'de')} className="text-[10px] font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity p-2">
            {lang === 'de' ? 'EN' : 'DE'}
          </button>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 opacity-50 hover:opacity-100">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <a href="#register" className="bg-black dark:bg-white text-white dark:text-black px-4 md:px-6 py-2 rounded-full text-[10px] md:text-[11px] font-bold uppercase hover:bg-[#8A7CFF] dark:hover:bg-[#8A7CFF] dark:hover:text-white transition-all shadow-md">
            {t.nav_waitlist}
          </a>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  const [lang, setLang] = useState<'de' | 'en'>('de');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const t = translations[lang];

  return (
    <div className="min-h-screen">
      <Navigation lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />

      {/* HERO */}
      <section className="relative min-h-[90vh] pt-44 pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-500/10 blur-[180px] rounded-full -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/10 blur-[180px] rounded-full -z-10"></div>
        
        <div className="animate-reveal opacity-0" style={{ animationDelay: '0.1s' }}>
          <span className="px-4 py-1.5 rounded-full border border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/50 text-[10px] font-black uppercase tracking-[0.3em] text-black/40 dark:text-white/40 mb-8 md:mb-12 inline-block">
            {t.hero_badge}
          </span>
        </div>
        
        <h1 className="text-5xl md:text-[7.5rem] font-black tracking-[-0.05em] leading-[0.85] mb-12 animate-reveal opacity-0 text-black dark:text-white" style={{ animationDelay: '0.3s' }}>
          {t.hero_title_1} <br/><span className="text-reveal italic uppercase">{t.hero_title_2}</span>
        </h1>
        
        <p className="max-w-xl text-base md:text-xl text-black/40 dark:text-white/40 font-medium mb-12 animate-reveal opacity-0" style={{ animationDelay: '0.5s' }}>
          {t.hero_sub}
        </p>
        
        <div className="animate-reveal opacity-0 flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.7s' }}>
          <a href="#register" className="px-10 py-5 bg-black dark:bg-white text-white dark:text-black rounded-full font-black uppercase text-sm hover:scale-105 transition-all shadow-xl">
            {t.btn_protocol}
          </a>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section id="system" className="py-24 md:py-44 px-6 bg-white dark:bg-[#080808] border-y border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="text-[#8A7CFF] font-mono text-xs font-black tracking-[0.4em] mb-8 uppercase">The Protocol</h2>
            <h3 className="text-4xl md:text-7xl font-black uppercase leading-none mb-10 tracking-tighter">
              {t.problem_title} <br/><span className="text-black/10 dark:text-white/10 italic">System &gt; Motivation.
</span>
            </h3>
            <p className="text-lg md:text-xl text-black/40 dark:text-white/50 font-medium leading-relaxed">
              {t.problem_sub}
            </p>
          </div>
          <div className="grid gap-6">
            {[
              { id: "01", t: "TRACKING", d: "Measurement of every relevant action." },
              { id: "02", t: "ANALYSIS", d: "Detection of performance patterns." },
              { id: "03", t: "EXECUTION", d: "Discipline becomes a mechanical output." }
            ].map((item) => (
              <div key={item.id} className="p-8 border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] rounded-3xl group hover:border-[#8A7CFF] transition-colors">
                <div className="text-[#8A7CFF] font-mono font-black mb-4">{item.id}</div>
                <h4 className="font-black text-xl uppercase mb-2 text-black dark:text-white">{item.t}</h4>
                <p className="text-black/40 dark:text-white/40 text-sm font-bold uppercase tracking-widest">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KARL HÜPER PROFILE - FOR SEO */}
      <section id="founder" className="py-24 md:py-44 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8A7CFF] to-[#FF8A7C] blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative aspect-square md:aspect-[4/5] bg-black rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border-4 border-black/5 dark:border-white/10">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" alt="Karl Hüper Portrait" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
            </div>
          </div>
          <div>
            <h2 className="text-[#8A7CFF] font-mono text-xs font-black tracking-[0.4em] mb-8 uppercase">{t.founder_title}</h2>
            <h3 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter uppercase italic">KARL <br/><span className="text-reveal not-italic">HÜPER.</span></h3>
            <p className="text-xl md:text-2xl text-black/50 dark:text-white/50 font-medium mb-12 leading-relaxed italic">
              "{t.founder_bio}"
            </p>
            
            <div className="grid grid-cols-2 gap-4 font-mono text-[10px] uppercase font-black tracking-widest text-black/40 dark:text-white/40">
              <div className="p-6 border border-black/5 dark:border-white/5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02]">
                <div className="text-black dark:text-white text-lg mb-2"> Wennigsen, DE</div>
                Base of Operations
              </div>
              <div className="p-6 border border-black/5 dark:border-white/5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02]">
                <div className="text-black dark:text-white text-lg mb-2">Tech & Sports</div>
                Focus Areas
              </div>
              <div className="p-6 border border-black/5 dark:border-white/5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02]">
                <div className="text-black dark:text-white text-lg mb-2">Referee</div>
                Authority & Focus
              </div>
              <div className="p-6 border border-black/5 dark:border-white/5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02]">
                <div className="text-black dark:text-white text-lg mb-2">WingTsun</div>
                Mental Discipline
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section id="ecosystem" className="py-24 md:py-44 px-6 bg-black text-white rounded-[3rem] md:rounded-[5rem] mx-2 md:mx-6 my-20 overflow-hidden relative border border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8A7CFF]/20 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-[#8A7CFF] font-mono text-xs font-black tracking-[0.4em] mb-12 uppercase">{t.eco_title}</h2>
          <h3 className="text-4xl md:text-7xl font-black mb-20 uppercase tracking-tighter max-w-4xl mx-auto">{t.eco_sub}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Core', 'Money', 'Muscle', 'Brain'].map(item => (
              <div key={item} className="p-12 border border-white/10 bg-white/5 rounded-[3rem] hover:bg-white/10 hover:-translate-y-2 transition-all">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-10 text-xl mx-auto">
                  {item === 'Core' ? '🧠' : item === 'Money' ? '💰' : item === 'Muscle' ? '💪' : '⚡'}
                </div>
                <h4 className="text-2xl font-black uppercase mb-2 tracking-tighter">{item}Grind</h4>
                <p className="text-white/20 text-[10px] font-black uppercase tracking-widest italic">Protocol v1.0</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="register" className="py-24 md:py-44 px-6">
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/5 p-10 md:p-32 rounded-[4rem] md:rounded-[6rem] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#8A7CFF]/10 to-transparent pointer-events-none"></div>
          <h2 className="text-5xl md:text-[9rem] font-black uppercase italic mb-8 leading-none tracking-tighter text-black dark:text-white">BE <span className="text-reveal">FIRST.</span></h2>
          <p className="text-black/40 dark:text-white/40 text-base md:text-xl font-bold mb-16 uppercase tracking-widest">{t.waitlist_sub}</p>
          
          {submitted ? (
            <div className="bg-black dark:bg-white text-white dark:text-black p-10 rounded-full font-black uppercase tracking-[0.3em] animate-pulse">
              PROTOCOL INITIALIZED.
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col md:flex-row gap-4 bg-black/[0.02] dark:bg-white/[0.02] p-3 rounded-[3.5rem] border border-black/5 dark:border-white/5 relative z-10">
              <input 
                type="email" required placeholder="E-Mail Operator" 
                className="flex-1 px-10 py-6 rounded-full bg-transparent outline-none font-bold text-black dark:text-white"
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="bg-black dark:bg-white text-white dark:text-black px-12 py-6 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-[#8A7CFF] dark:hover:bg-[#8A7CFF] dark:hover:text-white transition-all shadow-xl">
                Notify Me
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="py-20 text-center border-t border-black/5 dark:border-white/5 bg-white dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">
          <div className="font-black text-3xl italic tracking-tighter uppercase">GetYourGrind</div>
          <div className="flex gap-10 font-mono text-[10px] text-black/20 dark:text-white/20 uppercase tracking-[0.4em] font-black">
            <span>Karl Hüper</span>
            <span>&copy; 2024</span>
            <span>Wennigsen, Germany</span>
          </div>
          <div className="text-[9px] font-mono text-black/10 dark:text-white/10 uppercase tracking-[0.8em] font-black italic">
            {t.footer_copy}
          </div>
        </div>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<React.StrictMode><App /></React.StrictMode>);
