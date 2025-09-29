import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Download, Code, Database, Server, Brain } from 'lucide-react';
import { TypingAnimation } from './components/TypingAnimation';
import { SkillBar } from './components/SkillBar';
import { InteractiveTimeline } from './components/InteractiveTimeline';
import { ProjectCard } from './components/ProjectCard';

function App() {
  const typingTexts = [
    "Backend Developer",
    "System Optimizer", 
    "Automation Engineer",
    "Full Stack Developer",
    "ML Enthusiast"
  ];

  const skillsData = [
    { skill: "Python", level: 95, color: "bg-blue-500" },
    { skill: "JavaScript/Node.js", level: 88, color: "bg-yellow-500" },
    { skill: "System Optimization", level: 92, color: "bg-green-500" },
    { skill: "Database Management", level: 85, color: "bg-purple-500" },
    { skill: "Machine Learning", level: 80, color: "bg-red-500" },
    { skill: "AWS/Cloud", level: 75, color: "bg-orange-500" }
  ];

  const timelineData = [
    {
      id: "ucf-gsa",
      title: "Graduate Student Assistant",
      company: "Institute of Simulation and Technology - UCF",
      period: "Jul 2025 - Present",
      description: [
        "Delivered Tier 1 helpdesk support to staff and faculty, resolving hardware, software, and network issues",
        "Imaged and deployed Microsoft Windows 10/11 devices using Microsoft Endpoint Configuration Manager (MECM/SCCM)",
        "Managed IT inventory and lifecycle asset management, including deprovisioning and surplus of end-of-life equipment"
      ]
    },
    {
      id: "one-convergence",
      title: "Software Engineer Intern",
      company: "One Convergence",
      period: "Apr 2023 - Oct 2023",
      description: [
        "Machine Learning: Integrated Weaviate vector database for RAG potential with LLMs, enabling advanced search capabilities to 75%",
        "Automation: Developed Live/Dead Link Checker script, streamlining workflow for 7 developers",
        "Full Stack: Enhanced Contributions Section and Creator Tag functionality with 86% efficiency improvement",
        "System Optimization: Optimized 10,000+ authors' attributes and mitigated race conditions"
      ],
      achievements: "🏆 Promoted to Team Lead for a group of 5 interns for delivering impactful results"
    },
    {
      id: "forage-ai",
      title: "Python Developer Intern",
      company: "Forage Ai",
      period: "May 2022 - Oct 2022",
      description: [
        "Web Scraping: Built web scraper with 95% accuracy rate, enhancing data collection efficiency by 40%",
        "Collaboration: Resolved 20+ technical issues with Manual/Research teams",
        "Monitoring: Maintained and examined over 100,000 URL Checker outputs"
      ]
    }
  ];

  const projectsData = [
    {
      title: "SafeURL",
      description: "URL Safety Checker",
      fullDescription: "Comprehensive tool for evaluating URL safety by integrating HTTPS verification, SSL/TLS certificate validation, geolocation analysis, and reputation scoring using Safe Browsing API. Simplified complex cybersecurity analyses into actionable insights for both technical and non-technical users.",
      technologies: ["Python", "Flask", "Safe Browsing API", "SSL/TLS", "Geolocation", "Security Analysis"]
    },
    {
      title: "ProfessorVRX",
      description: "Interactive Educational Platform",
      fullDescription: "Developed an interactive Flask-based web app supporting 5+ languages, using Google Gemini API for real-time explanations and Google Cloud TTS API for multilingual audio output, reducing content delivery time by 60%. Features include real-time language translation and voice synthesis.",
      technologies: ["Flask", "Google Gemini API", "Google Cloud TTS", "Multi-language Support", "Real-time Processing"]
    },
    {
      title: "Yield Curve Spread Prediction",
      description: "Economic Analysis Tool",
      fullDescription: "Built an XGBoost regression model to forecast the U.S. 10Y-2Y Treasury yield spread using FRED API macroeconomic data, enabling early detection of potential economic recessions. Implemented feature engineering and time series analysis for improved prediction accuracy.",
      technologies: ["XGBoost", "FRED API", "Time Series Analysis", "Economic Modeling", "Python", "Pandas"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Varun Prasad Muchanapally</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-800 transition-colors">About</a>
              <a href="#education" className="text-gray-600 hover:text-blue-800 transition-colors">Education</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-800 transition-colors">Skills</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-800 transition-colors">Experience</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-800 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-800 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-6">Varun Prasad Muchanapally</h2>
            <div className="text-2xl text-blue-100 mb-8 h-8">
              <TypingAnimation texts={typingTexts} />
            </div>
            <p className="text-lg text-blue-200 mb-8 max-w-3xl mx-auto">
              Experienced in system optimization, automation solutions, and leading teams to deliver impactful results
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Orlando, FL</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+1 (407) 756-4158</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>va336192@ucf.edu</span>
              </div>
            </div>
            <div className="mt-8">
              <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 mx-auto">
                <Download className="w-5 h-5" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Software engineer with a focus on backend development, experienced in system optimization and automation solutions. 
              Led a team of interns to enhance system stability and streamline workflows, achieving significant efficiency improvements. 
              Skilled in integrating databases and optimizing backend processes, ready to contribute to innovative backend projects.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Master of Science, Computer Science</h4>
              <p className="text-blue-800 font-medium mb-2">University of Central Florida</p>
              <p className="text-gray-600 mb-2">Orlando, Florida</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Jun 2026</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">GPA: 3.8/4.0</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Bachelor of Technology, Computer Science</h4>
              <p className="text-blue-800 font-medium mb-2">BV Raju Institute of Technology</p>
              <p className="text-gray-600 mb-2">Telangana, India</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">May 2024</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">GPA: 8.05/10.0</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h3>
          
          {/* Skill Bars */}
          <div className="mb-16">
            <h4 className="text-xl font-semibold text-gray-900 mb-8 text-center">Proficiency Levels</h4>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {skillsData.map((skill) => (
                <SkillBar key={skill.skill} {...skill} />
              ))}
            </div>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
                <h4 className="font-semibold text-gray-900">Interests & Domain</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Full Stack Development', 'Data Analysis', 'Machine Learning', 'NLP', 'Deep Learning'].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors cursor-default">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-green-600" />
                <h4 className="font-semibold text-gray-900">Languages & Frameworks</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C++', 'JavaScript', 'Node.js', 'Express.js', 'Flask', 'HTML', 'CSS', 'SQL', 'Git'].map((skill) => (
                  <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm hover:bg-green-200 transition-colors cursor-default">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-purple-600" />
                <h4 className="font-semibold text-gray-900">Databases & Libraries</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['MySQL', 'MongoDB', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'SpaCy', 'PyTorch', 'XGBoost'].map((skill) => (
                  <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm hover:bg-purple-200 transition-colors cursor-default">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-6 h-6 text-orange-600" />
                <h4 className="font-semibold text-gray-900">Tools & Infrastructure</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Docker', 'Postman', 'Tableau', 'REST API'].map((skill) => (
                  <span key={skill} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm hover:bg-orange-200 transition-colors cursor-default">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section with Interactive Timeline */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Work Experience</h3>
          <div className="max-w-4xl mx-auto">
            <InteractiveTimeline items={timelineData} />
          </div>
        </div>
      </section>

      {/* Projects Section with Flip Cards */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Academic Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Authors Optimized</div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Scraping Accuracy</div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">86%</div>
              <div className="text-blue-100">Efficiency Improvement</div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Team Members Led</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center">Get In Touch</h3>
          <div className="text-center">
            <p className="text-gray-300 mb-8 text-lg">
              Let's connect and explore opportunities to work together on innovative projects.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <a href="mailto:va336192@ucf.edu" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <div className="p-3 bg-gray-800 rounded-full group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <span>va336192@ucf.edu</span>
              </a>
              <a href="tel:+14077564158" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <div className="p-3 bg-gray-800 rounded-full group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <span>+1 (407) 756-4158</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2025 Varun Prasad Muchanapally. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;