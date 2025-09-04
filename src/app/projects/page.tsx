"use client";

import { useEffect, useState } from 'react';
import {  Github, Code, Globe, Calendar, Filter, Search, Smartphone, ArrowRight, Eye, Mail, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [imageErrors, setImageErrors] = useState(new Set());
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  

  gsap.registerPlugin(ScrollTrigger);

  const projects = [
    {
      id: 1,
      title: "FeatherPulp Digital Agency",
      description: "A professional website for a digital creative agency specializing in innovative design and creative solutions. Built with modern web technologies and optimized for performance and user experience.",
      category: "web",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Modern Web APIs"],
      github: null,
      live: "https://featherpulp.com/",
      date: "2024",
      status: "Live",
      image: "/fp1.png"
    },
    {
      id: 2,
      title: "Booksi lekhak",
      description: "A comprehensive mobile application for book lovers and writers. Features book reading, writing tools, and a community platform for literary enthusiasts. Built with modern Android development practices.",
      category: "mobile",
      technologies: ["Android", "Java/Kotlin", "Firebase", "Material Design"],
      github: null,
      live: "https://play.google.com/store/apps/details?id=org.featherpulp.booksilekhak&pli=1",
      date: "2024",
      status: "Published",
      image: "/lek2.png"
    },
    {
      id: 3,
      title: "Booksi",
      description: "A feature-rich Android application showcasing advanced mobile development techniques. This app demonstrates complex functionality and user interface design as part of my final project submission.",
      category: "mobile",
      technologies: ["Android", "Java/Kotlin", "SQLite", "Material Design"],
      github: null,
      live: "https://play.google.com/store/apps/details?id=com.first.final_project&hl=en_IN",
      date: "2024",
      status: "Published",
      image: "/bok1.png"
    },
    {
      id: 4,
      title: "Frontend Works Collection",
      description: "A comprehensive collection of frontend projects showcasing various web development techniques, responsive designs, and modern UI/UX implementations using HTML, CSS, and JavaScript.",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/FaisalAhmeddd/FrontEnd_works",
      live: null,
      date: "Dec 2022",
      status: "Portfolio",
      image: "/front.jpg"
    },
    {
      id: 5,
      title: "Blog Application Backend",
      description: "Robust backend implementation for a blog application with full CRUD operations, user authentication, and RESTful API design. Features secure data handling and scalable architecture.",
      category: "backend",
      technologies: ["Java", "Spring Boot", "REST API", "Database"],
      github: "https://github.com/FaisalAhmeddd/Backend-of-Blog-Application-",
      live: null,
      date: "Nov 2022",
      status: "Complete",
      image: "/blog.jpg"
    },
    {
      id: 6,
      title: "Student Management System",
      description: "A complete student management system built with Spring Boot, featuring student registration, course management, and administrative functions. My first major Spring Boot project demonstrating full-stack capabilities.",
      category: "fullstack",
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      github: "https://github.com/FaisalAhmeddd/Git-SpringBoot_sms",
      live: null,
      date: "Oct 2022",
      status: "Learning Project",
      image: "/sms.jpg"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'mobile', name: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'web', name: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { id: 'backend', name: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
 

  gsap.utils.toArray(".project-card").forEach(card => {
    gsap.fromTo(card as gsap.TweenTarget,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card as HTMLElement,
          start: "top 90%",
          toggleActions: "play none none none",
        }
      }
    );
  });
}, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800';
      case 'Complete': return 'bg-blue-100 text-blue-800';
      case 'Portfolio': return 'bg-purple-100 text-purple-800';
      case 'Learning Project': return 'bg-orange-100 text-orange-800';
      case 'Live': return 'bg-emerald-100 text-emerald-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleImageError = (projectId: number) => {
    setImageErrors(prev => new Set(prev).add(projectId));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl cursor-pointer font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Faisal Ahmed
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</Link>
              <span className="text-blue-600 font-semibold">Projects</span>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
             <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
                    {/* Mobile Navigation Menu */}
{isMobileMenuOpen && (
  <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg border border-gray-100 mt-2">
      <Link 
        href="/" 
        onClick={closeMobileMenu}
        className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
      >
        Home
      </Link>
      <Link 
        href="/about" 
        onClick={closeMobileMenu}
        className="text-blue-600 bg-blue-50 block px-3 py-2 rounded-md text-base font-semibold"
      >
        About
      </Link>
      <Link 
        href="/skills" 
        onClick={closeMobileMenu}
        className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
      >
        Skills
      </Link>
      <Link 
        href="/projects" 
        onClick={closeMobileMenu}
        className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
      >
        Projects
      </Link>
      <Link 
        href="/contact" 
        onClick={closeMobileMenu}
        className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
      >
        Contact
      </Link>
    </div>
  </div>
)}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              My
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A collection of projects showcasing my skills in mobile development, web development, backend systems, and full-stack applications.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Filter className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <div key={project.id} className="bg-white project-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  {/* Project Image */}
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    {project.image && project.image !== "/api/placeholder/400/250" && !imageErrors.has(project.id) ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={() => handleImageError(project.id)}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        {project.category === 'mobile' ? (
                          <Smartphone className="w-16 h-16 text-gray-400" />
                        ) : (
                          <Code className="w-16 h-16 text-gray-400" />
                        )}
                      </div>
                    )}
                    
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    
                    {/* Case Study Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link 
                        href={`/case-study/${project.id}`}
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        View Case Study
                      </Link>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        {project.date}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3 mb-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                            project.category === 'mobile' 
                              ? 'bg-green-600 text-white hover:bg-green-700'
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                          }`}
                        >
                          {project.category === 'mobile' ? (
                            <Smartphone className="w-4 h-4" />
                          ) : (
                            <Globe className="w-4 h-4" />
                          )}
                          {project.category === 'mobile' ? 'Play Store' : 'Live Demo'}
                        </a>
                      )}
                    </div>

                    {/* Case Study Link */}
                    <Link 
                      href={`/case-study/${project.id}`}
                      className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm font-medium group"
                    >
                      <Eye className="w-4 h-4" />
                      View Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </Link>
            <a
              href="https://github.com/FaisalAhmeddd"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center"
            >
              <Github className="w-5 h-5" />
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
        <footer className="bg-gray-900 text-white py-10 mt-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
      {/* Branding */}
      <div className="flex items-center space-x-3 mb-4 md:mb-0">
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Faisal Ahmed
        </span>
        <span className="hidden md:inline text-gray-500 font-medium">| Full Stack Developer</span>
      </div>
      {/* Navigation */}
      <div className="flex space-x-6">
        <Link href="/" className="text-gray-300 hover:text-blue-400 transition">Home</Link>
        <Link href="/about" className="text-gray-300 hover:text-blue-400 transition">About</Link>
        <Link href="/skills" className="text-gray-300 hover:text-blue-400 transition">Skills</Link>
        <Link href="/projects" className="text-gray-300 hover:text-blue-400 transition">Projects</Link>
        <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition">Contact</Link>
      </div>
      {/* Social Icons */}
      <div className="flex space-x-4 mt-6 md:mt-0">
        <Link href="/contact" className="hover:text-blue-400" aria-label="Email">
          <Mail className="w-5 h-5" />
        </Link>
        <a href="https://github.com/FaisalAhmeddd/" target='_blank' className="hover:text-blue-400" aria-label="GitHub">
          <Github className="w-5 h-5" />
        </a>
        {/* Add more icons as needed */}
      </div>
    </div>
    <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
      © {new Date().getFullYear()} Faisal Ahmed.  All rights reserved.
    </div>
  </div>
</footer>
    </div>
  );
}