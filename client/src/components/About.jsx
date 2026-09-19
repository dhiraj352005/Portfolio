import React from 'react';
import { Zap, Code, Terminal, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-cyan-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-sky-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      default:
        return <Code className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          About <span className="text-cyan-400">Me</span>
        </h2>
        {/* Cyan Underline Bar */}
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-3 shadow-sm shadow-cyan-400/50"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Narrative Bio with Colored Highlight Spans */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-slate-300 text-base sm:text-[15.5px] leading-relaxed">
          <p>
            I'm an aspiring{' '}
            <span className="text-emerald-400 font-semibold">passionate full-stack developer</span>, lifelong learner,
            and systems engineer who thrives at the intersection of robust logic and seamless user experience. Currently
            pursuing my B.Tech in IT at{' '}
            <span className="text-cyan-300 font-semibold">PCCOE Pune (GPA: 8.45)</span>, I am dedicated to crafting{' '}
            <span className="text-sky-400 font-semibold">scalable, cloud-native web applications</span> and high-throughput architectures.
          </p>

          <p>
            During my SDE Internship at{' '}
            <span className="text-cyan-300 font-semibold">Zensar Technologies</span>, I engineered cloud services that delivered
            a <span className="text-emerald-400 font-semibold">20% boost in team efficiency</span>, optimized enterprise REST API latency
            by <span className="text-cyan-300 font-semibold">15%</span>, and drove a{' '}
            <span className="text-sky-400 font-semibold">30% reduction in production defects</span> through robust automated pipelines.
          </p>

          <p>
            Outside of enterprise engineering, I am a dedicated{' '}
            <span className="text-amber-300 font-semibold">competitive programmer</span> with{' '}
            <span className="text-cyan-300 font-semibold">778+ solved problems on LeetCode</span> (Peak Rating:{' '}
            <span className="text-emerald-400 font-semibold">1616</span>) and{' '}
            <span className="text-amber-300 font-semibold">5-Star recognition</span> on HackerRank. I find joy in pushing boundaries—whether
            optimizing algorithmic runtimes or competing at national hackathons like{' '}
            <span className="text-cyan-400 font-semibold">Smart India Hackathon</span> and Mastercard's{' '}
            <span className="text-sky-400 font-semibold">CodeForChange</span>.
          </p>

          <p>
            My goal? To leverage{' '}
            <span className="text-cyan-400 font-semibold">technology as a powerful tool</span> for impactful, scalable solutions—and
            to continually evolve alongside cutting-edge modern tech stacks.
          </p>
        </div>

        {/* Right Column: 2x2 Highlight Cards Grid */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {about.highlightCards.map((card) => (
            <div
              key={card.id}
              className="bg-[#0c1527]/60 hover:bg-[#0c1527]/90 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 flex items-center justify-center transition-colors">
                    {getIcon(card.icon)}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-800">
                    {card.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
