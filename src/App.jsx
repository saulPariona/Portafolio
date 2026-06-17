import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />

      
      <footer className="py-8 text-center text-xs text-slate-600 border-t border-slate-900">
        © {new Date().getFullYear()} -  Saul Anibal Pariona Ramos · Huancayo, Perú
      </footer>
    </div>
  );
}

export default App;