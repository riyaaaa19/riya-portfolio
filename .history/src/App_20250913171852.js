import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import TimelineCard from "./components/TimelineCard"; // adjust path if needed
import "./styles.css"; // Add styles here

export default function RiyaSarafPortfolio() {
  const [activePage, setActivePage] = useState("home");

  const projects = [
    {
      title: "Leave Management System",
      tech: "React.js, FastAPI, PostgreSQL, JWT",
      desc: "Full-stack app for managing employee leave requests with role-based access and JWT authentication.",
      github: "https://github.com/riyaaaa19/leave-management-system",
      live: "https://leave-management-system-cltb.onrender.com/",
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

  const certificates = [
    { title: "PCAP: Programming Essentials in Python", img: "/images/certificate1.jpg" },
    { title: "Introduction to Data Science — Cisco", img: "/images/certificate2.jpg" },
    { title: "Accenture Data Analytics Simulation", img: "/images/certificate3.jpg" },
    { title: "Global Entrepreneur Summit — IIT Kharagpur", img: "/images/certificate4.jpg" },
  ];

  const awards = [
    { title: "Branch Topper — 2023, 2024, 2025", img: "/images/award1.jpg" },
    { title: "Best Girls Team Award — Hack SRIT 2025", img: "/images/award2.jpg" },
    { title: "1st Runner-Up — Ecopreneur Hackathon", img: "/images/award3.jpg" },
  ];

  return (
    <div>
      <header>
        <h1>Riya Saraf</h1>
        <nav>
          {["home", "projects", "education", "certificates", "awards", "contact"].map((page) => (
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
              <span className="typing">
                Web Development | Data Science | AI/ML
              </span>
            </h3>
            <p>
              Motivated Computer Science undergraduate skilled in Python,
              full-stack development, and ML/AI. Passionate about building
              impactful solutions and contributing to open-source projects.
            </p>
            <div style={{ marginTop: "20px" }}>
              <button className="cta" onClick={() => setActivePage("projects")}>
                View Projects
              </button>
              <button className="outline" onClick={() => setActivePage("contact")}>
                Contact Me
              </button>
            </div>
            <div className="social-icons">
              <a href="https://linkedin.com/in/riya-saraf-9223a9257" target="_blank" rel="noreferrer">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/riyaaaa19" target="_blank" rel="noreferrer">
                <Github size={18} />
              </a>
              <a href="mailto:riyasaraf19@gmail.com">
                <Mail size={18} />
              </a>
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

      {activePage === "education" && (
        <section>
          <h2>Education</h2>
          {education.map((e, i) => (
            <TimelineCard
              key={i}
              title={e.school}
              subtitle={e.degree}
              year={e.year}
              score={e.score}
              icon="🎓"
              type="education"
            />
          ))}
        </section>
      )}

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

      {activePage === "contact" && (
        <section>
          <h2>Contact</h2>
          <p>
            Email:{" "}
            <a href="mailto:riyasaraf19@gmail.com" style={{ color: "#ff4da6" }}>
              riyasaraf19@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/riya-saraf-9223a9257"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#ff4da6" }}
            >
              linkedin.com/in/riya-saraf
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/riyaaaa19"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#ff4da6" }}
            >
              github.com/riyaaaa19
            </a>
          </p>
        </section>
      )}

      <footer>© {new Date().getFullYear()} Riya Saraf — Built with ❤️</footer>
    </div>
  );
}
