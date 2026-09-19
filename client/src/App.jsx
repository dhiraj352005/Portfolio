import React, { useEffect } from 'react';
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
  useEffect(() => {
    document.title = "Dhiraj Raut | Portfolio";

    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = '/favicon.png';
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#060b17] dark:text-slate-100 selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden font-sans transition-colors duration-300">
      {/* Subtle Global Ambient Glow Accents */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-cyan-500/15 via-sky-400/5 to-transparent dark:from-cyan-500/10 dark:via-blue-600/5 blur-3xl pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-sky-500/10 dark:bg-blue-500/5 blur-3xl pointer-events-none -z-10"></div>

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
