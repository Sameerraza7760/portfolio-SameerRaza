"use client"

import { useEffect, useRef } from "react"
import { Code, Zap, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  scrollToSection: (section: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const heroTitleRef = useRef(null)
  const heroSubtitleRef = useRef(null)
  const heroDescriptionRef = useRef(null)

  useEffect(() => {
    initializeAnimations()
  }, [])

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
  }

  return (
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
            Passionate about creating innovative solutions and building exceptional digital experiences. I specialize in
            full-stack development with a focus on modern web technologies.
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
  )
}
