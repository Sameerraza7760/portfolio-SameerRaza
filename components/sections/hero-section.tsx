"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Zap, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  scrollToSection: (section: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const heroTitleRef = useRef<HTMLHeadingElement | null>(null)
  const heroDescriptionRef = useRef<HTMLParagraphElement | null>(null)

  const [subtitleText, setSubtitleText] = useState("")
  const cursorRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Animate title
    const textTitle = "Hello, I'm Sameer Raza"
    const animateTitle = () => {
      if (!heroTitleRef.current) return
      heroTitleRef.current.innerHTML = textTitle
        .split("")
        .map((char, index) =>
          char === " "
            ? `<span class="space">&nbsp;</span>`
            : `<span class="char" style="animation-delay: ${index * 0.1}s">${char}</span>`
        )
        .join("")
    }

    animateTitle()
    const titleInterval = setInterval(animateTitle, 8000)

    // Animate subtitle with typing
    const fullSubtitle = "MERN Stack Developer • Focused on Clean Code & Scalable Systems"
    let index = 0
    const typeNext = () => {
      if (index <= fullSubtitle.length) {
        setSubtitleText(fullSubtitle.slice(0, index))
        index++
        setTimeout(typeNext, 80)
      } else {
        setTimeout(() => {
          index = 0
          setSubtitleText("")
          setTimeout(typeNext, 800)
        }, 3000)
      }
    }
    typeNext()

    // Animate description
    const descEl = heroDescriptionRef.current
    if (descEl) {
      const words = descEl.textContent?.split(" ") ?? []
      descEl.innerHTML = words
        .map(
          (word, index) =>
            `<span class="word" style="animation-delay: ${index * 0.1 + 2}s">${word}</span>`
        )
        .join(" ")
    }

    return () => {
      clearInterval(titleInterval)
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative">
      {/* Floating Icons */}
      <div className="absolute top-20 right-10 opacity-30 dark:opacity-20 code-float glow-illustration">
        <Code className="h-16 w-16 text-blue-500" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-30 dark:opacity-20 code-float-delayed glow-illustration">
        <Zap className="h-12 w-12 text-purple-500" />
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-30 dark:opacity-20 code-float-slow glow-illustration">
        <Rocket className="h-14 w-14 text-green-500" />
      </div>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div>
          <h1
            ref={heroTitleRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white hero-title-animated"
          >
            Hello, I'm Sameer Raza
          </h1>

          <p className="text-xl sm:text-2xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 min-h-[2.5rem] flex justify-center items-center">
            <span>{subtitleText}</span>
            <span
              ref={cursorRef}
              className="ml-1 w-[1px] h-6 bg-gray-600 dark:bg-gray-300 animate-blink"
            />
          </p>

          <p
            ref={heroDescriptionRef}
            className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed hero-description-wave"
          >
            As a seasoned full-stack developer, I specialize in designing and building high-performance, scalable digital solutions that deliver exceptional user experiences. With a deep mastery of modern web technologies, I am committed to driving innovation and transforming complex challenges into impactful results.
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
