"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, User, Code, Award, Heart, Coffee, BookOpen, Target, Mail, Github, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking on a link
const closeMobileMenu = () => {
  setIsMobileMenuOpen(false);
};

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  gsap.registerPlugin(ScrollTrigger);
  

useEffect(() => {
  

  const loadAnimation = async () => {
    const scrollTriggerModule = await import('gsap/ScrollTrigger');
   const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".my-story-paragraph").forEach((elem) => {
      gsap.fromTo(elem as gsap.TweenTarget,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elem as HTMLElement,
            start: "top 80%",
            toggleActions: "play none none none",
          }
        }
      );
    });
  };

  loadAnimation();

  // Cleanup
  return () => {
    if (ScrollTrigger) ScrollTrigger.getAll().forEach(t => t.kill());
    if (gsap) gsap.killTweensOf(".my-story-paragraph");
  };
}, []);


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl cursor-pointer font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Faisal Ahmed
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/about" className="text-blue-600 font-semibold">About</Link>
              <Link href="/skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</Link>
              <Link href="/#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
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
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-8">
            <ChevronLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Me</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Passionate developer crafting digital experiences that make a difference
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">My Story</h2>
              <div className="space-y-6 text-gray-600">
                <p className='my-story-paragraph'>
                  Hi, I&apos;m Faisal Ahmed, a passionate full-stack developer with over 4 years of experience 
                  creating digital solutions that bridge the gap between design and functionality. My journey 
                  began with a curiosity about how things work on the web, which quickly evolved into a 
                  love for building applications that solve real-world problems.
                </p>
                <p className='my-story-paragraph'>
                  I specialize in modern web technologies including React, Next.js, and Node.js, with a 
                  strong focus on creating seamless user experiences. My background in both frontend and 
                  backend development allows me to understand the complete picture of any project I work on.
                </p>
                <p className='my-story-paragraph'>
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source 
                  projects, or sharing my knowledge through blog posts and mentoring. I believe in continuous 
                  learning and staying up-to-date with the ever-evolving tech landscape.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <User className="w-32 h-32 text-gray-400 mx-auto mb-4" />
                  <p className="text-center text-gray-600 italic">
                    Code is like humor. When you have to explain it, it&apos;s bad. - Cory House
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Values */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Code className="w-8 h-8 text-blue-600 transition-transform duration-300 hover:scale-110 hover:text-blue-800 hover:rotate-20" />
                Technical Skills
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm transition-transform duration-300 hover:scale-110 hover:bg-blue-200 cursor-pointer select-none">React</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm transition-transform duration-300 hover:scale-110 hover:bg-blue-200 cursor-pointer select-none">Next.js</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm transition-transform duration-300 hover:scale-110 hover:bg-blue-200 cursor-pointer select-none">TypeScript</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm transition-transform duration-300 hover:scale-110 hover:bg-blue-200 cursor-pointer select-none">Tailwind CSS</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm transition-transform duration-300 hover:scale-110 hover:bg-blue-200 cursor-pointer select-none">Node.js</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm transition-transform duration-300 hover:scale-110 hover:bg-blue-200 cursor-pointer select-none">Express</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm transition-transform duration-300 hover:scale-110 hover:bg-blue-200 cursor-pointer select-none">MongoDB</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm transition-transform duration-300 hover:scale-110 hover:bg-blue-200 cursor-pointer select-none">PostgreSQL</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Mobile</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm transition-transform duration-300 hover:scale-110 hover:bg-blue-200 cursor-pointer select-none">Android</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm transition-transform duration-300 hover:scale-110 hover:bg-blue-200 cursor-pointer select-none">Kotlin</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm transition-transform duration-300 hover:scale-110 hover:bg-blue-200 cursor-pointer select-none">Java</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm transition-transform duration-300 hover:scale-110 hover:bg-blue-200 cursor-pointer select-none">React Native</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Heart className="w-8 h-8 text-red-500 transition-transform duration-300 hover:scale-110 hover:text-red-500 hover:-rotate-20" />
                Values & Approach
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-6 h-6 text-blue-600 transition-transform duration-300 hover:scale-110 hover:text-blue-800" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">User-Centric Design</h4>
                    <p className="text-gray-600">Every project starts with understanding the user&apos;s needs and creating intuitive experiences.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-6 h-6 text-green-600 transition-transform duration-300 hover:scale-110 hover:text-blue-800" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Quality First</h4>
                    <p className="text-gray-600">I believe in writing clean, maintainable code and following best practices.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="w-6 h-6 text-purple-600 transition-transform duration-300 hover:scale-110 hover:text-blue-800" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Continuous Learning</h4>
                    <p className="text-gray-600">Staying updated with the latest technologies and industry trends is essential.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fun Facts */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
              <Coffee className="w-8 h-8 text-amber-600 transition-transform duration-300 hover:scale-110 hover:text-blue-800" />
              Fun Facts About Me
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-xl hover:scale-[1.03] cursor-pointer">
                <div className="text-2xl mb-2">☕</div>
                <h4 className="font-semibold text-gray-800 mb-2">Coffee Enthusiast</h4>
                <p className="text-gray-600 text-sm">I&apos;ve tried over 50 different coffee roasts from around the world</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-xl hover:scale-[1.03] cursor-pointer">
                <div className="text-2xl mb-2">🎮</div>
                <h4 className="font-semibold text-gray-800 mb-2">Gamer</h4>
                <p className="text-gray-600 text-sm">I enjoy strategic games and often find inspiration for problem-solving</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-xl hover:scale-[1.03] cursor-pointer">
                <div className="text-2xl mb-2">📚</div>
                <h4 className="font-semibold text-gray-800 mb-2">Book Lover</h4>
                <p className="text-gray-600 text-sm">I read at least one tech book and one fiction book every month</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            I&apos;m always excited to work on new projects and collaborate with fellow creators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get In Touch
            </Link>
            <Link href="/#projects" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              View My Work
            </Link>
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
              <a href="https://github.com/FaisalAhmeddd/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              {/* Add more icons as needed */}
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Faisal Ahmed. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}