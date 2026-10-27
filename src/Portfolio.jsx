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
  ArrowLeft,
  Send,
  AlertCircle,
  Loader2,
  Briefcase,
  Building2,
  Calendar
} from "lucide-react";

import profileImg from "./assets/image/cv.avif";

import formation1 from "./assets/image/F4.png";
import formation2 from "./assets/image/F5.png";
import formation3 from "./assets/image/F2.png";
import formation4 from "./assets/image/F3.png";
import formation5 from "./assets/image/F1.png";
import formation6 from "./assets/image/F6.png";
import formation7 from "./assets/image/cert7.jpeg";
import formation8 from "./assets/image/cert6.jpeg";
import formation9 from "./assets/image/cert8.jpeg";

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

// Project 10 Images (Royal Air Maroc - Flight Booking)
import air1 from "./assets/image/air/10_1.jpg";
import air3 from "./assets/image/air/10_3.png";
import air4 from "./assets/image/air/10_4.png";
import air5 from "./assets/image/air/10_5.png";
import air6 from "./assets/image/air/10_6.png";
import air7 from "./assets/image/air/10_7.png";
import air8 from "./assets/image/air/10_8.png";

// Project 11 Images (HR-Maroc - ERP & Paie)
import hr1 from "./assets/image/hr/11_1.jpeg";
import hr2 from "./assets/image/hr/11_2.jpeg";
import hr3 from "./assets/image/hr/11_3.jpeg";
import hr4 from "./assets/image/hr/11_4.jpeg";
import hr5 from "./assets/image/hr/11_5.jpeg";
import hr6 from "./assets/image/hr/11_6.jpeg";
import hr7 from "./assets/image/hr/11_7.jpeg";

// Project 12 Images (ImmoPro - SaaS Real Estate)
import immo1 from "./assets/image/emmpo/12_1.jpeg";
import immo2 from "./assets/image/emmpo/12_2.jpeg";
import immo3 from "./assets/image/emmpo/12_3.jpeg";
import immo4 from "./assets/image/emmpo/12_4.jpeg";
import immo5 from "./assets/image/emmpo/12_5.jpeg";
import immo6 from "./assets/image/emmpo/12_6.jpeg";
import immo7 from "./assets/image/emmpo/12_7.jpeg";

// Professional Experience Logos
import logoAGH from "./assets/image/Logoa_AGH.webp";
import logoMD from "./assets/image/Logo_M§D.png";

const Portfolio = () => {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', 'bot-field': '' });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFormation, setSelectedFormation] = useState(null);
  const [selectedProjectScreenshots, setSelectedProjectScreenshots] = useState(null);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'pro-experience', 'projects', 'experience', 'formation', 'contact'];
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

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: 'error', message: 'Veuillez remplir tous les champs obligatoires.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({ type: 'error', message: 'Veuillez entrer une adresse email valide.' });
      return;
    }

    if (formData.message.length < 10) {
      setFormStatus({ type: 'error', message: 'Votre message doit contenir au moins 10 caractères.' });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => {
        setFormStatus({ type: 'success', message: 'Message envoyé avec succès ! 🎉 Je vous répondrai bientôt.' });
        setFormData({ name: '', email: '', message: '', 'bot-field': '' });
      })
      .catch(() => {
        setFormStatus({ type: 'error', message: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer." });
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setFormStatus({ type: '', message: '' }), 6000);
      });
  };

  // ===== Données Expérience Professionnelle (Stages) =====

  const professionalExperiences = [
    {
      id: 1,
      role: 'Stagiaire - Développement Mobile Flutter & Test/Debug',
      company: 'AGH Data Agency Holding SA',
      logo: logoAGH,
      period: '01/06/2026 – 02/07/2026',
      duration: '1 Mois',
      domain: 'Développement Mobile Flutter',
      accentColor: 'from-blue-500 via-cyan-400 to-indigo-500',
      glowColor: 'group-hover:shadow-cyan-500/20',
      badgeGradient: 'from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30',
      stack: [
        { name: 'Flutter/Dart', color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' },
        { name: 'Django', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
        { name: 'FastAPI (LLM)', color: 'bg-teal-500/10 text-teal-300 border-teal-500/30' },
        { name: 'PostgreSQL', color: 'bg-blue-500/10 text-blue-400 border-blue-500/30' },
        { name: 'SonarCloud', color: 'bg-orange-500/10 text-orange-400 border-orange-500/30' }
      ],
      achievements: [
        'Développement d\'applications Flutter en production avec architecture réactive.',
        'Intégration d\'APIs REST avec des backends Django/DRF et microservices FastAPI basés sur des LLM.',
        'Test et débogage rigoureux des applications selon les standards de qualité SonarCloud.'
      ]
    },
    {
      id: 2,
      role: 'Stagiaire - Développement Web Full-Stack',
      company: 'Migrations & Développement (M&D)',
      logo: logoMD,
      period: '05/07/2026 – 30/09/2026',
      duration: '3 Mois',
      domain: 'Web Full-Stack & DevOps',
      accentColor: 'from-purple-500 via-pink-500 to-amber-500',
      glowColor: 'group-hover:shadow-purple-500/20',
      badgeGradient: 'from-purple-500/20 to-pink-500/20 text-pink-300 border-pink-500/30',
      stack: [
        { name: 'React 19/TypeScript', color: 'bg-blue-500/10 text-blue-400 border-blue-500/30' },
        { name: 'Fastify (Node.js)', color: 'bg-green-500/10 text-green-400 border-green-500/30' },
        { name: 'PostgreSQL/Prisma', color: 'bg-purple-500/10 text-purple-300 border-purple-500/30' },
        { name: 'Docker', color: 'bg-sky-500/10 text-sky-400 border-sky-500/30' },
        { name: 'Git/GitHub', color: 'bg-red-500/10 text-red-400 border-red-500/30' },
        { name: 'CI/CD', color: 'bg-amber-500/10 text-amber-400 border-amber-500/30' }
      ],
      achievements: [
        'Prise en charge complète et autonome du projet : conception et développement frontend (React/TS) et backend (Fastify/Prisma).',
        'Mise en place du versioning Git/GitHub et d\'un pipeline CI/CD pour automatiser les déploiements.',
        'Tests, débogage et maintenance continue de l\'application tout au long du cycle de développement.'
      ]
    }
  ];

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
      image: formation6,
      skills: ['Machine Learning', 'Python', 'Data Science', 'IBM']
    },
    {
      id: 7,
      title: 'Gestion de Projet Agile',
      issuer: 'HP LIFE / HP Foundation',
      date: '26 Oct. 2026',
      image: formation7,
      skills: ['Agile', 'Scrum', 'Kanban', 'MVP', 'Gestion de Projet']
    },
    {
      id: 8,
      title: "L'IA pour les Professionnels",
      issuer: 'HP LIFE / HP Foundation',
      date: '26 Oct. 2026',
      image: formation8,
      skills: ['Intelligence Artificielle', 'Prompt Engineering', 'Éthique IA', 'Productivité']
    },
    {
      id: 9,
      title: 'Trello for Beginners',
      issuer: 'Coursera',
      date: '18 Sept. 2026',
      image: formation9,
      skills: ['Trello', 'Kanban', 'Gestion de Tâches', 'Méthodes Agiles']
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
      title: 'Royal Air Maroc — Réservation de Vols Mobile',
      description: 'Application mobile complète de réservation de vols inspirée de Royal Air Maroc. Recherche dynamique de vols, sélection interactive des sièges cabine en temps réel, architecture MVVM/Provider et authentification JWT.',
      tech: ['Flutter', 'Dart', 'Django', 'REST API', 'SQLite', 'JWT'],
      image: air1,
      github: 'https://github.com/OUABEN',
      live: '#',
      featured: true,
      screenshots: [air1, air3, air4, air5, air6, air7, air8]
    },
    {
      title: 'HR-Maroc — Système ERP RH & Moteur de Paie',
      description: 'ERP Full-Stack conforme au Code du Travail marocain (Loi n° 65-99). Moteur de paie automatisé (cotisations CNSS/AMO, barème IR progressif), bulletins de paie PDF officiels, télédéclaration Damancom et audit trail.',
      tech: ['Spring Boot', 'Java 21', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind'],
      image: hr1,
      github: 'https://github.com/OUABEN',
      live: '#',
      screenshots: [hr1, hr2, hr3, hr4, hr5, hr6, hr7]
    },
    {
      title: 'ImmoPro — SaaS Immobilier Méditerranéen',
      description: 'Plateforme SaaS multi-tenant pour agences immobilières (Maroc & Espagne). Abonnements Stripe, intégration Google Places/Maps, multilingue avec support RTL (Arabe), compression d\'images WebP et sécurité enterprise.',
      tech: ['React 19', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe'],
      image: immo1,
      github: 'https://github.com/OUABEN',
      live: '#',
      screenshots: [immo1, immo2, immo3, immo4, immo5, immo6, immo7]
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
      title: 'Luxury E-commerce Android App',
      description: 'Designed and developed a premium Android e-commerce application focused on luxury watches and artisan fragrances, inspired by Parisian design aesthetics.',
      tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Room Database'],
      image: Mobile1,
      github: 'https://github.com/OUABEN',
      live: '#',
      screenshots: [Mobile1, Mobile2, Mobile3, Mobile4]
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
      title: 'Smart Fishing Management',
      description: 'Platform Designed for modern fishing fleet management. Monitor vessel vitals, track resources, and manage mission logistics with surgical precision.',
      tech: ['React', 'Node.js', 'MySQL', 'Recharts'],
      image: projet7_1,
      github: 'https://github.com/OUABEN',
      live: '#',
      screenshots: [projet7_1, projet7_2, projet7_3, projet7_4, projet7_5, projet7_8]
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
      title: 'LHANOUT - Inventory Management',
      description: 'Solution complète de gestion d\'inventaire moderne (Bilingue FR/AR). Tableau de bord analytics, gestion hiérarchique, promotions et sécurité renforcée.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
      image: projet8_1,
      github: 'https://github.com/OUABEN',
      live: '#',
      screenshots: [projet8_1, projet8_2, projet8_3, projet8_4, projet8_5, projet8_6, projet8_7, projet8_8, projet8_9]
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
      title: 'NovaTech Solutions — AI Web App',
      description: 'Premium full-stack web application combining a modern showcase website and an AI-powered intelligent chatbot.',
      tech: ['React', 'Vite', 'Node.js', 'Groq API'],
      image: projet4_1,
      github: 'https://github.com/OUABEN',
      live: '#',
      screenshots: [projet4_1, projet4_2]
    },
    {
      title: 'Student Management System',
      description: 'Developed a full-stack web application designed as a comprehensive academic management portal for students and teachers.',
      tech: ['React', 'Node.js', 'MySQL', 'JWT'],
      image: projet5_1,
      github: 'https://github.com/OUABEN',
      live: '#',
      screenshots: [projet5_1, projet5_2, projet5_3, projet5_4, projet5_5, projet5_6]
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
    { label: 'Projets Terminés', value: '12+', icon: <CheckCircle className="w-6 h-6" /> },
    { label: 'Années d\'Études', value: '4+', icon: <Clock className="w-6 h-6" /> },
    { label: 'Certifications', value: '9+', icon: <Award className="w-6 h-6" /> },
    { label: 'Technologies', value: '18+', icon: <Zap className="w-6 h-6" /> }
  ];

  // ===== fin des données =====

  const bgClass = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';
  const textClass = theme === 'dark' ? 'text-gray-100' : 'text-gray-900';

  const renderFormationModal = () => {
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

  const renderProjectModal = () => {
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

  const renderAllProjectsView = () => {
    const categories = ['All', 'React', 'Spring Boot', 'Flutter', 'Kotlin', 'Node.js', 'Python', 'Power BI'];

    const filteredProjects = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = filterCategory === 'All' || project.tech.some(t => t.toLowerCase().includes(filterCategory.toLowerCase()));
      return matchesSearch && matchesFilter;
    });

    const projectPalette = [
      { from: '#06b6d4', to: '#3b82f6', glow: 'rgba(6,182,212,0.25)' },
      { from: '#a855f7', to: '#ec4899', glow: 'rgba(168,85,247,0.25)' },
      { from: '#3b82f6', to: '#6366f1', glow: 'rgba(59,130,246,0.25)' },
      { from: '#10b981', to: '#06b6d4', glow: 'rgba(168,85,247,0.25)' },
      { from: '#f97316', to: '#eab308', glow: 'rgba(249,115,22,0.25)' },
      { from: '#8b5cf6', to: '#d946ef', glow: 'rgba(139,92,246,0.25)' },
      { from: '#ec4899', to: '#f43f5e', glow: 'rgba(236,72,153,0.25)' },
      { from: '#06b6d4', to: '#10b981', glow: 'rgba(6,182,212,0.25)' },
    ];

    return (
      <div className={`min-h-screen pt-28 pb-24 relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-[#090910] via-[#0d0d1a] to-gray-900' : 'bg-gradient-to-b from-gray-50 via-slate-100/60 to-gray-50'}`}>
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/8 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div>
              <button
                onClick={() => {
                  setShowAllProjects(false);
                  setTimeout(() => scrollToSection('projects'), 50);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border backdrop-blur-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
                style={{
                  background: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                  borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                }}
              >
                <ArrowLeft size={16} className="text-blue-400 group-hover:-translate-x-1 transition-transform" />
                <span className="text-xs font-bold tracking-wide text-gray-300">Retour au Portfolio</span>
              </button>

              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 rounded-full border backdrop-blur-xl block w-fit"
                style={{ background: 'rgba(139,92,246,0.08)', borderColor: 'rgba(139,92,246,0.25)' }}
              >
                <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-purple-400">Catalogue Complet</span>
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight"
                style={{ background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 50%, #93c5fd 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                Tous les Projets
              </h1>
            </div>

            {/* Filters & Search */}
            <div className="flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Rechercher un projet..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`pl-10 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/40 w-full sm:w-64 backdrop-blur-xl ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10 text-gray-100 placeholder-gray-500 focus:border-purple-500/50'
                      : 'bg-white/80 border-black/10 text-gray-900 placeholder-gray-400 focus:border-purple-500'
                  }`}
                />
              </div>

              <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
                {categories.map(cat => {
                  const isActive = filterCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setFilterCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 whitespace-nowrap border ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg shadow-purple-500/25 scale-105'
                          : theme === 'dark'
                            ? 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
                            : 'bg-black/5 text-gray-600 border-black/10 hover:bg-black/10 hover:text-gray-900'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => {
                const clr = projectPalette[index % projectPalette.length];
                return (
                  <div
                    key={index}
                    className="group relative rounded-3xl cursor-pointer transition-all duration-500 hover:-translate-y-2 flex flex-col"
                    onClick={() => {
                      setSelectedProjectScreenshots(project.screenshots);
                      setCurrentScreenshotIndex(0);
                    }}
                  >
                    {/* Outer hover ring */}
                    <div
                      className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        border: `1px solid ${clr.from}60`,
                        background: `linear-gradient(135deg, ${clr.from}15, ${clr.to}15)`,
                      }}
                    />

                    {/* Card Body */}
                    <div
                      className="relative w-full h-full flex flex-col justify-between rounded-3xl overflow-hidden"
                      style={{
                        background: theme === 'dark' ? 'rgba(10,10,22,0.75)' : 'rgba(255,255,255,0.92)',
                        backdropFilter: 'blur(28px)',
                        border: theme === 'dark' ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.06)',
                        boxShadow: `0 20px 50px rgba(0,0,0,${theme === 'dark' ? '0.4' : '0.08'}), inset 0 1px 0 rgba(255,255,255,0.05)`,
                      }}
                    >
                      {/* Top accent bar */}
                      <div
                        className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 z-20"
                        style={{ background: `linear-gradient(to right, ${clr.from}, ${clr.to})` }}
                      />

                      {/* Shimmer sweep */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl z-20">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out" />
                      </div>

                      <div>
                        {/* Image Header */}
                        <div className="relative h-48 sm:h-52 overflow-hidden w-full shrink-0">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                          {/* Featured Badge */}
                          {project.featured && (
                            <div className="absolute top-4 left-4 z-10">
                              <span
                                className="px-3 py-1 rounded-full text-white text-[10px] font-extrabold tracking-widest uppercase backdrop-blur-md shadow-lg border border-white/20"
                                style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.9), rgba(168,85,247,0.9))' }}
                              >
                                En vedette
                              </span>
                            </div>
                          )}

                          {/* Quick view text overlay on hover */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                            <span className="px-4 py-2 rounded-full bg-black/70 text-white text-xs font-bold backdrop-blur-md border border-white/20 flex items-center gap-2 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                              <Search size={14} className="text-purple-300" /> Voir images
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="flex justify-between items-start gap-3 mb-3">
                            <h3
                              className="text-lg sm:text-xl font-extrabold leading-snug tracking-tight transition-colors duration-300 group-hover:text-blue-400 line-clamp-1"
                              style={{ color: theme === 'dark' ? '#f1f5f9' : '#0f172a' }}
                            >
                              {project.title}
                            </h3>

                            {/* Action links */}
                            <div className="flex gap-1.5 shrink-0">
                              <a
                                href={project.github}
                                onClick={(e) => e.stopPropagation()}
                                className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 hover:scale-110 border ${
                                  theme === 'dark'
                                    ? 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                                    : 'bg-black/5 hover:bg-black/10 text-gray-700 border-black/10'
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
                                className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 hover:scale-110 border ${
                                  theme === 'dark'
                                    ? 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                                    : 'bg-black/5 hover:bg-black/10 text-gray-700 border-black/10'
                                }`}
                              >
                                <ExternalLink size={14} />
                              </button>
                            </div>
                          </div>

                          <p className={`text-xs sm:text-sm leading-relaxed mb-5 line-clamp-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* Tech stack */}
                      <div className="px-6 pb-6 pt-0">
                        <div className={`pt-4 border-t ${theme === 'dark' ? 'border-white/8' : 'border-gray-100'}`}>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-1 text-[11px] font-semibold rounded-lg border transition-all duration-200 hover:scale-105"
                                style={{
                                  background: `linear-gradient(135deg, ${clr.from}14, ${clr.to}14)`,
                                  borderColor: `${clr.from}40`,
                                  color: theme === 'dark' ? '#f1f5f9' : '#0f172a',
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="inline-flex p-6 rounded-full bg-white/5 border border-white/10 mb-6">
                <Search size={40} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-200">Aucun projet trouvé</h3>
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
        {renderProjectModal()}
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
        {renderAllProjectsView()}
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-500`}>
      {renderFormationModal()}
      {renderProjectModal()}
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
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'pro-experience', label: 'Expériences' },
              { id: 'projects', label: 'Projects' },
              { id: 'experience', label: 'Éducation' },
              { id: 'formation', label: 'Certifications' },
              { id: 'contact', label: 'Contact' },
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
                    className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-300 rounded-full ${isActive ? 'w-3/5 opacity-80' : 'w-0 opacity-0 group-hover:w-3/5 group-hover:opacity-60'
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
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'pro-experience', label: 'Expériences' },
              { id: 'projects', label: 'Projects' },
              { id: 'experience', label: 'Éducation' },
              { id: 'formation', label: 'Certifications' },
              { id: 'contact', label: 'Contact' },
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
        className={`min-h-screen flex items-center px-4 sm:px-6 pt-28 pb-16 relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-[#090910] via-[#0d0d1a] to-gray-900' : 'bg-gradient-to-b from-gray-50 via-slate-100/60 to-gray-50'}`}
      >
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse delay-1000" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 w-full">
          {/* Profile Image Column */}
          <div className="hidden lg:flex relative justify-center order-2 lg:order-1">
            <div className="relative group">
              {/* Outer glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-30 blur-2xl group-hover:opacity-60 transition-all duration-700 pointer-events-none" />

              <div
                className="relative rounded-3xl overflow-hidden p-2 transition-all duration-500 group-hover:scale-[1.02]"
                style={{
                  background: theme === 'dark' ? 'rgba(10,10,22,0.75)' : 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(28px)',
                  border: theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.08)',
                  boxShadow: `0 24px 64px rgba(0,0,0,${theme === 'dark' ? '0.5' : '0.1'})`,
                }}
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={profileImg}
                    alt="OUABEN Mohamed"
                    className="w-[320px] h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Status Floating Pill */}
              <div
                className="absolute -bottom-4 -right-4 px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 border backdrop-blur-xl transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.9), rgba(147,51,234,0.9))',
                  borderColor: 'rgba(255,255,255,0.25)',
                  boxShadow: '0 10px 30px rgba(147,51,234,0.4)',
                }}
              >
                <Sparkles size={16} className="text-yellow-300 animate-spin-slow" />
                <span className="font-bold text-white text-xs sm:text-sm tracking-wide">Disponible</span>
              </div>
            </div>
          </div>

          {/* Text & Stats Column */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-3 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                OUABEN Mohamed
              </span>
            </h1>

            <div className="text-2xl sm:text-3xl font-extrabold mb-5 tracking-tight text-gray-200">
              Développeur Full-Stack
            </div>

            <p className="text-sm sm:text-base text-gray-400 max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0">
              Développeur <span className="text-blue-400 font-semibold">Full-Stack web et mobile</span>, spécialisé dans la création d’applications modernes, performantes et{' '}
              <span className="text-purple-400 font-semibold">bien structurées</span> avec{' '}
              <span className="text-pink-400 font-semibold">Laravel, Node js/React, Spring Boot</span> et{' '}
              <span className="text-blue-400 font-semibold">Flutter</span>.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-10">
              {stats.map((stat, index) => {
                const statGradients = [
                  { border: 'rgba(6,182,212,0.4)', icon: 'text-cyan-400', glow: 'rgba(6,182,212,0.15)' },
                  { border: 'rgba(168,85,247,0.4)', icon: 'text-purple-400', glow: 'rgba(168,85,247,0.15)' },
                  { border: 'rgba(236,72,153,0.4)', icon: 'text-pink-400', glow: 'rgba(236,72,153,0.15)' },
                  { border: 'rgba(59,130,246,0.4)', icon: 'text-blue-400', glow: 'rgba(59,130,246,0.15)' },
                ];
                const cfg = statGradients[index % statGradients.length];

                return (
                  <div
                    key={index}
                    className="group relative rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div
                      className="relative rounded-2xl p-4 text-center overflow-hidden transition-all duration-300"
                      style={{
                        background: theme === 'dark' ? 'rgba(10,10,22,0.75)' : 'rgba(255,255,255,0.92)',
                        backdropFilter: 'blur(24px)',
                        border: theme === 'dark' ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.06)',
                        boxShadow: `0 10px 30px rgba(0,0,0,${theme === 'dark' ? '0.3' : '0.05'})`,
                      }}
                    >
                      <div className="flex justify-center mb-1.5 transition-transform duration-300 group-hover:scale-110">
                        <span className={cfg.icon}>{stat.icon}</span>
                      </div>
                      <div className={`text-2xl sm:text-3xl font-black mb-0.5 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {stat.value}
                      </div>
                      <div className="text-[11px] font-bold text-gray-400 tracking-wide uppercase">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3.5 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-7 py-3.5 rounded-2xl text-white font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg flex items-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
                  boxShadow: '0 8px 30px rgba(139,92,246,0.35)',
                }}
              >
                <span>Voir les Projets</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className={`px-6 py-3.5 rounded-2xl font-bold text-sm tracking-wide border transition-all duration-300 hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/15 text-gray-200 hover:bg-white/10 hover:border-white/30'
                    : 'bg-black/5 border-black/15 text-gray-800 hover:bg-black/10 hover:border-black/30'
                }`}
              >
                Me Contacter
              </button>

              <button
                className={`group px-6 py-3.5 rounded-2xl font-bold text-sm tracking-wide border transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
                  theme === 'dark'
                    ? 'bg-purple-500/10 border-purple-500/30 text-purple-300 hover:bg-purple-500/20 hover:border-purple-500/50'
                    : 'bg-purple-50 border-purple-300 text-purple-700 hover:bg-purple-100'
                }`}
              >
                <span>Télécharger CV</span>
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full text-gray-400 hover:text-white transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ChevronDown size={28} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-28 px-4 sm:px-6 relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 via-[#0d0d1a] to-gray-900' : 'bg-gradient-to-b from-gray-50 via-slate-100/60 to-gray-50'}`}>

        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Header */}
          <div className="text-center mb-20">
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-5 rounded-full border backdrop-blur-xl"
              style={{ background: 'rgba(139,92,246,0.08)', borderColor: 'rgba(139,92,246,0.25)', boxShadow: '0 0 30px rgba(139,92,246,0.1)' }}
            >
              <Award className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold tracking-widest uppercase text-purple-400">À propos de moi</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 tracking-tight"
              style={{ background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 50%, #93c5fd 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Créer l'Excellence Numérique
            </h2>
            <p className="text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
              Passionné par l'innovation et engagé pour la qualité
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">

            {/* Left Card: Presentation & Bio without outer/inner border */}
            <div className="group relative transition-all duration-500 hover:-translate-y-1.5 flex">
              {/* Outer hover glow without harsh border */}
              <div
                className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.12), rgba(59,130,246,0.12))' }}
              />

              {/* Card body - border and left bar removed */}
              <div
                className="relative w-full rounded-3xl overflow-hidden p-7 sm:p-9 flex flex-col justify-between"
                style={{
                  background: theme === 'dark' ? 'rgba(10,10,22,0.75)' : 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(28px)',
                  boxShadow: `0 24px 64px rgba(0,0,0,${theme === 'dark' ? '0.45' : '0.08'})`,
                }}
              >
                {/* Shimmer sweep */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out" />
                </div>

                <div className="space-y-6 relative z-10">
                  <h3
                    className="text-2xl sm:text-3xl font-extrabold leading-snug tracking-tight"
                    style={{ color: theme === 'dark' ? '#f1f5f9' : '#0f172a' }}
                  >
                    Bonjour ! Je suis{' '}
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      OUABEN Mohamed
                    </span>
                  </h3>

                  <p className={`text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Développeur Full-Stack web et mobile, je conçois et développe des applications modernes en utilisant des technologies telles que Laravel, React, Spring Boot et Kotlin.
                  </p>

                  <p className={`text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Actuellement étudiant en Master d’Excellence en Ingénierie Logicielle à l’Université Ibn Zohr d’Agadir (Maroc), je poursuis ma formation tout en renforçant mes compétences à travers des projets pratiques et innovants.
                  </p>

                  <p className={`text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Motivé, curieux et rigoureux, je suis à la recherche d’opportunités pour mettre en pratique mes connaissances et évoluer dans le domaine du développement logiciel.
                  </p>
                </div>

                {/* Status Badges */}
                <div className="pt-8 border-t border-white/8 mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 relative z-10">
                  <div
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border transition-all duration-300 hover:scale-105"
                    style={{
                      background: theme === 'dark' ? 'rgba(34,197,94,0.08)' : 'rgba(34,197,94,0.06)',
                      borderColor: 'rgba(34,197,94,0.25)',
                    }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span className="text-xs font-bold text-emerald-400">Stage / Emploi</span>
                  </div>

                  <div
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border transition-all duration-300 hover:scale-105"
                    style={{
                      background: theme === 'dark' ? 'rgba(59,130,246,0.08)' : 'rgba(59,130,246,0.06)',
                      borderColor: 'rgba(59,130,246,0.25)',
                    }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                    <span className="text-xs font-bold text-blue-400">Travail à distance</span>
                  </div>

                  <div
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border transition-all duration-300 hover:scale-105"
                    style={{
                      background: theme === 'dark' ? 'rgba(168,85,247,0.08)' : 'rgba(168,85,247,0.06)',
                      borderColor: 'rgba(168,85,247,0.25)',
                    }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
                    <span className="text-xs font-bold text-purple-400">Projets académiques</span>
                  </div>
                </div>
              </div>
            </div>


            {/* Right Card: Aperçu des Technologies */}
            <div className="group relative transition-all duration-500 hover:-translate-y-1.5 flex">
              {/* Outer hover ring */}
              <div
                className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ border: '1px solid rgba(168,85,247,0.5)', background: 'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(236,72,153,0.1))' }}
              />

              {/* Card body */}
              <div
                className="relative w-full rounded-3xl overflow-hidden p-7 sm:p-9 flex flex-col justify-between"
                style={{
                  background: theme === 'dark' ? 'rgba(10,10,22,0.75)' : 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(28px)',
                  border: theme === 'dark' ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.06)',
                  boxShadow: `0 24px 64px rgba(0,0,0,${theme === 'dark' ? '0.45' : '0.08'}), inset 0 1px 0 rgba(255,255,255,0.05)`,
                }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 group-hover:w-[5px] transition-all duration-500 rounded-l-3xl"
                  style={{ background: 'linear-gradient(to bottom, #a855f7, #ec4899)' }}
                />

                {/* Shimmer sweep */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                      <Zap size={20} />
                    </div>
                    <h3
                      className="text-xl sm:text-2xl font-extrabold tracking-tight"
                      style={{ color: theme === 'dark' ? '#f1f5f9' : '#0f172a' }}
                    >
                      Aperçu des Technologies
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {/* Front-end */}
                    <div
                      className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        background: theme === 'dark' ? 'rgba(59,130,246,0.06)' : 'rgba(59,130,246,0.04)',
                        borderColor: 'rgba(59,130,246,0.18)',
                      }}
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 shrink-0">
                        <Code size={22} />
                      </div>
                      <div>
                        <p className={`font-bold text-sm sm:text-base ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                          Développement Front-end
                        </p>
                        <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                          React.js, HTML/CSS/JS, Tailwind, Flutter
                        </p>
                      </div>
                    </div>

                    {/* Back-end */}
                    <div
                      className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        background: theme === 'dark' ? 'rgba(34,197,94,0.06)' : 'rgba(34,197,94,0.04)',
                        borderColor: 'rgba(34,197,94,0.18)',
                      }}
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 shrink-0">
                        <Server size={22} />
                      </div>
                      <div>
                        <p className={`font-bold text-sm sm:text-base ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                          Développement Back-end
                        </p>
                        <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                          Laravel, Spring Boot, Node.js, ASP.NET
                        </p>
                      </div>
                    </div>

                    {/* Databases */}
                    <div
                      className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        background: theme === 'dark' ? 'rgba(168,85,247,0.06)' : 'rgba(168,85,247,0.04)',
                        borderColor: 'rgba(168,85,247,0.18)',
                      }}
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 shrink-0">
                        <Database size={22} />
                      </div>
                      <div>
                        <p className={`font-bold text-sm sm:text-base ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                          Gestion de Bases de Données
                        </p>
                        <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                          MySQL, PostgreSQL, SQL Server, Room
                        </p>
                      </div>
                    </div>

                    {/* Mobile & Tools */}
                    <div
                      className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        background: theme === 'dark' ? 'rgba(249,115,22,0.06)' : 'rgba(249,115,22,0.04)',
                        borderColor: 'rgba(249,115,22,0.18)',
                      }}
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 text-orange-400 shrink-0">
                        <Wrench size={22} />
                      </div>
                      <div>
                        <p className={`font-bold text-sm sm:text-base ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                          Mobile & Tools
                        </p>
                        <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                          Kotlin, Jetpack Compose, Docker, Git/GitHub
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-28 px-4 sm:px-6 relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 via-[#0d0d1a] to-gray-900' : 'bg-gradient-to-b from-gray-50 via-slate-100/60 to-gray-50'}`}>

        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Header */}
          <div className="text-center mb-20">
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-5 rounded-full border backdrop-blur-xl"
              style={{ background: 'rgba(139,92,246,0.08)', borderColor: 'rgba(139,92,246,0.25)', boxShadow: '0 0 30px rgba(139,92,246,0.1)' }}
            >
              <Code className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold tracking-widest uppercase text-purple-400">Expertise Technique</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 tracking-tight"
              style={{ background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 50%, #93c5fd 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Expertise Technique
            </h2>
            <p className="text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
              Maîtrise complète de la pile de développement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => {
              const categoryConfig = {
                frontend: {
                  label: 'Front-end',
                  icon: <Code size={20} />,
                  from: '#06b6d4',
                  to: '#3b82f6',
                  glow: 'rgba(6,182,212,0.22)',
                },
                backend: {
                  label: 'Back-end',
                  icon: <Server size={20} />,
                  from: '#10b981',
                  to: '#06b6d4',
                  glow: 'rgba(16,185,129,0.22)',
                },
                mobile: {
                  label: 'Mobile',
                  icon: <Smartphone size={20} />,
                  from: '#a855f7',
                  to: '#ec4899',
                  glow: 'rgba(168,85,247,0.22)',
                },
                database: {
                  label: 'Base de données',
                  icon: <Database size={20} />,
                  from: '#6366f1',
                  to: '#a855f7',
                  glow: 'rgba(99,102,241,0.22)',
                },
                devops: {
                  label: 'DevOps',
                  icon: <Wrench size={20} />,
                  from: '#f97316',
                  to: '#ef4444',
                  glow: 'rgba(249,115,22,0.22)',
                },
                data: {
                  label: 'Données',
                  icon: <BarChart3 size={20} />,
                  from: '#eab308',
                  to: '#f97316',
                  glow: 'rgba(234,179,8,0.22)',
                },
              };

              const cfg = categoryConfig[category] || {
                label: category,
                icon: <Code size={20} />,
                from: '#3b82f6',
                to: '#8b5cf6',
                glow: 'rgba(59,130,246,0.22)',
              };

              return (
                <div
                  key={category}
                  className="group relative transition-all duration-500 hover:-translate-y-1.5 flex"
                >
                  {/* Outer hover ring */}
                  <div
                    className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      border: `1px solid ${cfg.from}50`,
                      background: `linear-gradient(135deg, ${cfg.from}10, ${cfg.to}10)`,
                    }}
                  />

                  {/* Card body */}
                  <div
                    className="relative w-full rounded-3xl overflow-hidden p-6 sm:p-7 flex flex-col justify-between"
                    style={{
                      background: theme === 'dark' ? 'rgba(10,10,22,0.75)' : 'rgba(255,255,255,0.92)',
                      backdropFilter: 'blur(28px)',
                      border: theme === 'dark' ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.06)',
                      boxShadow: `0 20px 50px rgba(0,0,0,${theme === 'dark' ? '0.4' : '0.08'}), inset 0 1px 0 rgba(255,255,255,0.05)`,
                    }}
                  >
                    {/* Top accent bar */}
                    <div
                      className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(to right, ${cfg.from}, ${cfg.to})` }}
                    />

                    {/* Shimmer sweep */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out" />
                    </div>

                    <div className="relative z-10">
                      {/* Header Category Title */}
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110"
                          style={{
                            background: `linear-gradient(135deg, ${cfg.from}20, ${cfg.to}20)`,
                            borderColor: `${cfg.from}40`,
                            color: cfg.from,
                            boxShadow: `0 4px 20px ${cfg.glow}`,
                          }}
                        >
                          {cfg.icon}
                        </div>
                        <h3
                          className="text-lg font-black tracking-tight"
                          style={{ color: theme === 'dark' ? '#f1f5f9' : '#0f172a' }}
                        >
                          {cfg.label}
                        </h3>
                      </div>

                      {/* Skill items */}
                      <div className="space-y-4">
                        {items.map((skill) => (
                          <div key={skill.name} className="group/item">
                            <div className="flex justify-between items-center mb-1.5">
                              <span
                                className={`text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                                  theme === 'dark' ? 'text-gray-300 group-hover/item:text-white' : 'text-gray-700 group-hover/item:text-black'
                                }`}
                              >
                                {skill.name}
                              </span>
                              <span
                                className="text-xs font-bold transition-colors duration-200"
                                style={{ color: cfg.from }}
                              >
                                {skill.level}%
                              </span>
                            </div>

                            {/* Progress bar track */}
                            <div
                              className="h-2 rounded-full overflow-hidden p-0.5"
                              style={{
                                background: theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                              }}
                            >
                              <div
                                className="h-full rounded-full transition-all duration-1000 ease-out"
                                style={{
                                  width: `${skill.level}%`,
                                  background: `linear-gradient(90deg, ${cfg.from}, ${cfg.to})`,
                                  boxShadow: `0 0 10px ${cfg.glow}`,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expérience Professionnelle Section */}
      <section id="pro-experience" className={`py-28 px-4 sm:px-6 relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 via-[#0d0d1a] to-gray-900' : 'bg-gradient-to-b from-gray-50 via-slate-100/60 to-gray-50'}`}>

        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">

          {/* Header */}
          <div className="text-center mb-20">
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-5 rounded-full border backdrop-blur-xl"
              style={{ background: 'rgba(139,92,246,0.08)', borderColor: 'rgba(139,92,246,0.25)', boxShadow: '0 0 30px rgba(139,92,246,0.1)' }}
            >
              <Briefcase className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold tracking-widest uppercase text-purple-400">
                Parcours en Entreprise
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 50%, #93c5fd 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Expérience Professionnelle
            </h2>
            <p className="text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
              Immersions stratégiques en entreprise axées sur le développement Full-Stack, Mobile
            </p>
          </div>

          {/* Cards — split layout */}
          <div className="flex flex-col gap-8">
            {professionalExperiences.map((exp, index) => {
              const clr = index === 0
                ? { from: '#06b6d4', to: '#3b82f6', glow: 'rgba(6,182,212,0.22)' }
                : { from: '#a855f7', to: '#ec4899', glow: 'rgba(168,85,247,0.22)' };

              return (
                <div key={exp.id} className="group relative transition-all duration-500 hover:-translate-y-1.5">

                  {/* Outer hover ring */}
                  <div
                    className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ border: `1px solid ${clr.from}50`, background: `linear-gradient(135deg, ${clr.from}10, ${clr.to}10)` }}
                  />

                  {/* Card body */}
                  <div
                    className="relative rounded-3xl overflow-hidden"
                    style={{
                      background: theme === 'dark' ? 'rgba(10,10,22,0.75)' : 'rgba(255,255,255,0.92)',
                      backdropFilter: 'blur(28px)',
                      border: theme === 'dark' ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.06)',
                      boxShadow: `0 24px 64px rgba(0,0,0,${theme === 'dark' ? '0.45' : '0.08'}), inset 0 1px 0 rgba(255,255,255,0.05)`,
                    }}
                  >
                    {/* Left accent bar */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1 group-hover:w-[5px] transition-all duration-500 rounded-l-3xl"
                      style={{ background: `linear-gradient(to bottom, ${clr.from}, ${clr.to})` }}
                    />

                    {/* Shimmer sweep */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out" />
                    </div>

                    {/* Inner layout */}
                    <div className="ml-1 flex flex-col sm:flex-row">

                      {/* LEFT: Company Identity Panel */}
                      <div
                        className="flex flex-row sm:flex-col items-center gap-5 px-6 py-7 sm:w-52 sm:shrink-0 sm:justify-center"
                        style={{ borderRight: theme === 'dark' ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)' }}
                      >
                        <div
                          className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl bg-white p-2.5 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110"
                          style={{ boxShadow: `0 0 0 2px rgba(255,255,255,0.08), 0 8px 32px ${clr.glow}` }}
                        >
                          <img src={exp.logo} alt="" className="w-full h-full object-contain" />
                        </div>

                        <div className="flex flex-col gap-2 sm:items-center sm:text-center">
                          <p className={`text-sm font-extrabold leading-snug ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap items-center gap-1.5 sm:justify-center">
                            <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-blue-500/10 text-blue-400 border border-blue-500/25">
                              Stage
                            </span>
                            <span className={`text-[10px] font-bold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                              • {exp.duration}
                            </span>
                          </div>
                          <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-semibold border ${theme === 'dark' ? 'bg-white/5 text-gray-300 border-white/10' : 'bg-gray-100 text-gray-500 border-gray-200'}`}>
                            <Calendar size={10} className="text-purple-400 shrink-0" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* RIGHT: Role + Achievements + Stack */}
                      <div className="flex flex-col gap-5 flex-1 min-w-0 px-6 py-7">

                        <div>
                          <h3
                            className="text-lg sm:text-xl lg:text-2xl font-extrabold mb-3 leading-snug tracking-tight"
                            style={{ color: theme === 'dark' ? '#f1f5f9' : '#0f172a' }}
                          >
                            {exp.role}
                          </h3>
                          <span
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-bold tracking-wide border"
                            style={{ background: `linear-gradient(135deg, ${clr.from}18, ${clr.to}14)`, borderColor: `${clr.from}40`, color: clr.from }}
                          >
                            <Zap size={11} />
                            {exp.domain}
                          </span>
                        </div>

                        <ul className="space-y-2">
                          {exp.achievements.map((item, idx) => (
                            <li
                              key={idx}
                              className={`flex items-start gap-3 px-3 py-2.5 rounded-xl border border-transparent transition-all duration-200 ${theme === 'dark' ? 'hover:bg-white/[0.03] hover:border-white/5' : 'hover:bg-gray-50 hover:border-gray-200'}`}
                            >
                              <div
                                className="mt-0.5 w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                                style={{ background: `linear-gradient(135deg, ${clr.from}, ${clr.to})` }}
                              >
                                <CheckCircle size={11} className="text-white" />
                              </div>
                              <span className={`text-xs sm:text-sm font-medium leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className={`pt-4 border-t ${theme === 'dark' ? 'border-white/8' : 'border-gray-100'}`}>
                          <p className="text-[10px] font-black uppercase tracking-[0.14em] text-gray-500 mb-2.5 flex items-center gap-1.5">
                            <Wrench size={10} className="text-yellow-400" />
                            Stack Technique
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.stack.map((tech) => (
                              <span
                                key={tech.name}
                                className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg border transition-all duration-200 hover:scale-105 ${tech.color}`}
                              >
                                {tech.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-28 px-4 sm:px-6 relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 via-[#0d0d1a] to-gray-900' : 'bg-gradient-to-b from-gray-50 via-slate-100/60 to-gray-50'}`}>

        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Header */}
          <div className="text-center mb-20">
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-5 rounded-full border backdrop-blur-xl"
              style={{ background: 'rgba(139,92,246,0.08)', borderColor: 'rgba(139,92,246,0.25)', boxShadow: '0 0 30px rgba(139,92,246,0.1)' }}
            >
              <Briefcase className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold tracking-widest uppercase text-purple-400">Projets Phares</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 tracking-tight"
              style={{ background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 50%, #93c5fd 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Projets Phares
            </h2>
            <p className="text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
              Présentation de solutions innovantes et d'implémentations modernes
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 8).map((project, index) => {
              const projectPalette = [
                { from: '#06b6d4', to: '#3b82f6', glow: 'rgba(6,182,212,0.25)' },
                { from: '#a855f7', to: '#ec4899', glow: 'rgba(168,85,247,0.25)' },
                { from: '#3b82f6', to: '#6366f1', glow: 'rgba(59,130,246,0.25)' },
                { from: '#10b981', to: '#06b6d4', glow: 'rgba(16,185,129,0.25)' },
                { from: '#f97316', to: '#eab308', glow: 'rgba(249,115,22,0.25)' },
                { from: '#8b5cf6', to: '#d946ef', glow: 'rgba(139,92,246,0.25)' },
                { from: '#ec4899', to: '#f43f5e', glow: 'rgba(236,72,153,0.25)' },
                { from: '#06b6d4', to: '#10b981', glow: 'rgba(6,182,212,0.25)' },
              ];
              const clr = projectPalette[index % projectPalette.length];

              return (
                <div
                  key={index}
                  className={`group relative rounded-3xl cursor-pointer transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                    project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                  onClick={() => {
                    setSelectedProjectScreenshots(project.screenshots);
                    setCurrentScreenshotIndex(0);
                  }}
                >
                  {/* Outer hover ring */}
                  <div
                    className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      border: `1px solid ${clr.from}50`,
                      background: `linear-gradient(135deg, ${clr.from}12, ${clr.to}12)`,
                    }}
                  />

                  {/* Card Body */}
                  <div
                    className="relative w-full h-full flex flex-col justify-between rounded-3xl overflow-hidden"
                    style={{
                      background: theme === 'dark' ? 'rgba(10,10,22,0.75)' : 'rgba(255,255,255,0.92)',
                      backdropFilter: 'blur(28px)',
                      border: theme === 'dark' ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.06)',
                      boxShadow: `0 24px 64px rgba(0,0,0,${theme === 'dark' ? '0.45' : '0.08'}), inset 0 1px 0 rgba(255,255,255,0.05)`,
                    }}
                  >
                    {/* Top accent bar */}
                    <div
                      className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 z-20"
                      style={{ background: `linear-gradient(to right, ${clr.from}, ${clr.to})` }}
                    />

                    {/* Shimmer sweep */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl z-20">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out" />
                    </div>

                    <div>
                      {/* Image Header */}
                      <div className={`relative overflow-hidden w-full shrink-0 ${project.featured ? 'h-56 sm:h-64' : 'h-48 sm:h-52'}`}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-4 left-4 z-10">
                            <span
                              className="px-3.5 py-1 rounded-full text-white text-[10px] font-extrabold tracking-widest uppercase backdrop-blur-md shadow-lg border border-white/20"
                              style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.9), rgba(168,85,247,0.9))' }}
                            >
                              En vedette
                            </span>
                          </div>
                        )}

                        {/* Quick view text overlay on hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                          <span className="px-5 py-2.5 rounded-full bg-black/70 text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-white/20 flex items-center gap-2 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                            <Search size={15} className="text-purple-300" /> Voir les images
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex justify-between items-start gap-3 mb-3">
                          <h3
                            className="text-lg sm:text-xl font-extrabold leading-snug tracking-tight transition-colors duration-300 group-hover:text-blue-400"
                            style={{ color: theme === 'dark' ? '#f1f5f9' : '#0f172a' }}
                          >
                            {project.title}
                          </h3>

                          {/* Action Links */}
                          <div className="flex gap-1.5 shrink-0">
                            <a
                              href={project.github}
                              onClick={(e) => e.stopPropagation()}
                              className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 hover:scale-110 border ${
                                theme === 'dark'
                                  ? 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                                  : 'bg-black/5 hover:bg-black/10 text-gray-700 border-black/10'
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
                              className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 hover:scale-110 border ${
                                theme === 'dark'
                                  ? 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                                  : 'bg-black/5 hover:bg-black/10 text-gray-700 border-black/10'
                              }`}
                            >
                              <ExternalLink size={14} />
                            </button>
                          </div>
                        </div>

                        <p className={`text-xs sm:text-sm leading-relaxed mb-5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div className="px-6 pb-6 pt-0">
                      <div className={`pt-4 border-t ${theme === 'dark' ? 'border-white/8' : 'border-gray-100'}`}>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 text-[11px] font-semibold rounded-lg border transition-all duration-200 hover:scale-105"
                              style={{
                                background: `linear-gradient(135deg, ${clr.from}14, ${clr.to}14)`,
                                borderColor: `${clr.from}40`,
                                color: theme === 'dark' ? '#f1f5f9' : '#0f172a',
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => {
                setShowAllProjects(true);
                window.scrollTo(0, 0);
              }}
              className="group px-8 py-4 rounded-2xl text-white font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg inline-flex items-center gap-2.5 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
                boxShadow: '0 10px 30px rgba(139,92,246,0.35)',
              }}
            >
              <span>Voir Tous les Projets</span>
              <ExternalLink size={17} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Eduction Timeline */}
      <section id="experience" className={`py-28 px-4 sm:px-6 relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 via-[#0d0d1a] to-gray-900' : 'bg-gradient-to-b from-gray-50 via-slate-100/60 to-gray-50'}`}>

        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-5 rounded-full border backdrop-blur-xl"
              style={{ background: 'rgba(139,92,246,0.08)', borderColor: 'rgba(139,92,246,0.25)', boxShadow: '0 0 30px rgba(139,92,246,0.1)' }}
            >
              <Clock className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold tracking-widest uppercase text-purple-400">Jalons Éducatifs</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 tracking-tight"
              style={{ background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 50%, #93c5fd 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Parcours Professionnel
            </h2>
            <p className="text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
              Évolution académique et jalons de formation d'excellence
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.4) 15%, rgba(168,85,247,0.4) 85%, transparent)'
                  : 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.3) 15%, rgba(168,85,247,0.3) 85%, transparent)',
              }}
            />

            {experience.map((item, index) => {
              const clr = index === 0
                ? { from: '#06b6d4', to: '#3b82f6' }
                : index === 1
                  ? { from: '#a855f7', to: '#ec4899' }
                  : { from: '#3b82f6', to: '#8b5cf6' };

              return (
                <div
                  key={index}
                  className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'} group`}
                >
                  {/* Outer hover ring */}
                  <div
                    className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ border: `1px solid ${clr.from}50`, background: `linear-gradient(135deg, ${clr.from}10, ${clr.to}10)` }}
                  />

                  {/* Card Body */}
                  <div
                    className="relative rounded-3xl overflow-hidden p-7 sm:p-8 ml-8 md:ml-0 transition-all duration-500 group-hover:-translate-y-1.5"
                    style={{
                      background: theme === 'dark' ? 'rgba(10,10,22,0.75)' : 'rgba(255,255,255,0.92)',
                      backdropFilter: 'blur(28px)',
                      border: theme === 'dark' ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.06)',
                      boxShadow: `0 20px 50px rgba(0,0,0,${theme === 'dark' ? '0.4' : '0.08'}), inset 0 1px 0 rgba(255,255,255,0.05)`,
                    }}
                  >
                    {/* Top Accent bar */}
                    <div
                      className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(to right, ${clr.from}, ${clr.to})` }}
                    />

                    {/* Shimmer sweep */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out" />
                    </div>

                    <div className={`flex flex-wrap items-center gap-2 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border"
                        style={{
                          background: `linear-gradient(135deg, ${clr.from}15, ${clr.to}15)`,
                          borderColor: `${clr.from}30`,
                          color: clr.from,
                        }}
                      >
                        <Calendar size={11} />
                        {item.year}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        Éducation
                      </span>
                    </div>

                    <h3
                      className="text-xl sm:text-2xl font-extrabold mb-2 leading-snug tracking-tight transition-colors duration-300 group-hover:text-blue-400"
                      style={{ color: theme === 'dark' ? '#f1f5f9' : '#0f172a' }}
                    >
                      {item.role}
                    </h3>
                    <p className="text-sm font-bold text-purple-400 mb-4">{item.company}</p>
                    <p className={`text-xs sm:text-sm mb-5 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.description}
                    </p>

                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:items-end' : ''}`}>
                      {item.achievements?.map((achievement, i) => (
                        <li key={i} className={`flex items-start gap-2.5 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                          <div
                            className="mt-1 w-2 h-2 rounded-full shrink-0"
                            style={{ background: `linear-gradient(135deg, ${clr.from}, ${clr.to})` }}
                          />
                          <span className="text-xs sm:text-sm text-gray-400">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Node Dot on Timeline */}
                  <div
                    className={`absolute left-0 md:left-1/2 top-8 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-2 transition-all duration-500 group-hover:scale-125`}
                    style={{
                      background: clr.from,
                      borderColor: '#ffffff',
                      boxShadow: `0 0 16px ${clr.from}`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formation / Certifications Section */}
      <section id="formation" className={`py-28 px-4 sm:px-6 relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 via-[#0d0d1a] to-gray-900' : 'bg-gradient-to-b from-gray-50 via-slate-100/60 to-gray-50'}`}>

        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Header */}
          <div className="text-center mb-20">
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-5 rounded-full border backdrop-blur-xl"
              style={{ background: 'rgba(139,92,246,0.08)', borderColor: 'rgba(139,92,246,0.25)', boxShadow: '0 0 30px rgba(139,92,246,0.1)' }}
            >
              <Award className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold tracking-widest uppercase text-purple-400">Éducation & Certifications</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 tracking-tight"
              style={{ background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 50%, #93c5fd 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Ma Formation
            </h2>
            <p className="text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
              Apprentissage continu et développement professionnel via des formations certifiées
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formations.map((formation, index) => {
              const palette = [
                { from: '#06b6d4', to: '#3b82f6', glow: 'rgba(6,182,212,0.25)' },
                { from: '#f97316', to: '#eab308', glow: 'rgba(249,115,22,0.25)' },
                { from: '#3b82f6', to: '#6366f1', glow: 'rgba(59,130,246,0.25)' },
                { from: '#a855f7', to: '#ec4899', glow: 'rgba(168,85,247,0.25)' },
                { from: '#10b981', to: '#06b6d4', glow: 'rgba(16,185,129,0.25)' },
                { from: '#8b5cf6', to: '#d946ef', glow: 'rgba(139,92,246,0.25)' },
              ];
              const clr = palette[index % palette.length];

              return (
                <div
                  key={formation.id}
                  className="group relative transition-all duration-500 hover:-translate-y-2 flex cursor-pointer"
                  onClick={() => setSelectedFormation(formation)}
                >
                  {/* Outer hover ring */}
                  <div
                    className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      border: `1px solid ${clr.from}60`,
                      background: `linear-gradient(135deg, ${clr.from}15, ${clr.to}15)`,
                    }}
                  />

                  {/* Card body */}
                  <div
                    className="relative w-full rounded-3xl overflow-hidden flex flex-col justify-between"
                    style={{
                      background: theme === 'dark' ? 'rgba(10,10,22,0.75)' : 'rgba(255,255,255,0.92)',
                      backdropFilter: 'blur(28px)',
                      border: theme === 'dark' ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.06)',
                      boxShadow: `0 20px 50px rgba(0,0,0,${theme === 'dark' ? '0.4' : '0.08'}), inset 0 1px 0 rgba(255,255,255,0.05)`,
                    }}
                  >
                    {/* Top accent bar */}
                    <div
                      className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 z-20"
                      style={{ background: `linear-gradient(to right, ${clr.from}, ${clr.to})` }}
                    />

                    {/* Shimmer sweep */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl z-20">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out" />
                    </div>

                    <div>
                      {/* Image Header */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={formation.image}
                          alt={formation.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                        {/* Date badge */}
                        <div className="absolute top-4 right-4 z-10">
                          <span
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-md border border-white/20 shadow-lg"
                            style={{ background: 'rgba(0, 0, 0, 0.55)' }}
                          >
                            <Calendar size={12} className="text-purple-300" />
                            {formation.date}
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        <h3
                          className="text-lg sm:text-xl font-extrabold mb-2 leading-snug tracking-tight transition-colors duration-300 group-hover:text-blue-400"
                          style={{ color: theme === 'dark' ? '#f1f5f9' : '#0f172a' }}
                        >
                          {formation.title}
                        </h3>

                        <p
                          className="text-xs sm:text-sm font-bold mb-4 flex items-center gap-1.5"
                          style={{ color: clr.from }}
                        >
                          <Building2 size={14} />
                          {formation.issuer}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {formation.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg border transition-all duration-200 hover:scale-105 ${
                                theme === 'dark'
                                  ? 'bg-white/5 border-white/10 text-gray-300'
                                  : 'bg-black/5 border-black/10 text-gray-700'
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="px-6 pb-6 pt-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (formation.certificateUrl) {
                            window.open(formation.certificateUrl, '_blank');
                          } else {
                            setSelectedFormation(formation);
                          }
                        }}
                        className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border transition-all duration-300 hover:scale-[1.02] shadow-sm"
                        style={{
                          background: `linear-gradient(135deg, ${clr.from}18, ${clr.to}18)`,
                          borderColor: `${clr.from}40`,
                          color: theme === 'dark' ? '#e2e8f0' : '#1e293b',
                        }}
                      >
                        <Search size={14} className="text-purple-400" />
                        <span>Voir le Certificat</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-28 px-4 sm:px-6 relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 via-[#0d0d1a] to-[#080811]' : 'bg-gradient-to-b from-gray-50 via-slate-100/60 to-gray-100'}`}>

        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Header */}
          <div className="text-center mb-20">
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-5 rounded-full border backdrop-blur-xl"
              style={{ background: 'rgba(139,92,246,0.08)', borderColor: 'rgba(139,92,246,0.25)', boxShadow: '0 0 30px rgba(139,92,246,0.1)' }}
            >
              <Mail className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold tracking-widest uppercase text-purple-400">Contactez-moi</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 tracking-tight"
              style={{ background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 50%, #93c5fd 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Contactez-moi
            </h2>
            <p className="text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
              Prêt à concrétiser votre vision ? Parlons de votre projet
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">

            {/* Left Card: Commencer un Projet - border removed */}
            <div className="group relative transition-all duration-500 hover:-translate-y-1.5 flex">
              <div
                className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.12), rgba(59,130,246,0.12))' }}
              />

              <div
                className="relative w-full rounded-3xl overflow-hidden p-7 sm:p-9 flex flex-col justify-between"
                style={{
                  background: theme === 'dark' ? 'rgba(10,10,22,0.75)' : 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(28px)',
                  boxShadow: `0 24px 64px rgba(0,0,0,${theme === 'dark' ? '0.45' : '0.08'})`,
                }}
              >
                {/* Shimmer sweep */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out" />
                </div>

                <div className="relative z-10">
                  <h3
                    className="text-2xl sm:text-3xl font-extrabold mb-4 leading-snug tracking-tight"
                    style={{ color: theme === 'dark' ? '#f1f5f9' : '#0f172a' }}
                  >
                    Commencer un <span className="text-blue-400">Projet</span>
                  </h3>
                  <p className={`text-sm sm:text-base mb-8 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Je suis toujours intéressé par de nouveaux projets et opportunités. N'hésitez pas à me contacter pour discuter de votre projet !
                  </p>

                  <div className="space-y-4">
                    {/* Email Card */}
                    <a
                      href="mailto:ouabenmohamed74@gmail.com"
                      className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 hover:scale-[1.02] group/link"
                      style={{
                        background: theme === 'dark' ? 'rgba(59,130,246,0.06)' : 'rgba(59,130,246,0.04)',
                        borderColor: 'rgba(59,130,246,0.2)',
                      }}
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 shrink-0 group-hover/link:scale-110 transition-transform">
                        <Mail size={22} />
                      </div>
                      <div className="min-w-0">
                        <p className={`font-bold text-xs uppercase tracking-wider text-gray-400`}>Email</p>
                        <p className={`text-sm sm:text-base font-semibold truncate ${theme === 'dark' ? 'text-gray-100 group-hover/link:text-blue-400' : 'text-gray-900 group-hover/link:text-blue-600'} transition-colors`}>
                          ouabenmohamed74@gmail.com
                        </p>
                      </div>
                    </a>

                    {/* GitHub Card */}
                    <a
                      href="https://github.com/OUABEN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 hover:scale-[1.02] group/link"
                      style={{
                        background: theme === 'dark' ? 'rgba(168,85,247,0.06)' : 'rgba(168,85,247,0.04)',
                        borderColor: 'rgba(168,85,247,0.2)',
                      }}
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 shrink-0 group-hover/link:scale-110 transition-transform">
                        <Github size={22} />
                      </div>
                      <div className="min-w-0">
                        <p className={`font-bold text-xs uppercase tracking-wider text-gray-400`}>GitHub</p>
                        <p className={`text-sm sm:text-base font-semibold truncate ${theme === 'dark' ? 'text-gray-100 group-hover/link:text-purple-400' : 'text-gray-900 group-hover/link:text-purple-600'} transition-colors`}>
                          https://github.com/OUABEN
                        </p>
                      </div>
                    </a>

                    {/* LinkedIn Card */}
                    <a
                      href="https://linkedin.com/in/mohamed-ouaben"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 hover:scale-[1.02] group/link"
                      style={{
                        background: theme === 'dark' ? 'rgba(59,130,246,0.06)' : 'rgba(59,130,246,0.04)',
                        borderColor: 'rgba(59,130,246,0.2)',
                      }}
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600/20 to-indigo-500/20 border border-blue-500/30 text-blue-400 shrink-0 group-hover/link:scale-110 transition-transform">
                        <Linkedin size={22} />
                      </div>
                      <div className="min-w-0">
                        <p className={`font-bold text-xs uppercase tracking-wider text-gray-400`}>LinkedIn</p>
                        <p className={`text-sm sm:text-base font-semibold truncate ${theme === 'dark' ? 'text-gray-100 group-hover/link:text-blue-400' : 'text-gray-900 group-hover/link:text-blue-600'} transition-colors`}>
                          linkedin.com/in/mohamed-ouaben
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Envoyer un Message */}
            <div className="group relative transition-all duration-500 hover:-translate-y-1.5 flex">
              <div
                className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ border: '1px solid rgba(168,85,247,0.5)', background: 'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(236,72,153,0.1))' }}
              />

              <div
                className="relative w-full rounded-3xl overflow-hidden p-7 sm:p-9 flex flex-col justify-between"
                style={{
                  background: theme === 'dark' ? 'rgba(10,10,22,0.75)' : 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(28px)',
                  border: theme === 'dark' ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.06)',
                  boxShadow: `0 24px 64px rgba(0,0,0,${theme === 'dark' ? '0.45' : '0.08'}), inset 0 1px 0 rgba(255,255,255,0.05)`,
                }}
              >
                {/* Left Accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 group-hover:w-[5px] transition-all duration-500 rounded-l-3xl"
                  style={{ background: 'linear-gradient(to bottom, #a855f7, #ec4899)' }}
                />

                {/* Shimmer sweep */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out" />
                </div>

                <div className="relative z-10 w-full">
                  <h3
                    className="text-2xl sm:text-3xl font-extrabold mb-6 tracking-tight"
                    style={{ color: theme === 'dark' ? '#f1f5f9' : '#0f172a' }}
                  >
                    Envoyer un Message
                  </h3>

                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <input type="hidden" name="form-name" value="contact" />

                    <p className="hidden">
                      <label>
                        Don’t fill this out if you're human:{' '}
                        <input name="bot-field" onChange={(e) => setFormData({ ...formData, 'bot-field': e.target.value })} />
                      </label>
                    </p>

                    <div className="relative group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`peer w-full px-4 py-3.5 rounded-2xl border ${
                          theme === 'dark'
                            ? 'bg-white/5 border-white/10 text-white focus:border-purple-400 focus:bg-white/[0.08]'
                            : 'bg-black/5 border-black/10 text-gray-900 focus:border-purple-500 focus:bg-white'
                        } focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 placeholder-transparent text-sm font-medium`}
                        placeholder="John Doe"
                      />
                      <label
                        htmlFor="name"
                        className={`absolute left-4 top-3.5 text-xs font-semibold transition-all duration-300 cursor-text
                          peer-placeholder-shown:text-sm peer-placeholder-shown:top-3.5
                          peer-focus:-top-2.5 peer-focus:text-[11px] peer-focus:px-2
                          ${formData.name ? '-top-2.5 text-[11px] px-2' : ''}
                          ${theme === 'dark' ? 'text-gray-400 peer-focus:text-purple-400' : 'text-gray-500 peer-focus:text-purple-600'}
                        `}
                        style={{ background: formData.name ? (theme === 'dark' ? '#0d0d1a' : '#ffffff') : 'transparent' }}
                      >
                        Nom Complet
                      </label>
                    </div>

                    <div className="relative group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`peer w-full px-4 py-3.5 rounded-2xl border ${
                          theme === 'dark'
                            ? 'bg-white/5 border-white/10 text-white focus:border-purple-400 focus:bg-white/[0.08]'
                            : 'bg-black/5 border-black/10 text-gray-900 focus:border-purple-500 focus:bg-white'
                        } focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 placeholder-transparent text-sm font-medium`}
                        placeholder="john@example.com"
                      />
                      <label
                        htmlFor="email"
                        className={`absolute left-4 top-3.5 text-xs font-semibold transition-all duration-300 cursor-text
                          peer-placeholder-shown:text-sm peer-placeholder-shown:top-3.5
                          peer-focus:-top-2.5 peer-focus:text-[11px] peer-focus:px-2
                          ${formData.email ? '-top-2.5 text-[11px] px-2' : ''}
                          ${theme === 'dark' ? 'text-gray-400 peer-focus:text-purple-400' : 'text-gray-500 peer-focus:text-purple-600'}
                        `}
                        style={{ background: formData.email ? (theme === 'dark' ? '#0d0d1a' : '#ffffff') : 'transparent' }}
                      >
                        Adresse Email
                      </label>
                    </div>

                    <div className="relative group">
                      <textarea
                        id="message"
                        name="message"
                        required
                        minLength="10"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows="4"
                        className={`peer w-full px-4 py-3.5 rounded-2xl border ${
                          theme === 'dark'
                            ? 'bg-white/5 border-white/10 text-white focus:border-purple-400 focus:bg-white/[0.08]'
                            : 'bg-black/5 border-black/10 text-gray-900 focus:border-purple-500 focus:bg-white'
                        } focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 placeholder-transparent resize-none text-sm font-medium`}
                        placeholder="Tell me about your project..."
                      />
                      <label
                        htmlFor="message"
                        className={`absolute left-4 top-3.5 text-xs font-semibold transition-all duration-300 cursor-text
                          peer-placeholder-shown:text-sm peer-placeholder-shown:top-3.5
                          peer-focus:-top-2.5 peer-focus:text-[11px] peer-focus:px-2
                          ${formData.message ? '-top-2.5 text-[11px] px-2' : ''}
                          ${theme === 'dark' ? 'text-gray-400 peer-focus:text-purple-400' : 'text-gray-500 peer-focus:text-purple-600'}
                        `}
                        style={{ background: formData.message ? (theme === 'dark' ? '#0d0d1a' : '#ffffff') : 'transparent' }}
                      >
                        Votre Message
                      </label>
                    </div>

                    {formStatus.message && (
                      <div
                        className={`p-4 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-3 border ${
                          formStatus.type === 'success'
                            ? 'bg-green-500/10 text-green-400 border-green-500/30'
                            : 'bg-red-500/10 text-red-400 border-red-500/30'
                        }`}
                      >
                        {formStatus.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                        {formStatus.message}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-2xl font-bold tracking-wide text-sm text-white transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] shadow-lg disabled:opacity-50"
                      style={{
                        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
                        boxShadow: '0 8px 30px rgba(139,92,246,0.35)',
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <span>Envoyer le Message</span>
                          <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-14 px-4 sm:px-6 relative overflow-hidden"
        style={{
          background: theme === 'dark' ? '#07070f' : '#f1f5f9',
          borderTop: theme === 'dark' ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div
                className="text-2xl sm:text-3xl font-black mb-2 tracking-tight"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {'<OUABEN />'}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-400">
                Ingénierie Logicielle – Agadir, Maroc
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/OUABEN"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 rounded-2xl flex items-center justify-center border transition-all duration-300 hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-gray-300 hover:text-white hover:border-white/30 hover:bg-white/10'
                    : 'bg-black/5 border-black/10 text-gray-700 hover:text-black hover:border-black/30 hover:bg-black/10'
                }`}
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/mohamed-ouaben"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 rounded-2xl flex items-center justify-center border transition-all duration-300 hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-gray-300 hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-500/10'
                    : 'bg-black/5 border-black/10 text-gray-700 hover:text-blue-600 hover:border-blue-600/40 hover:bg-blue-50'
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:ouabenmohamed74@gmail.com"
                className={`w-11 h-11 rounded-2xl flex items-center justify-center border transition-all duration-300 hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-gray-300 hover:text-pink-400 hover:border-pink-400/40 hover:bg-pink-500/10'
                    : 'bg-black/5 border-black/10 text-gray-700 hover:text-pink-600 hover:border-pink-600/40 hover:bg-pink-50'
                }`}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-700/20 text-center">
            <p className="text-xs sm:text-sm font-semibold text-gray-500">
              © {new Date().getFullYear()} OUABEN Mohamed. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;