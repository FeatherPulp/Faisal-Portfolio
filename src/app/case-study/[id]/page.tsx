"use client";

import { useState } from 'react';
import { ArrowLeft, Github, Calendar,  Target, Lightbulb, Smartphone, Globe, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { X } from "lucide-react";
import Image from 'next/image';



export default function CaseStudy() {
  const params = useParams();
  const projectId = params.id as string;

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Extended project data with case study information
  const projectsData = {
     "1": {
      title: "FeatherPulp Digital Agency",
      description: "A professional website for a digital creative agency specializing in innovative design and creative solutions. Built with modern web technologies and optimized for performance and user experience.",
      category: "web",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Modern Web APIs"],
      github: null,
      live: "https://featherpulp.com/",
      date: "2024",
      status: "Live",
      images: [
        {
          url: "/fp1.png",
          alt: "FeatherPulp Homepage",
          caption: "Bold. Creative. Purposeful. A digital agency website built to inspire and convert."
        },
        {
          url: "/fp3.png",
          alt: "FeatherPulp About Page",
          caption: "Crafted with React & Next.js for blazing-fast performance and modern aesthetics."
        },
        {
          url: "/fp4.png",
          alt: "FeatherPulp Services",
          caption: "Showcasing innovation through responsive design, seamless navigation, and brand storytelling."
        },
        {
          url: "/fp5.png",
          alt: "FeatherPulp Portfolio",
          caption: "A clean, scalable platform for Feather Pulp to connect, create, and grow with clients."
        }
      ],
      
      // Case study specific data
      overview: "FeatherPulp is a cutting-edge digital creative agency website that I developed to showcase the company's innovative design services and creative solutions. The website serves as a digital showcase for their portfolio, services, and brand identity while providing an engaging user experience for potential clients.",
      problem: "The client needed a professional, modern website that would establish their digital presence and effectively showcase their creative capabilities. The challenge was to create a platform that would not only look visually appealing but also drive business growth by attracting potential clients and demonstrating the agency's expertise in digital design and creative solutions.",
      solution: "I designed and developed a sophisticated website using modern web technologies, focusing on performance, accessibility, and user experience. The solution includes responsive design, optimized loading speeds, and intuitive navigation to ensure visitors can easily explore the agency's services and portfolio.",
      features: [
        "Modern, responsive design optimized for all devices",
        "Fast loading performance with optimized assets",
        "Interactive portfolio showcase with smooth animations",
        "Professional service pages with detailed descriptions",
        "Contact forms with real-time validation",
        "SEO-optimized content and structure",
        "Professional branding and visual identity",
        "Cross-browser compatibility and accessibility features"
      ],
      challenges: [
        "Creating a visually stunning design that reflects the agency's creative capabilities",
        "Integrating a custom frontend (Next.js) with a headless CMS (Strapi)",
         "Ensuring API response optimization for better performance and SEO",
    "Managing dynamic image and media delivery via Strapi",
    "Creating a responsive and consistent design across Strapi-powered content",
    "Maintaining backend flexibility while enforcing frontend consistency",
        "Ensuring fast loading times while maintaining high-quality visuals",
        "Implementing smooth animations and interactions without affecting performance",
        "Building a responsive design that works seamlessly across all devices",
        "Optimizing the website for search engines while maintaining design integrity"
      ],
      techStack: {
        "Frontend": ["React", "Next.js", "TypeScript", "HTML5", "CSS3"],
        "Backend": ["Strapi", "Node.js", "REST API"],
        "Styling": ["Tailwind CSS", "CSS Modules", "Responsive Design"],
        "Performance": ["Image Optimization", "Code Splitting", "Lazy Loading"],
        "SEO": ["Meta Tags", "Schema Markup", "Sitemap"],
        "Tools": ["VS Code", "GitHub", "Vercel", "Figma", "Browser DevTools", "Strapi Cloud"]
      },
      results: [
        "Successfully launched professional website for FeatherPulp",
        "Achieved excellent performance scores and fast loading times",
        "Created a strong digital presence for the agency",
        "Implemented modern design that effectively showcases the brand",
        "Delivered a fully responsive and accessible website",
        "Achieved Lighthouse scores above 90 for performance and accessibility",
      ],
      lessons: [
       "Combining a headless CMS with a modern frontend framework improves maintainability",
    "A strong visual identity must be balanced with performance and usability",
    "Responsiveness and content structure must be considered from the backend too",
    "CMS flexibility should never compromise frontend consistency",
    "Integrating SEO early in development ensures better visibility and traffic"
      ]
    },
    "2": {
      title: "Booksi lekhak",
      description: "A comprehensive mobile application for book lovers and writers. Features book reading, writing tools, and a community platform for literary enthusiasts.",
      category: "mobile",
      technologies: ["Android", "Java/Kotlin", "Firebase", "Material Design"],
      github: null,
      live: "https://play.google.com/store/apps/details?id=org.featherpulp.booksilekhak&pli=1",
      date: "2024",
      status: "Published",
      images: [
        {
          url: "/lek1.png",
          alt: "BookSi Lekhak",
          caption: "Booksilekhak — A minimalist writing companion built for modern authors and storytellers."
        },
        {
          url: "/lek3.png",
          alt: "BookSi Lekhak",
          caption: "From idea to publishing — empowering writers with structured book and chapter creation."
        },
        {
          url: "/lek4.png",
          alt: "BookSi Lekhak",
          caption: "Offline-first writing app with audio chapter support and Firebase-based sync."
        },
        {
          url: "/lek5.png",
          alt: "BookSi Lekhak",
          caption: "Designed with Jetpack Compose and Clean Architecture — optimized for clarity, focus, and flow."
        }
      ],
      
      // Case study specific data
      overview: "Booksi lekhak is a comprehensive mobile application designed to bridge the gap between book readers and writers. The app provides a unified platform where users can discover, read, and write books while connecting with a vibrant literary community.",
      problem: "The literary ecosystem lacked a dedicated mobile platform tailored for local writers—one that provided a secure, distraction-free space to create, organize, and store their books. Existing apps were either reader-focused or lacked structured tools for authors. There was no seamless bridge between the act of writing and the journey of publishing. Writers needed a platform that not only protected their work but also empowered them to share it with a wider audience when ready. Additionally, readers needed a curated space to discover and engage with original local content. Lekhak fills this gap by offering a safe writing environment, with direct publishing to Booksi for reading and the Booksi Store for monetization.",
      solution: "I developed Booksi Lekhak as a comprehensive mobile platform that seamlessly integrates the entire literary journey — from writing to publishing to reading. Writers can securely draft and organize their books within the app, with tools designed to support long-form content creation. Once completed, their work can be published directly to Booksi, where readers can access it, and optionally featured in the Booksi Store for monetization. The app also fosters a creative community by enabling interaction between authors and readers, bridging the gap between creation and consumption in a single, cohesive environment.",
      features: [
        "Advanced Writing Tools - A clean, distraction-free interface for authors to write and structure full-length books with chapters and audio support.",
        "Digital Library for Readers - A growing collection of user-published books across genres, available for online and offline reading.",
        "WhatsApp-Based Login - Seamless and secure authentication using WhatsApp, eliminating the need for OTP or email passwords.",
        "Google Drive Backup and Restore - One-tap cloud backup and restore support to keep user data safe and portable across devices.",
        "Community Platform - Share books, receive feedback, and engage with a growing network of writers and readers.",
        "Push-to-Publish Workflow - Writers can push completed books from Lekhak to the Booksi platform and Booksi Store for broader visibility and monetization.",
        "Modern UI with Jetpack Compose - Smooth navigation, animations, and a responsive layout built using the latest Android UI toolkit.",
      ],
      challenges: [
        "Designing a distraction-free yet feature-rich writing interface suitable for mobile screens balancing functionality with a clean UI to support authors in long-form content creation",
        "Handling and rendering large volumes of text without performance bottlenecks ensuring smooth scrolling and editing even in long books with multiple chapters.",
        "Implementing efficient offline-first storage and syncing logic. Writers needed to work without internet connectivity, with reliable syncing once online.",
        "Creating a seamless workflow from writing to publishing within the app ecosystem bridging Lekhak (for authors) with Booksi (for readers) while maintaining content integrity.",
        "Optimizing performance for a wide range of Android devices delivering consistent experience across low-end and high-end hardware.",
        "Maintaining data safety and content privacy for authors providing local encryption and backup support to protect unfinished or private works.",
        "Laying the foundation for future real-time collaboration features architecting the backend and data model with collaborative writing in mind."
      ],
      techStack: {
  "Frontend": [
    "Android SDK",
    "Jetpack Compose",
    "Material Design Components",
    "Custom UI Components"
  ],
  "Backend": [
    "Node.js (OTPless WhatsApp Verification)",
    "Firebase Firestore",
    "Firebase Authentication",
    "Firebase Cloud Storage"
  ],
  "Authentication": [
    "OTPless (WhatsApp-Based Login)",
    "Firebase Auth"
  ],
  "Languages": [
    "Kotlin",
    "Java",
    "JavaScript (Node.js)"
  ],
  "Tools": [
    "Android Studio",
    "Firebase Console",
    "VS Code",
    "Git",
    "Postman"
  ]
}
,
      results: [
  "Successfully published on the Google Play Store and available to users",
  "App currently undergoing testing with positive initial feedback",
  "Positive initial feedback highlighting intuitive design and ease of use",
  "Smooth and stable performance across a wide range of Android devices",
  "Writers appreciate the offline writing flow and Google Drive backup feature",
  "Community and sharing features are actively driving engagement",
  "Secure WhatsApp login via OTPless provides a seamless onboarding experience"
]
,
     lessons: [
  "Designing with a mobile-first mindset ensures accessibility and wider reach",
  "Performance optimization is critical for text-heavy and content-rich applications",
  "Integrating community features early can significantly boost user retention and engagement",
  "Iterative, feedback-driven development leads to more intuitive and user-centric products",
  "Seamless authentication (e.g., WhatsApp login) enhances onboarding and user trust",
  "A modular and scalable architecture simplifies future feature expansion and maintenance"
]

    },
    "3": {
      title: "Booksi",
      description: "A feature-rich Android application showcasing advanced mobile development techniques as part of my final project submission.",
      category: "mobile",
      technologies: ["Android", "Java/Kotlin", "SQLite", "Material Design"],
      github: null,
      live: "https://play.google.com/store/apps/details?id=com.first.final_project&hl=en_IN",
      date: "2024",
      status: "Published",
      images: [
        {
          url: "/bok1.png",
          alt: "BookSI",
          caption: "A complete reading experience — allowing users to read and listen to books in a beautifully simple interface."
        },
        {
          url: "/bok2.png",
          alt: "BookSI",
          caption: "Combining visual and audio storytelling with offline support for immersive book consumption"
        },
        {
          url: "/bok3.png",
          alt: "BookSI",
          caption: "Crafted with Jetpack Compose and Room Database, optimized for smooth reading and background audio playback"
        },
        {
          url: "/bok4.png",
          alt: "BookSI",
          caption: "Seamless chapter navigation, audio integration, and a distraction-free reader for book lovers on the go."
        }
      ],
      
      overview: "Booksi was developed as my final project submission, demonstrating advanced Android development techniques and complex functionality. This application showcases my mastery of mobile development principles and modern UI/UX design.",
      problem: "The client needed a reliable mobile reading platform that would allow users to access books both online and offline — especially in regions with inconsistent internet connectivity. Existing reading apps were either too bulky, required constant data access, or lacked smooth offline experiences.A key challenge was to ensure that downloaded books remained accessible within the app without needing an internet connection, while also maintaining performance and usability.Additionally, the app needed to integrate seamlessly with Lekhak, a separate writer-focused application. Authors using Lekhak would submit completed books, which needed to appear instantly and securely in Booksi for readers. Building a system that could support this end-to-end pipeline — from author submission to user access — was central to the project's success.",
      solution: "I developed Booksi as a comprehensive mobile reading application tailored to the client’s requirements. The app allows users to discover and read books with a clean, responsive interface and supports offline access to downloaded content for uninterrupted reading.A key part of the solution was building a system that receives completed books pushed by authors from Lekhak, the writing platform. These books are first processed and approved by the client, and only then made available to users in the Booksi app and Booksi Store.The project demonstrates my expertise in Android development, including local database integration, dynamic UI rendering for long-form content, and performance optimization for offline-first applications. It also highlights my ability to architect systems that support content pipelines and cross-platform workflows between writer and reader environments.",
      features: [
        "Modern User Interface with Material Design. Clean, intuitive UI built with Material guidelines to enhance usability and visual consistency.",
        "Local Database Integration (SQLite).Efficient handling of downloaded books and chapter data for reliable offline access.",
        "Complex Navigation Structure.Smooth user experience across multiple screens with nested navigation and deep linking support.",
        "Custom UI Components and Animations.Built reusable components and interactive animations to improve engagement and branding.",
        "Responsive design for different screen sizes",
        "Advanced Data Handling.Structured book data storage, retrieval, and state management for large documents.",
        "User Authentication and Session Control.Secure login with persistent sessions for personalized access and content delivery.",
        "Performance-Optimized Components.Lazy loading, memory management, and optimized rendering for seamless performance."
      ],
     challenges: [
  "Implementing complex database relationships for storing books, chapters, and metadata using SQLite",
  "Designing and developing smooth UI animations and transitions without compromising performance",
  "Managing app state consistently across multiple screens and deep navigation flows",
  "Optimizing performance to ensure a smooth reading experience across both high-end and low-end Android devices",
  "Building advanced UI patterns that support responsive layouts, offline access, and dynamic content rendering"
]
,
      techStack: {
        "Frontend": ["Android SDK", "Material Design", "Custom Views"],
        "Database": ["SQLite", "Room Database", "Data Access Objects"],
        "Languages": ["Java", "Kotlin"],
        "Tools": ["Android Studio", "SQLite Browser", "Git"]
      },
    results: [
  "Successfully published and deployed on the Google Play Store",
  "Demonstrated advanced Android development capabilities including database, UI, and performance engineering",
  "Received positive feedback from academic reviewers and project evaluators for both functionality and design",
  "Delivered a fully functional reading platform with offline support and a scalable architecture",
  "Effectively showcased real-world mobile development practices in a client-based project"
]
,
    lessons: [
  "Careful architecture planning is essential when building feature-rich and scalable mobile applications",
  "Optimizing local databases is critical for ensuring smooth performance, especially with large or structured content",
  "Balancing technical complexity with a seamless user experience is key to long-term app success",
  "Rigorous testing across a variety of devices and screen sizes helps catch edge cases and ensures broad compatibility",
  "Clear separation of concerns in code structure improves maintainability and future scalability"
]

    },
    "4": {
      title: "Frontend Works Collection",
      description: "A comprehensive collection of frontend projects showcasing various web development techniques, responsive designs, and modern UI/UX implementations.",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/FaisalAhmeddd/FrontEnd_works",
      live: null,
      date: "Dec 2022",
      status: "Portfolio",
      images: [
        
        {
          url: "/front.jpg",
          alt: "Frontend work",
         
        }
      ],
      
      overview: "Frontend Works Collection is a comprehensive portfolio showcasing my journey in frontend development. This collection demonstrates various web development techniques, responsive design principles, and modern UI/UX implementations across multiple projects.",
      problem: "As a developing frontend developer, I needed to practice various web technologies and showcase my growing skills. The challenge was to create diverse projects that would demonstrate different aspects of frontend development while maintaining code quality and modern standards.",
      solution: "I created a collection of frontend projects, each focusing on different aspects of web development. This approach allowed me to experiment with various technologies, design patterns, and user interface concepts while building a comprehensive portfolio.",
      features: [
        "Multiple responsive web projects",
        "Modern CSS techniques and animations",
        "Interactive JavaScript functionality",
        "Cross-browser compatibility",
        "Mobile-first responsive design",
        "Accessibility considerations",
        "Performance optimization",
        "Modern UI/UX patterns"
      ],
      challenges: [
        "Ensuring cross-browser compatibility",
        "Implementing responsive design across different projects",
        "Optimizing performance for various devices",
        "Maintaining consistent code quality across projects",
        "Creating engaging user interactions"
      ],
      techStack: {
        "Frontend": ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design"],
        "Styling": ["Flexbox", "Grid Layout", "CSS Animations", "Media Queries"],
        "Tools": ["VS Code", "Browser DevTools", "Git", "GitHub Pages"]
      },
      results: [
        "Comprehensive portfolio showcasing frontend skills",
        "Demonstrated proficiency in modern web technologies",
        "Improved understanding of responsive design principles",
        "Enhanced knowledge of user experience design"
      ],
      lessons: [
        "Consistent practice leads to significant skill improvement",
        "Responsive design should be considered from the start",
        "User experience is as important as visual design",
        "Performance optimization is crucial for web applications"
      ]
    },
    "5": {
      title: "Blog Application Backend",
      description: "Robust backend implementation for a blog application with full CRUD operations, user authentication, and RESTful API design.",
      category: "backend",
      technologies: ["Java", "Spring Boot", "REST API", "Database"],
      github: "https://github.com/FaisalAhmeddd/Backend-of-Blog-Application-",
      live: null,
      date: "Nov 2022",
      status: "Complete",
      images: [
        {
          url: "/fp2.png",
          alt: "FeatherPulp Homepage",
          caption: "Modern homepage with hero section and navigation"
        },
        {
          url: "/fp1.png",
          alt: "FeatherPulp About Page",
          caption: "About page showcasing team and company culture"
        },
        {
          url: "/front.png",
          alt: "FeatherPulp Services",
          caption: "Services section with detailed offerings"
        },
        {
          url: "/lek1.png",
          alt: "FeatherPulp Portfolio",
          caption: "Portfolio showcase with interactive elements"
        }
      ],
      
      overview: "The Blog Application Backend is a robust server-side implementation designed to power a modern blogging platform. This project demonstrates comprehensive backend development skills including RESTful API design, database management, and secure user authentication.",
      problem: "Modern blogging platforms require sophisticated backend systems that can handle user management, content creation, and data persistence efficiently. The challenge was to create a scalable, secure, and well-structured backend that could support a full-featured blogging application.",
      solution: "I developed a comprehensive backend system using Spring Boot, implementing RESTful APIs for all blog operations, secure user authentication, and efficient data management. The system follows industry best practices for security, scalability, and maintainability.",
      features: [
        "RESTful API endpoints for all blog operations",
        "User authentication and authorization",
        "Full CRUD operations for blog posts",
        "Comment system with moderation",
        "User profile management",
        "Search functionality",
        "Data validation and error handling",
        "Database optimization"
      ],
      challenges: [
        "Implementing secure user authentication",
        "Designing efficient database schemas",
        "Creating scalable API endpoints",
        "Handling data validation and error management",
        "Implementing proper security measures"
      ],
      techStack: {
        "Backend": ["Spring Boot", "Spring Security", "Spring Data JPA"],
        "Database": ["MySQL", "Hibernate ORM"],
        "Languages": ["Java"],
        "Tools": ["IntelliJ IDEA", "Postman", "MySQL Workbench", "Git"]
      },
      results: [
        "Fully functional backend API for blogging platform",
        "Secure user authentication and authorization system",
        "Efficient database design and operations",
        "Comprehensive API documentation"
      ],
      lessons: [
        "Security should be considered from the beginning",
        "Well-designed APIs are crucial for frontend integration",
        "Database optimization significantly impacts performance",
        "Proper error handling improves user experience"
      ]
    },
    "6": {
      title: "Student Management System",
      description: "A complete student management system built with Spring Boot, featuring student registration, course management, and administrative functions.",
      category: "fullstack",
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      github: "https://github.com/FaisalAhmeddd/Git-SpringBoot_sms",
      live: null,
      date: "Oct 2022",
      status: "Learning Project",
      images: [
        {
          url: "/sms.jpg",
          alt: "FeatherPulp Homepage",
          caption: "Modern homepage with hero section and navigation"
        },
        {
          url: "/fp1.png",
          alt: "FeatherPulp About Page",
          caption: "About page showcasing team and company culture"
        },
        {
          url: "/front.jpg",
          alt: "FeatherPulp Services",
          caption: "Services section with detailed offerings"
        },
        {
          url: "/lek1.png",
          alt: "FeatherPulp Portfolio",
          caption: "Portfolio showcase with interactive elements"
        }
      ],
      
      overview: "The Student Management System is a comprehensive full-stack application designed to manage student information, course enrollment, and administrative tasks. This project marked my first major Spring Boot application and demonstrates full-stack development capabilities.",
      problem: "Educational institutions need efficient systems to manage student data, course information, and administrative processes. The challenge was to create a user-friendly system that could handle complex relationships between students, courses, and administrative functions while learning Spring Boot framework.",
      solution: "I developed a complete student management system using Spring Boot and Thymeleaf, implementing features for student registration, course management, and administrative functions. The system provides a web-based interface for easy management of educational data.",
      features: [
        "Student registration and profile management",
        "Course creation and management",
        "Enrollment system with course capacity",
        "Administrative dashboard",
        "Grade management system",
        "Search and filter functionality",
        "Reports generation",
        "User role management"
      ],
      challenges: [
        "Learning Spring Boot framework from scratch",
        "Implementing complex database relationships",
        "Creating intuitive user interfaces with Thymeleaf",
        "Managing different user roles and permissions",
        "Implementing data validation and error handling"
      ],
      techStack: {
        "Backend": ["Spring Boot", "Spring MVC", "Spring Data JPA"],
        "Frontend": ["Thymeleaf", "Bootstrap", "HTML/CSS"],
        "Database": ["MySQL", "Hibernate"],
        "Languages": ["Java"],
        "Tools": ["IntelliJ IDEA", "MySQL Workbench", "Git"]
      },
      results: [
        "Successfully completed first major Spring Boot project",
        "Functional student management system with all core features",
        "Gained comprehensive understanding of Spring Boot ecosystem",
        "Developed skills in full-stack web development"
      ],
      lessons: [
        "Spring Boot significantly simplifies Java web development",
        "Proper project structure is crucial for maintainability",
        "Database design impacts entire application architecture",
        "Learning by building real projects is highly effective"
      ]
    }
  };

  const project = projectsData[projectId as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-blue-600 hover:text-blue-800">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800';
      case 'Complete': return 'bg-blue-100 text-blue-800';
      case 'Portfolio': return 'bg-purple-100 text-purple-800';
      case 'Learning Project': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

   const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Faisal Ahmed
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/projects" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600 flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {project.date}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors font-medium ${
                      project.category === 'mobile' 
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {project.category === 'mobile' ? (
                      <Smartphone className="w-5 h-5" />
                    ) : (
                      <Globe className="w-5 h-5" />
                    )}
                    {project.category === 'mobile' ? 'Play Store' : 'Live Demo'}
                  </a>
                )}
              </div>
            </div>

            {/* Enhanced Image Gallery Section */}
            <div className="lg:pl-12">
              <div className="relative">
                {/* Main Image Display */}
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-xl">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={project.images[selectedImageIndex].url}
                      alt={project.images[selectedImageIndex].alt}
                      className="w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300 bg-white"
                      onClick={() => setShowModal(true)}
                    />
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      {selectedImageIndex + 1} / {project.images.length}
                    </div>
                  </div>
                  
                  {/* Image Caption */}
                  <div className="p-4 bg-white">
                    <p className="text-gray-600 text-sm">{project.images[selectedImageIndex].alt}</p>
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        index === selectedImageIndex 
                          ? 'border-blue-500 shadow-lg' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Image
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Full-Screen Image View */}
      {showModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8 text-black" />
            </button>
            
            <Image
              src={project.images[selectedImageIndex].url}
              alt={project.images[selectedImageIndex].alt}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Navigation in Modal */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
            
            {/* Caption in Modal */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-white bg-black/50 px-4 py-2 rounded-lg">
                {project.images[selectedImageIndex].alt}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Case Study Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-blue-600" />
              Project Overview
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Problem */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-yellow-600" />
              Problem Statement
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              Solution
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Stack</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(project.techStack).map(([category, technologies]) => (
                <div key={category} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenges Faced</h2>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.results.map((result, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Lessons Learned</h2>
            <div className="space-y-4">
              {project.lessons.map((lesson, index) => (
                <div key={index} className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <span className="text-gray-700">{lesson}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to See More Projects?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Check out my other projects or get in touch to discuss your next idea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Projects
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
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
