import React from 'react';
import { Briefcase, Building2, Calendar, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Centered Pill Badge */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-500/30 text-xs font-semibold text-cyan-700 dark:text-cyan-400 mb-3 tracking-wide">
          My Journey
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Work <span className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3 shadow-sm shadow-cyan-400/50"></div>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l border-cyan-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
        {experience.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Bullet Icon */}
            <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-10 h-10 rounded-full bg-white dark:bg-[#0c1527] border-2 border-cyan-500 dark:border-cyan-400/80 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-md group-hover:scale-110 group-hover:border-cyan-400 transition-all">
              <Briefcase className="w-4 h-4" />
            </div>

            {/* Experience Card */}
            <div className="bg-white dark:bg-[#0c1527]/70 hover:bg-slate-50 dark:hover:bg-[#0c1527]/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 backdrop-blur-md rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-md hover:shadow-lg dark:shadow-xl dark:hover:shadow-cyan-500/10">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1 font-medium text-cyan-700 dark:text-cyan-300">
                      <Building2 className="w-3.5 h-3.5" />
                      {exp.company}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
                  {exp.type}
                </span>
              </div>

              {/* Bullet Points with Chevron Arrow */}
              <ul className="space-y-3 mt-5">
                {exp.bulletPoints.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <ChevronRight className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
