"use client"

import { Download, FileText, User, Briefcase, GraduationCap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react';

import { motion } from "framer-motion"

// Variants for reusable animations
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2, // Animate children one by one
    },
  },
}


const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

export default function ResumeSection() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/SameerRaza-CV.pdf";
    link.download = "SameerRaza_CV.pdf";
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
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
        >
          {/* Heading with icon */}
          <motion.div
            className="flex items-center justify-center mb-4"
            variants={itemVariants}
          >
            <FileText className="h-10 w-10 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Resume
            </h2>
          </motion.div>

          {/* Paragraph */}
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            A comprehensive overview of my professional journey, skills, and achievements.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Resume Preview Card */}
          <motion.div
            className="lg:col-span-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
              <Card className="resume-preview-card hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  {/* Header */}
                  <motion.div
                    className="text-center mb-8 pb-6 border-b border-gray-200 dark:border-gray-700"
                    variants={fadeInUp}
                  >
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/sameerrazaimage.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Sameer Raza</h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">Software Engineer</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                      sameerraza7764@gmail.com | +92 3162935161 | Karachi, Pakistan
                    </p>
                  </motion.div>

                  {/* Professional Summary */}
                  <motion.div className="resume-section" variants={fadeInUp}>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Professional Summary
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Accomplished Full Stack Developer specializing in Next.js, React.js, Node.js, and TypeScript. Proven track
                      record of delivering high-performance web applications and solving complex technical challenges. Expertise in
                      Docker, MongoDB, and Tailwind for building scalable, maintainable solutions. Passionate about clean code,
                      optimizing user experiences, and delivering impactful projects 🚀.
                    </p>
                  </motion.div>

                  {/* Experience */}
                  <motion.div className="resume-section" variants={fadeInUp}>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Briefcase className="h-4 w-4 text-blue-600 mr-3" />
                      Experience
                    </h4>
                    <div className="border-l-4 border-blue-500 dark:border-blue-800 pl-6 space-y-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white text-lg">React Developer - BRB Group</h5>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Nov 2024 - Present</p>
                      <ul className="text-xs text-gray-600 dark:text-gray-400 mt-4 list-inside">
                        {[
                          "Developed automated payroll and document management systems, enhancing operational efficiency.",
                          "Built an inventory management system, optimizing resource tracking and management processes.",
                          "Contributed to finance applications, automating workflows and improving operations.",
                          "Delivered scalable, user-centric solutions with cross-functional teams.",
                        ].map((task, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start mb-3"
                            variants={fadeInUp}
                          >
                            <CheckCircle className="h-3 w-3 mr-3 text-blue-500" />
                            {task}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Education */}
                  <motion.div className="resume-section" variants={fadeInUp}>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                      <GraduationCap className="h-4 w-4 text-blue-600 mr-3" />
                      Education
                    </h4>
                    <div className="border-l-2 border-blue-200 dark:border-blue-800 pl-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white text-sm">
                        B.S. Software Engineering - VU University
                      </h5>
                      <p className="text-xs text-gray-500 dark:text-gray-400">April 2025 - Present</p>
                    </div>
                  </motion.div>

                  {/* Skills */}
                  <motion.div className="resume-section" variants={fadeInUp}>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Award className="h-4 w-4 text-blue-600 mr-3" />
                      Technical Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Nextjs", "Nodejs", "Express", "MongoDB", "Firebase", "TypeScript", "Prisma", "Docker"].map(
                        (skill) => (
                          <motion.span
                            key={skill}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {skill}
                          </motion.span>
                        )
                      )}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Download Card */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
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
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="stats-card hover:shadow-xl transition-all duration-500">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white text-center">Quick Stats</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Experience", value: "2 Years", color: "text-blue-600 dark:text-blue-400" },
                      { label: "Projects", value: "15+", color: "text-green-600 dark:text-green-400" },
                      { label: "Certifications", value: "6", color: "text-purple-600 dark:text-purple-400" },
                      { label: "Technologies", value: "12+", color: "text-orange-600 dark:text-orange-400" },
                    ].map((stat, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</span>
                        <span className={`font-semibold ${stat.color}`}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}


