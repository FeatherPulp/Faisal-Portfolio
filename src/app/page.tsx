"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronDown, Code, Smartphone, Globe, Mail, Github } from "lucide-react";
import  Link from 'next/link';
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Home() {
  const [counter, setCounter] = useState(0);
  const [loadingDone, setLoadingDone] = useState(false);
  const [hasSeenAnimation, setHasSeenAnimation] = useState(false);
  const [isClient, setIsClient] = useState(false); 




gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);






  const reveal = useCallback(() => {
    if (isClient) {
      import('gsap').then((gsapModule) => {
        const gsap = gsapModule.gsap;
        
        const t1 = gsap.timeline({
          onComplete: () => {
            gsap.to(".loader", {
              opacity: 0,
              duration: 1,
              ease: "power2.inOut",
              onComplete: () => {
                setLoadingDone(true);
                // Mark that user has seen the animation
                setHasSeenAnimation(true);
                window.sessionStorage.setItem("hasSeenReveal", "true");
              },
            });
          },
        });

        t1.to(".follow", {
          width: "100%",
          ease: "expo.inOut",
          duration: 1.2,
          delay: 0.7,
        })
          .to(".hide", { opacity: 0, duration: 0.3 })
          .to(".hide", { display: "none", duration: 0.3 })
          .to(".follow", {
            height: "100%",
            ease: "expo.inOut",
            duration: 0.7,
            delay: 0.5,
          })
          .to(".content", { width: "100%", ease: "expo.inOut", duration: 0.7 })
          .to(".title-lines", { display: "block", duration: 0.1 })
          .to(".title-lines", {
            opacity: 1,
            stagger: 0.15,
            ease: "expo.inOut",
            duration: 0.6,
          });
      });
    }
  }, [isClient]);



useEffect(() => {
  // Always check if running in the browser
  if (typeof window === "undefined") return;

  // Look for a sessionStorage flag
  const hasSeen = window.sessionStorage.getItem("hasSeenReveal");

  if (!hasSeen) {
    // User has NOT seen this animation this session — play it
    setIsClient(true); // Maintain original logic if needed
    setHasSeenAnimation(false);
    setLoadingDone(false);
  } else {
    // User HAS seen this animation this session — skip it
    setIsClient(true);
    setHasSeenAnimation(true);
    setLoadingDone(true); // Skip loading/animation
  }
}, []);


  useEffect(() => {
    if (!isClient || hasSeenAnimation) return;

    const count = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(count);
          setCounter(100);
          reveal();
          return 100;
        }
      });
    }, 25);

    return () => clearInterval(count);
  }, [hasSeenAnimation, isClient, reveal]);

  useEffect(() => {
  if (loadingDone && isClient) {
    import('gsap').then((gsapModule) => {
      const gsap = gsapModule.gsap;
      const tl = gsap.timeline();

     
      tl.fromTo("header", 
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      )

     const splitHeroTitle = new SplitText(".hero-title", { type: "chars" });
gsap.set(splitHeroTitle.chars, { y: 30, opacity: 0 });

const splitHeroSubtitle = new SplitText(".hero-subtitle", { type: "chars" });
gsap.set(splitHeroSubtitle.chars, { y: 20, opacity: 0 });

tl.to(splitHeroTitle.chars, {
  y: 0,
  opacity: 1,
  duration: 0.8,
  ease: "power2.out",
  stagger: {
    each: 0.03,
    from: "random"
  }
}, "-=0.3")


      .to(splitHeroSubtitle.chars, {
  y: 0,
  opacity: 1,
  duration: 0.6,
  ease: "power2.out",
  stagger: {
    each: 0.02,
    from: "random"   
  }
}, "-=0.2")

      // CTA fade-in scale
      .fromTo(".hero-cta", 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }, 
        "-=0.3"
      )

      // Skills section fade up
      .fromTo(".skills-title", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }, 
        "-=0.2"
      )
      .fromTo(".skill-card", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.1 }, 
        "-=0.3"
      )

      // Contact section
      .fromTo(".contact-title", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 
        "-=0.3"
      )
      .fromTo(".contact-text, .contact-link", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.1 }, 
        "-=0.2"
      )

      // Footer fade
      .fromTo("footer", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 
        "-=0.3"
      );

      // Subtle floating background
      gsap.to(".bg-orb", {
        y: -10,
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
 return () => {
      import('gsap').then((gsapModule) => {
        if (splitHeroTitle) splitHeroTitle.revert();
        if (splitHeroSubtitle) splitHeroSubtitle.revert();
        gsapModule.gsap.globalTimeline.clear();
      });
 }
    });
    
  }
  
}, [loadingDone,isClient]);

 const handleScroll = () => {
    gsap.to(window, {
      duration: 1, // speed of scroll
      scrollTo: "#skills", // target section
      ease: "power2.inOut",
    });
  };


 


  // Skip loading screen if user has already seen the animation
  if (isClient &&hasSeenAnimation && loadingDone) {
    return (
      <div className="min-h-screen bg-white portfolio-wrapper">
        {/* Header */}
        <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl cursor-pointer font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Faisal Ahmed
              </div>
              <div className="hidden md:flex space-x-8">
                 <Link href="/" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                  Home
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                  About
                </Link>
                <Link href="/skills" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                  Skills
                </Link>
                <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                  Projects
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
          {/* Animated background orbs */}
          <div className="absolute inset-0">
            <div className="bg-orb absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="bg-orb absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="bg-orb absolute -bottom-8 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Full Stack Developer
              
            </h1>
            <p className="hero-subtitle text-2xl md:text-3xl text-gray-600 mb-8">
              I create modern web applications and mobile experiences that bring ideas to life.
            </p>
            <Link href="/projects">
              <button className="hero-cta bg-blue-600 cursor-pointer text-white px-8 py-3 mt-10 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              View My Work
            </button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div 
          onClick={handleScroll}
          className="scroll-indicator cursor-pointer absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="skills-title text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              What I Do
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Web Dev */}
              <div className="skill-card group p-8 rounded-2xl hover:shadow-2xl bg-gradient-to-br from-blue-50 to-blue-100 transition-all duration-500 hover:-translate-y-3 cursor-pointer border border-transparent hover:border-blue-200">
                <Globe className="w-12 h-12 text-blue-600 mb-6 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-700 transition-colors">
                  Web Development
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  Modern responsive apps with React, Next.js & Tailwind CSS for exceptional user experiences.
                </p>
              </div>

              {/* Mobile Dev */}
              <div className="skill-card group p-8 rounded-2xl hover:shadow-2xl bg-gradient-to-br from-green-50 to-green-100 transition-all duration-500 hover:-translate-y-3 cursor-pointer border border-transparent hover:border-green-200">
                <Smartphone className="w-12 h-12 text-green-600 mb-6 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-700 transition-colors">
                  Mobile Development
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  Building smooth mobile apps using Kotlin & Jetpack Compose with modern UI patterns.
                </p>
              </div>

              {/* Full Stack */}
              <div className="skill-card group p-8 rounded-2xl hover:shadow-2xl bg-gradient-to-br from-purple-50 to-purple-100 transition-all duration-500 hover:-translate-y-3 cursor-pointer border border-transparent hover:border-purple-200">
                <Code className="w-12 h-12 text-purple-600 mb-6 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-700 transition-colors">
                  Full Stack Solutions
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  From backend APIs to frontend UI, delivering complete solutions for businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="contact-title text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="contact-text text-xl text-gray-600 mb-8">
              Ready to bring your ideas to life? Let&apos;s discuss your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact" 
                className="contact-link inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <Mail className="w-5 h-5" /> 
                Send Message
              </Link>
              <Link
                href="https://github.com/yourusername" 
                className="contact-link inline-flex items-center gap-3 bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <Github className="w-5 h-5" /> 
                View GitHub
              </Link>
            </div>
            <p className="contact-text text-gray-500 mt-6">ahmadfaiz500@gmail.com</p>
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
        <Link href="https://github.com/yourusername" className="hover:text-blue-400" aria-label="GitHub">
          <Github className="w-5 h-5" />
        </Link>
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

  // Show loading animation only if user hasn't seen it before
  if (isClient && !loadingDone && !hasSeenAnimation) {
    return (
      <div className="w-screen h-screen text-black relative overflow-hidden">
        {/* Loading Section */}
        <div className="loader h-full w-full bg-gray-900 flex justify-center items-center absolute top-0">
          {/* Follow Bar */}
          <div className="follow absolute bg-orange-400 h-0.5 w-0 left-0 z-20"></div>

          {/* Progress Bar */}
          <div
            className="hide absolute left-0 bg-white h-0.5 w-0 transition-all duration-400 ease-out"
            style={{ width: counter + "%" }}
          ></div>

          {/* Counter */}
          <p
            className="hide absolute text-white font-medium transform -translate-y-4"
            style={{ fontSize: "130px" }}
          >
            {counter}%
          </p>
        </div>

        {/* Content Animation Text */}
        <div className="content h-full w-0 absolute left-0 top-0 bg-gray-900 z-20 flex items-center justify-center flex-col overflow-hidden text-white">
          <p className="title-lines text-center font-medium m-0 opacity-0 hidden" style={{ fontSize: "50px" }}>
            Welcome to
          </p>
          <p className="title-lines text-center font-medium m-0 opacity-0 hidden" style={{ fontSize: "50px" }}>
            Faisal Ahmed&apos;s
          </p>
          <p className="title-lines text-center font-medium m-0 opacity-0 hidden" style={{ fontSize: "50px" }}>
            Portfolio
          </p>
          <p className="title-lines text-center font-medium m-0 opacity-0 hidden" style={{ fontSize: "50px" }}>
            A Full Stack Developer
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white portfolio-wrapper">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg opacity-0">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Faisal Ahmed
            </div>
            <div className="hidden md:flex space-x-8">
               <Link href="/" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                About
              </Link>
              <Link href="/skills" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                Skills
              </Link>
              <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                Projects
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0">
          <div className="bg-orb absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="bg-orb absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="bg-orb absolute -bottom-8 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 opacity-0">
            Full Stack
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Developer
            </span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-gray-600 mb-8 opacity-0">
            I create modern web applications and mobile experiences that bring ideas to life.
          </p>
          <button className="hero-cta bg-blue-600 cursor-pointer text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl opacity-0">
            View My Work
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="skills-title text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16 opacity-0">
            What I Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Dev */}
            <div className="skill-card group p-8 rounded-2xl hover:shadow-2xl bg-gradient-to-br from-blue-50 to-blue-100 transition-all duration-500 hover:-translate-y-3 cursor-pointer border border-transparent hover:border-blue-200 opacity-0">
              <Globe className="w-12 h-12 text-blue-600 mb-6 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-700 transition-colors">
                Web Development
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Modern responsive apps with React, Next.js & Tailwind CSS for exceptional user experiences.
              </p>
            </div>

            {/* Mobile Dev */}
            <div className="skill-card group p-8 rounded-2xl hover:shadow-2xl bg-gradient-to-br from-green-50 to-green-100 transition-all duration-500 hover:-translate-y-3 cursor-pointer border border-transparent hover:border-green-200 opacity-0">
              <Smartphone className="w-12 h-12 text-green-600 mb-6 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-green-700 transition-colors">
                Mobile Development
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Building smooth mobile apps using Kotlin & Jetpack Compose with modern UI patterns.
              </p>
            </div>

            {/* Full Stack */}
            <div className="skill-card group p-8 rounded-2xl hover:shadow-2xl bg-gradient-to-br from-purple-50 to-purple-100 transition-all duration-500 hover:-translate-y-3 cursor-pointer border border-transparent hover:border-purple-200 opacity-0">
              <Code className="w-12 h-12 text-purple-600 mb-6 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-700 transition-colors">
                Full Stack Solutions
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                From backend APIs to frontend UI, delivering complete solutions for businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="contact-title text-4xl md:text-5xl font-bold text-gray-900 mb-6 opacity-0">
            Let&apos;s Work Together
          </h2>
          <p className="contact-text text-xl text-gray-600 mb-8 opacity-0">
            Ready to bring your ideas to life? Let&apos;s discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact" 
              className="contact-link inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl opacity-0"
            >
              <Mail className="w-5 h-5" /> 
              Send Message
            </Link>
            <Link
              href="https://github.com/yourusername" 
              className="contact-link inline-flex items-center gap-3 bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl opacity-0"
            >
              <Github className="w-5 h-5" /> 
              View GitHub
            </Link>
          </div>
          <p className="contact-text text-gray-500 mt-6 opacity-0">ahmadfaiz500@gmail.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center opacity-0">
        <div>
          <p className="text-gray-400">&copy; 2024 Faisal Ahmed. All rights reserved.</p>
        
        </div>
      </footer>
    </div>
  );
}