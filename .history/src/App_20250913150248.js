import React, { useState } from "react";
import { Mail, Github, Linkedin, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RiyaSarafPortfolio() {
  const [activePage, setActivePage] = useState("home");

  // === Data (from resume) ===
  const projects = [
    {
      title: "Leave Management System",
      tech: "React.js, FastAPI, Bootstrap5, PostgreSQL, JWT",
      desc:
        "Full-stack web app for managing employee leave requests with role-based access, secure JWT authentication, and real-time status tracking.",
      github: "https://github.com/riyaaaa19/leave-management-system",
      live: "https://leave-management-system-cltb.onrender.com/",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Genomic Analysis Web Application",
      tech: "Python, Django, Scikit-learn, Pandas, Plotly",
      desc:
        "Django app for automated genomic data analysis with ML model selection, preprocessing, and visualizations.",
      github: "https://github.com/riyaaaa19/genomic-analysis-django",
      live: "#",
      img: "https://images.unsplash.com/photo-1581093588401-22db3c6fda05?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "CyberSaarthi – Phishing & Invoice Fraud Detection",
      tech: "FastAPI, React.js, SQLite, scikit-learn",
      desc:
        "Modular backend for phishing detection (ML) and invoice fraud detection (rule-based) with file parsing, API-key security, and structured reporting.",
      github: "https://github.com/riyaaaa19/CyberSaarthi",
      live: "#",
      img: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const skills = [
    { name: "Python", icon: "https://img.icons8.com/color/48/python.png" },
    { name: "C++", icon: "https://img.icons8.com/color/48/c-plus-plus-logo.png" },
    { name: "JavaScript", icon: "https://img.icons8.com/color/48/javascript--v1.png" },
    { name: "React.js", icon: "https://img.icons8.com/color/48/react-native.png" },
    { name: "FastAPI", icon: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg" },
    { name: "Django", icon: "https://img.icons8.com/color/48/django.png" },
    { name: "Pandas", icon: "https://img.icons8.com/color/48/pandas.png" },
    { name: "NumPy", icon: "https://img.icons8.com/color/48/numpy.png" },
    { name: "Scikit-learn", icon: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png" },
    { name: "MySQL", icon: "https://img.icons8.com/color/48/mysql-logo.png" },
  ];

  const certificates = [
    { title: "PCAP: Programming Essentials in Python", img: "https://via.placeholder.com/280x150?text=PCAP" },
    { title: "Introduction to Data Science — Cisco", img: "https://via.placeholder.com/280x150?text=Cisco+DS" },
    { title: "Accenture Data Analytics Simulation", img: "https://via.placeholder.com/280x150?text=Accenture" },
    { title: "Global Entrepreneur Summit — IIT Kharagpur", img: "https://via.placeholder.com/280x150?text=IIT+KGP" },
  ];

  const awards = [
    { title: "Branch Topper — 2023, 2024, 2025", img: "https://via.placeholder.com/280x150?text=Topper" },
    { title: "Best Girls Team Award — Hack SRIT 2025", img: "https://via.placeholder.com/280x150?text=Hack+SRIT" },
    { title: "1st Runner-Up — Ecopreneur Hackathon", img: "https://via.placeholder.com/280x150?text=Ecopreneur" },
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

  // === Animation variants ===
  const pageVariants = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 } };

  // === Card Component ===
  const Card = ({ img, title, subtitle, link, children }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-pink-100"
    >
      {img && <img src={img} alt={title} className="w-full h-40 object-cover" />}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        {subtitle && <p className="text-sm text-slate-500 mb-2">{subtitle}</p>}
        {children}
        {link && (
          <a href={link} target="_blank" rel="noreferrer" className="text-pink-600 text-sm font-medium hover:underline">
            View More →
          </a>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 text-slate-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b shadow-md">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Riya Saraf
          </h1>
          <nav className="flex gap-2 sm:gap-4 text-sm font-medium">
            {["home", "projects", "skills", "education", "certificates", "awards", "contact"].map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`px-3 py-1 rounded-md transition ${
                  activePage === page ? "bg-pink-600 text-white shadow-md" : "hover:bg-pink-100"
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6 space-y-12">
        <AnimatePresence mode="wait">
          {/* Home */}
          {activePage === "home" && (
            <motion.section key="home" variants={pageVariants} initial="initial" animate="animate" exit="exit"
              className="p-8 bg-white rounded-3xl shadow-xl grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-4xl font-extrabold mb-3">Hi — I’m Riya 👋</h2>
                <h3 className="text-lg md:text-xl text-pink-600 mb-4 font-medium">
                  Full-Stack Developer | Data Science Enthusiast
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Motivated Computer Science undergraduate with a strong academic record. Skilled in Python, data
                  analysis, and problem-solving, with a passion for building impactful solutions.
                </p>
                <div className="flex gap-3 mb-6">
                  <button onClick={() => setActivePage("projects")} className="px-4 py-2 rounded-md bg-pink-600 text-white hover:bg-pink-700 transition shadow">
                    View Projects
                  </button>
                  <button onClick={() => setActivePage("contact")} className="px-4 py-2 rounded-md border border-pink-600 text-pink-600 hover:bg-pink-50 transition shadow">
                    Contact Me
                  </button>
                </div>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/riya-saraf-9223a9257" target="_blank" rel="noreferrer"><Linkedin size={28} className="text-pink-600 hover:text-pink-800 transition" /></a>
                  <a href="https://github.com/riyaaaa19" target="_blank" rel="noreferrer"><Github size={28} className="text-pink-600 hover:text-pink-800 transition" /></a>
                  <a href="mailto:riyasaraf19@gmail.com"><Mail size={28} className="text-pink-600 hover:text-pink-800 transition" /></a>
                  <a href="https://leetcode.com/u/riyaaa19/" target="_blank" rel="noreferrer"><Code2 size={28} className="text-pink-600 hover:text-pink-800 transition" /></a>
                </div>
              </div>
              <div className="flex justify-center">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80"
                  alt="Coding" className="rounded-2xl shadow-lg object-cover max-h-96" />
              </div>
            </motion.section>
          )}

          {/* Projects */}
          {activePage === "projects" && (
            <motion.section key="projects" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <h2 className="text-3xl font-bold mb-6">Projects 🚀</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p, i) => (
                  <Card key={i} img={p.img} title={p.title} subtitle={p.tech} link={p.github}>
                    <p className="text-slate-600 text-sm mb-2">{p.desc}</p>
                    {p.live !== "#" && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="text-xs text-purple-600 hover:underline">
                        Live Demo
                      </a>
                    )}
                  </Card>
                ))}
              </div>
            </motion.section>
          )}

          {/* Skills */}
          {activePage === "skills" && (
            <motion.section key="skills" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <h2 className="text-3xl font-bold mb-6">Skills ⚡</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {skills.map((s, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.1 }} className="flex flex-col items-center bg-white rounded-lg shadow p-4">
                    <img src={s.icon} alt={s.name} className="w-12 h-12 mb-2" />
                    <p className="text-sm font-medium">{s.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Education */}
          {activePage === "education" && (
            <motion.section key="education" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <h2 className="text-3xl font-bold mb-6">Education 🎓</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {education.map((e, i) => (
                  <Card key={i} title={e.school} subtitle={e.degree}>
                    <p className="text-sm text-slate-500">{e.year}</p>
                    <p className="text-sm font-medium">{e.score}</p>
                  </Card>
                ))}
              </div>
            </motion.section>
          )}

          {/* Certificates */}
          {activePage === "certificates" && (
            <motion.section key="certificates" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <h2 className="text-3xl font-bold mb-6">Certificates 📜</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((c, i) => (
                  <Card key={i} img={c.img} title={c.title} />
                ))}
              </div>
            </motion.section>
          )}

          {/* Awards */}
          {activePage === "awards" && (
            <motion.section key="awards" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <h2 className="text-3xl font-bold mb-6">Awards 🏆</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {awards.map((a, i) => (
                  <Card key={i} img={a.img} title={a.title} />
                ))}
              </div>
            </motion.section>
          )}

          {/* Contact */}
          {activePage === "contact" && (
            <motion.section key="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit"
              className="p-8 bg-white rounded-3xl shadow-xl">
              <h2 className="text-3xl font-bold mb-6">Get in Touch 💌</h2>
              <p className="mb-4 text-slate-600">I’d love to collaborate or discuss opportunities. Reach out here:</p>
              <div className="space-y-3">
                <p><strong>Email:</strong> <a href="mailto:riyasaraf19@gmail.com" className="text-pink-600 hover:underline">riyasaraf19@gmail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:09201526142" className="text-pink-600 hover:underline">09201526142</a></p>
                <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/riya-saraf-9223a9257" target="_blank" rel="noreferrer" className="text-pink-600 hover:underline">linkedin.com/in/riya-saraf</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/riyaaaa19" target="_blank" rel="noreferrer" className="text-pink-600 hover:underline">github.com/riyaaaa19</a></p>
                <p><strong>LeetCode:</strong> <a href="https://leetcode.com/u/riyaaa19/" target="_blank" rel="noreferrer" className="text-pink-600 hover:underline">leetcode.com/u/riyaaa19</a></p>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-slate-500 py-6 border-t mt-12">
        © {new Date().getFullYear()} Riya Saraf — Built with ❤️ using React & Tailwind
      </footer>
    </div>
  );
}
