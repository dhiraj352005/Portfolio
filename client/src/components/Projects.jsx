import React, { useState } from 'react';
import { ExternalLink, Globe, Cpu, Layers } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from './fontAwesomeIcons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  const categories = [
    { id: 'All Projects', label: 'All Projects', icon: Layers },
    { id: 'Web Apps', label: 'Web Apps', icon: Globe },
    { id: 'ML / AI', label: 'ML / AI', icon: Cpu },
  ];

  const filteredProjects = selectedCategory === 'All Projects'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Background Starry Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3 tracking-wide">
          My Work
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Recent <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl">
          Explore a selection of my development work demonstrating technical skills, scalable design, and creative problem-solving.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3 shadow-sm shadow-cyan-400/50"></div>
      </div>

      {/* Filter Tabs (Screenshot 4 style category pills) */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center p-1.5 rounded-2xl bg-[#0c1527]/90 border border-slate-800/90 shadow-xl backdrop-blur-md gap-1">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => {
          const projectTags = project.tags || project.techStack || [];
          const githubLink = (project.githubUrl || project.github || '').replace(/^\[([^\]]+)\]\([^)]+\)$/, '$1');
          const liveLink = (project.liveDemoUrl || project.live || '').replace(/^\[([^\]]+)\]\([^)]+\)$/, '$1');
          const projectImage = project.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80';
          const projectCategory = project.category || 'Web Apps';
          const projectSubtitle = project.subtitle || projectCategory;

          return (
            <div
              key={project.id || project.title || index}
              className="group bg-[#0c1527]/70 hover:bg-[#0c1527]/90 border border-slate-800/90 hover:border-cyan-500/40 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative w-full h-48 overflow-hidden bg-slate-950">
                  <img
                    src={projectImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1527] via-transparent to-transparent"></div>
                  
                  {/* Category badge */}
                  <span className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#0c1527]/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300">
                    {projectCategory}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-cyan-400/90 font-medium mb-3">
                    {projectSubtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-5">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {projectTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-0.8 rounded-md bg-slate-900 border border-slate-800 text-slate-300 group-hover:border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Links */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-800/60 mt-4">
                {githubLink ? (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-xs font-semibold text-slate-300 hover:text-cyan-300 transition-colors"
                  >
                    <FontAwesomeIcon icon={byPrefixAndName.fab['square-github']} className="mr-2 text-lg" />
                    Code Repository
                  </a>
                ) : <span />}
                {liveLink ? (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Preview
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      {/* View More on GitHub Button (Screenshot 5 style) */}
      <div className="mt-14 flex justify-center">
        <a
          href={portfolioData.personal.socials.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-full bg-[#0c1527] hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-all shadow-lg hover:scale-105"
        >
          <FontAwesomeIcon icon={byPrefixAndName.fab['square-github']} className="mr-2 text-lg text-cyan-400" />
          View More on GitHub
        </a>
      </div>
    </section>
  );
}
