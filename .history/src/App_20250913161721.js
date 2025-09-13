import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import "./styles.css";
import riyaPhoto from "./public/images/riya-photo.png";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  const projects = [
    {
      title: "Leave Management System",
      img: "/images/leave.png",
      tech: "React.js, FastAPI, PostgreSQL, JWT",
      desc: "Full-stack app for managing employee leave requests with secure authentication.",
      github: "https://github.com/riyaaaa19/leave-management-system",
      live: "https://leave-management-system-cltb.onrender.com/",
    },
    {
      title: "Genomic Analysis Web Application",
      img: "/images/genomics.png",
      tech: "Django, Scikit-learn, Pandas",
      desc: "ML-powered genomic analysis with model selection and visualizations.",
      github: "https://github.com/riyaaaa19/genomic-analysis-django",
    },
    {
      title: "CyberSaarthi – Phishing Detection",
      img: "/images/cyber.png",
      tech: "FastAPI, React.js, SQLite",
      desc: "Phishing & invoice fraud detection with rule-based and ML approaches.",
      github: "https://github.com/riyaaaa19/CyberSaarthi",
    },
  ];

  return (
    <div className="portfolio">
      {/* HEADER */}
      <header className="header">
        <h1 className="logo">Riya Saraf</h1>
        <nav>
          {["home", "about", "projects", "contact"].map((page) => (
            <button
              key={page}
              className={activePage === page ? "active" : ""}
              onClick={() => setActivePage(page)}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      {/* HOME */}
      {activePage === "home" && (
        <section className="hero">
          <div className="hero-text">
            <h2>Creative Developer Portfolio</h2>
            <p>
              Full-Stack Developer & Data Science Enthusiast passionate about building modern,
              impactful web solutions.
            </p>
          </div>
        </section>
      )}

      {/* ABOUT */}
      {activePage === "about" && (
        <section className="about">
          <div className="about-card">
            <img src={riyaPhoto} alt="Riya Saraf" className="about-photo" />
            <div>
              <h2>About Me</h2>
              <p>
                Hi, I’m Riya Saraf — a Computer Science undergrad specializing in Data Science and
                Full-Stack Development. Skilled in Python, React, Django, and Machine Learning,
                I love crafting beautiful web apps and exploring AI/ML solutions.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* PROJECTS */}
      {activePage === "projects" && (
        <section className="projects">
          <h2>My Projects</h2>
          <div className="project-grid">
            {projects.map((p, i) => (
              <div key={i} className="project-card">
                <img src={p.img} alt={p.title} />
                <h3>{p.title}</h3>
                <p className="tech">{p.tech}</p>
                <p>{p.desc}</p>
                <div className="buttons">
                  <a href={p.github} target="_blank" rel="noreferrer" className="btn">
                    GitHub
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="btn">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CONTACT */}
      {activePage === "contact" && (
        <section className="contact">
          <h2>Let’s Work Together!</h2>
          <p>Email: <a href="mailto:riyasaraf19@gmail.com">riyasaraf19@gmail.com</a></p>
          <div className="social-icons">
            <a href="https://linkedin.com/in/riya-saraf-9223a9257" target="_blank" rel="noreferrer">
              <Linkedin size={18}/> LinkedIn
            </a>
            <a href="https://github.com/riyaaaa19" target="_blank" rel="noreferrer">
              <Github size={18}/> GitHub
            </a>
            <a href="mailto:riyasaraf19@gmail.com">
              <Mail size={18}/> Email
            </a>
          </div>
        </section>
      )}

      <footer>© {new Date().getFullYear()} Riya Saraf — Built with ❤️</footer>
    </div>
  );
}
