import React, { useState } from 'react';
import { ArrowDown, ExternalLink, Code2, Terminal, Send } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from './fontAwesomeIcons';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  const { personal } = portfolioData;
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 translate-x-1/3 w-[28rem] h-[28rem] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      {/* Background Star Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none -z-10"></div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline, Bio & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c1527] border border-cyan-500/30 text-xs font-medium text-cyan-400 mb-6 shadow-sm shadow-cyan-950">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4"></span>
            Open to Roles & Internships
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
            {personal.tagline}
          </p>

          {/* Key Metrics / Highlights strip */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
              <span className="text-cyan-400 font-bold">GPA: 8.45</span>
              <span>PCCOE Pune</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
              <span className="text-amber-400 font-bold">1616</span>
              <span>LeetCode Rating</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
              <span className="text-emerald-400 font-bold">SDE Intern</span>
              <span>Zensar Technologies, Pune</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              View Projects
              <ExternalLink className="w-4 h-4 text-slate-950" />
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full bg-[#0c1527]/80 hover:bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 font-semibold text-sm transition-all shadow-md hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              Contact Me
              <Send className="w-4 h-4 text-cyan-400" />
            </a>
          </div>

          {/* Social Links Row */}
          <div className="mt-10 flex flex-wrap items-center gap-3.5">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub Profile"
              className="w-10 h-10 rounded-full bg-[#0c1527] border border-slate-800 hover:border-cyan-400/50 flex items-center justify-center text-slate-400 hover:scale-110 transition-all shadow-md group"
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon icon={byPrefixAndName.fab['square-github']} className="text-2xl hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn Profile"
              className="w-10 h-10 rounded-full bg-[#0c1527] border border-slate-800 hover:border-blue-400/50 flex items-center justify-center text-slate-400 hover:scale-110 transition-all shadow-md group"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={byPrefixAndName.fab['linkedin']} className="text-2xl hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href={personal.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              title="LeetCode Profile"
              className="w-10 h-10 rounded-full bg-[#0c1527] border border-slate-800 hover:border-amber-400/50 flex items-center justify-center text-slate-400 hover:scale-110 transition-all shadow-md group"
              aria-label="LeetCode Profile"
            >
              <FontAwesomeIcon icon={byPrefixAndName.fab['leetcode']} className="text-xl hover:text-amber-400 transition-colors" />
            </a>
            <a
              href={personal.socials.hackerrank}
              target="_blank"
              rel="noreferrer"
              title="HackerRank Profile"
              className="w-10 h-10 rounded-full bg-[#0c1527] border border-slate-800 hover:border-emerald-400/50 flex items-center justify-center text-slate-400 hover:scale-110 transition-all shadow-md group"
              aria-label="HackerRank Profile"
            >
              <FontAwesomeIcon icon={byPrefixAndName.fab['hackerrank']} className="text-xl hover:text-emerald-400 transition-colors" />
            </a>
            <a
              href={personal.socials.twitter}
              target="_blank"
              rel="noreferrer"
              title="X / Twitter Profile"
              className="w-10 h-10 rounded-full bg-[#0c1527] border border-slate-800 hover:border-sky-400/50 flex items-center justify-center text-slate-400 hover:scale-110 transition-all shadow-md group"
              aria-label="Twitter / X Profile"
            >
              <FontAwesomeIcon icon={byPrefixAndName.fab['square-x-twitter']} className="text-2xl hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href={personal.socials.reddit}
              target="_blank"
              rel="noreferrer"
              title="Reddit Profile"
              className="w-10 h-10 rounded-full bg-[#0c1527] border border-slate-800 hover:border-orange-400/50 flex items-center justify-center text-slate-400 hover:scale-110 transition-all shadow-md group"
              aria-label="Reddit Profile"
            >
              <FontAwesomeIcon icon={byPrefixAndName.fab['square-reddit']} className="text-2xl hover:text-cyan-400 transition-colors" />
            </a>
            <span className="text-xs text-slate-400 ml-1 border-l border-slate-800 pl-3 hidden sm:inline-flex items-center">
              <FontAwesomeIcon icon={byPrefixAndName.fass['location-dot']} className="mr-2 text-cyan-400" />
              Pune, India
            </span>
          </div>
        </div>

        {/* Right Column: Framed Portrait Card with Neon Glow */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          {/* Ambient Glow behind portrait */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-transparent rounded-3xl blur-2xl -z-10 scale-95"></div>

          {/* Framed Container */}
          <div className="relative w-72 sm:w-80 md:w-96 rounded-3xl p-2.5 bg-gradient-to-b from-cyan-500/30 via-slate-800/40 to-slate-900/60 backdrop-blur-xl border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 group transition-all duration-300 hover:border-cyan-400/60">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#0a1020] flex items-center justify-center border border-slate-800">
              {!imgError ? (
                <img
                  src={profileImg}
                  alt={personal.name}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                /* Fallback stylized developer avatar card */
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-900 to-[#0c1527]">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/30 border border-cyan-500/40 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/10">
                    <Code2 className="w-12 h-12 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{personal.name}</h3>
                  <p className="text-xs text-cyan-300 font-medium mb-3">SDE & Full Stack Dev</p>
                  <p className="text-[11px] text-slate-400 max-w-[200px]">
                    Drop your headshot at <span className="text-cyan-400 font-mono">client/src/assets/profile.png</span>
                  </p>
                </div>
              )}

              {/* Floating Badge: SDE Intern */}
              <div className="absolute bottom-3 left-3 right-3 bg-[#0c1527]/90 backdrop-blur-md border border-cyan-500/30 rounded-xl p-2.5 flex items-center justify-center gap-3 shadow-lg">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Zensar Tech</div>
                  <div className="text-[10px] text-cyan-300">SDE Intern</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Scroll Down Indicator */}
      <div className="mt-16 sm:mt-20 flex justify-center">
        <a
          href="#about"
          aria-label="Scroll to About Me"
          className="w-11 h-11 rounded-full bg-[#0c1527]/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all hover:scale-110 shadow-lg shadow-cyan-950/20 animate-bounce"
        >
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
