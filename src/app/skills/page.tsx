"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ChevronLeft, 

  Smartphone, 
  Globe, 

  Server, 

  Zap,
  Monitor,
  Settings,
  Wrench,
  Award,
  TrendingUp,
} from 'lucide-react';

export default function Skills() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [displayCategory, setDisplayCategory] = useState('frontend');
  const [activeCategory, setActiveCategory] = useState('frontend');
  const containerRef = useRef<HTMLDivElement>(null);


 useEffect(() => {
  if (!containerRef.current) return;
  
  const tl = gsap.timeline({
    onComplete: () => {
      setDisplayCategory(activeCategory); // Update after fade out
    }
  });
  
  tl.to(containerRef.current.children, {
    opacity: 0,
    x: -30,
    duration: 0.3,
    stagger: 0.05,
    ease: "power1.inOut",
  });
}, [activeCategory]);


useEffect(() => {
  if (!containerRef.current) return;

  gsap.fromTo(containerRef.current.children,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0, duration: 0.3, stagger: 0.05, ease: "power1.out" }
  );

}, [displayCategory]);

gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 useEffect(() => {
  

  gsap.utils.toArray<HTMLElement>(".skill-bar").forEach((bar) => {
    const level = bar.getAttribute("data-level") ?? "0";
    gsap.fromTo(bar,
      { width: 0 },
      {
        width: `${level}%`,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bar,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      }
    );
  });
}, []);

useEffect(() => {
  gsap.utils.toArray(".proficiency-legend > div > div, .learning-journey > div > div").forEach((el) => {
    gsap.fromTo(el as gsap.TweenTarget,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el as HTMLElement,
          start: "top 90%",
          toggleActions: "play none none none",
        }
      }
    );
  });
}, []);






  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: <Globe className="w-6 h-6" />,
      description: 'Creating beautiful, responsive user interfaces',
      skills: [
        { name: 'React', level: 95, category: 'Framework' },
        { name: 'Next.js', level: 90, category: 'Framework' },
        { name: 'TypeScript', level: 85, category: 'Language' },
        { name: 'JavaScript', level: 95, category: 'Language' },
        { name: 'HTML5', level: 98, category: 'Markup' },
        { name: 'CSS3', level: 90, category: 'Styling' },
        { name: 'Tailwind CSS', level: 92, category: 'Styling' },
        { name: 'SASS/SCSS', level: 85, category: 'Styling' },
        { name: 'Redux', level: 80, category: 'State Management' },
        { name: 'Zustand', level: 75, category: 'State Management' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      description: 'Building scalable server-side applications',
      skills: [
        { name: 'Node.js', level: 88, category: 'Runtime' },
        { name: 'Express.js', level: 85, category: 'Framework' },
        { name: 'MongoDB', level: 82, category: 'Database' },
        { name: 'PostgreSQL', level: 78, category: 'Database' },
        { name: 'MySQL', level: 75, category: 'Database' },
        { name: 'REST APIs', level: 90, category: 'API Design' },
        { name: 'GraphQL', level: 70, category: 'API Design' },
        { name: 'JWT', level: 85, category: 'Authentication' },
        { name: 'Mongoose', level: 80, category: 'ODM' },
        { name: 'Prisma', level: 72, category: 'ORM' }
      ]
    },
    mobile: {
      title: 'Mobile Development',
      icon: <Smartphone className="w-6 h-6" />,
      description: 'Native and cross-platform mobile apps',
      skills: [
        { name: 'Android (Native)', level: 88, category: 'Platform' },
        { name: 'Kotlin', level: 85, category: 'Language' },
        { name: 'Java', level: 82, category: 'Language' },
        { name: 'React Native', level: 78, category: 'Framework' },
        { name: 'Android Studio', level: 90, category: 'IDE' },
        { name: 'XML Layouts', level: 85, category: 'UI' },
        { name: 'Material Design', level: 88, category: 'Design System' },
        { name: 'Room Database', level: 80, category: 'Database' },
        { name: 'Retrofit', level: 85, category: 'Networking' },
        { name: 'Firebase', level: 75, category: 'Backend Service' }
      ]
    },
    tools: {
    title: 'Tools & Technologies',
    icon: <Wrench className="w-6 h-6" />,
    description: 'Development tools and workflows',
    skills: [
      { name: 'Git', level: 90, category: 'Version Control' },
      { name: 'GitHub', level: 88, category: 'Platform' },
      { name: 'VS Code', level: 95, category: 'IDE' },
      { name: 'Docker', level: 70, category: 'Containerization' },
      { name: 'AWS', level: 65, category: 'Cloud' },
      { name: 'Vercel', level: 85, category: 'Deployment' },
      { name: 'Netlify', level: 80, category: 'Deployment' },
      { name: 'Postman', level: 88, category: 'API Testing' },
      { name: 'Figma', level: 75, category: 'Design' },
      { name: 'Webpack', level: 70, category: 'Build Tool' }
    ]
  }
  };

 

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  const getSkillTextColor = (level: number) => {
    if (level >= 90) return 'text-green-600';
    if (level >= 80) return 'text-blue-600';
    if (level >= 70) return 'text-yellow-600';
    return 'text-gray-600';
  };

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
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/skills" className="text-blue-600 font-semibold">Skills</Link>
              <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
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
              My
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Skills</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and capabilities
            </p>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
  key={key}
  onClick={() => setActiveCategory(key)}
  className={`group flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 cursor-pointer ${
    activeCategory === key
      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
  }`}
>
  <span className="transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
    {category.icon}
  </span>
  <span className="font-medium">{category.title}</span>
</button>

            ))}
          </div>

          {/* Active Category Content */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {skillCategories[activeCategory as keyof typeof skillCategories].title}
              </h2>
              <p className="text-xl text-gray-600">
                {skillCategories[activeCategory as keyof typeof skillCategories].description}
              </p>
            </div>

            <div 
            ref = {containerRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories[displayCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border border-gray-100 cursor-pointer ">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                      <p className="text-sm text-gray-500">{skill.category}</p>
                    </div>
                    <span className={`text-sm font-medium ${getSkillTextColor(skill.level)}`}>
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                   <div 
  className={`h-2 rounded-full transition-all duration-1000 skill-bar ${getSkillColor(skill.level)}`}
  data-level={skill.level}
  style={{ width: 0 }}  
></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skill Level Legend */}
      <section className="proficiency-legend py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Proficiency Levels</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert</h3>
              <p className="text-sm text-gray-600">90-100%</p>
              <p className="text-xs text-gray-500 mt-1">Advanced proficiency with extensive experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proficient</h3>
              <p className="text-sm text-gray-600">80-89%</p>
              <p className="text-xs text-gray-500 mt-1">Strong skills with good practical experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Intermediate</h3>
              <p className="text-sm text-gray-600">70-79%</p>
              <p className="text-xs text-gray-500 mt-1">Solid understanding with growing experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Learning</h3>
              <p className="text-sm text-gray-600">60-69%</p>
              <p className="text-xs text-gray-500 mt-1">Basic knowledge with continuous learning</p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Learning Journey */}
      <section className="learning-journey py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Settings className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Always Learning, Always Growing
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I&apos;m constantly exploring new technologies 
              and improving my skills to stay at the forefront of development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Technologies Learned</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Hours of Practice</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how my skills can help bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get In Touch
            </Link>
            <Link href="/#projects" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              View My Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Faisal Ahmed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}