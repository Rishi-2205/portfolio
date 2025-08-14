import React from "react";
import ParticleBackground from "./components/ParticleBackground";
import { ReactTyped as Typed } from "react-typed";
import { motion } from "framer-motion";
// import projectData from "./data/projects";
// import projectImages from "./data/projectImages";
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" },
  }),
};

export default function App() {
  // Import project data and images
  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        <ParticleBackground />
        {/* Navbar */}
        <nav className="flex justify-between py-6 sticky top-4 z-40 mx-auto max-w-6xl px-4 bg-black/30 backdrop-blur rounded-xl">
          <h1 className="text-2xl font-bold glow">RISHIAKASH</h1>
          <div className="space-x-5">
            <a href="#about" className="hover:text-pink-400">About</a>
            <a href="#education" className="hover:text-pink-400">Education</a>
            <a href="#projects" className="hover:text-pink-400">Projects</a>
            <a href="#skills" className="hover:text-pink-400">Skills</a>
            <a href="#contact" className="hover:text-pink-400">Contact</a>
          </div>
        </nav>
        {/* Photo on Top removed */}
        {/* Hero Section */}
        <header className="text-center py-28">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold glow"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            custom={0}
          >
            Hi, I'm <span className="text-pink-400">RISHIAKASH...</span>
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            custom={1}
            className="mt-4 text-xl text-slate-200"
          >
            <Typed
              strings={["CSE STUDENT", "FULL STACK DEVELOPER",]}
              typeSpeed={60}
              backSpeed={55}
              loop
            />
          </motion.div>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            custom={2}
            className="mt-6 max-w-2xl mx-auto text-slate-300"
          >
            <b>A passionate Full Stack Developer and a final-year Computer Science & Engineering student. I love building clean, scalable, and efficient web applications that blend functionality with beautiful design. My journey into coding started with curiosity and has grown into a mission — to create impactful digital experiences that make life easier (and sometimes, just a little cooler ✨)</b>
          </motion.p>
        </header>
        <main className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0">
          {/* About Section */}
          <motion.section
            id="about"
            className="pt-12 pb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            custom={0}
          >
            <h3 className="text-3xl font-bold mb-6 glow">About Me</h3>
            <div className="card-glass p-6 rounded-2xl max-w-3xl">
              <p className="text-slate-200">
                <b>“Every great product starts with a great idea — I turn those ideas into reality.”</b>
                I’m currently in my 4th year of B.E. CSE and have hands-on experience in both frontend and backend development. From responsive UIs to powerful APIs, I enjoy working on all layers of a project. I believe in writing code that’s not only functional but also maintainable, and I’m always eager to learn new technologies that push me beyond my comfort zone.
              </p>
            </div>
          </motion.section>
          {/* Education Section */}
          <motion.section
            id="education"
            className="pt-8 pb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            custom={1}
          >
            <h3 className="text-3xl font-bold mb-6 glow">Education</h3>
            <div className="card-glass p-6 rounded-2xl max-w-3xl">
              <ul className="space-y-4">
                <li>
                  <b>B.E. Computer Science & Engineering</b><br />
                  <span className="text-slate-300">Jerusalem college of engineering College of Engineering, 2022 - 2026</span><br />
                  <span className="text-pink-300">Percentage: 77.8%</span>
                </li>
                <li>
                  <b>Higher Secondary (12th)</b><br />
                  <span className="text-slate-300">Laurel Higher Secondary School, 2022 </span><br />
                  <span className="text-pink-300">Percentage: 78.9%</span>
                </li>
                <li>
                  <b>Secondary (10th)</b><br />
                  <span className="text-slate-300">St Antonys's Matriculation Higher Secondary School, 2020 </span><br />
                  <span className="text-pink-300">Percentage: 65%</span>
                </li>
              </ul>
            </div>
          </motion.section>
          {/* Projects Section */}
          <motion.section
            id="projects"
            className="pt-8 pb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            custom={2}
          >
            <h3 className="text-3xl font-bold mb-6 glow">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Removed project file and images */}
              <div className="card-glass p-5 rounded-2xl">
                <h4 className="text-xl font-semibold mb-2">ProtorBook management system </h4>
                <p className="text-slate-300 text-sm">It"s my mini project in base of digital proctor Book</p>
                <div className="mt-4 text-sm text-pink-300">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View →
                  </a>
                </div>
              </div>
              {/* Add more projects as needed */}
            </div>
          </motion.section>
          {/* Skills Section */}
          <motion.section
            id="skills"
            className="pt-8 pb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            custom={3}
          >
            <h3 className="text-3xl font-bold mb-6 glow">Skills</h3>
            <div className="space-y-4 max-w-xl">
              {[
                { name: "Python", pct: 99  },
                { name: "react", pct: 99 },
                { name: "java", pct: 87 },
              ].map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-1">
                    <span>{s.name}</span>
                    <span className="text-sm text-slate-400">{s.pct}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-3 rounded-full bg-pink-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      transition={{ duration: 0.9 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
          <motion.section
            id="contact"
            className="pt-8 pb-28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            custom={4}
          >
            <h3 className="text-3xl font-bold mb-6 glow">Contact</h3>
            <div className="card-glass p-6 max-w-2xl">
              <div>
                <p className="text-slate-300 mb-4">
                  Send a message and I’ll get back to you
                  <br />
                  <span className="block mt-2">
                    <b>Email:</b> <a href="mailto:rishiakash2205@gmail.com" className="text-pink-300">rishiakash2205@gmail.com</a>
                  </span>
                  <span className="block mt-1">
                    <b>Contact Number:</b> <a href="tel:+918825848216" className="text-pink-300">+91 8825848216</a>
                  </span>
                </p>
                <form action="https://formspree.io/f/mwpqakyl" method="POST" className="grid gap-3 md:grid-cols-2">
                  <input name="name" placeholder="Your Lucky Name" className="p-3 rounded-lg bg-transparent border border-slate-700" />
                  <input name="email" type="email" placeholder="Email" className="p-3 rounded-lg bg-transparent border border-slate-700" />
                  <textarea name="message" placeholder="Message" rows="4" className="p-3 rounded-lg bg-transparent border border-slate-700 md:col-span-2"></textarea>
                  <div className="md:col-span-2 text-right">
                    <button className="px-5 py-2 rounded-xl border border-pink-400 text-pink-300">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
      <footer className="py-6 text-center text-slate-400">
        © {new Date().getFullYear()} Rishiakash 
      </footer>
    </>
  );
}
