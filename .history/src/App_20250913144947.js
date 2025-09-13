import React, { useState } from "react";
import TimelineCard from "./components/TimelineCard";
import { Mail, Phone, Github, Linkedin, Award, GraduationCap } from "lucide-react";
import "./styles.css";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  const projects = [
    { title: "Leave Management System", tech: "React.js, FastAPI, Bootstrap5, PostgreSQL, JWT", desc: "Full-stack app for managing employee leave requests with role-based access and secure JWT authentication.", github: "https://github.com/riyaaaa19/leave-management-system", live: "https://leave-management-system-cltb.onrender.com/", img: "/assets/images/project1.jpg" },
    { title: "Genomic Analysis Web App", tech: "Python, Django, ML", desc: "Automated genomic data analysis with ML.", github: "https://github.com/riyaaaa19/genomic-analysis-django", live: "#", img: "/assets/images/project2.jpg" },
    { title: "CyberSaarthi", tech: "FastAPI, React.js, SQLite", desc: "Phishing & invoice fraud detection.", github: "https://github.com/riyaaaa19/CyberSaarthi", live: "#", img: "/assets/images/project3.jpg" }
  ];

  const skills = [
    { name: "Python", icon: "/assets/images/python.png" },
    { name: "C++", icon: "/assets/images/cpp.png" },
    { name: "JavaScript", icon: "/assets/images/js.png" },
    { name: "React.js", icon: "/assets/images/react.png" },
    { name: "FastAPI", icon: "/assets/images/fastapi.png" },
  ];

  const education = [
    { school: "BADERIA GLOBAL INSTITUTE", degree: "B.Tech CSE", year: "2022-2026", score: "CGPA: 8.28" },
    { school: "Nachiketa Higher Secondary", degree: "Class 12th • PCM", year: "2022", score: "73.4%" }
  ];

  return (
    <div>
      <header>
        <h1>Riya Saraf</h1>
        <nav>
          {['home','projects','skills','education','contact'].map(page => (
            <button key={page} className={activePage===page ? "active" : ""} onClick={()=>setActivePage(page)}>
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      {activePage === "home" && (
        <section style={{display:'flex', flexWrap:'wrap', gap:'20px', alignItems:'center'}}>
          <div style={{flex:1, minWidth:'300px'}}>
            <h2>Hi — I’m Riya 👋</h2>
            <p style={{color:'#ff4da6', fontWeight:'bold'}}>Full-Stack Developer | Data Science Enthusiast</p>
            <p>Motivated CS undergraduate with strong academic record and passion for ML & web development.</p>
            <div style={{display:'flex', gap:'10px', marginTop:'10px'}}>
              <button className="cta" onClick={()=>setActivePage("projects")}>View Projects</button>
            </div>
            <div className="social-icons" style={{marginTop:'10px'}}>
              <a href="https://linkedin.com/in/riya-saraf-9223a9257" target="_blank" rel="noreferrer"><Linkedin size={20}/></a>
              <a href="https://github.com/riyaaaa19" target="_blank" rel="noreferrer"><Github size={20}/></a>
              <a href="mailto:riyasaraf19@gmail.com"><Mail size={20}/></a>
              <a href="tel:09201526142"><Phone size={20}/></a>
            </div>
          </div>
          <div style={{flex:1, minWidth:'300px'}}>
            <img src="/assets/images/profile.jpg" alt="Profile" style={{width:'100%', borderRadius:'15px'}}/>
          </div>
        </section>
      )}

      {activePage === "projects" && (
        <section>
          <h2>Projects</h2>
          <div style={{display:'flex', flexWrap:'wrap', gap:'20px'}}>
            {projects.map(p=>(
              <div key={p.title} style={{flex:'1 1 300px', borderRadius:'15px', boxShadow:'0 5px 20px rgba(0,0,0,0.1)', overflow:'hidden'}}>
                <img src={p.img} alt={p.title} style={{width:'100%', height:'150px', objectFit:'cover'}}/>
                <div style={{padding:'10px'}}>
                  <h4>{p.title}</h4>
                  <p style={{fontSize:'12px', color:'#555'}}>{p.tech}</p>
                  <p>{p.desc}</p>
                  <div style={{marginTop:'5px'}}>
                    <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                    {p.live !== "#" && <a href={p.live} target="_blank" rel="noreferrer" style={{marginLeft:'10px'}}>Live Demo</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {activePage === "skills" && (
        <section>
          <h2>Skills</h2>
          <div style={{display:'flex', flexWrap:'wrap', gap:'15px'}}>
            {skills.map(s=>(
              <div key={s.name} style={{display:'flex', alignItems:'center', padding:'10px', borderRadius:'10px', background:'#ffe6f0', gap:'10px'}}>
                <img src={s.icon} alt={s.name} style={{width:'30px', height:'30px'}}/>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {activePage === "education" && (
        <section>
          <h2>Education</h2>
          {education.map(e=>(
            <TimelineCard key={e.school} icon={<GraduationCap size={16}/>} title={e.school} subtitle={e.degree} year={e.year} score={e.score}/>
          ))}
        </section>
      )}

      {activePage === "contact" && (
        <section>
          <h2>Contact</h2>
          <p>Email: riyasaraf19@gmail.com</p>
          <p>Phone: 09201526142</p>
        </section>
      )}
    </div>
  );
}
