import React, { useState } from 'react';
import { Award, ExternalLink, ShieldCheck, FileCheck } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from './fontAwesomeIcons';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;
  const [selectedPlatform, setSelectedPlatform] = useState('All');

  const platforms = ['All', 'Coursera', 'IBM', 'HackerRank', 'Simplilearn', 'Forage', 'AWS'];

  const filteredCerts = certifications.filter((cert) => {
    const plat = cert.platform || cert.Platform;
    if (selectedPlatform === 'All') return true;
    return plat === selectedPlatform;
  });

  // Dynamic platform tag mapping with custom FontAwesome brand/solid icons and color accents
  const getPlatformBadge = (platform) => {
    const plat = (platform || '').toLowerCase().trim();

    if (plat === 'hackerrank') {
      return {
        name: 'HackerRank',
        icon: <FontAwesomeIcon icon={byPrefixAndName.fab['hackerrank']} className="text-sm text-emerald-600 dark:text-emerald-400" />,
        badgeClasses: 'text-emerald-700 bg-emerald-50 border-emerald-300 dark:text-emerald-400 dark:bg-emerald-950/50 dark:border-emerald-500/40 shadow-sm',
        cardBorderHover: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
        viewLinkAccent: 'text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300',
      };
    }

    if (plat === 'simplilearn') {
      return {
        name: 'Simplilearn',
        icon: <FontAwesomeIcon icon={byPrefixAndName.fas['graduation-cap']} className="text-xs text-blue-600 dark:text-blue-400" />,
        badgeClasses: 'text-blue-700 bg-blue-50 border-blue-300 dark:text-blue-400 dark:bg-blue-950/50 dark:border-blue-500/40 shadow-sm',
        cardBorderHover: 'hover:border-blue-500/50 hover:shadow-blue-500/10',
        viewLinkAccent: 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
      };
    }

    if (plat === 'forage') {
      return {
        name: 'Forage',
        icon: <FontAwesomeIcon icon={byPrefixAndName.fas['briefcase']} className="text-xs text-purple-600 dark:text-purple-400" />,
        badgeClasses: 'text-purple-700 bg-purple-50 border-purple-300 dark:text-purple-400 dark:bg-purple-950/50 dark:border-purple-500/40 shadow-sm',
        cardBorderHover: 'hover:border-purple-500/50 hover:shadow-purple-500/10',
        viewLinkAccent: 'text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300',
      };
    }

    if (plat === 'coursera') {
      return {
        name: 'Coursera',
        icon: <Award className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />,
        badgeClasses: 'text-cyan-700 bg-cyan-50 border-cyan-300 dark:text-cyan-400 dark:bg-cyan-950/50 dark:border-cyan-500/40 shadow-sm',
        cardBorderHover: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10',
        viewLinkAccent: 'text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300',
      };
    }

    if (plat === 'ibm') {
      return {
        name: 'IBM',
        icon: <Award className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />,
        badgeClasses: 'text-sky-700 bg-sky-50 border-sky-300 dark:text-sky-400 dark:bg-sky-950/50 dark:border-sky-500/40 shadow-sm',
        cardBorderHover: 'hover:border-sky-500/50 hover:shadow-sky-500/10',
        viewLinkAccent: 'text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300',
      };
    }

    if (plat === 'aws') {
      return {
        name: 'AWS',
        icon: <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />,
        badgeClasses: 'text-amber-700 bg-amber-50 border-amber-300 dark:text-amber-400 dark:bg-amber-950/50 dark:border-amber-500/40 shadow-sm',
        cardBorderHover: 'hover:border-amber-500/50 hover:shadow-amber-500/10',
        viewLinkAccent: 'text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300',
      };
    }

    return {
      name: platform,
      icon: <Award className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />,
      badgeClasses: 'text-slate-700 bg-slate-100 border-slate-300 dark:text-slate-300 dark:bg-slate-900/70 dark:border-slate-700/60 shadow-sm',
      cardBorderHover: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10',
      viewLinkAccent: 'text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300',
    };
  };

  const renderCertIcon = (cert, platBadge) => {
    if (React.isValidElement(cert.icon)) {
      return cert.icon;
    }
    if (cert.icon && typeof cert.icon === 'object' && cert.icon.prefix && cert.icon.name) {
      const iconDef = byPrefixAndName[cert.icon.prefix]?.[cert.icon.name];
      if (iconDef) {
        return <FontAwesomeIcon icon={iconDef} className="text-cyan-400 text-base sm:text-lg group-hover:scale-110 transition-transform" />;
      }
    }
    if (typeof cert.icon === 'string') {
      return <i className={`${cert.icon} text-cyan-400 text-lg`}></i>;
    }
    return platBadge?.icon || <FontAwesomeIcon icon={byPrefixAndName.fas['graduation-cap']} className="text-cyan-400 text-lg" />;
  };

  return (
    <section id="certificates" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Top Badge & Heading */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-3 tracking-wide">
          Qualifications
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Certi<span className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">ficates</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 rounded-full mt-3 shadow-sm shadow-cyan-400/50"></div>
        <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
          Professional certifications that demonstrate my commitment to continuous learning and skill development.
        </p>
      </div>

      {/* Platform Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {platforms.map((plat) => (
          <button
            key={plat}
            onClick={() => setSelectedPlatform(plat)}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
              selectedPlatform === plat
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-white dark:bg-[#0c1527]/70 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-cyan-500/30 shadow-sm'
            }`}
          >
            {plat}
          </button>
        ))}
      </div>

      {/* 3-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.map((cert) => {
          const platBadge = getPlatformBadge(cert.platform || cert.Platform);
          const certTitle = cert.title || cert.Title;
          const certUrl = (cert.url || cert.Link || '').replace(/^\[([^\]]+)\]\([^)]+\)$/, '$1');
          const certIssuer = cert.issuer || cert.Issuer || (cert.platform || cert.Platform);
          const certYear = cert.year || cert.Year || '2024';
          const certImage = cert.Image || cert.image;

          return (
            <div
              key={cert.id}
              className={`group bg-white dark:bg-[#0c1527]/70 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden ${platBadge.cardBorderHover} transition-all duration-300 flex flex-col shadow-sm hover:shadow-md hover:-translate-y-1`}
            >
              {/* Top Half: Certificate Preview Image or Placeholder Block */}
              {certImage ? (
                <a
                  href={certUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="relative w-full h-48 sm:h-52 bg-white overflow-hidden border-b border-slate-200 dark:border-slate-800 flex items-center justify-center block group/img cursor-pointer"
                >
                  <img
                    src={cert.Image || cert.image}
                    alt={certTitle}
                    className="w-full h-full object-contain p-1 group-hover/img:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                </a>
              ) : (
                <div className="relative w-full h-44 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 dark:from-slate-900 dark:via-[#0a1020] dark:to-[#0d182e] p-4 flex flex-col justify-between border-b border-slate-200 dark:border-slate-800/80 overflow-hidden dark:group-hover:from-slate-900 dark:group-hover:to-[#0f203d] transition-colors">
                  {/* Subtle Certificate Watermark Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>
                  <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-cyan-500/10 rounded-full blur-xl pointer-events-none"></div>

                  {/* Decorative Certificate Inner Border */}
                  <div className="absolute inset-3 border border-slate-300/80 dark:border-slate-700/50 rounded-lg pointer-events-none"></div>

                  {/* Top Row: Issuer Logo Text & Verified Checkmark */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${platBadge.badgeClasses}`}>
                      {platBadge.icon}
                      <span>{cert.platform || cert.Platform}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-300 dark:text-emerald-400 dark:bg-emerald-950/60 dark:border-emerald-500/30 px-2 py-0.5 rounded-full">
                      <ShieldCheck className="w-3 h-3" />
                      Verified
                    </span>
                  </div>

                  {/* Center Stamp Illustration */}
                  <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-1 group-hover:scale-110 transition-transform">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400 line-clamp-1">
                      {certIssuer}
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="relative z-10 flex items-center justify-between text-[11px]">
                    <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 font-mono font-medium border border-slate-300 dark:border-slate-700">
                      {certYear}
                    </span>
                    <span className="text-[10px] text-cyan-600 dark:text-cyan-400/80 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 font-medium">
                      Official Credential
                    </span>
                  </div>
                </div>
              )}

              {/* Bottom Half: Details & Link */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start gap-3 mb-2">
                  {/* Certification FontAwesome Icon */}
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-cyan-500/40 transition-colors shadow-sm text-cyan-600 dark:text-cyan-400">
                    {renderCertIcon(cert, platBadge)}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-[15px] group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug">
                      {certTitle}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {certIssuer}
                    </p>
                  </div>
                </div>

                {/* Footer "View Certificate" Link */}
                <a
                  href={certUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`${platBadge.viewLinkAccent} text-sm font-semibold flex items-center gap-1.5 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/60 transition-colors group/link`}
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
