import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Code } from 'lucide-react';

const TimelineCard = ({ title, subtitle, year, score, img, icon, github, live, type }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-pink-400 transition-all duration-300 transform hover:scale-105">
      <div className="flex items-center gap-4">
        {icon && <div className="text-4xl text-pink-500">{icon}</div>}
        {img && (
          <div className="flex-shrink-0">
            <img 
              src={img} 
              alt={title} 
              className="w-16 h-16 rounded-full object-cover shadow-sm border-2 border-pink-300" 
              onError={(e) => { e.target.src = 'https://placehold.co/64x64/E0BBE4/ffffff?text=IMG'; }}
            />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
        </div>
      </div>
      {(year || score || github || live) && (
        <div className="mt-4 border-t pt-4 border-gray-200">
          {year && <p className="text-sm font-medium text-gray-500">{year}</p>}
          {score && <p className="mt-1 text-base text-gray-700">{score}</p>}
          {(github || live) && (
            <div className="mt-4 flex gap-4">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-pink-500 hover:text-pink-600 transition-colors font-medium">
                  <Code size={18} /> Code
                </a>
              )}
              {live && (
                <a href={live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-pink-500 hover:text-pink-600 transition-colors font-medium">
                  <ExternalLink size={18} /> Live
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [activePage, setActivePage] = useState("home");
  const [typingText, setTypingText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Web Development | Data Science | AI/ML";

  useEffect(() => {
    let timeout;
    if (!isTypingComplete) {
      timeout = setTimeout(() => {
        setTypingText(fullText.substring(0, typingText.length + 1));
      }, 70); // Typing speed
      if (typingText.length === fullText.length) {
        setIsTypingComplete(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [typingText, isTypingComplete, fullText]);

  const projects = [
    {
      title: "Leave Management System",
      tech: "React.js, FastAPI, PostgreSQL, JWT",
      desc: "Full-stack app for managing employee leave requests with role-based access and JWT authentication.",
      github: "https://github.com/riyaaaa19/leave-management-system",
      live: "https://leave-management-system-cltb.onrender.com/",
      img: "https://placehold.co/640x360/E0BBE4/ffffff?text=Leave+Management",
    },
    {
      title: "Genomic Analysis Web Application",
      tech: "Python, Django, Scikit-learn, Pandas",
      desc: "Django app for genomic data analysis with ML model selection, preprocessing and visualizations.",
      github: "https://github.com/riyaaaa19/genomic-analysis-django",
      img: "https://placehold.co/640x360/B2D8D8/ffffff?text=Genomic+Analysis",
    },
    {
      title: "CyberSaarthi – Phishing & Invoice Fraud Detection",
      tech: "FastAPI, React.js, SQLite",
      desc: "ML + rule-based backend for phishing and invoice fraud detection with document parsing and structured reports.",
      github: "https://github.com/riyaaaa19/CyberSaarthi",
      img: "https://placehold.co/640x360/FFD9C0/ffffff?text=CyberSaarthi",
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
    { title: "PCAP: Programming Essentials in Python", img: "https://placehold.co/640x480/A0D2DB/ffffff?text=PCAP" },
    { title: "Introduction to Data Science — Cisco", img: "https://placehold.co/640x480/81C784/ffffff?text=Cisco" },
    { title: "Accenture Data Analytics Simulation", img: "https://placehold.co/640x480/FFAB91/ffffff?text=Accenture" },
    { title: "Global Entrepreneur Summit — IIT Kharagpur", img: "https://placehold.co/640x480/957DAD/ffffff?text=IITKGP" },
  ];

  const awards = [
    { title: "Branch Topper — 2023, 2024, 2025", img: "https://placehold.co/640x480/B19CD9/ffffff?text=Branch+Topper" },
    { title: "Best Girls Team Award — Hack SRIT 2025", img: "https://placehold.co/640x480/C6F6D5/ffffff?text=Hack+SRIT" },
    { title: "1st Runner-Up — Ecopreneur Hackathon", img: "https://placehold.co/640x480/F4D03F/ffffff?text=Hackathon" },
  ];

  const sections = {
    home: (
      <section className="min-h-screen flex items-center justify-center py-20 px-4 md:px-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="particle-bg">
            {[...Array(5)].map((_, i) => <span key={i} className="absolute w-2 h-2 rounded-full bg-pink-500 opacity-50 animate-float" style={{ top: `${(i * 15) + 20}%`, left: `${(i * 15) + 15}%`, animationDuration: `${12 + i * 2}s` }}></span>)}
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 z-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-extrabold text-pink-500 mb-2 animate-fade-in-up">
              Hi There, I'm <span className="bg-gradient-to-r from-pink-500 to-pink-300 text-transparent bg-clip-text">Riya Saraf</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 flex items-center justify-center md:justify-start">
              I Am Into{' '}
              <span className="typing ml-2 border-r-2 border-pink-500 whitespace-nowrap overflow-hidden transition-all duration-75">
                {typingText}
              </span>
            </h3>
            <p className="max-w-md mx-auto md:mx-0 text-base md:text-lg text-gray-600 leading-relaxed mb-8 animate-fade-in-up-2">
              Motivated Computer Science undergraduate skilled in Python, full-stack development, and ML/AI. Passionate about building impactful solutions and contributing to open-source projects.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mb-8 animate-fade-in-up-3">
              <button onClick={() => setActivePage('projects')} className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-pink-500 to-pink-300 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                View Projects
              </button>
              <button onClick={() => setActivePage('contact')} className="px-6 py-3 rounded-full font-semibold text-pink-500 border-2 border-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                Contact Me
              </button>
            </div>
            <div className="flex justify-center md:justify-start gap-4 animate-fade-in-up-4">
              <a href="https://linkedin.com/in/riya-saraf-9223a9257" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#0077b5] flex items-center justify-center text-white text-xl hover:scale-110 transition-transform duration-300">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/riyaaaa19" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white text-xl hover:scale-110 transition-transform duration-300">
                <Github size={24} />
              </a>
              <a href="mailto:riyasaraf19@gmail.com" className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white text-xl hover:scale-110 transition-transform duration-300">
                <Mail size={24} />
              </a>
              <a href="https://leetcode.com/u/riyaaa19/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-bold hover:scale-110 transition-transform duration-300">
                LC
              </a>
              <a href="https://www.hackerrank.com/profile/riyasaraf19" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold hover:scale-110 transition-transform duration-300">
                HR
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center p-4">
            <div className="w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full bg-yellow-300 shadow-xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
              <img src="https://placehold.co/400x400/FFC0CB/000000?text=Riya+Saraf" alt="Riya Saraf" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </div>
      </section>
    ),
    projects: (
      <section className="bg-white py-20 px-4 md:px-20 min-h-screen">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-500 text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <TimelineCard
              key={i}
              title={p.title}
              subtitle={p.tech}
              img={p.img}
              score={<span className="text-gray-500">{p.desc}</span>}
              github={p.github}
              live={p.live}
              type="project"
            />
          ))}
        </div>
      </section>
    ),
    education: (
      <section className="bg-white py-20 px-4 md:px-20 min-h-screen">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-500 text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
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
        </div>
      </section>
    ),
    certificates: (
      <section className="bg-white py-20 px-4 md:px-20 min-h-screen">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-500 text-center mb-12">Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((c, i) => (
            <TimelineCard key={i} title={c.title} img={c.img} type="certificate" />
          ))}
        </div>
      </section>
    ),
    awards: (
      <section className="bg-white py-20 px-4 md:px-20 min-h-screen">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-500 text-center mb-12">Awards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {awards.map((a, i) => (
            <TimelineCard key={i} title={a.title} img={a.img} type="award" />
          ))}
        </div>
      </section>
    ),
    contact: (
      <section className="bg-white py-20 px-4 md:px-20 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-500 text-center mb-8">Contact</h2>
        <div className="text-lg text-gray-700 text-center space-y-4">
          <p>
            Email:{" "}
            <a href="mailto:riyasaraf19@gmail.com" className="text-pink-500 hover:underline transition-colors">
              riyasaraf19@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a href="https://linkedin.com/in/riya-saraf-9223a9257" target="_blank" rel="noreferrer" className="text-pink-500 hover:underline transition-colors">
              linkedin.com/in/riya-saraf
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/riyaaaa19" target="_blank" rel="noreferrer" className="text-pink-500 hover:underline transition-colors">
              github.com/riyaaaa19
            </a>
          </p>
        </div>
      </section>
    ),
  };

  return (
    <div className="bg-gray-50 font-sans text-gray-900">
      <style>{`
        body {
          margin: 0;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          scroll-behavior: smooth;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeIn 1s ease-in-out;
        }
        .animate-fade-in-up-2 {
          animation: fadeIn 1s ease-in-out 0.2s forwards;
          opacity: 0;
        }
        .animate-fade-in-up-3 {
          animation: fadeIn 1s ease-in-out 0.4s forwards;
          opacity: 0;
        }
        .animate-fade-in-up-4 {
          animation: fadeIn 1s ease-in-out 0.6s forwards;
          opacity: 0;
        }
        @keyframes float {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-40px) scale(1.2); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.6; }
        }
      `}</style>
      <header className="fixed top-0 left-0 w-full bg-pink-500 py-4 px-8 md:px-20 z-50 shadow-lg flex justify-between items-center animate-slide-down">
        <h1 className="text-2xl md:text-3xl font-bold text-white transition-transform duration-300 hover:scale-105">Riya Saraf</h1>
        <nav className="hidden sm:flex space-x-6 md:space-x-10">
          {["home", "projects", "education", "certificates", "awards", "contact"].map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`text-white text-sm md:text-base font-medium uppercase tracking-wide hover:text-gray-200 transition-colors duration-200 relative pb-1
                ${activePage === page ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white' : ''}
              `}
            >
              {page}
            </button>
          ))}
        </nav>
      </header>

      <main className="pt-20">
        {sections[activePage]}
      </main>

      <footer className="bg-gray-100 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Riya Saraf — Built with ❤️
      </footer>
    </div>
  );
}

export default App;
