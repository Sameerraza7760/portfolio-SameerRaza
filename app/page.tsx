"use client"

import { useState, useEffect, useRef } from "react"
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Code,
  Zap,
  Rocket,
  Download,
  GraduationCap,
  Briefcase,
  Award,
  Star,
  FileText,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [currentProjectPage, setCurrentProjectPage] = useState(0)

  // Refs for animations
  const heroTitleRef = useRef(null)
  const heroSubtitleRef = useRef(null)
  const heroDescriptionRef = useRef(null)
  const skillsRef = useRef(null)
  const experienceRef = useRef(null)
  const educationRef = useRef(null)
  const particlesRef = useRef(null)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  useEffect(() => {
    initializeAnimations()
    initializeParticles()
  }, [])

  const initializeParticles = () => {
    if (particlesRef.current) {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      particlesRef.current.appendChild(canvas)

      canvas.width = particlesRef.current.offsetWidth
      canvas.height = particlesRef.current.offsetHeight
      canvas.style.position = "absolute"
      canvas.style.top = "0"
      canvas.style.left = "0"
      canvas.style.pointerEvents = "none"

      const particles = []
      const connections = []
      const isMobile = window.innerWidth <= 768
      const particleCount = isMobile ? 30 : 60

      // Create particles with different types
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * (isMobile ? 0.5 : 0.8),
          vy: (Math.random() - 0.5) * (isMobile ? 0.5 : 0.8),
          size: Math.random() * (isMobile ? 3 : 4) + 1,
          opacity: Math.random() * 0.6 + 0.3,
          color: Math.random() > 0.5 ? "blue" : Math.random() > 0.5 ? "purple" : "cyan",
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02,
        })
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Update and draw particles
        particles.forEach((particle, i) => {
          // Update position
          particle.x += particle.vx
          particle.y += particle.vy

          // Bounce off walls
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

          // Update pulse
          particle.pulse += particle.pulseSpeed
          const pulseSize = particle.size + Math.sin(particle.pulse) * 0.5

          // Draw particle with glow effect
          const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, pulseSize * 3)

          let color1, color2
          switch (particle.color) {
            case "blue":
              color1 = `rgba(59, 130, 246, ${particle.opacity})`
              color2 = `rgba(59, 130, 246, 0)`
              break
            case "purple":
              color1 = `rgba(147, 51, 234, ${particle.opacity})`
              color2 = `rgba(147, 51, 234, 0)`
              break
            case "cyan":
              color1 = `rgba(6, 182, 212, ${particle.opacity})`
              color2 = `rgba(6, 182, 212, 0)`
              break
          }

          gradient.addColorStop(0, color1)
          gradient.addColorStop(1, color2)

          ctx.beginPath()
          ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2)
          ctx.fillStyle = gradient
          ctx.fill()

          // Draw connections between nearby particles
          particles.slice(i + 1).forEach((otherParticle) => {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              const opacity = ((100 - distance) / 100) * 0.3
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`
              ctx.lineWidth = 1
              ctx.stroke()
            }
          })
        })

        requestAnimationFrame(animate)
      }

      animate()

      // Handle window resize
      const handleResize = () => {
        canvas.width = particlesRef.current.offsetWidth
        canvas.height = particlesRef.current.offsetHeight
      }

      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }

  const initializeAnimations = () => {
    // Continuous hero title animation
    if (heroTitleRef.current) {
      const text = "Hello, I'm Muhammad Maaz"
      const animateTitle = () => {
        heroTitleRef.current.innerHTML = text
          .split("")
          .map((char, index) =>
            char === " "
              ? `<span class="space">&nbsp;</span>`
              : `<span class="char" style="animation-delay: ${index * 0.1}s">${char}</span>`,
          )
          .join("")
      }

      animateTitle()
      // Repeat animation every 8 seconds
      setInterval(animateTitle, 8000)
    }

    // Continuous hero subtitle typewriter effect
    if (heroSubtitleRef.current) {
      const text = "Software Engineer"
      const animateSubtitle = () => {
        heroSubtitleRef.current.innerHTML = ""
        text.split("").forEach((char, index) => {
          setTimeout(() => {
            if (heroSubtitleRef.current) {
              heroSubtitleRef.current.innerHTML += char === " " ? "&nbsp;" : char
            }
          }, index * 100)
        })

        // Clear and restart after completion
        setTimeout(
          () => {
            if (heroSubtitleRef.current) {
              heroSubtitleRef.current.innerHTML = ""
            }
          },
          text.length * 100 + 2000,
        )
      }

      animateSubtitle()
      // Repeat animation every 5 seconds
      setInterval(animateSubtitle, 5000)
    }

    // Hero description wave animation
    if (heroDescriptionRef.current) {
      const words = heroDescriptionRef.current.textContent.split(" ")
      heroDescriptionRef.current.innerHTML = words
        .map((word, index) => `<span class="word" style="animation-delay: ${index * 0.1 + 2}s">${word}</span>`)
        .join(" ")
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/placeholder.pdf"
    link.download = "Muhammad_Maaz_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const skillCategories = [
    {
      category: "Frontend",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Vue", icon: "💚" },
        { name: "Next.js", icon: "▲" },
        { name: "Svelte", icon: "🧡" },
      ],
    },
    {
      category: "Backend",
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express", icon: "🚀" },
        { name: "FastAPI", icon: "⚡" },
      ],
    },
    {
      category: "Database & Tools",
      icon: "🗄️",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "TypeScript", icon: "🔷" },
        { name: "GitHub", icon: "🐙" },
      ],
    },
    {
      category: "Specialized",
      icon: "🔬",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Data Visualization", icon: "📊" },
        { name: "D3/Recharts", icon: "📈" },
        { name: "Project Management", icon: "📋" },
        { name: "Jira/SDLC", icon: "🔄" },
        { name: "R&D", icon: "🔬" },
        { name: "Reverse Engineering", icon: "🔧" },
      ],
    },
  ]

  const education = [
    {
      degree: "B.S. (Software Engineering)",
      institution: "SSUET",
      year: "2024",
      type: "Bachelor's Degree",
      description: "Focused on software development methodologies, algorithms, and system design.",
      gpa: "3.16/4.0",
      icon: "🎓",
    },
    {
      degree: "Senior Secondary (Pre-Engineering)",
      institution: "Jinnah Govt. College",
      year: "2020",
      type: "Higher Secondary",
      description: "Mathematics, Physics, and Chemistry with engineering fundamentals.",
      gpa: "C Grade",
      icon: "📚",
    },
    {
      degree: "High School (Computer Science)",
      institution: "Al Huda School",
      year: "2018",
      type: "Secondary School",
      description: "Introduction to programming concepts and computer science principles.",
      gpa: "A Grade",
      icon: "💻",
    },
  ]

  const certifications = [
    {
      title: "Project Management",
      provider: "Great Learning",
      year: "2024",
      icon: "📋",
      color: "bg-blue-500",
    },
    {
      title: "Managing Agile Scrum Project with JIRA",
      provider: "10 Pearls University",
      year: "2024",
      icon: "🔄",
      color: "bg-green-500",
    },
    {
      title: "Front-End Web UI Frameworks & Tools: Bootstrap 4",
      provider: "Coursera",
      year: "2023",
      icon: "🎨",
      color: "bg-purple-500",
    },
    {
      title: "Agile & Scrum",
      provider: "10 Pearls University",
      year: "2024",
      icon: "⚡",
      color: "bg-orange-500",
    },
    {
      title: "React Js",
      provider: "Coursera",
      year: "2023",
      icon: "⚛️",
      color: "bg-cyan-500",
    },
    {
      title: "Python Basic & Python DSA",
      provider: "Coursera",
      year: "2022",
      icon: "🐍",
      color: "bg-yellow-500",
    },
  ]

  const experiences = [
    {
      title: "React Developer",
      company: "BRB Group",
      period: "Nov 2024 - Present",
      type: "Full-time",
      icon: "💼",
      color: "from-blue-600 to-blue-800",
      description:
        "I led the frontend development of intuitive payroll, document, and finance management interfaces, streamlining workflows and enhancing data accuracy. I crafted a unified IT and inventory dashboard featuring ticketing, device monitoring, asset allocation, and automated hosting reminders. I also engineered the frontend for an AI-driven content automation tool that generates SEO-focused blog posts and schedules social media campaigns.",
      achievements: [
        "Improved workflow efficiency by 40%",
        "Led frontend team of 3 developers",
        "Implemented AI-driven automation tools",
      ],
    },
    {
      title: "React Development",
      company: "BRB Group",
      period: "Aug 2024 – Sep 2024",
      type: "Contract",
      icon: "🔧",
      color: "from-green-600 to-green-800",
      description:
        "Assisted in front-end development with a focus on UI/UX, API integration, and Git. Collaborated with cross-functional teams to streamline data handling and improve user experience.",
      achievements: [
        "Enhanced API integration performance",
        "Improved user experience metrics",
        "Streamlined development workflow",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Neuramatics.Co.",
      period: "Nov 2023 - Feb 2024",
      type: "Contract",
      icon: "🚀",
      color: "from-purple-600 to-purple-800",
      description:
        "Frontend Developer at Neuramatics.Co. as a frontend developer, where I gained hands-on experience with React.js Library in JavaScript. My responsibilities included development in front-end tasks, debugging code, and collaborating with the project team to enhance user interface functionality and improvement of overall UI/UX Experience.",
      achievements: ["Delivered 5+ React.js projects", "Reduced bug reports by 30%", "Enhanced UI/UX design patterns"],
    },
    {
      title: "Frontend Support Developer",
      company: "Dimensional Sys, Inc.",
      period: "Aug 2023 - Nov 2023",
      type: "Internship",
      icon: "📊",
      color: "from-orange-600 to-orange-800",
      description:
        "Frontend Support Intern at Dimensional Sys, Inc. – Gained hands-on experience with React.js and Vue 3, assisting in development, debugging, and UI enhancements. Developed interactive data visualizations and charting components using D3.js. Where I learned reverse engineering of legacy front-end code to troubleshoot defects, document architecture, and drive performance improvements.",
      achievements: [
        "Mastered D3.js data visualizations",
        "Reverse engineered legacy systems",
        "Improved system performance by 25%",
      ],
    },
    {
      title: "Intern",
      company: "Coderatory",
      period: "Feb 2022 - Apr 2022",
      type: "Internship",
      icon: "🌱",
      color: "from-teal-600 to-teal-800",
      description:
        "At Coderatory internship, I learned web development tech, including Node.js for fast apps and Express.js for easy web dev. Gained hands-on MongoDB experience for structured data storage. Improved web app creation and data management skills.",
      achievements: [
        "Built first full-stack application",
        "Learned MongoDB fundamentals",
        "Completed 3 web development projects",
      ],
    },
  ]

  // Extended projects array with more projects
  const allProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/maaz/ecommerce-platform",
      demo: "https://example.com/demo1",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Socket.io", "Express", "PostgreSQL"],
      github: "https://github.com/maaz/task-manager",
      demo: "https://example.com/demo2",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      tech: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
      github: "https://github.com/maaz/weather-dashboard",
      demo: "https://example.com/demo3",
    },
    {
      title: "Social Media Analytics",
      description:
        "A comprehensive analytics platform for social media metrics with real-time data visualization and reporting features.",
      tech: ["Vue.js", "D3.js", "Firebase", "Chart.js"],
      github: "https://github.com/maaz/social-analytics",
      demo: "https://example.com/demo4",
    },
    {
      title: "AI Content Generator",
      description:
        "An AI-powered content generation tool that creates blog posts, social media content, and marketing copy using advanced NLP.",
      tech: ["Next.js", "OpenAI API", "Prisma", "Tailwind"],
      github: "https://github.com/maaz/ai-content-generator",
      demo: "https://example.com/demo5",
    },
    {
      title: "Crypto Portfolio Tracker",
      description:
        "A real-time cryptocurrency portfolio tracking application with price alerts, news integration, and performance analytics.",
      tech: ["React", "CoinGecko API", "Redux", "Material-UI"],
      github: "https://github.com/maaz/crypto-tracker",
      demo: "https://example.com/demo6",
    },
    {
      title: "Learning Management System",
      description:
        "A comprehensive LMS platform with course creation, student progress tracking, and interactive learning modules.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/maaz/lms-platform",
      demo: "https://example.com/demo7",
    },
    {
      title: "Restaurant Booking System",
      description:
        "A modern restaurant reservation system with table management, customer notifications, and analytics dashboard.",
      tech: ["Vue.js", "Express", "MySQL", "Stripe"],
      github: "https://github.com/maaz/restaurant-booking",
      demo: "https://example.com/demo8",
    },
  ]

  // Fixed Pagination logic
  const projectsPerPage = 3
  const totalPages = Math.ceil(allProjects.length / projectsPerPage)

  // Calculate current projects to display
  const getCurrentProjects = () => {
    const startIndex = currentProjectPage * projectsPerPage
    const endIndex = startIndex + projectsPerPage
    return allProjects.slice(startIndex, endIndex)
  }

  const currentProjects = getCurrentProjects()
  const startIndex = currentProjectPage * projectsPerPage
  const endIndex = Math.min(startIndex + projectsPerPage, allProjects.length)

  const nextProjectPage = () => {
    if (currentProjectPage < totalPages - 1) {
      setCurrentProjectPage((prev) => prev + 1)
    }
  }

  const prevProjectPage = () => {
    if (currentProjectPage > 0) {
      setCurrentProjectPage((prev) => prev - 1)
    }
  }

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 0 && pageNumber < totalPages) {
      setCurrentProjectPage(pageNumber)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
          <div className="shape shape-6"></div>
        </div>
        <div className="glow-orbs">
          <div className="glow-orb glow-orb-1"></div>
          <div className="glow-orb glow-orb-2"></div>
          <div className="glow-orb glow-orb-3"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 nav-slide-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover-glow">
              Muhammad Maaz
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "experience", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 nav-link ${
                    activeSection === section ? "text-blue-600 dark:text-blue-400 scale-110" : ""
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {/* Social Links */}
              <div className="hidden sm:flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover-bounce glow-hover"
                  onClick={() => window.open("https://github.com/muhammad-maaz", "_blank")}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover-bounce glow-hover"
                  onClick={() => window.open("https://linkedin.com/in/muhammad-maaz", "_blank")}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Button>
              </div>

              <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full hover-spin glow-hover">
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover-bounce"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mobile-menu-slide">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["home", "about", "experience", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block px-3 py-2 text-base font-medium capitalize hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-2"
                >
                  {section}
                </button>
              ))}

              {/* Mobile Social Links */}
              <div className="flex space-x-4 px-3 py-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover-bounce"
                  onClick={() => window.open("https://github.com/muhammad-maaz", "_blank")}
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover-bounce"
                  onClick={() => window.open("https://linkedin.com/in/muhammad-maaz", "_blank")}
                >
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative">
        {/* Enhanced Animated Illustrations */}
        <div className="absolute top-20 right-10 opacity-30 dark:opacity-20 code-float glow-illustration">
          <Code className="h-16 w-16 text-blue-500" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-30 dark:opacity-20 code-float-delayed glow-illustration">
          <Zap className="h-12 w-12 text-purple-500" />
        </div>
        <div className="absolute top-1/2 right-1/4 opacity-30 dark:opacity-20 code-float-slow glow-illustration">
          <Rocket className="h-14 w-14 text-green-500" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div>
            <h1
              ref={heroTitleRef}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white hero-title-animated"
            >
              Hello, I'm Muhammad Maaz
            </h1>
            <p
              ref={heroSubtitleRef}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 hero-subtitle-typewriter min-h-[2.5rem]"
            ></p>
            <p
              ref={heroDescriptionRef}
              className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed hero-description-wave"
            >
              Passionate about creating innovative solutions and building exceptional digital experiences. I specialize
              in full-stack development with a focus on modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center hero-buttons">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover-glow-button"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover-pulse"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CV Download Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-6xl mx-auto animate-on-scroll">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <FileText className="h-10 w-10 text-blue-600 dark:text-blue-400 mr-3" />
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                My Resume
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my professional journey, skills, and achievements.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 cv-download-card">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Resume Preview */}
              <div className="lg:col-span-2">
                {/* Resume Header */}
                <div className="text-center mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Muhammad Maaz</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">Software Engineer</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    muhammad.maaz@email.com | +1 (555) 123-4567 | San Francisco, CA
                  </p>
                </div>

                {/* Resume Sections */}
                <div className="space-y-6">
                  {/* Professional Summary */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Professional Summary
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Passionate Software Engineer with 2+ years of experience in full-stack development. Specialized in
                      React.js, Node.js, and modern web technologies. Proven track record of delivering high-quality
                      applications and leading development teams.
                    </p>
                  </div>

                  {/* Experience Preview */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Briefcase className="h-4 w-4 text-blue-600 mr-3" />
                      Experience
                    </h4>
                    <div className="space-y-4">
                      <div className="border-l-2 border-blue-200 dark:border-blue-800 pl-4">
                        <h5 className="font-semibold text-gray-900 dark:text-white">React Developer - BRB Group</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Nov 2024 - Present</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Led frontend development of payroll and finance management interfaces, improving workflow
                          efficiency by 40%.
                        </p>
                      </div>
                      <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                        <h5 className="font-semibold text-gray-900 dark:text-white">
                          Frontend Developer - Neuramatics.Co.
                        </h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Nov 2023 - Feb 2024</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Delivered 5+ React.js projects and reduced bug reports by 30%.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Education Preview */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                      <GraduationCap className="h-4 w-4 text-blue-600 mr-3" />
                      Education
                    </h4>
                    <div className="border-l-2 border-blue-200 dark:border-blue-800 pl-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white">B.S. Software Engineering - SSUET</h5>
                      <p className="text-sm text-gray-500 dark:text-gray-400">2024 | GPA: 3.16/4.0</p>
                    </div>
                  </div>

                  {/* Skills Preview */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Award className="h-4 w-4 text-blue-600 mr-3" />
                      Technical Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Node.js", "TypeScript", "MongoDB", "Next.js", "Vue.js", "Express", "D3.js"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Section */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <Download className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Download Resume</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                    Get the complete PDF version with detailed information.
                  </p>
                  <Button
                    onClick={downloadCV}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover-glow-button"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white text-center">Quick Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">Experience</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">2+ Years</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">Projects</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">15+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">Certifications</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">6</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">Technologies</span>
                      <span className="font-semibold text-orange-600 dark:text-orange-400">12+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Enhanced Particles */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Enhanced Particles Container */}
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm a dedicated software engineer with a passion for creating efficient, scalable, and user-friendly
              applications.
            </p>
          </div>

          {/* Enhanced Skills Section */}
          <div className="mb-16 animate-on-scroll" ref={skillsRef}>
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <Card
                  key={categoryIndex}
                  className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 skill-card-enhanced group"
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="text-2xl">{category.icon}</span>
                      </div>
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white">{category.category}</h4>
                    </div>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 skill-item-enhanced hover:scale-105"
                        >
                          <span className="text-2xl skill-icon-enhanced">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Education Section */}
            <div className="animate-on-scroll" ref={educationRef}>
              <div className="flex items-center mb-8">
                <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="education-card-enhanced hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                          <span className="text-xl">{edu.icon}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-lg">{edu.degree}</h4>
                            <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full">
                              {edu.type}
                            </span>
                          </div>
                          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{edu.institution}</p>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{edu.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</span>
                            <span className="text-sm font-medium text-green-600 dark:text-green-400">{edu.gpa}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Enhanced Certifications Section */}
            <div className="animate-on-scroll">
              <div className="flex items-center mb-8">
                <Award className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="cert-card-enhanced hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`${cert.color} p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <span className="text-white text-lg">{cert.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-base mb-1">{cert.title}</h4>
                          <div className="flex justify-between items-center">
                            <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">{cert.provider}</p>
                            <span className="text-xs text-gray-600 dark:text-gray-400">{cert.year}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="flex items-center justify-center mb-4">
              <Briefcase className="h-10 w-10 text-blue-600 dark:text-blue-400 mr-3" />
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professional Experience
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My journey in software development across various companies and projects.
            </p>
          </div>

          <div className="space-y-8" ref={experienceRef}>
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="experience-card-enhanced hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group animate-on-scroll"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                      <div
                        className={`bg-gradient-to-r ${exp.color} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="text-2xl text-white">{exp.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{exp.period}</span>
                      <span
                        className={`text-xs px-4 py-2 rounded-full transition-all duration-300 hover:scale-110 ${
                          exp.type === "Full-time"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                            : exp.type === "Contract"
                              ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                              : "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300"
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{exp.description}</p>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section with Pagination */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience in software development.
            </p>
            <div className="flex items-center justify-center mt-4 space-x-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Showing {startIndex + 1}-{endIndex} of {allProjects.length} projects
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Page {currentProjectPage + 1} of {totalPages}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentProjects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg project-card animate-on-scroll"
              >
                <CardContent className="p-0">
                  {/* Demo Video Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <ExternalLink className="h-12 w-12 mx-auto mb-2 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                        <p className="text-sm opacity-80">Demo Video</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full hover:scale-110 transition-transform duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 group-hover:border-blue-600 group-hover:text-blue-600 transition-all duration-300 bg-transparent hover:scale-105"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-4 animate-on-scroll">
              <Button
                variant="outline"
                onClick={prevProjectPage}
                disabled={currentProjectPage === 0}
                className={`flex items-center space-x-2 hover:scale-105 transition-all duration-300 bg-transparent ${
                  currentProjectPage === 0
                    ? "opacity-50 cursor-not-allowed hover:scale-100"
                    : "hover:bg-blue-50 dark:hover:bg-gray-700"
                }`}
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Previous</span>
              </Button>

              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <Button
                    key={i}
                    variant={currentProjectPage === i ? "default" : "outline"}
                    size="sm"
                    onClick={() => goToPage(i)}
                    className={`w-10 h-10 rounded-full transition-all duration-300 hover:scale-110 ${
                      currentProjectPage === i
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "hover:bg-blue-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                onClick={nextProjectPage}
                disabled={currentProjectPage === totalPages - 1}
                className={`flex items-center space-x-2 hover:scale-105 transition-all duration-300 bg-transparent ${
                  currentProjectPage === totalPages - 1
                    ? "opacity-50 cursor-not-allowed hover:scale-100"
                    : "hover:bg-blue-50 dark:hover:bg-gray-700"
                }`}
              >
                <span>Next</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. Let's connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-on-scroll">
              <div className="flex items-center space-x-4 contact-item glow-hover">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">muhammad.maaz@email.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 contact-item glow-hover">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 contact-item glow-hover">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg animate-on-scroll contact-form">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input
                        placeholder="John"
                        className="w-full hover:scale-105 transition-transform duration-300 focus:scale-105"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input
                        placeholder="Doe"
                        className="w-full hover:scale-105 transition-transform duration-300 focus:scale-105"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full hover:scale-105 transition-transform duration-300 focus:scale-105"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input
                      placeholder="Project Inquiry"
                      className="w-full hover:scale-105 transition-transform duration-300 focus:scale-105"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      className="w-full h-32 resize-none hover:scale-105 transition-transform duration-300 focus:scale-105"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover-glow-button">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">© 2024 Muhammad Maaz. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
