import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import TimelineCard from "./components/TimelineCard";
import "./styles.css";

export default function RiyaSarafPortfolio() {
  const [activePage, setActivePage] = useState("home");

  // ===== Data Sections =====
  const projects = [
    {
      title: "Leave Management System",
      tech: "React.js, FastAPI, PostgreSQL, JWT",
      desc: "Full-stack app for managing employee leave requests with role-based access and JWT authentication.",
      github: "https://github.com/riyaaaa19/leave-management-system",
      img: "/images/leave.png",
    },
    {
      title: "Genomic Analysis Web Application",
      tech: "Python, Django, Scikit-learn, Pandas",
      desc: "Django app for genomic data analysis with ML model selection, preprocessing and visualizations.",
      github: "https://github.com/riyaaaa19/genomic-analysis-django",
      img: "/images/genomics.png",
    },
    {
      title: "CyberSaarthi – Phishing & Invoice Fraud Detection",
      tech: "FastAPI, React.js, SQLite",
      desc: "ML + rule-based backend for phishing and invoice fraud detection with document parsing and structured reports.",
      github: "https://github.com/riyaaaa19/CyberSaarthi",
      img: "/images/cyber.png",
    },
    {
      title: "SheCare AI",
      tech: "FastAPI, React, SQLite, OmniDimension API",
      desc: "Health & wellness assistant for women with cycle tracking, journaling, PCOS risk check, and AI chatbot.",
      github: "https://github.com/sonamnimje/SheCare-AI",
      img: "/images/shecare.png",
    },
    {
      title: "SmartGrocery — AI-Powered Grocery & Recipe Assistant",
      tech: "Flask, Scikit-learn, Bootstrap, CSS",
      desc: "Smart Grocery Web app for recipe suggestions, nutrition tracking, inventory management, and shopping lists.",
      github: "https://github.com/arnavv19/Smart-Grocery-AI",
      img: "/images/grocery.png",
    },
  ];

  const education = [
    {
      school: "BADERIA GLOBAL INSTITUTE OF ENGINEERING AND MANAGEMENT",
      degree: "B.Tech CSE (Data Science)",
      year: "2022 – 2026",
      score: "CGPA: 8.28",
      img: "/images/graduation.png",
    },
    {
      school: "Nachiketa Higher Secondary School, Jabalpur",
      degree: "Class 12th • PCM • State Board",
      year: "2022",
      score: "Percentage: 73.4%",
      img: "/images/school.png",
    },
    {
      school: "Nachiketa Higher Secondary School, Jabalpur",
      degree: "Class 10th • State Board",
      year: "2020",
      score: "Percentage: 92%",
      img: "/images/school.png",
    },
  ];

  const certificates = [
    { title: "PCAP: Programming Essentials in Python", img: "/images/certificate1.jpg" },
    { title: "Introduction to Data Science — Cisco", img: "/images/certificate2.jpg" },
    { title: "Accenture Data Analytics Simulation", img: "/images/certificate3.jpg" },
    { title: "Global Entrepreneur Summit — IIT Kharagpur", img: "/images/certificate4.jpg" },
    { title: "Artificial Intelligence Fundamentals — IBM SkillsBuild", img: "/images/certificate5.jpg" },
    { title: "Cybersecurity Essentials — Cisco", img: "/images/certificate6.jpg" },
    { title: "Data Analytics — IBM Cognos", img: "/images/certificate7.jpg" },
  ];

  const awards = [
    { title: "Branch Topper — 2023, 2024, 2025", img: "/images/award1.jpg" },
    { title: "Best Girls Team Award — Hack SRIT 2025", img: "/images/award2.jpg" },
    { title: "1st Runner-Up — Ecopreneur Hackathon", img: "/images/award3.jpg" },
    { title: "3rd Position — Slide The Change at IEEE SHE ASPIRE 2.0", img: "/images/award4.jpg" },
  ];

  const hackathons = [
    {
      title: "Ecopreneur Hackathon",
      desc: "Hosted by Baderia Global Institute of Engineering and Management",
      img: "/images/hackathon1.jpg",
    },
    {
      title: "36-hour HackSRIT Hackathon",
      desc: "Hosted by Shri Ram Institute of technology",
      img: "/images/hackathon2.jpg",
    },
    {
      title: "Operation Eclipse – Stealth Spacecraft Design & Architecture",
      desc: "Competition at IIITDM Jabalpur",
      img: "/images/hackathon3.jpg",
    },
    {
      title: "Global Entrepreneurship Summit 2025",
      desc: "IIT Kharagpur",
      img: "/images/hackathon4.jpg",
    },
    {
      title: "All India Women only Hackathon 2023",
      desc: "Hosted by Shooting stars foundation",
      img: "/images/hackathon5.jpg",
    },
  ];

  return (
    <div>
      {/* ===== Header ===== */}
      <header>
        <h1>Riya Saraf</h1>
        <nav>
          {["home", "about", "projects", "education", "certificates", "awards", "hackathons"].map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={activePage === page ? "active" : ""}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      {/* ===== Home Section ===== */}
      {activePage === "home" && (
        <section className="hero">
          <div className="particle-bg">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <div className="hero-text">
            <h2>
              Hi There, I'm <span className="highlight">Riya Saraf</span>
            </h2>
            <h3>
              I Am Into{" "}
              <span className="typing-container">
                <span className="typing">Web Development | Data Science | AI/ML</span>
              </span>
            </h3>
            <p>
              Motivated Computer Science undergraduate skilled in Python,
              full-stack development, and ML/AI. Passionate about building
              impactful solutions and contributing to open-source projects.
            </p>

            <div className="hero-buttons">
              <button className="cta" onClick={() => setActivePage("projects")}>View Projects</button>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=riyasaraf19@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cta"
              >
                Contact Me
              </a>
              <a
                href={process.env.PUBLIC_URL + "/images/resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="cta"
              >
                View Resume
              </a>
            </div>

            <div className="social-icons">
              <a href="https://linkedin.com/in/riya-saraf-9223a9257" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
              <a href="https://github.com/riyaaaa19" target="_blank" rel="noreferrer"><Github size={18} /></a>
              <a href="mailto:riyasaraf19@gmail.com"><Mail size={18} /></a>
              <a href="https://leetcode.com/u/riyaaa19/" target="_blank" rel="noreferrer">LC</a>
              <a href="https://www.hackerrank.com/profile/riyasaraf19" target="_blank" rel="noreferrer">HR</a>
            </div>
          </div>
          <div className="hero-img">
            <div className="avatar-circle">
              <img src="/images/riya-photo.png" alt="Riya Saraf" />
            </div>
          </div>
        </section>
      )}

      {/* ===== About Section ===== */}
      {activePage === "about" && (
        <section className="about">
          <h2>About Me</h2>
          <div className="about-container" style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start" }}>
            
            {/* Left Side: About Text + Skills */}
            <div style={{ flex: 1 }}>
              <ul style={{ paddingLeft: "0", lineHeight: "1.8", listStyle: "none" }}>
                {[
                  "Strong academic record with consistent top performance in Computer Science.",
                  "Proficient in Python, React.js, Django, FastAPI, and modern data-analysis libraries.",
                  "Enthusiastic about hackathons and collaborative problem solving — recognized for innovative solutions.",
                  "Passionate about AI-driven applications that solve real-world problems.",
                  "Dedicated to merging creativity and technology to create solutions that make a positive impact.",
                  "Interested in contributing to open-source projects and continuously improving technical expertise."
                ].map((point, index) => (
                  <li key={index} style={{ position: "relative", paddingLeft: "25px", marginBottom: "12px", fontSize: "16px", color: "#333" }}>
                    <span style={{ position: "absolute", left: 0, color: "#ff4da6", fontWeight: "bold", fontSize: "20px", lineHeight: "1" }}>•</span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Skills Section */}
              <h3 style={{ marginTop: "25px", marginBottom: "15px", color: "DarkPink", textAlign: "center" }}>Skills</h3>
              <div className="skills-section" style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
                {[
                  "C", "C++", "Python", "HTML", "CSS", "JavaScript",
                  "FastAPI", "Flask", "Django", "React.js", "Scikit-learn", "Pandas", "NumPy",
                  "Git", "GitHub", "VS Code", "MySQL", "Render", "Google Gemini API", "OmniDimension SDK",
                  "Matplotlib", "Seaborn", "Plotly", "Streamlit",
                  "REST APIs", "JWT/OAuth2 Authentication", "Document Parsing", "FAISS", "Uvicorn"
                ].map((skill) => (
                  <span key={skill} className="skills-card" style={{
                    backgroundColor: "#ffe6f0",
                    color: "#ff4da6",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: "500"
                  }}>{skill}</span>
                ))}
              </div>
            </div>

            {/* Right Side: About Image */}
            <div className="about-img" >
              <div className="avatar-circle" style={{ width: "250px", height: "250px", margin: "0 auto" }}>
                <img
                  src="/images/about.png"
                  alt="About Me"
                  style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== Projects Section ===== */}
      {activePage === "projects" && (
        <section>
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((p, i) => (
              <TimelineCard
                key={i}
                title={p.title}
                subtitle={p.tech}
                img={p.img}
                score={<span style={{ color: "#555" }}>{p.desc}</span>}
                github={p.github}
                live={p.live}
                type="project"
              />
            ))}
          </div>
        </section>
      )}

      {/* ===== Education Section ===== */}
      {activePage === "education" && (
        <section>
          <h2>Education</h2>
          <div className="timeline">
            {education.map((e, i) => (
              <TimelineCard
                key={i}
                title={e.school}
                subtitle={e.degree}
                year={e.year}
                score={e.score}
                img={e.img}
                type="education"
              />
            ))}
          </div>
        </section>
      )}

      {/* ===== Certificates Section ===== */}
      {activePage === "certificates" && (
        <section>
          <h2>Certificates</h2>
          <div className="grid">
            {certificates.map((c, i) => (
              <TimelineCard key={i} title={c.title} img={c.img} type="certificate" />
            ))}
          </div>
        </section>
      )}

      {/* ===== Awards Section ===== */}
      {activePage === "awards" && (
        <section>
          <h2>Awards</h2>
          <div className="grid">
            {awards.map((a, i) => (
              <TimelineCard key={i} title={a.title} img={a.img} type="award" />
            ))}
          </div>
        </section>
      )}

      {/* ===== Hackathons Section ===== */}
      {activePage === "hackathons" && (
        <section>
          <h2>Hackathons & Conferences</h2>
          <div className="grid">
            {hackathons.map((h, i) => (
              <TimelineCard key={i} title={h.title} subtitle={h.desc} img={h.img} type="certificate" />
            ))}
          </div>
        </section>
      )}

      {/* ===== Footer ===== */}
      <footer>© {new Date().getFullYear()} Riya Saraf — Built with ❤️</footer>
    </div>
  );
}
