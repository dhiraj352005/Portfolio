import React from 'react';
import { Trophy, Award, Medal, Sparkles, TrendingUp, CheckCircle, ExternalLink, Code } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeetcode, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import { portfolioData } from '../data/portfolioData';

export default function Achievements() {
  const { achievements } = portfolioData;

  const getIcon = (item) => {
    if (item.imageIcon) {
      return (
        <img
          src={item.imageIcon}
          alt={`${item.title} logo`}
          className="w-6 h-6 object-contain"
        />
      );
    }
    if (item.id === 'leetcode' || item.title?.toLowerCase().includes('leetcode')) {
      return <FontAwesomeIcon icon={faLeetcode} className="w-5 h-5 text-amber-400" />;
    }
    if (item.id === 'hackerrank' || item.title?.toLowerCase().includes('hackerrank')) {
      return <FontAwesomeIcon icon={faHackerrank} className="w-5 h-5 text-emerald-400" />;
    }
    switch (item.icon) {
      case 'Trophy':
      case 'fa-trophy':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Award':
      case 'fa-award':
        return <Award className="w-5 h-5 text-cyan-400" />;
      case 'Medal':
      case 'fa-medal':
        return <Medal className="w-5 h-5 text-blue-400" />;
      case 'Code':
      case 'fa-code':
        return <Code className="w-5 h-5 text-indigo-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-3 tracking-wide">
          Recognition
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center justify-center gap-2">
          Achievements <Sparkles className="w-6 h-6 text-amber-500 dark:text-amber-300 animate-pulse" />
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
          Recognitions and milestones that showcase dedication to algorithmic excellence, competitive drive, and high-impact software engineering.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 rounded-full mt-3 shadow-sm shadow-cyan-400/50"></div>
      </div>

      {/* Responsive Grid Layout for 5 Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item) => {
          const hasImage = Boolean(item.Image || item.image);
          const bgImageUrl = item.Image || item.image;

          return (
            <div
              key={item.id}
              style={
                hasImage
                  ? {
                      backgroundImage: `url(${bgImageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }
                  : {}
              }
              className="group relative bg-white dark:bg-[#0c1527]/70 hover:bg-slate-50 dark:hover:bg-[#0c1527]/95 border border-slate-200 dark:border-slate-800/90 hover:border-cyan-500/50 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 shadow-md hover:shadow-cyan-500/10 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
            >
              {/* Overlay Wrapper for Readability */}
              <div className="absolute inset-0 bg-white/92 dark:bg-[#0c1527]/85 backdrop-blur-[2px] z-0 group-hover:bg-white/88 dark:group-hover:bg-[#0c1527]/80 transition-colors"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/75 dark:from-[#060b17] dark:via-[#0c1527]/90 dark:to-[#0c1527]/75 z-0 pointer-events-none"></div>

              {/* Top Accent Gradient Line */}
              <div
                className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${item.color} opacity-70 group-hover:opacity-100 transition-opacity z-20`}
              ></div>

              {/* Relative Content Container */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  {/* Badge & Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 group-hover:border-cyan-500/30 flex items-center justify-center shadow-sm">
                      {item.imageIcon ? (
                        <img
                          src={item.imageIcon}
                          alt={`${item.title} logo`}
                          className="w-6 h-6 object-contain"
                        />
                      ) : (
                        getIcon(item)
                      )}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/70 border border-cyan-300 dark:border-cyan-500/30 px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300/90 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Metric Preview Box */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 mt-auto">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                        <span>{item.stat || item.metric || item.statValue}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                        {item.subMetric || item.statTitle}
                      </div>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-all">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                  </div>

                  {/* Action Link */}
                  {Boolean((item.primaryLink || item.link)?.trim()) && (
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-800/50">
                      <a
                        href={(item.primaryLink || item.link || '').replace(/^\[([^\]]+)\]\([^)]+\)$/, '$1')}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 hover:underline transition-colors"
                      >
                        <span>{item.primaryLinkLabel || 'View Details'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
