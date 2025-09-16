import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Skin Disease Detector',
    desc: 'Deep learning model that classifies skin conditions and shows localized heatmaps.',
    tech: ['Python','TensorFlow','Flask'],
    link: '#'
  },
  {
    title: 'Payment Speed Visualizer',
    desc: 'Frontend dashboard visualizing latency and throughput of payment transactions.',
    tech: ['React','D3.js','Node'],
    link: '#'
  },
  {
    title: 'Portfolio (This Site)',
    desc: 'A neon-themed creative portfolio built with React + Tailwind + Framer Motion.',
    tech: ['React','Tailwind','Framer Motion'],
    link: '#'
  }
];

export default function Projects() {
  return (
    <div>
      <motion.h2
        className="text-3xl font-bold mb-6 glow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            whileHover={{ scale: 1.05 }}
            className="card-glass p-5 rounded-2xl border border-slate-700 shadow-lg transform transition-transform flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg text-yellow-300">{p.title}</h3>
                <div className="text-sm text-slate-400">#{i + 1}</div>
              </div>
              <p className="mt-3 text-slate-300 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded bg-slate-800/40 border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 text-right">
              <span className="text-sm text-pink-400">View →</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
