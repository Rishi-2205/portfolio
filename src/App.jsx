import React, { useState, useEffect } from "react";
import ParticleBackground from "./components/ParticleBackground";
import { ReactTyped as Typed } from "react-typed";
import { motion, AnimatePresence } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaFileDownload, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiDjango, SiFlask, SiMongodb, SiPostgresql, SiSqlite } from "react-icons/si";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { Menu, X } from "lucide-react";







// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" },
  }),
};

// SkillBar component
const SkillBar = ({ skill, color, isOpen, delay }) => {
  const [displayedLevel, setDisplayedLevel] = useState(0);

  useEffect(() => {
    if (isOpen) {
      let start = 0;
      const end = skill.level;
      const duration = 1000; // 1s
      const incrementTime = 10;
      const step = (end / duration) * incrementTime;

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setDisplayedLevel(Math.round(start));
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isOpen, skill.level]);

  return (
    <motion.div
      className="bg-slate-800 p-4 rounded-lg shadow-md border border-slate-700"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      <div className="flex justify-between mb-2 text-slate-200 items-center">
        <span className="flex items-center gap-2">
          {skill.icon} {skill.name}
        </span>
        <span className="text-pink-300">{displayedLevel}%</span>
      </div>
      <div className="w-full h-3 bg-slate-700 rounded-lg overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${displayedLevel}%` }}
          transition={{ duration: 0.5 }}
          className={`h-full bg-gradient-to-r ${color}`}
        />
      </div>
    </motion.div>
  );
};

export default function App() {
  const [showLinks, setShowLinks] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [openCategories, setOpenCategories] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleCategory = (category) => {
    setOpenCategories((prev) =>
      prev.includes(category) ? [] : [category] // only one open at a time
    );
  };

  const skillGroups = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", level: 95, icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", level: 90, icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", level: 85, icon: <FaJsSquare className="text-yellow-400" /> },
        { name: "React", level: 88, icon: <FaReact className="text-cyan-400" /> },
        { name: "TailwindCSS", level: 92, icon: <SiTailwindcss className="text-sky-400" /> },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 80, icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", level: 75, icon: <SiExpress className="text-gray-300" /> },
        { name: "Django", level: 70, icon: <SiDjango className="text-green-600" /> },
        { name: "Flask", level: 65, icon: <SiFlask className="text-gray-400" /> },
        { name: "Python", level: 85, icon: <FaPython className="text-blue-400" /> },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB", level: 78, icon: <SiMongodb className="text-green-400" /> },
        { name: "PostgreSQL", level: 82, icon: <SiPostgresql className="text-sky-500" /> },
        { name: "MySQL", level: 70, icon: <SiPostgresql className="text-blue-600" /> },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 90, icon: <FaGitAlt className="text-red-500" /> },
        { name: "VS Code", level: 95, icon: <FaPython className="text-blue-400" /> },
        { name: "Docker", level: 60, icon: <FaDocker className="text-blue-500" /> },
        { name: "Figma", level: 70, icon: <FaFigma className="text-pink-500" /> },
      ],
    },
  ];

  const links = [
    { name: "GitHub", url: "https://github.com/Rishi-2205", bg: "bg-gray-800", icon: <FaGithub /> },
    { name: "LinkedIn", url: "https://linkedin.com/in/rishi-akash-93607431b/", bg: "bg-blue-600", icon: <FaLinkedin /> },
    { name: "Instagram", url: "https://instagram.com/itz_rishi_error", bg: "bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400", icon: <FaInstagram /> },
    { name: "Resume", url: "/resume.pdf", bg: "bg-pink-500", icon: <FaFileDownload />, download: true },
  ];

  const link =[
    { name: "GitHub", url: "https://github.com/Rishi-2205", bg: "bg-gray-800", icon: <FaGithub /> },
    { name: "LinkedIn", url: "https://linkedin.com/in/rishi-akash-93607431b/", bg: "bg-blue-600", icon: <FaLinkedin /> },
    { name: "Instagram", url: "https://instagram.com/itz_rishi_error", bg: "bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400", icon: <FaInstagram /> },
    {
    icon: <FaWhatsapp />,
    url: "https://wa.me/918825848216", // WhatsApp direct link
    bg: "bg-green-500",
  },
  ]

  const colors = {
    Frontend: "from-pink-500 to-purple-600",
    Backend: "from-green-500 to-emerald-600",
    Database: "from-blue-500 to-cyan-600",
    "Tools & Others": "from-yellow-400 to-orange-500",
  };

  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        <ParticleBackground />

        {/* Navbar */}
        <motion.nav
  className="fixed top-0 left-0 w-full z-50 px-6 py-4 backdrop-blur-md bg-black/40 border-b border-slate-700/50 shadow-lg flex justify-between items-center"
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ type: 'spring', stiffness: 120 }}
>
  {/* Logo */}
  <motion.h1
    className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 tracking-wide"
    whileHover={{ scale: 1.05 }}
  >
  I'M RISHIAKASH,WELCOME TO MY PORTFOLIO 
  </motion.h1>

  {/* Desktop Links */}
  <ul className="hidden md:flex gap-8 font-medium text-gray-300">
    {[
      { name: 'About', href: '#about' },
      { name: 'Education', href: '#education' },
      { name: 'Projects', href: '#projects' },
      { name: 'Skills', href: '#skills' },
      { name: 'Contact', href: '#contact' },
    ].map((link) => (
      <motion.li
        key={link.name}
        whileHover={{ scale: 1.1 }}
        className="relative group"
      >
        <a href={link.href} className="hover:text-pink-400 transition-colors">
          {link.name}
        </a>
        {/* underline animation */}
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-400 to-purple-500 rounded-full group-hover:w-full transition-all duration-300"></span>
      </motion.li>
    ))}
  </ul>

  {/* Mobile Menu Button */}
  <button
    className="md:hidden text-gray-300 hover:text-pink-400 transition-colors"
    onClick={() => setOpen(!open)}
  >
    {open ? <X size={28} /> : <Menu size={28} />}
  </button>

  {/* Mobile Menu */}
  <AnimatePresence>
    {open && (
      <motion.ul
        className="absolute top-full mt-2 right-6 w-48 bg-black/90 rounded-xl shadow-lg border border-slate-700 flex flex-col items-center py-4 gap-4 md:hidden"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {[
          { name: 'About', href: '#about' },
          { name: 'Education', href: '#education' },
          { name: 'Projects', href: '#projects' },
          { name: 'Skills', href: '#skills' },
          { name: 'Contact', href: '#contact' },
        ].map((link) => (
          <motion.li
            key={link.name}
            whileHover={{ scale: 1.05 }}
            className="w-full text-center"
          >
            <a
              href={link.href}
              onClick={() => setOpen(false)}
              className="block w-full py-2 hover:text-pink-400 transition-colors"
            >
              {link.name}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    )}
  </AnimatePresence>
</motion.nav>

        {/* Hero Section */}
        <header className="flex flex-col items-center justify-center py-28 relative text-center">
          <motion.div
            onClick={() => setShowLinks(!showLinks)}
            initial={{ scale: 0.8, opacity: 0, y: -50 }}
            animate={{
              scale: [1, 1.1, 1],
              y: [0, -10, 0],
              opacity: 1,
              boxShadow: [
                "0px 0px 20px rgba(236,72,153,0.4)",
                "0px 0px 40px rgba(139,92,246,0.6)",
                "0px 0px 20px rgba(236,72,153,0.4)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.2 }}
            className="relative cursor-pointer"
          >
            <img
              src="/mypic.jpg"
              alt="Rishi Akash"
              className="w-44 h-44 rounded-full border-4 border-pink-400 shadow-xl object-cover"
            />
          </motion.div>

          {/* Orbiting Links */}
          <AnimatePresence>
            {showLinks &&
              links.map((link, index) => {
                const spacing = 380;
                const x = (index - (links.length - 1) / 2) * spacing;
                const y = -105;

                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    download={link.download || false}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                    animate={{ x, y, opacity: 1, scale: 1.5, rotate: 360 }}
                    exit={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 15,
                      boxShadow: "0px 0px 20px rgba(215, 12, 233, 0.9)",
                      
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 25,
                      delay: index * 0.15,
                    }}
                    className={`absolute flex items-center justify-center w-14 h-14 rounded-full text-white text-xl ${link.bg} shadow-lg`}
                  >
                    {link.icon}
                  </motion.a>
                );
              })}
          </AnimatePresence>

          {/* Typed Intro */}
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <h1 className="text-lg text-pink-300 italic tracking-wide"><b>[👆CLICK MY PROFILE TO EXPLORE👆]</b></h1>

            <div className="mt-7 text-4xl md:text-6xl font-bold text-yellow-300 tracking-wide">
              <Typed
                strings={[
                  "FULL STACK DEVELOPER",
                  "CSE-STUDENT",
                  "DESIGNER",
                  "FREELANCER",
                  "TECH ENTHUSIAST",
                ]}
                typeSpeed={80}
                backSpeed={50}
                backDelay={1200}
                loop
                showCursor={true}
              />
            </div>

            <p className="mt-10 text-xl md:text-2xl font-bold text-red-100 italic tracking-wide max-w-3xl mx-auto">
              A passionate Full Stack Developer and a final-year Computer Science & Engineering student. I love building clean, scalable, and efficient web applications that blend functionality with beautiful design.
            </p>
          </motion.div>
        </header>

        {/* Main Sections */}
        <main className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0">

          {/* About Section */}
{/* About Section - Text Left, Photo + Resume Right */}
<motion.section
  id="about"
  className="relative pt-24 pb-16 overflow-hidden bg-black"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={sectionVariants}
  custom={0}
>
  {/* Moving Neon Gradient Background */}
  <div className="absolute inset-0 -z-20">
    <div className="absolute w-full h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-gradient-x opacity-20"></div>
    <div className="absolute inset-0 bg-black/80"></div>
  </div>

  {/* Heading */}
  <h3 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 animate-textGlow">
    ABOUT ME
  </h3>

  <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
    {/* Left Side - Neon Text Cards */}
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      style={{ perspective: 1000 }}
    >
      {[
        "💻 Turning ideas into reality with clean, creative code.",
        "🎨 Passionate about Full-Stack Development & Innovative UI/UX.",
        "🚀 React, Node.js, MongoDB, Tailwind CSS, Framer Motion.",
        "💡 Problem Solver | Quick Learner | Team Player.",
        "🌟 Mission: Simplify, Innovate & Inspire through tech.",
        "⚡ AI & ML Enthusiast | Always Exploring New Technologies.",
      ].map((text, i) => (
        <motion.div
          key={i}
          className="p-5 rounded-3xl shadow-neon text-white font-semibold text-lg backdrop-blur-lg border border-white/10"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1))`,
            boxShadow: `0 0 20px rgba(255,255,255,${0.05 + i * 0.05})`,
          }}
          initial={{ y: 40, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            delay: i * 0.2,
            type: "spring",
            stiffness: 120,
            damping: 12,
          }}
          whileHover={{
            scale: 1.00,
            rotate: i % 2 === 0 ? 2 : -2,
            boxShadow: "0 0 30px #ff4da6, 0 0 60px #8c4eff",
          }}
        >
          {text}
        </motion.div>
      ))}
    </motion.div>

    {/* Right Side - Neon Photo */}
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="rounded-3xl overflow-hidden shadow-neon border-8 border-transparent hover:scale-105 transition-transform"
        style={{
          background: "conic-gradient(from 0deg at 50% 50%, #ff4da6, #8c4eff, #00fff5, #ff4da6)",
          padding: "4px",
          borderRadius: "24px",
        }}
        whileHover={{ rotate: 2 }}
      >
        <motion.img
          src="/mypicc.jpg"
          alt="Rishi Akash"
          className="w-[420px] object-cover rounded-3xl"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>

      <motion.div
        className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold shadow-xl text-center tracking-wide"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        🚀 Always Learning • Always Innovating • Always Creating
      </motion.div>

      <a
        href="/resume.pdf"
        download
        className="mt-6 inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 rounded-xl text-white font-bold shadow-lg hover:scale-105 transition-transform"
      >
        <FaFileDownload /> EXPLORE MY RESUME
      </a>
    </motion.div>
  </div>

  {/* Floating Neon Particles */}
  {[...Array(40)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute rounded-full bg-white/20"
      style={{
        width: `${Math.random() * 6 + 2}px`,
        height: `${Math.random() * 6 + 2}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -20, 0],
        x: [0, 20, 0],
        opacity: [0.2, 0.8, 0.2],
      }}
      transition={{
        duration: 4 + Math.random() * 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2,
      }}
    ></motion.div>
  ))}
</motion.section>
  
{/* Education Section */}
{/* Education Section */}
<motion.section
  id="education"
  className="relative pt-28 pb-20 mt-28 text-white"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  {/* Transparent Background Shape */}
  <div className="absolute inset-0 -z-10 flex justify-center">
    <svg
      viewBox="0 0 800 800"
      className="w-[180%] h-auto"
      preserveAspectRatio="none"
    >
      <circle
        cx="400"
        cy="400"
        r="400"
        fill="url(#grad3)"
        fillOpacity="0.75"
      />
      <defs>
        <linearGradient id="grad3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#21042cff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1f1c4aff" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  </div>

  {/* Your old content stays the same here */}
  <h3 className="text-3xl font-bold mb-16 text-center text-pink-400 glow">
    📘 EDUCATION
  </h3>

  <div className="relative max-w-4xl mx-auto z-10">
    {/* Timeline line */}
    <motion.div
      className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-500 via-purple-600 to-pink-500 rounded-full shadow-xl"
      initial={{ height: 0 }}
      whileInView={{ height: "100%" }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
    />

    {[
      {
        degree: "Secondary (10th)",
        college: "St Antony's MATRIC HIGHER SECONDARY SCHOOL",
        year: "2020",
        percentage: "65%",
        icon: <FaSchool className="text-white text-2xl" />,
      },
      {
        degree: "Higher Secondary (12th)",
        college: "LAUREL HIGHER SECONDARY SCHOOL",
        year: "2022",
        percentage: "78.9%",
        icon: <FaSchool className="text-white text-2xl" />,
      },
      {
        degree: "B.E. Computer Science & Engineering",
        college: "JERUSALEM COLLEGE OF ENGINEERING (JCE)",
        year: "2022 - 2026",
        percentage: "77.8%",
        icon: <FaGraduationCap className="text-white text-2xl" />,
      },
      {
        degree: "Python Full Stack Development",
        college: "Q-SPIDERS, CHENNAI",
        year: "2025-2026",
        percentage: "Cu-Pursuing",
        icon: <FaGraduationCap className="text-white text-2xl" />,
      },
    ].map((edu, idx) => {
      const isLeft = idx % 2 === 0;

      return (
        <motion.div
          key={idx}
          className="relative flex items-center mb-20 md:justify-between"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: idx * 0.4 }}
        >
          {/* Line branch */}
          <motion.div
            className={`absolute top-8 w-[50%] h-1 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full shadow-lg z-0`}
            style={{
              left: isLeft ? "50%" : "auto",
              right: isLeft ? "auto" : "50%",
            }}
            initial={{ width: 0 }}
            whileInView={{ width: "50%" }}
            transition={{ duration: 1, delay: idx * 0.4 }}
          />

          {/* Card */}
          <motion.div
            className={`bg-slate-900/80 border border-pink-500 rounded-3xl shadow-lg p-6 max-w-md ${
              isLeft ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
            }`}
            initial={{ x: isLeft ? -100 : 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(236,72,153,0.5)",
            }}
          >
            <h4 className="text-xl font-bold text-yellow-300">{edu.degree}</h4>
            <p className="text-slate-300">{edu.college}</p>
            <p className="text-pink-300 mt-1">
              <b>Year:</b> {edu.year} • <b>Percentage:</b> {edu.percentage}
            </p>
          </motion.div>

          {/* Timeline icon */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 flex justify-center items-center rounded-full shadow-lg z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 12,
              delay: idx * 0.3,
            }}
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 10px #ec4899",
                "0 0 25px #8b5cf6",
                "0 0 10px #ec4899",
              ],
              transition: { repeat: Infinity, duration: 2 },
            }}
          >
            {edu.icon}
          </motion.div>
        </motion.div>
      );
    })}
  </div>

  {/* Curved bottom shape */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      className="w-full h-[220px]"
    >
      <path
        d="M0,0 C150,100 350,0 500,100 L500,0 L0,0 Z"
        fill="#010b25ff"
      ></path>
    </svg>
  </div>
</motion.section>
          {/* Projects */}
          {/* Projects */}
<motion.section
  id="projects"
  className="pt-24 pb-16"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={sectionVariants}
  custom={2}
>
  <h3 className="text-4xl font-bold mb-6 text-center">
    🚀 <span className="glow">PROJECTS</span>
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {[
      {
        title: "ProctorBook System",
        desc: "A digital proctor book system for managing academic records.",
        img: "/proctor.jpg",
        demo: "https://portfolio-eight-blond.vercel.app/",
        code: "https://github.com/Rishi-2205/portfolio",
        tech: ["React", "Python", "Django", "PostgreSQL"],
        duration: "Jan 2025 - Mar 2025",
      },
      {
        title: "Food Recommendation App",
        desc: "AI-powered app suggesting meals based on user preferences.",
        img: "/food2.png",
        demo: "https://my-food-woad.vercel.app/",
        code: "https://github.com/Rishi-2205/portfolio",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        duration: "Apr 2025 - Jun 2025",
      },
      {
        title: "AI Skin Analysis",
        desc: "Machine learning project for skin disease detection and classification.",
        img: "/face.jpg",
        demo: "https://portfolio-eight-blond.vercel.app/",
        code: "https://github.com/Rishi-2205/portfolio",
        tech: ["React", "Python", "Flask", "SQLite"],
        duration: "Jul 2025 - Sep 2025",
      },
    ].map((project, idx) => (
      <motion.div
        key={idx}
        className="relative cursor-pointer group"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: idx * 0.3, duration: 0.6, type: "spring" }}
      >
        <motion.div
          className="relative w-full h-[380px] rounded-2xl shadow-2xl transition-all duration-700 group-hover:scale-105"
          style={{
            transformStyle: "preserve-3d",
            transform:
              activeProject === idx
                ? "rotateY(180deg) scale(1.05)"
                : "rotateY(0deg)",
            perspective: "1500px",
          }}
          >
            {/*wrapper  */}
          <motion.div
  key={idx}
  className="relative cursor-pointer group"
  initial={{ opacity: 0, y: 50, scale: 0.9 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ delay: idx * 0.3, duration: 0.6, type: "spring" }}
  whileHover={{
    scale: 1.05,
    rotateX: 2,
    rotateY: -2,
    boxShadow:
      "0px 15px 35px rgba(166, 193, 31, 0.78), 0px 8px 20px rgba(139,92,246,0.3)",
  }}
>
  <motion.div
    className="relative w-full h-[380px] rounded-2xl shadow-xl transition-all duration-700"
    style={{
      transformStyle: "preserve-3d",
      transform:
        activeProject === idx
          ? "rotateY(180deg) scale(1.05)"
          : "rotateY(0deg)",
      perspective: "1500px",
    }}
  >
    </motion.div>
    </motion.div>
      
          {/* Front side */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-5 flex flex-col justify-end">
              <h4 className="text-2xl font-bold text-pink-300 drop-shadow-lg">
                {project.title}
              </h4>
              <p className="text-slate-200 text-sm">{project.desc}</p>
              <button
                onClick={() =>
                  setActiveProject(activeProject === idx ? null : idx)
                }
                className="mt-3 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-lg text-sm text-white shadow-lg hover:shadow-pink-500/50 transition-all"
              >
                🔍 View Details
              </button>
            </div>
          </div>

          {/* Back side */}
          <div
            className="absolute inset-0 bg-slate-900/95 rounded-2xl p-5 flex flex-col border border-pink-500/40"
            style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
          >
            <h4 className="text-xl font-bold mb-2 text-yellow-300">
              {project.title}
            </h4>
            <ul className="mb-3 flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <motion.li
                  key={i}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-2 py-1 text-xs rounded bg-purple-600/50 border border-purple-400/30 shadow"
                >
                  {t}
                </motion.li>
              ))}
            </ul>
            <p className="text-sm mb-3 text-slate-300">
              <b>Duration:</b> {project.duration}
            </p>
            <div className="mt-auto flex gap-3">
              <a
                href={project.demo}
                target="_blank"
                className="px-4 py-2 text-sm bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-lg text-white shadow-md hover:shadow-pink-500/40"
              >
                🔗 Demo
              </a>
              <a
                href={project.code}
                target="_blank"
                className="px-4 py-2 text-sm bg-slate-700 hover:bg-slate-800 rounded-lg text-white shadow-md"
              >
                💻 Code
              </a>
            </div>

            {/* Close button */}
            <button
              onClick={() => setActiveProject(null)}
              className="mt-4 px-3 py-1 text-xs bg-red-500 hover:bg-red-600 rounded-lg text-white self-end shadow-md"
            >
              ✖ Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    ))}
  </div>
          </motion.section>

          {/* Skills */}
          {/* Skills */}
<motion.section
  id="skills"
  className="relative pt-28 pb-20"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true }}
>
  {/* Background Shapes */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-95" />

    {/* Animated Glow Circles */}
    <motion.div
      className="absolute top-20 left-10 w-72 h-72 rounded-full bg-pink-500/20 blur-3xl"
      animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl"
      animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>

  {/* Section Title */}
  <motion.h2
    className="text-4xl font-bold mb-16 text-center text-pink-400 glow"
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    ⚡ SKILLS & EXPERTISE ⚡
  </motion.h2>

  {/* Skill Groups */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">
    {skillGroups.map((group, i) => (
      <motion.div
        key={group.category}
        className="bg-slate-900/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-slate-700 hover:shadow-pink-500/20 transition duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2, duration: 0.6, type: "spring" }}
        viewport={{ once: true }}
      >
        {/* Category Header */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleCategory(group.category)}
        >
          <h4 className="text-xl font-semibold text-pink-300">{group.category}</h4>
          <motion.span
            animate={{ rotate: openCategories.includes(group.category) ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-yellow-400"
          >
            ▼
          </motion.span>
        </div>

        {/* Expandable Skills */}
        <AnimatePresence>
          {openCategories.includes(group.category) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden mt-4 space-y-4"
            >
              {group.skills.map((s, j) => (
                <SkillBar
                  key={s.name}
                  skill={s}
                  color={colors[group.category]}
                  isOpen={openCategories.includes(group.category)}
                  delay={j * 0.1}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    ))}
  </div>
</motion.section>

          {/* Contact */}
          <motion.section
  id="contact"
  className="pt-36 pb-28 relative overflow-hidden"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={sectionVariants}
  custom={4}
>

  {/* Section Title */}
  <motion.h2
    className="text-4xl font-bold mb-16 text-center text-pink-400 glow"
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    🧑‍💻 CONTACT AND COLLABE WITH ME !!!
  </motion.h2>
  {/* Curved background with gradient sweep */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <svg
      viewBox="0 0 1440 320"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <path
        fill="url(#gradientContact)"
        fillOpacity="1"
        d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,106.7C672,117,768,171,864,197.3C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
      <defs>
        <linearGradient id="gradientContact" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="50%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
    </svg>

    {/* Floating blobs */}
    <div className="absolute top-[-20%] left-[-20%] w-[400px] h-[400px] bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full blur-3xl animate-pulse opacity-40"></div>
    <div className="absolute top-[30%] left-[60%] w-[500px] h-[500px] bg-gradient-to-tr from-yellow-400 to-pink-500 rounded-full blur-3xl animate-spin-slow opacity-30"></div>
    <div className="absolute top-[50%] left-[20%] w-[350px] h-[350px] bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-2xl animate-bounce opacity-25"></div>
    <div className="absolute top-[10%] left-[50%] w-[250px] h-[250px] bg-gradient-to-tr from-green-400 to-teal-500 rounded-full blur-2xl animate-ping opacity-20"></div>
  </div>
  

  {/* Contact Card */}
  <div className="max-w-2xl mx-auto bg-slate-900/70 backdrop-blur-md p-8 rounded-3xl shadow-xl relative z-10 border border-pink-500">
    {/* Social Links */}
    <div className="flex justify-center gap-6 mb-6">
      {link.map((link, i) => (
        <motion.a
          key={i}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
          whileHover={{
            scale: 1.3,
            rotate: 10,
            boxShadow: "0px 0px 20px rgba(8, 6, 47,0.76)",
          }}
          className={`text-2xl p-3 rounded-full shadow-lg text-white ${link.bg}`}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
   

    {/* Contact Info */}
    <motion.div
      className="text-center text-slate-100 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p className="mb-2 text-green-300">Send a message and I’ll get back to you soon!</p>
      <p className="mt-2 text-pink-400">
        <b>Email:</b>{" "}
        <a href="mailto:rishiakash2205@gmail.com" className="text-pink-300 underline">
          rishiakash2205@gmail.com
        </a>
      </p>
      <p className="mt-1 text-pink-400">
        <b>Phone:</b>{" "}
        <a href="tel:+918825848216" className="text-pink-300 underline">
          +91 8825848216
        </a>
      </p>
    </motion.div>

    {/* Contact Form */}
    <motion.form
      action="https://formspree.io/f/mwpqakyl"
      method="POST"
      className="grid gap-4 md:grid-cols-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <input
        name="name"
        placeholder="Your Name"
        className="p-3 rounded-lg bg-transparent border border-slate-700 focus:border-pink-400 focus:ring-2 focus:ring-pink-400 transition-all"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="p-3 rounded-lg bg-transparent border border-slate-700 focus:border-pink-400 focus:ring-2 focus:ring-pink-400 transition-all"
      />
      <textarea
        name="message"
        placeholder="Message"
        rows="4"
        className="p-3 rounded-lg bg-transparent border border-slate-700 focus:border-pink-400 focus:ring-2 focus:ring-pink-400 transition-all md:col-span-2"
      />
      <div className="md:col-span-2 text-right">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(19, 15, 135, 0.7)" }}
          className="px-5 py-2 rounded-xl border border-pink-400 text-pink-300 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 shadow-lg transition-all duration-300"
        >
          Send Message
        </motion.button>
      </div>
    </motion.form>
  </div>

  {/* Tailwind Animations */}
  <style>{`
    .animate-spin-slow { animation: spin 60s linear infinite; }
  `}</style>
</motion.section>
        </main>
      </div>
      {/* Footer */}
      <footer className="relative mt-20 bg-gradient-to-r from-slate-900 via-black to-slate-900 text-gray-300 py-10 px-6 overflow-hidden">
      {/* Background glowing animation */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-300"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-6">
        {/* Tagline */}
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
          🚀 Let’s Connect & Build Something Creative
        </h2>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <a href="#about" className="hover:text-pink-400 transition-colors duration-300">About</a>
          <a href="#education" className="hover:text-purple-400 transition-colors duration-300">Education</a>
          <a href="#projects" className="hover:text-sky-400 transition-colors duration-300">Projects</a>
          <a href="#skills" className="hover:text-yellow-300 transition-colors duration-300">Skills</a>
          <a href="#contact" className="hover:text-green-400 transition-colors duration-300">Contact</a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a
            href="https://github.com/Rishi-2205"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-300 hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/rishi-akash-93607431b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-300 hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/918825848216"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-300 hover:text-green-500"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:rishiakash2205@gmail.com"
            className="hover:scale-125 transition-transform duration-300 hover:text-red-400"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-sm text-gray-400">
          © {new Date().getFullYear()} <span className="text-pink-400">Rishiakash</span> | All Rights Reserved
        </p>
      </div>
      </footer>
    </>
  );
}
