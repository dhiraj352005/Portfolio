import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from './fontAwesomeIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#060b17] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Copyright */}
        <div className="text-center sm:text-left">
          <div className="text-lg font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
            Dhiraj Raut
          </div>
          <p className="text-xs text-slate-400 flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
            <span>© 2026 Dhiraj Raut. All rights reserved. Made with <Heart className="w-3.5 h-3.5 text-rose-500 inline-block fill-rose-500" /></span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="inline-flex items-center text-slate-400 hover:text-cyan-400 transition-colors ml-1"
            >
              <FontAwesomeIcon icon={byPrefixAndName.far['envelope']} className="mr-1.5 text-cyan-400" />
              {portfolioData.personal.email}
            </a>
          </p>
        </div>

        {/* Center/Right: Social Links & Back to Top */}
        <div className="flex flex-wrap items-center gap-3 justify-center">
          <a
            href={portfolioData.personal.socials.github}
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={byPrefixAndName.fab['square-github']} className="text-lg" />
          </a>
          <a
            href={portfolioData.personal.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-all"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={byPrefixAndName.fab['linkedin']} className="text-lg" />
          </a>
          <a
            href={portfolioData.personal.socials.leetcode}
            target="_blank"
            rel="noreferrer"
            title="LeetCode"
            className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-all"
            aria-label="LeetCode"
          >
            <FontAwesomeIcon icon={byPrefixAndName.fab['leetcode']} className="text-base" />
          </a>
          <a
            href={portfolioData.personal.socials.hackerrank}
            target="_blank"
            rel="noreferrer"
            title="HackerRank"
            className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
            aria-label="HackerRank"
          >
            <FontAwesomeIcon icon={byPrefixAndName.fab['hackerrank']} className="text-base" />
          </a>
          <a
            href={portfolioData.personal.socials.twitter}
            target="_blank"
            rel="noreferrer"
            title="Twitter / X"
            className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all"
            aria-label="Twitter / X"
          >
            <FontAwesomeIcon icon={byPrefixAndName.fab['square-x-twitter']} className="text-lg" />
          </a>
          <a
            href={portfolioData.personal.socials.reddit}
            target="_blank"
            rel="noreferrer"
            title="Reddit"
            className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500/40 transition-all"
            aria-label="Reddit"
          >
            <FontAwesomeIcon icon={byPrefixAndName.fab['square-reddit']} className="text-lg" />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            title="Email"
            className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={byPrefixAndName.far['envelope']} className="text-base" />
          </a>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:scale-110 transition-all"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
