import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import TimelineCard from "./TimelineCard"; // adjust path if needed

export default function RiyaSarafPortfolio() {
  const [activePage, setActivePage] = useState("home");

  // === Data ===
  const projects = [
    {
      title: "Leave Management System",
      tech: "React.js, FastAPI, PostgreSQL, JWT",
      desc: "Full-stack app for managing employee leave requests with role-based access and JWT authentication.",
      github: "https://github.com/riyaaaa19/leave-management-system",
      live: "https://leave-management-system-cltb.onrender.com/",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Genomic Analysis Web Application",
      tech: "Python, Django, Scikit-learn, Pandas",
      desc: "Django app for genomic data analysis with ML model selection, preprocessing and visualizations.",
      github: "https://github.com/riyaaaa19/genomic-analysis-django",
      img: "https://images.unsplash.com/photo-1581093588401-22db3c6fda05?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "CyberSaarthi – Phishing & Invoice Fraud Detection",
      tech: "FastAPI, React.js, SQLite",
      desc: "ML + rule-based backend for phishing and invoice fraud detection with document parsing and structured reports.",
      github: "https://github.com/riyaaaa19/CyberSaarthi",
      img: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?auto=format&fit=crop&w=600&q=80",
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
    {
      title: "PCAP: Programming Essentials in Python",
      img: "https://via.placeholder.com/400x250?text=PCAP",
    },
    {
      title: "Introduction to Data Science — Cisco",
      img: "https://via.placeholder.com/400x250?text=Cisco+DS",
    },
    {
      title: "Accenture Data Analytics Simulation",
      img: "https://via.placeholder.com/400x250?text=Accenture",
    },
    {
      title: "Global Entrepreneur Summit — IIT Kharagpur",
      img: "https://via.placeholder.com/400x250?text=IIT+KGP",
    },
  ];

  const awards = [
    {
      title: "Branch Topper — 2023, 2024, 2025",
      img: "https://via.placeholder.com/400x250?text=Topper",
    },
    {
      title: "Best Girls Team Award — Hack SRIT 2025",
      img: "https://via.placeholder.com/400x250?text=Hack+SRIT",
    },
    {
      title: "1st Runner-Up — Ecopreneur Hackathon",
      img: "https://via.placeholder.com/400x250?text=Ecopreneur",
    },
  ];

  return (
    <div>
      {/* Header */}
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

      {/* Home */}
      {activePage === "home" && (
        <section className="hero">
          <div className="hero-text">
            <h2>Full-Stack Developer & Data Science Enthusiast</h2>
            <h3>Motivated Computer Science Undergraduate</h3>
            <p>
              Skilled in Python, full-stack development, and AI/ML. Passionate about building impactful
              solutions and contributing to open-source projects.
            </p>
            <div style={{ marginTop: "20px" }}>
              <button className="cta" onClick={() => setActivePage("projects")}>
                View Projects
              </button>{" "}
              <button className="outline" onClick={() => setActivePage("contact")}>
                Contact Me
              </button>
            </div>
            <div className="social-icons">
              <a href="https://linkedin.com/in/riya-saraf-9223a9257" target="_blank" rel="noreferrer">
                <Linkedin size={16} style={{ marginRight: "6px" }} /> LinkedIn
              </a>
              <a href="https://github.com/riyaaaa19" target="_blank" rel="noreferrer">
                <Github size={16} style={{ marginRight: "6px" }} /> GitHub
              </a>
              <a href="mailto:riyasaraf19@gmail.com">
                <Mail size={16} style={{ marginRight: "6px" }} /> Email
              </a>
            </div>
          </div>
          <div className="hero-img">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
              alt="Coding"
            />
          </div>
        </section>
      )}

      {/* Projects */}
      {activePage === "projects" && (
        <section>
          <h2>Projects</h2>
          {projects.map((p, i) => (
            <TimelineCard
              key={i}
              title={p.title}
              subtitle={p.tech}
              img={p.img}
              score={<span style={{ color: "#555" }}>{p.desc}</span>}
              icon="🚀"
              type="project"
            />
          ))}
        </section>
      )}

      {/* Education */}
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

      {/* Certificates */}
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

      {/* Awards */}
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

      {/* Contact */}
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

      {/* Footer */}
      <footer>© {new Date().getFullYear()} Riya Saraf — Built with ❤️</footer>
    </div>
  );
}
