import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from './fontAwesomeIcons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "b151c87f-b041-45cd-8a5f-51003754a28e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset(); // Clear the form inputs
      } else {
        setResult(data.message || "Error sending message. Please try again.");
      }
    } catch (error) {
      console.error('Web3Forms submission error:', error);
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-3 tracking-wide">
          Get in Touch
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Contact <span className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 rounded-full mt-3 shadow-sm shadow-cyan-400/50"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Contact info & Conversation Invitation */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Let's start a conversation
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Whether you have a question, a project proposal, an SDE opportunity, or just want to connect, feel free to reach out. I'm always open to discussing new engineering challenges.
            </p>

            <div className="space-y-4">
              {/* Email Card */}
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#0c1527]/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all hover:-translate-y-0.5 group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-100 dark:group-hover:bg-cyan-500/20 transition-all">
                  <FontAwesomeIcon icon={byPrefixAndName.far['envelope']} className="text-xl text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Email Me</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {personal.email}
                  </div>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#0c1527]/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all hover:-translate-y-0.5 group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-all">
                  <FontAwesomeIcon icon={byPrefixAndName.far['phone-arrow-right']} className="text-xl text-blue-600 dark:text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Call / WhatsApp</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {personal.phone}
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#0c1527]/70 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center">
                  <FontAwesomeIcon icon={byPrefixAndName.fass['location-dot']} className="text-xl text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Location</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {personal.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Coding Profiles Strip */}
            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800/80">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                Connect on Profiles
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:scale-110 transition-all shadow-sm group"
                >
                  <FontAwesomeIcon icon={byPrefixAndName.fab['square-github']} className="text-xl hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" />
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:scale-110 transition-all shadow-sm group"
                >
                  <FontAwesomeIcon icon={byPrefixAndName.fab['linkedin']} className="text-xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
                </a>
                <a
                  href={personal.socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  title="LeetCode"
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:scale-110 transition-all shadow-sm group"
                >
                  <FontAwesomeIcon icon={byPrefixAndName.fab['leetcode']} className="text-lg hover:text-amber-600 dark:hover:text-amber-400 transition-colors" />
                </a>
                <a
                  href={personal.socials.hackerrank}
                  target="_blank"
                  rel="noreferrer"
                  title="HackerRank"
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:scale-110 transition-all shadow-sm group"
                >
                  <FontAwesomeIcon icon={byPrefixAndName.fab['hackerrank']} className="text-lg hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" />
                </a>
                <a
                  href={personal.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  title="Twitter / X"
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:scale-110 transition-all shadow-sm group"
                >
                  <FontAwesomeIcon icon={byPrefixAndName.fab['square-x-twitter']} className="text-xl hover:text-sky-600 dark:hover:text-sky-400 transition-colors" />
                </a>
                <a
                  href={personal.socials.reddit}
                  target="_blank"
                  rel="noreferrer"
                  title="Reddit"
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:scale-110 transition-all shadow-sm group"
                >
                  <FontAwesomeIcon icon={byPrefixAndName.fab['square-reddit']} className="text-xl hover:text-orange-600 dark:hover:text-orange-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Availability Badge */}
          <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/40 dark:to-blue-950/40 border border-cyan-200 dark:border-cyan-500/30 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-800 dark:text-cyan-300 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
              Open for SDE Roles & Internships
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Ready to bring high-impact contributions to forward-thinking engineering teams.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-white dark:bg-[#0c1527]/70 border border-slate-200 dark:border-slate-800/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-xl shadow-cyan-950/5 dark:shadow-cyan-950/30">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Feedback Banners */}
            {result && result.includes("successfully") && (
              <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-sm flex items-center gap-3 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{result}</span>
              </div>
            )}

            {result && (result.includes("Error") || result.includes("error") || result.includes("occurred")) && (
              <div className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-700 dark:text-rose-300 text-sm flex items-center gap-3 animate-in fade-in">
                <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                <span>{result}</span>
              </div>
            )}

            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Your Name <span className="text-cyan-600 dark:text-cyan-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="e.g. John Doe"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Your Email <span className="text-cyan-600 dark:text-cyan-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="e.g. john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              />
            </div>

            {/* Subject Input */}
            <div>
              <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="e.g. SDE Opportunity / Project Inquiry"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Your Message <span className="text-cyan-600 dark:text-cyan-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={result === "Sending..."}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
            >
              {result === "Sending..." ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-slate-950" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
