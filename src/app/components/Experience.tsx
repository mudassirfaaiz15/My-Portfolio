import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Briefcase } from "lucide-react";
import { motion } from "motion/react";

import { experiences } from "@/data/experience";

export function Experience() {

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            <Briefcase className="w-8 h-8 text-orange-600 dark:text-orange-400" />
          </motion.div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 dark:from-rose-400 dark:via-orange-400 dark:to-amber-400 bg-clip-text text-transparent">Experience</h2>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                  transition: { type: "spring", stiffness: 300 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="border-l-4 border-l-orange-600 dark:border-l-orange-400 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all bg-white dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 dark:text-white">{exp.title}</CardTitle>
                    <CardDescription className="text-lg">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">{exp.company}</span> • {exp.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <motion.li
                          key={idx}
                          className="flex gap-3 text-gray-700 dark:text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <span className="text-orange-600 dark:text-orange-400 mt-1.5">•</span>
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
