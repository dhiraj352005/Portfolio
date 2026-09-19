import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';

export default function App() {
  return (
    <div className="min-h-screen bg-[#060b17] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden font-sans">
      {/* Subtle Global Ambient Glow Accents */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent blur-3xl pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-3xl pointer-events-none -z-10"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      {/* Footer & Floating Widgets */}
      <Footer />
      <FloatingChat />
    </div>
  );
}
