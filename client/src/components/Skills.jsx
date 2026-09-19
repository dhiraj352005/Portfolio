import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from './fontAwesomeIcons';
import { portfolioData } from '../data/portfolioData';
import { 
  Code2, 
  Terminal, 
  Layers, 
  Server, 
  Database, 
  Cpu, 
  Box, 
  GitBranch, 
  Send, 
  RefreshCw, 
  Globe, 
  FileCode, 
  HardDrive 
} from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;

  const categoryTabs = [
    "All Skills",
    "Frontend",
    "Backend",
    "Languages",
    "Tools",
    "AI / ML",
    "Problem Solving",
    "CS Fundamentals"
  ];

  const [activeCategory, setActiveCategory] = useState("All Skills");

  const filteredSkills = activeCategory === "All Skills"
    ? skills.items
    : skills.items.filter((skill) => {
        const itemCat = (skill.Category || skill.category || "").toLowerCase().trim();
        const activeCat = activeCategory.toLowerCase().trim();

        if (activeCat === "ai / ml") {
          return itemCat === "ai / ml" || itemCat === "ai-ml" || itemCat === "ai/ml";
        }
        if (activeCat === "problem solving") {
          return itemCat === "problem solving" || itemCat === "problem-solving" || itemCat === "core cs" || itemCat === "core-cs";
        }
        if (activeCat === "cs fundamentals") {
          return itemCat === "cs fundamentals" || itemCat === "cs-fundamentals";
        }
        return itemCat === activeCat;
      });

  // Fallback icon resolver using Lucide if FontAwesome icon is not matched
  const getFallbackLucideIcon = (name, color) => {
    const iconStyle = { color };
    switch ((name || '').toLowerCase()) {
      case 'react':
        return <Code2 className="w-6 h-6" style={iconStyle} />;
      case 'javascript':
        return <Terminal className="w-6 h-6" style={iconStyle} />;
      case 'html5':
        return <Globe className="w-6 h-6" style={iconStyle} />;
      case 'css3 / tailwind':
        return <Layers className="w-6 h-6" style={iconStyle} />;
      case 'bootstrap':
        return <Layers className="w-6 h-6" style={iconStyle} />;
      case 'node.js':
        return <Server className="w-6 h-6" style={iconStyle} />;
      case 'express.js':
        return <Server className="w-6 h-6" style={iconStyle} />;
      case 'rest apis':
        return <Globe className="w-6 h-6" style={iconStyle} />;
      case 'ejs':
        return <FileCode className="w-6 h-6" style={iconStyle} />;
      case 'mongodb':
        return <Database className="w-6 h-6" style={iconStyle} />;
      case 'mysql':
        return <HardDrive className="w-6 h-6" style={iconStyle} />;
      case 'java':
        return <Cpu className="w-6 h-6" style={iconStyle} />;
      case 'python':
        return <Terminal className="w-6 h-6" style={iconStyle} />;
      case 'c++':
        return <Cpu className="w-6 h-6" style={iconStyle} />;
      case 'docker':
        return <Box className="w-6 h-6" style={iconStyle} />;
      case 'git & github':
        return <GitBranch className="w-6 h-6" style={iconStyle} />;
      case 'postman':
        return <Send className="w-6 h-6" style={iconStyle} />;
      case 'jenkins & ci/cd':
        return <RefreshCw className="w-6 h-6" style={iconStyle} />;
      default:
        return <Code2 className="w-6 h-6" style={iconStyle} />;
    }
  };

  // Checks if icon belongs to solid (fas) or brands (fab) and applies custom Color
  const renderSkillIcon = (skill) => {
    const rawIcon = skill.Icon || skill.icon || '';
    const skillColor = skill.Color || skill.color || '#22d3ee';

    // Normalize icon name
    let iconName = rawIcon.trim();
    let preferredPrefix = null;

    if (iconName.startsWith('fab ') || iconName.startsWith('fa-brands ')) {
      preferredPrefix = 'fab';
      iconName = iconName.replace(/^(fab|fa-brands)\s+/, '');
    } else if (iconName.startsWith('fas ') || iconName.startsWith('fa-solid ')) {
      preferredPrefix = 'fas';
      iconName = iconName.replace(/^(fas|fa-solid)\s+/, '');
    }

    iconName = iconName.replace(/^fa-/, '').trim().toLowerCase();

    // Check if the icon belongs to solid (fas) or brands (fab)
    let resolvedIcon = null;

    if (preferredPrefix === 'fas' && byPrefixAndName.fas && byPrefixAndName.fas[iconName]) {
      resolvedIcon = byPrefixAndName.fas[iconName];
    } else if (preferredPrefix === 'fab' && byPrefixAndName.fab && byPrefixAndName.fab[iconName]) {
      resolvedIcon = byPrefixAndName.fab[iconName];
    } else if (byPrefixAndName.fas && byPrefixAndName.fas[iconName]) {
      resolvedIcon = byPrefixAndName.fas[iconName];
    } else if (byPrefixAndName.fab && byPrefixAndName.fab[iconName]) {
      resolvedIcon = byPrefixAndName.fab[iconName];
    }

    if (resolvedIcon) {
      return (
        <FontAwesomeIcon
          icon={resolvedIcon}
          style={{ color: skillColor }}
          className="text-2xl transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
        />
      );
    }

    // Lucide fallback
    return getFallbackLucideIcon(skill.Name || skill.name, skillColor);
  };

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-3 tracking-wide">
          Expertise
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Technical <span className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
          Core competencies spanning modern web engineering, algorithmic problem solving, artificial intelligence, and cloud infrastructure.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 rounded-full mt-3 shadow-sm shadow-cyan-400/50"></div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categoryTabs.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20 scale-105'
                : 'bg-white dark:bg-[#0c1527]/70 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 shadow-sm'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 4-6 Column Icon Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
        {filteredSkills.map((skill, idx) => {
          const skillColor = skill.Color || skill.color || '#22d3ee';
          return (
            <div
              key={idx}
              className="group bg-white dark:bg-[#0c1527]/70 hover:bg-slate-50 dark:hover:bg-[#0c1527]/95 border border-slate-200 dark:border-slate-800/90 hover:border-cyan-500/50 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-3 transition-all duration-300 shadow-sm hover:shadow-cyan-500/10 hover:-translate-y-1 text-center"
            >
              <div 
                className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-cyan-500/30 flex items-center justify-center transition-all group-hover:scale-110"
                style={{
                  boxShadow: `0 0 16px ${skillColor}18`
                }}
              >
                {renderSkillIcon(skill)}
              </div>
              <div className="flex flex-col items-center">
                <div className="text-sm font-bold text-slate-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {skill.Name || skill.name}
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {skill.level || skill.Level}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
