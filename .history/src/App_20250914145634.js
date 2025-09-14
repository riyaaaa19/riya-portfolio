import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import TimelineCard from "./components/TimelineCard";
import "./styles.css";

export default function RiyaSarafPortfolio() {
  const [activePage, setActivePage] = useState("home");

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
      desc: "Django app for automated genomic data analysis with ML model selection, preprocessing, and visualizations.",
      github: "https://github.com/riyaaaa19/genomic-analysis-django",
      img: "/images/genomics.png",
    },
    {
      title: "CyberSaarthi – Phishing & Invoice Fraud Detection",
      tech: "FastAPI, React.js, SQLite",
      desc: "Modular backend for phishing and invoice fraud detection with file parsing, multilingual responses, and structured reporting.",
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
      img: "/images/graduation.png",
    },
  ];

  return (
    <div>
      {/* ====== HEADER ====== */}
      <header>
        <h1>Riya Saraf</h1>
        <nav>
          {["home", "about", "projects", "education"].map((page) => (
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

      {/* ====== HOME PAGE ====== */}
      {activePage === "home" && (
        <section className="hero">
          <div className="hero-text">
            <h2>
              Hi There, I'm <span className="highlight">Riya Saraf</span>
            </h2>
            <h3>
              I Am Into{" "}
              <span className="typing-container">
                <span className="typing">
                  Web Development | Data Science | AI/ML
                </span>
              </span>
            </h3>
            <p>
              Motivated Computer Science undergraduate skilled in Python,
              full-stack development, and ML/AI. Passionate about building
              impactful solutions and contributing to open-source projects.
            </p>
            <div className="hero-buttons">
              <button className="cta" onClick={() => setActivePage("projects")}>
                View Projects
              </button>
              <a
                href="mailto:riyasaraf19@gmail.com"
                className="cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Me
              </a>
              <a
                href={process.env.PUBLIC_URL + "/images/resume.pdf"}
                className="cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </div>
            <div className="social-icons">
              <a
                href="https://linkedin.com/in/riya-saraf-9223a9257"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/riyaaaa19" target="_blank" rel="noreferrer">
                <Github size={18} />
              </a>
              <a href="mailto:riyasaraf19@gmail.com">
                <Mail size={18} />
              </a>
              <a href="https://leetcode.com/u/riyaaa19/" target="_blank" rel="noreferrer">
                LC
              </a>
              <a
                href="https://www.hackerrank.com/profile/riyasaraf19"
                target="_blank"
                rel="noreferrer"
              >
                HR
              </a>
            </div>
          </div>
          <div className="hero-img">
            <div className="avatar-circle">
              <img src="/images/riya-photo.png" alt="Riya Saraf" />
            </div>
          </div>
        </section>
      )}

      {/* ====== ABOUT ME PAGE ====== */}
      {activePage === "about" && (
        <section className="about-section">
          <div className="about-content">
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                Motivated Computer Science undergraduate with a strong academic
                record and consistent top performance. Skilled in Python, data
                analysis, and problem-solving, with a passion for building
                impactful tech solutions.
              </p>
              <h3>Skills</h3>
              <ul>
                <li>
                  <strong>Programming Languages:</strong> C, C++, Python, HTML,
                  CSS, JavaScript
                </li>
                <li>
                  <strong>Libraries/Frameworks:</strong> FastAPI, Flask, Django,
                  React.js, Scikit-learn, Pandas, NumPy
                </li>
                <li>
                  <strong>Tools / Platforms:</strong> Git, GitHub, VS Code,
                  MySQL, Render, Google Gemini API, OmniDimension SDK
                </li>
                <li>
                  <strong>Data Visualization:</strong> Matplotlib, Seaborn,
                  Plotly, Streamlit
                </li>
                <li>
                  <strong>Others:</strong> REST APIs, JWT/OAuth2 Authentication,
                  Document Parsing, FAISS, Uvicorn
                </li>
              </ul>
            </div>
            <div className="about-img">
              <div className="avatar-circle">
                <img src="/images/about.png" alt="About Riya" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ====== PROJECTS PAGE ====== */}
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
                score={<span>{p.desc}</span>}
                github={p.github}
              />
            ))}
          </div>
        </section>
      )}

      {/* ====== EDUCATION PAGE ====== */}
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
              />
            ))}
          </div>
        </section>
      )}

      <footer>© {new Date().getFullYear()} Riya Saraf — Built with ❤️</footer>
    </div>
  );
}
