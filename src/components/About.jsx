import React from 'react'
import { motion } from 'framer-motion'

const timeline = [
  { year: '2021', title: 'Started CSE degree', desc: 'Joined B.E. CSE, developed foundation in data structures and algorithms.' },
  { year: '2023', title: 'First AI Project', desc: 'Built an AI-based skin disease detector (paper + demo).' },
  { year: '2024', title: 'Internship', desc: 'Frontend internship — built UI components and dashboards.' }
]

export default function About(){
  return (
    <div className="pt-8 pb-8">
      <motion.h2 className="text-3xl font-bold mb-6 glow" initial={{opacity:0}} animate={{opacity:1}}>About Me</motion.h2>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="card-glass p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Quick Bio</h3>
          <p className="text-slate-300">I am a 3rd year CSE student who loves building full-stack apps and experimenting with AI. I focus on clear UX, performance and creative visuals.</p>

          <div className="mt-4">
            <h4 className="font-medium">Skills</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {['React','Tailwind','Node','Python','Django','Machine Learning'].map(s => (
                <span key={s} className="px-3 py-1 rounded-full text-sm border border-slate-700">{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Timeline</h4>
          <ol className="relative border-l border-slate-700 ml-4">
            {timeline.map(item => (
              <li key={item.year} className="mb-8 ml-6">
                <span className="absolute -left-3 w-6 h-6 rounded-full bg-neon shadow-neon-sm"></span>
                <div className="text-sm text-slate-400">{item.year}</div>
                <div className="font-semibold">{item.title}</div>
                <div className="text-slate-300">{item.desc}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}