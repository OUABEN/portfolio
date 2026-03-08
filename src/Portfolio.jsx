import React, { useState, useEffect } from 'react';

import {
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Download,
  ExternalLink,
  Code,
  Database,
  Server,
  Wrench,
  Smartphone,
  BarChart3,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Award,
  Clock,
  Users,
  Zap,
  CheckCircle
} from "lucide-react";

import profileImg from "./assets/image/cv.avif";

import formation1 from "./assets/image/F4.png";
import formation2 from "./assets/image/F5.png";
import formation3 from "./assets/image/F2.png";
import formation4 from "./assets/image/F3.png";
import formation5 from "./assets/image/F1.png";
import formation6 from "./assets/image/F1.png";

const Portfolio = () => {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedFormation, setSelectedFormation] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'formation', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setFormStatus('Message sent successfully! 🎉');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }
  };

  // ===== البيانات المحدّثة =====

  const formations = [
    {
      id: 1,
      title: 'Claude Code in Action',
      issuer: 'Anthropic',
      date: 'Mars 2026',
      image: formation1,
      skills: ['Claude Code', 'AI Development', 'Agentic Coding']
    },
    {
      id: 2,
      title: 'Développer des Applications IA – C#/ASP.NET',
      issuer: 'Orange Digital Center',
      date: 'Oct. 2025',
      image: formation2,
      skills: ['C#', 'ASP.NET', 'AI Applications']
    },
    {
      id: 3,
      title: 'PostgreSQL for Developers',
      issuer: 'AWS Training & Certification',
      date: 'Oct. 2025',
      image: formation3,
      skills: ['PostgreSQL', 'SQL', 'Database Design']
    },
    {
      id: 4,
      title: 'Design Power BI Reports',
      issuer: 'Microsoft',
      date: 'Janv. 2026',
      image: formation4,
      skills: ['Power BI', 'Data Visualization', 'Reports']
    },
    {
      id: 5,
      title: 'Big Data',
      issuer: 'IBM',
      date: 'Févr. 2026',
      image: formation5,
      skills: ['Big Data', 'Hadoop', 'Data Analytics']
    },

  ];

const skills = {

  frontend: [
    { name: 'HTML / CSS / JavaScript', level: 90 },
    { name: 'React.js', level: 88 },
    { name: 'Bootstrap / Tailwind CSS', level: 85 },
    { name: 'Angular', level: 70 }
  ],

  backend: [
    { name: 'Laravel / PHP', level: 85 },
    { name: 'Spring Boot / Java', level: 82 },
    { name: 'Node.js', level: 80 },
    { name: 'ASP.NET / C#', level: 75 },
    { name: 'Python / Django', level: 72 },
    { name: 'REST API', level: 75 }
  ],

  mobile: [
    { name: 'Kotlin (Android)', level: 78 },
    { name: 'Flutter', level: 70 },
    { name: 'React Native', level: 72 }
  ],

  database: [
    { name: 'MySQL', level: 88 },
    { name: 'PostgreSQL', level: 82 },
    { name: 'SQL Server', level: 78 },
    { name: 'Room (Android)', level: 75 },
    { name: 'Firebase', level: 70 }
  ],

  devops: [
    { name: 'Git / GitHub', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'CI/CD', level: 72 },
    { name: 'Kubernetes', level: 65 }
  ],

  data: [
    { name: 'Power BI', level: 70 },
    { name: 'Talend / SSAS', level: 75 },
    { name: 'Weka', level: 72 }
  ]

};

  const projects = [
    {
      title: 'CoWorkingSpace',
      description: 'Application complète de gestion d\'espaces de coworking. Back-end sécurisé avec Spring Boot, communication distribuée via RMI, et interface moderne et responsive avec React.js.',
      tech: ['Spring Boot', 'React.js', 'RMI', 'GitHub'],
      image: formation1,
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Application Mobile E-Commerce',
      description: 'Application mobile e-commerce complète avec gestion des produits, panier et commandes. Utilisation de Room pour la base de données locale avec une UI moderne.',
      tech: ['Kotlin', 'Jetpack Compose', 'Room', 'GitHub'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      github: '#',
      live: '#'
    },
    {
      title: 'Gestion Clients & Véhicules',
      description: 'Application web dynamique en MVC pour le suivi des clients, véhicules et opérations associées. Base de données MySQL intégrée avec CodeIgniter.',
      tech: ['CodeIgniter', 'MySQL', 'MVC', 'PHP'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      github: '#',
      live: '#'
    },
    {
      title: 'Gestion Notes Étudiants',
      description: 'Application web personnelle de gestion des notes étudiants avec une interface intuitive et des fonctionnalités de suivi académique.',
      tech: ['Node.js', 'React.js', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      github: '#',
      live: '#'
    },
    {
      title: 'Anime TV App',
      description: 'Application mobile personnelle de streaming et découverte d\'anime avec base de données locale Room et interface utilisateur fluide.',
      tech: ['Kotlin', 'Jetpack Compose', 'Room'],
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&h=400&fit=crop',
      github: '#',
      live: '#'
    },
    {
      title: 'Data Analyse – Ventes & Livraisons',
      description: 'Projet académique d\'analyse de données sur les ventes, livraisons, clients et produits. Pipeline ETL complet avec visualisation Power BI.',
      tech: ['SQL Server', 'Talend', 'SSAS', 'Power BI'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      github: '#',
      live: '#'
    }
  ];

  const experience = [
    {
      year: '2025 – Présent',
      role: 'Master d\'Excellence en Ingénierie Logicielle',
      company: 'Université Ibn Zohr – Agadir',
      description: 'Formation avancée en ingénierie logicielle, architecture des systèmes distribués et développement Full-Stack.',
      achievements: ['Développement de projets Full-Stack complexes']
    },
    {
      year: 'Sept. 2024 – 2025',
      role: 'Licence d\'Excellence en Ingénierie Logicielle',
      company: 'Université Ibn Zohr – Agadir',
      description: 'Formation en développement web et mobile, bases de données, et architecture logicielle.',
      achievements: ['Projets académiques web & mobile', 'Développement avec Laravel, Spring Boot, Kotlin', 'Analyse de données avec Power BI & Talend']
    },
    {
      year: 'Juin 2022 – 2024',
      role: 'DEUG en Sciences Mathématiques et Informatiques (SMI)',
      company: 'Université Ibn Zohr – Agadir',
      description: 'Fondamentaux en mathématiques, algorithmique, programmation et développement logiciel.',
      achievements: ['Bases solides en algorithmique', 'Programmation orientée objet (Java, C)', 'Initiation aux bases de données SQL']
    }
  ];



  const stats = [
    { label: 'Projects Completed', value: '6+', icon: <CheckCircle className="w-6 h-6" /> },
    { label: 'Years of Study', value: '4+', icon: <Clock className="w-6 h-6" /> },
    { label: 'Certifications', value: '5+', icon: <Award className="w-6 h-6" /> },
    { label: 'Technologies', value: '15+', icon: <Zap className="w-6 h-6" /> }
  ];

  // ===== fin des données =====

  const bgClass = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';
  const textClass = theme === 'dark' ? 'text-gray-100' : 'text-gray-900';
  const cardClass = theme === 'dark' ? 'bg-gray-800/50 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm';
  const borderClass = theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200/50';

  const FormationModal = () => {
    if (!selectedFormation) return null;

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
        <div className="relative max-w-4xl max-h-[90vh]">
          <img
            src={selectedFormation.image}
            alt={selectedFormation.title}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
          <button
            onClick={() => setSelectedFormation(null)}
            className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>
          <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm p-4 rounded-lg">
            <h3 className="text-xl font-bold text-white">{selectedFormation.title}</h3>
            <p className="text-gray-300">{selectedFormation.issuer} • {selectedFormation.date}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-500`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg ${theme === 'dark' ? 'bg-gray-900/90' : 'bg-white/90'} border-b ${borderClass} transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              {'<OUABEN />'}
            </div>

            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'formation', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 relative group ${
                    activeSection === item ? 'text-blue-500' : 'hover:text-blue-400'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full ${
                    activeSection === item ? 'w-full' : ''
                  }`} />
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:shadow-lg hover:shadow-purple-500/20' 
                    : 'bg-gradient-to-br from-gray-200 to-gray-300 hover:shadow-lg'
                }`}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                <Download size={18} />
                Resume
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {['home', 'about', 'skills', 'projects', 'formation', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-4 py-3 capitalize rounded-lg transition-all duration-300 ${
                    activeSection === item
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-500 border-l-4 border-blue-500'
                      : 'hover:bg-gray-700/50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center px-4 sm:px-6 pt-24 relative overflow-hidden"
        style={{
          background: theme === 'dark' 
            ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
            : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
          position: 'relative',
          bottom: '20px'
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-all duration-500" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-gray-700/50 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Mohamed OUABEN"
                  className="w-[320px] h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2 animate-bounce-slow">
                <Sparkles size={16} />
                <span className="font-semibold">Available</span>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-5xl sm:text-6xl font-bold mb-3 leading-tight relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                OUABEN Mohamed
              </span>
            </h1>
            
            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              Full-Stack Developer
            </div>

            <p className="text-lg text-gray-400 max-w-xl mb-6 leading-relaxed">
              Étudiant en <span className="text-blue-400 font-semibold">Master d'Excellence en Ingénierie Logicielle</span> à l'Université Ibn Zohr, 
              passionné par la conception de <span className="text-purple-400 font-semibold">solutions web & mobile</span> efficaces et 
              <span className="text-pink-400 font-semibold"> bien structurées</span>.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className={`${cardClass} rounded-xl p-4 text-center border ${borderClass}`}>
                  <div className="flex justify-center mb-2 text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 rounded-full border-2 border-gray-600 text-gray-200 hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-300 hover:-translate-y-1"
              >
                Get In Touch
              </button>
              <button className="group px-5 py-3 rounded-full border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 hover:-translate-y-1">
                <span className="flex items-center gap-2">
                  Download CV
                  <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ChevronDown className="text-gray-400" size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">About Me</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Crafting Digital Excellence</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              With passion for innovation and commitment to quality
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Hello! I'm <span className="text-blue-400">OUABEN Mohamed</span>
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Étudiant en Master d'Excellence en Ingénierie Logicielle à l'Université Ibn Zohr d'Agadir, Maroc. Passionné par le développement web et mobile Full-Stack avec des technologies modernes.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Motivé, curieux et toujours prêt à apprendre, je cherche à mettre mes compétences (Laravel, React, Spring Boot, Kotlin) au service de projets innovants et à saisir de nouvelles opportunités pour évoluer dans le domaine du développement logiciel.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-medium">Freelance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-medium">Remote work</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-medium">Stage / Emploi</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-medium">Projets académiques</span>
                </div>
              </div>
            </div>

            <div className={`${cardClass} rounded-2xl p-8 shadow-xl border ${borderClass}`}>
              <h3 className="text-2xl font-semibold mb-6">Tech Stack Overview</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-transparent">
                  <div className="p-3 rounded-lg bg-blue-500/20">
                    <Code className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Frontend Development</p>
                    <p className="text-sm text-gray-400">
                      React.js, HTML/CSS/JS, Tailwind, Flutter
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-transparent">
                  <div className="p-3 rounded-lg bg-green-500/20">
                    <Server className="text-green-400" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Backend Development</p>
                    <p className="text-sm text-gray-400">
                      Laravel, Spring Boot, Node.js, ASP.NET
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-transparent">
                  <div className="p-3 rounded-lg bg-purple-500/20">
                    <Database className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Database Management</p>
                    <p className="text-sm text-gray-400">
                      MySQL, PostgreSQL, SQL Server, Room
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-transparent">
                  <div className="p-3 rounded-lg bg-orange-500/20">
                    <Wrench className="text-orange-400" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Mobile & Tools</p>
                    <p className="text-sm text-gray-400">
                      Kotlin, Jetpack Compose, Docker, Git/GitHub
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-24 px-4 relative ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100/50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Mastery across the full development stack
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div 
                key={category} 
                className={`${cardClass} rounded-2xl p-8 shadow-xl border ${borderClass} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
              >
                <h3 className="text-xl font-semibold mb-6 capitalize flex items-center gap-3">
                <div className={`p-2 rounded-lg ${
  category === 'frontend' ? 'bg-blue-500/20 text-blue-400' :
  category === 'backend' ? 'bg-green-500/20 text-green-400' :
  category === 'mobile' ? 'bg-purple-500/20 text-purple-400' :
  category === 'devops' ? 'bg-indigo-500/20 text-indigo-400' :
  category === 'database' ? 'bg-pink-500/20 text-pink-400' :
  'bg-orange-500/20 text-orange-400'
}`}>
{category === 'frontend' && <Code size={20} />}
{category === 'backend' && <Server size={20} />}
{category === 'database' && <Database size={20} />}
{category === 'mobile' && <Smartphone size={20} />}
{category === 'devops' && <Wrench size={20} />}
{category === 'data' && <BarChart3 size={20} />}
                  </div>
                  {category}
                </h3>
                <div className="space-y-4">
                  {items.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-gray-400 group-hover:text-white transition-colors">
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`h-2 ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-300'} rounded-full overflow-hidden`}>
                        <div
                          className="h-full rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-blue-500/30"
                          style={{ 
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${
                              category === 'frontend' ? '#3b82f6, #8b5cf6' :
                              category === 'backend' ? '#10b981, #3b82f6' :
                              category === 'database' ? '#8b5cf6, #ec4899' :
                              '#f97316, #eab308'
                            })`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Showcasing innovative solutions and cutting-edge implementations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl`} />
                
                <div className={`relative overflow-hidden rounded-2xl ${
                  cardClass
                } border ${borderClass} shadow-xl group-hover:shadow-2xl transition-all duration-500`}>
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.live}
                          className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                    
                    <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-4 py-2 text-sm rounded-full border ${
                            theme === 'dark' 
                              ? 'border-gray-700 bg-gray-800/50 text-gray-300' 
                              : 'border-gray-300 bg-gray-100 text-gray-700'
                          } group-hover:border-blue-500/50 transition-all duration-300`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section id="formation" className={`py-24 px-4 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100/50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
              <Award className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-400">Education & Certifications</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">My Formation</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Continuous learning and professional development through certified courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formations.map((formation) => (
              <div
                key={formation.id}
                className={`group ${cardClass} rounded-2xl overflow-hidden border ${borderClass} shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                onClick={() => setSelectedFormation(formation)}
              >
                <div className="relative h-48 overflow-hidden cursor-pointer">
                  <img
                    src={formation.image}
                    alt={formation.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/90 to-purple-600/90 text-white text-sm font-medium">
                      {formation.date}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors cursor-pointer">
                    {formation.title}
                  </h3>
                  <p className="text-purple-400 font-semibold mb-4">
                    {formation.issuer}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {formation.skills.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 text-xs rounded-full ${
                          theme === 'dark' 
                            ? 'bg-gray-800/70 text-gray-300' 
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 font-medium">
                    View Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400">
              Currently pursuing: <span className="text-blue-400 font-semibold">Master d'Excellence en Ingénierie Logicielle</span>
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className={`py-24 px-4 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100/50'} relative`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Career Journey</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Professional growth and educational milestones
            </p>
          </div>
          
          <div className="relative">
            <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 ${
              theme === 'dark' ? 'bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-pink-500/30' : 'bg-gray-300'
            }`} />
            
            {experience.map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                } group`}
              >
                <div className={`${cardClass} rounded-2xl p-8 shadow-lg ml-8 md:ml-0 border ${borderClass} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 text-sm font-medium">
                      {item.year}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 text-sm font-medium">
                      Éducation
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mt-2 mb-2 group-hover:text-blue-400 transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-lg text-purple-400 font-semibold mb-4">{item.company}</p>
                  <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {item.achievements?.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                        <span className="text-sm text-gray-400">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`absolute left-0 md:left-1/2 top-8 transform md:-translate-x-1/2 w-4 h-4 rounded-full ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                } border-4 border-blue-500 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300`} />
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className={`py-24 px-4 relative ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100/50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let's Connect</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's discuss your project
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Start a <span className="text-blue-400">Project</span>
              </h3>
              <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                Je suis toujours intéressé par de nouveaux projets et opportunités. 
                N'hésitez pas à me contacter pour discuter de votre projet !
              </p>
              
              <div className="space-y-6">
                <a
                  href="mailto:ouaben.mohamed@example.com"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-blue-600/20 group-hover:from-blue-500/30 group-hover:to-blue-600/30">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-gray-400">ouaben.mohamed@example.com</p>
                  </div>
                </a>
                
                <a
                  href="https://github.com/ouaben-mohamed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-r from-gray-500/20 to-gray-600/20 group-hover:from-gray-500/30 group-hover:to-gray-600/30">
                    <Github className="text-gray-400" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm text-gray-400">github.com/ouaben-mohamed</p>
                  </div>
                </a>
                
                <a
                  href="https://linkedin.com/in/mohamed-ouaben"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-blue-700/20 group-hover:from-blue-600/30 group-hover:to-blue-700/30">
                    <Linkedin className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm text-gray-400">linkedin.com/in/mohamed-ouaben</p>
                  </div>
                </a>
              </div>
            </div>

            <div className={`${cardClass} rounded-2xl p-8 shadow-xl border ${borderClass}`}>
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium text-gray-300">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${borderClass} ${
                      theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300`}
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium text-gray-300">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${borderClass} ${
                      theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300`}
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium text-gray-300">Your Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-xl border ${borderClass} ${
                      theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300`}
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300"
                >
                  Send Message
                </button>
                
                {formStatus && (
                  <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
                    <p className="text-center text-green-400 font-medium">{formStatus}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-4 border-t ${borderClass}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                {'<OUABEN />'}
              </div>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                Étudiant passionné en Ingénierie Logicielle – Agadir, Maroc
              </p>
            </div>
            
            <div className="flex gap-6">
              <a 
                href="https://github.com/ouaben-mohamed" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-3 rounded-full border ${borderClass} hover:bg-gray-800/50 hover:scale-110 transition-all duration-300`}
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/mohamed-ouaben" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-3 rounded-full border ${borderClass} hover:bg-gray-800/50 hover:scale-110 transition-all duration-300`}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:ouaben.mohamed@example.com" 
                className={`p-3 rounded-full border ${borderClass} hover:bg-gray-800/50 hover:scale-110 transition-all duration-300`}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className={`mt-8 pt-8 border-t ${borderClass} text-center`}>
            <p className={`${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} OUABEN Mohamed. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      <FormationModal />
    </div>
  );
};

export default Portfolio;