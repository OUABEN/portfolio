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
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  Award,
  Clock,
  Users,
  Zap,
  CheckCircle,
  Search,
  Filter,
  ArrowLeft
} from "lucide-react";

import profileImg from "./assets/image/cv.avif";

import formation1 from "./assets/image/F4.png";
import formation2 from "./assets/image/F5.png";
import formation3 from "./assets/image/F2.png";
import formation4 from "./assets/image/F3.png";
import formation5 from "./assets/image/F1.png";
import formation6 from "./assets/image/F1.png";
import formation7 from "./assets/image/F6.png";

// Project 1 Images
import Mobile1 from "./assets/image/Mobile1.jpg";
import Mobile2 from "./assets/image/Mobile2.jpg";
import Mobile3 from "./assets/image/Mobile3.jpeg";
import Mobile4 from "./assets/image/Mobile4.jpeg";

// Project 2 Images
import projet2_1 from "./assets/image/projet2_1.jpeg";
import projet2_2 from "./assets/image/projet2_2.jpeg";
import projet2_3 from "./assets/image/projet2_3.jpeg";
import projet2_4 from "./assets/image/projet2_4.jpeg";
import projet2_5 from "./assets/image/projet2_5.jpeg";
import projet2_6 from "./assets/image/projet2_6.jpeg";

// Project 3 Images
import projet1_1 from "./assets/image/projet1_1.jpeg";
import projet1_2 from "./assets/image/projet1_2.jpeg";
import projet1_3 from "./assets/image/projet1_3.jpeg";
import projet1_4 from "./assets/image/projet1_4.jpeg";
import projet1_5 from "./assets/image/projet1_5.jpeg";

// Project 4 Images
import projet3_1 from "./assets/image/projet3_1.jpeg";
import projet3_2 from "./assets/image/projet3_2.jpeg";
import projet3_3 from "./assets/image/projet3_3.jpeg";
import projet3_4 from "./assets/image/projet3_4.jpeg";

// Project 5 Images
import projet4_1 from "./assets/image/projet4_1.jpeg";
import projet4_2 from "./assets/image/projet4_2.jpeg";

// Project 6 Images
import BI1 from "./assets/image/BI1.png";
import BI2 from "./assets/image/BI2.png";
import BI3 from "./assets/image/BI3.png";
import BI4 from "./assets/image/BI4.png";

// Project 7 Images
import projet5_1 from "./assets/image/projet5_1.jpeg";
import projet5_2 from "./assets/image/projet5_2.jpeg";
import projet5_3 from "./assets/image/projet5_3.jpeg";
import projet5_4 from "./assets/image/projet5_4.jpeg";
import projet5_5 from "./assets/image/projet5_5.jpeg";
import projet5_6 from "./assets/image/projet5_6.jpeg";

// Project 8 Images (LHANOUT)
import projet8_1 from "./assets/image/projet8_3.jpeg";
import projet8_2 from "./assets/image/projet8_1.jpeg";
import projet8_3 from "./assets/image/projet8_2.jpeg";
import projet8_4 from "./assets/image/projet8_4.jpeg";
import projet8_5 from "./assets/image/projet8_5.jpeg";
import projet8_6 from "./assets/image/projet8_6.jpeg";
import projet8_7 from "./assets/image/projet8_7.jpeg";
import projet8_8 from "./assets/image/projet8_8.jpeg";
import projet8_9 from "./assets/image/projet8_9.jpeg";

// Project 9 Images (Smart Fishing)
import projet7_2 from "./assets/image/projet7_1.jpeg";
import projet7_1 from "./assets/image/projet7_2.jpeg";
import projet7_3 from "./assets/image/projet7_3.jpeg";
import projet7_4 from "./assets/image/projet7_4.jpeg";
import projet7_5 from "./assets/image/projet7_5.jpeg";
import projet7_8 from "./assets/image/projet7_8.jpeg";

const Portfolio = () => {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedFormation, setSelectedFormation] = useState(null);
  const [selectedProjectScreenshots, setSelectedProjectScreenshots] = useState(null);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

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
      setFormStatus('Message envoyé avec succès ! 🎉');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }
  };

  // ===== البيانات المحدّثة =====

  const formations = [
    {
      id: 1,
      title: 'Claude Code en Action',
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
      title: 'PostgreSQL pour les Développeurs',
      issuer: 'AWS Training & Certification',
      date: 'Oct. 2025',
      image: formation3,
      skills: ['PostgreSQL', 'SQL', 'Database Design']
    },
    {
      id: 4,
      title: 'Concevoir des Rapports Power BI',
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
    {
      id: 6,
      title: 'Apprentissage Automatique avec Python',
      issuer: 'IBM SkillsBuild',
      date: 'Mars 2026',
      image: formation7,
      skills: ['Machine Learning', 'Python', 'Data Science', 'IBM']
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
      title: 'Luxury E-commerce Android App',
      description: 'Designed and developed a premium Android e-commerce application focused on luxury watches and artisan fragrances, inspired by Parisian design aesthetics.',
      tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Room Database'],
      image: Mobile1,
      github: 'https://github.com/OUABEN',
      live: '#',
      featured: true,
      screenshots: [Mobile1, Mobile2, Mobile3, Mobile4]
    },
    {
      title: 'Taylor Swift Lyrics Generator',
      description: 'Génération automatique de paroles de chansons dans le style de Taylor Swift utilisant un réseau de neurones récurrents (LSTM) et une interface web moderne avec système d\'authentification.',
      tech: ['Python', 'Flask', 'LSTM', 'MySQL'],
      image: projet2_1,
      github: 'https://github.com/OUABEN',
      live: '#',
      screenshots: [projet2_1, projet2_2, projet2_3, projet2_4, projet2_5, projet2_6]
    },
    {
      title: 'Business Analytics Dashboard',
      description: 'Built a full-stack analytics platform to monitor and visualize key business metrics through interactive dashboards.',
      tech: ['React (Vite)', 'Node.js', 'Express', 'MySQL', 'Recharts'],
      image: projet1_1,
      github: 'https://github.com/OUABEN',
      live: '#',
      screenshots: [projet1_1, projet1_2, projet1_3, projet1_4, projet1_5]
    },
    {
      title: 'CoWorkingSpace Distributed System',
      description: 'Academic project implementing a distributed system using Java RMI with a multi-layer architecture and a web interface.',
      tech: ['Spring Boot', 'RMI', 'JPA', 'React'],
      image: projet3_1,
      github: 'https://github.com/OUABEN',
      live: '#',
      screenshots: [projet3_1, projet3_2, projet3_3, projet3_4]
    },
    {
      title: 'NovaTech Solutions — AI Web App',
      description: 'Premium full-stack web application combining a modern showcase website and an AI-powered intelligent chatbot.',
      tech: ['React', 'Vite', 'Node.js', 'Groq API'],
      image: projet4_1,
      github: 'https://github.com/OUABEN',
      live: '#',
      screenshots: [projet4_1, projet4_2]
    },
    {
      title: 'Data Analyse – Ventes & Livraisons',
      description: 'Projet académique d\'analyse de données sur les ventes, livraisons, clients et produits. Pipeline ETL complet avec visualisation Power BI.',
      tech: ['SQL Server', 'Talend', 'SSAS', 'Power BI'],
      image: BI1,
      github: 'https://github.com/OUABEN',
      live: '#',
      screenshots: [BI1, BI2, BI3, BI4]
    },
    {
      title: 'Student Management System',
      description: 'Developed a full-stack web application designed as a comprehensive academic management portal for students and teachers.',
      tech: ['React', 'Node.js', 'MySQL', 'JWT'],
      image: projet5_1,
      github: 'https://github.com/OUABEN',
      live: '#',
      screenshots: [projet5_1, projet5_2, projet5_3, projet5_4, projet5_5, projet5_6]
    },
    {
      title: 'LHANOUT - Inventory Management',
      description: 'Solution complète de gestion d\'inventaire moderne (Bilingue FR/AR). Tableau de bord analytics, gestion hiérarchique, promotions et sécurité renforcée.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
      image: projet8_1,
      github: 'https://github.com/OUABEN',
      live: '#',
      screenshots: [projet8_1, projet8_2, projet8_3, projet8_4, projet8_5, projet8_6, projet8_7, projet8_8, projet8_9]
    },
    {
      title: 'Smart Fishing Management',
      description: 'Platform Designed for modern fishing fleet management. Monitor vessel vitals, track resources, and manage mission logistics with surgical precision.',
      tech: ['React', 'Node.js', 'MySQL', 'Recharts'],
      image: projet7_1,
      github: 'https://github.com/OUABEN',
      live: '#',
      screenshots: [projet7_1, projet7_2, projet7_3, projet7_4, projet7_5, projet7_8]
    }
  ];

  const experience = [
    {
      year: '2025 – Présent',
      role: 'Master d\'Excellence en Ingénierie Logicielle',
      company: 'Université Ibn Zohr – Agadir',
      description: 'Formation avancée en ingénierie logicielle, architecture des systèmes distribués et développement Full-Stack.',
      achievements: ['Développement de projets Full-Stack complexes', 'Analyse de données avec Power BI & Talend']
    },
    {
      year: 'Sept. 2024 – 2025',
      role: 'Licence d\'Excellence en Ingénierie Logicielle',
      company: 'Université Ibn Zohr – Agadir',
      description: 'Formation en développement web et mobile, bases de données, et architecture logicielle.',
      achievements: ['Projets académiques web & mobile', 'Développement avec Laravel, Spring Boot, Kotlin']
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
    { label: 'Projets Terminés', value: '9+', icon: <CheckCircle className="w-6 h-6" /> },
    { label: 'Années d\'Études', value: '4+', icon: <Clock className="w-6 h-6" /> },
    { label: 'Certifications', value: '6+', icon: <Award className="w-6 h-6" /> },
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

  const ProjectModal = () => {
    if (!selectedProjectScreenshots) return null;

    const screenshots = selectedProjectScreenshots;
    const currentImg = screenshots[currentScreenshotIndex];

    const nextScreenshot = (e) => {
      e.stopPropagation();
      setCurrentScreenshotIndex((prev) => (prev + 1) % screenshots.length);
    };

    const prevScreenshot = (e) => {
      e.stopPropagation();
      setCurrentScreenshotIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    };

    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
        onClick={() => setSelectedProjectScreenshots(null)}
      >
        <div className="relative max-w-6xl w-full flex items-center justify-center animate-in zoom-in-95 duration-300">
          {/* Navigation Buttons */}
          {screenshots.length > 1 && (
            <>
              <button
                onClick={prevScreenshot}
                className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/20"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextScreenshot}
                className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/20"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <div className="relative group" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentImg}
              alt="Project Screenshot"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedProjectScreenshots(null)}
              className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors bg-white/10 rounded-full backdrop-blur-md"
            >
              <X size={24} />
            </button>

            {/* Indicator */}
            {screenshots.length > 1 && (
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                {screenshots.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${i === currentScreenshotIndex ? 'bg-blue-500 w-4' : 'bg-white/30'
                      }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const AllProjectsView = () => {
    const filteredProjects = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = filterCategory === 'All' || project.tech.some(t => t.toLowerCase().includes(filterCategory.toLowerCase()));
      return matchesSearch && matchesFilter;
    });

    const categories = ['All', 'React', 'Kotlin', 'Node.js', 'Python', 'Power BI'];

    return (
      <div className={`min-h-screen pt-24 pb-20 ${bgClass} animate-in fade-in duration-700`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div>
              <button
                onClick={() => setShowAllProjects(false)}
                className="flex items-center gap-2 text-blue-500 hover:text-blue-400 mb-4 transition-colors group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Retour au Portfolio
              </button>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Tous les Projets
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input
                  type="text"
                  placeholder="Rechercher un projet..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`pl-10 pr-4 py-3 rounded-xl border ${borderClass} ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'} focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-full sm:w-64`}
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${filterCategory === cat
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                      : `${theme === 'dark' ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl cursor-pointer"
                  onClick={() => {
                    setSelectedProjectScreenshots(project.screenshots);
                    setCurrentScreenshotIndex(0);
                  }}
                >
                  {/* Subtle animated background glow on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-25 blur-xl transition-all duration-700" />
                  
                  <div 
                    className="relative h-full flex flex-col rounded-3xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
                    style={{
                      background: theme === 'dark' 
                        ? 'rgba(20, 20, 30, 0.4)' 
                        : 'rgba(255, 255, 255, 0.6)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: theme === 'dark' 
                        ? '1px solid rgba(255, 255, 255, 0.08)' 
                        : '1px solid rgba(0, 0, 0, 0.08)',
                    }}
                  >
                    {/* Top glass reflection line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />

                    <div className="relative overflow-hidden h-40 sm:h-48 w-full shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
                      
                      {/* Badge */}
                      {project.featured && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white text-[9px] font-bold tracking-widest uppercase backdrop-blur-md shadow-lg border border-white/20">
                            En vedette
                          </span>
                        </div>
                      )}

                      {/* Quick view text overlay on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                        <span className="px-4 py-2 rounded-full bg-black/60 text-white/95 text-xs font-medium backdrop-blur-md border border-white/20 flex items-center gap-1.5 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                          <Search size={14} /> Voir images
                        </span>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 flex flex-col flex-grow relative z-10">
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <h3 className={`text-xl font-bold tracking-tight line-clamp-1 transition-all duration-500 ${
                          theme === 'dark' 
                            ? 'text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400' 
                            : 'text-gray-900 group-hover:text-blue-600'
                        }`}>
                          {project.title}
                        </h3>
                        
                        {/* Action Links */}
                        <div className="flex gap-1.5 shrink-0 mt-0.5">
                          <a
                            href={project.github}
                            onClick={(e) => e.stopPropagation()}
                            className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 hover:scale-110 shadow-sm ${
                              theme === 'dark' 
                                ? 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 hover:border-white/20' 
                                : 'bg-black/5 hover:bg-black/10 text-gray-600 hover:text-gray-900 border border-black/5 hover:border-black/20'
                            }`}
                          >
                            <Github size={14} />
                          </a>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProjectScreenshots(project.screenshots);
                              setCurrentScreenshotIndex(0);
                            }}
                            className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 hover:scale-110 shadow-sm ${
                              theme === 'dark' 
                                ? 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 hover:border-white/20' 
                                : 'bg-black/5 hover:bg-black/10 text-gray-600 hover:text-gray-900 border border-black/5 hover:border-black/20'
                            }`}
                          >
                            <ExternalLink size={14} />
                          </button>
                        </div>
                      </div>

                      <p className={`text-xs sm:text-sm line-clamp-2 leading-relaxed mb-6 flex-grow ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className={`px-2.5 py-1 text-[9px] sm:text-[10px] font-semibold tracking-wide uppercase rounded-md transition-colors duration-300 ${
                              theme === 'dark'
                                ? 'bg-white/5 border border-white/10 text-gray-300 group-hover:border-white/20 group-hover:bg-white/10'
                                : 'bg-black/5 border border-black/10 text-gray-700 group-hover:border-black/20 group-hover:bg-black/10'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                           <span className={`px-2.5 py-1 text-[9px] sm:text-[10px] font-semibold tracking-wide uppercase rounded-md transition-colors duration-300 ${
                            theme === 'dark'
                              ? 'bg-transparent text-gray-500'
                              : 'bg-transparent text-gray-400'
                          }`}>
                             +{project.tech.length - 3}
                           </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-block p-6 rounded-full bg-gray-800/50 mb-6">
                <Search size={48} className="text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Aucun projet trouvé</h3>
              <p className="text-gray-400">Essayez de modifier vos critères de recherche ou de filtre.</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  if (showAllProjects) {
    return (
      <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-500`}>
        <ProjectModal />
        {/* ── All-Projects floating pill navbar ── */}
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl">
          <nav
            style={{
              background: 'rgba(8, 8, 20, 0.65)',
              backdropFilter: 'blur(28px) saturate(180%)',
              WebkitBackdropFilter: 'blur(28px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.45), 0 0 0 0.5px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)'
            }}
            className="rounded-full px-4 py-2.5 flex items-center justify-between"
          >
            <div
              className="text-lg font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer select-none tracking-tight"
              onClick={() => setShowAllProjects(false)}
            >
              {'<OUABEN />'}
            </div>
            <button
              onClick={toggleTheme}
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              className="p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
            >
              {theme === 'dark' ? <Sun size={16} className="text-yellow-300" /> : <Moon size={16} className="text-blue-400" />}
            </button>
          </nav>
        </div>
        <AllProjectsView />
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-500`}>
      <FormationModal />
      <ProjectModal />
      {/* ── Premium Floating Glassmorphism Navbar ── */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl px-0">
        <nav
          role="navigation"
          aria-label="Main navigation"
          style={{
            background: theme === 'dark'
              ? 'rgba(8, 8, 20, 0.72)'
              : 'rgba(255, 255, 255, 0.70)',
            backdropFilter: 'blur(32px) saturate(200%)',
            WebkitBackdropFilter: 'blur(32px) saturate(200%)',
            border: theme === 'dark'
              ? '1px solid rgba(255,255,255,0.07)'
              : '1px solid rgba(0,0,0,0.08)',
            boxShadow: theme === 'dark'
              ? '0 8px 48px rgba(0,0,0,0.55), 0 0 0 0.5px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.07)'
              : '0 8px 40px rgba(0,0,0,0.12), 0 2px 0 rgba(0,0,0,0.04)'
          }}
          className="rounded-full px-3 sm:px-5 py-2 flex items-center justify-between gap-3"
        >

          {/* ── Logo ── */}
          <button
            onClick={() => scrollToSection('home')}
            aria-label="Go to top"
            className="flex-shrink-0 text-lg font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent select-none tracking-tight transition-opacity duration-200 hover:opacity-80"
          >
            {'<OUABEN />'}
          </button>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { id: 'home',       label: 'Home' },
              { id: 'about',      label: 'About' },
              { id: 'skills',     label: 'Skills' },
              { id: 'projects',   label: 'Projects' },
              { id: 'formation',  label: 'Certifications' },
              { id: 'experience', label: 'Éducation' },
              { id: 'contact',    label: 'Contact' },
            ].map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className="relative px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 group outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  style={{
                    color: isActive
                      ? '#fff'
                      : theme === 'dark' ? 'rgba(200,200,220,0.75)' : 'rgba(40,40,60,0.75)'
                  }}
                >
                  {/* active pill background */}
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, rgba(59,130,246,0.30), rgba(139,92,246,0.30))',
                        border: '1px solid rgba(139,92,246,0.25)',
                        boxShadow: '0 0 12px rgba(139,92,246,0.25)'
                      }}
                    />
                  )}
                  {/* hover glow */}
                  <span
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(139,92,246,0.10)' }}
                  />
                  <span className="relative z-10">{item.label}</span>
                  {/* animated underline */}
                  <span
                    className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-300 rounded-full ${
                      isActive ? 'w-3/5 opacity-80' : 'w-0 opacity-0 group-hover:w-3/5 group-hover:opacity-60'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* ── Right Actions ── */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              className="p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-purple-500/20 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {theme === 'dark'
                ? <Sun size={15} className="text-yellow-300" />
                : <Moon size={15} className="text-slate-600" />}
            </button>

            {/* Let's Talk CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-purple-500 outline-none"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
                backgroundSize: '200% 200%',
                boxShadow: '0 4px 20px rgba(139,92,246,0.40), inset 0 1px 0 rgba(255,255,255,0.15)'
              }}
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Let's Talk
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              className="md:hidden p-2 rounded-full transition-all duration-300 hover:scale-105 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <div className="w-4 h-4 flex flex-col justify-center items-center gap-[4px]">
                <span
                  className="block h-px rounded-full transition-all duration-300 origin-center"
                  style={{
                    width: '16px',
                    background: theme === 'dark' ? 'rgba(200,200,220,0.9)' : 'rgba(40,40,60,0.9)',
                    transform: mobileMenuOpen ? 'translateY(5px) rotate(45deg)' : 'none'
                  }}
                />
                <span
                  className="block h-px rounded-full transition-all duration-300"
                  style={{
                    width: '12px',
                    background: theme === 'dark' ? 'rgba(200,200,220,0.9)' : 'rgba(40,40,60,0.9)',
                    opacity: mobileMenuOpen ? 0 : 1,
                    transform: mobileMenuOpen ? 'scaleX(0)' : 'none'
                  }}
                />
                <span
                  className="block h-px rounded-full transition-all duration-300 origin-center"
                  style={{
                    width: '16px',
                    background: theme === 'dark' ? 'rgba(200,200,220,0.9)' : 'rgba(40,40,60,0.9)',
                    transform: mobileMenuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none'
                  }}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* ── Mobile Drawer ── */}
        <div
          className="md:hidden overflow-hidden transition-all duration-500"
          style={{
            maxHeight: mobileMenuOpen ? '420px' : '0px',
            opacity: mobileMenuOpen ? 1 : 0,
          }}
        >
          <div
            className="mt-2 rounded-3xl p-4 flex flex-col gap-1"
            style={{
              background: theme === 'dark'
                ? 'rgba(8, 8, 20, 0.85)'
                : 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(32px) saturate(200%)',
              WebkitBackdropFilter: 'blur(32px) saturate(200%)',
              border: theme === 'dark'
                ? '1px solid rgba(255,255,255,0.07)'
                : '1px solid rgba(0,0,0,0.07)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.40)'
            }}
          >
            {[
              { id: 'home',       label: 'Home' },
              { id: 'about',      label: 'About' },
              { id: 'skills',     label: 'Skills' },
              { id: 'projects',   label: 'Projects' },
              { id: 'formation',  label: 'Certifications' },
              { id: 'experience', label: 'Éducation' },
              { id: 'contact',    label: 'Contact' },
            ].map((item, i) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-left text-sm font-medium transition-all duration-300"
                  style={{
                    background: isActive
                      ? 'linear-gradient(135deg, rgba(59,130,246,0.18), rgba(139,92,246,0.18))'
                      : 'transparent',
                    color: isActive
                      ? '#a78bfa'
                      : theme === 'dark' ? 'rgba(200,200,220,0.8)' : 'rgba(40,40,60,0.8)',
                    borderLeft: isActive ? '2px solid rgba(139,92,246,0.6)' : '2px solid transparent',
                    animationDelay: `${i * 40}ms`
                  }}
                >
                  <span className="text-base">{item.emoji}</span>
                  {item.label}
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  )}
                </button>
              );
            })}

            {/* Mobile CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-2 w-full py-3 rounded-2xl text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
                boxShadow: '0 4px 20px rgba(139,92,246,0.35)'
              }}
            >
              ✨ Let's Talk
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center px-4 sm:px-6 pt-28 relative overflow-hidden"
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
          <div className="hidden lg:flex relative justify-center order-2 lg:order-1">
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
                <span className="font-semibold">Disponible</span>
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
              Développeur Full-Stack
            </div>

            <p className="text-lg text-gray-400 max-w-xl mb-6 leading-relaxed">
              Développeur <span className="text-blue-400 font-semibold">Full-Stack web et mobile</span>, spécialisé dans la création d’applications modernes, performantes et
              <span className="text-purple-400 font-semibold"> bien structurées</span> avec <span className="text-pink-400 font-semibold">Laravel, Node js/React, Spring Boot</span> et <span className="text-blue-400 font-semibold">Flutter</span>.
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
                  Voir les Projets
                  <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-3 rounded-full border-2 border-gray-600 text-gray-200 hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-300 hover:-translate-y-1"
              >
                Me Contacter
              </button>
              <button className="group px-5 py-3 rounded-full border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 hover:-translate-y-1">
                <span className="flex items-center gap-2">
                  Télécharger CV
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
              <span className="text-sm font-medium text-blue-400">À propos de moi</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Créer l'Excellence Numérique</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Passionné par l'innovation et engagé pour la qualité
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Bonjour ! Je suis <span className="text-blue-400">OUABEN Mohamed</span>
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Développeur Full-Stack web et mobile, je conçois et développe des applications modernes en utilisant des technologies telles que Laravel, React, Spring Boot et Kotlin.              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Actuellement étudiant en Master d’Excellence en Ingénierie Logicielle à l’Université Ibn Zohr d’Agadir (Maroc), je poursuis ma formation tout en renforçant mes compétences à travers des projets pratiques et innovants.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Motivé, curieux et rigoureux, je suis à la recherche d’opportunités pour mettre en pratique mes connaissances et évoluer dans le domaine du développement logiciel.   </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-medium">Stage / Emploi</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-medium">Travail à distance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-medium">Projets académiques</span>
                </div>
              </div>
            </div>

            <div className={`${cardClass} rounded-2xl p-8 shadow-xl border ${borderClass}`}>
              <h3 className="text-2xl font-semibold mb-6">Aperçu des Technologies</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-transparent">
                  <div className="p-3 rounded-lg bg-blue-500/20">
                    <Code className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Développement Front-end</p>
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
                    <p className="font-semibold">Développement Back-end</p>
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
                    <p className="font-semibold">Gestion de Bases de Données</p>
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Expertise Technique</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Maîtrise complète de la pile de développement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className={`${cardClass} rounded-2xl p-8 shadow-xl border ${borderClass} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
              >
                <h3 className="text-xl font-semibold mb-6 capitalize flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category === 'frontend' ? 'bg-blue-500/20 text-blue-400' :
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
                  {category === 'frontend' ? 'Front-end' :
                    category === 'backend' ? 'Back-end' :
                      category === 'mobile' ? 'Mobile' :
                        category === 'database' ? 'Base de données' :
                          category === 'devops' ? 'DevOps' :
                            category === 'data' ? 'Données' : category}
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
                            background: `linear-gradient(90deg, ${category === 'frontend' ? '#3b82f6, #8b5cf6' :
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Projets Phares</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Présentation de solutions innovantes et d'implémentations modernes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 8).map((project, index) => (
              <div
                key={index}
                className={`group relative rounded-3xl cursor-pointer ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => {
                  setSelectedProjectScreenshots(project.screenshots);
                  setCurrentScreenshotIndex(0);
                }}
              >
                {/* Subtle animated background glow on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-25 blur-xl transition-all duration-700" />
                
                <div 
                  className="relative h-full flex flex-col rounded-3xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
                  style={{
                    background: theme === 'dark' 
                      ? 'rgba(20, 20, 30, 0.4)' 
                      : 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: theme === 'dark' 
                      ? '1px solid rgba(255, 255, 255, 0.08)' 
                      : '1px solid rgba(0, 0, 0, 0.08)',
                  }}
                >
                  {/* Top glass reflection line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />

                  <div className="relative overflow-hidden h-48 sm:h-56 w-full shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
                    
                    {/* Badge */}
                    {project.featured && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2.5 py-1.5 rounded-full bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white text-[10px] font-bold tracking-widest uppercase backdrop-blur-md shadow-lg border border-white/20">
                          En vedette
                        </span>
                      </div>
                    )}

                    {/* Quick view text overlay on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                      <span className="px-5 py-2.5 rounded-full bg-black/60 text-white/95 text-sm font-medium backdrop-blur-md border border-white/20 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                        <Search size={16} /> Voir les images
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-grow relative z-10">
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <h3 className={`text-xl font-bold tracking-tight transition-all duration-500 ${
                        theme === 'dark' 
                          ? 'text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400' 
                          : 'text-gray-900 group-hover:text-blue-600'
                      }`}>
                        {project.title}
                      </h3>
                      
                      {/* Action Links */}
                      <div className="flex gap-2 shrink-0 mt-1">
                        <a
                          href={project.github}
                          onClick={(e) => e.stopPropagation()}
                          className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110 shadow-sm ${
                            theme === 'dark' 
                              ? 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 hover:border-white/20' 
                              : 'bg-black/5 hover:bg-black/10 text-gray-600 hover:text-gray-900 border border-black/5 hover:border-black/20'
                          }`}
                        >
                          <Github size={18} />
                        </a>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProjectScreenshots(project.screenshots);
                            setCurrentScreenshotIndex(0);
                          }}
                          className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110 shadow-sm ${
                            theme === 'dark' 
                              ? 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 hover:border-white/20' 
                              : 'bg-black/5 hover:bg-black/10 text-gray-600 hover:text-gray-900 border border-black/5 hover:border-black/20'
                          }`}
                        >
                          <ExternalLink size={18} />
                        </button>
                      </div>
                    </div>

                    <p className={`text-sm sm:text-base leading-relaxed mb-8 flex-grow ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1.5 text-[11px] sm:text-xs font-semibold tracking-wide uppercase rounded-lg transition-colors duration-300 ${
                            theme === 'dark'
                              ? 'bg-white/5 border border-white/10 text-gray-300 group-hover:border-white/20 group-hover:bg-white/10'
                              : 'bg-black/5 border border-black/10 text-gray-700 group-hover:border-black/20 group-hover:bg-black/10'
                          }`}
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

          <div className="mt-16 text-center">
            <button
              onClick={() => {
                setShowAllProjects(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group px-10 py-4 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-400 font-semibold hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2 flex items-center gap-3 mx-auto"
            >
              Voir Tous les Projets
              <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section id="formation" className={`py-24 px-4 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100/50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
              <Award className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-400">Éducation & Certifications</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Ma Formation</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Apprentissage continu et développement professionnel via des formations certifiées
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
                        className={`px-3 py-1 text-xs rounded-full ${theme === 'dark'
                          ? 'bg-gray-800/70 text-gray-300'
                          : 'bg-gray-100 text-gray-700'
                          }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (formation.certificateUrl) {
                        window.open(formation.certificateUrl, '_blank');
                      } else {
                        setSelectedFormation(formation);
                      }
                    }}
                    className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 font-medium"
                  >
                    Voir le Certificat
                  </button>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Eduction Timeline */}
      <section id="experience" className={`py-24 px-4 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100/50'} relative`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Parcours Professionnel</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Évolution professionnelle et jalons éducatifs
            </p>
          </div>

          <div className="relative">
            <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 ${theme === 'dark' ? 'bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-pink-500/30' : 'bg-gray-300'
              }`} />

            {experience.map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
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

                <div className={`absolute left-0 md:left-1/2 top-8 transform md:-translate-x-1/2 w-4 h-4 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Contactez-moi</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Prêt à concrétiser votre vision ? Parlons de votre projet
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Commencer un <span className="text-blue-400">Projet</span>
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
                    <p className="text-sm text-gray-400">ouabenmohamed74@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com/OUABEN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-r from-gray-500/20 to-gray-600/20 group-hover:from-gray-500/30 group-hover:to-gray-600/30">
                    <Github className="text-gray-400" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm text-gray-400">https://github.com/OUABEN</p>
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
              <h3 className="text-2xl font-semibold mb-6">Envoyer un Message</h3>

              <div className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium text-gray-300">Nom Complet</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${borderClass} ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300`}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-300">Adresse Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${borderClass} ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300`}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-300">Votre Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-xl border ${borderClass} ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300"
                >
                  Envoyer le Message
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
                Ingénierie Logicielle – Agadir, Maroc
              </p>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/OUABEN"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full border ${borderClass} hover:bg-gray-800/50 hover:scale-110 transition-all duration-300`}
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-ouaben-1780a029a/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full border ${borderClass} hover:bg-gray-800/50 hover:scale-110 transition-all duration-300`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ouabenmohamed74@gmail.com"
                className={`p-3 rounded-full border ${borderClass} hover:bg-gray-800/50 hover:scale-110 transition-all duration-300`}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className={`mt-8 pt-8 border-t ${borderClass} text-center`}>
            <p className={`${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} OUABEN Mohamed. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>

      <FormationModal />
    </div>
  );
};

export default Portfolio;