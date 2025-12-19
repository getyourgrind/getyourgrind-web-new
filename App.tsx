
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Ecosystem from './components/Ecosystem';
import Founder from './components/Founder';
import Registration from './components/Registration';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Ecosystem />
        <Founder />
        <Registration />
      </main>
      <Footer />
    </div>
  );
};

export default App;
