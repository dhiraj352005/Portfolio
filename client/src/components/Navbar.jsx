import React, { useState, useEffect } from 'react';
import { Sparkles, Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return !window.matchMedia('(prefers-color-scheme: light)').matches;
    }
    return true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Certificates', href: '#certificates', id: 'certificates' },
    { name: 'Achievements', href: '#achievements', id: 'achievements', icon: Sparkles },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certificates', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
      <nav className={`w-full max-w-5xl backdrop-blur-xl border rounded-full px-5 md:px-7 py-3 shadow-xl flex items-center justify-between transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-[#0c1527]/90 border-cyan-500/30 shadow-slate-200/50 dark:shadow-cyan-950/40' 
          : 'bg-white/80 dark:bg-[#0c1527]/75 border-slate-200/80 dark:border-slate-800/80 shadow-slate-200/30 dark:shadow-cyan-950/20'
      }`}>
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 dark:from-cyan-400 dark:via-sky-400 dark:to-blue-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity flex items-center gap-1.5"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse shadow-sm shadow-cyan-400"></span>
          Portfolio
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-900/50 p-1 rounded-full border border-slate-200/80 dark:border-slate-800/60">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/15 to-blue-500/15 dark:from-cyan-500/20 dark:to-blue-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-400/50 dark:border-cyan-500/40 shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
                }`}
              >
                {link.name}
                {Icon && <Icon className="w-3 h-3 text-amber-500 dark:text-amber-300 animate-pulse" />}
              </a>
            );
          })}
        </div>

        {/* Right Action Icons & Mobile Hamburger */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-sm"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" /> : <Moon className="w-4 h-4 text-slate-700 hover:-rotate-12 transition-transform" />}
          </button>

          {/* Quick Contact CTA on desktop */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-1 text-xs font-semibold px-4 py-2 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 transition-all hover:scale-105"
          >
            Hire Me
            <ArrowUpRight className="w-3 h-3" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 bg-white/95 dark:bg-[#0c1527]/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-2xl shadow-slate-300/50 dark:shadow-cyan-950/40 flex flex-col gap-2 z-50 animate-in fade-in zoom-in-95 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeSection === link.id
                  ? 'bg-cyan-50 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/40'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-cyan-600 dark:hover:text-cyan-300'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center text-sm font-semibold px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
}
