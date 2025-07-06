"use client"

import { useEffect } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
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

  return (
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
                <p className="text-gray-600 dark:text-gray-400">maazm6387@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 contact-item glow-hover">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full hover:scale-110 transition-transform duration-300">
                <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">+92 3102400211</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 contact-item glow-hover">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full hover:scale-110 transition-transform duration-300">
                <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">Karachi, Pakistan</p>
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
  )
}
