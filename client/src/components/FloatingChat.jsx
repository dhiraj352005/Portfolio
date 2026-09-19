import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const { personal } = portfolioData;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Popover Chat Preview */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-2xl bg-[#0c1527]/95 backdrop-blur-2xl border border-cyan-500/40 p-4 shadow-2xl shadow-cyan-950/50 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-sm font-bold text-white">Dhiraj Raut</span>
              <span className="text-[10px] text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded-full border border-cyan-500/30">Online</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-4 text-xs text-slate-300 space-y-2">
            <p className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              👋 Hi there! Thanks for visiting my portfolio. Looking to collaborate or discuss an SDE role?
            </p>
            <p className="text-[11px] text-slate-400 px-1">
              Drop me a message directly or email me at <span className="text-cyan-300 font-mono">{personal.email}</span>.
            </p>
          </div>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/20 hover:scale-[1.02] transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            Leave a Message
          </a>
        </div>
      )}

      {/* Floating Cyan Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Chat"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-cyan-500 to-sky-400 hover:from-cyan-400 hover:to-sky-300 text-slate-950 flex items-center justify-center shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-110 active:scale-95 transition-all duration-300 p-3.5 border-2 border-white/20"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6 fill-slate-950" />}
      </button>
    </div>
  );
}
