import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin } from 'lucide-react';

function App() {
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
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Software Engineer specializing in backend development with expertise in system optimization, 
              automation solutions, and full-stack development
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-4">Interests & Domain</h4>
              <div className="flex flex-wrap gap-2">
                {['Full Stack Development', 'Data Analysis', 'Machine Learning', 'NLP', 'Deep Learning'].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-4">Languages & Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C++', 'JavaScript', 'Node.js', 'Express.js', 'Flask', 'HTML', 'CSS', 'SQL', 'Git'].map((skill) => (
                  <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-4">Databases & Libraries</h4>
              <div className="flex flex-wrap gap-2">
                {['MySQL', 'MongoDB', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'SpaCy', 'PyTorch', 'XGBoost'].map((skill) => (
                  <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-4">Tools & Infrastructure</h4>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Docker', 'Postman', 'Tableau', 'REST API'].map((skill) => (
                  <span key={skill} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Work Experience</h3>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Graduate Student Assistant</h4>
                  <p className="text-blue-800 font-medium">Institute of Simulation and Technology - UCF</p>
                </div>
                <span className="text-gray-500 font-medium">Jul 2025 - Present</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Delivered Tier 1 helpdesk support to staff and faculty, resolving hardware, software, and network issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Imaged and deployed Microsoft Windows 10/11 devices using Microsoft Endpoint Configuration Manager (MECM/SCCM)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Managed IT inventory and lifecycle asset management, including deprovisioning and surplus of end-of-life equipment</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Software Engineer Intern</h4>
                  <p className="text-blue-800 font-medium">One Convergence</p>
                </div>
                <span className="text-gray-500 font-medium">Apr 2023 - Oct 2023</span>
              </div>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Machine Learning:</strong> Integrated Weaviate vector database for RAG potential with LLMs, enabling advanced search capabilities to 75%</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Automation:</strong> Developed Live/Dead Link Checker script, streamlining workflow for 7 developers</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Full Stack:</strong> Enhanced Contributions Section and Creator Tag functionality with 86% efficiency improvement</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>System Optimization:</strong> Optimized 10,000+ authors' attributes and mitigated race conditions</span>
                </li>
              </ul>
              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <p className="text-green-800 font-medium">🏆 Promoted to Team Lead for a group of 5 interns for delivering impactful results</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Python Developer Intern</h4>
                  <p className="text-blue-800 font-medium">Forage Ai</p>
                </div>
                <span className="text-gray-500 font-medium">May 2022 - Oct 2022</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Web Scraping:</strong> Built web scraper with 95% accuracy rate, enhancing data collection efficiency by 40%</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Collaboration:</strong> Resolved 20+ technical issues with Manual/Research teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Monitoring:</strong> Maintained and examined over 100,000 URL Checker outputs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Academic Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-semibold text-gray-900">SafeURL</h4>
                <ExternalLink className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-gray-600 mb-4">URL Safety Checker</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Comprehensive tool for evaluating URL safety by integrating HTTPS verification, SSL/TLS certificate validation, 
                geolocation analysis, and reputation scoring using Safe Browsing API.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-semibold text-gray-900">ProfessorVRX</h4>
                <ExternalLink className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-gray-600 mb-4">Interactive Educational Platform</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Flask-based web app supporting 5+ languages, using Google Gemini API for real-time explanations and 
                Google Cloud TTS API for multilingual audio output, reducing content delivery time by 60%.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-semibold text-gray-900">Yield Curve Spread Prediction</h4>
                <ExternalLink className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-gray-600 mb-4">Economic Analysis Tool</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Built XGBoost regression model to forecast U.S. 10Y-2Y Treasury yield spread using FRED API macroeconomic data, 
                enabling early detection of potential economic recessions.
              </p>
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
              <a href="mailto:va336192@ucf.edu" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
                <span>va336192@ucf.edu</span>
              </a>
              <a href="tel:+14077564158" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
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