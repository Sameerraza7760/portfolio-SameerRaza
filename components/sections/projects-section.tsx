"use client"

import { useState, useEffect } from "react"
import { Github, ExternalLink, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
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

  // Extended projects array with more projects
  const allProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/maaz/ecommerce-platform",
      demo: "https://example.com/demo1",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Socket.io", "Express", "PostgreSQL"],
      github: "https://github.com/maaz/task-manager",
      demo: "https://example.com/demo2",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      tech: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
      github: "https://github.com/maaz/weather-dashboard",
      demo: "https://example.com/demo3",
      featured: true,
    },
    {
      title: "Social Media Analytics",
      description:
        "A comprehensive analytics platform for social media metrics with real-time data visualization and reporting features.",
      tech: ["Vue.js", "D3.js", "Firebase", "Chart.js"],
      github: "https://github.com/maaz/social-analytics",
      demo: "https://example.com/demo4",
      featured: false,
    },
    {
      title: "AI Content Generator",
      description:
        "An AI-powered content generation tool that creates blog posts, social media content, and marketing copy using advanced NLP.",
      tech: ["Next.js", "OpenAI API", "Prisma", "Tailwind"],
      github: "https://github.com/maaz/ai-content-generator",
      demo: "https://example.com/demo5",
      featured: false,
    },
    {
      title: "Crypto Portfolio Tracker",
      description:
        "A real-time cryptocurrency portfolio tracking application with price alerts, news integration, and performance analytics.",
      tech: ["React", "CoinGecko API", "Redux", "Material-UI"],
      github: "https://github.com/maaz/crypto-tracker",
      demo: "https://example.com/demo6",
      featured: false,
    },
    {
      title: "Learning Management System",
      description:
        "A comprehensive LMS platform with course creation, student progress tracking, and interactive learning modules.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/maaz/lms-platform",
      demo: "https://example.com/demo7",
      featured: false,
    },
    {
      title: "Restaurant Booking System",
      description:
        "A modern restaurant reservation system with table management, customer notifications, and analytics dashboard.",
      tech: ["Vue.js", "Express", "MySQL", "Stripe"],
      github: "https://github.com/maaz/restaurant-booking",
      demo: "https://example.com/demo8",
      featured: false,
    },
  ]

  const featuredProjects = allProjects.filter((project) => project.featured)
  const otherProjects = allProjects.filter((project) => !project.featured)

  const openDemoModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeDemoModal = () => {
    setSelectedProject(null)
    setIsModalOpen(false)
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in software development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">🌟 Featured Work</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={`featured-${index}`}
                className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg project-card animate-on-scroll relative overflow-hidden bg-white dark:bg-gray-800"
              >
                {/* Featured Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    ⭐ Featured
                  </span>
                </div>

                <CardContent className="p-0">
                  {/* Demo Video Placeholder */}
                  <div
                    className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg overflow-hidden cursor-pointer"
                    onClick={() => openDemoModal(project)}
                  >
                    <img
                      src={`/placeholder.svg?height=200&width=400&text=${encodeURIComponent(project.title)}`}
                      alt={`${project.title} thumbnail`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <ExternalLink className="h-12 w-12 mx-auto mb-2 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                        <p className="text-sm opacity-80">View Demo</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors duration-300 text-gray-900 dark:text-white">
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
                        onClick={() => openDemoModal(project)}
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
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">💼 More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <Card
                key={`other-${index}`}
                className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg project-card animate-on-scroll bg-white dark:bg-gray-800"
              >
                <CardContent className="p-0">
                  {/* Demo Video Placeholder */}
                  <div
                    className="relative h-48 bg-gradient-to-br from-green-500 to-teal-600 rounded-t-lg overflow-hidden cursor-pointer"
                    onClick={() => openDemoModal(project)}
                  >
                    <img
                      src={`/placeholder.svg?height=200&width=400&text=${encodeURIComponent(project.title)}`}
                      alt={`${project.title} thumbnail`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <ExternalLink className="h-12 w-12 mx-auto mb-2 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                        <p className="text-sm opacity-80">View Demo</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-green-600 transition-colors duration-300 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full hover:scale-110 transition-transform duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 group-hover:border-green-600 group-hover:text-green-600 transition-all duration-300 bg-transparent hover:scale-105"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 hover:scale-105 transition-all duration-300"
                        onClick={() => openDemoModal(project)}
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
        </div>
      </div>

      {/* Demo Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeDemoModal}
                className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="p-6">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-white text-center">
                  <ExternalLink className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <p className="text-xl font-semibold mb-2">Project Demo</p>
                  <p className="text-sm opacity-80">Interactive demo would be displayed here</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Description</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{selectedProject.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Technologies</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={() => window.open(selectedProject.github, "_blank")}
                      className="flex-1"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                    <Button
                      onClick={() => window.open(selectedProject.demo, "_blank")}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
