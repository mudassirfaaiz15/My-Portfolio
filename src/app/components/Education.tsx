import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { GraduationCap, Award, Trophy } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { motion } from "motion/react";

export function Education() {
  const certifications = [
    "Oracle Cloud - Infrastructure 2025 Certified AI Foundations Associate",
    "NPTEL - Introduction to Industry 4.0 & IoT",
    "AWS Cloud Practitioner Essentials & Generative AI with Diffusion Models"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-amber-300/20 dark:bg-amber-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <GraduationCap className="w-8 h-8 text-orange-600 dark:text-orange-400" />
          </motion.div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 dark:from-rose-400 dark:via-orange-400 dark:to-amber-400 bg-clip-text text-transparent">Education & Certifications</h2>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Education */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.01,
                transition: { type: "spring", stiffness: 300 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="shadow-lg border-l-4 border-l-orange-600 dark:border-l-orange-400 hover:shadow-2xl hover:shadow-orange-500/30 transition-all bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Bachelor of Technology (B. Tech) in Information Technology</CardTitle>
                  <div className="text-gray-600 dark:text-gray-400">
                    <p className="font-semibold text-lg text-gray-800 dark:text-gray-200">Aditya Engineering College, Surampalem, India</p>
                    <p>2023 – 2027</p>
                    <motion.p
                      className="text-xl font-bold bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 dark:from-rose-400 dark:via-orange-400 dark:to-amber-400 bg-clip-text text-transparent mt-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      CGPA: 8.21 / 10
                    </motion.p>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Data Structures & Algorithms", "Database Management Systems", "Operating Systems", "Machine Learning", "Cloud Computing"].map((course, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.1, rotate: 3 }}
                      >
                        <Badge variant="secondary" className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                          {course}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.01,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className="shadow-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Award className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </motion.div>
                    <CardTitle className="text-2xl text-gray-900 dark:text-white">Certifications</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {certifications.map((cert, idx) => (
                      <motion.li
                        key={idx}
                        className="flex gap-3 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-orange-600 dark:text-orange-400 mt-1">✓</span>
                        <span>{cert}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Achievement */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
                rotate: 1,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className="shadow-lg bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-l-amber-600 dark:border-l-amber-400 hover:shadow-2xl hover:shadow-amber-500/30 transition-all border-amber-200 dark:border-amber-700">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <Trophy className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </motion.div>
                    <CardTitle className="text-2xl text-amber-900 dark:text-amber-100">Achievement</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <motion.p
                    className="text-lg font-semibold text-gray-800 dark:text-gray-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    🏆 GeeksforGeeks - Campus Brand Ambassador
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
