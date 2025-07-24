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

  // Extended projects array with more projects and different link scenarios
  const allProjects = [
    {
      title: "Food Panda Clone",
      description:
        "🍽️ A full-stack food delivery platform built with React.js. Users can browse restaurants, place orders, and track them in real-time. The platform requires location access to place an order. Restaurants can manage their menus with full CRUD functionality and view or respond to incoming orders. A built-in chat system allows communication between restaurant admins and users for order support.",
      tech: ["React", "Tailwind", "Firebase", "Redux", "Typescript"],
      github: "https://github.com/Sameerraza7760/foodpanda-with-react",
      image: "images/Foodpanda-turns-Sialkot-pink.jpg",
      featured: false,
      demo: "https://food-panda-react-firebase.netlify.app/",
    },
    {
      title: "Ecommerce Store",
      description:
        "🛒 A feature-rich e-commerce web app where admins manage products using CRUD operations. Users can browse, search, and place orders seamlessly. The app includes real-time order status, user-admin chat, and secure Firebase integration for a fast and scalable experience. It ensures smooth operations for both users and admins with a focus on usability and performance and user for order support.",
      tech: ["React", "Firebase", "Tailwind", "Typescript", "Redux"],
      github: "https://github.com/Sameerraza7760/Ecommerce-website",
      demo: "https://sameerecommercewebsite.netlify.app/",
      image: "images/Coloshop-Free-Bootstrap-eCommerce-Website-Template.jpg",
      featured: true,
    },
    {
      title: "School Management System",
      github: "https://github.com/Sameerraza7760/School-manegement-system",
      description:
        "🎓 A web-based platform for managing school operations. Admins can add teachers, classes, and students. Teachers can assign homework, track attendance, and create quizzes. Students can submit assignments and communicate via chat, ensuring a smooth academic experience for all users. and both teachers and students can communicate via chat, ensuring a smooth academic experience for all users.",
      tech: ["React", "Firebase", "Typescript", "TailwindCss", "Redux"],
      demo: "https://schoolmanegementsyestem.netlify.app/",
      image: "images/schoolmanegement.avif",
      featured: true,
    },

    {
      title: "Hospital Management System",
      description:
        "🏥 A MERN-based hospital management app with Doctor and Patient roles. Patients can create appointment requests and receive real-time notifications via WebSockets. Doctors can accept, reschedule, or update appointments. The platform ensures smooth scheduling with live sync using Dockerized services",
      tech: ["React", "Tailwind", "Typescript", "Redux", "Node.js", "MongoDB", "Express", "Socket.io"],
      github: "https://github.com/Sameerraza7760/DoctorAppoinemnt",
      image: "images/dentacare-free-bootstrap-hospital-templates.jpg",
      featured: true,
    },

    {
      title: "Chat Application",
      description:
        "🏥This is a full-stack real-time chat application built using the MERN stack (MongoDB, Express.js, React, Node.js), powered by Socket.io for instant messaging and Zustand for global state management. The frontend is written in TypeScript, ensuring strong type safety and scalable component development.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Cloudinary", "Zustand", "tailwindcss", "typescript"],
      github: "https://github.com/Sameerraza7760/Chat-app",
      image: "images/chatapp.webp", // Make sure this path is correct
      featured: false,
    },
    {
      title: "True FeedBack",
      description: "📬 True Feedback is a modern full-stack web application that allows users to create and share anonymous feedback links, enabling secure and honest responses from peers, clients, or employees. Built as a freelance project, this app highlights my ability to develop robust user authentication systems, integrate AI for smart responses, and implement elegant UI using ShadCN and Tailwind CSS.",
      tech: ["Nextjs-FullStack", "MongoDB", "NextAuth", "Tailwindcss", "OpenAI", "Redux", "Shadcn"],
      github: "https://github.com/Sameerraza7760/TrueFeedback", // Unique URL
      image: "/images/true-feedback.webp", // Unique image
      featured: true,
    },
    {
      title: "Social Media App",
      description: "🚀 This is a full-stack social media application built with Next.js, TypeScript, and PostgreSQL, using Clerk for secure authentication. Users can sign up or log in, create posts with captions and images, like and comment on posts, send friend requests, and receive real-time notifications for all activities. The platform offers a modern, responsive UI with complete profile and friend management features.",
      tech: ["Nextjs-FullStack", "PostgreSQL","Prisma", "Typescript", "Shadcn", "Tailwindcss", "Clerk", "Cloudinary", "Redux"],
      github: "https://github.com/Sameerraza7760/socialmediaapp",
      image: "/images/instello-ultimate-photo-sharing-html-template.webp",
      featured: true,
    },
     {
      title:"Discount Store",
      description: "🚀 I built a Discount App in just 12 hours during a hackathon at my institute using React, Firebase, Firestore, Tailwind CSS, and Redux. The app supports both admin and user roles—admins can add discounted products, while users can browse, add to cart, and purchase. It features real-time updates, responsive design, and smooth state management, all completed within a single day.",
      tech: ["React", "Firebase","Tailwind", "Redux","Firebase-Firestore"],
      github: "https://github.com/Sameerraza7760/Discount-app",
      image: "/images/saylani.png",
      featured: false,
      demo: "https://hacatone-discount-store.netlify.app/",
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
                  {/* Project Image */}
                  <div className="relative h-48 rounded-t-lg overflow-hidden">
                    <img
                      src={project.image || `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(project.title)}`}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
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

                    {/* <div className="flex gap-3">
                      {project.github && !project.privateRepo && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 group-hover:border-blue-600 group-hover:text-blue-600 transition-all duration-300 bg-transparent hover:scale-105"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Button>
                      )}
                      {project.privateRepo && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 cursor-not-allowed opacity-70"
                          disabled
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Private Repo
                        </Button>
                      )}
                      {project.demo ? (
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300"
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          className="flex-1 bg-gray-300 dark:bg-gray-600 cursor-not-allowed opacity-70"
                          disabled
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo Not Available
                        </Button>
                      )}
                    </div> */}
                    <div className="flex gap-3">
                      {/* GitHub Button */}
                      {project.github ? (
                        project.privateRepo ? (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 cursor-not-allowed opacity-70"
                            disabled
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Private Repo
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 group-hover:border-blue-600 group-hover:text-blue-600 transition-all duration-300 bg-transparent hover:scale-105"
                            onClick={() => window.open(project.github, "_blank")}
                          >
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </Button>
                        )
                      ) : null}

                      {/* Demo Button */}
                      {project.demo ? (
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300"
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          className="flex-1 bg-gray-300 dark:bg-gray-600 cursor-not-allowed opacity-70"
                          disabled
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {project.github ? 'Demo Not Available' : 'No Links Available'}
                        </Button>
                      )}
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
                  {/* Project Image */}
                  <div className="relative h-48 rounded-t-lg overflow-hidden">
                    <img
                      src={project.image || `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(project.title)}`}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
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
                      {project.github && !project.privateRepo && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 group-hover:border-green-600 group-hover:text-green-600 transition-all duration-300 bg-transparent hover:scale-105"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Button>
                      )}
                      {project.privateRepo && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 cursor-not-allowed opacity-70"
                          disabled
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Private Repo
                        </Button>
                      )}
                      {project.demo ? (
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 hover:scale-105 transition-all duration-300"
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          className="flex-1 bg-gray-300 dark:bg-gray-600 cursor-not-allowed opacity-70"
                          disabled
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo Not Available
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
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
              <div className="rounded-lg mb-6 overflow-hidden">
                {/* <img
                  src={selectedProject.image || `/placeholder.svg?height=400&width=800&text=${encodeURIComponent(selectedProject.title)}`}
                  alt={`${selectedProject.title} screenshot`}
                  className="w-full h-auto max-h-96 object-contain"
                /> */}
                <img
                  src={project.image || `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(project.title)}`}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(project.title)}`;
                  }}
                />
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
                    {selectedProject.github && !selectedProject.privateRepo ? (
                      <Button
                        variant="outline"
                        onClick={() => window.open(selectedProject.github, "_blank")}
                        className="flex-1"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                    ) : selectedProject.privateRepo ? (
                      <Button variant="outline" className="flex-1 cursor-not-allowed opacity-70" disabled>
                        <Github className="h-4 w-4 mr-2" />
                        Private Repo
                      </Button>
                    ) : null}
                    {selectedProject.demo ? (
                      <Button
                        onClick={() => window.open(selectedProject.demo, "_blank")}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    ) : (
                      <Button className="flex-1 bg-gray-300 dark:bg-gray-600 cursor-not-allowed opacity-70" disabled>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo Not Available
                      </Button>
                    )}
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