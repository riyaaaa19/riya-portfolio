import React, { useState } from "react";
import { Mail, Phone, Github, Linkedin, Award, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RiyaSarafPortfolio() {
  const [activePage, setActivePage] = useState("home");

  const projects = [
    {
      title: "Leave Management System",
      tech: "React.js, FastAPI, Bootstrap5, PostgreSQL, JWT",
      desc:
        "Full-stack app for managing employee leave requests with role-based access and secure JWT authentication.",
      github: "https://github.com/riyaaaa19/leave-management-system",
      live: "https://leave-management-system-cltb.onrender.com/",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Genomic Analysis Web Application",
      tech: "Python, Django, Scikit-learn, Pandas, Plotly",
      desc:
        "Django app for automated genomic data analysis with ML model selection, preprocessing and visualizations.",
      github: "https://github.com/riyaaaa19/genomic-analysis-django",
      live: "#",
      img: "https://images.unsplash.com/photo-1581093588401-22db3c6fda05?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "CyberSaarthi – Phishing & Invoice Fraud Detection",
      tech: "FastAPI, React.js, SQLite, scikit-learn",
      desc:
        "Modular backend for phishing detection (ML) and invoice fraud detection (rule-based) with document parsing.",
      github: "https://github.com/riyaaaa19/CyberSaarthi",
      live: "#",
      img: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const skills = [
    { name: "Python", icon: "https://img.icons8.com/color/48/000000/python.png" },
    { name: "C++", icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" },
    { name: "JavaScript", icon: "https://img.icons8.com/color/48/000000/javascript--v1.png" },
    { name: "React.js", icon: "https://img.icons8.com/color/48/000000/react-native.png" },
    { name: "FastAPI", icon: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg" },
    { name: "Django", icon: "https://img.icons8.com/color/48/000000/django.png" },
    { name: "Pandas", icon: "https://img.icons8.com/color/48/000000/pandas.png" },
    { name: "NumPy", icon: "https://img.icons8.com/color/48/000000/numpy.png" },
    { name: "Scikit-learn", icon: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png" },
    { name: "MySQL", icon: "https://img.icons8.com/color/48/000000/mysql-logo.png" },
  ];

  const certificates = [
    { title: "PCAP: Programming Essentials in Python", img: "https://via.placeholder.com/200x120?text=Certificate+1" },
    { title: "Introduction to Data Science — Cisco", img: "https://via.placeholder.com/200x120?text=Certificate+2" },
    { title: "Accenture Data Analytics Simulation", img: "https://via.placeholder.com/200x120?text=Certificate+3" },
    { title: "Global Entrepreneur Summit — IIT Kharagpur", img: "https://via.placeholder.com/200x120?text=Conference+1" },
  ];

  const awards = [
    { title: "Branch Topper — 2023, 2024, 2025", img: "https://via.placeholder.com/200x120?text=Award+1" },
    { title: "Best Girls Team Award — Hack SRIT 2025", img: "https://via.placeholder.com/200x120?text=Award+2" },
    { title: "1st Runner-Up — Ecopreneur Hackathon", img: "https://via.placeholder.com/200x120?text=Award+3" },
  ];

  const education = [
    {
      school: "BADERIA GLOBAL INSTITUTE OF ENGINEERING AND MANAGEMENT",
      degree: "B.Tech CSE (Data Science)",
      year: "2022 – 2026",
      score: "CGPA: 8.28",
    },
    {
      school: "Nachiketa Higher Secondary School, Jabalpur",
      degree: "Class 12th • PCM • State Board",
      year: "2022",
      score: "Percentage: 73.4%",
    },
    {
      school: "Nachiketa Higher Secondary School, Jabalpur",
      degree: "Class 10th • State Board",
      year: "2020",
      score: "Percentage: 92%",
    },
  ];

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const TimelineCard = ({ icon, title, subtitle, year, score, img }) => (
    <div className="relative bg-gradient-to-br from-white to-pink-50 rounded-xl p-4 shadow hover:scale-[1.02] transition">
      <span className="absolute -left-3 top-5 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-white">
        {icon}
      </span>
      {img && <img src={img} alt={title} className="h-32 w-full object-cover rounded mb-3" />}
      <h4 className="font-semibold text-lg">{title}</h4>
      {subtitle && <p className="text-sm text-slate-600">{subtitle}</p>}
      {year && <p className="text-sm text-slate-500">{year}</p>}
      {score && <p className="text-sm font-medium mt-2">{score}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 text-slate-800 font-sans">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
        <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Riya Saraf</h1>
          <nav className="flex gap-4 text-sm font-medium">
            {['home','projects','skills','education','certificates','awards','contact'].map(page => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`px-3 py-1 rounded-md transition ${activePage===page? 'bg-pink-600 text-white':'hover:bg-pink-50'}`}
              >
                {page.charAt(0).toUpperCase()+page.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <AnimatePresence mode="wait">
          {/* Home */}
          {activePage === "home" && (
            <motion.section key="home" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="p-8 bg-white rounded-3xl shadow-xl grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-4xl font-extrabold mb-3">Hi — I’m Riya 👋</h2>
                <h3 className="text-xl text-pink-600 mb-4">Full-Stack Developer | Data Science Enthusiast</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Motivated Computer Science undergraduate with a strong academic record. Passionate about full-stack development, AI/ML projects, and building impactful solutions for real-world problems.
                </p>
                <div className="flex gap-3 mb-6">
                  <button onClick={() => setActivePage("projects")} className="px-4 py-2 rounded-md bg-pink-600 text-white hover:bg-pink-700 transition">View Projects</button>
                  <button onClick={() => setActivePage("contact")} className="px-4 py-2 rounded-md border border-pink-600 text-pink-600 hover:bg-pink-50 transition">Contact Me</button>
                </div>
                <div className="flex gap-3">
                  <a href="https://linkedin.com/in/riya-saraf-9223a9257" target="_blank" rel="noreferrer"><Linkedin size={24} className="text-pink-600 hover:text-pink-800"/></a>
                  <a href="https://github.com/riyaaaa19" target="_blank" rel="noreferrer"><Github size={24} className="text-pink-600 hover:text-pink-800"/></a>
                  <a href="mailto:riyasaraf19@gmail.com"><Mail size={24} className="text-pink-600 hover:text-pink-800"/></a>
                </div>
              </div>
              <div className="flex justify-center">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80" alt="Coding" className="rounded-2xl shadow-lg object-cover max-h-96"/>
              </div>
            </motion.section>
          )}

          {/* Projects */}
          {activePage === "projects" && (
            <motion.section key="projects" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="p-6 bg-white rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Projects</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {projects.map((p) => (
                  <div key={p.title} className="rounded-xl overflow-hidden shadow hover:shadow-2xl transition bg-gradient-to-br from-white to-pink-50">
                    <img src={p.img} alt={p.title} className="h-32 w-full object-cover"/>
                    <div className="p-4 space-y-3">
                      <h4 className="font-semibold text-lg">{p.title}</h4>
                      <p className="text-xs text-slate-500">{p.tech}</p>
                      <p className="text-sm text-slate-600">{p.desc}</p>
                      <div className="flex gap-2 mt-3">
                        <a href={p.github} target="_blank" rel="noreferrer" className="px-3 py-1 text-sm rounded-md bg-slate-800 text-white hover:bg-slate-900 transition">GitHub</a>
                        {p.live !== "#" && <a href={p.live} target="_blank" rel="noreferrer" className="px-3 py-1 text-sm rounded-md bg-pink-600 text-white hover:bg-pink-700 transition">Live Demo</a>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Skills */}
          {activePage === "skills" && (
            <motion.section key="skills" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="p-6 bg-white rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Skills</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {skills.map((s) => (
                  <div key={s.name} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50 shadow hover:scale-105 transition">
                    <img src={s.icon} alt={s.name} className="w-10 h-10" />
                    <span className="font-medium text-slate-700">{s.name}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Education */}
          {activePage === "education" && (
            <motion.section key="education" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="p-6 bg-white rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="relative border-l-4 border-pink-400 pl-6 space-y-6">
                {education.map((e) => (
                  <TimelineCard key={e.school+e.year} icon={<GraduationCap size={14}/>} title={e.school} subtitle={e.degree} year={e.year} score={e.score} />
                ))}
              </div>
            </motion.section>
          )}

          {/* Certificates */}
          {activePage === "certificates" && (
            <motion.section key="certificates" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="p-6 bg-white rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Certificates & Conferences</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((c) => (
                  <div key={c.title} className="rounded-xl overflow-hidden shadow bg-gradient-to-br from-white to-purple-50 hover:scale-105 transition">
                    <img src={c.img} alt={c.title} className="h-32 w-full object-cover" />
                    <div className="p-4">
                      <h4 className="font-semibold">{c.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Awards */}
          {activePage === "awards" && (
            <motion.section key="awards" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="p-6 bg-white rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Awards</h3>
              <div className="relative border-l-4 border-pink-400 pl-6 space-y-6">
                {awards.map((a) => (
                  <TimelineCard key={a.title} icon={<Award size={14}/>} title={a.title} img={a.img} />
                ))}
              </div>
            </motion.section>
          )}

          {/* Contact */}
          {activePage === "contact" && (
            <motion.section key="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="p-6 bg-white rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Contact</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2"><Mail size={16}/> <a href="mailto:riyasaraf19@gmail.com" className="hover:underline">riyasaraf19@gmail.com</a></div>
                  <div className="flex items-center gap-2"><Phone size={16}/> <a href="tel:09201526142" className="hover:underline">09201526142</a></div>
                  <div className="flex items-center gap-2"><Linkedin size={16}/> <a href="https://linkedin.com/in/riya-saraf-9223a9257" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></div>
                  <div className="flex items-center gap-2"><Github size={16}/> <a href="https://github.com/riyaaaa19" target="_blank" rel="noreferrer">GitHub</a></div>
                </div>
                <form className="space-y-3 bg-slate-50 p-4 rounded-xl shadow">
                  <input placeholder="Your name" className="w-full px-3 py-2 rounded-md border" />
                  <input placeholder="Your email" className="w-full px-3 py-2 rounded-md border" />
                  <textarea placeholder="Message" className="w-full px-3 py-2 rounded-md border h-24" />
                  <button type="button" className="w-full px-4 py-2 rounded-md bg-pink-600 text-white hover:bg-pink-700 transition">Send</button>
                </form>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <footer className="text-center text-sm text-slate-500 py-6">© {new Date().getFullYear()} Riya Saraf — Built with ❤️</footer>
    </div>
  );
}
