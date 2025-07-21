"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  const skillsRef = useRef(null)
  const educationRef = useRef(null)
  const particlesRef = useRef(null)

  useEffect(() => {
    // Initialize Particles.js
    const initParticles = () => {
      if (typeof window !== "undefined" && particlesRef.current) {
        // Create particles.js script
        const script = document.createElement("script")
        script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
        script.onload = () => {
          if (window.particlesJS) {
            window.particlesJS("particles-js", {
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: "#3b82f6",
                },
                shape: {
                  type: "polygon",
                  stroke: {
                    width: 0,
                    color: "#000000",
                  },
                  polygon: {
                    nb_sides: 6,
                  },
                },
                opacity: {
                  value: 0.5,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#3b82f6",
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 6,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
            })
          }
        }
        document.head.appendChild(script)
      }
    }

    initParticles()

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

    return () => observer.disconnect()
  }, [])

  const education = [
    {
      degree: "B.S.C.S (Computer Science)",
      institution: "Virtual University of Pakistan",
      year: "2025 (April - Present)",
      type: "Bachelor's Degree",
      description: "Focused on software development methodologies, algorithms, and system design.",
      icon: "/images/VU.png",
    },
    {
      degree: "Computer Science",
      institution: "Superior Science College ShahFaisal",
      year: "2021-2023",
      type: "Higher Secondary",
      description: "Mathematics, Physics, and ComputerScience with engineering fundamentals.",
      gpa: "B Grade",
      icon: "/images/Sample_User_Icon.png",
    },
    {
      degree: "High School (Computer Science)",
      institution: "Al Kamran Public School",
      year: "2008-2021",
      type: "Secondary School",
      description: "Introduction to programming concepts and computer science principles.",
      gpa: "A-1 Grade",
      icon: "/images/alkamran.png",
    },
  ]

  const certifications = [
      {
      title: "FullStack Web Development",
      provider: "Saylani Mass It Training",
      year: "2023",
      icon: "/images/smit.png",
    },
  
    {
      title: "React Js",
      provider: "Coursera",
      year: "2023",
      icon: "/images/coursera_logo.jpeg",
      // color: "bg-cyan-500",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Particles.js Background */}
      <div id="particles-js" ref={particlesRef} className="absolute inset-0 z-0"></div>

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

        {/* Skills Section with Tree Structure - Using YOUR skills */}
        <div className="mb-16 animate-on-scroll" ref={skillsRef}>
          <div className="skills-tree-container">
            {/* Main Header */}
            <div className="flex justify-center mb-12">
              <div className="skills-header bg-gray-900 dark:bg-gray-800 text-white px-8 py-4 rounded-lg border-2 border-blue-500 relative">
                <h3 className="text-2xl font-bold text-center">MY SKILLS</h3>
                {/* Connecting lines */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-px h-8 bg-blue-500"></div>
                <div className="absolute -bottom-8 left-1/4 right-1/4 h-px bg-blue-500 top-full"></div>
                <div className="absolute -bottom-8 left-1/4 w-px h-8 bg-blue-500"></div>
                <div className="absolute -bottom-8 right-1/4 w-px h-8 bg-blue-500"></div>
              </div>
            </div>

            {/* Skills Grid - YOUR ACTUAL SKILLS */}
            <div className="skills-grid space-y-6">

              {/* Frontend Skills */}
              <div className="flex flex-wrap justify-center gap-4">
                <span className="skill-badge">React.Js</span>
                <span className="skill-badge">Next.js</span>
                <span className="skill-badge">Tailwind CSS</span>
              </div>

              {/* Backend Skills */}
              <div className="flex flex-wrap justify-center gap-4">
                <span className="skill-badge">Node.js</span>
                <span className="skill-badge">Express.js</span>
                <span className="skill-badge">Prisma</span>
                <span className="skill-badge">TypeScript</span>
              </div>

              {/* Database & Tools */}
              <div className="flex flex-wrap justify-center gap-4">

                <span className="skill-badge">MongoDB</span>
                <span className="skill-badge">PostgreSQL</span>
                <span className="skill-badge">Firebase</span>
                <span className="skill-badge">Docker</span>

                <span className="skill-badge">GitHub</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Education Section */}
          <div className="animate-on-scroll" ref={educationRef}>
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full mr-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="education-card-premium hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="bg-white p-4 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        {/* <span className="text-2xl filter drop-shadow-lg">{edu.icon}</span> */}
                        <img
                          src={edu.icon}

                          className="w-14 h-14 rounded-md object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {edu.degree}
                          </h4>
                          <span className="text-sm bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full font-medium">
                            {edu.type}
                          </span>
                        </div>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-3">{edu.institution}</p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{edu.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{edu.year}</span>
                          <span className="text-sm font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                            {edu.gpa}
                          </span>
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
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full mr-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="cert-card-premium hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-6">
                      <div
                        className={` p-3 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                      >
                        {/* <span className="text-white text-xl filter drop-shadow-sm">{cert.icon}</span> */}
                        <img
                          src={cert.icon}
                          alt={cert.title}
                          className="w-14 h-14 rounded-md object-contain"
                        />

                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {cert.title}
                        </h4>
                        <div className="flex justify-between items-center">
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">{cert.provider}</p>
                          <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                            {cert.year}
                          </span>
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
  )
}
