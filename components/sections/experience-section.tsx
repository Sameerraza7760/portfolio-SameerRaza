"use client";

import { motion } from "framer-motion";
import { Briefcase, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function ExperienceSection() {
  const experiences = [
    {
      title: "React Developer",
      company: "BRB Group",
      period: "Nov 2024 - Present",
      type: "Full-time",
      icon: "/images/brb_developers_logo.jpeg",
      description:
        "I led the frontend development of intuitive payroll, document, and finance management interfaces, streamlining workflows and enhancing data accuracy. I crafted a unified IT and inventory dashboard featuring ticketing, device monitoring, asset allocation, and automated hosting reminders. I also engineered the frontend for an AI-driven content automation tool that generates SEO-focused blog posts and schedules social media campaigns.",
      achievements: [
        "Developed automated payroll and document management systems, improving operational efficiency.",
        "Built an inventory management system, streamlining resource tracking and management.",
        "Contributed to finance applications, automating financial processes and enhancing company operations.",
        "Delivered scalable, user-friendly solutions, collaborating with cross-functional teams.",
        "Designed and developed AI-powered chatbots using OpenAI and custom APIs, reducing manual query handling by over 60%.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="experience-particles">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className={`exp-particle exp-particle-${i + 1}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: i * 0.05 }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full mr-4 shadow-lg">
              <Briefcase className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey in software development across various companies and
            projects.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="experience-card-premium hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 group">
                <CardContent className="p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div className="flex items-start space-x-6 mb-6 lg:mb-0">
                      <motion.div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 p-5 rounded-2xl shadow-xl"
                        whileHover={{ scale: 1.1, rotate: 6 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={exp.icon}
                          className="w-14 h-14 rounded-md object-contain"
                          alt={exp.company}
                        />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end">
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                        {exp.period}
                      </span>
                      <span
                        className={`text-sm px-6 py-3 rounded-full transition-all duration-300 hover:scale-110 font-medium shadow-md ${
                          exp.type === "Full-time"
                            ? "bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 text-green-800 dark:text-green-300"
                            : exp.type === "Contract"
                            ? "bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-800 dark:text-blue-300"
                            : "bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 text-orange-800 dark:text-orange-300"
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-lg">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <motion.div
                    className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                  >
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center text-lg">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-full mr-3">
                        <Star className="h-5 w-5 text-white" />
                      </div>
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="flex items-center text-gray-600 dark:text-gray-400"
                          variants={fadeInUp}
                        >
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4 flex-shrink-0"></div>
                          <span className="text-base">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
