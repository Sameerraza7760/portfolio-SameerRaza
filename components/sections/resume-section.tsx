"use client"

import { Download, FileText, User, Briefcase, GraduationCap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react';
export default function ResumeSection() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Muhammad-Maaz-CV.pdf";
    link.download = "Muhammad_Maaz_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="resume-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-on-scroll">
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Resume Preview */}
          <div className="lg:col-span-2 animate-on-scroll">
            <Card className="resume-preview-card hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8">
                {/* Resume Header */}
                <div className="text-center mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    {/* <User className="h-12 w-12 text-white" /> */}
                    <img
                      src="/images/sameerrazaimage.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Sameer Raza</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">Software Engineer</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    sameerraza7764@gmail.com | +92 3162935161 | Karachi , Pakistan
                  </p>
                </div>

                {/* Resume Sections Preview */}
                <div className="space-y-6">
                  {/* Professional Summary */}
                  <div className="resume-section">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Professional Summary
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Accomplished Full Stack Developer specializing in Next.js, React.js, Node.js, and TypeScript. Proven track
                      record of delivering high-performance web applications and solving complex technical challenges. Expertise
                      in Docker, MongoDB, and Tailwind for building scalable, maintainable solutions. Passionate about clean
                      code, optimizing user experiences through innovative design and best practices. Delivered key projects,
                      such as employee payroll systems, inventory management, and finance apps, driving operational efficiency
                      and streamlining business processes. Always eager to learn, grow, and tackle the toughest problems —
                      let’s connect and build something amazing! 🚀

                    </p>
                  </div>

                  {/* Experience Preview */}
                  <div className="resume-section">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Briefcase className="h-4 w-4 text-blue-600 mr-3" />
                      Experience
                    </h4>
                    <div className="space-y-6">
                      <div className="space-y-6">
                        <div className="border-l-4 border-blue-500 dark:border-blue-800 pl-6">
                          <h5 className="font-semibold text-gray-900 dark:text-white text-lg">
                            React Developer - BRB Group
                          </h5>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Nov 2024 - Present</p>
                          <ul className="text-xs text-gray-600 dark:text-gray-400 mt-4 list-inside">
                            <li className="flex items-start mb-3">
                              <CheckCircle className="h-3 w-3 mr-3 text-blue-500" /> {/* Heroicon */}
                              Developed automated payroll and document management systems, enhancing operational efficiency.
                            </li>
                            <li className="flex items-start mb-3">
                              <CheckCircle className="h-3 w-3 mr-3 text-blue-500" />
                              Built an inventory management system, optimizing resource tracking and management processes.
                            </li>
                            <li className="flex items-start mb-3">
                              <CheckCircle className="h-3 w-3 mr-3 text-blue-500" />
                              Contributed to finance applications, automating financial workflows and improving company operations.
                            </li>
                            <li className="flex items-start mb-3">
                              <CheckCircle className="h-3 w-3 mr-3 text-blue-500" />
                              Delivered scalable, user-centric solutions, collaborating with cross-functional teams to meet both internal and client requirements.
                            </li>

                          </ul>
                        </div>
                      </div>



                    </div>
                  </div>

                  {/* Education Preview */}
                  <div className="resume-section">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                      <GraduationCap className="h-4 w-4 text-blue-600 mr-3" />
                      Education
                    </h4>
                    <div className="border-l-2 border-blue-200 dark:border-blue-800 pl-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white text-sm">
                        B.S. Software Engineering - VU University
                      </h5>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        April 2025 - Present
                      </p>
                    </div>

                  </div>

                  {/* Skills Preview */}
                  <div className="resume-section">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Award className="h-4 w-4 text-blue-600 mr-3" />
                      Technical Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Nextjs","Nodejs","Express","MongoDB","Firebase", "TypeScript","Prisma","Docker"].map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Download Section */}
          <div className="space-y-6 animate-on-scroll">
            <Card className="download-card hover:shadow-xl transition-all duration-500">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Download className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Download Resume</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                  Get the complete PDF version with detailed information about my experience and skills.
                </p>
                <Button
                  onClick={downloadCV}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover-glow-button"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="stats-card hover:shadow-xl transition-all duration-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white text-center">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Experience</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">2 Years</span>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}


