"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  const skillsRef = useRef(null)
  const educationRef = useRef(null)

  useEffect(() => {
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

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="about-particles">
          {[...Array(30)].map((_, i) => (
            <div key={i} className={`about-particle about-particle-${i + 1}`}></div>
          ))}
        </div>
      </div>

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
                className="skill-card-premium hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 group"
              >
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${category.color} mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                    >
                      <span className="text-3xl filter drop-shadow-lg">{category.icon}</span>
                    </div>
                    <h4 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {category.category}
                    </h4>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="skill-item-premium flex items-center space-x-4 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-gray-700/50 transition-all duration-300 group-hover:scale-105 backdrop-blur-sm border border-transparent hover:border-white/20"
                      >
                        <div className="skill-icon-container">
                          <span className="text-2xl skill-icon-premium transition-all duration-300">{skill.icon}</span>
                        </div>
                        <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white">
                          {skill.name}
                        </span>
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
                      <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <span className="text-2xl filter drop-shadow-lg">{edu.icon}</span>
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
                        className={`${cert.color} p-3 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                      >
                        <span className="text-white text-xl filter drop-shadow-sm">{cert.icon}</span>
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
