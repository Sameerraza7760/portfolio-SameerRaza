"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";

// Animation Variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutSection() {
  const particlesRef = useRef(null);

  // Full Particles.js Config (from your original code)
  useEffect(() => {
    if (typeof window !== "undefined" && particlesRef.current) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
      script.onload = () => {
        if (window.particlesJS) {
          window.particlesJS("particles-js", {
            particles: {
              number: {
                value: 80,
                density: { enable: true, value_area: 800 },
              },
              color: { value: "#3b82f6" },
              shape: {
                type: "polygon",
                polygon: { nb_sides: 6 },
              },
              opacity: {
                value: 0.5,
                anim: { enable: false },
              },
              size: {
                value: 3,
                random: true,
                anim: { enable: false },
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
                out_mode: "out",
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true,
              },
              modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
              },
            },
            retina_detect: true,
          });
        }
      };
      document.head.appendChild(script);
    }
  }, []);

  const education = [
    {
      degree: "B.S.C.S (Computer Science)",
      institution: "Virtual University of Pakistan",
      year: "2025 (April - Present)",
      type: "Bachelor's Degree",
      description:
        "Focused on software development methodologies, algorithms, and system design.",
      icon: "/images/VU.png",
    },
    {
      degree: "Computer Science",
      institution: "Superior Science College ShahFaisal",
      year: "2021-2023",
      type: "Higher Secondary",
      description:
        "Mathematics, Physics, and ComputerScience with engineering fundamentals.",
      gpa: "B Grade",
      icon: "/images/Sample_User_Icon.png",
    },
    {
      degree: "High School (Computer Science)",
      institution: "Al Kamran Public School",
      year: "2008-2021",
      type: "Secondary School",
      description:
        "Introduction to programming concepts and computer science principles.",
      gpa: "A-1 Grade",
      icon: "/images/alkamran.png",
    },
  ];

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
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Particles.js Background */}
      <div
        id="particles-js"
        ref={particlesRef}
        className="absolute inset-0 z-0"
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm a dedicated software engineer with a passion for creating
            efficient, scalable, and user-friendly applications.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
        >
          <div className="skills-tree-container">
            <div className="flex justify-center mb-12">
              <div className="skills-header bg-gray-900 dark:bg-gray-800 text-white px-8 py-4 rounded-lg border-2 border-blue-500 relative">
                <h3 className="text-2xl font-bold text-center">MY SKILLS</h3>
              </div>
            </div>

            <motion.div
              className="skills-grid space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              {/* Frontend */}
              <motion.div
                className="flex flex-wrap justify-center gap-4"
                variants={fadeInUp}
              >
                <span className="skill-badge">React.Js</span>
                <span className="skill-badge">Next.js</span>
                <span className="skill-badge">Tailwind CSS</span>
              </motion.div>

              {/* Backend */}
              <motion.div
                className="flex flex-wrap justify-center gap-4"
                variants={fadeInUp}
              >
                <span className="skill-badge">Node.js</span>
                <span className="skill-badge">Express.js</span>
                <span className="skill-badge">Prisma</span>
                <span className="skill-badge">TypeScript</span>
              </motion.div>

              {/* Database & Tools */}
              <motion.div
                className="flex flex-wrap justify-center gap-4"
                variants={fadeInUp}
              >
                <span className="skill-badge">MongoDB</span>
                <span className="skill-badge">PostgreSQL</span>
                <span className="skill-badge">Firebase</span>
                <span className="skill-badge">Docker</span>
                <span className="skill-badge">GitHub</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full mr-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <img
                          src={edu.icon}
                          className="w-14 h-14 rounded-md object-contain"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                              {edu.degree}
                            </h4>
                            <span className="text-sm bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full font-medium">
                              {edu.type}
                            </span>
                          </div>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-3">
                            {edu.institution}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {edu.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">
                              {edu.year}
                            </span>
                            {edu.gpa && (
                              <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                                {edu.gpa}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full mr-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-6">
                        <img
                          src={cert.icon}
                          alt={cert.title}
                          className="w-14 h-14 rounded-md object-contain"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                            {cert.title}
                          </h4>
                          <div className="flex justify-between items-center">
                            <p className="text-blue-600 dark:text-blue-400 font-semibold">
                              {cert.provider}
                            </p>
                            <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                              {cert.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
